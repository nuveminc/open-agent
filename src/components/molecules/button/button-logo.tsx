import { Icon } from '@/components/atoms';
import React from 'react';

export const ButtonLogo: React.FC<{ size: string }> = ({ size }) => {
  let heightWidth = 'w-12 h-12';
  heightWidth = size ? size : heightWidth;
  return (
    <button>
      <div aria-label="" className="flex">
        <Icon name="oaLogo" className={heightWidth} />
      </div>
    </button>
  );
};
