import React from 'react';

import {
  ManIcon,
  WomanIcon,
} from 'assets';
import {
  IconButton,
  Toggle,
} from 'components/Base';
import { text } from 'lib/text';
import { useStore } from 'store/useStore';

export const FilterBar: React.FC = () => {
  const { filters, setFilters } = useStore();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 bg-green-500 p-2 font-bold">
        {text.filters}
      </div>
      <div className="flex flex-col gap-2 bg-gray-100 p-4">
        <div className="flex justify-between items-center">
          <div>{text.doctorWithInsurance}</div>
          <Toggle
            onClick={() =>
              setFilters({ acceptsInsurance: !filters.acceptsInsurance })
            }
            value={filters.acceptsInsurance}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">{text.doctorGender}</div>
          <div className="flex items-center gap-8 m-2">
            <IconButton
              color={`${filters.gender === 2 ? `bg-green-500` : `bg-gray-500`}`}
              Icon={<WomanIcon />}
              title={text.woman}
              onClick={() => setFilters({ gender: 2 })}
            />
            <IconButton
              color={`${filters.gender === 1 ? `bg-green-500` : `bg-gray-500`}`}
              Icon={<ManIcon />}
              title={text.man}
              onClick={() => setFilters({ gender: 1 })}
            />
          </div>
        </div>
      </div>
      <button
        className="border-1 bg-gray-100 p-2 border border-blue-600 w-full font-semibold text-blue-600"
        onClick={() =>
          setFilters({
            sort: "",
            gender: 0,
            acceptsInsurance: undefined,
            search: "",
          })
        }
      >
        {text.removeFilters}
      </button>
    </div>
  );
};
