import Link from "next/link";

const AppLink = ({ children, className, href, as, ...rest }) => (
  <Link href={href} as={as}>
    <a className={className} {...rest}>{children}</a>
  </Link>
);

export default AppLink;
