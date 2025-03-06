import React from 'react';

type ImageIconProps = Readonly<{
  fileName: string;
  className: string;
}>;

export const ImageIcon: React.FC<ImageIconProps> = ({
  fileName,
  className,
}) => {
  return (
    // flex-shrink-0 mr-3
    <div className={className}>
      <img
        src={`/src/assets/${fileName}.png`}
        className="size-8 object-cover rounded-full -translate-y-[1px]"
        alt="profile"
        draggable="false"
      />
    </div>
  );
};
