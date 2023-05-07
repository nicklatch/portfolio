import { useState } from "react";
import Swap from "./Swap";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="flex items-center justify-between text-center w-full mb-8">
      <p className="text-2xl font-bold text-white text-center drop-shadow-lg sm:text-4xl">
        Nick Latcham
      </p>
      <Swap />
    </header>
  );
};

export default Header;
