import Navbar from './Navbar';
import Clock from '../2-content/Clock';
import logo from '../../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header1">
      <Link to="/">
        <img src={logo} alt="logo" className="logo"></img>
      </Link>
      {location.pathname === '/today' && <Clock appearance={'clockInHeader'} />}

      <Navbar />
    </header>
  );
};

export default Header;
