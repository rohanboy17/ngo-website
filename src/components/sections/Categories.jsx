import categories from "../../assets/data/categories";

const Categories = () => {
  return (
    <section className="categories-section fade-up">
      <div className="container">
        <h2 className="section-title">Our Categories</h2>

        <div className="categories-grid">
          {categories.map((item, index) => (
            <div
              className="category-card"
              key={index}
              style={{ backgroundColor: item.color }}
            >
              <div className="category-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
