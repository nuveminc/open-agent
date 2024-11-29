import React from 'react';
import { Switch } from '@/components/ui/switch';

export interface ThemeProps {
  themes: {
    value: string;
    name: string;
  }[];
}
export const Notifications: React.FC<object> = () => {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center">
        <div>Notifications</div>
        <div className="flex items-center space-x-2">
          <Switch id="notifications" />
        </div>
      </div>
    </div>
  );
};
