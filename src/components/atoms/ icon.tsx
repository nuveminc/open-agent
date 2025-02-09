import edit from '/src/assets/edit.svg?react';
import clipboard from '/src/assets/clipboard.svg?react';
import trashcan from '/src/assets/trashcan.svg?react';
import audio from '/src/assets/audio.svg?react';
import info from '/src/assets/info.svg?react';
import thumbsDown from '/src/assets/thumbs-down.svg?react';
import thumbsUp from '/src/assets/thumbs-up.svg?react';
import plus from '/src/assets/plus.svg?react';
import microphone from '/src/assets/microphone.svg?react';
import headphones from '/src/assets/headphones.svg?react';
import controls from '/src/assets/controls.svg?react';
import toggle from '/src/assets/toggle.svg?react';
import arrowDown from '/src/assets/arrow-down.svg?react';
import magnifier from '/src/assets/magnifying-glass.svg?react';
import ellipsis from '/src/assets/ellipsis.svg?react';
import chatBubble from '/src/assets/chat-bubble.svg?react';
import code from '/src/assets/code.svg?react';
import gear from '/src/assets/gear.svg?react';
import logout from '/src/assets/logout.svg?react';
import avatar from '/src/assets/avatar.svg?react';
import archive from '/src/assets/archive.svg?react';
import checkmark from '/src/assets/check-mark.svg?react';
import upload from '/src/assets/upload.svg?react';
import download from '/src/assets/download.svg?react';
import xmark from '/src/assets/x-mark.svg?react';
import lightning from '/src/assets/lightning.svg?react';
import chevronUp from '/src/assets/chevron-up.svg?react';
import chevronDown from '/src/assets/chevron-down.svg?react';
import users from '/src/assets/users.svg?react';
import groups from '/src/assets/groups.svg?react';

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
  upload: upload,
  download: download,
  xmark: xmark,
  lightning: lightning,
  chevronUp: chevronUp,
  chevronDown: chevronDown,
  users: users,
  groups: groups,
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
