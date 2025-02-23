import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { router } from '@/routes';

export type TabsProps = Readonly<{
  label: string;
  view: React.ReactElement;
  href?: string;
}>;

type AdminTabsProps = Readonly<{
  tabs: TabsProps[];
}>;

export const AdminTabs: React.FC<AdminTabsProps> = ({ tabs }) => {
  const [selected, setSelected] = useState<number>(0);

  // Reset to first tab on mount
  useEffect(() => {
    setSelected(0);
    if (location.pathname !== tabs[0].href) {
      router.navigate(tabs[0].href || '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array - runs once on mount

  useEffect(() => {
    const currentTabIndex = tabs.findIndex(
      (tab) => tab.href === location.pathname
    );
    if (currentTabIndex !== -1) {
      setSelected(currentTabIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, tabs, selected]);

  const selectedStyle = ' bg-gray-50 dark:bg-gray-850';

  const handleClick = (idx: number) => () => {
    router.navigate(tabs[idx].href || '');
    setSelected(idx);
  };

  return (
    <>
      <div className="px-4 my-1">
        <div className="flex scrollbar-none overflow-x-auto w-fit text-center text-sm font-medium rounded-xl bg-transparent/10 p-1">
          {tabs.map((tab, idx) => (
            <div
              key={`tab-${idx}`}
              className={cn(
                'min-w-fit rounded-lg p-1.5 px-3 mr-1 transition cursor-pointer',
                selected === idx ? selectedStyle : ''
              )}
              onClick={handleClick(idx)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
      <hr className="mb-2 dark:border-gray-850" />
    </>
  );
};
