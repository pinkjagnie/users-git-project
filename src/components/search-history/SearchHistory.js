import React, { useEffect, useState } from "react";
import Link from "next/link";

import { TbPoint } from "react-icons/tb";

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
            <div key={index} className="flex items-center">
              <TbPoint />
              {searchPoint}
            </div>
          );
        })
      )}
      <Link
        href="/"
        className="w-[200px] mx-auto mt-10 py-2 px-6 flex items-center justify-around bg-gray-200 border-2 border-gray-900 rounded-md cursor-pointer hover:bg-gray-900 hover:text-gray-200"
      >
        Go Home
      </Link>
    </div>
  );
};

export default SearchHistory;
