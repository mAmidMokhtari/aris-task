import React, { useEffect, useState } from "react";

import { text } from "lib/text";
import { useStore } from "store/useStore";

const SearchInputComponent = () => {
  const { filters, setFilters } = useStore();
  const [searchTerm, setSearchTerm] = useState(filters.search);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilters({ search: debouncedSearchTerm });
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedSearchTerm, setFilters]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    setDebouncedSearchTerm(value);
  };

  return (
    <input
      type="text"
      placeholder={text.search}
      value={searchTerm}
      onChange={handleSearchChange}
      className="bg-white p-2 border w-full"
    />
  );
};

export const SearchInput = React.memo(SearchInputComponent);
