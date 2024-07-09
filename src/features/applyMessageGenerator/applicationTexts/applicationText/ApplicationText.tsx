import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { IApplicationTextProps } from "../IApplicationTextProps";
import styles from "./ApplicationText.module.css";

export const ApplicationText: React.FC<IApplicationTextProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.applicationText}>
      {/* <div>
        {t(texts.applyMessageGenerator.applicationTexts.toggleButtonTypeLabel)}
      </div> */}
      <p>{props.applicationText.type}</p>
      {/* <div>
        {t(texts.applyMessageGenerator.applicationTexts.applicationTextLabel)}
      </div> */}
      <p>{props.applicationText.text}</p>
    </div>
  );
};
