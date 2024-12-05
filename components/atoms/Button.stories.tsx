import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Storybook</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const tertiary = Template.bind({});
tertiary.args = {
  type: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
};

export const Follow = Template.bind({});
Follow.args = {
  type: 'follow',
};

export const Delete = Template.bind({});
Delete.args = {
  type: 'delete',
};
