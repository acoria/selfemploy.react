import { useState } from "react";
import { InputField } from "../../../../components/inputField/InputField";
import { EnumMultiSelectButtons } from "../../../../components/multiSelectButtons/enumMultiSelectButtons/EnumMultiSelectButtons";
import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { ConfigureComponent } from "../../components/configureComponent/ConfigureComponent";
import styles from "./ApplicationOriginConfig.module.scss";
import { IApplicationOriginConfigProps } from "./IApplicationOriginConfigProps";
import { ApplicationOrigin } from "./types/ApplicationOrigin";
import { IApplicationOrigin } from "./types/IApplicationOrigin";

export const ApplicationOriginConfig: React.FC<
  IApplicationOriginConfigProps
> = (props) => {
  const { t } = useTranslation();
  const [applicationOrigin, setApplicationOrigin] =
    useState<IApplicationOrigin>({});

  const isProjectLinkFieldDisabled =
    applicationOrigin.applicationOrigin !== ApplicationOrigin.FREELANCE &&
    applicationOrigin.applicationOrigin !== ApplicationOrigin.FREELANCERMAP;

  const isProjectIdFieldDisabled =
    applicationOrigin.applicationOrigin !== ApplicationOrigin.FREELANCERMAP;

  const onApplicationOriginChange = (applicationOrigin: ApplicationOrigin) => {
    setApplicationOrigin((previous) => {
      const newApplicationOrigin = { ...previous, applicationOrigin };
      props.onChange(newApplicationOrigin);
      return newApplicationOrigin;
    });
  };

  const onLinkChange = (link: string) => {
    setApplicationOrigin((previous) => {
      const newApplicationOrigin = { ...previous, link };
      props.onChange(newApplicationOrigin);
      return newApplicationOrigin;
    });
  };

  const onProjectIdChange = (projectId: string) => {
    setApplicationOrigin((previous) => {
      const newApplicationOrigin = { ...previous, projectId };
      props.onChange(newApplicationOrigin);
      return newApplicationOrigin;
    });
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
          label={t(texts.applyMessageGenerator.applicationOrigin.linkToProject)}
          onChange={onLinkChange}
          disabled={isProjectLinkFieldDisabled}
          widthInRem={40}
        />
        {applicationOrigin.applicationOrigin ===
          ApplicationOrigin.FREELANCERMAP && (
          <InputField
            label={t(texts.applyMessageGenerator.applicationOrigin.projectId)}
            onChange={onProjectIdChange}
            disabled={isProjectIdFieldDisabled}
          />
        )}
      </div>
    </ConfigureComponent>
  );
};
