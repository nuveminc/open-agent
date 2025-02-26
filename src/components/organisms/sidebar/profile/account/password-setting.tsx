import { Password } from '@/components/molecules/input/password';
import { PasswordConfirm } from './password-confirm';

export type PasswordProps = {
  value: string;
};
export const PasswordSetting: React.FC<PasswordProps> = ({
  value = '',
}: PasswordProps) => {
  return (
    <div className="flex flex-col gap-1">
      <Password label="Current Password" value={value} />
      <PasswordConfirm />
    </div>
  );
};
