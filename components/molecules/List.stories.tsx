import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from './List';
import Card from '../atoms/Card';

export default {
  title: 'Molecules/List',
  component: List,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => (
  <List {...args}>
    <Card
      title="Card title"
      list="List title"
      follow={false}
      description="Description Card"
      descriptionCard={''}
      followCard={''}
      id={1}
      listId={1}
      removeCard={''}
    />
  </List>
);

export const Simple = Template.bind({});
Simple.args = {
  title: 'List title',
};
