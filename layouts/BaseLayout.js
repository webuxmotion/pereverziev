import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

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
