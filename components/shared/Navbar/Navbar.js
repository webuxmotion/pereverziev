import AppLink from '../AppLink';

const Navbar = () => {
  
  return (
    <div className="navbar">

      <div className="navbar__column">
        <AppLink href="/" className="logo">pereverziev</AppLink>
      </div>
      
      <div className="navbar__column">
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <AppLink href="/about" className="navbar__link">about</AppLink>
          </li>
          <li className="navbar__list-item">
            <AppLink href="/cv" className="navbar__link">cv</AppLink>
          </li>
          <li className="navbar__list-item">
            <AppLink href="/projects" className="navbar__link">projects</AppLink>
          </li>
          <li className="navbar__list-item">
            <AppLink href="/games" className="navbar__link">games</AppLink>
          </li>
          <li className="navbar__list-item">
            <AppLink href="/contacts" className="navbar__link">contacts</AppLink>
          </li>
        </ul>
      </div>

      <div className="navbar__column">
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <AppLink href="/registration" className="navbar__link">registration</AppLink>
          </li>
          <li className="navbar__list-item">
            <AppLink href="/login" className="navbar__link">login</AppLink>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar;
