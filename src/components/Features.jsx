const FEATURES = [
  {
    title: "Online Registration & ID Cards",
    description:
      "Members can register online and receive digitally generated ID cards and appointment letters with official NGO branding.",
  },
  {
    title: "Donation Management System",
    description:
      "Secure online donations with integrated payment gateway and automated receipt generation for complete transparency.",
  },
  {
    title: "Programs & Event Management",
    description:
      "Publish upcoming programs and events, allow member participation, and keep everyone informed in real time.",
  },
  {
    title: "Member Verification & Control",
    description:
      "Admin panel to verify members, update details, and enable or disable access as required.",
  },
  {
    title: "Complaints & Problem Resolution",
    description:
      "Members can submit issues directly through the platform and track resolutions provided by the organization.",
  },
  {
    title: "Crowd Funding & Coordinator System",
    description:
      "Organize special crowdfunding campaigns and empower coordinators to onboard members efficiently.",
  },
];

const Features = () => {
  return (
    <section id="features" className="container" role="region">
      <header style={styles.header}>
        <h2>Platform Features</h2>
        <p style={styles.subtitle}>
          A complete digital ecosystem designed to manage NGO operations,
          improve transparency, and strengthen community engagement.
        </p>
      </header>

      <div className="grid grid-3">
        {FEATURES.map((item, index) => (
          <article className="card" key={index}>
            <h3>{item.title}</h3>
            <p style={{ marginTop: "10px" }}>{item.description}</p>
          </article>
        ))}
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
};

export default Features;
