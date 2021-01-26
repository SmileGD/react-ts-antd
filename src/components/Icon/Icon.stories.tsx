import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Icon, { IconProps } from './icon'

export default {
    title: 'Custom/Icon',
    component: Icon
} as Meta

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const PrimaryIcon = Template.bind({})
PrimaryIcon.args = {
    theme: 'primary',
    icon: 'arrow-down'
}

export const SuccessIcon = Template.bind({})
SuccessIcon.args = {
    theme: 'success',
    icon: 'arrow-down'
}