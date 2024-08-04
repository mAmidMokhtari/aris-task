import React from "react";

import { text } from "lib/text";
import useStore from "store/useStore";

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
    <div className="flex flex-col gap-4">
      <div className="p-2 bg-green-500 flex gap-2 items-center font-bold">
        {text.filters}
      </div>
      <div className="flex flex-col gap-2 p-4 bg-slate-100">
        <div className="flex items-center justify-between">
          <div>{text.doctorWithInsurance}</div>
          <input
            type="checkbox"
            checked={filters.acceptsInsurance ?? false}
            onChange={handleInsuranceChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">{text.doctorGender}</div>
          <select value={filters.gender ?? ""} onChange={handleGenderChange}>
            <option value="">Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
          </select>
        </div>
      </div>
      <button className="w-full p-2 border border-1 font-semibold border-blue-600 text-blue-600 bg-slate-100">
        {text.removeFilters}
      </button>
      {/* <select value={filters.sort} onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="certified_at">Highest Experience</option>
        <option value="-rate">Highest Rating</option>
      </select>
      <select value={filters.gender ?? ""} onChange={handleGenderChange}>
        <option value="">Gender</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
      </select> */}
    </div>
  );
};
