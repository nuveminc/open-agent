import { BaseButtonOption } from './base-button-option';

export const ButtonBadResponse: React.FC<object> = () => {
  const name = 'thumbsDown';
  return (
    <div aria-label={name} className="flex">
      <BaseButtonOption name={name} tooltip="Bad Response" />
    </div>
  );
};
