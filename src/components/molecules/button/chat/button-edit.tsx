import { BaseButtonOption } from './base-button-option';

export const ButtonEdit: React.FC<object> = () => {
  const name = 'edit';
  return (
    <div aria-label={name} className="flex">
      <BaseButtonOption name={name} tooltip="Edit" />
    </div>
  );
};
