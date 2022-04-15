
import { Link, useNavigate } from "react-router-dom";
import { NavLeft, NavbarMain, NavRight } from "./NavbarStyles";


const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/services");
  }
  return (
      <NavbarMain>
        <NavLeft>
          <h2>CLARUSWAY <span>Web Design </span></h2>
        </NavLeft>

        <NavRight>
            <Link to={"/"} >  <p>HOME</p> </Link>
            <Link to={"/about"} >  <p>ABOUT</p> </Link>
            <p onClick={handleClick} >SERVICES </p>
        </NavRight>
      </NavbarMain>
  )
}

export default Navbar;