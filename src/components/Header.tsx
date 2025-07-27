import Image from "next/image";
import { FaSearch, FaChevronDown, FaPhoneAlt } from "react-icons/fa";

const navLinks = [
  "Class 6-12",
  "Skills",
  "Admission",
  "Online Batch",
  "English Centre",
  "More",
];

const Header = () => {
  return (
    <header className="shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section: Logo and Search */}
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/10_Minute_School_Logo.svg/2560px-10_Minute_School_Logo.svg.png"
                alt="10 Minute School Logo"
                width={130}
                height={40}
              />
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for skills courses, or school programs...
"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Middle Section: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="flex items-center text-sm font-medium text-gray-700 hover:text-green-600"
              >
                {link}
                <FaChevronDown className="ml-1 h-3 w-3" />
              </a>
            ))}
          </nav>

          {/* Right Section: Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:flex items-center space-x-2 border border-gray-300 px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              <FaPhoneAlt className="h-3 w-3 text-green-500" />
              <span>16910</span>
            </button>
            <button className="bg-green-500 text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-green-600">
           Log in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
