import styled from 'styled-components';

const Wrapper = styled.footer`
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  font-family: var(--main-font);
  padding-top: 4rem;
  a {
    text-decoration: none;
    color: var(--textColor);
  }
  a:hover {
    color: var(--link-hover-color);
    text-decoration: underline;
  }
`;

export default Wrapper;
