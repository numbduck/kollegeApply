"use client";

import { useDebouncedValue } from "@mantine/hooks";
import { useSearch } from "../../context/searchContext";
import NewsCard from "./newsCard";


function SearchResults({ sampleNews }) {
  const { search } = useSearch();

  // to create a slight delay in results while user is typing to reduce the number of operations, in case of backend to reduce api calls.
  const [debounced] = useDebouncedValue(search, 400);
  let searchResults = [];
  sampleNews.map((item) => {
    if (
      item.subheading.toLowerCase().includes(debounced?.toLowerCase()) &&
      debounced !== ""
    ) {
      searchResults.push(item);
    }
  });
  console.log(searchResults, "results search");

  if(search === ""){
    return ;
  }

  return (
    <div className="bg-[#f5f3ff] flex flex-col justify-center items-center p-2 my-4 pl-10 pr-10 shadow-md">
    <p className="font-semibold text-xl">Search Results</p>
    <div className="flex flex-wrap justify-center gap-4">
    {searchResults.map((item) => {
      return (
        <NewsCard
          imgsrc={item.imgsrc}
          heading={item.heading}
          subheading={item.subheading}
          date={item.date}
          key={item.id}
        />
      );
    })}
  </div>
  </div>
  );
}

export default SearchResults;
