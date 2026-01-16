import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl";

  const variants = {
    primary:
      "bg-[#928BF5] cursor-pointer text-white hover:from-indigo-500 hover:to-cyan-500",
    secondary:
      "bg-white/10 backdrop-blur-md cursor-pointer text-white border border-white/20 hover:bg-white/20",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
