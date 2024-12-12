import React from 'react';
import { DropdownMenuSeparator } from '../ui/dropdown-menu';

export const DropdownSeparator: React.FC<object> = () => {
  return (
    <DropdownMenuSeparator
      className="border-gray-100 dark:border-gray-800"
      style={{ borderTopWidth: '1px' }}
    />
  );
};
