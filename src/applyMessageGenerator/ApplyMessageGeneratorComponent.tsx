import { useState } from "react";
import styles from "./ApplyMessageGeneratorComponent.module.scss";
import { SalutationConfig } from "./components/salutationConfig/SalutationConfig";
import { LanguageConfig } from "./components/languageConfig/LanguageConfig";
import { Language } from "./components/languageConfig/types/Language";
import { ApplicationMediumConfig } from "./components/applicationMediumConfig/ApplicationMediumConfig";
import { ApplicationMedium } from "./components/applicationMediumConfig/types/ApplicationMedium";

export const ApplyMessageGeneratorComponent = () => {
  const [salutation, setSalutation] = useState("");
  const [language, setLanguage] = useState<Language>(Language.DE);
  const [applicationMedium, setApplicationMedium] = useState<
    ApplicationMedium | undefined
  >(undefined);

  return (
    <div className={styles.applyMessageGeneratorComponent}>
      <h3>Adjust to your needs</h3>
      <div className={styles.configuration}>
        <SalutationConfig onChange={setSalutation} />
        <LanguageConfig onChange={setLanguage} />
        <ApplicationMediumConfig onChange={setApplicationMedium} />
      </div>
      <div className={styles.message}>
        <h3>Message</h3>
        <p>{salutation}</p>
      </div>
    </div>
  );
};
