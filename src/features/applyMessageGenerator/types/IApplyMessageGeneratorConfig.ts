import { IApplicationText } from "./IApplicationText";

export interface IApplyMessageGeneratorConfig {
  myName: string;
  applicationTexts: IApplicationText[];
  codingBuddyLink_freelancerMap: string,
  codingBuddyLink_freelance: string,
  codingBuddyLink_linkedIn: string,
}
