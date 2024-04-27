import { ReactNode, useState } from "react";
import { IMultiSelectButtonProps } from "./IMultiSelectButtonProps";
import styles from "./MultiSelectButtons.module.scss";
import { style } from "../../../style";

export const MultiSelectButton: React.FC<IMultiSelectButtonProps> = (props) => {
  const [selectedButtonIndices, setSelectedButtonIndices] = useState<number[]>(
    []
  );

  const isSelectedButton = (index: number): boolean =>
    selectedButtonIndices.find((buttonIndex) => buttonIndex === index) !==
    undefined;

  const onButtonClick = (index: number) => {
    if (props.isSingleSelect) {
      setSelectedButtonIndices([index]);
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

  const buildButtons = (): ReactNode => {
    return props.buttonLabels.map((buttonLabel, index) => (
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
  };

  return <div className={styles.multiSelectButton}>{buildButtons()}</div>;
};
