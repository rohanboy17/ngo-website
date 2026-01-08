const Hero = () => {
  return (
    <section style={styles.wrapper} role="banner">
      <div className="container" style={styles.inner}>
        {/* Left Content */}
        <div style={styles.content}>
          <span style={styles.badge}>Digital NGO Platform</span>

          <h1>
            Empower Communities  
            <br />
            <span style={styles.highlight}>Through Technology</span>
          </h1>

          <p style={styles.description}>
            HelpingHands NGO provides a secure and transparent digital platform
            for member registration, donation management, events, crowdfunding,
            and real-time community engagement.
          </p>

          <div style={styles.actions}>
            <button className="btn btn-primary">Join as Member</button>
            <button className="btn btn-outline">Donate Now</button>
          </div>
        </div>

        {/* Right Visual */}
        <div style={styles.visual}>
          <div style={styles.card}>
            <h3>✔ Verified Members</h3>
            <p>Secure onboarding with digital ID cards</p>
          </div>

          <div style={styles.card}>
            <h3>✔ Transparent Donations</h3>
            <p>Instant receipts & tracking system</p>
          </div>

          <div style={styles.card}>
            <h3>✔ Events & Programs</h3>
            <p>Live updates & participation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    background:
      "linear-gradient(135deg, rgba(15,118,110,0.08), rgba(20,184,166,0.08))",
    paddingTop: "120px",
    paddingBottom: "100px",
  },
  inner: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "60px",
    alignItems: "center",
  },
  content: {
    maxWidth: "620px",
  },
  badge: {
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: "20px",
    background: "rgba(15,118,110,0.15)",
    color: "#0f766e",
    fontSize: "0.8rem",
    fontWeight: 600,
    marginBottom: "18px",
  },
  highlight: {
    color: "#0f766e",
  },
  description: {
    marginTop: "18px",
    fontSize: "1.05rem",
    maxWidth: "520px",
  },
  actions: {
    marginTop: "30px",
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  },
  visual: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "22px",
    borderRadius: "14px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  },
};

export default Hero;
