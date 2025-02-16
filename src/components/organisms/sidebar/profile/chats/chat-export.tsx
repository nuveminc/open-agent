import { Icon } from '@/components/atoms';
import { saveAs } from 'file-saver';

export interface Message {
  id: string;
  parentId: string;
  childrenIds: string[];
  role: string;
  content: string;
  timestamp: number;
  models: string[];
}

export interface Chat {
  id: string;
  user_id: string;
  title: string;
  chat: {
    id: string;
    title: string;
    models: string[];
    params: Record<string, unknown>;
    messages: Message[];
    history: {
      messages: Record<string, Message>;
      currentId: string;
    };
    tags: string[];
    timestamp: number;
    files: string[];
  };
}

export const ChatExport: React.FC<{
  text: string;
  handleExport: (text: string) => void;
}> = ({ text, handleExport }) => {
  const data = [
    {
      id: '895f394f-449d-4041-9864-42354922b655',
      user_id: '5f0bc7ae-1d1f-4777-9bc6-0070253850d2',
      title: 'Open Source LLM Resources 🤖',
      chat: {
        id: '',
        title: 'Open Source LLM Resources 🤖',
        models: ['llama3.1:latest'],
        params: {},
        messages: [
          {
            id: '9be5201a-d66b-40fe-bd09-52a3cb10b8eb',
            parentId: null,
            childrenIds: ['244f3923-5120-4ed4-bbd6-eff9add7a589'],
            role: 'user',
            content:
              'Where do I look to find the latest open source LLMs and their performance benchmarks?',
            timestamp: 1730748937,
            models: ['llama3.1:latest'],
          },
          {
            parentId: '9be5201a-d66b-40fe-bd09-52a3cb10b8eb',
            id: '244f3923-5120-4ed4-bbd6-eff9add7a589',
            childrenIds: ['c17163cc-f98f-4758-a12f-0c1fd7e25622'],
            role: 'assistant',
            content:
              'There are several resources where you can find the latest open-source Large Language Models (LLMs) and their performance benchmarks:\n\n1. **GitHub**: Many open-source LLM repositories are hosted on GitHub. You can search for keywords like "language model", " transformer", or specific architectures like BERT, RoBERTa, etc.\n2. **Hugging Face\'s Model Hub**: Hugging Face is a popular platform for natural language processing (NLP) and machine learning models. Their Model Hub features a wide range of pre-trained LLMs, along with their performance benchmarks and example code.\n3. **Stanford Natural Language Processing Group\'s Models**: The Stanford NLP group maintains a collection of open-source NLP models, including some popular LLMs like BERT and RoBERTa.\n4. **Google\'s AutoML and TensorFlow Hub**: Google offers a range of pre-trained models through their AutoML and TensorFlow Hub platforms. These models include some open-source LLMs that you can use for research or development purposes.\n5. **Allen Institute for Artificial Intelligence (AI2)**: AI2 publishes research papers on NLP and releases corresponding open-source code, including LLMs like the Longformer and BigBird architectures.\n6. **The Pile**: The Pile is a massive multilingual language model released by Meta AI. The associated GitHub repository contains performance benchmarks and example usage code for the model.\n7. **Research papers on arXiv**: You can search for research papers on arXiv, which often include open-source code and performance benchmarks for newly proposed LLMs.\n\nTo stay up-to-date with the latest developments in LLMs, I recommend:\n\n* Following prominent researchers and organizations in NLP on Twitter or GitHub.\n* Subscribing to online forums like Reddit\'s r/MachineLearning and r/NaturalLanguageProcessing.\n* Keeping an eye on popular blogs and websites that cover AI and NLP news.\n\nSome specific resources for performance benchmarks include:\n\n* The GLUE benchmark: A standard evaluation dataset and benchmark for LLMs, covering various NLP tasks.\n* SuperGLUE: An extension of the GLUE benchmark with additional tasks and a larger range of models.\n* The Hugging Face Transformers library includes pre-trained models and performance benchmarks for several popular architectures.\n\nRemember to check the licenses and usage terms associated with each model before using them in your projects. Happy exploring!',
            model: 'llama3.1:latest',
            modelName: 'llama3.1:latest',
            modelIdx: 0,
            userContext: null,
            timestamp: 1730748937,
            lastSentence:
              'Remember to check the licenses and usage terms associated with each model before using them in your projects.',
            done: true,
            context: null,
            info: {
              total_duration: 23054016272,
              load_duration: 12359061863,
              prompt_eval_count: 28,
              prompt_eval_duration: 122145000,
              eval_count: 486,
              eval_duration: 10510563000,
            },
          },
          {
            id: 'c17163cc-f98f-4758-a12f-0c1fd7e25622',
            parentId: '244f3923-5120-4ed4-bbd6-eff9add7a589',
            childrenIds: ['918924d9-5551-40f8-9343-f53cd00dbb6c'],
            role: 'user',
            content:
              'Where can I find up to date summaries of all arXiv articles on AI and ML?',
            timestamp: 1730749080,
            models: ['llama3.1:latest'],
          },
          {
            parentId: 'c17163cc-f98f-4758-a12f-0c1fd7e25622',
            id: '918924d9-5551-40f8-9343-f53cd00dbb6c',
            childrenIds: [],
            role: 'assistant',
            content:
              "There are several resources where you can find up-to-date summaries of arXiv articles on AI and ML:\n\n1. **arXiv Sanity Preserver**: This is a popular website that provides human-written summaries (called \"sanity preserving\" notes) for many arXiv papers, including those in the computer science, machine learning, and AI communities.\n2. **Paper Digest**: Paper Digest offers brief summaries of research papers from top conferences like NeurIPS, ICLR, ICML, and others, as well as arXiv articles. They also provide sentiment analysis and keywords for each paper.\n3. **Distill.pub**: Distill is a platform that presents in-depth explanations of various machine learning concepts, techniques, and models, often using insights from recent research papers on arXiv.\n4. **Medium's AI and Machine Learning Channels**: Medium features several popular channels dedicated to AI and ML, where you can find summaries, explanations, and reviews of recent research papers, including those on arXiv.\n5. **Towards Data Science (TDS)**: TDS is a Medium channel focused on data science, machine learning, and AI. They regularly publish articles summarizing recent research papers on arXiv and other platforms.\n6. **The Gradient**: The Gradient is an online publication that provides in-depth analysis of AI and ML research, including summaries of recent arXiv articles.\n7. **arXiv's own blog**: Occasionally, arXiv publishes a blog post highlighting a specific article or a collection of related papers.\n\nTo stay up-to-date with the latest developments in AI and ML, I recommend:\n\n* Following prominent researchers, journals, and organizations on social media (e.g., Twitter).\n* Subscribing to online forums like Reddit's r/MachineLearning and r/NaturalLanguageProcessing.\n* Regularly checking the websites of top conferences (e.g., NeurIPS, ICLR, ICML) and research institutions for recent publication announcements.\n\nSome popular blogs that summarize AI and ML research on arXiv include:\n\n* **Andrew Ng's Machine Learning**: Andrew Ng regularly shares summaries of recent papers on machine learning and AI.\n* **Yann LeCun's Blog**: Yann LeCun, a prominent researcher in deep learning, occasionally summarizes recent papers and provides insights into the field.\n\nPlease note that these resources might not be exhaustive, and new summaries or blogs may emerge. Be sure to explore multiple sources to get a comprehensive understanding of the latest developments in AI and ML!",
            model: 'llama3.1:latest',
            modelName: 'llama3.1:latest',
            modelIdx: 0,
            userContext: null,
            timestamp: 1730749080,
            lastSentence:
              'Please note that these resources might not be exhaustive, and new summaries or blogs may emerge.',
            done: true,
            context: null,
            info: {
              total_duration: 544481573,
              load_duration: 13793032,
              prompt_eval_count: 1051,
              prompt_eval_duration: 275008000,
              eval_count: 1,
              eval_duration: 41000,
            },
          },
        ],
        history: {
          messages: {
            '9be5201a-d66b-40fe-bd09-52a3cb10b8eb': {
              id: '9be5201a-d66b-40fe-bd09-52a3cb10b8eb',
              parentId: null,
              childrenIds: ['244f3923-5120-4ed4-bbd6-eff9add7a589'],
              role: 'user',
              content:
                'Where do I look to find the latest open source LLMs and their performance benchmarks?',
              timestamp: 1730748937,
              models: ['llama3.1:latest'],
            },
            '244f3923-5120-4ed4-bbd6-eff9add7a589': {
              parentId: '9be5201a-d66b-40fe-bd09-52a3cb10b8eb',
              id: '244f3923-5120-4ed4-bbd6-eff9add7a589',
              childrenIds: ['c17163cc-f98f-4758-a12f-0c1fd7e25622'],
              role: 'assistant',
              content:
                'There are several resources where you can find the latest open-source Large Language Models (LLMs) and their performance benchmarks:\n\n1. **GitHub**: Many open-source LLM repositories are hosted on GitHub. You can search for keywords like "language model", " transformer", or specific architectures like BERT, RoBERTa, etc.\n2. **Hugging Face\'s Model Hub**: Hugging Face is a popular platform for natural language processing (NLP) and machine learning models. Their Model Hub features a wide range of pre-trained LLMs, along with their performance benchmarks and example code.\n3. **Stanford Natural Language Processing Group\'s Models**: The Stanford NLP group maintains a collection of open-source NLP models, including some popular LLMs like BERT and RoBERTa.\n4. **Google\'s AutoML and TensorFlow Hub**: Google offers a range of pre-trained models through their AutoML and TensorFlow Hub platforms. These models include some open-source LLMs that you can use for research or development purposes.\n5. **Allen Institute for Artificial Intelligence (AI2)**: AI2 publishes research papers on NLP and releases corresponding open-source code, including LLMs like the Longformer and BigBird architectures.\n6. **The Pile**: The Pile is a massive multilingual language model released by Meta AI. The associated GitHub repository contains performance benchmarks and example usage code for the model.\n7. **Research papers on arXiv**: You can search for research papers on arXiv, which often include open-source code and performance benchmarks for newly proposed LLMs.\n\nTo stay up-to-date with the latest developments in LLMs, I recommend:\n\n* Following prominent researchers and organizations in NLP on Twitter or GitHub.\n* Subscribing to online forums like Reddit\'s r/MachineLearning and r/NaturalLanguageProcessing.\n* Keeping an eye on popular blogs and websites that cover AI and NLP news.\n\nSome specific resources for performance benchmarks include:\n\n* The GLUE benchmark: A standard evaluation dataset and benchmark for LLMs, covering various NLP tasks.\n* SuperGLUE: An extension of the GLUE benchmark with additional tasks and a larger range of models.\n* The Hugging Face Transformers library includes pre-trained models and performance benchmarks for several popular architectures.\n\nRemember to check the licenses and usage terms associated with each model before using them in your projects. Happy exploring!',
              model: 'llama3.1:latest',
              modelName: 'llama3.1:latest',
              modelIdx: 0,
              userContext: null,
              timestamp: 1730748937,
              lastSentence:
                'Remember to check the licenses and usage terms associated with each model before using them in your projects.',
              done: true,
              context: null,
              info: {
                total_duration: 23054016272,
                load_duration: 12359061863,
                prompt_eval_count: 28,
                prompt_eval_duration: 122145000,
                eval_count: 486,
                eval_duration: 10510563000,
              },
            },
            'c17163cc-f98f-4758-a12f-0c1fd7e25622': {
              id: 'c17163cc-f98f-4758-a12f-0c1fd7e25622',
              parentId: '244f3923-5120-4ed4-bbd6-eff9add7a589',
              childrenIds: ['918924d9-5551-40f8-9343-f53cd00dbb6c'],
              role: 'user',
              content:
                'Where can I find up to date summaries of all arXiv articles on AI and ML?',
              timestamp: 1730749080,
              models: ['llama3.1:latest'],
            },
            '918924d9-5551-40f8-9343-f53cd00dbb6c': {
              parentId: 'c17163cc-f98f-4758-a12f-0c1fd7e25622',
              id: '918924d9-5551-40f8-9343-f53cd00dbb6c',
              childrenIds: [],
              role: 'assistant',
              content:
                "There are several resources where you can find up-to-date summaries of arXiv articles on AI and ML:\n\n1. **arXiv Sanity Preserver**: This is a popular website that provides human-written summaries (called \"sanity preserving\" notes) for many arXiv papers, including those in the computer science, machine learning, and AI communities.\n2. **Paper Digest**: Paper Digest offers brief summaries of research papers from top conferences like NeurIPS, ICLR, ICML, and others, as well as arXiv articles. They also provide sentiment analysis and keywords for each paper.\n3. **Distill.pub**: Distill is a platform that presents in-depth explanations of various machine learning concepts, techniques, and models, often using insights from recent research papers on arXiv.\n4. **Medium's AI and Machine Learning Channels**: Medium features several popular channels dedicated to AI and ML, where you can find summaries, explanations, and reviews of recent research papers, including those on arXiv.\n5. **Towards Data Science (TDS)**: TDS is a Medium channel focused on data science, machine learning, and AI. They regularly publish articles summarizing recent research papers on arXiv and other platforms.\n6. **The Gradient**: The Gradient is an online publication that provides in-depth analysis of AI and ML research, including summaries of recent arXiv articles.\n7. **arXiv's own blog**: Occasionally, arXiv publishes a blog post highlighting a specific article or a collection of related papers.\n\nTo stay up-to-date with the latest developments in AI and ML, I recommend:\n\n* Following prominent researchers, journals, and organizations on social media (e.g., Twitter).\n* Subscribing to online forums like Reddit's r/MachineLearning and r/NaturalLanguageProcessing.\n* Regularly checking the websites of top conferences (e.g., NeurIPS, ICLR, ICML) and research institutions for recent publication announcements.\n\nSome popular blogs that summarize AI and ML research on arXiv include:\n\n* **Andrew Ng's Machine Learning**: Andrew Ng regularly shares summaries of recent papers on machine learning and AI.\n* **Yann LeCun's Blog**: Yann LeCun, a prominent researcher in deep learning, occasionally summarizes recent papers and provides insights into the field.\n\nPlease note that these resources might not be exhaustive, and new summaries or blogs may emerge. Be sure to explore multiple sources to get a comprehensive understanding of the latest developments in AI and ML!",
              model: 'llama3.1:latest',
              modelName: 'llama3.1:latest',
              modelIdx: 0,
              userContext: null,
              timestamp: 1730749080,
              lastSentence:
                'Please note that these resources might not be exhaustive, and new summaries or blogs may emerge.',
              done: true,
              context: null,
              info: {
                total_duration: 544481573,
                load_duration: 13793032,
                prompt_eval_count: 1051,
                prompt_eval_duration: 275008000,
                eval_count: 1,
                eval_duration: 41000,
              },
            },
          },
          currentId: '918924d9-5551-40f8-9343-f53cd00dbb6c',
        },
        tags: [],
        timestamp: 1730748937976,
        files: [],
      },
      updated_at: 1730749165,
      created_at: 1730748938,
      share_id: null,
      archived: false,
    },
  ];

  const exportChats = async () => {
    const blob: Blob = new Blob([JSON.stringify(data)], {
      type: 'application/json',
    });
    handleExport(await blob.text());
    saveAs(blob, `chat-export-22-${Date.now()}.json`);
  };

  return (
    <div
      className="flex items-center mb-6 cursor-pointer"
      onClick={exportChats}
    >
      <div className="mr-2">
        <Icon name="fileDownload" stroke="none" fill="currentColor" />
      </div>
      {text}
    </div>
  );
};
