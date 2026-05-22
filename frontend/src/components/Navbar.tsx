import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Tasks</Link>
      <Link to="/create" className="nav-link">New Task</Link>
    </nav>
  );
};

export default Navbar;