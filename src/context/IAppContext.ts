import { ISettings } from "../types/ISettings";
import { Value } from "../types/Value";

export interface IAppContext {
  settings: Value<ISettings>;
}
