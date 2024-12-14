import { ChatImport } from './chat-import';
import { ChatExport } from './chat-export';
import { ChatArchive } from './chat-archive';
import { ChatDelete } from './chat-delete';

export const ChatsSettings: React.FC<object> = () => {
  const handleInport = (text: string, file: File) => {
    console.log('Import chats', text, file);
  };
  const handleExport = (text: string) => {
    console.log('Export chats', text);
  };
  const handleArchive = () => {
    console.log('Archive chats');
  };
  const handleDelete = () => {
    console.log('Delete chats');
  };

  return (
    <>
      <ChatImport text="Import Chats" handleImport={handleInport} />

      <ChatExport text="Export Chats" handleExport={handleExport} />

      <ChatArchive text="Archive Chats" handleArchive={handleArchive} />

      <ChatDelete text="Delete Chats" handleDelete={handleDelete} />
    </>
  );
};
