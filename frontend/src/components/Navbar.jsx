import logo from '../../assets/icon-cropped.png';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <img src={logo} alt="logo" style={{ height: '5rem' }} />
      </div>
    </nav>
  );
};
export default Navbar;
