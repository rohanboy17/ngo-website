const Contact = () => {
  return (
    <section id="contact" className="container" role="region">
      <header style={styles.header}>
        <h2>Get in Touch</h2>
        <p style={styles.subtitle}>
          Have questions, want to collaborate, or need support?  
          Reach out to us — we’re here to help.
        </p>
      </header>

      <div style={styles.wrapper}>
        {/* Contact Info */}
        <div style={styles.info}>
          <div>
            <h3>Email</h3>
            <p>support@helpinghandsngo.org</p>
          </div>

          <div>
            <h3>Phone / WhatsApp</h3>
            <p>+91 9XXXXXXXXX</p>
          </div>

          <div>
            <h3>Office Address</h3>
            <p>
              HelpingHands NGO  
              <br />
              Kolkata, West Bengal, India
            </p>
          </div>
        </div>

        {/* CTA Card */}
        <div className="card" style={styles.cta}>
          <h3>Join Our Mission</h3>
          <p style={{ marginTop: "10px" }}>
            Become a member, volunteer, or supporter and help us create positive
            change through transparency and technology.
          </p>

          <div style={styles.actions}>
            <button className="btn btn-primary">Register as Member</button>
            <button className="btn btn-outline">Donate Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  header: {
    maxWidth: "720px",
    marginBottom: "50px",
  },
  subtitle: {
    marginTop: "12px",
  },
  wrapper: {
    alignItems: "stretch",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  cta: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  actions: {
    marginTop: "30px",
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },
};

export default Contact;
