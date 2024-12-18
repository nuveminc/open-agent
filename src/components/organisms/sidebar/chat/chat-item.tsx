import { Link } from 'react-router-dom';
import { ChatMenu } from './chat-menu';
import { cn } from '@/lib/utils';

export interface ChatItemProps {
  title: string;
  id: string;
  isSelected: boolean;
}

export const ChatItem: React.FC<ChatItemProps> = ({
  title,
  id,
  isSelected = false,
}) => {
  const selectedStyle = 'bg-gray-200 dark:bg-gray-800';
  const selected = isSelected ? selectedStyle : 'bg-gray-200 dark:bg-gray-950';
  return (
    <div className="w-full pr-2 relative group">
      <Link
        to={`/c/${id}`}
        className={cn(
          'w-full flex justify-between rounded-xl px-3 py-2 whitespace-nowrap text-ellipsis',
          selected
        )}
      >
        <div className="flex self-center flex-1 w-full">
          <div className="text-left self-center overflow-hidden w-full h-[20px]">
            {title}
          </div>
        </div>
      </Link>
      <ChatMenu />
    </div>
  );
};
