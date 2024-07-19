import { IHaveChange } from "../../core/types/IHaveChange";
import { IHaveInitialValue } from "../../core/types/IHavePreselectedValue";
import { Language } from "./types/Language";

export interface ILanguageConfigProps
  extends IHaveChange<Language>,
    IHaveInitialValue<Language> {}
