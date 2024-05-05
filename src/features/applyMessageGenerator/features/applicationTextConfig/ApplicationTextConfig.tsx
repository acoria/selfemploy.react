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
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number>(0);
  const buttonLabels = props.applicationTexts.map(
    (applicationText) => applicationText.type
  );
  const getTextByIndex = (index: number): string =>
    props.applicationTexts[index].text;

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
        preselectedIndices={[0]}
      />
      <p>{getTextByIndex(selectedButtonIndex)}</p>
    </ConfigureComponent>
  );
};
