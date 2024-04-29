import { useState } from "react";
import { style } from "../../style";
import { IMultiSelectButtonsProps } from "./IMultiSelectButtonsProps";
import styles from "./MultiSelectButtons.module.scss";

export const MultiSelectButtons: React.FC<IMultiSelectButtonsProps> = (props) => {
  const [selectedButtonIndices, setSelectedButtonIndices] = useState<number[]>(
    props.preselectedIndices ?? []
  );

  const isSelectedButton = (index: number): boolean =>
    selectedButtonIndices.find((buttonIndex) => buttonIndex === index) !==
    undefined;

  const onButtonClick = (index: number) => {
    if (props.isSingleSelect) {
      const buttonIndex = selectedButtonIndices.findIndex(
        (selectedButtonIndex) => selectedButtonIndex === index
      );
      if (buttonIndex === -1) {
        setSelectedButtonIndices([index]);
      } else {
        setSelectedButtonIndices([]);
      }
    } else {
      const buttonIndex = selectedButtonIndices.findIndex(
        (selectedButtonIndex) => selectedButtonIndex === index
      );
      if (buttonIndex !== -1) {
        selectedButtonIndices.splice(buttonIndex, 1);
      } else {
        selectedButtonIndices.push(index);
      }
      setSelectedButtonIndices([...selectedButtonIndices]);
    }
    props.onClick?.(index);
  };

  const buttons = props.buttonLabels.map((buttonLabel, index) => (
    <div
      key={`${buttonLabel}_${index}`}
      className={style(
        styles.button,
        isSelectedButton(index) ? styles.selectedButton : ""
      )}
      onClick={() => onButtonClick(index)}
    >
      {buttonLabel}
    </div>
  ));

  return <div className={styles.multiSelectButton}>{buttons}</div>;
};
