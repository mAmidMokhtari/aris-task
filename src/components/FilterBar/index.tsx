import React from 'react';

import useStore from 'store/useStore';

export const FilterBar: React.FC = () => {
  const { filters, setFilters } = useStore();

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ sort: event.target.value });
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ gender: parseInt(event.target.value) });
  };

  const handleInsuranceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilters({ acceptsInsurance: event.target.checked });
  };

  return (
    <div className="flex space-x-4">
      <select value={filters.sort} onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="certified_at">Highest Experience</option>
        <option value="-rate">Highest Rating</option>
      </select>
      <select value={filters.gender ?? ""} onChange={handleGenderChange}>
        <option value="">Gender</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
      </select>
      <label>
        <input
          type="checkbox"
          checked={filters.acceptsInsurance ?? false}
          onChange={handleInsuranceChange}
        />
        Accepts Insurance
      </label>
    </div>
  );
};
