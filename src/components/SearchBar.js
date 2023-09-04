import React, { useRef, useState } from "react";
import axios from "axios";

import UsersRepo from "./UsersRepo";

import { SlMagnifier } from "react-icons/sl";

const SearchBar = () => {
  const searchRef = useRef();
  const [responseMsg, setResponseMsg] = useState("");
  const [usersRepo, setUsersRepo] = useState();

  const searchHandler = (event) => {
    event.preventDefault();

    let user = searchRef.current.value;
    console.log(user);

    if (user.trim().length === 0) {
      setResponseMsg("Invalid expression. The search cannot be empty");
    } else {
      searchGithubUser(user);
    }

    searchRef.current.value = "";
  };

  const searchGithubUser = (user) => {
    axios.get(`/api/users/get/${user}`).then(
      (response) => {
        console.log(response);
        setUsersRepo(response);
      },
      (error) => {
        console.log(error);
        console.log("odpp " + error.response.data);
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
