'use client';

import { memo } from 'react';

interface LoadingStateOverlayProps {
  isVisible: boolean;
}

const LoadingStateOverlay = memo(function LoadingStateOverlay({ isVisible }: LoadingStateOverlayProps) {
  if (!isVisible) return null;

  return <div className="fixed inset-0 bg-koel-neutral-100 z-[9998]" />;
});

export default LoadingStateOverlay;
