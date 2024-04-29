import { Enum } from "../../../core/types/Enum";
import { MultiSelectButtons } from "../MultiSelectButtons";
import { IEnumMultiSelectButtonsProps } from "./IEnumMultiSelectButtonsProps";

export function EnumMultiSelectButton<T extends Enum>(
  props: IEnumMultiSelectButtonsProps<T>
): JSX.Element {
  const onClick = (index: number) => {
    const value = Object.values(props.enumType)[index];
    props.onChange(value);
  };

  return (
    <MultiSelectButtons
      buttonLabels={Object.values(props.enumType)}
      onClick={onClick}
    />
  );
}
