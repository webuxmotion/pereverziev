import AppLink from '../AppLink';

const Navbar = () => {
  
  return (
    <div className="navbar">
      <div className="navbar__column">
        <AppLink href="/" className="logo">_pereverziev-</AppLink>
      </div>
      
      <div className="navbar__column">
        <AppLink href="/about" style={{paddingRight: '10px'}}>about</AppLink>
        <AppLink href="/cv">cv</AppLink>
      </div>
    </div>
  )
}

export default Navbar;
