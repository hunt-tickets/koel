'use client';

import { useEffect, useState } from 'react';
import { useAppState } from '@/app/providers/AppStateProvider';

interface TransitionTimings {
  irisDuration: number;
  irisDelay: number;
  scaleDuration: number;
  scaleDelay: number;
  totalDuration: number;
}

export function useHeroTransition() {
  const { isLoading } = useAppState();
  const [showTransition, setShowTransition] = useState(false);

  const timings: TransitionTimings = {
    irisDuration: 1500,
    irisDelay: 200,
    scaleDuration: 1200,
    scaleDelay: 1500,
    totalDuration: 2800, // Total time for animation
  };

  useEffect(() => {
    if (!isLoading) {
      setShowTransition(true);

      const hideTimer = setTimeout(() => {
        setShowTransition(false);
      }, timings.totalDuration);

      return () => clearTimeout(hideTimer);
    }
  }, [isLoading, timings.totalDuration]);

  return { showTransition, timings };
}
