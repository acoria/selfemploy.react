import { MultiSelectButtons } from "../../components/buttons/multiSelectButtons/MultiSelectButtons";
import { EnumMultiSelectButtons } from "../../components/buttons/multiSelectButtons/enumMultiSelectButtons/EnumMultiSelectButtons";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { ConfigureComponent } from "../configureComponent/ConfigureComponent";
import { NumberOfApplicants } from "./types/NumberOfApplicants";
import { INumberOfApplicantsProps } from "./INumberOfApplicantsProps";

export const NumberOfApplicantsConfig: React.FC<INumberOfApplicantsProps> = (
  props
) => {
  const { t } = useTranslation();
  return (
    <ConfigureComponent
      title={t(texts.applyMessageGenerator.applicantNumberConfigTitle)}
    >
      <EnumMultiSelectButtons
        initialValue={props.initialValue}
        enumType={NumberOfApplicants}
        onChange={props.onChange}
      />
    </ConfigureComponent>
  );
};
