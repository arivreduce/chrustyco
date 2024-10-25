import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92.5vh;
  width: 100%;
  border: 1px solid red;
  background-image: url('./assets/hero-shop-now.jpeg');
  background-size: cover;
  background-position: center center;
  .shop-now-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17.125rem;
    min-height: 3.5rem;
    border: 2px solid var(--hero-text-color);
    color: var(--hero-text-color);
    font-weight: 700;
    padding: 16px;
    border-radius: var(--border-radius-sm);
    background: transparent;
    cursor: pointer;
  }
  .shop-now-btn:hover {
    background: var(--white);
    color: var(--black);
  }
`;

export default Wrapper;
