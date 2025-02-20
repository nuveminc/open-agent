import { ChangeEvent, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type InputPasswordProps = Readonly<{
  defaultValue: string;
  label?: string;
  validation?: z.ZodString;
  onChange: (value: string) => void;
}>;

export const InputPassword: React.FC<InputPasswordProps> = ({
  defaultValue,
  label = 'Password',
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [type, setType] = useState('password');
  const [isValid, setIsValid] = useState(true);

  const toggleVisibility = (isVisible: boolean) => {
    const type = isVisible ? 'text' : 'password';
    setType(type);
  };

  const validatePassword = (password: string): boolean => {
    let success = true;
    if (password.length > 0) {
      const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      success = regex.test(password);
    }
    return success;
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    setInputValue(event.target.value);
  };

  const onBlurHandler = () => {
    setIsValid(validatePassword(inputValue));
  };

  return (
    <div>
      <Label htmlFor="password" className="text-xs text-gray-500 mb-1 ml-1">
        {label}
      </Label>
      <div className="relative">
        <Input
          id="password"
          type={type}
          value={inputValue}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <button
            type="button"
            onClick={() => toggleVisibility(type === 'password')}
            className="pointer-events-auto focus:outline-none"
          >
            {type === 'password' ? (
              <Eye
                className="h-5 w-5 text-gray-600 hover:text-gray-400 transition-colors"
                aria-hidden="true"
              />
            ) : (
              <EyeOff
                className="h-5 w-5 text-gray-600 hover:text-gray-400 transition-colors"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>
      <span
        className={cn(
          'text-xs text-red-500 text-wrap',
          isValid ? 'hidden' : ''
        )}
      >
        A valid password requires at least 8 characters, upper case, and at
        least one special character
      </span>
    </div>
  );
};
