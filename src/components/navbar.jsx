import '../css/navbar.css'

const NavBar = () => {
    return ( 
            <navbar className="Navbar">
                <div className="nav-logo"></div>
                <div className="nav-item-container">
                    <ul className="nav-items">
                    <li className="nav-item-1"><a href="/">Home</a></li>
                    <li className="nav-item-2"><a href="/locate_facility">Locate Facility</a></li>
                    <li className="nav-item-3"><a href="/contact">Contact</a></li>
                    <li className="nav-item-4"><a href="/about">About</a></li>
                    </ul>
                </div>
            </navbar>
);
}
export default NavBar;
