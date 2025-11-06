// Set this component as a client component
"use client";
// Mateory Logo Requirements
import Image from "next/image";
import { useThemeLogo } from "../model";
import React from "react";
// Mateory Logo Props
interface Props {
  readonly width: number;
  readonly height: number;
  readonly className?: string;
}
// Mateory Logo Main Function
function MateoryLogo({ width, height, className }: Props) {
  // Get Theme Logo
  const themeLogo = useThemeLogo();
  // Returns Mateory Logo Component
  return (
    <Image
      src={themeLogo}
      alt="Mateory Logo"
      width={width}
      height={height}
      priority
      className={className}
    />
  );
}

export default MateoryLogo;
