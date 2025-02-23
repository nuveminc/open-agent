import React, { useState } from 'react';
import { ButtonLogo } from '@/components/molecules/button/button-logo';
import { LoginForm } from '@/components/organisms/auth/login';
import { RegisterForm } from '@/components/organisms/auth/register';
import { useAuthPresenter } from '@/presenters/auth/useAuthPresenter';
import { router } from '@/routes';

type LoginProps = Readonly<object>;

export const Login: React.FC<LoginProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLogin] = useState<boolean>(false);
  const [register, setRegister] = useState<boolean>(false);
  const [action, setAction] = useState<string>('Register');
  const { login: loginFn } = useAuthPresenter();

  const handleRegister = () => {
    const actionType = action === 'Register' ? 'Login' : 'Register';
    setAction(actionType);
    setRegister(!register);
    setLogin(false);
  };

  const handleLogin = () => {
    loginFn();
    router.navigate('/');
  };
  return (
    <div className="text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen max-h-[100dvh] overflow-auto flex flex-col justify-center items-center">
      <div className="mb-0.5 items-center">
        <ButtonLogo size="h-20 w-20" />
      </div>
      <div className="mb-10">Welcome to Open Agent</div>
      <div className="w-[20rem]">
        {!register && <LoginForm onSubmit={handleLogin} />}
        {register && <RegisterForm onSubmit={handleRegister} />}
        <div
          className="text-center text-sm text-gray-500 mt-3 cursor-pointer"
          onClick={handleRegister}
        >
          {action}
        </div>
      </div>
    </div>
  );
};
