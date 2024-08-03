import React from 'react';

import useStore from 'store/useStore';

export const SearchBar: React.FC = () => {
  const { filters, setFilters } = useStore();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ search: event.target.value });
  };

  return (
    <input
      type="text"
      placeholder="Search experts"
      value={filters.search}
      onChange={handleSearchChange}
      className="p-2 border rounded w-full"
    />
  );
};
