import React from 'react';

interface InstallerProps {
  onInstallComplete: () => void;
}

export const InstallerPage: React.FC<InstallerProps> = ({ onInstallComplete }) => {
  const [isInstalling, setIsInstalling] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    const cleanup = window.python.setInstallProgress((newProgress) => {
      setProgress(newProgress);
    });
    return cleanup;
  }, []);

  const handleInstall = async () => {
    setIsInstalling(true);
    setError('');
    setSuccess(false);
    
    try {
      const result = await window.python.install();
      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          onInstallComplete();
        }, 2000);
      } else {
        setError(result.error || 'Installation failed');
      }
    } catch {
      setError('Installation failed. Please try again.');
    } finally {
      setIsInstalling(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Python Installation Required
        </h2>
        
        {!isInstalling && !success && (
          <>
            <p className="text-center text-gray-600 dark:text-gray-300">
              This application requires Python 3.x to run. Click below to install it automatically.
            </p>
            <button
              onClick={handleInstall}
              disabled={isInstalling}
              className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Install Python
            </button>
          </>
        )}

        {isInstalling && (
          <div className="space-y-4">
            <p className="text-center text-gray-600 dark:text-gray-300">
              Installing Python... {progress}%
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {success && (
          <div className="text-center text-green-600 dark:text-green-400">
            <p className="text-lg font-semibold">Installation Complete!</p>
            <p className="text-sm">Redirecting to application...</p>
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 dark:text-red-400">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};
