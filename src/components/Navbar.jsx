import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <div className="navbar__left">
          {!isHome && (
            <button className="navbar__back" onClick={() => navigate(-1)} aria-label="Go back">
              ← Back
            </button>
          )}
          <Link to="/" className="navbar__brand">
            <span className="navbar__brand-mark">📘</span>
            <span className="navbar__brand-text">
              Study<span className="navbar__brand-accent">Notebook</span>
            </span>
          </Link>
        </div>
        <div className="navbar__right">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
