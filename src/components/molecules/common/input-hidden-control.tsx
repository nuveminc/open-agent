import { cn } from '@/lib/utils';
import { ChangeEvent, useState } from 'react';
import { ClipboardCopy, Eye, EyeOff, RefreshCw } from 'lucide-react';

export const InputHiddenControl: React.FC<{
  value: string;
  onChange?: (value: string) => void;
  generateKey?: () => void;
}> = ({ value, onChange, generateKey }) => {
  const [inputValue, setinputValue] = useState<string>(value);
  const [type, setType] = useState<string>('password');

  const toggleVisibility = (isVisible: boolean) => {
    const type = isVisible ? 'text' : 'password';
    setType(type);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
    setinputValue(event.target.value);
  };

  const generateApiKeyHandler = () => {
    if (generateKey) {
      generateKey();
    }
  };

  return (
    <div className="flex items-center cursor-pointer">
      <input
        type={type}
        value={inputValue}
        onChange={onChangeHandler}
        className={cn('w-full rounded-md px-3 py-1 dark:bg-gray-850')}
      />
      {type === 'password' ? (
        <Eye
          className="ml-2 size-5"
          onClick={() => {
            toggleVisibility(true);
          }}
        />
      ) : (
        <EyeOff
          className="ml-2 size-5"
          onClick={() => {
            toggleVisibility(false);
          }}
        />
      )}
      <ClipboardCopy className="ml-2 size-5" />
      {generateKey && (
        <RefreshCw className="ml-2 size-5" onClick={generateApiKeyHandler} />
      )}
    </div>
  );
};
