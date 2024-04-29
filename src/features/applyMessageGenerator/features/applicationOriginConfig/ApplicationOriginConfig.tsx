import { useState } from "react";
import { InputField } from "../../../../components/inputField/InputField";
import { EnumMultiSelectButtons } from "../../../../components/multiSelectButtons/enumMultiSelectButtons/EnumMultiSelectButtons";
import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { ConfigureComponent } from "../../components/configureComponent/ConfigureComponent";
import styles from "./ApplicationOriginConfig.module.scss";
import { IApplicationOriginConfigProps } from "./IApplicationOriginConfigProps";
import { ApplicationOrigin } from "./types/ApplicationOrigin";

export const ApplicationOriginConfig: React.FC<
  IApplicationOriginConfigProps
> = (props) => {
  const { t } = useTranslation();
  const [selectedApplicationOrigin, setSelectedApplicationOrigin] =
    useState<ApplicationOrigin|undefined>(undefined);
    // const [selectedApplication, set ]
  const [projectInfo, setProjectInfo] = useState<string>("");

  const isInputFieldDisabled =
    selectedApplicationOrigin !== ApplicationOrigin.FREELANCE &&
    selectedApplicationOrigin !== ApplicationOrigin.FREELANCERMAP;

  const onApplicationOriginChange = (applicationOrigin: ApplicationOrigin) => {
    setSelectedApplicationOrigin(applicationOrigin);
    props.onChange({ applicationOrigin, projectInfo });
  };

  const onProjectInfoChange = (newProjectInfo: string) => {
    setProjectInfo(newProjectInfo);
    props.onChange({
      applicationOrigin: selectedApplicationOrigin,
      projectInfo: newProjectInfo,
    });
  };

  const getInputFieldLabel = () => {
    switch (selectedApplicationOrigin) {
      case ApplicationOrigin.FREELANCE:
        return t(texts.applyMessageGenerator.applicationOrigin.linkToProject);

      case ApplicationOrigin.FREELANCERMAP:
        return t(texts.applyMessageGenerator.applicationOrigin.projectId);
      default:
        return "";
    }
  };

  return (
    <ConfigureComponent
      title={t(texts.applyMessageGenerator.applicationOrigin.title)}
    >
      <div className={styles.applicationOriginConfig}>
        <EnumMultiSelectButtons
          enumType={ApplicationOrigin}
          onChange={onApplicationOriginChange}
        />
        <InputField
          label={getInputFieldLabel()}
          onChange={onProjectInfoChange}
          disabled={isInputFieldDisabled}
        />
      </div>
    </ConfigureComponent>
  );
};
