import { Icon } from '@/components/atoms';
import React, { useState } from 'react';

export const ChatImport: React.FC<{
  text: string;
  handleImport: (text: string, file: File) => void;
}> = ({ text, handleImport }) => {
  const [, setFile] = useState<File | null>(null);

  const handleButtonClick = () => {
    document.getElementById('fileInput')?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      readFile(selectedFile);
      // Reset the file input value to allow the same file to be selected again
      e.target.value = '';
    }
  };

  const readFile = (file: File) => {
    return new Promise<void>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const text = event.target?.result as string;
        console.log('File content:', JSON.parse(text));
        handleImport(text, file);
        // save file to API
        resolve();
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
        reject(error);
      };
      reader.readAsText(file); // You can use readAsDataURL or readAsBinaryString based on your requirement
    });
  };

  return (
    <div className="input-group">
      <input
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <div className="flex items-center mb-3 cursor-pointer">
        <div className="mr-2">
          <Icon name="fileUpload" stroke="none" fill="currentColor" />
        </div>
        <button onClick={handleButtonClick}>{text}</button>
      </div>
    </div>
  );
};
