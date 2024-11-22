import { IHaveMessageChange } from "./types/IHaveMessageChange";
import { IHaveInitialValue } from "../../core/types/IHaveInitialValue";
import { Gender } from "./types/Gender";

export interface ISalutationConfigProps
  extends IHaveMessageChange,
    IHaveInitialValue<Gender> {}
