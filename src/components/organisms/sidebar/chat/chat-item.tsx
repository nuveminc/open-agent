import { Link } from 'react-router-dom';
import { ChatMenu } from './chat-menu';

export interface ChatItemProps {
  title: string;
  id: string;
}

export const ChatItem: React.FC<ChatItemProps> = ({ title, id }) => {
  return (
    <div className="w-full pr-2 relative group">
      <Link
        to={`/c/${id}`}
        className="w-full flex justify-between rounded-xl px-3 py-2 bg-gray-200 dark:bg-gray-900 whitespace-nowrap text-ellipsis"
        draggable="false"
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
