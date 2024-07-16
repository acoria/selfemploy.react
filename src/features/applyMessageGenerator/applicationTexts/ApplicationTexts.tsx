import { useState } from "react";
import { InputField } from "../../../components/inputField/InputField";
import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { useSettings } from "../hooks/useSettings";
import { IApplicationText } from "../types/IApplicationText";
import styles from "./ApplicationTexts.module.css";
import { ApplicationText } from "./applicationText/ApplicationText";

export const ApplicationTexts: React.FC = () => {
  const { t } = useTranslation();
  const [settings, setSettings] = useSettings();
  const [newApplicationText, setNewApplicationText] = useState<string>("");
  const [newApplicationTextType, setNewApplicationTextType] =
    useState<string>("");

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

  const addApplicationText = () => {
    setSettings((previous) => {
      previous.applicationTexts.push({
        text: newApplicationText,
        type: newApplicationTextType,
      });
      return {
        ...previous,
        applicationTexts: previous.applicationTexts,
      };
    });
  };

  const applicationTexts = settings.applicationTexts.map((applicationText) => (
    <div key={applicationText.type} className={styles.applicationTextEntry}>
      <ApplicationText applicationText={applicationText} />
      <button
        onClick={() => {
          removeApplicationText(applicationText);
        }}
      >
        Remove
      </button>
    </div>
  ));

  return (
    <>
      <div className={styles.addApplicationText}>
        <InputField
          label={t(
            texts.applyMessageGenerator.applicationTexts.toggleButtonTypeLabel
          )}
          onChange={setNewApplicationTextType}
        />
        <label htmlFor="applicationText">
          {t(
            texts.applyMessageGenerator.applicationText.newApplicationTextLabel
          )}
        </label>
        <textarea
          id="applicationText"
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setNewApplicationText(event.target.value)
          }
          cols={80}
          rows={10}
          value={newApplicationText}
        />
        <button onClick={() => addApplicationText()}>Add</button>
      </div>
      <h4 className={styles.applicationTextLabel}>
        {t(texts.applyMessageGenerator.applicationTexts.applicationTextsLabel)}
      </h4>
      <div>{applicationTexts}</div>
    </>
  );
};
