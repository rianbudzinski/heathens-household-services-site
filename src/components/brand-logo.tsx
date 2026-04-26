"use client";

import Image from "next/image";
import { useState } from "react";
import { SITE } from "@/lib/site";

type BrandLogoProps = {
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ alt, width, height, className, priority = false }: BrandLogoProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      src={hasError ? "/brand-logo-fallback.svg" : SITE.logoUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      unoptimized
      onError={() => setHasError(true)}
    />
  );
}
