import { ButtonLogo } from '@/components/molecules/button/button-logo';
import React from 'react';

type LoadingPageProps = object;

export const LoadingPage: React.FC<LoadingPageProps> = () => {
  return (
    <div className="text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen max-h-[100dvh] overflow-auto flex flex-col justify-center items-center">
      <div className="mb-0.5 items-center">
        <ButtonLogo size="h-20 w-20" />
      </div>
      <div className="mb-10">Welcome to Open Agent</div>
    </div>
  );
};
