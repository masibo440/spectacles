
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1">
   
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand fw-bold">
          Spectacle<span className="text-secondary">Shop</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcontents"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarcontents">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <b><Link to="/" className="nav-link">See spectacle</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/addspectacles" className="nav-link">Sell spectacle</Link></b>
            </li>
            <li className="nav-item">
              <b><Link to="/aboutus" className="nav-link">About us</Link></b>
            </li>
          </ul>
          <p className="bg-primary">When we see your eye.... you see a brighter future </p>

          {/* Authorization Links (Aligned Right) */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/signin" className="btn btn-outline-primary me-2">Sign IN</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn btn-primary">Sign UP</Link>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
