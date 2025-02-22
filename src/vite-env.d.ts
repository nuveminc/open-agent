/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_AUTH_TOKEN: string;
  readonly VITE_ENV: 'development' | 'production' | 'test';
  readonly VITE_SIMULATED_API_LATENCY: number;
  // Add any other environment variables you need here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
