import { ButtonCopy } from './button-copy';
import { ButtonDelete } from './button-delete';
import { ButtonEdit } from './button-edit';

export class ChatMessageProps {
  text: string = '';
  showDeleteButton?: boolean = false;
}
export const ChatMessage: React.FC<ChatMessageProps> = ({
  text,
  showDeleteButton,
}) => {
  return (
    <div className="w-full ">
      <div className="flex flex-col justify-between px-5 mb-3 max-w-5xl mx-auto rounded-lg group">
        <div className="flex w-full user-message">
          <div className="w-full overflow-hidden pl-1">
            <div className="chat-user w-full min-w-full markdown-prose">
              <div className="w-full">
                <div className="flex justify-end pb-1">
                  <div className="rounded-3xl max-w-[90%] px-5 py-2  bg-gray-50 dark:bg-gray-850 ">
                    <p>{text}</p>
                  </div>
                </div>
                <div className="flex justify-end text-gray-600 dark:text-gray-500">
                  <ButtonEdit />
                  <ButtonCopy />
                  {showDeleteButton && <ButtonDelete />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
