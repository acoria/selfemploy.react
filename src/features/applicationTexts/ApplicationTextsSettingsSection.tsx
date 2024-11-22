import { IconButton } from "../../components/buttons/iconButton/IconButton";
import { IconType } from "../../components/buttons/iconButton/IconType";
import { Divider } from "../../components/divider/Divider";
import { useSettings } from "../../hooks/useSettings";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { IApplicationText } from "../../types/IApplicationText";
import styles from "./ApplicationTexts.module.scss";
import { AddApplicationText } from "./addApplicationText/AddApplicationText";
import { ApplicationText } from "./applicationText/ApplicationText";

export const ApplicationTextsSettingsSection: React.FC = () => {
  const { t } = useTranslation();
  const [settings, setSettings] = useSettings();

  const removeApplicationText = (applicationText: IApplicationText) => {
    setSettings((previous) => {
      const index = previous.applicationTexts.findIndex(
        (item) => item === applicationText
      );
      index !== undefined && previous.applicationTexts.splice(index, 1);
      return {
        ...previous,
        applicationTexts: previous.applicationTexts,
      };
    });
  };

  const applicationTexts = settings.applicationTexts.map(
    (applicationText, index) => (
      <div key={`${applicationText.type}_${index}`}>
        <div className={styles.applicationTextEntry}>
          <ApplicationText applicationText={applicationText} />
          <div className={styles.buttons}>
            <IconButton
              iconType={IconType.COPY}
              onClick={async () => {
                navigator.clipboard.writeText(applicationText.text);
              }}
            />
            <IconButton
              iconType={IconType.DELETE}
              onClick={() => {
                removeApplicationText(applicationText);
              }}
            />
          </div>
        </div>
        {index < settings.applicationTexts.length - 1 && <Divider />}
      </div>
    )
  );

  return (
    <>
      <AddApplicationText
        onNewApplicationText={(newApplicationText, newApplicationTextTitle) => {
          setSettings((previous) => {
            previous.applicationTexts.push({
              text: newApplicationText,
              type: newApplicationTextTitle,
            });
            return {
              ...previous,
              applicationTexts: previous.applicationTexts,
            };
          });
        }}
      />
      <h4 className={styles.applicationTextLabel}>
        {t(texts.applyMessageGenerator.applicationTexts.applicationTextsLabel)}
      </h4>
      <div>{applicationTexts}</div>
    </>
  );
};
