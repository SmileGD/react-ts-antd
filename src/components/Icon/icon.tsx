import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type ThemeProps = 'primary' | 'secondary' | 'success'
| 'info' | 'warning' | 'danger' | 'light' | 'dark'
export interface IconProps extends FontAwesomeIconProps {
    /**
     * icon的主题
     */
    theme?: ThemeProps
}

export const Icon: React.FC<IconProps> = (props) => {
    const { className, theme, ...restProps } = props
    const classes = classnames('wjs-icon', className, {
        [`icon-${theme}`]: theme
    })
    return (
        <FontAwesomeIcon className={classes} {...restProps}></FontAwesomeIcon>
    )
}

Icon.defaultProps = {
    size: '1x'
}

export default Icon