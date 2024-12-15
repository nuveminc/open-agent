import { Password } from '@/components/molecules/password';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export const PasswordConfirm: React.FC<object> = () => {
  const [isMatch, setIsMatch] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const changeNewHandler = (value: string) => {
    setNewPassword(value);
    setIsMatch(confirmPassword === value);
    console.log(isMatch, confirmPassword, newPassword);
  };

  const changeConfirmHandler = (value: string) => {
    setConfirmPassword(value);
    setIsMatch(newPassword === value);
    console.log(isMatch, newPassword, confirmPassword);
  };
  return (
    <>
      <Password label="New Password" value="" onChange={changeNewHandler} />
      <Password
        label="Confirm Password"
        value=""
        onChange={changeConfirmHandler}
      />
      <div className={cn('text-xs text-green-600', isMatch ? '' : 'hidden')}>
        Confirmed
      </div>
    </>
  );
};
