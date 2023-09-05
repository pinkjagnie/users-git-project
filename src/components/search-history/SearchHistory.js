import React, { useEffect, useState } from "react";

import { TbPoint } from "react-icons/tb";

import GoHome from "../ui/GoHome";

const SearchHistory = () => {
  const [searchArray, setSearchArray] = useState([]);

  useEffect(() => {
    // localStorage
    const retrievedSearchHistory = localStorage.getItem("searchHistory");
    const searchHistoryArray = JSON.parse(retrievedSearchHistory);

    setSearchArray(searchHistoryArray);
    // end of localStorage
  }, []);

  return (
    <div className="w-[50%] mx-auto pb-10">
      {searchArray === null ? (
        <p className="text-center text-lg font-bold py-4 text-rose-950">
          Search history is empty
        </p>
      ) : (
        searchArray.map((searchPoint, index) => {
          return (
            <div
              key={index}
              className="flex items-center text-slate-900 dark:text-slate-200"
            >
              <TbPoint />
              {searchPoint}
            </div>
          );
        })
      )}
      <GoHome />
    </div>
  );
};

export default SearchHistory;
