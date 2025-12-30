'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface AppStateContextType {
  isLoading: boolean;
  isTransitioning: boolean;
  handleLoadingComplete: () => void;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
    setIsTransitioning(true);

    // Reset transition after animation completes
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppStateContext.Provider value={{ isLoading, isTransitioning, handleLoadingComplete }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider');
  }
  return context;
}
