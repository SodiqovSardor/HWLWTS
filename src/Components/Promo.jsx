import { useState } from "react";
import promo from "../Assets/promo.png";

function Promo() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function updateEmail(event) {
    setEmail(event.target.value);
  }

  function subscribe(event) {
    event.preventDefault();
    if (email !== "") {
      setDone(true);
    }
  }

  let box = null;
  if (done) {
    box = (
      <p className="rounded-lg bg-white p-4 font-bold text-[var(--ocean-blue)] dark:bg-[#12131d]">
        Thanks for subscribing!
      </p>
    );
  } else {
    box = (
      <form
        onSubmit={subscribe}
        className="subscribe-container flex flex-col items-center justify-center gap-2 rounded-lg bg-white px-0 py-4 min-[1200px]:flex-row min-[1200px]:px-4 min-[1200px]:py-2"
      >
        <input
          type="email"
          required
          placeholder="yourname@mail.com"
          value={email}
          onChange={updateEmail}
          className="w-[90%] border-none bg-transparent py-2 text-center text-[1.1rem] text-[var(--light-blue)] placeholder:text-[var(--light-blue)] focus:outline-none min-[1200px]:w-[70%]"
        />
        <button
          type="submit"
          className="w-[90%] rounded-lg border-none bg-[#12131d] py-2 text-[1.2rem] font-bold text-white min-[1200px]:h-full min-[1200px]:w-[30%] min-[1200px]:p-4"
        >
          Subscribe
        </button>
      </form>
    );
  }

  return (
    <div className="promo-container mx-4 my-8 w-auto rounded-[2rem] bg-[#48cae4] text-white md:mx-auto md:w-full md:max-w-[70rem] dark:bg-[#12131d]">
      <div className="container mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-3 text-center min-[1200px]:flex-row-reverse">
        <div className="content min-[1200px]:flex min-[1200px]:flex-col min-[1200px]:justify-center min-[1200px]:gap-8 min-[1200px]:px-20">
          <div className="title-container flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Never Miss a Promo</h2>
            <p className="leading-[1.5rem] tracking-[0.1rem]">
              We always give our customers a promo for being loyal to us. Just
              subscribe to us:)
            </p>
          </div>
          {box}
        </div>
        <div className="promo-image">
          <img src={promo} alt="Promo" className="h-auto max-w-full" />
        </div>
      </div>
    </div>
  );
}

export default Promo;
