import { MultiSelectButton } from "../../../components/core/multiSelectButtons/MultiSelectButtons";
import { ConfigureComponent } from "../core/configureComponent/ConfigureComponent";
import styles from "./ApplicationOriginConfig.module.scss";
import { IApplicationOriginConfigProps } from "./IApplicationOriginConfigProps";
import { ApplicationOrigin } from "./types/ApplicationOrigin";

export const ApplicationOriginConfig: React.FC<
  IApplicationOriginConfigProps
> = (props) => {
  return (
    <div className={styles.applicationOriginConfig}>
      <ConfigureComponent title="Herkunft (angeboten von)">
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
