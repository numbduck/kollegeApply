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
//   console.log(searchResults, "results search");

  if(search === ""){
    return ;
  }

  return (
    <div className=" flex flex-col justify-center items-center p-2 my-4 pl-10 pr-10 ">
    <p className="font-semibold text-xl">Search Results</p>
    <div className="flex flex-wrap justify-center gap-4">
    {searchResults?.length > 0 && searchResults.map((item) => {
      return (
        <NewsCard
          imgsrc={item.imgsrc}
          heading={item.heading}
          subheading={item.subheading}
          date={item.date}
          key={item.id}
          id={item.id}
        />
      );
    })}
    {
        search !== "" && searchResults?.length === 0 && <div className="m-auto"><img src="/images/nodata.svg" className="h-full w-full"/></div>
    }
  </div>
  </div>
  );
}

export default SearchResults;
