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
import { applyMessageGeneratorConfig } from "./config";
import { ApplicationTextConfig } from "./features/applicationTextConfig/ApplicationTextConfig";

export const ApplyMessageGeneratorComponent = () => {
  const [salutation, setSalutation] = useState("");
  const [language, setLanguage] = useState<Language>(Language.DE);
  const [applicationMedium, setApplicationMedium] = useState<ApplicationMedium>(
    ApplicationMedium.WEBSITE
  );
  const [applicationText, setApplicationText] = useState<string>("");
  const [applicationOrigin, setApplicationOrigin] =
    useState<IApplicationOrigin>();
  const [farewell, setFarewell] = useState<IFarewell>({
    farewell: Farewell.POLITE,
    name: applyMessageGeneratorConfig.myName,
  });

  const { t } = useTranslation();

  const getProjectLink = (): JSX.Element => {
    if (applicationOrigin === undefined) return <></>;
    switch (applicationOrigin.applicationOrigin) {
      case ApplicationOrigin.FREELANCE:
      case ApplicationOrigin.OTHER: {
        return <a href={applicationOrigin.link}>{applicationOrigin.link}</a>;
      }
      case ApplicationOrigin.FREELANCERMAP: {
        return (
          <>
            {applicationOrigin.projectId && (
              <a href={applicationOrigin.link}>{`${t(
                texts.applyMessageGenerator.projectId
              )} ${applicationOrigin.projectId}`}</a>
            )}
          </>
        );
      }
      default:
        throw new NotImplementedError(
          `Application origin ${applicationOrigin.applicationOrigin} not handled.`
        );
    }
  };

  const getGetInContactMessage = (): string | JSX.Element => {
    if (applicationMedium === undefined) return "";
    switch (applicationMedium) {
      case ApplicationMedium.WEBSITE: {
        return t(
          texts.applyMessageGenerator.messageSection
            .getInContractWithoutPlatformInfoWithoutLink
        );
      }
      case ApplicationMedium.EMAIL: {
        if (applicationOrigin === undefined) return "";
        switch (applicationOrigin.applicationOrigin) {
          case ApplicationOrigin.FREELANCE:
          case ApplicationOrigin.FREELANCERMAP: {
            return t(
              texts.applyMessageGenerator.messageSection
                .getInContactWithPlatformInfo,
              {
                projectInfo: applicationOrigin?.applicationOrigin ?? "",
              }
            );
          }
          case ApplicationOrigin.OTHER: {
            return t(
              texts.applyMessageGenerator.messageSection
                .getInContractWithoutPlatformInfoWithLink
            );
          }
          default:
            throw new NotImplementedError(
              `Application origin ${applicationOrigin.applicationOrigin} not handled.`
            );
        }
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
        <LanguageConfig onChange={setLanguage} initialValue={language} />
        <ApplicationTextConfig
          applicationTexts={applyMessageGeneratorConfig.applicationTexts}
          onChange={setApplicationText}
        />
        <ApplicationMediumConfig
          initialValue={applicationMedium}
          onChange={setApplicationMedium}
        />
        <ApplicationOriginConfig onChange={setApplicationOrigin} />
        <FarewellConfig initialFarewell={farewell} onChange={setFarewell} />
      </div>
      <div className={styles.message}>
        <h3>{t(texts.applyMessageGenerator.messageSection.title)}</h3>
        <p>{salutation}</p>
        <p>{applicationText}</p>
        <div>{getGetInContactMessage()}</div>
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
