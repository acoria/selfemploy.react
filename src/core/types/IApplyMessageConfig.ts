import { ApplicantNumber } from "../../features/applicantNumberConfig/ApplicantNumber";
import { ApplicationMedium } from "../../features/applicationMediumConfig/types/ApplicationMedium";
import { IApplicationOrigin } from "../../features/applicationOriginConfig/types/IApplicationOrigin";
import { IFarewell } from "../../features/farewellConfig/IFarewell";
import { Language } from "../../features/languageConfig/types/Language";

export interface IApplyMessageConfig {
  salutation: string;
  language: Language;
  applicantNumber: ApplicantNumber;
  applicationMedium: ApplicationMedium;
  applicationOrigin: IApplicationOrigin | undefined;
  applicationTexts: string[];
  availableFrom: string | undefined;
  hourlyRate: string | undefined;
  farewell: IFarewell;
}
