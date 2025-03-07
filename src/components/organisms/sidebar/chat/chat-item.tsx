import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChatMenu } from './chat-menu';
import { cn } from '@/lib/utils';

export type ChatItemProps = Readonly<{
  title: string;
  id: string;
  isSelected: boolean;
  onMenuClick: (action: string) => void;
}>;

export const ChatItem: React.FC<ChatItemProps> = ({
  title,
  id,
  isSelected = false,
  onMenuClick,
}) => {
  const [isItemSelected, setIsItemSelected] = useState(isSelected);
  const selectedStyle = 'bg-gray-200 dark:bg-gray-800 bg-transparent';
  const selected = isSelected
    ? selectedStyle
    : 'bg-gray-200 dark:bg-gray-950 bg-transparent';
  return (
    <div className="flex w-full pr-2 relative group">
      <Link
        to={`/c/${id}`}
        className={cn(
          'w-full flex rounded-xl px-3 py-2 whitespace-nowrap group-hover:bg-gray-200 dark:group-hover:bg-gray-800 bg-transparent',
          selected
        )}
        onClick={() => setIsItemSelected(!isItemSelected)}
        draggable={true}
      >
        <div className="flex self-center flex-1 w-full">
          <div className="text-left self-center overflow-hidden w-full h-[20px]">
            {title}
          </div>
        </div>
      </Link>
      <ChatMenu onClick={onMenuClick} />
    </div>
  );
};
