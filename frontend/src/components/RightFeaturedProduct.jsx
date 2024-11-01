import Wrapper from '../../assets/wrappers/RightFeaturedProduct';

const RightFeaturedProduct = ({ name, price, img, id }) => {
  return (
    <Wrapper className="right-featured-product">
      <div className="featured-products-container">
        <h3>{name}</h3>
        <p>${price.toFixed(2)}</p>
        <button type="button">Shop Now</button>
      </div>
      <img src={img} alt={name} />
    </Wrapper>
  );
};
export default RightFeaturedProduct;
