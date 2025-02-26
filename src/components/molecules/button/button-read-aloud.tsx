import { BaseButtonOption } from './chat/base-button-option';

export const ButtonReadAloud: React.FC<object> = () => {
  const name = 'audio';
  return (
    <div aria-label={name} className="flex">
      <BaseButtonOption name={name} tooltip="Read Aloud" />
    </div>
  );
};
