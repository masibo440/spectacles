import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1 px-3">
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
        aria-controls="navbarcontents"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="navbarcontents">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <Link to="/" className="nav-link fw-semibold">See Spectacle</Link>
          </li>
          <li className="nav-item">
            <Link to="/addspectacles" className="nav-link fw-semibold">Sell Spectacle</Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-link fw-semibold">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/chatus" className="nav-link fw-semibold">Chat Us</Link>
          </li>
        </ul>

        {/* Authorization Buttons */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item me-2">
            <Link to="/chatus" className="btn btn-outline-success">Chat Us</Link>
          </li>
          <li className="nav-item me-2">
            <Link to="/signin" className="btn btn-outline-primary">Sign In</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
