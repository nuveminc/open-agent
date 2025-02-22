import React, { useState } from 'react';
import { InputEmail } from '@/components/molecules/common/input-email';
import { InputPassword } from '@/components/molecules/common/input-password';
import { Button } from '@/components/ui/button';

type LoginFormProps = {
  onSubmit: () => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const loginHandler = () => {
    console.log(email, password);
    onSubmit();
  };
  return (
    <div>
      <div className="mb-2">
        <InputEmail label="Email" defaultValue="" onChange={handleEmail} />
      </div>
      <div>
        <InputPassword defaultValue="" onChange={handlePassword} />
      </div>
      <div className="flex flex-col items-center mt-2">
        <Button
          variant="outline"
          className="mt-3 hover:bg-gray-700"
          onClick={loginHandler}
        >
          Login
        </Button>
      </div>
    </div>
  );
};
