import { Navbar, Footer } from "../components/shared";

const BaseLayouts = ({ children, page = '' }) => {
  const isHomePage = () => page === 'Home';

  return (
    <div className="base-layout">
      <Navbar />
      <div>
        {children}
      </div>
      {isHomePage() && <Footer />}
    </div>
  )
}

export default BaseLayouts;
