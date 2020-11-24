import AppLink from '../AppLink';

const Button = ({ children, href }) => {

  if (href) {
    return <AppLink href={href} className="button">{children}</AppLink>
  } else {
    return <button className="button">{children}</button>
  }
}

export default Button;
