import { useState } from "react";
import { MultiSelectButtons } from "../../../../components/multiSelectButtons/MultiSelectButtons";
import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { ConfigureComponent } from "../../components/configureComponent/ConfigureComponent";
import { IApplicationTextConfigProps } from "./IApplicationTextConfigProps";

export const ApplicationTextConfig: React.FC<IApplicationTextConfigProps> = (
  props
) => {
  const { t } = useTranslation();
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<
    number | undefined
  >(undefined);
  const buttonLabels = props.applicationTexts.map(
    (applicationText) => applicationText.type
  );
  const getTextByIndex = (index: number | undefined): string => {
    if (index === undefined) return "";
    return props.applicationTexts[index].text;
  };

  return (
    <ConfigureComponent
      title={t(texts.applyMessageGenerator.applicationText.title)}
    >
      <MultiSelectButtons
        buttonLabels={buttonLabels}
        isSingleSelect
        onClick={(index) => {
          setSelectedButtonIndex(index);
          props.onChange(getTextByIndex(index));
        }}
      />
      <p>{getTextByIndex(selectedButtonIndex)}</p>
    </ConfigureComponent>
  );
};
