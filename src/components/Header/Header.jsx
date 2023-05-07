import { useState } from "react";
import Swap from "./Swap";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="flex items-center justify-between text-center w-full mt-2.5 mb-5 sm:mb-10">
      <p className="text-2xl font-bold text-white text-center drop-shadow-lg sm:text-4xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-400 text-transparent bg-clip-text">
        Nick Latcham
      </p>
      <Swap />
    </header>
  );
};

export default Header;
