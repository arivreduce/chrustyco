import Wrapper from '../../assets/wrappers/Footer';
import { footerLinks } from '../data';

const Footer = () => {
  return (
    <Wrapper>
      {footerLinks.map((pageLink) => {
        const { name, link, id } = pageLink;
        return (
          <a href={link} key={id}>
            {name}
          </a>
        );
      })}
    </Wrapper>
  );
};
export default Footer;
