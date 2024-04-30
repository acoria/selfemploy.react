import { useState } from "react";
import { InputField } from "../../../../components/inputField/InputField";
import { EnumMultiSelectButtons } from "../../../../components/multiSelectButtons/enumMultiSelectButtons/EnumMultiSelectButtons";
import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { ConfigureComponent } from "../../components/configureComponent/ConfigureComponent";
import { Farewell } from "./Farewell";
import { IFarewellConfigProps } from "./IFarewellConfigProps";
import { IFarewell } from "./IFarewell";
import styles from "./FarewellConfig.module.scss";

export const FarewellConfig: React.FC<IFarewellConfigProps> = (props) => {
  const { t } = useTranslation();
  const [farewell, setFarewell] = useState<IFarewell>(
    props.initialFarewell ?? { farewell: Farewell.POLITE }
  );

  return (
    <ConfigureComponent
      title={t(texts.applyMessageGenerator.farewellConfig.title)}
    >
      <div className={styles.farewellConfig}>
        <EnumMultiSelectButtons
          enumType={Farewell}
          initialValue={farewell.farewell}
          onChange={(farewell) => {
            setFarewell((previous) => {
              const newFarewell: IFarewell = {
                ...previous,
                farewell,
              };
              props.onChange(newFarewell);
              return newFarewell;
            });
          }}
        />
        <InputField
          label={t(
            texts.applyMessageGenerator.farewellConfig.nameInputFieldLabel
          )}
          initialValue={props.initialFarewell?.name}
          onChange={(name) => {
            setFarewell((previous) => {
              const newFarewell: IFarewell = {
                ...previous,
                name,
              };
              props.onChange(newFarewell);
              return newFarewell;
            });
          }}
        />
      </div>
    </ConfigureComponent>
  );
};
