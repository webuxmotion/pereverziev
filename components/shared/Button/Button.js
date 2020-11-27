import classNames from 'classnames';
import AppLink from '../AppLink';

const Button = ({ children, href, size, theme, ...rest }) => {
  const classes = classNames('button', { 
    [`button--theme--${theme}`]: theme,
    [`button--size--${size}`]: size,
  });

  if (href) {
    return <AppLink href={href} className={classes} {...rest}>{children}</AppLink>
  } else {
    return <button className={classes} {...rest}>{children}</button>
  }
}

export default Button;
