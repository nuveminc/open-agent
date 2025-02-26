import React from 'react';

type ImageIconProps = Readonly<{
  className: string;
}>;

export const ImageIcon: React.FC<ImageIconProps> = ({ className }) => {
  return (
    // flex-shrink-0 mr-3
    <div className={className}>
      <img
        src="/src/assets/favicon.png"
        className="size-8 object-cover rounded-full -translate-y-[1px]"
        alt="profile"
        draggable="false"
      />
    </div>
  );
};
