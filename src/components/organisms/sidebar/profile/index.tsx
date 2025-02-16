import { Icon } from '@/components/atoms';
import { DropdownItem } from '@/components/molecules/dropdown/dropdown-item';
import { DropdownSeparator } from '@/components/molecules/dropdown/dropdown-separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import React from 'react';
import { useAppPresenter } from '@/presenters/app/useAppPresenter';
import { router } from '@/routes';

export interface MenuItem {
  icon: React.ReactNode | null;
  title: string | null;
  type: 'item' | 'divider';
  click?: () => void;
}

export const ProfileMenu = () => {
  const { presenter } = useAppPresenter();

  const openSettings = () => {
    presenter.setModal('settings');
    presenter.showModal(true);
  };

  const navigateToAdminSettings = () => {
    router.navigate('/admin/');
  };

  const menuItems: MenuItem[] = [
    {
      icon: <Icon name="gear" />,
      title: 'Settings',
      type: 'item',
      click: openSettings,
    },
    {
      icon: <Icon name="archive" />,
      title: 'Archived Chats',
      type: 'item',
      click: () => {},
    },
    {
      icon: <Icon name="code" />,
      title: 'Playground',
      type: 'item',
      click: () => {},
    },
    {
      icon: <Icon name="avatar" />,
      title: 'Admin Panel',
      type: 'item',
      click: navigateToAdminSettings,
    },
    { icon: null, title: null, type: 'divider', click: () => {} },
    {
      icon: <Icon name="logout" />,
      title: 'Sign Out',
      type: 'item',
      click: () => {},
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          className={cn(
            'flex rounded-xl py-3 px-3.5 w-full mr-1 hover:bg-gray-100',
            'dark:hover:bg-gray-900 transition'
          )}
        >
          <div className="self-center mr-3">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABN5JREFUeF7tnV1oHFUAhc9Md7KxGGxq0RehlVj6o6AP9qHWh0oEoSgF/0DRB5FSH4r4IKIvpeCDofhQ0eI/IvrkHwRUWmpp/WlKi1VDWlqhQRpradq0QVKzOzM7M3Lvuklmf7KzQypHPPsUyN47h/PtOffe2V3WmXpvaQI9aBxwBISGhRUiIFw8BISMh4AICJsDZHq0hggImQNkcpQQASFzgEyOEiIgZA6QyVFCBITMATI5SoiAkDlAJkcJERAyB8jkKCECQuYAmRwlREDIHCCTo4QICJkDZHKUEAEhc4BMjhIiIGQOkMlRQgSEzAEyOUqIgJA5QCaHLiGLHzwEt3d12qY4QDD8GoKfBnLZ53Rfj2vu+xTusttT4+PJU5j+YkOuOa/WoP8GEADRHwdR2vNQLh8KfQ+juH4ATrFXQDp1sGlCACR/nUP5u22Izn3b6ZQo3rUT3uqnAMcVkE7dawUEOWurVV0ZXaqsDHRSQJIYSCLA9ezIPLXlrXwMXetfgeP1AGY+xzFfHLPzCUiHQJLwCpLyBNyeFXZkntoq3r0L3qonLIRkehzo6oFTWCwgGVjYp8xNSBJOITp7AIUV91f7P/IR/LwTwfCuTNPZuto0CLd3jcFp53JvXFdNixKSycMGIOHIG/BufWZmh1QZ24vyvsczTTa3rgzc8Pjb8G7bKiCZ3PvnSfUJCQ6/BG/tlpkzRHxlDP7BrYjGj7addm5dxZMnEY7snl1PlJC2/jWtLH/oBSy64c7ZbWvG2nKXrEJ3/4dwl6y0dRX++jGi80N2C6zKysaiJRCzO5p7sMtSW96ap9G1bjsc71ok/iT8wy/adUhAOoDRbFE3CYnO7k/d+shSW90b34I5oZvdVTwxjNLeR7Dopn4B6ZBHw6JugFROf5I+bbeprVRdJTHCUx/AzFO45VEBWSgg9fej5qutZnVVGf1MQDqF0aqyTELs/zbvh7vsjuoZYuoM/ANbEF081nCZZnWVlC8JyEIDMQu7efVXD4llBMcGEIy8nrqMrat7P4J7XZ+9VRKefL+6oAMCstBACjdvRnHDq3CKS+3UlTNfo/zNk6nLeGvN7mqHvT2S+JfhH3oeld8GBSQPjHaVlaW2uje+g0Jf9X2TeOIXTA/2z0jRop6DSv1JvbbLqk01X22l6iquIDjxJoKjOwQkB4eZIe2AzFdbqboqXYT/w3OojO0RkKsJZL7aMot5Yfkme/lo/AhKX1b/rj1UWTnItEuImbJZbdn7VPe8C7dnOdCkrrTLygEjy6Juja3fbY1+jujCkdndVekCyt8/i+j3fUpITg6Z15DaE1OHxD9HEV8+bkHZujo/hNJXDzRIUWXloJOlshpqq1JCEpWrb2LFIYKR3Qh+fFlAcvjfMCQrkPraqk2UtKgrrSE56WQFUr/bql2uVV0JyL8AJLXbMtdr89ktrSE5oHSSkPraavcxIQHJAeT/PoTuw9YCop+roHoNKCFUOPRzFWQ4BERA6BwgE6Q1REDIHCCTo4QICJkDZHKUEAEhc4BMjhIiIGQOkMlRQgSEzAEyOUqIgJA5QCZHCREQMgfI5CghAkLmAJkcJURAyBwgk6OECAiZA2RylBABIXOATI4SIiBkDpDJUUIEhMwBMjlKiICQOUAmRwkREDIHyOQoIQJC5gCZnL8BpETqEr4z9FQAAAAASUVORK5CYII="
              className="max-w-[30px] object-cover rounded-full"
              alt="User profile"
            />
          </div>
          <div className="self-center font-medium">mp</div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn(
          'w-full w-[240px] rounded-xl px-1 py-1.5 border border-gray-300/30',
          'dark:border-gray-700/50 z-50 bg-white dark:bg-gray-850 dark:text-white',
          'shadow font-primary'
        )}
      >
        {menuItems.map((item, idx) => {
          if (item.type == 'divider') {
            return <DropdownSeparator key={`separator-${idx}`} />;
          } else {
            return (
              <DropdownItem key={`item-${idx}`} onClick={item.click}>
                <div>{item.icon}</div>
                <div className="self-center font-medium">{item.title}</div>
              </DropdownItem>
            );
          }
        })}
        <DropdownSeparator />
        <div aria-label="" className="flex">
          <div className="flex rounded-md py-1.5 px-3 text-xs gap-2.5 items-center">
            <div className="flex items-center">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-green-500"></span>
              </span>
            </div>
            <div className="">
              <span className="font-medium">Active Users:</span>
              <span className="font-semibold ml-1">1</span>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
