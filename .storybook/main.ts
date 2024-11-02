import type { StorybookConfig } from '@storybook/react-vite';
// import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // core: {
  //   builder: 'webpack5',
  // },
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: ['style-loader', 'css-loader', 'postcss-loader'],
  //     include: path.resolve(__dirname, '../'),
  //   });
  //   return config;
  // },
};
export default config;
