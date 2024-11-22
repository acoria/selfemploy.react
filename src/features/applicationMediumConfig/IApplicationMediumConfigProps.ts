import { ApplicationMedium } from "./types/ApplicationMedium";
import { IHaveChange } from "../../core/types/IHaveChange";
import { IHaveInitialValue } from "../../core/types/IHaveInitialValue";

export interface IApplicationMediumConfigProps
  extends IHaveChange<ApplicationMedium>,
    IHaveInitialValue<ApplicationMedium> {}
