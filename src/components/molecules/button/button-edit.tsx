import { MessageType } from '@/types/messageType';

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.3"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          ></path>
        </svg>
      </button>
    </div>
  );
};
