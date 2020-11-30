import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { useLazyGetUser } from '../../../apollo/actions';
import withApollo from '../../../hoc/withApollo';

import { AppLink } from '../index';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [hasResponse, setHasResponse] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [getUser, { data, error, loading }] = useLazyGetUser();

  useEffect(() => {
    getUser();
  }, []);

  if (data) {
    if (data.user && !user) { setUser(data.user) }
    if (!data.user && user) { setUser(null) }
    if (!hasResponse) { setHasResponse(true) }
  }

  const mobileMenuClasses = classNames('navbar__mobile-menu', {[`navbar__mobile-menu--is-active`]: activeMenu });
  
  const renderMenuList = () => (
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
        <AppLink href="/contacts" className="navbar__link">contacts</AppLink>
      </li>
    </ul>
  );

  const renderRegisterLogin = () => (
    <ul className="navbar__list">
      { hasResponse &&
        <>
          { user &&
            <>
              <li className="navbar__list-item">
                <AppLink href="/logout" className="navbar__link">Log Out</AppLink>
              </li>
            </>
          }
          { (error || !user) &&
            <>
              <li className="navbar__list-item">
                <AppLink href="/registration" className="navbar__link">registration</AppLink>
              </li>
              <li className="navbar__list-item">
                <AppLink href="/login" className="navbar__link">login</AppLink>
              </li>
            </>
          }
        </>
      }
    </ul>
  );


  return (
    <div className="navbar">

      <div className="navbar__column">
        <AppLink href="/" className="logo navbar__logo">pereverziev</AppLink>
      </div>
      
      <div className="navbar__column navbar__column--menu">
        {renderMenuList()}
      </div>

      <div className="navbar__column navbar__column--register-login">
        {renderRegisterLogin()}
      </div>

      <div className="navbar__burger" onClick={() => setActiveMenu(!activeMenu)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={mobileMenuClasses}>
        <div className="navbar__close" onClick={() => setActiveMenu(false)}>
          <div></div>
          <div></div>
        </div>
        {renderMenuList()}
        {renderRegisterLogin()}
      </div>

    </div>
  )
}

export default withApollo(Navbar);
