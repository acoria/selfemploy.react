import { MultiSelectButtons } from "../../components/buttons/multiSelectButtons/MultiSelectButtons";
import { EnumMultiSelectButtons } from "../../components/buttons/multiSelectButtons/enumMultiSelectButtons/EnumMultiSelectButtons";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { ConfigureComponent } from "../configureComponent/ConfigureComponent";
import { ApplicantNumber } from "./ApplicantNumber";
import { IApplicantNumberConfigProps } from "./IApplicantNumberConfigProps";

export const ApplicantNumberConfig: React.FC<IApplicantNumberConfigProps> = (
  props
) => {
  const { t } = useTranslation();
  return (
    <ConfigureComponent
      title={t(texts.applyMessageGenerator.applicantNumberConfigTitle)}
    >
      <EnumMultiSelectButtons
        initialValue={props.initialValue}
        enumType={ApplicantNumber}
        onChange={props.onChange}
      />
    </ConfigureComponent>
  );
};
