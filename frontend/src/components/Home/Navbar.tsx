import React, { useState } from "react";
import logoImage from "../../assets/logo.png";
import { IoIosMenu } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md h-[8vh] flex justify-center items-center">
      <div className="flex justify-around items-center w-[100%] md:h-[80%] md:w-[80%] ">
        <div className="h-[60%] w-[20%] md:h-[80%] md:w-[14%] lg:h-[100%] lg:w-[13%]">
          <img
            className="h-full w-full"
            src={logoImage}
            alt="Girman Technologies"
          />
        </div>

        <div className="md:hidden cursor-pointer z-20" onClick={toggleMenu}>
          <IoIosMenu className="h-[100%] w-[130%]" />
        </div>

        <div className="hidden md:flex text-[80%] items-center justify-center lg:text-[100%]">
          <a
            href="#"
            className="black hover:text-blue-600 hover:underline mx-[5%]"
          >
            SEARCH
          </a>
          <a
            href="https://girmantech.com/"
            className="black hover:text-gray-900 hover:underline mx-[5%]"
          >
            WEBSITE
          </a>
          <a
            href="https://www.linkedin.com/company/girmantech/"
            className="black hover:text-gray-900 hover:underline mx-[5%]"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:contact@girmantech.com"
            className="black hover:text-gray-900 hover:underline mx-[5%]"
          >
            CONTACT
          </a>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-md w-[20%] top-[8vh] right-[15%] absolute text-[70%]">
            <div className="flex flex-col items-center py-4">
              <a
                href="#"
                className="block py-2 hover:text-blue-600 hover:underline"
                onClick={toggleMenu}
              >
                SEARCH
              </a>
              <a
                href="https://girmantech.com/"
                className="block py-2 hover:text-gray-900 hover:underline"
                onClick={toggleMenu}
              >
                WEBSITE
              </a>
              <a
                href="https://www.linkedin.com/company/girmantech/"
                className="block py-2 hover:text-gray-900 hover:underline"
                onClick={toggleMenu}
              >
                LINKEDIN
              </a>
              <a
                href="mailto:contact@girmantech.com"
                className="block py-2 hover:text-gray-900 hover:underline"
                onClick={toggleMenu}
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
