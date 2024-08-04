import React from "react";

import { text } from "lib/text";
import { CounselingTypesEnum } from "types";

export interface ExpertCardProps {
  accepts_insurance: boolean;
  avatar: string;
  certification_id: number;
  comments: number;
  consultations: number;
  consultations_at: number;
  counseling_types: CounselingTypesEnum;
  experience: number;
  id: number;
  last_counseling: number;
  name: string;
  rate: number;
  title: string;
}

export const ExpertCard: React.FC<ExpertCardProps> = ({
  name,
  certification_id,
  last_counseling,
  experience,
  counseling_types,
  accepts_insurance,
  avatar,
  title,
  rate,
  comments,
}) => {
  return (
    <div className="bg-slate-100 flex flex-col gap-2">
      <div className="flex items-center justify-between p-2">
        <div className="flex gap-4 items-center">
          <img src={avatar} />
          <div className="flex flex-col gap-2">
            <div className="font-bold">{name}</div>
            <div>{title}</div>
            <div className="flex items-center gap-2">
              <div>{rate}</div>
              <div className="text-xs text-slate-500">{comments}نظر</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {counseling_types} {accepts_insurance}
        </div>
      </div>
      <div className="flex items-center justify-between font-semibold p-2">
        <div>
          {text.successfulConsultation} {last_counseling}({text.inThreeYear})
        </div>
        <div className="pl-12">
          {text.experience} {experience}
        </div>
      </div>
      <div className="p-2">
        {text.psychologicalSystemNumber} {certification_id}
      </div>
      <button className="w-full p-2 font-semibold bg-slate-200">
        {text.getAdvice}
      </button>
    </div>
  );
};
