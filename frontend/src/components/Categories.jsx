import { categories } from '../data';

const Categories = () => {
  return (
    <div>
      <h1>Categories</h1>
      <div className="category-container">
        {categories.map((category) => {
          const { id, name, img } = category;
          return (
            <a className="category" key={id}>
              <img src={img} alt={name} />
              <h3>{name}</h3>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Categories;
