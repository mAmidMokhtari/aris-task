import React from "react";

import { text } from "lib/text";
import { CounselingTypesEnum } from "types";

import { Rating } from "@material-tailwind/react";

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
    <div className="flex flex-col gap-2 bg-gray-100">
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center gap-4">
          <img src={avatar} />
          <div className="flex flex-col gap-2">
            <div className="font-bold">{name}</div>
            <div>{title}</div>
            <div className="flex items-center gap-2">
              <Rating
                unratedColor="blue"
                ratedColor="blue"
                value={rate}
                readonly
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder={undefined}
              />
              <div className="text-gray-500 text-xs">{comments}نظر</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {counseling_types} {accepts_insurance}
        </div>
      </div>
      <div className="flex justify-between items-center p-2 font-semibold">
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
      <button className="bg-gray-300 p-2 w-full font-semibold">
        {text.getAdvice}
      </button>
    </div>
  );
};
