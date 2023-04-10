import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    className,
    to,
    onClick,
    href,
    type = 'default',
    size = 'medium',
    disabled,
    rounded,
    children,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Component = 'button';
    const props = {
        onClick: onClick,
        ...passProps,
    };

    if (to) {
        Component = Link;
        props.to = to;
    } else if (href) {
        Component = 'a';
        props.href = href;
    }

    const classes = cx('wrapper', { [type]: type, [size]: size, disabled, rounded }, className);

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('left-icon')}> {leftIcon} </span>}
            {children}
            {rightIcon && <span className={cx('right-icon')}> {rightIcon} </span>}
        </Component>
    );
}

export default Button;
