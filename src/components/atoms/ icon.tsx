import edit from '/public/edit.svg?react';
import clipboard from '/public/clipboard.svg?react';
import trashcan from '/public/trashcan.svg?react';
import audio from '/public/audio.svg?react';
import info from '/public/info.svg?react';
import thumbsDown from '/public/thumbs-down.svg?react';
import thumbsUp from '/public/thumbs-up.svg?react';
import plus from '/public/plus.svg?react';
import microphone from '/public/microphone.svg?react';
import headphones from '/public/headphones.svg?react';
import controls from '/public/controls.svg?react';
import toggle from '/public/toggle.svg?react';
import arrowDown from '/public/arrow-down.svg?react';
import magnifier from '/public/magnifying-glass.svg?react';
import ellipsis from '/public/ellipsis.svg?react';
import chatBubble from '/public/chat-bubble.svg?react';
import code from '/public/code.svg?react';
import gear from '/public/gear.svg?react';
import logout from '/public/logout.svg?react';
import avatar from '/public/avatar.svg?react';
import archive from '/public/archive.svg?react';
import checkmark from '/public/check-mark.svg?react';

const icons = {
  edit: edit,
  copy: clipboard,
  delete: trashcan,
  audio: audio,
  info: info,
  thumbsDown: thumbsDown,
  thumbsUp: thumbsUp,
  plus: plus,
  microphone: microphone,
  call: headphones,
  controls: controls,
  toggle: toggle,
  arrowDown: arrowDown,
  magnifier: magnifier,
  ellipsis: ellipsis,
  chatBubble: chatBubble,
  code: code,
  logout: logout,
  gear: gear,
  avatar: avatar,
  archive: archive,
  checkmark: checkmark,
} as const;

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = 'w-4 h-4',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = '2.3',
}) => {
  const IconComponent = icons[name];
  return (
    <IconComponent
      className={className}
      stroke={stroke}
      fill={fill}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
};
