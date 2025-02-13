import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import React from 'react';

export const LeaderboardTable: React.FC = () => {
  const leaders = [
    { rank: '-', model: 'llama3.1:latest', rating: '-', won: '-', lost: '-' },
    { rank: '-', model: 'llama3.1:latest', rating: '-', won: '-', lost: '-' },
  ];
  return (
    <div className="scrollbar-hidden relative whitespace-nowrap overflow-x-auto max-w-full svelte-3g4avz">
      <Table>
        <TableHeader>
          <TableRow
            className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-850"
            style={{ height: '2rem' }}
          >
            <TableHead>RK</TableHead>
            <TableHead>MODEL</TableHead>
            <TableHead>RATING</TableHead>
            <TableHead>WON</TableHead>
            <TableHead>LOST</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-xs text-gray-500 dark:text-gray-400">
          {leaders.map((item, idx) => (
            <TableRow key={`user-${idx}`}>
              <TableCell className="text-center">{item.rank}</TableCell>
              <TableCell className="w-full">{item.model}</TableCell>
              <TableCell className="text-center text-white-800">
                {item.rating}
              </TableCell>
              <TableCell className="text-center text-green-800">
                {item.won}
              </TableCell>
              <TableCell className="text-center text-red-800">
                {item.lost}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
