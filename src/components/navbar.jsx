import { useNavigate } from "react-router-dom";
import CustomButton from "./form_button";
import "./navbar.css";

const NavBar = () => {
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="Navbar">
      <div className="nav-logo">Logo</div>
      <div className="nav-item-container">
        <ul className="nav-items">
          <li className="nav-item-1">
            <a href="/">Home</a>
          </li>
          <li className="nav-item-2">
            <a href="/locate_facility">Locate Facility</a>
          </li>
          <li className="nav-item-3">
            <a href="/contact">Contact</a>
          </li>
          <li className="nav-item-4">
            <a href="/about">About</a>
          </li>
          <li className="nav-item-5">
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
