import * as path from 'path';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

export function loadEnv(): Record<string, string | boolean> {

  const envType = process.env.NODE_ENV === 'development' ? '.development' : '';
  
  const envPath = path.resolve(process.cwd(), `.env${envType}`);

  const env: Record<string, string | boolean> = {};

  if (fs.existsSync(envPath)) {
    const envConfig = dotenv.parse(fs.readFileSync(envPath));
    for (const k in envConfig) {

      const value = envConfig[k];
      process.env[k] = value;
      env[k] = value?.toLowerCase() === 'true';
      console.log(`Getting env ${k}:`, process.env[k]);
    }
    console.log('Environment:', {
      NODE_ENV: process.env.NODE_ENV,
      PYTHON_INSTALLED: process.env.PYTHON_INSTALLED,
      FASTAPI_INSTALLED: process.env.FASTAPI_INSTALLED,
      OLLAMA_INSTALLED: process.env.OLLAMA_INSTALLED
    });
  }
  return env;
}
