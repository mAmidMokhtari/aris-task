import React from "react";

import { Components } from "components";
import { useExperts } from "hooks/useExperts";
import { IData } from "types";

export const Advisors: React.FC = () => {
  const { data: experts, isLoading, error } = useExperts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading experts</div>;

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <Components.FilterBar />
      </div>
      <div className="col-span-3 flex flex-col gap-2">
        <Components.SearchBar />
        <div className="grid grid-cols-2 gap-4">
          {experts?.results?.map((expert: IData) => (
            <Components.ExpertCard
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
