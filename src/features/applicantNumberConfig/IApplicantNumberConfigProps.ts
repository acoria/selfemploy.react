import { ApplicantNumber } from "./ApplicantNumber";

export interface IApplicantNumberConfigProps {
  initialValue?: ApplicantNumber;
  onChange: (applicantNumber: ApplicantNumber) => void;
}
