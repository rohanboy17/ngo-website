import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Navbar shadow on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      navRef.current.classList.toggle("scrolled", window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  return (
    <>
      {/* TOP INFO BAR (DESKTOP ONLY) */}
      <div className="topbar desktop-only">
        <div className="topbar-inner">
          <span>📍 Kolkata, India</span>
          <span>📞 +91 90000 00000</span>
          <span>✉️ info@helpinghands.org</span>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="navbar-pro" ref={navRef}>
        <div className="container nav-inner">
          {/* LOGO */}
          <Link to="/" className="logo" onClick={closeMenu}>
            Helping<span>Hands</span>
          </Link>

          {/* NAV LINKS */}
          <nav className={`nav-links ${open ? "open" : ""}`}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <a href="#causes" onClick={closeMenu}>Causes</a>
            <a href="#programs" onClick={closeMenu}>Programs</a>
            <a href="#events" onClick={closeMenu}>Events</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#about" onClick={closeMenu}>About Us</a>

            {user && (
              <Link to="/dashboard" onClick={closeMenu}>
                Dashboard
              </Link>
            )}

            {/* MOBILE CTA */}
            <div className="mobile-cta">
              {!user ? (
                <Link to="/login" className="btn-outline" onClick={closeMenu}>
                  Login
                </Link>
              ) : (
                <button onClick={handleLogout} className="btn-outline">
                  Logout
                </button>
              )}

              <a href="#donate" className="btn-donate" onClick={closeMenu}>
                Donate Now
              </a>
            </div>
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="nav-actions desktop-only">
            {!user ? (
              <Link to="/login" className="btn-outline">
                Login
              </Link>
            ) : (
              <button onClick={logout} className="btn-outline">
                Logout
              </button>
            )}

            <a href="#donate" className="btn-donate">
              Donate Now
            </a>
          </div>

          {/* HAMBURGER */}
          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
