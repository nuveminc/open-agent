import React from 'react';
import ShadTooltip from '../common/shad-tooltip';
import { Icon } from '@/components/atoms';

type ButtonExportProps = Readonly<{
  tooltip?: string;
  onClick: () => void;
}>;

export const ButtonExport: React.FC<ButtonExportProps> = ({
  tooltip = 'Export',
  onClick,
}) => {
  const content = tooltip || 'Export';
  return (
    <div aria-label={content} className="flex">
      <ShadTooltip content={content}>
        <button
          onClick={onClick}
          className="p-2 rounded-xl hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 transition font-medium text-sm flex items-center space-x-1"
        >
          <Icon name="export" />
        </button>
      </ShadTooltip>
    </div>
  );
};
