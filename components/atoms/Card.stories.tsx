import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}></Card>;

export const Simple = Template.bind({});
Simple.args = {
  title: 'Storybook',
  description: '',
  follow: false,
};

export const Follow = Template.bind({});
Follow.args = {
  title: 'Storybook',
  description: '',
  follow: true,
};

export const Description = Template.bind({});
Description.args = {
  title: 'Storybook',
  description: 'Storybook',
  follow: false,
};

export const FollowDescription = Template.bind({});
FollowDescription.args = {
  title: 'Storybook',
  description: 'Storybook',
  follow: true,
};
