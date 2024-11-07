import { Icon } from '@/components/atoms';
import { cn } from '@/lib/utils';
import { ModalState } from '@/store/app.store';
import React from 'react';

export interface ModelSelectorProps {
  dropdownState: ModalState;
}
export const ModelMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <>
      {/* dropdown */}
      <div>
        <div className="absolute inset-0 bg-opacity-100" aria-hidden="true" />
        <div
          role="menu"
          className={cn(
            ' z-140 w-[32rem] max-w-[calc(100vw-1rem)] justify-start rounded-xl bg-white dark:bg-gray-900 dark:text-white dark:bg-opacity-100 shadow-lg border border-gray-300/30 dark:border-gray-700/40 outline-none'
          )}
          style={{
            position: 'absolute',
            top: '48px',
            left: '275px',
          }}
        >
          <div className="flex items-center gap-2.5 px-5 mt-3.5 mb-3">
            <Icon name="magnifier" strokeWidth="1.25" className="size-4" />
            <input
              id="model-search-input"
              className="w-full text-sm bg-transparent outline-none"
              placeholder="Search a model"
              autoComplete="off"
            />
          </div>
          <hr className="border-gray-100 dark:border-gray-800" />
          <div className="px-3 my-2 max-h-64 overflow-y-auto scrollbar-hidden group svelte-141e0sl">
            <button
              className="flex w-full text-left font-medium line-clamp-1 select-none items-center rounded-md py-2 pl-3 pr-1.5 text-sm text-gray-700 dark:text-gray-100 outline-none transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer data-[highlighted]:bg-muted bg-gray-100 dark:bg-gray-800 group-hover:bg-transparent"
              data-arrow-selected="true"
              onClick={onClose}
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="flex items-center min-w-fit">
                    <div className="line-clamp-1">
                      <div className="flex items-center min-w-fit">
                        <img
                          src="/public/favicon.png"
                          alt="Model"
                          className="rounded-full size-5 flex items-center mr-2"
                        />
                        llama3.1:latest
                      </div>
                    </div>
                    <div className="flex ml-1 items-center translate-y-[0.5px]">
                      <div aria-label="Q4_0 (4.3GB)" className="self-end">
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400 line-clamp-1">
                          8.0B
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-auto pl-2 pr-2 md:pr-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          <hr className="border-gray-100 dark:border-gray-800" />
          <div className="flex items-center mx-2 my-2">
            <button className="flex justify-between w-full font-medium line-clamp-1 select-none items-center rounded-button py-2 px-3 text-sm text-gray-700 dark:text-gray-100 outline-none transition-all duration-75 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer data-[highlighted]:bg-muted">
              <div className="flex gap-2.5 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                  ></path>
                </svg>{' '}
                Temporary Chat
              </div>
              <div>
                <button
                  data-state="unchecked"
                  type="button"
                  role="switch"
                  aria-checked="false"
                  data-melt-switch=""
                  data-switch-root=""
                  className="flex h-5 min-h-5 w-9 shrink-0 cursor-pointer items-center rounded-full px-[3px] transition  bg-gray-200 dark:bg-transparent outline outline-1 outline-gray-100 dark:outline-gray-800"
                >
                  <span
                    className="pointer-events-none block size-4 shrink-0 rounded-full bg-white transition-transform data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:shadow-mini "
                    data-switch-thumb=""
                    data-state="unchecked"
                  ></span>
                </button>
                <input
                  type="checkbox"
                  aria-hidden="true"
                  hidden={true}
                  tabIndex={-1}
                  name=""
                  value="on"
                  data-melt-switch-input=""
                  style={{
                    position: 'absolute',
                    opacity: 0,
                    pointerEvents: 'none',
                    margin: '0px',
                    transform: 'translateX(-100%)',
                  }}
                />
              </div>
            </button>
          </div>
          <div className="hidden w-[42rem]"></div>
          <div className="hidden w-[32rem]"></div>
        </div>
      </div>
    </>
  );
};
