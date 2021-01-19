import React from 'react';
import classnames from 'classnames';

export type ButtonSize = 'lg' | 'sm'

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type NativeAnchorProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial< NativeButtonProps & NativeAnchorProps >

const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        disabled,
        size,
        btnType,
        children,
        href,
        ...restProps
    } = props
    // 默认都有btn这个类名， 然后根据type和size和禁用状态来添加类名 如 btn-lg
    const classes = classnames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
    })

    // 如果是link类型是a标签 其他类型是button
    if(btnType === 'link' && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}>
                {children}
            </a>
        )
        
    }else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}>
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: 'default'
}

export default Button