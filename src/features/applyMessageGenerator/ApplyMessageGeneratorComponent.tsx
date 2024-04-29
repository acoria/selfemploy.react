import { useState } from "react";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import styles from "./ApplyMessageGeneratorComponent.module.scss";
import { ApplicationMediumConfig } from "./features/applicationMediumConfig/ApplicationMediumConfig";
import { ApplicationMedium } from "./features/applicationMediumConfig/types/ApplicationMedium";
import { LanguageConfig } from "./features/languageConfig/LanguageConfig";
import { Language } from "./features/languageConfig/types/Language";
import { SalutationConfig } from "./features/salutationConfig/SalutationConfig";

export const ApplyMessageGeneratorComponent = () => {
  const [salutation, setSalutation] = useState("");
  const [language, setLanguage] = useState<Language>(Language.DE);
  const [applicationMedium, setApplicationMedium] = useState<
    ApplicationMedium | undefined
  >(undefined);

  const { t } = useTranslation();

  return (
    <div className={styles.applyMessageGeneratorComponent}>
      <h3>{t(texts.applyMessageGenerator.configSectionTitle)}</h3>
      <div className={styles.configuration}>
        <SalutationConfig onChange={setSalutation} />
        <LanguageConfig onChange={setLanguage} />
        <ApplicationMediumConfig onChange={setApplicationMedium} />
      </div>
      <div className={styles.message}>
        <h3>{t(texts.applyMessageGenerator.messageSectionTitle)}</h3>
        <p>{salutation}</p>
      </div>
    </div>
  );
};
