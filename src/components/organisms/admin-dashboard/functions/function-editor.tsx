import React from 'react';
import Editor from '@monaco-editor/react';
import { exampleFilter } from '@/constants/function-boilerplate';
import { Icon } from '@/components/atoms';
import { router } from '@/routes';
import { InputText } from './input-text';
import { Button } from '@/components/ui/button';

export const FunctionEditor: React.FC = () => {
  const code = exampleFilter;
  const changeHandler = (text: string) => {
    console.log(text);
  };

  const navigateBack = () => {
    router.navigate('/admin/functions');
  };

  const handleSave = () => {
    console.log('Save function');
  };

  return (
    <div className="flex flex-col w-full h-full mb-3">
      <div>
        <div className="flex items-center justify-between px-5 text-lg font-medium text-gray-500">
          <div className="flex items-center gap-2 px-5 text-lg font-medium text-gray-500">
            <div onClick={navigateBack} className="cursor-pointer">
              <Icon name="chevronLeft" className="size-4" />
            </div>
            <div className="w-full text-2xl font-medium bg-transparent outline-none font-primary">
              <input
                type="text"
                placeholder="Function Name"
                className="bg-transparent outline-none font-primary"
              />
            </div>
          </div>
          <div className="text-xs uppercase bg-gray-600 text-gray-100 py-1 px-2 rounded-lg">
            Function
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full my-2 px-10 space-x-[15rem]">
        <InputText placeholder=" Function ID" onChange={changeHandler} />
        <InputText
          placeholder=" Function Description"
          onChange={changeHandler}
        />
      </div>
      <div className="flex h-full px-5 rounded-xl">
        <Editor language="python" theme="vs-dark" value={code} />
      </div>
      <div className="flex justify-end px-5 mt-2 mr-3">
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};
