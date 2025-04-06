import { Icon } from '@/components/atoms';
import { router } from '@/routes';
import React from 'react';

export const ButtonLogo: React.FC<{ size: string }> = ({ size }) => {
  let heightWidth = 'w-12 h-12';
  heightWidth = size ? size : heightWidth;
  return (
    <button onClick={() => { router.navigate('/#') }}  >
      <div aria-label="" className="flex">
        <Icon name="oaLogo" className={heightWidth} />
      </div>
    </button>
  );
};
