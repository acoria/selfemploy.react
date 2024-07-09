import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { ISettings } from "../types/ISettings";
import { settings as configSettings } from "../config";

export const useSettingsStorage = (): [
  ISettings,
  (newValue: ISettings | ((previous: ISettings) => ISettings)) => void
] => {
  const [settings, setSettings] = useLocalStorage<ISettings>(
    "selfemploy.react.settings",
    configSettings
  );

  return [settings, setSettings];
};
