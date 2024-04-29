import { Enum } from "../../../core/types/Enum";
import { IHaveChange } from "../../../core/types/IHaveChange";
import { IHavePreselectedIndices } from "../types/IHavePreselectedIndices";
import { IHaveSingleSelect } from "../types/IHaveSingleSelect";

export interface IEnumMultiSelectButtonsProps<T extends Enum>
  extends IHaveChange<T[keyof T]>,
    IHaveSingleSelect,
    IHavePreselectedIndices {
  enumType: T;
}
