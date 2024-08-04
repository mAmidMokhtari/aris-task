import React from "react";

import { SortEnum } from "enums";
import { text } from "lib/text";
import { useStore } from "store/useStore";

export const SearchBar: React.FC = () => {
  const { filters, setFilters, setSortFilter } = useStore();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ search: event.target.value });
  };

  return (
    <div className="flex justify-between items-center bg-gray-300 p-2">
      <div className="flex items-center gap-2">
        <div>{text.sortBy}</div>
        <div className="flex items-center gap-6">
          <button
            className="font-semibold"
            onClick={() => setSortFilter(SortEnum.default)}
          >
            {text.default}
          </button>
          <button
            className="font-semibold"
            onClick={() => setSortFilter(SortEnum.certified_at)}
          >
            {text.highestExperience}
          </button>
          <button
            className="font-semibold"
            onClick={() => setSortFilter(SortEnum.rate)}
          >
            {text.highestRate}
          </button>
        </div>
      </div>
      <div className="w-[450px]">
        <input
          type="text"
          placeholder={text.search}
          value={filters.search}
          onChange={handleSearchChange}
          className="bg-white p-2 border w-full"
        />
      </div>
    </div>
  );
};
