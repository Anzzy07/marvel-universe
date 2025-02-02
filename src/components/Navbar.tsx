import { GiCharacter, GiSwordman } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings, IoIosLogOut } from "react-icons/io";
import Logo from "../assets/Logo.png";

export const Navbar = () => {
  const navLinks = [
    { name: "Characters", icon: GiCharacter },
    { name: "Search Heroes", icon: FaSearch },
    { name: "Heroes Profile", icon: CgProfile },
    { name: "My Heroes", icon: GiSwordman },
  ];

  return (
    <div className="px-8 py-5 flex flex-col border-r border-gray-700 w-60 h-screen bg-gray-900 text-white">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={Logo}
          alt="Marvel Logo"
          className="w-36 border-2 border-white rounded-md p-2"
        />
      </div>

      {/* Welcome Message */}
      <div className="mb-6 text-center">
        <h3 className="text-sm font-medium text-gray-300">
          Welcome, Mr. Anzel
        </h3>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-3 flex-1">
        {navLinks.map((link, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-red-600 cursor-pointer transition duration-300"
          >
            <link.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{link.name}</span>
          </div>
        ))}
      </nav>

      {/* Bottom Buttons */}
      <div className="flex flex-col space-y-2">
        <button className="flex items-center space-x-3 p-2 rounded-md hover:bg-red-600 transition duration-300">
          <IoMdSettings className="w-5 h-5" />
          <span className="text-sm font-medium">Settings</span>
        </button>
        <button className="flex items-center space-x-3 p-2 rounded-md hover:bg-red-600 transition duration-300">
          <IoIosLogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};
