import React from "react";
import Image from "next/image";

const UsersRepo = ({ usersRepo }) => {
  let repoNumber;

  if (usersRepo.data.length <= 1) {
    repoNumber = `${usersRepo.data.length} repository`;
  } else if (usersRepo.data.length > 1) {
    repoNumber = `${usersRepo.data.length} repositories`;
  }

  return (
    <div className="w-[80%] mx-auto pt-10">
      <p className="text-xl font-bold text-center">
        List of repositories for the user:
      </p>
      <div className="flex items-center justify-between w-[30%] mx-auto pt-8">
        <Image
          src={usersRepo.data[0].owner.avatar_url}
          height={50}
          width={50}
          alt={usersRepo.data[0].owner.login}
          className="rounded-full border-2 border-gray-400"
        />
        <div className="flex-grow pl-4">
          <p className="font-bold text-lg">{usersRepo.data[0].owner.login}</p>
          <span className="text-xs">{repoNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default UsersRepo;
