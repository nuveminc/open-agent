import { MessageType } from '@/types/messageType';
import { ImageIcon } from '../atoms/image-icon';
import { ButtonEdit } from './button/button-edit';
import { ButtonReadAloud } from './button/button-read-aloud';
import { ButtonBadResponse } from './button/button-bad-response';
import { ButtonGenerationInfo } from './button/button-generation-info';
import { ButtonGoodResponse } from './button/button-good-response';

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
                {/* <div aria-label="Edit" className="flex">
                  <button className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition">
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
                </div> */}
                <ButtonEdit messageType={MessageType.Assistant} />
                <div aria-label="Copy" className="flex">
                  <button className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition copy-response-button">
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
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      ></path>
                    </svg>
                  </button>
                </div>
                <ButtonReadAloud />
                <ButtonGenerationInfo />
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
