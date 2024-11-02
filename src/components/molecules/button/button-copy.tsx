import { Icon } from '@/components/atoms/';

export const ButtonCopy: React.FC<object> = () => {
  return (
    <div aria-label="Copy" className="flex">
      <button className="invisible group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition">
        <Icon name="copy" />
      </button>
    </div>
  );
};
