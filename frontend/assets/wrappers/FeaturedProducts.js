import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  text-align: center;
  img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  button {
    width: 100%;
    background: var(--black);
    color: var(--white);
    text-align: center;
    padding: 1rem;
    border-radius: var(--border-radius-btn);
    border: none;
    font-weight: 700;
    font-size: 1rem;
    margin-top: 0.5rem;
    cursor: pointer;
  }
  button:hover {
    background: var(--link-hover-color);
  }
  .section-center {
    margin: 0 auto;
    padding: 0 var(--side-padding);
    max-width: calc(67.5rem + calc(var(--side-padding) * 2));
  }
  .left-featured-product,
  .right-featured-product {
    display: grid;
    column-gap: 4rem;
    cursor: pointer;
    font-family: var(--secondary-font);
    color: var(--textColor);
    max-width: 100%;
    margin-bottom: 4rem;
  }
  .featured-products-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h1 {
    color: var(--textColor);
    font-family: var(--main-font);
    font-size: 2rem;
    margin-bottom: 4rem;
  }
  a:hover {
    color: var(--link-hover-color);
  }
`;

export default Wrapper;
