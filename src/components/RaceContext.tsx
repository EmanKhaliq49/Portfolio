"use client";

import React, { createContext, useContext, useState } from "react";

interface RaceContextType {
  raceStart: boolean;
  setRaceStart: (start: boolean) => void;
  sequenceComplete: boolean;
  setSequenceComplete: (complete: boolean) => void;
}

const RaceContext = createContext<RaceContextType | undefined>(undefined);

export function RaceProvider({ children }: { children: React.ReactNode }) {
  const [raceStart, setRaceStart] = useState(false);
  const [sequenceComplete, setSequenceComplete] = useState(false);

  return (
    <RaceContext.Provider value={{ raceStart, setRaceStart, sequenceComplete, setSequenceComplete }}>
      {children}
    </RaceContext.Provider>
  );
}

export function useRace() {
  const context = useContext(RaceContext);
  if (context === undefined) {
    throw new Error("useRace must be used within a RaceProvider");
  }
  return context;
}
