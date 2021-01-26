import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'
// import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'


import Button, { ButtonProps } from './button'

export default {
    title: 'Custom/Button',
    component: Button,
    argTypes: {
        backgroundColor: {
            control: 'color'
        },
        color: {
            control: 'color'
        }
    }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}></Button>

export const Primary = Template.bind({})
Primary.args = {
    btnType: 'primary',
    children: 'Primary Button',
    onClick: action('click primary button')
}

export const Default = Template.bind({})
Default.args = {
    btnType: 'default',
    children: 'Default Button'
}

export const Danger = Template.bind({})
Danger.args = {
    btnType: 'danger',
    children: 'Danger Button'
}

export const Link = Template.bind({})
Link.args = {
    btnType: 'link',
    href: 'www.baidu.com',
    children: '百度地址'
}