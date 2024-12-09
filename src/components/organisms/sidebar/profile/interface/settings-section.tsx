import React from 'react';

export const SettingsSection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <>
      <div className="text-base">{title}</div>
      <div className="w-full overflow-y-auto overflow-x-hidden px-1">
        {children}
      </div>
    </>
  );
};
