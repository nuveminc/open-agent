import { MessageType } from '@/types/message.type';
import { ImageIcon } from '../atoms/image-icon';
import { ButtonEdit } from './button/button-edit';
import { ButtonReadAloud } from './button/button-read-aloud';
import { ButtonBadResponse } from './button/button-bad-response';
import { ButtonGenerationInfo } from './button/button-generation-info';
import { ButtonGoodResponse } from './button/button-good-response';
import { Icon } from '../atoms';

class ChatMessageResponseProps {
  text: string = '';
}
export const ChatMessageResponse: React.FC<ChatMessageResponseProps> = ({
  text,
}) => {
  return (
    <div className="w-full ">
      <div className="flex flex-col justify-between px-5 mb-3 max-w-5xl mx-auto rounded-lg group">
        <div
          className="flex w-full message-a2da5f86-8e58-4284-9394-5d9842c73902 svelte-vhcwlm"
          id="message-a2da5f86-8e58-4284-9394-5d9842c73902"
        >
          <ImageIcon className="flex-shrink-0 mr-3" />
          <div className="w-full overflow-hidden pl-1">
            <div className="self-center font-semibold mb-0.5 line-clamp-1 contents">
              llama3.1:latest
              <span className="self-center invisible group-hover:visible text-gray-400 text-xs font-medium uppercase ml-0.5 -mt-0.5">
                10:01 am
              </span>
            </div>
            <div>
              <div className="chat-assistant w-full min-w-full markdown-prose svelte-vhcwlm">
                <div>
                  <div className="w-full flex flex-col">
                    <p>
                      {/* The Service Organization Control (SOC) 2 framework,
                      developed by the American Institute of Certified Public
                      Accountants (AICPA), contains five categories or "trust
                      services criteria" that an organization may elect to
                      apply. These five categories include: */}
                      {text}
                    </p>
                    <div className="my-2"></div>
                    <ol start={1}>
                      <li>
                        <strong>Security </strong>: The system and data are
                        protected against unauthorized access, use, disclosure,
                        modification, or destruction.
                      </li>
                      <li>
                        <strong>Availability </strong>: The system is available
                        for operation and processing within committed service
                        levels.
                      </li>
                      <li>
                        <strong>Processing Integrity </strong>: System
                        transactions and processes are complete, accurate,
                        timely, and authorized.
                      </li>
                      <li>
                        <strong>Privacy </strong>: Personal information is
                        collected, stored, used, retained, disclosed, or
                        destroyed in accordance with the entity's privacy
                        policy.
                      </li>
                    </ol>
                    <div className="my-2"></div>
                    <p>
                      Additionally, the AICPA also includes two optional
                      criteria, these are:{' '}
                    </p>
                    <div className="my-2"></div>
                    <ol start={5}>
                      <li>
                        <strong>Confidentiality (Optional) </strong>: The system
                        protects against unauthorized access to sensitive data
                        and ensures confidentiality.
                      </li>
                      <li>
                        <strong>
                          Integrity of Physical and Logical Assets (Optional){' '}
                        </strong>
                        : This is not really a "control" per se, but rather an
                        additional criterion for the Security category.
                      </li>
                    </ol>
                    <div className="my-2"></div>
                    <p>
                      Note that while SOC 2 contains five categories or
                      criteria, each entity being audited must choose which ones
                      are relevant to their operations. The controls used to
                      address these criteria can vary significantly depending on
                      the specific services offered and the risks associated
                      with those services.{' '}
                    </p>{' '}
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
