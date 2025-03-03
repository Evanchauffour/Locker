import React from "react";

interface ComponentProps {
  className?: string;
}

export default function Chevron({ className = "" }: ComponentProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-plus transition-all duration-200 linear ${className}`}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
