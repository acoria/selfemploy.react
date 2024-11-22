import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IconButton } from "../../../components/buttons/iconButton/IconButton";
import { IconType } from "../../../components/buttons/iconButton/IconType";
import { InputField } from "../../../components/inputField/InputField";
import { texts } from "../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../hooks/useTranslation/useTranslation";
import styles from "./AddApplicationText.module.scss";
import { IAddApplicationTextProps } from "./IAddApplicationTextProps";

export const AddApplicationText: React.FC<IAddApplicationTextProps> = (
  props
) => {
  const [newApplicationText, setNewApplicationText] = useState<string>("");
  const [newApplicationTextTitle, setNewApplicationTextTitle] =
    useState<string>("");

  const { t } = useTranslation();

  const isInputInvalid =
    newApplicationText === "" || newApplicationTextTitle === "";

  const addApplicationText = () => {
    props.onNewApplicationText?.(newApplicationText, newApplicationTextTitle);
    setNewApplicationText("");
    setNewApplicationTextTitle("");
  };

  return (
    <div className={styles.addApplicationText}>
      <InputField
        label={t(
          texts.applyMessageGenerator.applicationTexts.toggleButtonTypeLabel
        )}
        initialValue={newApplicationTextTitle}
        onChange={setNewApplicationTextTitle}
      />
      <label htmlFor="applicationText">
        {t(texts.applyMessageGenerator.applicationText.newApplicationTextLabel)}
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
          <Markdown remarkPlugins={[remarkGfm]}>{newApplicationText}</Markdown>
        </div>
      )}
    </div>
  );
};
