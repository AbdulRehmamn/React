import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar bg-zinc-900 py-6 px-6 mx-16 text-white rounded-lg relative top-5 flex justify-between items-center gap-3.5">
      {/* Logo */}
      <img src="Nav.png" alt="Logo" className="w-24" />
      
      {/* Desktop Nav Links */}
      <ul className="  hidden md:flex items-center justify-center w-full space-x-8 font-semibold">
    <li className="hover:text-yellow-400 transition cursor-pointer">How it works</li>
    <li className="hover:text-yellow-400 transition cursor-pointer">Our Work</li>
    <li className="hover:text-yellow-400 transition cursor-pointer">Pricing</li>
    <li className="hover:text-yellow-400 transition cursor-pointer">Reviews</li>
  </ul>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <img  className="w-10  h-10 sm:w-5 sm:h-5"src="Hamburger.png" alt="Menu" />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-zinc-800 w-48 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col text-center py-4 space-y-3">
            <li className="hover:text-yellow-400 transition cursor-pointer">How it works</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Our Work</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Pricing</li>
            <li className="hover:text-yellow-400 transition cursor-pointer">Reviews</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;