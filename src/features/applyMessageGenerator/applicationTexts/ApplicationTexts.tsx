import { useState } from "react";
import { Divider } from "../../../components/divider/Divider";
import { InputField } from "../../../components/inputField/InputField";
import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import { useSettings } from "../hooks/useSettings";
import { IApplicationText } from "../types/IApplicationText";
import styles from "./ApplicationTexts.module.scss";
import { ApplicationText } from "./applicationText/ApplicationText";
import { TextToHTMLConverter } from "../../../services/TextToHTMLConverter";
import { IconButton } from "../../../components/buttons/iconButton/IconButton";
import { IconType } from "../../../components/buttons/iconButton/IconType";

export const ApplicationTexts: React.FC = () => {
  const { t } = useTranslation();
  const [settings, setSettings] = useSettings();
  const [newApplicationText, setNewApplicationText] = useState<string>("");
  const [newApplicationTextTitle, setNewApplicationTextTitle] =
    useState<string>("");

  const isInputInvalid =
    newApplicationText === "" || newApplicationTextTitle === "";

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
        type: newApplicationTextTitle,
      });
      return {
        ...previous,
        applicationTexts: previous.applicationTexts,
      };
    });
    setNewApplicationText("");
    setNewApplicationTextTitle("");
  };

  const applicationTexts = settings.applicationTexts.map(
    (applicationText, index) => (
      <div key={`${applicationText.type}_${index}`}>
        <div className={styles.applicationTextEntry}>
          <ApplicationText applicationText={applicationText} />
          <IconButton
            iconType={IconType.DELETE}
            onClick={() => {
              removeApplicationText(applicationText);
            }}
          />
        </div>
        {index < settings.applicationTexts.length - 1 && <Divider />}
      </div>
    )
  );

  return (
    <>
      <div className={styles.addApplicationText}>
        <InputField
          label={t(
            texts.applyMessageGenerator.applicationTexts.toggleButtonTypeLabel
          )}
          initialValue={newApplicationTextTitle}
          onChange={setNewApplicationTextTitle}
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
        <IconButton
          iconType={IconType.ADD}
          onClick={addApplicationText}
          disabled={isInputInvalid}
        />
        {newApplicationText && (
          <div className={styles.wysiwyg}>
            <div
              dangerouslySetInnerHTML={{
                __html: TextToHTMLConverter.convert(newApplicationText),
              }}
            ></div>
          </div>
        )}
      </div>
      <h4 className={styles.applicationTextLabel}>
        {t(texts.applyMessageGenerator.applicationTexts.applicationTextsLabel)}
      </h4>
      <div>{applicationTexts}</div>
    </>
  );
};
