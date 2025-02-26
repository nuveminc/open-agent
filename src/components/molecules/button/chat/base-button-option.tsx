import { cn } from '@/lib/utils';
import { Icon, IconName } from '@/components/atoms';
import ShadTooltip from '../../common/shad-tooltip';

export type BaseButtonProps = Readonly<{
  name: IconName;
  tooltip?: string;
  className?: string;
}>;

export const BaseButtonOption: React.FC<BaseButtonProps> = ({
  name,
  tooltip,
  className = 'invisible',
}) => {
  return (
    <div aria-label={tooltip} className="flex">
      <ShadTooltip
        content={tooltip}
        side="bottom"
        styleClasses="border-0 text-gray-900 dark:text-white"
      >
        <button
          className={cn(
            className,
            'group-hover:visible p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg dark:hover:text-white hover:text-black transition'
          )}
        >
          <Icon name={name} />
        </button>
      </ShadTooltip>
    </div>
  );
};
