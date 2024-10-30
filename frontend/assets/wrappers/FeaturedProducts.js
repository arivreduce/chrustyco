import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  text-align: center;
  .section-center {
    margin: 0 auto;
    padding: 0 var(--side-padding);
    max-width: calc(67.5rem + calc(var(--side-padding) * 2));
  }
  h1 {
    color: var(--textColor);
    font-family: var(--main-font);
    font-size: 2rem;
  }
`;

export default Wrapper;
