import React, { useState, useEffect, useContext } from "react";
import { FormContext } from "../Contexts/FormProvider";

const CustomerTable = () => {
  const [users, setUsers] = useState([]);
  const { searchInput, selectInput, setSelectInput } = useContext(FormContext);

  useEffect(() => {
    const userDetails = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      console.log(data);
      setUsers(data);
    };

    userDetails();
  }, []);

  // const filteredProducts = users.filter((user) => user.name.common.toLowerCase().includes(searchInput.toLowerCase()))
  // setFilteredUsers(filteredProducts);

  const filteredUsers = users.filter((user) => {
    const filterProducts = searchInput
      ? user.name.common.toLowerCase().includes(searchInput.toLowerCase()) ||
        (user.capital &&
          user.capital[0].toLowerCase().includes(searchInput.toLowerCase())) ||
        user.region.toLowerCase().includes(searchInput.toLowerCase())
      : true;

    const filterUser = selectInput ? user.region === selectInput : true;

    return filterProducts && filterUser;
  });

  // const filteredUsers = filterProducts.filter((user) => user.region === selectInput);

  // const filterProducts = searchInput
  // ? users.filter((user) =>
  //     user.name.common.toLowerCase().includes(searchInput.toLowerCase()) ||
  //     (user.capital && user.capital[0].toLowerCase().includes(searchInput.toLowerCase()))
  //   )
  // : users;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Customers</h1>
      <div className="overflow-x-auto overflow-y-auto max-h-[600px] lg:max-h-[400px]">
      <table className="w-full bg-white border border-gray-200">
  <thead>
    <tr className="bg-blue-700 text-white p-3 sticky top-0 z-10 font-medium">
      <th className="py-2 px-4 border-b">Name</th>
      <th className="py-2 px-4 border-b">Capital</th>
      <th className="py-2 px-4 border-b">Region</th>
      <th className="py-2 px-4 border-b">Flags</th>
      <th className="py-2 px-4 border-b">
        <select
          value={selectInput}
          onChange={(e) => setSelectInput(e.target.value)}
          className="bg-transparent outline-none text-white"
        >
          <option className="text-black" value="">Continents</option>
          <option className="text-black" value="Africa">Africa</option>
          <option className="text-black" value="Americas">Americas</option>
          <option className="text-black" value="Asia">Asia</option>
          <option className="text-black" value="Europe">Europe</option>
          <option className="text-black" value="Oceania">Oceania</option>
        </select>
      </th>
    </tr>
  </thead>
  <tbody>
    {filteredUsers.map((user, index) => (
      <tr key={index} className="text-center">
        <td className="py-2 px-4 border-b text-sm md:text-base">{user.name.common}</td>
        <td className="py-2 px-4 border-b text-sm md:text-base">
          {user.capital ? user.capital[0] : 'N/A'}
        </td>
        <td className="py-2 px-4 border-b text-sm md:text-base">{user.region}</td>
        <td className="py-2 px-4 border-b">
          <img
            className="w-6 h-6 md:w-8 md:h-8"
            src={user.flags.png}
            alt={`Flag of ${user.name.common}`}
          />
        </td>
        <td className="py-2 px-4 border-b text-sm md:text-base">
          {user.continents && user.continents[0]}
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
};

export default CustomerTable;
