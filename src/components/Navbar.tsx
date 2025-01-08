import { Link } from "react-scroll";
import Logo from "../assets/Logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-6 bg-transparent text-red-500  z-50">
      <Link to="home" smooth={true} duration={500} className="cursor-pointer">
        <img
          src={Logo}
          alt="Marvel-Universe"
          className="w-[300px] md:w-[220px]"
        />
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex space-x-8">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="hover:text-white transition duration-200 uppercase tracking-wide cursor-pointer font-semibold text-2xl"
        >
          HOME
        </Link>
        <Link
          to="search"
          smooth={true}
          duration={500}
          className="hover:text-white transition duration-200 uppercase tracking-wide cursor-pointer font-semibold text-2xl"
        >
          CHARACTERS
        </Link>
        <Link
          to="featured"
          smooth={true}
          duration={500}
          className="hover:text-white transition duration-200 uppercase tracking-wide cursor-pointer font-semibold text-2xl"
        >
          Heros
        </Link>
        <Link
          to="footer"
          smooth={true}
          duration={500}
          className="hover:text-white transition duration-200 uppercase tracking-wide cursor-pointer font-semibold text-2xl"
        >
          FIND US
        </Link>
      </div>

      <div className="md:hidden z-50 cursor-pointer" onClick={handleClick}>
        {nav ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Mobile  */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center space-y-10 transform ${
          nav ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300`}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl hover:text-white cursor-pointer"
          onClick={handleClick}
        >
          HOME
        </Link>
        <Link
          to="search"
          smooth={true}
          duration={500}
          className="text-2xl hover:text-white cursor-pointer"
          onClick={handleClick}
        >
          FIND CHARACTERS
        </Link>
        <Link
          to="featured"
          smooth={true}
          duration={500}
          className="text-2xl hover:text-white cursor-pointer"
          onClick={handleClick}
        >
          MARVEL CHARACTERS
        </Link>
        <Link
          to="footer"
          smooth={true}
          duration={500}
          className="text-2xl hover:text-white cursor-pointer"
          onClick={handleClick}
        >
          FIND US
        </Link>
      </div>
    </div>
  );
};
