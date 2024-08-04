import React from "react";

import { InPersonIcon, InsuranceIcon, PhoneIcon, VideoIcon } from "assets";
import { CounselingTypesEnum } from "enums";
import { text } from "lib/text";
import { Expert } from "models";

import { Avatar, Rating } from "@material-tailwind/react";

export interface ExpertCardProps {
  data: Expert;
}

export const ExpertCard: React.FC<ExpertCardProps> = ({ data }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const renderCounselingTypeIconDisplay = (
    counselingType: CounselingTypesEnum
  ) => {
    switch (counselingType) {
      case CounselingTypesEnum.in_office:
        return <InPersonIcon />;
      case CounselingTypesEnum.video_call:
        return <VideoIcon />;
      case CounselingTypesEnum.voice_call:
        return <PhoneIcon />;
    }
  };

  return (
    <div className="flex flex-col gap-2 bg-gray-100">
      <div className="flex justify-between items-center p-2">
        <div className="flex items-center gap-4">
          <Avatar
            src={baseUrl + "/" + data.getAvatar()}
            variant="square"
            size="xxl"
            placeholder="avatar"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />

          <div className="flex flex-col gap-2">
            <div className="font-bold">{data.getName()}</div>
            <div>{data.getTitle()}</div>
            <div className="flex items-center gap-2">
              <Rating
                unratedColor="blue"
                ratedColor="blue"
                value={data.getRate()}
                readonly
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                placeholder={undefined}
              />
              <div className="text-gray-500 text-xs">
                {data.getComments()} {text.comment}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {data.getCounselingTypes().map((item) => (
            <div key={item} className="flex items-center gap-2">
              {renderCounselingTypeIconDisplay(item)}
              <p>{data.getCounselingTypeDisplay(item)}</p>
            </div>
          ))}
          {data.getAcceptsInsurance() && (
            <div className="flex items-center gap-2">
              <InsuranceIcon />
              <p>{text.insurance}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center p-2 font-semibold">
        <div>
          {text.successfulConsultation} {data.getConsultationsAt()}(
          {text.inThreeYear})
        </div>
        <div className="pl-12">
          {text.experience} {data.getExperience()} {text.year}
        </div>
      </div>
      <div className="p-2">
        {text.psychologicalSystemNumber} {data.getCertificationId()}
      </div>
      <button className="bg-gray-300 p-2 w-full font-semibold">
        {text.getAdvice}
      </button>
    </div>
  );
};
