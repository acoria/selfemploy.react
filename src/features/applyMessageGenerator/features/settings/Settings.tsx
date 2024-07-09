import { Divider } from "../../../../components/divider/Divider";
import { InputField } from "../../../../components/inputField/InputField";
import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { ApplicationTexts } from "../../applicationTexts/ApplicationTexts";
import { useSettings } from "../../hooks/useSettings";
import styles from "./Settings.module.scss";

export const Settings: React.FC = () => {
  const { t } = useTranslation();
  const [settings, setSettings] = useSettings();
  const inputFieldWidthInRem = 40;

  const updateName = (name: string) => {
    setSettings((previous) => ({ ...previous, yourName: name }));
  };

  const updateCodingBuddyLinkFreelancerMap = (link: string) => {
    setSettings((previous) => ({
      ...previous,
      codingBuddyLinkFreelancerMap: link,
    }));
  };

  const updateCodingBuddyLinkFreelance = (link: string) => {
    setSettings((previous) => ({
      ...previous,
      codingBuddyLinkFreelance: link,
    }));
  };

  const updateCodingBuddyLinkLinkedIn = (link: string) => {
    setSettings((previous) => ({ ...previous, codingBuddyLinkLinkedIn: link }));
  };

  return (
    <>
      <h1 className={styles.title}>
        {t(texts.applyMessageGenerator.settings.title)}
      </h1>
      <InputField
        label={t(texts.applyMessageGenerator.general.nameInputFieldLabel)}
        initialValue={settings.yourName}
        onChange={updateName}
      />
      <InputField
        widthInRem={inputFieldWidthInRem}
        label={t(
          texts.applyMessageGenerator.settings.codingBuddyLinkFreelancerMap
        )}
        initialValue={settings.codingBuddyLinkFreelancerMap}
        onChange={updateCodingBuddyLinkFreelancerMap}
      />
      <InputField
        widthInRem={inputFieldWidthInRem}
        label={t(texts.applyMessageGenerator.settings.codingBuddyLinkFreelance)}
        initialValue={settings.codingBuddyLinkFreelance}
        onChange={updateCodingBuddyLinkFreelance}
      />
      <InputField
        widthInRem={inputFieldWidthInRem}
        label={t(texts.applyMessageGenerator.settings.codingBuddyLinkLinkedIn)}
        initialValue={settings.codingBuddyLinkLinkedIn}
        onChange={updateCodingBuddyLinkLinkedIn}
      />
      <h4 className={styles.newApplicationTextLabel}>
        {t(texts.applyMessageGenerator.settings.newApplicationTextLabel)}
      </h4>
      <ApplicationTexts />
      <Divider />
    </>
  );
};
