import { useState } from "react";
import { NotImplementedError } from "../../core/errors/NotImplementedError";
import { texts } from "../../hooks/useTranslation/texts";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import styles from "./ApplyMessageGeneratorComponent.module.scss";
import { ApplicationMediumConfig } from "./features/applicationMediumConfig/ApplicationMediumConfig";
import { ApplicationMedium } from "./features/applicationMediumConfig/types/ApplicationMedium";
import { ApplicationOriginConfig } from "./features/applicationOriginConfig/ApplicationOriginConfig";
import { ApplicationOrigin } from "./features/applicationOriginConfig/types/ApplicationOrigin";
import { IApplicationOrigin } from "./features/applicationOriginConfig/types/IApplicationOrigin";
import { Farewell } from "./features/farewellConfig/Farewell";
import { FarewellConfig } from "./features/farewellConfig/FarewellConfig";
import { IFarewell } from "./features/farewellConfig/IFarewell";
import { LanguageConfig } from "./features/languageConfig/LanguageConfig";
import { Language } from "./features/languageConfig/types/Language";
import { SalutationConfig } from "./features/salutationConfig/SalutationConfig";

export const ApplyMessageGeneratorComponent = () => {
  const [salutation, setSalutation] = useState("");
  const [language, setLanguage] = useState<Language>(Language.DE);
  const [applicationMedium, setApplicationMedium] = useState<ApplicationMedium>(
    ApplicationMedium.WEBSITE
  );
  const [applicationOrigin, setApplicationOrigin] =
    useState<IApplicationOrigin>();
  const [farewell, setFarewell] = useState<IFarewell>({
    farewell: Farewell.POLITE,
    name: "Verena Tewes",
  });

  const { t } = useTranslation();

  const getProjectLink = (): JSX.Element => {
    if (applicationOrigin === undefined) return <></>;
    if (applicationOrigin.applicationOrigin === ApplicationOrigin.FREELANCE) {
      return (
        <a href={applicationOrigin.link}>
          {applicationOrigin.link}
        </a>
      );
    }
    return <></>;
  };

  const getInContactMessage = (): string | JSX.Element => {
    if (applicationMedium === undefined) return "";
    switch (applicationMedium) {
      case ApplicationMedium.WEBSITE: {
        return t(
          texts.applyMessageGenerator.messageSection
            .getInContractWithoutPlatformInfo
        );
      }
      case ApplicationMedium.EMAIL: {
        return t(
          texts.applyMessageGenerator.messageSection
            .getInContactWithPlatformInfo,
          {
            projectInfo: applicationOrigin?.applicationOrigin ?? "",
          }
        );
      }
      default:
        throw new NotImplementedError(
          `Case for ApplicationMedium ${applicationMedium} not handled.`
        );
    }
  };

  const getFarewell = (): string => {
    if (farewell.farewell === undefined) return "";
    switch (farewell.farewell) {
      case Farewell.POLITE: {
        return t(texts.applyMessageGenerator.messageSection.bestRegardsPolite);
      }
      case Farewell.INFORMAL: {
        return t(
          texts.applyMessageGenerator.messageSection.bestRegardsInformal
        );
      }
      default:
        throw new NotImplementedError(
          `Case for ApplicationMedium ${applicationMedium} not handled.`
        );
    }
  };

  return (
    <div className={styles.applyMessageGeneratorComponent}>
      <h3>{t(texts.applyMessageGenerator.configSectionTitle)}</h3>
      <div className={styles.configuration}>
        <SalutationConfig onChange={setSalutation} />
        <LanguageConfig onChange={setLanguage} />
        <ApplicationMediumConfig onChange={setApplicationMedium} />
        <ApplicationOriginConfig onChange={setApplicationOrigin} />
        <FarewellConfig initialFarewell={farewell} onChange={setFarewell} />
      </div>
      <div className={styles.message}>
        <h3>{t(texts.applyMessageGenerator.messageSection.title)}</h3>
        <p>{salutation}</p>
        <div>{getInContactMessage()}</div>
        {applicationMedium === ApplicationMedium.EMAIL && (
          <div>{getProjectLink()}</div>
        )}
        <br />
        <div>{getFarewell()}</div>
        <div>{farewell.name ?? ""}</div>
      </div>
    </div>
  );
};
