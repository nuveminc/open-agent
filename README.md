# Open Agent

## Our Perspective
**Augmented Intelligence: Enhancing Human Potential with LLMs and ML**

In a world captivated by the promise of Artificial Intelligence, **Augmented Intelligence** seems to offer a more pragmatic and empowering vision. Rather than replacing human expertise, as this is the current buzz and hype, Large Language Models (LLMs) serve as sophisticated collaborators, amplifying our capabilities and enriching decision-making. By seamlessly integrating human intuition with advanced language-driven assistance, LLMs elevate productivity, creativity, and accuracy, transforming AI from a competitor into a powerful tool that serves to augment human potential.

## Mission Statement

**Our Mission: Empowering Individuals with Personal Agentic Assistants**

In this digital era where efficiency and privacy are paramount, we are committed to revolutionizing personal productivity through the development of autonomous Personal Agentic Assistants. Our goal is to provide the platform by which these assistants can be designed to seamlessly manage business operations, including reviewing, filtering, and drafting responses across various communication channels, documents, and knowledge-bases. Beyond communication and research, agentic assistants can facilitate streamlined workflows in areas of business and daily operations.

**Our Vision: Enhancing Productivity with Privacy-Centric AI**

We envision a future where individuals and businessses harness the power of Augmented Intelligence (AI) to enhance productivity without compromising privacy. By providing simplified tools and intuitive human computer interfaces, we aim to make advanced AI capabilities accessible to all. Our commitment to privacy ensures that users maintain control over their data, fostering trust and security in every interaction.

**Core Principles:**

- **User Empowerment:** Our goal is to provide th platform by which assistants are designed to adapt to individual workflows, offering personalized support that aligns with your unique needs.

- **Privacy First:** We prioritize data security, ensuring that all information processed by your assistants remains confidential and under your control.

- **Simplicity and Elegance:** Our tools are crafted to be both powerful and user-friendly, featuring interfaces that are simple and functional.

- **Continuous Innovation:** We are dedicated to evolving our technology, integrating the latest advancements to provide cutting-edge solutions that anticipate and meet your emerging needs.

By adhering to these principles, we strive to create Personal Agentic Assistants that not only boost productivity but also respect and uphold your privacy and autonomy.

## Our Platform

A Large Language Model (LLM) web chat interface inspired by [Open WebUI](https://github.com/open-webui/open-webui). The Open Agent project is an initiative to create the ultimate private Personal Agentic Assistant interface that simplifies use of Agents and LLMs by removing the confusion and complexity that exists in most tools. 

also support the Open WebUI pipelines initiative to provide an extensibiilty framework to allow for modular, customizable workflows.

The Open Agent project roadmap also includes an open source version of LangGraph Studio to allow for agentic applications designed using a graphical IDE to visualize, interact, and debug agentic applications.

I would like to thank [Timothy Jaeryang Baek](https://github.com/tjbck) for his initiative and Open WebUI project which provided the inspiration for this project.

The main reason for this project is to provide a project that, in my opinion, would provide a static deployment approach using a larger ecosystem of tools namely React. This not meant to compete with Open WebUI, or be in any way opinionated with regards to FE frameworks, but rather to provide an alternative that meets the following requirements:

- A purely static web UI that can be deployed a cloud CDN
- Can alternative be deplyed using a Docker container
- Available to a larger developer community
- Support for Agent Orchestration
- Support for Open WebUI Pipelines Framework

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```