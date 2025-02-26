import { BaseButtonOption } from './base-button-option';

export const ButtonCopy: React.FC<object> = () => {
  const name = 'copy';
  return (
    <div aria-label={name} className="flex">
      <BaseButtonOption name={name} tooltip="Copy" />
    </div>
  );
};
