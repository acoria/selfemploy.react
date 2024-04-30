import { IHaveMessageChange } from "../../../../core/types/IHaveMessageChange";
import { IHaveInitialValue } from "../../../../core/types/IHavePreselectedValue";
import { Gender } from "./types/Gender";

export interface ISalutationConfigProps
  extends IHaveMessageChange,
    IHaveInitialValue<Gender> {}
