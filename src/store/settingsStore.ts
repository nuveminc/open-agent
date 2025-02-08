import { ValueType } from '@/types';
import { Settings } from '@/types/settings';
import { create } from 'zustand';

export type SettingsState = Settings & {
  isDirty: boolean;
  modalOpen: boolean;
  controlPanelOpen: boolean;
};

export type SettingsActions = {
  setSettingsValue: (name: string, value: ValueType) => void;
  showModal: (showModal: boolean) => void;
  showControlPanel: (showControlPanel: boolean) => void;
  reset: () => void;
};

export type SettingsStore = SettingsState & SettingsActions;

const defaultValues: SettingsState = {
  isDirty: false,
  theme: 'system',
  language: 'en-GB',
  notifications: true,
  systemPrompt: '',
  parameters: {
    seed: 0,
    stopSequence: 0,
    temperature: 0.75,
    mirostat: 0.0,
    mirostatEta: 0.1,
    mirostatTau: 5.0,
    topK: 5.0,
    topP: 0.9,
    minP: 0.0,
    frequencyPenalty: 1.1,
    repeatLastN: 64.0,
    tfsZ: 1.0,
    contextLength: 2048,
    batchSize: 512.0,
    tokensToKeep: 24,
    maxTokens: 128,
    ollamaUseMnap: true,
    ollamaUseMLock: true,
    ollamaNumThreads: 1,
    ollamaNumGpus: 0,
    keepAlive: '5m',
    requestMode: 'Default',
  },
  modalOpen: false,
  controlPanelOpen: false,
};

/**
 * Store for settings
 */
export const useSettingsStore = create<SettingsStore>((set) => ({
  ...defaultValues,
  // handles settings updates from components
  setSettingsValue: (name: string, value: ValueType) => {
    let newState = null;
    set((state) => {
      newState = { ...state };
      // handle nested settings 'parameters'
      if (typeof value === 'object') {
        newState = {
          ...state,
          parameters: { ...state.parameters, ...value },
        };
      } else {
        newState = { ...state, [name]: value };
      }
      newState.isDirty = true;
      return newState;
    });
  },
  showModal: (showModal: boolean) => set(() => ({ modalOpen: showModal })),
  showControlPanel: (showControlPanel: boolean) =>
    set(() => ({ controlPanelOpen: showControlPanel })),
  reset: () => {
    set(() => ({ ...defaultValues }));
  },
}));
