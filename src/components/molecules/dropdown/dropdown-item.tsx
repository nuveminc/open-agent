import React from 'react';
import { DropdownMenuItem } from '../../ui/dropdown-menu';

export type DropdownItemProps = {
  children: React.ReactNode;
  onClick?: () => void;
};
export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  onClick
}: DropdownItemProps) => {
  return (
    <DropdownMenuItem
      onClick={onClick}
      className="flex rounded-md py-2 px-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
      style={{
        borderRadius: '.25rem',
        marginLeft: '.25rem',
        marginRight: '.25rem',
      }}
    >
      {children}
    </DropdownMenuItem>
  );
};
