import { ApplicantNumber } from "../../features/applyMessageGenerator/features/applicantNumberConfig/ApplicantNumber";
import { ApplicationMedium } from "../../features/applyMessageGenerator/features/applicationMediumConfig/types/ApplicationMedium";
import { IApplicationOrigin } from "../../features/applyMessageGenerator/features/applicationOriginConfig/types/IApplicationOrigin";
import { IFarewell } from "../../features/applyMessageGenerator/features/farewellConfig/IFarewell";
import { Language } from "../../features/applyMessageGenerator/features/languageConfig/types/Language";

export interface IApplyMessage {
  salutation: string;
  language: Language;
  applicantNumber: ApplicantNumber;
  applicationMedium: ApplicationMedium;
  applicationOrigin: IApplicationOrigin | undefined;
  applicationText: string;
  hourlyRate: string | undefined;
  farewell: IFarewell;
}
