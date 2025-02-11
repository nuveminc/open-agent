import React from 'react';
import { Tab } from '../left-nav';
import { DashboardContainer } from '../dashboard-container';
import { Feedback } from './feedback';
import { Leaderboard } from './leaderboard';

interface ViewMapping {
  [key: string]: React.ReactElement;
}

export const Evaluations: React.FC<object> = () => {
  const tabs: Tab[] = [
    { label: 'Leaderboard', value: 'leaderboard', icon: 'leaderboard' },
    { label: 'Feedback', value: 'feedback', icon: 'feedback' },
  ];

  const mainViews: ViewMapping = {
    leaderboard: <Leaderboard />,
    feedback: <Feedback />,
  };

  return <DashboardContainer tabs={tabs} views={mainViews} />;
};
