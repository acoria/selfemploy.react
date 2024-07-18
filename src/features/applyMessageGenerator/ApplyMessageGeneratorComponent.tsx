import { useState } from "react";
import { Divider } from "../../components/divider/Divider";
import { IApplyMessageConfig } from "../../core/types/IApplyMessageConfig";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import styles from "./ApplyMessageGeneratorComponent.module.scss";
import { ApplicationMedium } from "./features/applicationMediumConfig/types/ApplicationMedium";
import { ApplyMessage } from "./features/applyMessage/ApplyMessage";
import { ApplySubject } from "./features/applySubject/ApplySubject";
import { Header } from "./features/header/Header";
import { MessageGeneratorConfig } from "./features/messageGeneratorConfig/MessageGeneratorConfig";
import { Settings } from "./features/settings/Settings";

export const ApplyMessageGeneratorComponent = () => {
  const { t } = useTranslation();
  const [applyMessageConfig, setApplyMessageConfig] = useState<
    IApplyMessageConfig | undefined
  >(undefined);

  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <Header onToggleSettings={() => setShowSettings((prev) => !prev)} />
      <div className={styles.content}>
        {showSettings && <Settings />}
        <h3 className={styles.title}>
          {t(texts.applyMessageGenerator.configSectionTitle)}
        </h3>
        <MessageGeneratorConfig
          onApplyMessageConfigChange={setApplyMessageConfig}
        />
        <Divider />
        <div className={styles.generatedMessageSection}>
          <div>
            <h3 className={styles.title}>
              {t(texts.applyMessageGenerator.messageSection.messageTitle)}
            </h3>
            <ApplyMessage applyMessageConfig={applyMessageConfig} />
          </div>
          {applyMessageConfig?.applicationMedium === ApplicationMedium.EMAIL &&
            applyMessageConfig.applicationOrigin && (
              <div>
                <h3 className={styles.title}>
                  {t(texts.applyMessageGenerator.messageSection.subjectTitle)}
                </h3>
                <ApplySubject
                  applicationOrigin={applyMessageConfig.applicationOrigin}
                />
              </div>
            )}
        </div>
      </div>
    </>
  );
};
