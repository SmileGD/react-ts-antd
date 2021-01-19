import React, { FunctionComponentElement, useState, useContext } from 'react'
import classnames from 'classnames'

import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'

export interface subMenuProps {
    title: string,
    index?: string,
    className?: string
}

const SubMenu: React.FC<subMenuProps> = (props) => {
    const {
        title,
        index,
        className,
        children
    } = props

    const context  = useContext(MenuContext)
    const defaultOpenSubMenus = context.defaultOpenSubMenus as Array<string>
    const isOpened = (index && context.mode === 'vertical') ? defaultOpenSubMenus.includes(index) : false

    // 控制子菜单的显示和隐藏（横向是hover显示，纵向点击显示）
    const [ menuOpen, setOpen ] = useState(isOpened)

    let classes = classnames('wjs-menu-item submenu-item', className, {
        'is-actived': context.index === index
    })

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setOpen(!menuOpen)
    }

    let timer: any
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setOpen(toggle)
        }, 300)
    }

    const clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    }: {}

    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
        onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
    } : {}

    const renderChildren = () => {
        const classNames = classnames('wjs-submenu', {
            'menu-opened': menuOpen
        })
        const childrenComponent = React.Children.map(children, (child, subIndex) => {
            const childElement  = child as FunctionComponentElement<MenuItemProps>
            if(childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: `${index}-${subIndex}`
                })
            }else {
                console.error('Warning: SubMenu has a child which is not a MenuItem component')
            }
        })
        return (
            <ul className={classNames}>
                {childrenComponent}
            </ul>
        )
    }

    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" {...clickEvents}>
                {title}
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu