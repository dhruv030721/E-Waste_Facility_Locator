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
<<<<<<< HEAD
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
          <li className="nav-item-4">
=======
          <li id="nav-item-1">
            <a href="/">Home</a>
          </li>
          <li id="nav-item-2">
            <a href="/locate_facility">Locate Facility</a>
          </li>
          <li id="nav-item-3">
            <a href="/contact">Contact</a>
          </li>
          <li id="nav-item-4">
            <a href="/about">About</a>
          </li>
          <li id="nav-item-5">
>>>>>>> 3aeccaafdea56bb66e6adfb091871b57731998b2
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
