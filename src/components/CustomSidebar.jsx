import { useState } from "react";
import { FaHome, FaUserAlt, FaCog, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function CustomSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div
        className={`relative top-0 h-dvh  left-0 md:w-64 bg-gray-900 transition-width duration-300 text-white ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h2
            className={`text-xl font-bold ml-2  md:block mt-6 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            Product App
          </h2>
          <button
            className="block md:hidden pl-3 mt-6 md:pl-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center p-7 hover:bg-gray-700 cursor-pointer">
              <FaHome size={24} />
              <span className={`ml-4 md:block  ${isOpen ? "block" : "hidden"}`}>
                Dashboard
              </span>
            </li>
            <li className="flex items-center p-7 hover:bg-gray-700 cursor-pointer">
              <FaUserAlt size={24} />
              <span className={`ml-4 md:block  ${isOpen ? "block" : "hidden"}`}>
                Profile
              </span>
            </li>
            <li className="flex items-center p-7 hover:bg-gray-700 cursor-pointer">
              <FaCog size={24} />
              <span className={`ml-4 md:block  ${isOpen ? "block" : "hidden"}`}>
                Settings
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default CustomSidebar;
