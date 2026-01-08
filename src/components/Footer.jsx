const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.wrapper}>
        {/* Brand */}
        <div style={styles.brand}>
          <h3>HelpingHands NGO</h3>
          <p>
            A digital platform empowering NGOs with transparent member
            management, secure donations, and impactful community programs.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.links}>
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#programs">Programs</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Legal / Info */}
        <div style={styles.links}>
          <h4>Information</h4>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Refund Policy</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottom}>
        © {new Date().getFullYear()} HelpingHands NGO. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#0f172a",
    color: "#e5e7eb",
    marginTop: "80px",
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    gap: "40px",
    padding: "60px 20px",
  },
  brand: {
    maxWidth: "420px",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontSize: "0.95rem",
  },
  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    padding: "16px",
    textAlign: "center",
    fontSize: "0.85rem",
    color: "#9ca3af",
  },
};

export default Footer;
