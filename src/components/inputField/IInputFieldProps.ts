export interface IInputFieldProps {
  initialValue?: string;
  label?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  widthInRem?: number;
}
