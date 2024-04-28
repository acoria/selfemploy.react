import { MultiSelectButton } from "../../../components/core/multiSelectButtons/MultiSelectButtons";
import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { ConfigureComponent } from "../core/configureComponent/ConfigureComponent";
import styles from "./ApplicationOriginConfig.module.scss";
import { IApplicationOriginConfigProps } from "./IApplicationOriginConfigProps";
import { ApplicationOrigin } from "./types/ApplicationOrigin";

export const ApplicationOriginConfig: React.FC<
  IApplicationOriginConfigProps
> = (props) => {
  const { t } = useTranslation();
  return (
    <div className={styles.applicationOriginConfig}>
      <ConfigureComponent
        title={t(texts.applyMessageGenerator.applicationOriginConfigTitle)}
      >
        <MultiSelectButton
          buttonLabels={[
            ApplicationOrigin.FREELANCERMAP,
            ApplicationOrigin.FREELANCE,
            ApplicationOrigin.OTHER,
          ]}
        />
      </ConfigureComponent>
    </div>
  );
};
