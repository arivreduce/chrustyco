import styled from 'styled-components';
import heroImage from '../hero-shop-now.jpeg';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92.5vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${heroImage}) center center / cover;
  margin-bottom: 4rem;
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
