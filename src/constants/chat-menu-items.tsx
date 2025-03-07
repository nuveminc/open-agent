import {
  Archive,
  Bookmark,
  Download,
  Files,
  Pencil,
  Share,
  Trash2,
} from 'lucide-react';

export type MenuItem = Readonly<{
  label: string;
  action: string;
  icon: JSX.Element;
}>;

export const menuItems: MenuItem[] = [
  {
    label: 'Pin',
    action: 'pin',
    icon: <Bookmark />,
  },
  {
    label: 'Rename',
    action: 'rename',
    icon: <Pencil />,
  },
  {
    label: 'Clone',
    action: 'clone',
    icon: <Files />,
  },
  {
    label: 'Archive',
    action: 'archive',
    icon: <Archive />,
  },
  {
    label: 'Share',
    action: 'share',
    icon: <Share />,
  },
  {
    label: 'Download',
    action: 'download',
    icon: <Download />,
  },
  {
    label: 'Delete',
    action: 'delete',
    icon: <Trash2 />,
  },
];
