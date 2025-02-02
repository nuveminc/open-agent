export type SettingParameters = {
  seed: number;
  stopSequence: number;
  temperature: number;
  mirostat: number;
  mirostatEta: number;
  mirostatTau: number;
  topK: number;
  topP: number;
  minP: number;
  frequencyPenalty: number;
  repeatLastN: number;
  tfsZ: number;
  contentLength: number;
  batchSize: number;
  tokensToKeep: number;
  maxTokens: number;
  ollamaUseMnap: boolean;
  ollamaUseMLock: boolean;
  ollamaNumThreads: number;
  ollamaNumGpus: number;
  keepAlive: string;
  requestMode: string;
};

export type Settings = {
  theme: string;
  language: string;
  notifications: boolean;
  systemPrompt: string;
  parameters: SettingParameters;
};
