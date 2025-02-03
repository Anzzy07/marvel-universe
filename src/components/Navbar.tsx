import { useState } from "react";
import { FaSearch, FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings, IoIosLogOut } from "react-icons/io";
import { MdFavoriteBorder, MdKeyboardArrowLeft } from "react-icons/md";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import Logo from "../assets/Logo.png";

export const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const variants = {
    expanded: {
      width: "16rem",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    nonExpanded: {
      width: "4.5rem",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const navLinks = [
    { name: "Home", icon: FaHome, path: "/" },
    { name: "Search", icon: FaSearch, path: "/search-characters" },
    { name: "Profiles", icon: CgProfile, path: "/character-details" },
    { name: "Favorites", icon: MdFavoriteBorder, path: "/saved-characters" },
  ];

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className="flex flex-col border-r border-gray-800 h-screen bg-gray-950 text-gray-300 relative"
    >
      <div className="flex items-center px-4 py-3 transition-all duration-300 relative">
        <img
          src={Logo}
          alt="Logo"
          className="w-8 h-8 rounded-full transition-all duration-300"
        />
        <motion.span
          className={`text-xl font-semibold ml-3 transition-opacity duration-300 ${
            isExpanded ? "opacity-100" : "opacity-0 hidden"
          }`}
          initial={{ opacity: 0 }}
          animate={isExpanded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          MARVEL
        </motion.span>

        <div className="absolute top-3 right-2 z-10">
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-8 h-8 rounded-full absolute -right-[25px] bg-red-600 hover:bg-red-500 flex items-center justify-center cursor-pointer transition duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            <MdKeyboardArrowLeft className="text-white text-xl transition-transform duration-300" />
          </div>
        </div>
      </div>

      <nav className="flex flex-col space-y-1 flex-1 px-2 py-2 transition-all duration-300">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 cursor-pointer transition duration-300 ${
                isActive ? "bg-red-600 font-semibold text-white" : ""
              } ${isExpanded ? "" : "justify-center"}`
            }
          >
            <link.icon size={20} className="w-5 h-5 text-gray-500" />
            <motion.span
              className={`text-sm font-medium transition-opacity duration-300 ${
                isExpanded ? "opacity-100" : "opacity-0 hidden"
              }`}
              initial={{ opacity: 0 }}
              animate={isExpanded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {link.name}
            </motion.span>
          </NavLink>
        ))}
      </nav>

      <div className="flex flex-col space-y-1 px-2 py-2 transition-all duration-300">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 transition duration-300 ${
              isActive ? "bg-red-600 font-semibold text-white" : ""
            } ${isExpanded ? "" : "justify-center"}`
          }
        >
          <IoMdSettings className="w-5 h-5 text-gray-500" />
          <motion.span
            className={`text-sm font-medium transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0 hidden"
            }`}
            initial={{ opacity: 0 }}
            animate={isExpanded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Settings
          </motion.span>
        </NavLink>

        <motion.button
          className={`flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800 transition duration-300 ${
            isExpanded ? "" : "justify-center"
          }`}
          onClick={() => console.log("Logging out...")}
          whileHover={{ scale: 1.05 }}
        >
          <IoIosLogOut className="w-5 h-5 text-gray-500" />
          <motion.span
            className={`text-sm font-medium transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0 hidden"
            }`}
            initial={{ opacity: 0 }}
            animate={isExpanded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Logout
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
};
