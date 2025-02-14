import React from 'react';
import { Groups } from './groups';
import { Tab } from '../left-nav';
import { DashboardContainer, ViewMapping } from '../common/dashboard-container';
import { AllUsers } from './users';

export const UsersGroups: React.FC<object> = () => {
  const tabs: Tab[] = [
    { label: 'Overview', value: 'users', icon: 'users' },
    { label: 'Groups', value: 'groups', icon: 'groups' },
  ];

  const mainViews: ViewMapping = {
    users: <AllUsers />,
    groups: <Groups />,
  };

  return <DashboardContainer tabs={tabs} views={mainViews} />;
};
