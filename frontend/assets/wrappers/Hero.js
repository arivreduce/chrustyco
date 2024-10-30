import styled from 'styled-components';

const Wrapper = styled.section`
  .hero-home {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 13.625rem;
  }
  .hero-home a {
    font-family: 'Abril Fatface', serif;
    font-weight: 700;
    font-style: normal;
    font-size: 3.75rem;
    color: var(--textColor);
  }
  .hero-home a:hover {
    color: var(--link-hover-color);
    text-decoration: underline;
  }
`;

export default Wrapper;
