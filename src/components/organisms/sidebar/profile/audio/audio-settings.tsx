import React from 'react';

export const AudioSettings: React.FC<object> = () => {
  return (
    <>
      <div className="text-md font-normal mr-2 my-2">
        <div>SST Settings</div>
        <div className="flex justify-between text-sm font-normal m-1">
          <div>Speech-to-text Engine</div>
          <div>Dropdown</div>
        </div>
      </div>
      <div className="text-md font-normal mr-2 my-2">
        <div>TTS Settings</div>
        <div className="flex justify-between text-sm font-normal m-1">
          <div>Auto-playback response</div>
          <div>Off</div>
        </div>
      </div>
    </>
  );
};
