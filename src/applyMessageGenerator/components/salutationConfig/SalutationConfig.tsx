import { useCallback, useEffect, useState } from "react";
import { MultiSelectButton } from "../../../components/core/multiSelectButtons/MultiSelectButtons";
import { ConfigureComponent } from "../core/configureComponent/ConfigureComponent";
import { ISalutationConfigProps } from "./ISalutationConfigProps";
import styles from "./SalutationConfig.module.scss";
import { InputField } from "../core/inputField/InputField";

export const SalutationConfig: React.FC<ISalutationConfigProps> = (props) => {
  const [lastName, setLastName] = useState<string>("");
  const [selectedGenderIndex, setSelectedGenderIndex] = useState<number>(0);

  const getText = useCallback((): string => {
    if (selectedGenderIndex === 0) {
      return `Sehr geehrter Herr ${lastName ?? ""},`;
    } else {
      return `Sehr geehrte Frau ${lastName ?? ""},`;
    }
  }, [lastName, selectedGenderIndex]);

  useEffect(() => {
    props.onMessageChange(getText());
  }, [lastName, selectedGenderIndex, getText, props]);

  return (
    <ConfigureComponent title="Anrede">
      <div className={styles.salutation}>
        <MultiSelectButton
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
