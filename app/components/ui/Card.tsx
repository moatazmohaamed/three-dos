import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div 
      className={`
        bg-white/5 backdrop-blur-xl rounded-3xl p-8 
        border border-white/10 shadow-2xl
        ${hover ? 'transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-500/20' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
