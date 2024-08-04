import React from "react";

import { ManIcon, WomanIcon } from "assets";
import { IconButton, Toggle } from "components/Base";
import { useToggle } from "hooks/useToggle";
import { text } from "lib/text";
import { useStore } from "store/useStore";

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

  const [value, toggle] = useToggle();
  const handleClickToggle = () => {
    handleInsuranceChange;
    toggle();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 bg-green-500 p-2 font-bold">
        {text.filters}
      </div>
      <div className="flex flex-col gap-2 bg-gray-100 p-4">
        <div className="flex justify-between items-center">
          <div>{text.doctorWithInsurance}</div>
          <Toggle onClick={handleClickToggle} value={value} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">{text.doctorGender}</div>
          <div className="flex items-center gap-8 m-2">
            <IconButton
              Icon={<WomanIcon />}
              title={text.woman}
              onClick={() => console.log("woman")}
            />
            <IconButton
              Icon={<ManIcon />}
              title={text.man}
              onClick={() => console.log("man")}
            />
          </div>
        </div>
      </div>
      <button className="border-1 bg-gray-100 p-2 border border-blue-600 w-full font-semibold text-blue-600">
        {text.removeFilters}
      </button>
    </div>
  );
};
