import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="navbarList">
      <li activeclassname="active">
        <NavLink to="/" activeclassname="active">
          Start
        </NavLink>
      </li>
      <li activeclassname="active">
        <NavLink to="/today" activeclassname="active">
          Today
        </NavLink>
      </li>
      {/*
      <li activeclassname="active">
        <NavLink to="/this-week" activeclassname="active">
          This Week
        </NavLink>
      </li>
      <li activeclassname="active">
        <NavLink to="/all-days" activeclassname="active">
          All
        </NavLink> 
      </li>*/}
    </ul>
  );
};

export default Navbar;
