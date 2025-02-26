import { ChangeEvent, useState } from 'react';
import { cn } from '@/lib/utils';

export const InputText: React.FC<{
  label: string;
  defaultValue: string;
  errorMsg: string;
  onChange: (text: string) => void;
}> = ({ label, defaultValue, errorMsg = 'Invalid Value', onChange }) => {
  const [value, setEmail] = useState(defaultValue);
  const [isValid, setIsValid] = useState(true);

  const errorState = 'border-2 border-red-500';

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    onChange(value);
  };

  const checkValid = () => {
    const valid = value === '';
    setIsValid(valid);
  };

  return (
    <div>
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="flex">
        <input
          type="text"
          value={value}
          onChange={inputChangeHandler}
          onBlur={checkValid}
          className={cn(
            'w-full rounded-md px-3 py-1 dark:bg-gray-850',
            !isValid && errorState
          )}
        />
      </div>
      <span className={cn('text-xs text-red-500', isValid ? 'hidden' : '')}>
        {errorMsg}
      </span>
    </div>
  );
};
