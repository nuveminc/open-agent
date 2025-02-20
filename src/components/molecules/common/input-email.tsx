import { ChangeEvent, useState } from 'react';
import { cn } from '@/lib/utils';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const InputEmail: React.FC<{
  label: string;
  defaultValue: string;
  onChange: (text: string) => void;
}> = ({ label, defaultValue, onChange }) => {
  const [value, setValue] = useState(defaultValue);
  const [isValid, setIsValid] = useState(true);

  const emailSchema = z.string().email();

  const validateEmail = (email: string): boolean => {
    return emailSchema.safeParse(email).success;
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    onChange(value);
  };

  const onBlurHandler = () => {
    if (value === '') {
      setIsValid(true);
    } else {
      setIsValid(validateEmail(value));
    }
  };

  return (
    <div>
      <Label htmlFor="email" className="text-xs text-gray-500 mb-1 ml-1">
        {label}
      </Label>
      <div className="flex">
        <Input
          id="email"
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
      </div>
      <span
        className={cn('text-xs text-red-500 ml-1', isValid ? 'hidden' : '')}
      >
        Invalid email
      </span>
    </div>
  );
};
