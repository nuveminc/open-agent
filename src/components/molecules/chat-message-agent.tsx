import { MessageType } from '@/types/message.type';
import { ImageIcon } from '../atoms/image-icon';
import { ButtonEdit } from './button/button-edit';
import { ButtonReadAloud } from './button/button-read-aloud';
import { ButtonBadResponse } from './button/button-bad-response';
import { ButtonGenerationInfo } from './button/button-generation-info';
import { ButtonGoodResponse } from './button/button-good-response';
import { Icon } from '../atoms';
import { Remark } from 'react-remark';

type ChatMessageAgentProps = Readonly<{
  id: string;
  text: string;
  model: string;
  time: string;
}>;

export const ChatMessageAgent: React.FC<ChatMessageAgentProps> = ({
  id,
  text,
  model,
  time,
}) => {
  return (
    <div className="w-full mb-5">
      <div className="flex flex-col justify-between px-5 mb-3 max-w-5xl mx-auto rounded-lg group">
        <div
          className="flex w-full message-a2da5f86-8e58-4284-9394-5d9842c73902 svelte-vhcwlm"
          id={`message-${id}`}
        >
          <ImageIcon className="flex-shrink-0 mr-3" />
          <div className="w-full overflow-hidden pl-1">
            <div className="self-center font-semibold mb-0.5 line-clamp-1 contents">
              {model}
              <span className="self-center invisible group-hover:visible text-gray-400 text-xs font-medium uppercase ml-2 -mt-0.5">
                {time}
              </span>
            </div>
            <div>
              <div className="chat-assistant w-full min-w-full markdown-prose svelte-vhcwlm">
                <div>
                  <div className="w-full flex flex-col">
                    <p>
                      <Remark>{text}</Remark>
                    </p>
                  </div>
                </div>
              </div>{' '}
              <div className="flex justify-start overflow-x-auto buttons text-gray-600 dark:text-gray-500 mt-0.5 svelte-vhcwlm">
                <ButtonEdit messageType={MessageType.Assistant} />
                <div aria-label="Copy" className="flex">
                  <button className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition copy-response-button">
                    <Icon name="copy" />
                  </button>
                </div>
                <ButtonReadAloud />
                <ButtonGenerationInfo />
                <ButtonGoodResponse ariaLabel="" />
                <ButtonBadResponse ariaLabel="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
