import {
  SettingsSelect,
  SettingsSelectOption,
} from '@/components/molecules/settings/settings-select';
import React, { useEffect, useState } from 'react';

type DependentDropdownsProps = Readonly<{
  typeOptions: SettingsSelectOption[];
  allItems: { [key: string]: SettingsSelectOption[] };
  onTypeChange?: (value: string) => void;
  onItemChange?: (value: string) => void;
}>;

export const DependentDropdowns: React.FC<DependentDropdownsProps> = ({
  typeOptions,
  allItems,
  onTypeChange,
  onItemChange,
}) => {
  const [selectedType, setSelectedType] = useState<string>(
    typeOptions[0].value
  );
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [availableItems, setAvailableItems] = useState<SettingsSelectOption[]>(
    []
  );

  useEffect(() => {
    // Set initial items based on default type
    const items = allItems[selectedType] || [];
    setAvailableItems(items);
    // Set default item
    if (items.length > 0) {
      setSelectedItem(items[0].value);
    }
  }, [allItems, selectedType]);

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    const items = allItems[value] || [];
    setAvailableItems(items);
    // Always set first item as default when type changes
    if (items.length > 0) {
      setSelectedItem(items[0].value);
      onItemChange?.(items[0].value);
    }
    onTypeChange?.(value);
  };

  const handleItemChange = (value: string) => {
    setSelectedItem(value);
    onItemChange?.(value);
  };

  return (
    <div className="flex w-full justify-between text-normal">
      <SettingsSelect
        defaultValue={selectedType}
        controlName="type"
        options={typeOptions}
        onChange={handleTypeChange}
      />
      <SettingsSelect
        defaultValue={selectedItem}
        controlName="item"
        options={availableItems}
        onChange={handleItemChange}
      />
    </div>
  );
};
