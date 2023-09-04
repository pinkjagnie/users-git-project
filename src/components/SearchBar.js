import React, { useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";

import UsersRepo from "./UsersRepo";

import { SlMagnifier } from "react-icons/sl";
import { AiOutlineHistory } from "react-icons/ai";

const SearchBar = () => {
  const searchRef = useRef();
  const [responseMsg, setResponseMsg] = useState("");
  const [usersRepo, setUsersRepo] = useState();

  const searchHandler = (event) => {
    event.preventDefault();

    let user = searchRef.current.value;

    if (user.trim().length === 0) {
      setResponseMsg("Invalid expression. The search cannot be empty");
    } else {
      searchGithubUser(user);
    }

    searchRef.current.value = "";
  };

  const searchGithubUser = (user) => {
    setResponseMsg("");
    axios.get(`/api/users/get/${user}`).then(
      (response) => {
        setUsersRepo(response);

        // adding to localStorage
        let searchHistoryJSON = localStorage.getItem("searchHistory");
        let searchHistoryList = [];

        if (searchHistoryJSON) {
          searchHistoryList = JSON.parse(searchHistoryJSON);
        }

        searchHistoryList.push(response.data[0].owner.login);

        localStorage.setItem(
          "searchHistory",
          JSON.stringify(searchHistoryList)
        );
        // end of localStorage
      },
      (error) => {
        setResponseMsg(error.response.data);
      }
    );
  };

  return (
    <div>
      {/* Search bar */}
      <div className="w-[80%] h-[25vh] mt-10 mx-auto rounded-md bg-gray-600 flex items-center justify-center">
        <input
          type="text"
          name="search"
          placeholder="Search for a Github user"
          ref={searchRef}
          className="bg-gray-100 text-gray-700 w-[80%] h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
        <button type="submit" className="-ml-12" onClick={searchHandler}>
          <SlMagnifier size={30} className="text-gray-600" />
        </button>
      </div>
      {/* search history */}
      <Link
        href="/search-history"
        className="w-[200px] mx-auto mt-4 py-2 px-6 flex items-center justify-around bg-gray-200 border-2 border-gray-900 rounded-md cursor-pointer hover:bg-gray-900 hover:text-gray-200"
      >
        <AiOutlineHistory className="text-2xl" />
        <span>Search history</span>
      </Link>

      {/* Response Msg - failed */}
      {responseMsg && (
        <p className="w-[60%] mx-auto text-xl font-bold italic text-rose-950 text-center pt-8">
          {responseMsg}
        </p>
      )}

      {/* Response - succed */}
      {usersRepo && <UsersRepo usersRepo={usersRepo} />}
    </div>
  );
};

export default SearchBar;
