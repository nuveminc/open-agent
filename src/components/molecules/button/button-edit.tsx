import { Icon } from '@/components/atoms';
import { MessageType } from '@/types/message.type';

class ButtonEditProps {
  messageType?: MessageType = MessageType.User;
}

export const ButtonEdit: React.FC<ButtonEditProps> = ({ messageType }) => {
  const userMessageClass =
    messageType == MessageType.User ? 'edit-user-message-button' : '';
  return (
    <div aria-label="Edit" className="flex">
      <button
        className={
          'invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition' +
          userMessageClass
        }
      >
        <Icon name="edit" />
      </button>
    </div>
  );
};
