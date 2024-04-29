import { Enum } from "../../../core/types/Enum";
import { MultiSelectButtons } from "../MultiSelectButtons";
import { IEnumMultiSelectButtonsProps } from "./IEnumMultiSelectButtonsProps";

export function EnumMultiSelectButtons<T extends Enum>(
  props: IEnumMultiSelectButtonsProps<T>
): JSX.Element {
  const onClick = (index: number) => {
    const value = Object.values(props.enumType)[index];
    props.onChange(value);
  };

  const { onChange, isSingleSelect, ...multiSelectProps } = props;

  return (
    <MultiSelectButtons
      buttonLabels={Object.values(props.enumType)}
      onClick={onClick}
      isSingleSelect={isSingleSelect !== undefined ? isSingleSelect : true}
      {...multiSelectProps}
    />
  );
}
