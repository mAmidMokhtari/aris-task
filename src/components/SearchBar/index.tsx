import React from "react";

import { SortEnum } from "enums";
import { text } from "lib/text";
import { useStore } from "store/useStore";

import { SearchInput } from "./components";

export const SearchBar: React.FC = () => {
  const { filters, setFilters } = useStore();

  return (
    <div className="flex justify-between items-center bg-gray-300 p-2">
      <div className="flex items-center gap-2">
        <div>{text.sortBy}</div>
        <div className="flex items-center gap-6">
          <button
            className={`font-semibold ${
              filters.sort === SortEnum.default && `text-blue-600`
            }`}
            onClick={() => setFilters({ sort: SortEnum.default })}
          >
            {text.default}
          </button>
          <button
            className={`font-semibold ${
              filters.sort === SortEnum.certified_at && `text-blue-600`
            }`}
            onClick={() => setFilters({ sort: SortEnum.certified_at })}
          >
            {text.highestExperience}
          </button>
          <button
            className={`font-semibold ${
              filters.sort === SortEnum.rate && `text-blue-600`
            }`}
            onClick={() => setFilters({ sort: SortEnum.rate })}
          >
            {text.highestRate}
          </button>
        </div>
      </div>
      <div className="w-[450px]">
        <SearchInput />
      </div>
    </div>
  );
};
