import { Icon } from '@/components/atoms';
import { useState } from 'react';

export const ChatArchive: React.FC<{
  text: string;
  handleArchive: () => void;
}> = ({ text, handleArchive }) => {
  const [confirm, setConfirm] = useState(false);

  const handleClick = () => {
    setConfirm(!confirm);
  };

  const onArchive = () => {
    // mark all chats archived
    setConfirm(false);
    handleArchive();
  };

  const onCancel = () => {
    setConfirm(false);
  };

  return (
    <div
      className="w-[30rem] flex items-center justify-between mb-3 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center">
        <div className="mr-2">
          <Icon name="archive" stroke="none" fill="currentColor" />
        </div>
        <div>{confirm ? 'Are you sure?' : text}</div>
      </div>
      {confirm && (
        <div className="flex items-center relative top-[2px]">
          <div onClick={onArchive}>
            <Icon name="checkmark" />
          </div>
          <div className="ml-3" onClick={onCancel}>
            <Icon name="xmark" stroke="none" fill="currentColor" />
          </div>
        </div>
      )}
    </div>
  );
};
