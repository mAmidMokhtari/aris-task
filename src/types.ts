// import { ReactComponent as VideoCallIcon } from './icons/video_call.svg';
// import { ReactComponent as VoiceCallIcon } from './icons/voice_call.svg';
// import { ReactComponent`` as InOfficeIcon } from './icons/in_office.svg';

export enum CounselingTypesEnum {
    in_office,
    video_call,
    voice_call

}


// export const iconMap = {
//     [CounselingTypesEnum.in_office]: InOfficeIcon,
//     [CounselingTypesEnum.video_call]: VideoCallIcon,
//     [CounselingTypesEnum.voice_call]: VoiceCallIcon,
// };

export interface IData {
accepts_insurance: boolean
avatar : string
certification_id: number
comments: number
consultations: number
consultations_at: number
counseling_types: CounselingTypesEnum
experience: number
id: number
last_counseling: number
name: string
rate: number
title: string
}