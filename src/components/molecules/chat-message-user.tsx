import { DataFile } from '@/models/chat/chat-session.class.pm';
import { FileDisplayCard } from '../organisms/file-display-card';
import { ButtonCopy } from './button/chat/button-copy';
import { ButtonDelete } from './button/chat/button-delete';
import { ButtonEdit } from './button/chat/button-edit';

export type ChatMessageUserProps = Readonly<{
  text: string;
  index: number;
  files?: DataFile[];
  showDeleteButton?: boolean;
}>;

export const ChatMessageUser: React.FC<ChatMessageUserProps> = ({
  text = '',
  index,
  files,
  showDeleteButton = false,
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-between px-5 mb-3 max-w-5xl mx-auto rounded-lg group">
        <div className="flex w-full">
          <div className="w-full overflow-hidden pl-1">
            <div className="w-full min-w-full">
              <div className="w-full">
                <div className="flex flex-col justify-end pb-1">
                  {index === 0 && <FileDisplayCard files={files} />}

                  <div className="rounded-3xl px-5 py-2 bg-gray-50 dark:bg-gray-850">
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
