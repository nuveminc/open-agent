import { BaseButtonOption } from './base-button-option';

export const ButtonDelete: React.FC<object> = () => {
  const name = 'delete';
  return (
    <div aria-label={name} className="flex">
      <BaseButtonOption name={name} tooltip="Delete" />
    </div>
  );
};
