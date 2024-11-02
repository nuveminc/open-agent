import type { Meta, StoryObj } from '@storybook/react';

import { ButtonBadResponse } from '@/components/molecules/button/button-bad-response';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'OA/ButtonBadResponse',
  component: ButtonBadResponse,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    className: {
      control: { type: 'boolean' },
      description: 'Toggle Visibility',
      mapping: {
        true: '',
        false: 'invisible',
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof ButtonBadResponse>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Visible: Story = {
  args: {
    ariaLabel: '',
    className: '',
  },
};

export const Hidden: Story = {
  args: {
    ariaLabel: '',
    className: 'invisible',
  },
};

// export const Destructive: Story = {
//   args: {
//     variant: 'destructive',
//     children: 'Button',
//   },
// };

// export const Ghost: Story = {
//   args: {
//     variant: 'ghost',
//     children: 'Button',
//   },
// };

// export const Outline: Story = {
//   args: {
//     variant: 'outline',
//     children: 'Button',
//   },
// };
