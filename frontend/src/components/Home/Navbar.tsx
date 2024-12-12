import React from "react";
import logoImage from "../../assets/logo.png";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md h-[8vh] flex justify-center items-center">
      <div className="flex justify-around items-center h-[80%] w-[80%] ">
        <div className=" h-[100%] w-[13%]">
          <img
            className="h-full w-full"
            src={logoImage}
            alt="Girman Technologies"
          />
        </div>
        <div className="flex items-center justify-center  text-[100%]">
          <a
            href="#"
            className="black hover:text-blue-600 hover:underline  mx-[5%]"
          >
            SEARCH
          </a>
          <a
            href="https://girmantech.com/"
            className="black hover:text-gray-900 hover:underline  mx-[5%]"
          >
            WEBSITE
          </a>
          <a
            href="https://www.linkedin.com/company/girmantech/"
            className="black hover:text-gray-900 hover:underline  mx-[5%]"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:contact@girmantech.com"
            className="black hover:text-gray-900 hover:underline  mx-[5%]"
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
