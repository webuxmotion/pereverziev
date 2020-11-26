import AppLink from '../AppLink';

const Button = ({ children, href, ...rest }) => {

  if (href) {
    return <AppLink href={href} className="button">{children}</AppLink>
  } else {
    return <button className="button" {...rest}>{children}</button>
  }
}

export default Button;
