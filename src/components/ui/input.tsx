import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const theme = cn(
      'bg-gray-850',
      'ring-0',
      'ring-gray-850',
      'dark:bg-gray-850',
      'dark:text-gray-100',
      'focus:outline-none',
      'focus:ring-1',
      'focus:ring-gray-700',
      '[&:-webkit-autofill]:[transition-delay:9999s]'
    );
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md px-3 py-2 text-sm',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'placeholder:text-muted-foreground',
          // 'focus-visible:outline-none focus-visible:ring-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          theme,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
