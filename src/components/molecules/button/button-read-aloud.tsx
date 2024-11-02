import { Icon } from '@/components/atoms';

export const ButtonReadAloud: React.FC<object> = () => {
  return (
    <div aria-label="Read Aloud" className="flex">
      <button
        id="speak-button-a2da5f86-8e58-4284-9394-5d9842c73902"
        className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition"
      >
        <Icon name="audio" />
      </button>
    </div>
  );
};
