import { useState } from "react";
import { IApplyMessage } from "../../core/types/IApplyMessage";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import styles from "./ApplyMessageGeneratorComponent.module.scss";
import { ApplyMessage } from "./features/applyMessage/ApplyMessage";
import { MessageGeneratorConfig } from "./features/messageGeneratorConfig/MessageGeneratorConfig";

export const ApplyMessageGeneratorComponent = () => {
  const { t } = useTranslation();
  const [applyMessage, setApplyMessage] = useState<IApplyMessage | undefined>(
    undefined
  );
  return (
    <div className={styles.applyMessageGeneratorComponent}>
      <h3>{t(texts.applyMessageGenerator.configSectionTitle)}</h3>
      <MessageGeneratorConfig onApplyMessageChange={setApplyMessage} />
      <div className={styles.message}>
        <h3>{t(texts.applyMessageGenerator.messageSection.title)}</h3>
        <ApplyMessage applyMessage={applyMessage} />
      </div>
    </div>
  );
};
