import React from "react";
import Link from "next/link";

import { PiGithubLogoDuotone } from "react-icons/pi";
import { BiGitRepoForked } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";

const SingleRepo = ({ repo }) => {
  return (
    <div className="flex items-center justify-between w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto my-4 px-6 py-4 rounded-sm border-2 border-gray-700 dark:border-gray-500">
      {/* basic data */}
      <div className="w-[60%] flex items-center justify-between">
        <PiGithubLogoDuotone className="text-5xl" />
        <div className="flex-grow text-center">
          <p className="text-lg font-medium">{repo.name}</p>
          <span className="text-xs italic">{repo.language}</span>
        </div>
      </div>
      {/* forked */}
      <div className="text-sm pr-2">
        <p className="text-center">Forked:</p>
        <div className="flex items-center justify-around text-center">
          <BiGitRepoForked />
          <span>{repo.forks_count} time(s)</span>
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
  );
};

export default SingleRepo;
