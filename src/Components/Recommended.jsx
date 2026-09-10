import recommend1 from "../Assets/recommend1.jpg";
import recommend2 from "../Assets/recommend2.jpg";
import recommend3 from "../Assets/recommend3.jpeg";
import recommend4 from "../Assets/recommend4.jpg";

function Recommended() {
  const items = [
    { image: recommend1, text: "The best Anti Aging Cream with cheap price" },
    { image: recommend2, text: "Best budget Headphone for RPG Gamers" },
    {
      image: recommend3,
      text: "Have a much project? You must have this Savage Laptop",
    },
    {
      image: recommend4,
      text: "Bored work from home. You can make juice for your health",
    },
  ];

  return (
    <div className="recommend-container mx-auto w-full max-w-6xl px-4 py-3">
      <div className="container flex flex-col items-center justify-center gap-8">
        <div className="title-container">
          <h2 className="text-center text-2xl font-bold text-[var(--dark-blue)]">
            Recommended for You
          </h2>
        </div>
        <div className="categories grid grid-cols-4 gap-8">
          {items.map(function (item) {
            return (
              <div className="category flex flex-col gap-8" key={item.text}>
                <img
                  src={item.image}
                  alt="Category"
                  className="h-40 w-full max-w-full object-cover md:h-80"
                />
                <h4 className="text-center text-[var(--light-blue)]">
                  {item.text}
                </h4>
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

export default Recommended;
