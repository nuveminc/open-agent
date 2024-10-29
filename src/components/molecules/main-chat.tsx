import { ImageIcon } from '../atoms/image-icon';
import { ButtonReadAloud } from './button-read-aloud';
import { ButtonBadResponse } from './ButtonBadResponse';
import { ButtonGenerationInfo } from './ButtonGenerationInfo';
import { ButtonGoodResponse } from './ButtonGoodResponse';
import { ChatMessage } from './chat-message';
import { ChatMessageResponse } from './chat-message-response';

export const MainChat = () => {
  return (
    <div
      className="pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0 max-w-full z-10 scrollbar-hidden "
      id="messages-container"
    >
      {/* main content content scrolling overflow container */}
      <div className="h-full w-full flex flex-col pt-2 pb-4">
        {/* main content scrolling section */}
        <div className="h-full flex">
          <div className="w-full pt-2">
            {/* chat message section */}
            <ChatMessage text="How many controls are in the SOC2 framework?" />
            {/* chat message response */}
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
                              The Service Organization Control (SOC) 2
                              framework, developed by the American Institute of
                              Certified Public Accountants (AICPA), contains
                              five categories or "trust services criteria" that
                              an organization may elect to apply. These five
                              categories include:{' '}
                            </p>
                            <div className="my-2"></div>
                            <ol start={1}>
                              <li>
                                <strong>Security </strong>: The system and data
                                are protected against unauthorized access, use,
                                disclosure, modification, or destruction.
                              </li>
                              <li>
                                <strong>Availability </strong>: The system is
                                available for operation and processing within
                                committed service levels.
                              </li>
                              <li>
                                <strong>Processing Integrity </strong>: System
                                transactions and processes are complete,
                                accurate, timely, and authorized.
                              </li>
                              <li>
                                <strong>Privacy </strong>: Personal information
                                is collected, stored, used, retained, disclosed,
                                or destroyed in accordance with the entity's
                                privacy policy.
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
                                <strong>Confidentiality (Optional) </strong>:
                                The system protects against unauthorized access
                                to sensitive data and ensures confidentiality.
                              </li>
                              <li>
                                <strong>
                                  Integrity of Physical and Logical Assets
                                  (Optional){' '}
                                </strong>
                                : This is not really a "control" per se, but
                                rather an additional criterion for the Security
                                category.
                              </li>
                            </ol>
                            <div className="my-2"></div>
                            <p>
                              Note that while SOC 2 contains five categories or
                              criteria, each entity being audited must choose
                              which ones are relevant to their operations. The
                              controls used to address these criteria can vary
                              significantly depending on the specific services
                              offered and the risks associated with those
                              services.{' '}
                            </p>{' '}
                          </div>
                        </div>
                      </div>{' '}
                      <div className="flex justify-start overflow-x-auto buttons text-gray-600 dark:text-gray-500 mt-0.5 svelte-vhcwlm">
                        <div aria-label="Edit" className="flex">
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                              ></path>
                            </svg>
                          </button>
                        </div>
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
                                stroke-linecap="round"
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
            <ChatMessage
              text="How many total controls if all 6 categories are relevant. Security, Availability, Processing Integrity, Privay, Confidentiality, and Integrity"
              showDeleteButton={true}
            />
            <ChatMessageResponse text="The Service Organization Control (SOC) 2 framework, developed by the American Institute of Certified Public Accountants (AICPA), contains five categories or trust services criteria that an organization may elect to apply. These five categories include:" />
            {/* <div className="w-full ">
              <div className="flex flex-col justify-between px-5 mb-3 max-w-5xl mx-auto rounded-lg group">
                <div
                  className="flex w-full message-97538868-48ae-4828-8be1-934f46fa3aac svelte-vhcwlm"
                  id="message-97538868-48ae-4828-8be1-934f46fa3aac"
                >
                  <ImageIcon className="flex-shrink-0 mr-3" />
                  <div className="w-full overflow-hidden pl-1">
                    <div className="self-center font-semibold mb-0.5 line-clamp-1 contents">
                      llama3.1:latest{' '}
                      <span className="self-center invisible group-hover:visible text-gray-400 text-xs font-medium uppercase ml-0.5 -mt-0.5">
                        10:04 am
                      </span>
                    </div>
                    <div>
                      {' '}
                      <div className="chat-assistant w-full min-w-full markdown-prose svelte-vhcwlm">
                        <div>
                          <div className="w-full flex flex-col">
                            <p>
                              If an organization chooses to apply all six
                              categories (Security, Availability, Processing
                              Integrity, Privacy, Confidentiality, and Integrity
                              of Physical and Logical Assets), the SOC 2
                              framework would contain a total of{' '}
                              <strong>77 controls </strong>.{' '}
                            </p>
                            <div className="my-2"></div>
                            <p>
                              These 77 controls are categorized into four main
                              types:{' '}
                            </p>
                            <div className="my-2"></div>
                            <ol start={1}>
                              <li>
                                <strong>Controls </strong>: These are specific
                                procedures or activities that are designed to
                                prevent or detect misstatements in financial
                                statements.
                              </li>
                              <li>
                                <strong>Policies </strong>: These are the rules,
                                regulations, and standards that guide an
                                organization's operations and control
                                environment.
                              </li>
                              <li>
                                <strong>Procedures </strong>: These are the
                                steps or actions taken by personnel to carry out
                                policies or controls.
                              </li>
                              <li>
                                <strong>Attributes </strong>: These are
                                characteristics of a control, such as frequency,
                                timing, documentation, or monitoring.
                              </li>
                            </ol>
                            <div className="my-2"></div>
                            <p>
                              These 77 controls can be further broken down into
                              more detailed sub-controls, but I've provided the
                              high-level overview.{' '}
                            </p>
                            <div className="my-2"></div>
                            <p>
                              Please note that while these numbers may vary
                              slightly depending on the specific SOC 2 report
                              and the organization being audited, 77 is a
                              commonly cited total number of controls for all
                              six categories.{' '}
                            </p>{' '}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-start overflow-x-auto buttons text-gray-600 dark:text-gray-500 mt-0.5 svelte-vhcwlm">
                        <div aria-label="Edit" className="flex">
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                              ></path>
                            </svg>
                          </button>
                        </div>
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div aria-label="Read Aloud" className="flex">
                          <button
                            id="speak-button-97538868-48ae-4828-8be1-934f46fa3aac"
                            className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                              ></path>
                            </svg>
                          </button>
                        </div>{' '}
                        <div
                          aria-label="response_token/s: 42.88 tokens<br/>prompt_token/s: 542.87 tokens<br/> total_duration: 5763.29ms<br/> load_duration: 28.82ms<br/> prompt_eval_count: 321<br/>  prompt_eval_duration: 591.31ms<br/>  eval_count: 214<br/> eval_duration: 4990.77ms<br/> approximate_total: 5s"
                          className="flex"
                        >
                          <div aria-label="Generation Info" className="flex">
                            <button
                              className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition whitespace-pre-wrap"
                              id="info-97538868-48ae-4828-8be1-934f46fa3aac"
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
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div aria-label="Good Response" className="flex">
                          <button className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg  dark:hover:text-white hover:text-black transition">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2.3"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                            </svg>
                          </button>
                        </div>
                        <div aria-label="Bad Response" className="flex">
                          <button className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg  dark:hover:text-white hover:text-black transition">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2.3"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <ChatMessage
              text="How many are there all inclusive of controls and subcontrols"
              showDeleteButton={true}
            />
            <div className="w-full ">
              <div className="flex flex-col justify-between px-5 mb-3 max-w-5xl mx-auto rounded-lg group">
                <div
                  className="flex w-full message-84d0cddb-4b3a-45f0-8335-6f1550809319 svelte-vhcwlm"
                  id="message-84d0cddb-4b3a-45f0-8335-6f1550809319"
                >
                  <ImageIcon className="flex-shrink-0 mr-3" />
                  <div className="w-full overflow-hidden pl-1">
                    <div className="self-center font-semibold mb-0.5 line-clamp-1 contents">
                      llama3.1:latest{' '}
                      <span className="self-center invisible group-hover:visible text-gray-400 text-xs font-medium uppercase ml-0.5 -mt-0.5">
                        10:04 am
                      </span>
                    </div>
                    <div>
                      <div className="chat-assistant w-full min-w-full markdown-prose svelte-vhcwlm">
                        <div>
                          <div className="w-full flex flex-col">
                            <p>
                              According to the AICPA's SOC 2 guidelines, when
                              including <strong>sub-controls </strong>, the
                              total number of <strong>controls </strong> for all
                              six categories (Security, Availability, Processing
                              Integrity, Privacy, Confidentiality, and
                              Integrity) is approximately:{' '}
                            </p>
                            <div className="my-2"></div>
                            <p>
                              <strong>247-261 </strong>
                            </p>
                            <div className="my-2"></div>
                            <p>
                              These numbers represent the total number of
                              controls, including sub-controls, that are
                              designed to prevent or detect misstatements in
                              financial statements.{' '}
                            </p>
                            <div className="my-2"></div>
                            <p>
                              Here's a breakdown of the approximate number of
                              controls for each category:{' '}
                            </p>
                            <div className="my-2"></div>
                            <ol start={1}>
                              <li>
                                <strong>Security </strong>: 40-45 controls
                              </li>
                              <li>
                                <strong>Availability </strong>: 25-30 controls
                              </li>
                              <li>
                                <strong>Processing Integrity </strong>: 20-25
                                controls
                              </li>
                              <li>
                                <strong>Privacy </strong>: 35-40 controls
                              </li>
                              <li>
                                <strong>Confidentiality (optional) </strong>:
                                15-20 controls
                              </li>
                              <li>
                                <strong>
                                  Integrity of Physical and Logical Assets
                                  (optional){' '}
                                </strong>
                                : 10-15 controls
                              </li>
                            </ol>
                            <div className="my-2"></div>
                            <p>
                              Keep in mind that these numbers may vary slightly
                              depending on the specific SOC 2 report, the
                              organization being audited, and the type of
                              services provided. However, 247-261 is a commonly
                              cited total number of controls for all six
                              categories.{' '}
                            </p>
                            <div className="my-2"></div>
                            <p>
                              It's worth noting that the AICPA provides a
                              detailed control matrix and guidelines for each
                              category, which can be used to identify and
                              implement these controls.{' '}
                            </p>{' '}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-start overflow-x-auto buttons text-gray-600 dark:text-gray-500 mt-0.5 svelte-vhcwlm">
                        <div aria-label="Edit" className="flex">
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                              ></path>
                            </svg>
                          </button>
                        </div>
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div aria-label="Read Aloud" className="flex">
                          <button
                            id="speak-button-84d0cddb-4b3a-45f0-8335-6f1550809319"
                            className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                              ></path>
                            </svg>
                          </button>
                        </div>{' '}
                        <div
                          aria-label="response_token/s: 43.13 tokens<br/>prompt_token/s: 2075.25 tokens<br/>total_duration: 6525.63ms<br/>load_duration: 25.69ms<br/>prompt_eval_count: 556<br/>prompt_eval_duration: 267.92ms<br/>eval_count: 256<br/> eval_duration: 5935.91ms<br/>approximate_total: 6s"
                          className="flex"
                        >
                          <div aria-label="Generation Info" className="flex">
                            <button
                              className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition whitespace-pre-wrap"
                              id="info-84d0cddb-4b3a-45f0-8335-6f1550809319"
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
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div aria-label="Good Response" className="flex">
                          <button className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg  dark:hover:text-white hover:text-black transition">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2.3"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                            </svg>
                          </button>
                        </div>
                        <div aria-label="Bad Response" className="flex">
                          <button className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg  dark:hover:text-white hover:text-black transition">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2.3"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ChatMessage
              text="What is the difference between SOC 2 Type 1 and SOC 2 Type 2?"
              showDeleteButton={true}
            />
            <div className="w-full ">
              <div className="flex flex-col justify-between px-5 mb-3 max-w-5xl mx-auto rounded-lg group">
                <div
                  className="flex w-full message-4392ee9f-5b13-4954-a238-5a6d234dd989 svelte-vhcwlm"
                  id="message-4392ee9f-5b13-4954-a238-5a6d234dd989"
                >
                  <ImageIcon className="flex-shrink-0 mr-3" />
                  <div className="w-full overflow-hidden pl-1">
                    <div className="self-center font-semibold mb-0.5 line-clamp-1 contents">
                      llama3.1:latest{' '}
                      <span className="self-center invisible group-hover:visible text-gray-400 text-xs font-medium uppercase ml-0.5 -mt-0.5">
                        10:06 am
                      </span>
                    </div>
                    <div>
                      <div className="chat-assistant w-full min-w-full markdown-prose svelte-vhcwlm">
                        <div>
                          <div className="w-full flex flex-col">
                            <p>
                              SOC 2 (Service Organization Control 2) reports
                              come in two types: <strong>Type 1 </strong> and{' '}
                              <strong>Type 2 </strong>.{' '}
                            </p>
                            <div className="my-2"></div>
                            <p>The main differences between them are: </p>
                            <div className="my-2"></div>
                            <p>
                              <strong>Type 1 (SOC 2 - Description): </strong>
                            </p>
                            <div className="my-2"></div>
                            <ul>
                              <li>
                                Provides a description of the organization's
                                system and controls as of a specific date.
                              </li>
                              <li>
                                Assesses the design of the controls, but not
                                their operating effectiveness.
                              </li>
                              <li>
                                Includes management's written assertion that the
                                system is suitably designed to meet the
                                specified criteria.
                              </li>
                              <li>Typically takes 5-10 days to complete.</li>
                              <li>
                                The scope is usually limited to the dates of the
                                report (e.g., January 1, 2022, through February
                                28, 2022).
                              </li>
                            </ul>
                            <div className="my-2"></div>
                            <p>
                              <strong>Type 2 (SOC 2 - Examination): </strong>
                            </p>
                            <div className="my-2"></div>
                            <ul>
                              <li>
                                Provides an examination of both the design and
                                operating effectiveness of the organization's
                                controls over a specified period.
                              </li>
                              <li>
                                Assesses whether the controls were in place and
                                functioning as designed throughout the reporting
                                period.
                              </li>
                              <li>
                                Includes management's written assertion that the
                                system was suitably designed and operated
                                effectively to meet the specified criteria.
                              </li>
                              <li>
                                Typically takes 30-60 days or more to complete,
                                depending on the complexity of the organization
                                and its systems.
                              </li>
                              <li>
                                The scope is usually broader than Type 1,
                                covering a full fiscal year or similar period
                                (e.g., January 1, 2022, through December 31,
                                2022).
                              </li>
                            </ul>
                            <div className="my-2"></div>
                            <p>In summary: </p>
                            <div className="my-2"></div>
                            <ul>
                              <li>
                                SOC 2 Type 1 provides a snapshot of an
                                organization's controls as of a specific date,
                                while
                              </li>
                              <li>
                                SOC 2 Type 2 provides a more comprehensive
                                examination of both the design and operating
                                effectiveness of the controls over a specified
                                period.
                              </li>
                            </ul>
                            <div className="my-2"></div>
                            <p>
                              When choosing between these two types, consider
                              the following factors:{' '}
                            </p>
                            <div className="my-2"></div>
                            <ul>
                              <li>
                                <strong>Level of assurance </strong>: If you
                                need a higher level of assurance (Type 2), plan
                                for a longer audit duration.
                              </li>
                              <li>
                                <strong>Scope </strong>: If the scope is limited
                                to a short period or specific dates, Type 1
                                might be sufficient. For broader scopes, choose
                                Type 2.
                              </li>
                              <li>
                                <strong>Cost and time </strong>: Type 1 audits
                                are generally faster and less expensive than
                                Type 2 audits.
                              </li>
                            </ul>
                            <div className="my-2"></div>
                            <p>
                              Ultimately, consult with your auditor or a
                              qualified professional to determine which type of
                              SOC 2 report is best suited for your
                              organization's needs.{' '}
                            </p>{' '}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-start overflow-x-auto buttons text-gray-600 dark:text-gray-500 mt-0.5 svelte-vhcwlm">
                        <div aria-label="Edit" className="flex">
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                              ></path>
                            </svg>
                          </button>
                        </div>
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div aria-label="Read Aloud" className="flex">
                          <button
                            id="speak-button-4392ee9f-5b13-4954-a238-5a6d234dd989"
                            className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                              ></path>
                            </svg>
                          </button>
                        </div>{' '}
                        <div
                          aria-label="response_token/s: 41.99 tokens<br/>prompt_token/s: 3854.66 tokens<br/>approximate_total: 11s"
                          className="flex"
                        >
                          <div aria-label="Generation Info" className="flex">
                            <button
                              className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition whitespace-pre-wrap"
                              id="info-4392ee9f-5b13-4954-a238-5a6d234dd989"
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
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div aria-label="Good Response" className="flex">
                          <button className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg  dark:hover:text-white hover:text-black transition">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2.3"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                            </svg>
                          </button>
                        </div>
                        <div aria-label="Bad Response" className="flex">
                          <button className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg  dark:hover:text-white hover:text-black transition">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2.3"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ChatMessage
              text="What are the requirements and what is the process to achieve a SOC 2 Type 1 certification?"
              showDeleteButton={true}
            />
            <div className="w-full  pb-12">
              <div className="flex flex-col justify-between px-5 mb-3 max-w-5xl mx-auto rounded-lg group">
                <div
                  className="flex w-full message-3def10cf-198a-4eea-b5c9-f1a983cf0de4 svelte-vhcwlm"
                  id="message-3def10cf-198a-4eea-b5c9-f1a983cf0de4"
                >
                  <ImageIcon className="flex-shrink-0 mr-3" />
                  <div className="w-full overflow-hidden pl-1">
                    <div className="self-center font-semibold mb-0.5 line-clamp-1 contents">
                      llama3.1:latest{' '}
                      <span className="self-center invisible group-hover:visible text-gray-400 text-xs font-medium uppercase ml-0.5 -mt-0.5">
                        10:07 am
                      </span>
                    </div>
                    <div>
                      <div className="chat-assistant w-full min-w-full markdown-prose svelte-vhcwlm">
                        <div>
                          <div className="w-full flex flex-col">
                            <p>
                              To achieve a SOC 2 (Service Organization Control
                              2) <strong>Type 1 </strong> certification, follow
                              these steps:{' '}
                            </p>
                            <div className="my-2"></div>
                            <p>
                              <strong>Requirements: </strong>
                            </p>
                            <div className="my-2"></div>
                            <ol start={1}>
                              <li>
                                <strong>Service organization </strong>: The
                                entity seeking certification must provide
                                services related to financial reporting or other
                                sensitive information.
                              </li>
                              <li>
                                <strong>Scope </strong>: The scope of the report
                                must be clearly defined and include the services
                                offered by the organization.
                              </li>
                              <li>
                                <strong>Criteria </strong>: The organization
                                must apply one or more of the five Trust
                                Services Criteria (TSC) categories:
                                <ul>
                                  <li>Security</li>
                                  <li>Availability</li>
                                  <li>Processing Integrity</li>
                                  <li>Confidentiality</li>
                                  <li>Privacy</li>
                                </ul>
                              </li>
                              <li>
                                <strong>Audit process </strong>: A qualified
                                auditor must perform a SOC 2 audit to examine
                                the organization's controls and provide an
                                opinion on their design.
                              </li>
                            </ol>
                            <div className="my-2"></div>
                            <p>
                              <strong>Step-by-Step Process: </strong>
                            </p>
                            <div className="my-2"></div>
                            <ol start={1}>
                              <li>
                                <strong>Engage an independent auditor </strong>:
                                Choose a qualified auditor with experience in
                                performing SOC 2 audits.
                              </li>
                              <li>
                                <strong>Define the scope </strong>: Clearly
                                define the services offered by the organization
                                and the relevant TSC categories to be addressed.
                              </li>
                              <li>
                                <strong>Pre-implementation preparation </strong>
                                :
                                <ul>
                                  <li>
                                    Review the SOC 2 criteria and guidelines.
                                  </li>
                                  <li>
                                    Assess the organization's current controls
                                    and identify any gaps or weaknesses.
                                  </li>
                                  <li>
                                    Develop a plan to address these gaps and
                                    implement necessary controls.
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <strong>Implementation </strong>: Implement the
                                required controls, including:
                                <ul>
                                  <li>
                                    Designing and implementing new policies and
                                    procedures.
                                  </li>
                                  <li>Training personnel on new controls.</li>
                                  <li>Documenting all changes.</li>
                                </ul>
                              </li>
                              <li>
                                <strong>Audit preparation </strong>:
                                <ul>
                                  <li>
                                    The auditor will request documentation of
                                    the implemented controls.
                                  </li>
                                  <li>
                                    Provide access to necessary personnel for
                                    interviews.
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <strong>SOC 2 audit </strong>: The auditor will
                                perform a review of the organization's controls,
                                including:
                                <ul>
                                  <li>Interviews with personnel.</li>
                                  <li>
                                    Review of documentation and procedures.
                                  </li>
                                  <li>
                                    Observation of control activities (if deemed
                                    necessary).
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <strong>Audit report </strong>: The auditor will
                                issue an opinion on the design of the controls,
                                stating whether they are suitably designed to
                                meet the specified criteria.
                              </li>
                              <li>
                                <strong>Written assertion </strong>: Management
                                must provide a written assertion that the system
                                is suitably designed to meet the specified
                                criteria.
                              </li>
                            </ol>
                            <div className="my-2"></div>
                            <p>
                              <strong>Timeline: </strong>
                            </p>
                            <div className="my-2"></div>
                            <ul>
                              <li>Preparation and implementation: 2-6 weeks</li>
                              <li>Audit duration: typically 5-10 days</li>
                              <li>Total time: approximately 3-6 months</li>
                            </ul>
                            <div className="my-2"></div>
                            <p>
                              <strong>Costs: </strong>
                            </p>
                            <div className="my-2"></div>
                            <p>
                              The cost of a SOC 2 Type 1 audit varies depending
                              on factors such as:{' '}
                            </p>
                            <div className="my-2"></div>
                            <ul>
                              <li>Auditor fees (average $10,000-$50,000).</li>
                              <li>Complexity and scope of the report.</li>
                              <li>Number of locations or services.</li>
                            </ul>
                            <div className="my-2"></div>
                            <p>
                              Please note that these costs are approximate and
                              may vary based on your specific situation.{' '}
                            </p>
                            <div className="my-2"></div>
                            <p>
                              <strong>Next Steps: </strong>
                            </p>
                            <div className="my-2"></div>
                            <p>
                              Once you've completed a SOC 2 Type 1
                              certification, you can proceed with:{' '}
                            </p>
                            <div className="my-2"></div>
                            <ul>
                              <li>
                                <strong>SOC 2 Type 2 </strong>: Perform a more
                                comprehensive examination (Type 2) to assess the
                                operating effectiveness of the controls.
                              </li>
                              <li>
                                <strong>Annual reporting </strong>: Schedule
                                annual SOC 2 audits to maintain your
                                certification and ensure ongoing control
                                effectiveness.
                              </li>
                            </ul>
                            <div className="my-2"></div>
                            <p>
                              Consult with your auditor or a qualified
                              professional for guidance on achieving a SOC 2
                              Type 1 certification.{' '}
                            </p>{' '}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-start overflow-x-auto buttons text-gray-600 dark:text-gray-500 mt-0.5 svelte-vhcwlm">
                        <div aria-label="Edit" className="flex">
                          <button className="visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2.3"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div aria-label="Copy" className="flex">
                          <button className="visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition copy-response-button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2.3"
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div aria-label="Read Aloud" className="flex">
                          <button
                            id="speak-button-3def10cf-198a-4eea-b5c9-f1a983cf0de4"
                            className="visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                              ></path>
                            </svg>
                          </button>
                        </div>{' '}
                        <div
                          aria-label="response_token/s: 40.52 tokens<br/>"
                          className="flex"
                        >
                          <div aria-label="Generation Info" className="flex">
                            <button
                              className="visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition whitespace-pre-wrap"
                              id="info-3def10cf-198a-4eea-b5c9-f1a983cf0de4"
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
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div aria-label="Good Response" className="flex">
                          <button className="visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg  dark:hover:text-white hover:text-black transition">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2.3"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                            </svg>
                          </button>
                        </div>
                        <div aria-label="Bad Response" className="flex">
                          <button className="visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg  dark:hover:text-white hover:text-black transition">
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="2.3"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                            </svg>
                          </button>
                        </div>
                        <div aria-label="Continue Response" className="flex">
                          <button
                            type="button"
                            id="continue-response-button"
                            className="visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition regenerate-response-button"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              ></path>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div aria-label="Regenerate" className="flex">
                          <button
                            type="button"
                            className="visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition regenerate-response-button"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
