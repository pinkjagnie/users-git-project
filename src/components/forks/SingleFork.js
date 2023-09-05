import React from "react";
import Link from "next/link";

import { FiExternalLink } from "react-icons/fi";

const SingleFork = ({ fork }) => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto my-4 px-6 py-4 rounded-sm border-2 border-gray-700 dark:border-gray-500">
      <div className="flex items-center justify-between">
        <p className="font-semibold">Fork done by: {fork.owner.login}</p>
        <span className="text-sm">Updated at: {fork.updated_at}</span>
        <Link
          href={fork.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between text-sm italic cursor-pointer"
        >
          <FiExternalLink className="mr-1" />
          <span>Check on Github</span>
        </Link>
      </div>
    </div>
  );
};

export default SingleFork;
