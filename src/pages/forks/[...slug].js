import React from "react";

import ThemeToggler from "@/components/ui/ThemeToggler";
import SingleFork from "@/components/forks/SingleFork";
import GoHome from "@/components/ui/GoHome";

const forksSubpage = (props) => {
  console.log(props.forksList);

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-200">
      <ThemeToggler />
      <h1 className="w-[90%] mx-auto text-center text-3xl font-bold py-8 text-slate-900 dark:text-slate-200">
        Here is a list of two most recent forks for repo {props.slug[1]} - user{" "}
        {props.slug[0]}
      </h1>
      {props.forksList.map((fork) => {
        return <SingleFork key={fork.id} fork={fork} />;
      })}
      <GoHome />
    </section>
  );
};

export default forksSubpage;

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  console.log(slug);

  const user = slug[0];
  const repo = slug[1];

  let url = `http://localhost:3000/api/users/getForks/${user}/${repo}`;

  let res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(res);

  let forksList = await res.json();

  function compareDates(a, b) {
    const dateA = new Date(a.updatedAt);
    const dateB = new Date(b.updatedAt);

    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
  }

  const forksSorted = forksList.sort(compareDates);

  const twoMostRecentForks = forksSorted.slice(0, 2);

  return {
    props: {
      forksList: twoMostRecentForks,
      slug: slug,
    },
  };
}
