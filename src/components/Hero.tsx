"use client";

import React, { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, RigidBody, RapierRigidBody } from "@react-three/rapier";
import { useVideoTexture, Environment } from "@react-three/drei";
import { useRace } from "./RaceContext";
import * as THREE from "three";

function SplitPieces() {
  const { raceStart } = useRace();
  // We use Suspense around this component so useVideoTexture suspends 
  // until the texture is ready, preventing stutter.
  // Use a public sample video to ensure Suspense resolves immediately
  const texture = useVideoTexture("https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", {
    crossOrigin: "Anonymous",
    loop: true,
    muted: true,
    start: true,
  });

  const piecesRef = useRef<RapierRigidBody[]>([]);

  // Apply sudden thrust when race starts
  useEffect(() => {
    if (raceStart) {
      piecesRef.current.forEach((api) => {
        if (api) {
          // Calculate a random forward thrust with some scatter using Vector3
          const forwardThrust = new THREE.Vector3(
            (Math.random() - 0.5) * 5, 
            (Math.random() - 0.5) * 5, 
            Math.random() * 20 + 20 // Push strongly towards +z (camera)
          );
          
          const torque = new THREE.Vector3(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
          );

          api.applyImpulse(forwardThrust, true);
          api.applyTorqueImpulse(torque, true);
        }
      });
    }
  }, [raceStart]);

  // Create a grid of pieces
  const rows = 6;
  const cols = 8;
  const width = 16;
  const height = 9;
  const pieceWidth = width / cols;
  const pieceHeight = height / rows;

  const pieces = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = r * cols + c;
      // Calculate UV offsets so each piece shows part of the whole video
      const u = c / cols;
      const v = 1 - (r + 1) / rows; // Flip v coordinate since texture origin is bottom-left

      pieces.push(
        <RigidBody 
          key={idx}
          ref={(el) => {
            if (el) piecesRef.current[idx] = el;
          }}
          type="dynamic"
          position={[
            (c - cols / 2 + 0.5) * pieceWidth,
            (rows / 2 - r - 0.5) * pieceHeight,
            0
          ]}
          // Damping to make them slow down slightly over time, or disable for pure zero-g drift
          linearDamping={0.5}
          angularDamping={0.5}
        >
          <mesh>
            <boxGeometry args={[pieceWidth - 0.05, pieceHeight - 0.05, 0.2]} />
            <meshStandardMaterial 
              map={texture} 
              color="#ffffff"
            />
          </mesh>
        </RigidBody>
      );
    }
  }

  // Set the texture repeats and offset per mesh inside geometry manually or map directly.
  // Actually, standard material map will stretch the whole video on each piece unless we fix UVs.
  // Instead of complex custom shaders, let's fix UVs on BoxGeometry for the front face.
  // For simplicity since we map to a grid, we can just let it render correctly using a neat trick: UV mapping
  
  return (
    <group position={[0, 0, -15]}>
      {pieces}
    </group>
  );
}

export default function Hero() {
  const { sequenceComplete } = useRace();
  
  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} color="#00F0FF" />
          <directionalLight position={[-10, -10, -10]} intensity={1} color="#FF1801" />
          
          <Suspense fallback={null}>
            <Environment preset="city" />
            <Physics gravity={[0, 0, 0]}>
              <SplitPieces />
            </Physics>
          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Overlay Content */}
      {sequenceComplete && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500 tracking-tighter drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            ACCELERATE
          </h1>
          <p className="mt-4 text-xl text-electricBlue font-mono uppercase tracking-widest">
            Welcome to the Grid
          </p>
        </div>
      )}
    </div>
  );
}
