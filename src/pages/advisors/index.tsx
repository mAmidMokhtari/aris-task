import React from "react";

import { ExpertCard, FilterBar, SearchBar } from "components";
import { useExpertsQuery } from "hooks";
import { text } from "lib/text";
import { useStore } from "store/useStore";

import { Alert, Spinner } from "@material-tailwind/react";

export const Advisors: React.FC = () => {
  const filters = useStore((state) => state.filters);
  const {
    data: expertsData,
    isLoading,
    error,
  } = useExpertsQuery([
    JSON.stringify({
      accepts_insurance: filters.acceptsInsurance,
      sort: filters.sort,
      gender: filters.gender,
      search: filters.search,
    }),
  ]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center p-4">
        <Spinner
          className="w-12 h-12"
          color="green"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      </div>
    );
  if (error) return <Alert color="red">{text.errorMessage}</Alert>;

  return (
    <div className="gap-4 grid grid-cols-4">
      <div className="col-span-1">
        <FilterBar />
      </div>
      <div className="flex flex-col gap-2 col-span-3">
        <SearchBar />
        <div className="gap-4 grid grid-cols-2">
          {expertsData?.map((expert, index) => (
            <ExpertCard key={`${expert.getId()}-${index}`} data={expert} />
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
};
