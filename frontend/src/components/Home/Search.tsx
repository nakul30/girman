import React from "react";
import search_logo from "../../assets/search_logo.svg";
import { FaSearch } from "react-icons/fa";
const Search: React.FC = () => {
  return (
    <div className="bg-custom-gradient flex flex-col justify-start items-center  h-screen w-screen mt-[1%]">
      <div className="mb-[2%] mt-[8%] flex justify-center w-[40%] items-center">
        <img src={search_logo} alt="Search_Logo" className="w-full" />
      </div>
      <div className="flex items-center border border-gray-300 rounded-lg p-2 w-[40%] bg-white">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 outline-none border-none w-full text-gray-700"
        />
      </div>
    </div>
  );
};

export default Search;
