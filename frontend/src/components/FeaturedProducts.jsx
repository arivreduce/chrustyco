import Wrapper from '../../assets/wrappers/FeaturedProducts';
import LeftFeaturedProduct from './LeftFeaturedProduct';
import SectionDivider from './SectionDivider';

const FeaturedProducts = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h1>Featured Products</h1>
        <SectionDivider />
        <LeftFeaturedProduct />
      </div>
    </Wrapper>
  );
};
export default FeaturedProducts;
