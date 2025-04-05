export {};

declare global {
  interface Window {
    python: {
      install: () => Promise<{ success: boolean; error?: string }>;
      setInstallProgress: (callback: (progress: number) => void) => () => void;
      check: () => Promise<boolean>;
    };
  }
}
