import { ReactElement, ReactNode } from 'react';

export type Side = 'top' | 'right' | 'bottom' | 'left';
export type ShadTooltipProps = {
  delayDuration?: number;
  side?: Side;
  content: ReactNode;
  children: ReactNode;
  style?: string;
};
export type ShadToolTipType = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  content?: ReactNode | null;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  asChild?: boolean;
  children?: ReactElement;
  delayDuration?: number;
  styleClasses?: string;
  avoidCollisions?: boolean;
};
