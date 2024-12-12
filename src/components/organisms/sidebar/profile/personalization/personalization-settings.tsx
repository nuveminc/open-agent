import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import React from 'react';

export const PersonalizationSettings: React.FC<object> = () => {
  const onChange = (value: boolean) => {
    console.log(value);
  };
  return (
    <>
      <div className="flex justify-between text-md font-normal mr-2 my-2">
        <div>
          Memory
          <span className="ml-1 text-sm dark:text-gray-500">
            (Experimental)
          </span>
        </div>
        <div>
          <Switch id="notifications" onCheckedChange={onChange} />
        </div>
      </div>
      <div className="flex justify-between text-md font-normal mr-2 my-2">
        <div className="text-sm dark:text-gray-500">
          You can personalize your interactions with LLMs by adding memories
          through the 'Manage' button below, making them more helpful and
          tailored to you.
        </div>
      </div>
      <div>
        {/* TODO: add personalization add items; should just set an "add" in this dialog rather following OpenWebUI by opening another */}
        <Button className="mt-3 dark:bg-gray-900 dark:hover:bg-gray-800 border dark:border-gray-800">
          Manage
        </Button>
      </div>
    </>
  );
};
