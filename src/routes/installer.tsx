import React from 'react';
import { InstallerPage } from '@/components/pages/InstallerPage';
import { useNavigate } from 'react-router-dom';

export const InstallerRoute: React.FC = () => {
  const navigate = useNavigate();

  const handleInstallComplete = () => {
    navigate('/');
  };

  return <InstallerPage onInstallComplete={handleInstallComplete} />;
};
