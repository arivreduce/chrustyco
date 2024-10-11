import styled from 'styled-components';

const Wrapper = styled.nav`
  border: 1px solid red;
  .nav-center {
    display: flex;
    padding: 1rem 2rem;
    height: 4.375rem;
    width: 100%;
    font-size: 1.25rem;
    justify-content: space-between;
    font-family: 'Abril Fatface', serif;
    font-weight: 400;
    font-style: normal;
  }
  .logo {
    height: 3rem;
  }
  .nav-center ul {
    display: flex;
    gap: 0.5rem 1rem;
    list-style: none;
    align-items: center;
  }
  .nav-center ul a {
    text-decoration: none;
    color: var(--textColor);
    text-underline-offset: 0.5rem;
  }
  .nav-center ul a:hover {
    color: var(--link-hover-color);
    text-decoration: underline;
  }
  .nav-center-icons {
    display: flex;
    gap: 0.5rem 2.5rem;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5rem;
    color: var(--textColor);
  }
  .nav-center-icons .search-icon:hover {
    color: var(--link-hover-color);
    border-bottom: 2px solid var(--link-hover-color);
    cursor: pointer;
  }
  .cart-icons {
    display: flex;
    align-items: center;
    column-gap: 0.75rem;
  }
  .cart-icons:hover {
    color: var(--link-hover-color);
    border-bottom: 2px solid var(--link-hover-color);
    cursor: pointer;
  }
`;

export default Wrapper;
