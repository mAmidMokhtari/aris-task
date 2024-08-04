import { CounselingTypesEnum } from "enums";

export interface IExpert {
  accepts_insurance?: boolean;
  avatar?: string;
  certification_id?: number;
  comments?: number;
  consultations?: number;
  consultations_at?: number;
  counseling_types?: CounselingTypesEnum[];
  experience?: number;
  id?: number;
  last_counseling?: number;
  name?: string;
  rate?: number;
  title?: string;
}
