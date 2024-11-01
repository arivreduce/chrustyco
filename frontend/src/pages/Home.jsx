import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ShopnowHero from '../components/ShopnowHero';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShopnowHero />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};
export default Home;
