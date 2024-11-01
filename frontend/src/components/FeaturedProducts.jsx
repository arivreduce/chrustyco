import Wrapper from '../../assets/wrappers/FeaturedProducts';
import LeftFeaturedProduct from './LeftFeaturedProduct';
import { featuredProducts } from '../data';
import RightFeaturedProduct from './RightFeaturedProduct';
import Categories from './Categories';
const { product1, product2, product3, product4, product5 } = featuredProducts;

const FeaturedProducts = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h1>Featured Products</h1>
        <LeftFeaturedProduct {...product1} />
        <RightFeaturedProduct {...product2} />
        <LeftFeaturedProduct {...product3} />
        <RightFeaturedProduct {...product4} />
        <LeftFeaturedProduct {...product5} />
        <Categories />
      </div>
    </Wrapper>
  );
};
export default FeaturedProducts;
