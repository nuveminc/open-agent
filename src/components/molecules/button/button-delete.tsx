import { Icon } from '@/components/atoms';

export const ButtonDelete: React.FC<object> = () => {
  return (
    <div aria-label="Delete" className="flex">
      <button className="invisible group-hover:visible p-1 rounded dark:hover:text-white hover:text-black transition">
        <Icon name="delete" />
      </button>
    </div>
  );
};
