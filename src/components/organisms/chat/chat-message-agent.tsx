import { ImageIcon } from '../../atoms/image-icon';
import { ButtonEdit } from '../../molecules/button/chat/button-edit';
import { ButtonReadAloud } from '../../molecules/button/button-read-aloud';
import { ButtonBadResponse } from '../../molecules/button/chat/button-bad-response';
import { ButtonInfo } from '../../molecules/button/chat/button-info';
import { ButtonGoodResponse } from '../../molecules/button/chat/button-good-response';
import { Remark } from 'react-remark';
import { ButtonCopy } from '../../molecules/button/chat/button-copy';
import { ModelUsage } from '@/models/chat/chat-session.class.pm';

type ChatMessageAgentProps = Readonly<{
  id: string;
  text: string;
  model: string;
  time: string;
  usage: ModelUsage;
}>;

export const ChatMessageAgent: React.FC<ChatMessageAgentProps> = ({
  id,
  text,
  model,
  time,
  usage,
}) => {
  return (
    <div className="w-full mb-5">
      <div className="flex flex-col justify-between px-5 mb-3 max-w-5xl mx-auto rounded-lg group">
        <div className="flex w-full" id={`message-${id}`}>
          <ImageIcon fileName="favicon" className="flex-shrink-0 mr-3" />
          <div className="w-full overflow-hidden pl-1">
            <div className="self-center font-semibold mb-0.5 line-clamp-1 contents">
              {model}
              <span className="self-center invisible group-hover:visible text-gray-400 text-xs font-medium uppercase ml-2 -mt-0.5">
                {time}
              </span>
            </div>
            <div>
              <div className="chat-assistant w-full min-w-full markdown-prose">
                <div>
                  <div className="w-full flex flex-col">
                    <p>
                      <Remark>{text}</Remark>
                    </p>
                  </div>
                </div>
              </div>{' '}
              <div className="flex justify-start overflow-x-auto buttons text-gray-600 dark:text-gray-500 mt-0.5">
                <ButtonEdit />
                <ButtonCopy />
                <ButtonReadAloud />
                <ButtonInfo usage={usage} />
                <ButtonGoodResponse />
                <ButtonBadResponse />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
