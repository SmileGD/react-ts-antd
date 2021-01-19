import React from 'react';
import { render, fireEvent, RenderResult, cleanup } from '@testing-library/react';

import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'

// 设置测试的属性
const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test-menu'
}

const testVerProps: MenuProps = {
    defaultIndex: 0,
    mode: 'vertical'
}

// 创建一个生成组建的函数
const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem>
                active
            </MenuItem>
            <MenuItem disabled>
                disabled
            </MenuItem>
            <MenuItem>
                normal
            </MenuItem>
        </Menu>
    )
}

// 定义元素变量
let wrapper: RenderResult,
    menuElement: HTMLElement,
    activeElement: HTMLElement,
    disabledElement: HTMLElement

describe('Test menu and menuItem component', () => {
    // beforeEach 会在每次it()之前调用 且默认先调用cleanup()函数
    // 所以可以将可复用的代码现在这里，减少代码量
    beforeEach(() => {
        wrapper = render(generateMenu(testProps))
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
    })

    it('should render correct Menu and MenuItem base on default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('wjs-menu test-menu')
        expect(menuElement.getElementsByTagName('li').length).toEqual(3)
        expect(activeElement).toHaveClass('wjs-menu-item is-actived')
        expect(disabledElement).toHaveClass('wjs-menu-item is-disabled')
    })

    it('click items should change active and call the right callback', () => {
        const normalItem = wrapper.getByText('normal')
        fireEvent.click(normalItem)
        expect(normalItem).toHaveClass('wjs-menu-item is-actived')
        expect(activeElement).not.toHaveClass('is-actived')
        expect(testProps.onSelect).toHaveBeenCalledWith(2)

        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-actived')
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
    })

    it('should render vertival mode when mode is set to vertival', () => {
        cleanup()
        const wrapper = render(generateMenu(testVerProps))
        const menuElement = wrapper.getByTestId('test-menu')
        expect(menuElement).toHaveClass('menu-vertical')
    })
})