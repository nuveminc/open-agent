import React from 'react';

export const AdminPanel: React.FC<object> = () => {
  return (
    <div className="flex flex-col w-full min-h-screen max-h-screen md:max-w-[calc(100%-260px)]">
      <div className="px-4 pt-3 mt-0.5 mb-1">
        <div className="flex items-center gap-1">
          <div className="md:hidden mr-1 self-start flex flex-none items-center">
            <button
              id="sidebar-toggle-button"
              className="cursor-pointer p-1 flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition"
              aria-label="Toggle Sidebar"
            >
              <div className="m-auto self-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          <div className="flex items-center text-xl font-semibold">
            Admin Panel
          </div>
        </div>
      </div>
      <div className="px-4 my-1">
        <div className="flex scrollbar-none overflow-x-auto w-fit text-center text-sm font-medium rounded-xl bg-transparent/10 p-1">
          <a
            className="min-w-fit rounded-lg p-1.5 px-3 bg-gray-50 dark:bg-gray-850 transition"
            href="/admin"
          >
            Dashboard
          </a>
          <a
            className="min-w-fit rounded-lg p-1.5 px-3  transition"
            href="/admin/settings"
          >
            Settings
          </a>
        </div>
      </div>
      <hr className="my-2 dark:border-gray-850" />
      <div className="py-1 px-5 flex-1 max-h-full overflow-y-auto">
        {' '}
        <div className="mt-0.5 mb-3 gap-1 flex flex-col md:flex-row justify-between">
          <div className="flex md:self-center text-lg font-medium px-0.5">
            All Users{' '}
            <div className="flex self-center w-[1px] h-6 mx-2.5 bg-gray-200 dark:bg-gray-700"></div>
            <span className="text-lg font-medium text-gray-500 dark:text-gray-300">
              1
            </span>
          </div>
          <div className="flex gap-1">
            <input
              className="w-full md:w-60 rounded-xl py-1.5 px-4 text-sm dark:text-gray-300 dark:bg-gray-850 outline-none"
              placeholder="Search"
            />
            <div className="flex gap-0.5">
              <div aria-label="Add User" className="flex">
                <button className="px-2 py-2 rounded-xl border border-gray-200 dark:border-gray-600 dark:border-0 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 transition font-medium text-sm flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full svelte-3g4avz">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto max-w-full">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-850 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-2 cursor-pointer select-none"
                >
                  Role <span className="invisible">▲</span>
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 cursor-pointer select-none"
                >
                  Name <span className="invisible">▲</span>
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 cursor-pointer select-none"
                >
                  Email <span className="invisible">▲</span>
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 cursor-pointer select-none"
                >
                  OAuth ID <span className="invisible">▲</span>
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 cursor-pointer select-none"
                >
                  Last Active <span className="invisible">▲</span>
                </th>
                <th
                  scope="col"
                  className="px-3 py-2 cursor-pointer select-none"
                >
                  Created at ▲
                </th>
                <th scope="col" className="px-3 py-2 text-right"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-850 text-xs">
                <td className="px-3 py-2 min-w-[7rem] w-28">
                  <button className="flex items-center gap-2 text-xs px-3 py-0.5 rounded-lg text-sky-600 dark:text-sky-200 bg-sky-200/30 false false svelte-3g4avz">
                    <div className="w-1 h-1 rounded-full bg-sky-600 dark:bg-sky-300 false false svelte-3g4avz"></div>{' '}
                    admin
                  </button>
                </td>
                <td className="px-3 py-2 font-medium text-gray-900 dark:text-white w-max">
                  <div className="flex flex-row w-max">
                    <img
                      className="rounded-full w-6 h-6 object-cover mr-2.5"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABN5JREFUeF7tnV1oHFUAhc9Md7KxGGxq0RehlVj6o6AP9qHWh0oEoSgF/0DRB5FSH4r4IKIvpeCDofhQ0eI/IvrkHwRUWmpp/WlKi1VDWlqhQRpradq0QVKzOzM7M3Lvuklmf7KzQypHPPsUyN47h/PtOffe2V3WmXpvaQI9aBxwBISGhRUiIFw8BISMh4AICJsDZHq0hggImQNkcpQQASFzgEyOEiIgZA6QyVFCBITMATI5SoiAkDlAJkcJERAyB8jkKCECQuYAmRwlREDIHCCTo4QICJkDZHKUEAEhc4BMjhIiIGQOkMlRQgSEzAEyOUqIgJA5QCaHLiGLHzwEt3d12qY4QDD8GoKfBnLZ53Rfj2vu+xTusttT4+PJU5j+YkOuOa/WoP8GEADRHwdR2vNQLh8KfQ+juH4ATrFXQDp1sGlCACR/nUP5u22Izn3b6ZQo3rUT3uqnAMcVkE7dawUEOWurVV0ZXaqsDHRSQJIYSCLA9ezIPLXlrXwMXetfgeP1AGY+xzFfHLPzCUiHQJLwCpLyBNyeFXZkntoq3r0L3qonLIRkehzo6oFTWCwgGVjYp8xNSBJOITp7AIUV91f7P/IR/LwTwfCuTNPZuto0CLd3jcFp53JvXFdNixKSycMGIOHIG/BufWZmh1QZ24vyvsczTTa3rgzc8Pjb8G7bKiCZ3PvnSfUJCQ6/BG/tlpkzRHxlDP7BrYjGj7addm5dxZMnEY7snl1PlJC2/jWtLH/oBSy64c7ZbWvG2nKXrEJ3/4dwl6y0dRX++jGi80N2C6zKysaiJRCzO5p7sMtSW96ap9G1bjsc71ok/iT8wy/adUhAOoDRbFE3CYnO7k/d+shSW90b34I5oZvdVTwxjNLeR7Dopn4B6ZBHw6JugFROf5I+bbeprVRdJTHCUx/AzFO45VEBWSgg9fej5qutZnVVGf1MQDqF0aqyTELs/zbvh7vsjuoZYuoM/ANbEF081nCZZnWVlC8JyEIDMQu7efVXD4llBMcGEIy8nrqMrat7P4J7XZ+9VRKefL+6oAMCstBACjdvRnHDq3CKS+3UlTNfo/zNk6nLeGvN7mqHvT2S+JfhH3oeld8GBSQPjHaVlaW2uje+g0Jf9X2TeOIXTA/2z0jRop6DSv1JvbbLqk01X22l6iquIDjxJoKjOwQkB4eZIe2AzFdbqboqXYT/w3OojO0RkKsJZL7aMot5Yfkme/lo/AhKX1b/rj1UWTnItEuImbJZbdn7VPe8C7dnOdCkrrTLygEjy6Juja3fbY1+jujCkdndVekCyt8/i+j3fUpITg6Z15DaE1OHxD9HEV8+bkHZujo/hNJXDzRIUWXloJOlshpqq1JCEpWrb2LFIYKR3Qh+fFlAcvjfMCQrkPraqk2UtKgrrSE56WQFUr/bql2uVV0JyL8AJLXbMtdr89ktrSE5oHSSkPraavcxIQHJAeT/PoTuw9YCop+roHoNKCFUOPRzFWQ4BERA6BwgE6Q1REDIHCCTo4QICJkDZHKUEAEhc4BMjhIiIGQOkMlRQgSEzAEyOUqIgJA5QCZHCREQMgfI5CghAkLmAJkcJURAyBwgk6OECAiZA2RylBABIXOATI4SIiBkDpDJUUIEhMwBMjlKiICQOUAmRwkREDIHyOQoIQJC5gCZnL8BpETqEr4z9FQAAAAASUVORK5CYII="
                      alt="user"
                    />
                    <div className="font-medium self-center">mp</div>
                  </div>
                </td>
                <td className="px-3 py-2">mpace@synapsellp.com</td>
                <td className="px-3 py-2"></td>
                <td className="px-3 py-2">a few seconds ago</td>
                <td className="px-3 py-2">September 10, 2024</td>
                <td className="px-3 py-2 text-right">
                  <div className="flex justify-end w-full">
                    <div aria-label="Edit User" className="flex">
                      <button className="self-center w-fit text-sm px-2 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl">
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
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
                  1{' '}
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
      </div>
    </div>
  );
};
