import React from "react";
import Link from "next/link";

const GoHome = () => {
  return (
    <Link
      href="/"
      className="w-[200px] mx-auto mt-10 py-2 px-6 flex items-center justify-around bg-gray-200 border-2 border-gray-900 rounded-md cursor-pointer hover:bg-gray-900 hover:text-gray-200 text-slate-900"
    >
      Go Home
    </Link>
  );
};

export default GoHome;
