import logo from "../assets/logo.jpg"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

function Header() {
    const currentLocation = useLocation();

    return (
        currentLocation.pathname === "/" ?
            <nav className="nav">
                <Link to="/" className="nav__logo">
                    <img className="nav__logo__img" src={logo} alt="HRnet" />
                </Link>
                <Link className="nav__link" to="/employeeList">View Current Employees</Link>
            </nav> :
            <nav className="nav">
                <Link to="/" className="nav__logo">
                    <img className="nav__logo__img" src={logo} alt="HRnet" />
                </Link>
                <Link className="nav__link" to="/">Create New Employee</Link>
            </nav>
    )
}

export default Header