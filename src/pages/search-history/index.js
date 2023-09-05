import React from "react";

import ThemeToggler from "@/components/ui/ThemeToggler";
import SearchHistory from "@/components/search-history/SearchHistory";

const searchHistorySubpage = () => {
  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-800">
      <ThemeToggler />
      <h1 className="text-center text-3xl font-bold py-8 text-slate-900 dark:text-slate-200">
        Here is a list of your previous searches
      </h1>
      <SearchHistory />
    </section>
  );
};

export default searchHistorySubpage;
