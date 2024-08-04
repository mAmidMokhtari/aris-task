import { CounselingTypesEnum } from "enums";
import { text } from "lib/text";

import { IExpert } from "./index.type";

export class Expert {
  protected props: IExpert = {};

  constructor(data?: IExpert) {
    if (data) {
      this.props = data;
    }
  }
  getAcceptsInsurance(): boolean {
    return this.props.accepts_insurance || false;
  }
  getAvatar(): string {
    return this.props.avatar || "";
  }
  getCertificationId(): number {
    return this.props.certification_id || 0;
  }
  getComments(): number {
    return this.props.comments || 0;
  }
  getConsultations(): number {
    return this.props.consultations || 0;
  }
  getConsultationsAt(): number {
    return this.props.consultations_at || 0;
  }
  getCounselingTypes(): CounselingTypesEnum[] {
    return this.props.counseling_types || [];
  }
  getExperience(): number {
    return this.props.experience || 0;
  }
  getId(): number {
    return this.props.id || 0;
  }
  getLastCounseling(): number {
    return this.props.last_counseling || 0;
  }
  getRate(): number {
    return this.props.rate || 0;
  }
  getName(): string {
    return this.props.name || "";
  }
  getTitle(): string {
    return this.props.title || "";
  }

  //   Display

  getCounselingTypeDisplay(counselingType: CounselingTypesEnum): string {
    switch (counselingType) {
      case CounselingTypesEnum.in_office:
        return text.inPerson;
      case CounselingTypesEnum.video_call:
        return text.video;
      case CounselingTypesEnum.voice_call:
        return text.phone;
    }
  }
}
