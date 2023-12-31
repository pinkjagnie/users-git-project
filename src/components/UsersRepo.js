import React from "react";
import Image from "next/image";
import Link from "next/link";

import SingleRepo from "./SingleRepo";

const UsersRepo = ({ usersRepo }) => {
  let repoNumber;

  if (usersRepo.data.length <= 1) {
    repoNumber = `${usersRepo.data.length} repository`;
  } else if (usersRepo.data.length > 1) {
    repoNumber = `${usersRepo.data.length} repositories`;
  }

  return (
    <div className="w-[80%] mx-auto py-10 text-slate-900 dark:text-slate-200">
      <p className="text-xl font-bold text-center">
        List of repositories for the user:
      </p>
      <div className="flex items-center justify-center pt-8">
        <Image
          src={usersRepo.data[0].owner.avatar_url}
          height={50}
          width={50}
          alt={usersRepo.data[0].owner.login}
          className="rounded-full border-2 border-gray-400"
        />
        <div className="pl-4">
          <p className="font-bold text-lg">{usersRepo.data[0].owner.login}</p>
          <span className="block text-xs">{repoNumber}</span>
          <Link
            href={usersRepo.data[0].owner.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="pt-2 text-xs font-medium italic cursor-pointer"
          >
            Check on Github
          </Link>
        </div>
      </div>
      {usersRepo.data.map((repo) => {
        return <SingleRepo repo={repo} key={repo.id} />;
      })}
    </div>
  );
};

export default UsersRepo;
