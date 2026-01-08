import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div className="container" style={styles.nav}>
        {/* Logo / Brand */}
        <div style={styles.brand}>
          <span style={styles.logo}>🤝</span>
          <span>HelpingHands NGO</span>
        </div>

        {/* Desktop Menu */}
        <nav style={styles.menu}>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#programs">Programs</a>
          <a href="#contact">Contact</a>
          <button className="btn btn-primary">Donate</button>
        </nav>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Menu"
          style={styles.toggle}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={styles.mobileMenu}>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#programs" onClick={() => setOpen(false)}>Programs</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <button className="btn btn-primary">Donate</button>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "#ffffff",
    borderBottom: "1px solid #e2e8f0",
  },
  nav: {
    height: "72px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: 700,
    fontSize: "1.1rem",
  },
  logo: {
    fontSize: "1.5rem",
  },
  menu: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
  },
  toggle: {
    display: "none",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    background: "#ffffff",
    borderTop: "1px solid #e2e8f0",
  },
};

export default Navbar;
