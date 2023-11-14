import './navbar.css'
import NormalButton from './normal_button';

const NavBar = () => {
    return ( 
            <nav className="Navbar">
                <div className="nav-logo">Logo</div>
                <div className="nav-item-container">
                    <ul className="nav-items">
                    <li className="nav-item-1"><a href="/">Home</a></li>
                    <li className="nav-item-2"><a href="/locate_facility">Locate Facility</a></li>
                    <li className="nav-item-3"><a href="/contact">Contact</a></li>
                    <li className="nav-item-4"><a href="/about">About</a></li>
                    </ul>
                </div>
            </nav>
);
}
export default NavBar;
