import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SettingsToggleDisplay } from '../../../../molecules/settings/settings-toggle-display';
import { NameSetting } from './name-setting';
import { PasswordSetting } from './password-setting';
import { InputHiddenControl } from '@/components/molecules/common/input-hidden-control';

export const AccountSettings: React.FC = () => {
  const [avatarType, setAvatarType] = useState<
    'initials' | 'gravatar' | 'remove'
  >('initials');

  const jwtToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGJjN2FlLTFkMWYtNDc3Ny05YmM2LTAwNzAyNTM4NTBkMiJ9.tE65R9yL3eX9oeyuuUON_wPMub8dYCofBmmiwdQpZfE';

  const pwd = '********';

  const handleAvatarType = (type: 'initials' | 'gravatar' | 'remove') => {
    if (type !== 'remove') {
      setAvatarType(type);
    }
  };

  const nameChangeHandler = (value: string) => {
    console.log(value);
  };

  const [isNewKey, setIsNewKey] = useState(false);
  const [apiKeyValue, setApiKeyValue] = useState('');
  const newKeyHandler = () => {
    const apiKey = generateApiKey();
    setApiKeyValue(apiKey);
    setIsNewKey(!isNewKey);
  };

  const generateApiKey = (): string => {
    const apiKey = crypto.randomUUID();
    return apiKey.replaceAll('-', '');
  };

  const generateKeyHandler = () => {
    const apiKey = generateApiKey();
    setApiKeyValue(apiKey);
  };
  return (
    <>
      <div className="flex">
        <Avatar className="size-[5rem]">
          {avatarType === 'initials' && (
            // TODO: Investigate - AvatarFallback doesn't render after changing the avatarType
            <AvatarFallback className="bg-orange-400 text-white text-[2rem]">
              CN
            </AvatarFallback>
          )}
          {avatarType === 'gravatar' && (
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          )}
        </Avatar>
        <div className="ml-3">
          <div className="font-bold">Profile Image</div>
          <div className="flex text-sm ml-4 mt-1 gap-4 cursor-pointer">
            <div
              onClick={() => {
                handleAvatarType('initials');
              }}
            >
              Use Initials
            </div>
            <div
              onClick={() => {
                handleAvatarType('gravatar');
              }}
            >
              Use Gravatar
            </div>
            <div
              onClick={() => {
                handleAvatarType('remove');
              }}
            >
              Remove
            </div>
          </div>
        </div>
      </div>
      <NameSetting
        label="Name"
        value="cn"
        controlName="name"
        onChange={nameChangeHandler}
      ></NameSetting>
      <div className="my-3">
        <SettingsToggleDisplay
          label="Change Password"
          options={['Show', 'Hide']}
        >
          <PasswordSetting value={pwd} />
        </SettingsToggleDisplay>
      </div>
      <SettingsToggleDisplay label="API Keys" options={['Show', 'Hide']}>
        <div>
          <div className="text-xs">JWT Token</div>
          <InputHiddenControl value={jwtToken} />
        </div>
        <div className="mt-2">
          <div className="text-xs">API Key</div>
          {isNewKey && (
            <InputHiddenControl
              value={apiKeyValue}
              generateKey={generateKeyHandler}
            />
          )}
          {!isNewKey && (
            <button
              onClick={newKeyHandler}
              className="flex items-center text-xs mt-2 rounded-md pl-2 py-2 pr-3 border-2 border-gray-600 hover:bg-gray-800 hover:border-gray-800"
            >
              <Plus className="size-3 mr-1" />
              Create API Key
            </button>
          )}
        </div>
      </SettingsToggleDisplay>
    </>
  );
};
