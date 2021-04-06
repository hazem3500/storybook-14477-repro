import React from 'react';

import { Button } from '@chakra-ui/react';

export default {
  title: 'Example/Button',
  component: Button,
  args: {
    children: 'Button'
  }
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({})