import classNames from 'classnames';
import AppLink from '../AppLink';

const Button = ({ children, href, theme, ...rest }) => {
  const classes = classNames('button', { [`button--theme--${theme}`]: theme });

  if (href) {
    return <AppLink href={href} className={classes}>{children}</AppLink>
  } else {
    return <button className={classes} {...rest}>{children}</button>
  }
}

export default Button;
