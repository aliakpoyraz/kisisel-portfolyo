import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
}) => {
  const hoverClass = hoverable
    ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg'
    : '';

  return (
    <div className={`bg-white dark:bg-[#161b22] rounded-lg shadow-md overflow-hidden ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({
  src,
  alt,
  className = '',
}) => {
  return (
    <div className="relative h-48 md:h-60">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-contain transition-transform duration-500 hover:scale-105 ${className}`}
      />
    </div>
  );
};

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`px-6 py-4 bg-slate-50 dark:bg-[#0d1117] ${className}`}>
      {children}
    </div>
  );
};