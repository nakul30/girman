import React, { useState, useEffect } from "react";
import search_logo from "../../assets/search_logo.svg";
import { FaSearch } from "react-icons/fa";
import employeeData from "../../data.json";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
type Employee = {
  first_name: string;
  last_name: string;
  contact_number: string;
  city: string;
};
const Search: React.FC = () => {
  const [value, setValue] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const navigate = useNavigate();
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // setLoading(true);
    if (e.key === "Enter") {
      setFilteredEmployees([]);
      if (value === "") {
        setFilteredEmployees([]);
        navigate("/error");
        return;
      }
      const filtered = employees.filter(
        (employee) =>
          employee.first_name.toLowerCase().includes(value.toLowerCase()) ||
          employee.city.toLowerCase().includes(value.toLowerCase())
      );

      if (filtered.length === 0) {
        navigate("/error");
        return;
      }
      navigate("/");
      setFilteredEmployees(filtered);
    }
    // setLoading(false);
  };
  useEffect(() => {
    setEmployees(employeeData);
  }, []);
  return (
    <div className="flex flex-col justify-start items-center mt-[1%]">
      <div className="mb-[2%] mt-[8%] flex justify-center w-[50%] items-center">
        <img
          src={search_logo}
          alt="Search_Logo"
          className="hidden md:block w-full"
        />
      </div>
      <div className="flex items-center border border-gray-300 rounded-lg p-2 w-[80%] smd:w-[60%] md:w-[60%] bg-white text-[110%]">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 outline-none border-none w-full text-gray-700"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="w-[80%] mt-[3%] flex flex-col md:flex md:flex-row md:flex-wrap md:justify-between smd:w-[60%]">
        {filteredEmployees.map((employee, index) => {
          return (
            <Card
              key={index}
              image="../../assets/person.png"
              contact={employee.contact_number}
              title={employee.first_name + " " + employee.last_name}
              location={employee.city}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Search;
