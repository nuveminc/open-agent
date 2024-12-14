import { Icon } from '@/components/atoms';
import { DropdownMenuControl } from '@/components/molecules/dropdown/dropdown-menu-control';
import { SettingsDropdownOption } from '@/components/molecules/settings-select';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export const ModelSelector: React.FC<{
  defaultValue: SettingsDropdownOption;
  options: SettingsDropdownOption[];
  onChange: (value: SettingsDropdownOption) => void;
}> = ({ defaultValue, options, onChange }) => {
  const onSelect = (index: number) => {
    console.log(options[index]);
    onChange(options[index]);
  };
  const setItem = (item: SettingsDropdownOption, idx: number) => {
    return (
      <DropdownMenuItem
        onSelect={() => onSelect(idx)}
        textValue={item.value}
        className={cn(
          'flex line-clamp-1',
          'py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100',
          'hover:bg-gray-100 dark:hover:bg-gray-800',
          'rounded-lg cursor-pointer'
        )}
      >
        <div className="flex">
          {item.icon ? (
            <img
              src="/public/favicon.png"
              alt="Model"
              className="flex rounded-full size-5 mr-2"
            />
          ) : (
            <div className="mr-7"> </div>
          )}
          {item.name}
          {item.size && (
            <div className="flex ml-1.5 translate-y-[-2px]">
              <div aria-label={item.size} className="self-end">
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400 line-clamp-1">
                  {item.size}
                </span>
              </div>
            </div>
          )}
          {item.value === defaultValue.value && (
            <div className="ml-auto pr-2 md:pr-0">
              <Icon name="checkmark" />
            </div>
          )}
        </div>
      </DropdownMenuItem>
    );
  };
  return (
    <DropdownMenuControl
      text={defaultValue.name}
      triggerClassName="w-[31.25rem]"
      contentClassName="w-[31.25rem]"
    >
      {options.map((item, idx) => setItem(item, idx))}
    </DropdownMenuControl>
  );
};
