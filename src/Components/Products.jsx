import compare1 from "../Assets/compare1.png";
import compare2 from "../Assets/compare2.png";
import osimage from "../Assets/os.png";
import processorimage from "../Assets/processor.png";

function ChevronDownIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
      <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
    </svg>
  );
}

function Products() {
  const products = [
    {
      image: compare1,
      name: "Asus Zenbook Pro",
      model: "UX-430 US",
      processor: "Intel Core i3 7100U Processor",
      os: "Windows 10 Pro for business",
    },
    {
      image: compare2,
      name: "Lenevo Legion",
      model: "Y545 2022",
      processor: "Intel Core i7 9100U Processor",
      os: "Windows 10 Pro for Enterprise",
    },
    {
      image: compare1,
      name: "Acer Swift Air",
      model: "SF-313 51",
      processor: "Intel Core i3 7100X Processor",
      os: "Windows 10 Pro for business",
    },
    {
      image: compare2,
      name: "Lenevo Thinkpad Y51",
      model: "X1 2022",
      processor: "Intel Core i5 8000C Processor",
      os: "Windows 10 Pro for business",
    },
  ];

  return (
    <div className="products-container mx-auto w-full max-w-6xl px-4 py-3">
      <div className="container flex flex-col gap-8 text-center">
        <div className="title-container flex flex-col items-center justify-center gap-8 min-[1200px]:mx-20 min-[1200px]:flex-row min-[1200px]:justify-between">
          <h2 className="text-2xl font-bold text-[var(--dark-blue)]">
            Compare the Product
          </h2>
          <button className="rounded-[2rem] border-[0.1rem] border-[var(--blue)] bg-[var(--background)] px-8 py-[0.8rem] font-extrabold text-[var(--blue)] transition-all hover:border-[var(--background)] hover:bg-[var(--dark-blue)] hover:text-[var(--background)]">
            New Comparison
          </button>
        </div>
        <div className="products grid grid-cols-4 gap-8">
          {products.map(function (product) {
            return (
              <div
                className="product flex flex-col items-center gap-4 rounded-2xl bg-[var(--card-color2)] p-4"
                key={product.name}
              >
                <div className="image">
                  <img
                    src={product.image}
                    alt="Product"
                    className="h-40 max-w-full"
                  />
                </div>
                <h4 className="text-[var(--dark-blue)]">{product.name}</h4>
                <h4 className="text-[var(--dark-blue)]">{product.model}</h4>
                <hr className="h-[0.2rem] w-[80%] border-none bg-[var(--dark-blue)]" />
                <div className="processor flex flex-col items-center justify-center gap-4">
                  <img src={processorimage} alt="processor" />
                  <h4 className="text-[var(--dark-blue)]">Processor</h4>
                  <p className="text-[var(--light-blue)]">
                    {product.processor}
                  </p>
                </div>
                <div className="os flex flex-col items-center justify-center gap-4">
                  <img src={osimage} alt="os" />
                  <h4 className="text-[var(--dark-blue)]">Operating System</h4>
                  <p className="text-[var(--light-blue)]">{product.os}</p>
                </div>
                <span className="text-[2rem] text-[var(--ocean-blue)]">
                  <ChevronDownIcon />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
