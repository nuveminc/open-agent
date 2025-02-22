import React from 'react';
import { EntityCount } from '../common/entity-count';
import { SearchBar } from '@/components/molecules/common/search-bar';
import { LeaderboardTable } from './leaderboard-table';

export const Leaderboard: React.FC = () => {
  return (
    <div className="flex-1 mt-1 lg:mt-0 overflow-auto">
      <div className="mt-0.5 mb-2 gap-1 flex flex-col md:flex-row justify-between">
        <EntityCount title="Leaderboard" count={2} />
        <div className="flex space-x-2">
          <div aria-label="Re-rank models by topic similarity" className="flex">
            <SearchBar />
          </div>
        </div>
      </div>
      <LeaderboardTable />
      <div className="text-gray-500 text-xs mt-1.5 w-full flex justify-end">
        <div className="text-right">
          <div className="line-clamp-1">
            ⓘ The evaluation leaderboard is based on the Elo rating system and
            is updated in real-time.
          </div>{' '}
          The leaderboard is currently in beta, and we may adjust the rating
          calculations as we refine the algorithm.
        </div>
      </div>
    </div>
  );
};
