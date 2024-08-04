import React from "react";

import { ExpertCard, FilterBar, SearchBar } from "components";
import { useExpertsQuery } from "hooks/useExperts";
import { text } from "lib/text";
import { IData } from "types";

import { Alert, Spinner } from "@material-tailwind/react";

export const Advisors: React.FC = () => {
  const { data: expertsData, isLoading, error } = useExpertsQuery();

  if (isLoading)
    return (
      <div className="flex items-center justify-center p-4">
        <Spinner
          className="h-12 w-12"
          color="green"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
      </div>
    );
  if (error) return <Alert color="red">{text.errorMessage}</Alert>;

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <FilterBar />
      </div>
      <div className="col-span-3 flex flex-col gap-2">
        <SearchBar />
        <div className="grid grid-cols-2 gap-4">
          {expertsData?.results?.map((expert: IData) => (
            <ExpertCard
              key={expert.id}
              name={expert.name}
              rate={expert.rate}
              accepts_insurance={expert.accepts_insurance}
              avatar={expert.avatar}
              certification_id={expert.certification_id}
              comments={expert.comments}
              consultations={expert.consultations}
              consultations_at={expert.consultations_at}
              counseling_types={expert.counseling_types}
              experience={expert.experience}
              last_counseling={expert.last_counseling}
              title={expert.title}
              id={expert.id}
            />
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
};
