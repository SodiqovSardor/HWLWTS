import choose from "../Assets/choose.png";
import choose1 from "../Assets/choose1.png";
import choose2 from "../Assets/choose2.png";
import choose3 from "../Assets/choose3.png";
import choose4 from "../Assets/choose4.png";

function Choose() {
  const items = [
    {
      image: choose1,
      title: "Have Most Stock",
      description: "We have many stock until next year to supply you needs.",
    },
    {
      image: choose2,
      title: "100% Secure",
      description: "You don't need to worry when transaction is on our platform now.",
    },
    {
      image: choose3,
      title: "24/7 Support",
      description: "If any problem use our platform you cantact use free.",
    },
    {
      image: choose4,
      title: "Free Delivery",
      description: "Wherever you are, we make sure you get free delivery service.",
    },
  ];

  return (
    <div className="choose-us-container mx-auto w-full max-w-6xl px-4 py-3">
      <div className="container flex flex-col gap-12">
        <div className="title-container flex flex-col gap-4 text-center">
          <h2 className="text-2xl font-bold text-[var(--dark-blue)]">
            Why Choose us than others?
          </h2>
          <p className="leading-[1.2rem] tracking-[0.1rem] text-[var(--light-blue)]">
            Many reasons why customer choose us than other ecommerce. We have
            some plus point that maybe other can't have.
          </p>
        </div>
        <div className="content flex flex-col gap-8 min-[1200px]:flex-row-reverse min-[1200px]:gap-16">
          <div className="choose-us grid grid-cols-1 gap-8 md:grid-cols-2">
            {items.map(function (item) {
              return (
                <div
                  className="choose flex flex-col items-center gap-4 rounded-[0.7rem] bg-[var(--card-color2)] p-4 text-center shadow-[var(--fixed-shadow)] transition-all hover:shadow-[var(--elevate-shadow)]"
                  key={item.title}
                >
                  <img src={item.image} alt="choose" />
                  <h4 className="text-[var(--dark-blue)]">{item.title}</h4>
                  <p className="text-[var(--light-blue)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="delivery flex justify-center">
            <img src={choose} alt="delivery" className="h-auto max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
