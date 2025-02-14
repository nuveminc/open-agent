import React, { useState } from 'react';
import LeftNav, { Tab } from '../left-nav';

export interface ViewMapping {
  [key: string]: React.ReactElement;
}

export interface DashboardProps {
  tabs: Tab[];
  views: ViewMapping;
}

export const DashboardContainer: React.FC<DashboardProps> = ({
  tabs,
  views,
}) => {
  const [currentView, setCurrentView] = useState<string>(tabs[0].value);

  const handleGroups = (index: number) => {
    setCurrentView(tabs[index].value);
  };

  return (
    <>
      {/* CONTAINER */}
      <div className="flex-1 w-full px-6">
        <div className="flex flex-column">
          {/* NAV COLUMN */}
          <LeftNav tabs={tabs} onChange={handleGroups} />
          {/* MAIN VIEW */}
          {views[currentView]}
        </div>
      </div>
    </>
  );
};
