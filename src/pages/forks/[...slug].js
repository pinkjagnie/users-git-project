import React from "react";
import axios from "axios";

import ThemeToggler from "@/components/ui/ThemeToggler";
import SingleFork from "@/components/forks/SingleFork";

const forksSubpage = (props) => {
  console.log(props.forksList);

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-200">
      <ThemeToggler />
      <h1 className="w-[90%] mx-auto text-center text-3xl font-bold py-8 text-slate-900 dark:text-slate-200">
        Here is a list of forks for repo {props.slug[1]} - user {props.slug[0]}
      </h1>
      {props.forksList.map((fork) => {
        return <SingleFork key={fork.id} fork={fork} />;
      })}
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

  // let forksList;

  // axios.get(`/api/users/getForks/${user}/${repo}`).then(
  //   (response) => {
  //     console.log(response.data);
  //     forksList = response.data;
  //   },
  //   (error) => {
  //     console.log("errrrrrrrrrr " + error);
  //   }
  // );

  let url = `http://localhost:3000/api/users/getForks/${user}/${repo}`;

  let res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(res);

  let forksList = await res.json();

  return {
    props: {
      forksList: forksList,
      slug: slug,
    },
  };
}
