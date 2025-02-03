interface PromptCardProps {
  prompt: { title: string; description: string };
  onClick: (prompt: string) => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({ prompt, onClick }) => {
  const handleClick = (): void => {
    console.log('Prompt clicked', prompt);
    onClick(prompt.title);
  };

  return (
    <div className="snap-center shrink-0">
      <button
        onClick={handleClick}
        className="flex flex-col flex-1 shrink-0 w-64 justify-between h-36 p-5 px-6 bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 rounded-3xl transition group"
      >
        <div className="flex flex-col text-left">
          <div className="font-medium dark:text-gray-300 dark:group-hover:text-gray-200 transition">
            {prompt.title}
          </div>
          <div className="text-sm text-gray-600 font-normal line-clamp-2">
            {prompt.description}
          </div>
        </div>
        {/* ...footer content */}
      </button>
    </div>
  );
};
