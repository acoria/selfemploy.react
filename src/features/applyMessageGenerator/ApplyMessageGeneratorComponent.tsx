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
import { TitledSection } from "../../components/titledSection/TitledSection";

export const ApplyMessageGeneratorComponent = () => {
  const { t } = useTranslation();
  const [applyMessageConfig, setApplyMessageConfig] = useState<
    IApplyMessageConfig | undefined
  >(undefined);

  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <Header
        onToggleSettings={() => setShowSettings((prev) => !prev)}
        settingsShown={showSettings}
      />
      <div className={styles.content}>
        {showSettings && <Settings />}
        <TitledSection
          title={t(texts.applyMessageGenerator.configSectionTitle)}
        >
          <MessageGeneratorConfig
            onApplyMessageConfigChange={setApplyMessageConfig}
          />
        </TitledSection>
        <Divider />
        <div className={styles.generatedMessageSection}>
          <TitledSection
            title={t(texts.applyMessageGenerator.messageSection.messageTitle)}
          >
            <ApplyMessage applyMessageConfig={applyMessageConfig} />
          </TitledSection>
          {applyMessageConfig?.applicationMedium === ApplicationMedium.EMAIL &&
            applyMessageConfig.applicationOrigin && (
              <TitledSection
                title={t(
                  texts.applyMessageGenerator.messageSection.subjectTitle
                )}
              >
                <ApplySubject
                  applicationOrigin={applyMessageConfig.applicationOrigin}
                />
              </TitledSection>
            )}
        </div>
      </div>
    </>
  );
};
