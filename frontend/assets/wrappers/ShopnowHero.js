import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92.5vh;
  width: 100%;
  border: 1px solid red;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('./assets/hero-shop-now.jpeg') center center / cover;
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
    font-family: var(--secondary-font);
  }
  .shop-now-btn:hover {
    background: var(--white);
    color: var(--black);
  }
`;

export default Wrapper;
