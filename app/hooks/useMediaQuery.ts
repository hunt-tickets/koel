'use client';

import { useEffect, useState } from 'react';

export function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set initial value
    setIsMobile(window.innerWidth < breakpoint);
    setIsLoaded(true);

    // Handle resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return { isMobile, isLoaded };
}

export function useIsDesktop(breakpoint: number = 768) {
  const { isMobile, isLoaded } = useIsMobile(breakpoint);
  return { isDesktop: !isMobile, isLoaded };
}
