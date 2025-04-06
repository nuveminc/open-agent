export {};

export type InstallStatus = {
  success: boolean;
  error?: string;
  stage: 'python' | 'dependencies' | 'fastapi' | 'ollama' | 'complete';
  stageProgress: number;
  currentStage: number;
  totalStages: number;
};

export type InstallProgress = {
  stage: 'python' | 'dependencies' | 'fastapi' | 'ollama' | 'complete';
  stageProgress: number;
  currentStage: number;
  totalStages: number;
  message: string;
};
declare global {
  interface Window {
    python: {
      install: () => Promise<InstallStatus>;
      installDependencies: () => Promise<InstallStatus>;
      setInstallProgress: (callback: (data: InstallProgress) => void) => () => void;
      check: () => Promise<boolean>;
      startFastApi: () => Promise<void>;
    };
  }
}
