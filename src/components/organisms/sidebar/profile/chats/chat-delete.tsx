import { Icon } from '@/components/atoms';

export const ChatDelete: React.FC<{
  text: string;
  handleDelete: () => void;
}> = ({ text, handleDelete }) => {
  return (
    <div
      className="w-[30rem] flex items-center justify-between mb-3 cursor-pointer"
      onClick={() => {
        handleDelete();
      }}
    >
      <div className="flex items-center">
        <div className="mr-2">
          <Icon name="delete" stroke="none" fill="currentColor" />
        </div>
        <div>{text}</div>
      </div>
    </div>
  );
};
