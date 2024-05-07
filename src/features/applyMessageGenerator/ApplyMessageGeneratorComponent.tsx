import { useState } from "react";
import { IApplyMessage } from "../../core/types/IApplyMessage";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import styles from "./ApplyMessageGeneratorComponent.module.scss";
import { ApplyMessage } from "./features/applyMessage/ApplyMessage";
import { MessageGeneratorConfig } from "./features/messageGeneratorConfig/MessageGeneratorConfig";
import { ReactComponent as Icon } from "../../assets/icon.svg";

export const ApplyMessageGeneratorComponent = () => {
  const { t } = useTranslation();
  const [applyMessage, setApplyMessage] = useState<IApplyMessage | undefined>(
    undefined
  );
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
        <MessageGeneratorConfig onApplyMessageChange={setApplyMessage} />
        <div className={styles.divider}></div>
        <div>
          <h3 className={styles.title}>
            {t(texts.applyMessageGenerator.messageSection.title)}
          </h3>
          <ApplyMessage applyMessage={applyMessage} />
        </div>
      </div>
    </>
  );
};
