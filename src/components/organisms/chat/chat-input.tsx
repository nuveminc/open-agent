import { Icon } from '../../atoms';
import { Disclaimer } from '../../molecules/disclaimer';

export const ChatInput: React.FC<object> = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-6xl px-2.5 md:px-6 mx-auto inset-x-0">
        <div className="pb-2">
          <input type="file" hidden={true} multiple={true} />
          <form className="w-full flex gap-1.5">
            <div
              className="flex-1 flex flex-col relative w-full rounded-3xl px-1.5 bg-gray-50 dark:bg-gray-850 dark:text-gray-100"
              dir="LTR"
            >
              <div className="flex">
                <div className="ml-0.5 self-end mb-1.5 flex space-x-1">
                  <button tabIndex={0} type="button">
                    <div aria-label="More" className="flex">
                      <button
                        className="bg-gray-50 hover:bg-gray-100 text-gray-800 dark:bg-gray-850 dark:text-white dark:hover:bg-gray-800 transition rounded-full p-2 outline-none focus:outline-none"
                        type="button"
                        aria-label="More"
                      >
                        <Icon
                          name="plus"
                          className="size-5"
                          fill="currentColor"
                          stroke="none"
                        />
                      </button>
                    </div>
                  </button>
                  <div slot="content"></div>
                </div>
                <textarea
                  id="chat-textarea"
                  className="scrollbar-hidden bg-gray-50 dark:bg-gray-850 dark:text-gray-100 outline-none w-full py-3 px-1 rounded-xl resize-none h-[48px]"
                  placeholder="Send a Message"
                  rows={1}
                ></textarea>
                <div className="self-end mb-2 flex space-x-1 mr-1">
                  <div aria-label="Record voice" className="flex">
                    <button
                      id="voice-input-button"
                      className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-850 transition rounded-full p-1.5 mr-0.5 self-center"
                      type="button"
                      aria-label="Voice Input"
                    >
                      <Icon
                        name="microphone"
                        fill="currentColor"
                        stroke="none"
                        className="w-5 h-5 translate-y-[0.5px]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-end w-10">
              <div className="flex items-center mb-1">
                <div aria-label="Call" className="flex">
                  <button
                    className="text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-850 transition rounded-full p-2 self-center"
                    type="button"
                    aria-label="Call"
                  >
                    <Icon
                      name="call"
                      className="size-6"
                      fill="currentColor"
                      stroke="none"
                    />
                  </button>
                </div>
              </div>
            </div>
          </form>
          <Disclaimer />
        </div>
      </div>
    </div>
  );
};
