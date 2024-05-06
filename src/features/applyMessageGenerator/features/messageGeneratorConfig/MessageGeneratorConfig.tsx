import { useEffect, useState } from "react";
import { IApplyMessage } from "../../../../core/types/IApplyMessage";
import { applyMessageGeneratorConfig } from "../../config";
import { ApplicationMediumConfig } from "../applicationMediumConfig/ApplicationMediumConfig";
import { ApplicationMedium } from "../applicationMediumConfig/types/ApplicationMedium";
import { ApplicationOriginConfig } from "../applicationOriginConfig/ApplicationOriginConfig";
import { ApplicationTextConfig } from "../applicationTextConfig/ApplicationTextConfig";
import { Farewell } from "../farewellConfig/Farewell";
import { FarewellConfig } from "../farewellConfig/FarewellConfig";
import { LanguageConfig } from "../languageConfig/LanguageConfig";
import { Language } from "../languageConfig/types/Language";
import { SalutationConfig } from "../salutationConfig/SalutationConfig";
import { IMessageGeneratorConfigProps } from "./IMessageGeneratorConfigProps";
import styles from "./MessageGeneratorConfig.module.scss";
import { ApplicantNumber } from "../applicantNumberConfig/ApplicantNumber";
import { ApplicantNumberConfig } from "../applicantNumberConfig/ApplicantNumberConfig";

export const MessageGeneratorConfig: React.FC<IMessageGeneratorConfigProps> = (
  props
) => {
  const [applyMessage, setApplyMessage] = useState<IApplyMessage>({
    salutation: "",
    language: Language.DE,
    applicantNumber: ApplicantNumber.SINGLE,
    applicationMedium: ApplicationMedium.WEBSITE,
    applicationOrigin: undefined,
    applicationText: "",
    farewell: {
      farewell: Farewell.POLITE,
      name: applyMessageGeneratorConfig.myName,
    },
  });

  useEffect(() => {
    props.onApplyMessageChange(applyMessage);
  }, [applyMessage]);

  return (
    <div className={styles.configuration}>
      <SalutationConfig
        onChange={(salutation) =>
          setApplyMessage((applyMessage) => ({ ...applyMessage, salutation }))
        }
      />
      <LanguageConfig
        onChange={(language) =>
          setApplyMessage((applyMessage) => ({ ...applyMessage, language }))
        }
        initialValue={applyMessage.language}
      />
      <ApplicantNumberConfig
        initialValue={applyMessage.applicantNumber}
        onChange={(applicantNumber) =>
          setApplyMessage((applyMessage) => ({
            ...applyMessage,
            applicantNumber,
          }))
        }
      />
      <ApplicationTextConfig
        applicationTexts={applyMessageGeneratorConfig.applicationTexts}
        onChange={(applicationText) =>
          setApplyMessage((applyMessage) => ({
            ...applyMessage,
            applicationText,
          }))
        }
      />
      <ApplicationMediumConfig
        initialValue={applyMessage.applicationMedium}
        onChange={(applicationMedium) =>
          setApplyMessage((applyMessage) => ({
            ...applyMessage,
            applicationMedium,
          }))
        }
      />
      <ApplicationOriginConfig
        onChange={(applicationOrigin) =>
          setApplyMessage((applyMessage) => ({
            ...applyMessage,
            applicationOrigin,
          }))
        }
      />
      <FarewellConfig
        initialFarewell={applyMessage.farewell}
        onChange={(farewell) =>
          setApplyMessage((applyMessage) => ({ ...applyMessage, farewell }))
        }
      />
    </div>
  );
};
