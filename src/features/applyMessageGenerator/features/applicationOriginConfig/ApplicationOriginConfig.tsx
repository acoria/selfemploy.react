import { MultiSelectButtons } from "../../../../components/multiSelectButtons/MultiSelectButtons";
import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { ConfigureComponent } from "../../components/configureComponent/ConfigureComponent";
import { InputField } from "../../../../components/inputField/InputField";
import styles from "./ApplicationOriginConfig.module.scss";
import { IApplicationOriginConfigProps } from "./IApplicationOriginConfigProps";
import { ApplicationOrigin } from "./types/ApplicationOrigin";

export const ApplicationOriginConfig: React.FC<
  IApplicationOriginConfigProps
> = (props) => {
  const { t } = useTranslation();

  const onApplicationOriginChange = (index:number)=>{

    // props.onChange()
  }
  return (
    <div className={styles.applicationOriginConfig}>
      <ConfigureComponent
        title={t(texts.applyMessageGenerator.applicationOrigin.title)}
      >
        <MultiSelectButtons
          buttonLabels={[
            ApplicationOrigin.FREELANCERMAP,
            ApplicationOrigin.FREELANCE,
            ApplicationOrigin.OTHER,
          ]}
          // onClick={}
        />
        {/* <InputField onChange={} /> */}
      </ConfigureComponent>
    </div>
  );
};
