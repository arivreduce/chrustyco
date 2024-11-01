import Wrapper from '../../assets/wrappers/LeftFeaturedProduct';

const LeftFeaturedProduct = ({ name, price, img, id }) => {
  return (
    <Wrapper className="left-featured-product">
      <img src={img} alt={name} />
      <div className="featured-products-container">
        <h3>{name}</h3>
        <p>${price.toFixed(2)}</p>
        <button type="button">Shop Now</button>
      </div>
    </Wrapper>
  );
};
export default LeftFeaturedProduct;
