const About = () => {
  return (
    <section id="about" className="container" role="region">
      <div style={styles.wrapper}>
        {/* Text Content */}
        <div>
          <h2>About HelpingHands NGO</h2>

          <p style={styles.text}>
            HelpingHands NGO is a mission-driven organization focused on
            empowering communities through transparency, collaboration, and
            technology. Our goal is to create a connected ecosystem where
            members, volunteers, donors, and coordinators can work together
            efficiently.
          </p>

          <p style={styles.text}>
            Through our digital platform, we enable secure online registration,
            verified member management, donation tracking with automated
            receipts, event participation, and real-time communication —
            ensuring trust and accountability at every step.
          </p>

          <div style={styles.stats}>
            <div>
              <h3>5K+</h3>
              <span>Active Members</span>
            </div>
            <div>
              <h3>120+</h3>
              <span>Programs Conducted</span>
            </div>
            <div>
              <h3>100%</h3>
              <span>Transparent Process</span>
            </div>
          </div>
        </div>

        {/* Visual Card */}
        <div style={styles.card}>
          <h3>Why Choose Our Platform?</h3>
          <ul style={styles.list}>
            <li>✔ Secure member verification</li>
            <li>✔ Digital ID cards & appointment letters</li>
            <li>✔ Integrated donation & crowdfunding</li>
            <li>✔ Admin & coordinator management</li>
            <li>✔ Real-time updates & communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const styles = {
  wrapper: {
    alignItems: "center",
  },
  text: {
    marginTop: "16px",
    maxWidth: "650px",
  },
  stats: {
    marginTop: "30px",
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
  },
  card: {
    background: "#ffffff",
    padding: "32px",
    borderRadius: "16px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  },
  list: {
    marginTop: "18px",
    lineHeight: "2",
    listStyle: "none",
    padding: 0,
  },
};

export default About;
