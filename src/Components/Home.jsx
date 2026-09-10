import { useState } from "react";
import home from "../Assets/home.png";

function SearchIcon() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function Home() {
  const [query, setQuery] = useState("");

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  function search(event) {
    event.preventDefault();
  }

  return (
    <div className="home z-[-1] bg-[var(--blue-background)] md:mx-auto md:my-8 md:w-full md:max-w-[70rem] md:rounded-2xl">
      <div className="container mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-3 min-[1200px]:flex-row min-[1200px]:gap-4 min-[1200px]:py-8">
        <div className="title-container flex flex-col items-center gap-4 min-[1200px]:items-start">
          <h2 className="text-center text-[var(--dark-blue)] uppercase md:text-[3.5rem] min-[1200px]:text-start">
            Browse Million Products for Your Needs
          </h2>
          <form
            onSubmit={search}
            className="input-container flex w-full items-center justify-between gap-4 rounded-2xl bg-[var(--background)] p-2 text-[var(--dark-blue)] md:w-[80%] dark:border dark:border-white/10"
          >
            <input
              type="text"
              placeholder="I want to buy..."
              value={query}
              onChange={updateQuery}
              className="w-[70%] border-none bg-transparent pl-4 text-base text-[var(--dark-blue)] placeholder:text-[var(--light-blue)] focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="icon flex cursor-pointer items-center justify-center rounded-lg bg-[#12131d] p-[0.3rem] transition-all [&_svg]:text-[1.3rem] [&_svg]:text-white"
            >
              <SearchIcon />
            </button>
          </form>
        </div>
        <div className="extra-image">
          <img
            src={home}
            alt="Home"
            className="h-auto max-w-full min-[1200px]:h-[25rem] min-[1200px]:max-w-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
