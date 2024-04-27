import { useState } from "react";
import styles from "./ApplyMessageGeneratorComponent.module.scss";
import { SalutationConfig } from "./components/salutationConfig/SalutationConfig";
import { LanguageConfig } from "./components/languageConfig/LanguageConfig";
import { Language } from "./components/languageConfig/Language";

export const ApplyMessageGeneratorComponent = () => {
  const [salutation, setSalutation] = useState("");
  const [language, setLanguage] = useState<Language>(Language.DE);

  return (
    <div className={styles.applyMessageGeneratorComponent}>
      <h3>Adjust to your needs</h3>
      <div className={styles.configuration}>
        <SalutationConfig onMessageChange={setSalutation} />
        <LanguageConfig onChange={setLanguage} />
      </div>
      <div className={styles.message}>
        <h3>Message</h3>
        <p>{salutation}</p>
      </div>
    </div>
  );
};
