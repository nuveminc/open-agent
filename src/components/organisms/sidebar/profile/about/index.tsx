import { useState } from 'react';

export const AboutSettings: React.FC<object> = () => {
  const [updateCheck, setUpdateCheck] = useState(false);
  const checkForUpdatesHandler = () => {
    // TODO: need to replace this with actual update check logic API
    setUpdateCheck(true);
    setTimeout(() => {
      setUpdateCheck(false);
    }, 1500);
  };

  return (
    <>
      <div>Open Agent Version</div>
      <div className="flex justify-between mt-2">
        <div className="text-xs">
          <span className=" mr-2">v0.1.0</span>
          {updateCheck ? (
            <span>Checking for Updates ...</span>
          ) : (
            <span>(v0.1.1 available)</span>
          )}
        </div>
        <div
          className="text-xs cursor-pointer"
          onClick={checkForUpdatesHandler}
        >
          Check for Updates
        </div>
      </div>
      <div className="mt-6">Ollama Version</div>
      <div className="mt-2 text-xs">0.3.10</div>
      <div className="mt-6 text-xs">
        <span className="text-gray-500 mr-2">Created by</span>
        <span>Mark Pace</span>
      </div>
      <div className="mt-3 text-xs text-gray-400">
        Inspired by Open WebUI by Timothy J. Baek
      </div>
    </>
  );
};
