import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListContainer from './ListContainer';
import { dataset } from '../../data/dataset';

export default {
  title: 'Organisms/ListContainer',
  component: ListContainer,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ListContainer>;

const Template: ComponentStory<typeof ListContainer> = (args) => (
  <ListContainer {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  items: dataset,
};
