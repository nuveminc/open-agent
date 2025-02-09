import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import React from 'react';
import { User } from '../admin-dashboard';

interface UserTableProps {
  users: User[];
}
export const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <>
      <div className="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full svelte-3g4avz">
        <Table>
          <TableHeader>
            <TableRow
              className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-850"
              style={{ height: '2rem' }}
            >
              <TableHead className="w-[100px]">ROLE</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>EMAIL</TableHead>
              <TableHead>OAUTH ID</TableHead>
              <TableHead>LAST ACTIVE</TableHead>
              <TableHead>CREATED AT</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs text-gray-500 dark:text-gray-400">
            {users.map((user, idx) => (
              <TableRow key={`user-${idx}`}>
                <TableCell className="font-medium">
                  <button className="flex items-center gap-2 text-xs px-3 py-0.5 rounded-lg text-sky-600 dark:text-sky-200 bg-sky-200/30 false false svelte-3g4avz">
                    <div className="w-1 h-1 rounded-full bg-sky-600 dark:bg-sky-300 false false svelte-3g4avz"></div>
                    {user.role}
                  </button>
                </TableCell>
                <TableCell>
                  <div className="flex flex-row w-max">
                    <img
                      className="rounded-full w-6 h-6 object-cover mr-2.5"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABN5JREFUeF7tnV1oHFUAhc9Md7KxGGxq0RehlVj6o6AP9qHWh0oEoSgF/0DRB5FSH4r4IKIvpeCDofhQ0eI/IvrkHwRUWmpp/WlKi1VDWlqhQRpradq0QVKzOzM7M3Lvuklmf7KzQypHPPsUyN47h/PtOffe2V3WmXpvaQI9aBxwBISGhRUiIFw8BISMh4AICJsDZHq0hggImQNkcpQQASFzgEyOEiIgZA6QyVFCBITMATI5SoiAkDlAJkcJERAyB8jkKCECQuYAmRwlREDIHCCTo4QICJkDZHKUEAEhc4BMjhIiIGQOkMlRQgSEzAEyOUqIgJA5QCaHLiGLHzwEt3d12qY4QDD8GoKfBnLZ53Rfj2vu+xTusttT4+PJU5j+YkOuOa/WoP8GEADRHwdR2vNQLh8KfQ+juH4ATrFXQDp1sGlCACR/nUP5u22Izn3b6ZQo3rUT3uqnAMcVkE7dawUEOWurVV0ZXaqsDHRSQJIYSCLA9ezIPLXlrXwMXetfgeP1AGY+xzFfHLPzCUiHQJLwCpLyBNyeFXZkntoq3r0L3qonLIRkehzo6oFTWCwgGVjYp8xNSBJOITp7AIUV91f7P/IR/LwTwfCuTNPZuto0CLd3jcFp53JvXFdNixKSycMGIOHIG/BufWZmh1QZ24vyvsczTTa3rgzc8Pjb8G7bKiCZ3PvnSfUJCQ6/BG/tlpkzRHxlDP7BrYjGj7addm5dxZMnEY7snl1PlJC2/jWtLH/oBSy64c7ZbWvG2nKXrEJ3/4dwl6y0dRX++jGi80N2C6zKysaiJRCzO5p7sMtSW96ap9G1bjsc71ok/iT8wy/adUhAOoDRbFE3CYnO7k/d+shSW90b34I5oZvdVTwxjNLeR7Dopn4B6ZBHw6JugFROf5I+bbeprVRdJTHCUx/AzFO45VEBWSgg9fej5qutZnVVGf1MQDqF0aqyTELs/zbvh7vsjuoZYuoM/ANbEF081nCZZnWVlC8JyEIDMQu7efVXD4llBMcGEIy8nrqMrat7P4J7XZ+9VRKefL+6oAMCstBACjdvRnHDq3CKS+3UlTNfo/zNk6nLeGvN7mqHvT2S+JfhH3oeld8GBSQPjHaVlaW2uje+g0Jf9X2TeOIXTA/2z0jRop6DSv1JvbbLqk01X22l6iquIDjxJoKjOwQkB4eZIe2AzFdbqboqXYT/w3OojO0RkKsJZL7aMot5Yfkme/lo/AhKX1b/rj1UWTnItEuImbJZbdn7VPe8C7dnOdCkrrTLygEjy6Juja3fbY1+jujCkdndVekCyt8/i+j3fUpITg6Z15DaE1OHxD9HEV8+bkHZujo/hNJXDzRIUWXloJOlshpqq1JCEpWrb2LFIYKR3Qh+fFlAcvjfMCQrkPraqk2UtKgrrSE56WQFUr/bql2uVV0JyL8AJLXbMtdr89ktrSE5oHSSkPraavcxIQHJAeT/PoTuw9YCop+roHoNKCFUOPRzFWQ4BERA6BwgE6Q1REDIHCCTo4QICJkDZHKUEAEhc4BMjhIiIGQOkMlRQgSEzAEyOUqIgJA5QCZHCREQMgfI5CghAkLmAJkcJURAyBwgk6OECAiZA2RylBABIXOATI4SIiBkDpDJUUIEhMwBMjlKiICQOUAmRwkREDIHyOQoIQJC5gCZnL8BpETqEr4z9FQAAAAASUVORK5CYII="
                      alt="user"
                    />
                    <div className="font-medium self-center">{user.name}</div>
                  </div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.oauth_sub}</TableCell>
                <TableCell>{user.last_active_at}</TableCell>
                <TableCell>{user.created_at}</TableCell>
                <TableCell className="text-right">
                  <div aria-label="Edit User">
                    <button className="text-sm px-2 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl">
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
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="text-gray-500 text-xs mt-2 text-right">
        ⓘ Click on the user role button to change a user's role.
      </div>
      <div className="flex justify-center">
        <div
          data-scope="pagination"
          data-melt-pagination=""
          data-pagination-root=""
        >
          <div className="my-2 flex items-center">
            <button
              aria-label="Previous"
              data-melt-pagination-prev=""
              data-pagination-prev-button=""
              type="button"
              className="mr-[25px] inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-98 disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-700 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                ></path>
              </svg>
            </button>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                aria-label="Page 1"
                data-value="1"
                data-selected=""
                data-melt-pagination-page=""
                data-pagination-page=""
                className="inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium hover:bg-dark-10 active:scale-98 disabled:cursor-not-allowed disabled:opacity-50 hover:disabled:bg-transparent data-[selected]:bg-black data-[selected]:text-gray-100 data-[selected]:hover:bg-black dark:data-[selected]:bg-white dark:data-[selected]:text-gray-900 dark:data-[selected]:hover:bg-white"
              >
                1
              </button>
            </div>
            <button
              aria-label="Next"
              data-melt-pagination-next=""
              data-pagination-next-button=""
              type="button"
              className="ml-[25px]  inline-flex size-8 items-center justify-center rounded-[9px] bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-98 disabled:cursor-not-allowed disabled:text-gray-400 dark:disabled:text-gray-700 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
