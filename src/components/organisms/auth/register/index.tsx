import React, { useState } from 'react';
import { InputEmail } from '@/components/molecules/common/input-email';
import { InputPassword } from '@/components/molecules/common/input-password';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

type RegisterFormProps = {
  onSubmit: (email: string, password: string) => void;
};

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleConfirmPassword = (value: string) => {
    setPassword(value);
  };

  const handleValue = (value: string) => {
    setEmail(value);
  };

  const buttonHandler = () => {
    console.log(email, password);
    onSubmit(email, password);
  };
  return (
    <div className="flex flex-col gap-3">
      <div>
        <Label htmlFor="username" className="text-xs text-gray-500 mb-1 ml-1">
          User Name
        </Label>
        <Input
          id="username"
          value=""
          onChange={(e) => handleValue(e.target.value)}
        />
      </div>
      <div>
        <InputEmail label="Email" defaultValue="" onChange={handleEmail} />
      </div>
      <div>
        <InputPassword
          label="Password"
          defaultValue=""
          onChange={handlePassword}
        />
      </div>
      <div>
        <InputPassword
          label="Confirm Password"
          defaultValue=""
          onChange={handleConfirmPassword}
        />
      </div>
      <div className="flex flex-col items-center mt-2">
        <Button
          variant="outline"
          className="mt-3 hover:bg-gray-700"
          onClick={buttonHandler}
        >
          Register
        </Button>
      </div>
    </div>
  );
};
