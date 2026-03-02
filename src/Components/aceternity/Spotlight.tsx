"use client";

import React from "react";

export function Spotlight({
  className = "",
  fill = "white",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 848 848"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g filter="url(#filter0_f_9_137)">
        <circle cx="424" cy="424" r="250" fill={fill} fillOpacity="0.12" />
      </g>
      <defs>
        <filter
          id="filter0_f_9_137"
          x="0"
          y="0"
          width="848"
          height="848"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="90" result="effect1_foregroundBlur_9_137" />
        </filter>
      </defs>
    </svg>
  );
}