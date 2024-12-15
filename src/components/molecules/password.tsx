import { ChangeEvent, useState } from 'react';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';

export const Password: React.FC<{
  label: string;
  value: string;
  onChange?: (text: string) => void;
}> = ({ label, value, onChange }) => {
  const [password, setPassword] = useState(value);
  const [type, setType] = useState('password');
  const [isValid, setIsValid] = useState(true);

  const errorState = 'border-2 border-red-500';

  const toggleVisibility = (isVisible: boolean) => {
    const type = isVisible ? 'text' : 'password';
    setType(type);
  };

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setIsValid(validatePassword(value));
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div>
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="flex">
        <input
          type={type}
          value={password}
          onChange={inputChangeHandler}
          className={cn(
            'w-full rounded-md px-3 py-1 dark:bg-gray-850',
            !isValid && errorState
          )}
        />
        <div className="flex items-center ml-2 cursor-pointer">
          <span
            className={type === 'text' ? 'hidden' : ''}
            onClick={() => toggleVisibility(true)}
          >
            <Eye className="size-5" />
          </span>
          <span
            className={type === 'text' ? '' : 'hidden'}
            onClick={() => toggleVisibility(false)}
          >
            <EyeOff className="size-5" />
          </span>
        </div>
      </div>
      <span className={cn('text-xs text-red-500', isValid ? 'hidden' : '')}>
        A valid password requires at least 8 characters, upper case, and special
        character
      </span>
    </div>
  );
};
