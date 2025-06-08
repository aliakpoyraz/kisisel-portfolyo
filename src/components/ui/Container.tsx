import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`py-16 bg-white dark:bg-[#0d1117] ${className}`}>
      {children}
    </div>
  );
}; 