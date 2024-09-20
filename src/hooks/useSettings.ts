import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Value } from "../types/Value";
import { ISettings } from "../types/ISettings";

export const useSettings = (): Value<ISettings> => {
  const appContext = useContext(AppContext);
  return appContext.settings;
};
