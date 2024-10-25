import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import SectionDivider from '../components/SectionDivider';
import ShopnowHero from '../components/ShopnowHero';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShopnowHero />
      <SectionDivider />
    </div>
  );
};
export default Home;
