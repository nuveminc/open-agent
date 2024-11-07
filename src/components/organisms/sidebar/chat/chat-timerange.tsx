export interface ChatTimeRangeProps {
  timeRange: string;
}

export const ChatTimeRange: React.FC<ChatTimeRangeProps> = ({ timeRange }) => {
  return (
    <div className="w-full pl-2.5 text-xs text-gray-500 dark:text-gray-500 font-medium pb-0.5">
      {timeRange}
    </div>
  );
};
