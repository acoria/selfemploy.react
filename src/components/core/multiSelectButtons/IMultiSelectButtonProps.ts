export interface IMultiSelectButtonProps {
  buttonLabels: string[];
  onClick?: (index: number) => void;
  isSingleSelect?: boolean;
  preselectedIndices?: number[];
}
