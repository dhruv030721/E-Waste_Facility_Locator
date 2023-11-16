import { useNavigate } from "react-router-dom";
import CustomButton from "./form_button";
import "./navbar.css";

const NavBar = () => {
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleHome = () => {
    navigate("/");
  }

  const handleContact = () => {
    navigate("/contact");
  }

  const handleAbout = () => {
    navigate("/about");
  }

  const handleLocateFacility = () => {
    navigate("/locateFacility");
  }

  return (
    <nav className="Navbar">
      <div className="nav-logo">Logo</div>
      <div className="nav-item-container">
        <ul className="nav-items">
          <li id="nav-item-1">
            <a onClick = {handleHome}>Home</a>
          </li>
          <li id="nav-item-2">
            <a onClick = {handleLocateFacility}>Locate Facility</a>
          </li>
          <li id="nav-item-3">
            <a onClick= {handleContact}>Contact</a>
          </li>
          <li id="nav-item-4">
            <a onClick = {handleAbout}>About</a>
          </li>
          <li id="nav-item-5">
            <CustomButton
              className={"navBarLoginButton"}
              text={"Login"}
              bgColor={"secondary"}
              onclick={handleLogin}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
