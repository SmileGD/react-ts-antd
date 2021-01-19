import React, { createContext, useState } from 'react';
import classnames from 'classnames';

import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type onSelectCallback = (selectedIndex: string) => void

export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    style?: React.CSSProperties;
    mode?: MenuMode;
    onSelect?: onSelectCallback;
    defaultOpenSubMenus?: string[]
}

interface IMenuContext {
    index: string;
    onSelect?: onSelectCallback;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

const Menu: React.FC<MenuProps> = (props) => {
    const {
        defaultIndex,
        className,
        style,
        mode,
        children,
        onSelect,
        defaultOpenSubMenus
    } = props

    let classes = classnames('wjs-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })

    const [currentActive, setActive] = useState(defaultIndex)

    const handleClick = (index: string) => {
        setActive(index)
        if(onSelect) {
            onSelect(index)
        }
    }

    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus
    }

    // 判断Menu里的子组件是否都是MenuItem组件
    // 使用React.cloneElement()添加属性， 从而去除MenuItem需要传index的操作
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if(displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, { index: index.toString() })
            }else {
                console.error('Warning: Menu has a child which is not a MenuItem component')
            }
        })
    }

    return (
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
}

export default Menu