import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonType, ButtonSize } from './button'

const defaultProps = {
    onClick: jest.fn()
}

const primaryProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'nine'
}

const linkProps: ButtonProps = {
    btnType: ButtonType.Link,
    size: ButtonSize.Small,
    href: 'https://www.baidu.com'
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

describe('test Button component', () => {
    it('should render the correct default button', () => {
        let wrapper = render(<Button {...defaultProps}>Hello</Button>)
        let element = wrapper.getByText('Hello') as HTMLButtonElement
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeFalsy()
        expect(element).toHaveClass('btn btn-default')
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })

    it('should render the correct component based on different props', () => {
        let wrapper = render(<Button {...primaryProps}>Hello</Button>)
        let element = wrapper.getByText('Hello')
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn-primary btn-lg nine')
    })

    it('should render a link when btnTpye is equal Link and href prop is provided', () => {
        let wrapper = render(<Button {...linkProps}>Hello</Button>)
        let element = wrapper.getByText('Hello')
        expect(element.tagName).toEqual('A')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn-link btn-sm')
    })

    it('should render disabled Button when the disabled props is true', () => {
        let wrapper = render(<Button {...disabledProps}>Hello</Button>)
        let element = wrapper.getByText('Hello') as HTMLButtonElement
        expect(element.tagName).toEqual('BUTTON')
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})