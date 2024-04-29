import { MultiSelectButtons } from "../../../../components/multiSelectButtons/MultiSelectButtons";
import { NotImplementedError } from "../../../../core/errors/NotImplementedError";
import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { ConfigureComponent } from "../../components/configureComponent/ConfigureComponent";
import { IApplicationMediumConfigProps } from "./IApplicationMediumConfigProps";
import { ApplicationMedium } from "./types/ApplicationMedium";

export const ApplicationMediumConfig: React.FC<
  IApplicationMediumConfigProps
> = (props) => {
  const { t } = useTranslation();
  return (
    <ConfigureComponent title={t(texts.applyMessageGenerator.applicationMediumConfigTitle)}>
      <MultiSelectButtons
        buttonLabels={[ApplicationMedium.WEBSITE, ApplicationMedium.EMAIL]}
        isSingleSelect
        onClick={(index) => {
          if (index === 0) {
            props.onChange(ApplicationMedium.WEBSITE);
          } else if (index === 1) {
            props.onChange(ApplicationMedium.EMAIL);
          } else {
            throw new NotImplementedError();
          }
        }}
      />
    </ConfigureComponent>
  );
};
