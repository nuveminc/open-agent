import { DropdownMenuControl } from './dropdown-menu-control';

export const DropdownControl: React.FC<{
  text: string;
  triggerClassName?: string | undefined;
  contentClassName?: string | undefined;
  contentStyle?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ text, children, triggerClassName, contentClassName, contentStyle }) => {
  return (
    <DropdownMenuControl
      text={text}
      triggerClassName={triggerClassName || ''}
      contentClassName={contentClassName || ''}
      contentStyle={contentStyle || {}}
    >
      {children}
    </DropdownMenuControl>
  );
};
