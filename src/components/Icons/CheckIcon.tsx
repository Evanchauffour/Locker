import React from "react";

interface IconInterface {
  className?: string;
}

export default function CheckIcon({ className }: IconInterface) {
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
      className={`lucide lucide-check ${className}`}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
