import service1 from "../Assets/service1.png";
import service2 from "../Assets/service2.png";
import service3 from "../Assets/service3.png";
import service4 from "../Assets/service4.png";

function ArrowIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414z" />
    </svg>
  );
}

function Services() {
  return (
    <div className="services-container mx-auto w-full max-w-6xl px-4 py-3">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-4 md:[grid-template-areas:'one_one_one_four'_'two_two_three_three']">
        <div className="service one flex flex-col items-center justify-center gap-4 rounded-2xl bg-[var(--card-color)] p-8 text-center transition-all hover:shadow-[var(--elevate-shadow)] md:[grid-area:one]">
          <p className="flex items-center justify-center gap-[0.3rem] uppercase text-[var(--light-blue)] [&_svg]:text-[1.4rem]">
            Weekly Deals
          </p>
          <h4 className="text-[var(--dark-blue)] min-[1200px]:text-[2rem]">
            Free Delivery
          </h4>
          <button className="cursor-pointer rounded-[2rem] border-none bg-[var(--blue)] px-[0.8rem] py-[0.4rem] text-white">
            Learn More
          </button>
          <div className="image">
            <img src={service1} alt="service" className="h-auto max-w-full" />
          </div>
        </div>
        <div className="service two flex flex-col items-center justify-center gap-4 rounded-2xl bg-[var(--card-color)] p-8 text-center transition-all hover:shadow-[var(--elevate-shadow)] flex-row md:[grid-area:two]">
          <div className="content flex flex-col items-center justify-center gap-2">
            <h4 className="text-[var(--dark-blue)] min-[1200px]:text-[2rem]">
              Disc Up to 25%
            </h4>
            <p className="flex items-center justify-center gap-[0.3rem] uppercase text-[var(--light-blue)] [&_svg]:text-[1.4rem]">
              Learn More <ArrowIcon />
            </p>
          </div>
          <div className="image">
            <img src={service2} alt="service" className="h-auto max-w-full" />
          </div>
        </div>
        <div className="service three flex flex-col items-center justify-center gap-4 rounded-2xl bg-[var(--card-color)] p-8 text-center transition-all hover:shadow-[var(--elevate-shadow)] flex-row md:[grid-area:three]">
          <div className="image">
            <img src={service3} alt="service" className="h-auto max-w-full" />
          </div>
          <div className="content flex flex-col items-center justify-center gap-2">
            <h4 className="text-[var(--dark-blue)] min-[1200px]:text-[2rem]">
              Free 5GB Data
            </h4>
            <p className="flex items-center justify-center gap-[0.3rem] uppercase text-[var(--light-blue)] [&_svg]:text-[1.4rem]">
              Learn More <ArrowIcon />
            </p>
          </div>
        </div>
        <div className="service four flex flex-col items-center justify-center gap-4 rounded-2xl bg-[var(--card-color)] p-8 text-center transition-all hover:shadow-[var(--elevate-shadow)] md:[grid-area:four]">
          <p className="flex items-center justify-center gap-[0.3rem] uppercase text-[var(--light-blue)] [&_svg]:text-[1.4rem]">
            EhyaVersarry Monthly Deals
          </p>
          <h4 className="text-[var(--dark-blue)] min-[1200px]:text-[2rem]">
            Free Delivery
          </h4>
          <p className="flex items-center justify-center gap-[0.3rem] uppercase text-[var(--light-blue)] [&_svg]:text-[1.4rem]">
            Learn More <ArrowIcon />
          </p>
          <div className="image">
            <img src={service4} alt="service" className="h-auto max-w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
