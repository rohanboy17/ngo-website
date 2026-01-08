const PROGRAMS = [
  {
    title: "Community Welfare Program",
    description:
      "Focused on supporting underprivileged communities through essential services, awareness campaigns, and local initiatives.",
    status: "Ongoing",
  },
  {
    title: "Health & Awareness Camps",
    description:
      "Regular health checkups, medical awareness programs, and support camps conducted in rural and urban areas.",
    status: "Upcoming",
  },
  {
    title: "Education Support Initiative",
    description:
      "Providing educational resources, scholarships, and mentoring support to students from economically weaker sections.",
    status: "Ongoing",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="container" role="region">
      <header style={styles.header}>
        <h2>Our Programs & Events</h2>
        <p style={styles.subtitle}>
          We actively organize programs and events that create meaningful impact
          and encourage community participation.
        </p>
      </header>

      <div className="grid grid-3">
        {PROGRAMS.map((program, index) => (
          <article className="card" key={index}>
            <div style={styles.badge(program.status)}>
              {program.status}
            </div>

            <h3 style={{ marginTop: "14px" }}>{program.title}</h3>

            <p style={{ marginTop: "10px" }}>
              {program.description}
            </p>
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
  badge: (status) => ({
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "0.75rem",
    fontWeight: 600,
    background:
      status === "Ongoing"
        ? "rgba(15,118,110,0.15)"
        : "rgba(59,130,246,0.15)",
    color:
      status === "Ongoing"
        ? "#0f766e"
        : "#2563eb",
  }),
};

export default Programs;
