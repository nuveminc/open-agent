import { InstallProgress } from '@/types/electron';
import React from 'react';

interface InstallerProps {
  onInstallComplete: () => void;
}

const stageMessages = {
  python: 'Installing Python...',
  dependencies: 'Installing Required Dependencies...',
  fastapi: 'Setting up FastAPI Server...',
  ollama: 'Installing Ollama...',
  complete: 'Setup Complete!'
};

export const InstallerPage: React.FC<InstallerProps> = ({ onInstallComplete }) => {
  const [isInstalling, setIsInstalling] = React.useState(false);
  const [progress, setProgress] = React.useState<InstallProgress>({
    stage: 'python',
    stageProgress: 0,
    currentStage: 0,
    totalStages: 4,
    message: 'Ready to install'
  });
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
      const result = await window.python.installDependencies();
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

  // Calculate total progress as a combination of stage and overall progress
  const totalProgress = ((progress.currentStage + progress.stageProgress / 100) / progress.totalStages) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Setup Required
        </h2>
        
        {!isInstalling && !success && (
          <>
            <p className="text-center text-gray-600 dark:text-gray-300">
              This application requires several components to run. Click below to begin the installation process.
            </p>
            <button
              onClick={handleInstall}
              disabled={isInstalling}
              className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Start Installation
            </button>
          </>
        )}

        {isInstalling && (
          <div className="space-y-6">
            {/* Overall progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                <span>Overall Progress</span>
                <span>{Math.round(totalProgress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${totalProgress}%` }}
                />
              </div>
            </div>

            {/* Current stage progress */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">
                  {progress.message || stageMessages[progress.stage]}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {progress.stageProgress}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${progress.stageProgress}%` }}
                />
              </div>
            </div>

            {/* Installation steps */}
            <div className="space-y-2">
              {Object.entries(stageMessages).map(([stage, message], index) => (
                <div 
                  key={stage}
                  className={`flex items-center space-x-3 ${
                    index === progress.currentStage ? 'text-blue-500 dark:text-blue-400' :
                    index < progress.currentStage ? 'text-green-500 dark:text-green-400' :
                    'text-gray-400 dark:text-gray-500'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${
                    index === progress.currentStage ? 'bg-blue-500' :
                    index < progress.currentStage ? 'bg-green-500' :
                    'bg-gray-300 dark:bg-gray-600'
                  }`} />
                  <span className="text-sm">{message}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {success && (
          <div className="text-center text-green-600 dark:text-green-400 space-y-2">
            <p className="text-lg font-semibold">Installation Complete!</p>
            <p className="text-sm">Starting application...</p>
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
