import { IoSearch } from 'react-icons/io5';
import { FaCartShopping } from 'react-icons/fa6';
import Wrapper from '../../assets/wrappers/Navbar';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <ul>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="nav-center-icons">
          <IoSearch className="search-icon" />
          <a href="/cart" className="cart-icons">
            <FaCartShopping />
            <span>0</span>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
