// import { useParams } from 'react-router-dom';
// import { usePresenter } from '@/presenters/usePresenter';

import { ChatMessage } from './chat-message';
import { ChatMessageResponse } from './chat-message-response';

export const MainChat: React.FC<object> = () => {
  // const { chatId } = useParams();
  // const { presenter } = usePresenter();

  // Add your chat loading logic here using the chatId

  return (
    <>
      <div className="h-full w-full flex flex-col py-4">
        {/* Your chat messages content */}
        <div className="h-full flex">
          <div className="w-full pt-2">
            <ChatMessage
              text="How many controls are in the SOC2 framework?"
              showDeleteButton={false}
            />
            <ChatMessageResponse text='The Service Organization Control (SOC) 2 framework, developed by the American Institute of Certified Public Accountants (AICPA), contains five categories or "trust services criteria" that an organization may elect to apply. These five categories include:' />
          </div>
        </div>
      </div>
    </>
  );
};
