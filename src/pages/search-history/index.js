import React from "react";

import SearchHistory from "@/components/search-history/SearchHistory";

const searchHistorySubpage = () => {
  return (
    <section className="min-h-screen bg-slate-50">
      <h1 className="text-center text-3xl font-bold py-8">
        Here is a list of your previous searches
      </h1>
      <SearchHistory />
    </section>
  );
};

export default searchHistorySubpage;
