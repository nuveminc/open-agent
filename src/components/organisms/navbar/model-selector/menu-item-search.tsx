import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Search } from 'lucide-react';
import React from 'react';

type MenuItemSearchProps = Readonly<{
  onChange: (value: string) => void;
}>;

export const MenuItemSearch: React.FC<MenuItemSearchProps> = ({ onChange }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <DropdownMenuItem>
      <div
        className="flex items-center gap-2.5"
        onClick={(event) => event.stopPropagation()}
      >
        <Search className="size-4" />
        <input
          id="model-search-input"
          className="w-full text-sm bg-transparent outline-none"
          placeholder="Search a model"
          value={value}
          onChange={handleChange}
          onClick={(event) => event.stopPropagation()}
        />
      </div>
    </DropdownMenuItem>
  );
};
