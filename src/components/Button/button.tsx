import React from 'react';
import classnames from 'classnames';

export type ButtonSize = 'lg' | 'sm'

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'
interface BaseButtonProps {
    /**
     *  用户样式类名
     */
    className?: string;
    /**
     * 是否禁用按钮，默认false
     */
    disabled?: boolean;
    /**
     * 按钮的尺寸大小
     */
    size?: ButtonSize;
    /**
     *  button type 按钮的类型
     */
    btnType?: ButtonType;
    /**
     * 按钮自定义节点
     */
    children: React.ReactNode;
    /**
     * link按钮的链接地址
     */
    href?: string;
    /**
     * 自定义按钮背景色
     */
    backgroundColor?: string
    /**
     * 自定义文字颜色
     */
    color?: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type NativeAnchorProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial< NativeButtonProps & NativeAnchorProps >

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        disabled,
        size,
        btnType,
        children,
        href,
        backgroundColor,
        color,
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
                style={{ color }}
                {...restProps}>
                {children}
            </a>
        )
        
    }else {
        return (
            <button
                className={classes}
                disabled={disabled}
                style={{ color, backgroundColor }}
                {...restProps}>
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: 'default',
    size: 'sm'
}

export default Button