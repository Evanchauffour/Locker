import React from "react";

interface InputProps {
  label?: string;
  click?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  isDark?: boolean;
}

export default function Buttons({
  label,
  click,
  children,
  disabled,
  className,
  isDark,
}: InputProps) {
  return (
    <button
      type="submit"
      className={`text-xs sm:text-base py-2 px-4 bg-primary-600 text-text rounded-md bg-gradient-to-b ${isDark ? "from-darkGray to-black border border-white border-opacity-20" : "from-primary to-secondary"} hover:opacity-80 ${disabled ? "cursor-not-allowed opacity-80 hover:opacity-80" : ""}${className}`}
      onClick={click}
      disabled={disabled}
    >
      {label}
      {children}
    </button>
  );
}
