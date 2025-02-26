import { BaseButtonOption } from './base-button-option';

export const ButtonGoodResponse: React.FC<object> = () => {
  const name = 'thumbsUp';
  return (
    <div aria-label={name} className="flex">
      <BaseButtonOption name={name} tooltip="Good Response" />
    </div>
  );
};
