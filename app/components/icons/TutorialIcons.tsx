/**
 * KOEL Brand Icons - Tutorial Steps
 * Outlined style from brand manual (Presentación Gustav page 45)
 *
 * Icons for the refill tutorial section
 */

import React from 'react';
import { IconProps } from './types';

// Tutorial Step 1: Pod removal
export const Step1RemoveIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="8" y="2" width="8" height="20" rx="2" />
    <path d="M12 7v10M9 10l3-3 3 3" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);

// Tutorial Step 2: Pod insertion
export const Step2InsertIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="8" y="2" width="8" height="20" rx="2" />
    <path d="M12 7v10M9 14l3 3 3-3" />
    <circle cx="12" cy="5" r="1" />
  </svg>
);

// Tutorial Step 3: Base assembly/twist to close
export const Step3CloseIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="8" y="2" width="8" height="20" rx="2" />
    <path d="M12 12l3-3M12 12l-3-3M12 12v6" />
    <path d="M16 18c0 2.21-1.79 4-4 4s-4-1.79-4-4" strokeDasharray="2 2" />
  </svg>
);

// Alternative: Rotation/twist icon
export const RotateIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  strokeWidth = 2
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38L21.5 2" />
    <path d="M12 8v4l3 3" />
  </svg>
);
