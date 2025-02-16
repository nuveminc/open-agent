import { IconProps, icons } from './icon';

export const SvgIcon: React.FC<IconProps> = ({
  name,
  className = 'w-4 h-4',
}) => {
  const IconComponent = icons[name];
  return (
    <IconComponent
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
};
