import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-6 bg-gray-900 text-red-500 shadow-lg z-50">
      <Link to="/">
        <img
          src={Logo}
          alt="Marvel-Universe"
          className="w-[180px] md:w-[220px] hover:opacity-80 transition duration-300"
        />
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex space-x-8">
        <Link
          to="home"
          className="hover:text-white transition duration-200 uppercase tracking-wide"
        >
          HOME
        </Link>
        <Link
          to="searchCharacters"
          className="hover:text-white transition duration-200 uppercase tracking-wide"
        >
          FIND CHARACTERS
        </Link>
        <Link
          to="featuredCharacters"
          className="hover:text-white transition duration-200 uppercase tracking-wide"
        >
          MARVEL CHARACTERS
        </Link>
        <Link
          to="footer"
          className="hover:text-white transition duration-200 uppercase tracking-wide"
        >
          FIND US
        </Link>
      </div>

      <div className="md:hidden z-50 cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Mobile  */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center space-y-10 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300`}
      >
        <Link
          to="home"
          className="text-2xl hover:text-white"
          onClick={toggleMenu}
        >
          HOME
        </Link>
        <Link
          to="searchCharacters"
          className="text-2xl hover:text-white"
          onClick={toggleMenu}
        >
          FIND CHARACTERS
        </Link>
        <Link
          to="featuredCharacters"
          className="text-2xl hover:text-white"
          onClick={toggleMenu}
        >
          MARVEL CHARACTERS
        </Link>
        <Link
          to="footer"
          className="text-2xl hover:text-white"
          onClick={toggleMenu}
        >
          FIND US
        </Link>
      </div>
    </div>
  );
};
