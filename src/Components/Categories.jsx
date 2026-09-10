import category1 from "../Assets/category1.png";
import category2 from "../Assets/category2.png";
import category3 from "../Assets/category3.png";
import category4 from "../Assets/category4.png";
import category5 from "../Assets/category5.png";
import category6 from "../Assets/category6.png";
import category7 from "../Assets/category7.png";
import category8 from "../Assets/category8.png";

function Categories() {
  const categories = [
    { image: category1, title: "Fashion", description: "290K Items" },
    { image: category2, title: "Headphone", description: "3M Items" },
    { image: category3, title: "Laptop", description: "1.2M Items" },
    { image: category4, title: "Music", description: "751K Items" },
    { image: category5, title: "Photography", description: "1.0M Items" },
    { image: category6, title: "Furniture", description: "88K Items" },
    { image: category7, title: "Health", description: "761K Items" },
    { image: category8, title: "Sports", description: "2.9K Items" },
  ];

  return (
    <div className="categories-container mx-auto w-full max-w-6xl px-4 py-3">
      <div className="container flex flex-col items-center justify-center gap-12">
        <div className="title-container w-full text-center">
          <h6 className="text-2xl font-bold text-[var(--dark-blue)]">
            Categories
          </h6>
        </div>
        <div className="categories grid w-full grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map(function (category) {
            return (
              <div
                className="category flex flex-col items-center gap-4 rounded-[0.7rem] bg-[var(--card-color2)] p-4 shadow-[var(--fixed-shadow)] transition-all hover:shadow-[var(--elevate-shadow)]"
                key={category.title}
              >
                <img src={category.image} alt="Category" />
                <h4 className="text-[var(--dark-blue)]">{category.title}</h4>
                <p className="text-[var(--light-blue)]">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
        <button className="rounded-[2rem] border-[0.1rem] border-[var(--blue)] bg-[var(--background)] px-8 py-[0.8rem] font-extrabold text-[var(--blue)] transition-all hover:border-[var(--background)] hover:bg-[var(--dark-blue)] hover:text-[var(--background)]">
          Show All
        </button>
      </div>
    </div>
  );
}

export default Categories;
