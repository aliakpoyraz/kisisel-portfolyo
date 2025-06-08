import React from 'react';

interface TagProps {
  label: string;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  label,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-[#21262d] text-[#c9d1d9] dark:bg-[#21262d] dark:text-[#c9d1d9]',
    primary: 'bg-[#1f6feb] text-white dark:bg-[#1f6feb] dark:text-white',
    secondary: 'bg-[#238636] text-white dark:bg-[#238636] dark:text-white',
    accent: 'bg-[#9e6a03] text-white dark:bg-[#9e6a03] dark:text-white',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
  };
  
  return (
    <span 
      className={`inline-block rounded-full font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {label}
    </span>
  );
};