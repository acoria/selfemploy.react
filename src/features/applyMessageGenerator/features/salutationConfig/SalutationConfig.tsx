import { useCallback, useEffect, useState } from "react";
import { MultiSelectButtons } from "../../../../components/multiSelectButtons/MultiSelectButtons";
import { ConfigureComponent } from "../../components/configureComponent/ConfigureComponent";
import { ISalutationConfigProps } from "./ISalutationConfigProps";
import styles from "./SalutationConfig.module.scss";
import { InputField } from "../../../../components/inputField/InputField";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { texts } from "../../../../hooks/useTranslation/texts";

export const SalutationConfig: React.FC<ISalutationConfigProps> = (props) => {
  const [lastName, setLastName] = useState<string>("");
  const [selectedGenderIndex, setSelectedGenderIndex] = useState<number>(0);
  const { t } = useTranslation();

  const getText = useCallback((): string => {
    if (selectedGenderIndex === 0) {
      return t(texts.applyMessageGenerator.salutation.salutationMr, {
        lastName: lastName ?? "",
      });
    } else {
      return t(texts.applyMessageGenerator.salutation.salutationMs, {
        lastName: lastName ?? "",
      });
    }
  }, [lastName, selectedGenderIndex]);

  useEffect(() => {
    props.onChange(getText());
  }, [lastName, selectedGenderIndex, getText, props]);

  return (
    <ConfigureComponent title={t(texts.applyMessageGenerator.salutation.title)}>
      <div className={styles.salutation}>
        <MultiSelectButtons
          buttonLabels={["Herr", "Frau"]}
          isSingleSelect
          preselectedIndices={[0]}
          onClick={(index) => setSelectedGenderIndex(index)}
        />
        <InputField
          label="Nachname"
          onChange={(lastName) => setLastName(lastName)}
        />
      </div>
    </ConfigureComponent>
  );
};
