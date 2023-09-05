import React from "react";
import Link from "next/link";

import axios from "axios";

import { PiGithubLogoDuotone } from "react-icons/pi";
import { BiGitRepoForked } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";

const SingleRepo = ({ repo }) => {
  const getForksInfo = (user, repo) => {
    console.log("user " + user);
    console.log("repo " + repo);
    axios.get(`/api/users/getForks/${user}/${repo}`).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error.response.data);
      }
    );
  };

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto my-4 px-6 py-4 rounded-sm border-2 border-gray-700 dark:border-gray-500">
      {/* TOP PART */}
      <div className="flex items-center justify-between">
        {/* basic data */}
        <div className="w-[70%] flex items-center justify-between">
          <PiGithubLogoDuotone className="text-5xl" />
          <div className="flex-grow text-center">
            <p className="text-lg font-medium">{repo.name}</p>
            <span className="text-xs italic">{repo.language}</span>
          </div>
        </div>
        {/* link */}
        <Link
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between text-sm italic cursor-pointer"
        >
          <FiExternalLink className="mr-1" />
          <span>Check on Github</span>
        </Link>
      </div>

      {/* BOTTOM PART */}
      <div className="flex items-center justify-end gap-4 pt-2 pr-8">
        {/* forked */}
        <div className="text-sm pr-2">
          <p className="text-center">Forked:</p>
          <div className="flex items-center justify-around text-center">
            <BiGitRepoForked />
            <span>{repo.forks_count} time(s)</span>
          </div>
        </div>
        {/* more about */}
        <button
          className="flex items-center justify-between gap-2 text-sm italic cursor-pointer px-4 py-2 rounded-sm border-2 bg-gray-200 dark:text-gray-800"
          onClick={() => {
            getForksInfo(repo.owner.login, repo.name);
          }}
        >
          <FiExternalLink /> More info about forks
        </button>
      </div>
    </div>
  );
};

export default SingleRepo;
