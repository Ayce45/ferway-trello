import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Home from './index.page';

export default {
  title: 'Page/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Default = Template.bind({});
