import { useTheme } from "../context/ThemeContext.jsx";

function HamburgerIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" fill="currentColor">
      <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 13c0.552 0 1 0.448 1 1v1c0 0.552-0.448 1-1 1s-1-0.448-1-1v-1c0-0.552 0.448-1 1-1zM8 3c-0.552 0-1-0.448-1-1v-1c0-0.552 0.448-1 1-1s1 0.448 1 1v1c0 0.552-0.448 1-1 1zM15 7c0.552 0 1 0.448 1 1s-0.448 1-1 1h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1h1zM3 8c0 0.552-0.448 1-1 1h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1h1c0.552 0 1 0.448 1 1zM12.95 11.536l0.707 0.707c0.39 0.39 0.39 1.024 0 1.414s-1.024 0.39-1.414 0l-0.707-0.707c-0.39-0.39-0.39-1.024 0-1.414s1.024-0.39 1.414 0zM3.050 4.464l-0.707-0.707c-0.391-0.391-0.391-1.024 0-1.414s1.024-0.391 1.414 0l0.707 0.707c0.391 0.391 0.391 1.024 0 1.414s-1.024 0.391-1.414 0zM12.95 4.464c-0.39 0.391-1.024 0.391-1.414 0s-0.39-1.024 0-1.414l0.707-0.707c0.39-0.391 1.024-0.391 1.414 0s0.39 1.024 0 1.414l-0.707 0.707zM3.050 11.536c0.39-0.39 1.024-0.39 1.414 0s0.391 1.024 0 1.414l-0.707 0.707c-0.391 0.39-1.024 0.39-1.414 0s-0.391-1.024 0-1.414l0.707-0.707z" />
      <path d="M8 4c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zM8 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
    </svg>
  );
}

function Navbar() {
  const links = ["Home", "Landings", "Pages", "Docs", "Help"];
  const { theme, toggleTheme } = useTheme();

  let themeIcon = <MoonIcon />;
  let themeButtonColor = "text-[1.4rem] text-[blue]";
  if (theme === "dark") {
    themeIcon = <SunIcon />;
    themeButtonColor = "text-[1.4rem] text-[yellow]";
  }

  return (
    <nav className="transition-all min-[1200px]:mx-auto min-[1200px]:my-8 min-[1200px]:mt-0 min-[1200px]:w-full min-[1200px]:max-w-6xl">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 min-[1200px]:py-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-[0.3rem]">
            <span className="text-[2rem] font-extrabold text-[var(--dark-blue)] [font-family:Verdana,Geneva,Tahoma,sans-serif]">
              ehya
            </span>
            <span className="text-[2rem] font-extrabold text-[var(--ocean-blue)] [font-family:Verdana,Geneva,Tahoma,sans-serif]">
              .
            </span>
          </div>
          <div>
            <div className="relative z-[1] flex flex-row-reverse gap-4 min-[1200px]:hidden">
              <span className="text-[1.5rem] text-[var(--svg-color)]">
                <HamburgerIcon />
              </span>
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className={themeButtonColor}
              >
                {themeIcon}
              </button>
            </div>
            <div className="fixed top-0 right-0 z-0 h-screen invisible w-0 opacity-0 transition-all min-[1200px]:static min-[1200px]:h-max min-[1200px]:w-full min-[1200px]:visible min-[1200px]:opacity-100">
              <ul className="flex h-full list-none flex-col items-center justify-center gap-16 min-[1200px]:h-4 min-[1200px]:flex-row">
                {links.map(function (link) {
                  return (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-bold text-[var(--light-blue)] uppercase no-underline"
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
                <li className="hidden min-[1200px]:block">
                  <button
                    type="button"
                    aria-label="Toggle theme"
                    onClick={toggleTheme}
                    className={themeButtonColor}
                  >
                    {themeIcon}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
