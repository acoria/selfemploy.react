import { useState } from "react";
import { ReactComponent as Icon } from "../../assets/icon.svg";
import { IApplyMessageConfig } from "../../core/types/IApplyMessageConfig";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import styles from "./ApplyMessageGeneratorComponent.module.scss";
import { ApplyMessage } from "./features/applyMessage/ApplyMessage";
import { MessageGeneratorConfig } from "./features/messageGeneratorConfig/MessageGeneratorConfig";
import { ApplicationMedium } from "./features/applicationMediumConfig/types/ApplicationMedium";
import { ApplySubject } from "./features/applySubject/ApplySubject";

export const ApplyMessageGeneratorComponent = () => {
  const { t } = useTranslation();
  const [applyMessageConfig, setApplyMessageConfig] = useState<
    IApplyMessageConfig | undefined
  >(undefined);
  return (
    <>
      <div className={styles.header}>
        <Icon className={styles.icon} />
        <div className={styles.headerTitle}>
          {t(texts.applyMessageGenerator.appTitle)}
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {t(texts.applyMessageGenerator.configSectionTitle)}
        </h3>
        <MessageGeneratorConfig
          onApplyMessageConfigChange={setApplyMessageConfig}
        />
        <div className={styles.divider}></div>
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
