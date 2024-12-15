import { Password } from '@/components/molecules/password';
import { PasswordConfirm } from './password-confirm';

export const PasswordSetting: React.FC<object> = () => {
  return (
    <div className="flex flex-col gap-1">
      <Password label="Current Password" value="" />
      <PasswordConfirm />
    </div>
  );
};
