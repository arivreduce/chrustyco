import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Layout;
