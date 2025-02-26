import React from 'react';
import { DataFile } from '@/models/chat/chat-session.class.pm';

type FileDisplayCardProps = { files: DataFile[] | undefined };

export const FileDisplayCard: React.FC<FileDisplayCardProps> = ({ files }) => {
  if (files && Array.isArray(files) && files.length === 0) {
    return <> </>;
  }
  const sizeUnit = 'KB';
  const file = files![0];
  return (
    <div className="mt-2.5 mb-5 w-full flex flex-col justify-end overflow-x-auto flex-wrap">
      <div className="self-end">
        <button
          className="relative group p-1.5 w-60 flex items-center gap-1 bg-white dark:bg-gray-850  rounded-2xl text-left"
          type="button"
        >
          <div className="p-3 bg-black/20 dark:bg-white/10 text-white rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                clip-rule="evenodd"
              ></path>
              <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center -space-y-0.5 px-2.5 w-full">
            <div className="dark:text-gray-100 text-sm font-medium line-clamp-1 mb-1">
              {file.name}
            </div>
            <div className="flex justify-between text-gray-500 text-xs line-clamp-1">
              {file.type}{' '}
              <span className="capitalize">{`${file.size} ${sizeUnit}`}</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
