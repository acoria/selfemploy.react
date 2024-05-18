import { ReactNode } from "react";
import { NotImplementedError } from "../../../../core/errors/NotImplementedError";
import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { applyMessageGeneratorConfig } from "../../config";
import { ApplicantNumber } from "../applicantNumberConfig/ApplicantNumber";
import { ApplicationMedium } from "../applicationMediumConfig/types/ApplicationMedium";
import { ApplicationOrigin } from "../applicationOriginConfig/types/ApplicationOrigin";
import { Farewell } from "../farewellConfig/Farewell";
import { IApplyMessageProps } from "./IApplyMessageProps";
import styles from "./ApplyMessage.module.scss";

export const ApplyMessage: React.FC<IApplyMessageProps> = (props) => {
  const { t } = useTranslation();

  const getProjectLink = (): JSX.Element => {
    if (props.applyMessageConfig?.applicationOrigin === undefined) return <></>;
    switch (props.applyMessageConfig?.applicationOrigin.applicationOrigin) {
      case ApplicationOrigin.FREELANCE:
      case ApplicationOrigin.OTHER: {
        return (
          <a href={props.applyMessageConfig?.applicationOrigin.link}>
            {props.applyMessageConfig?.applicationOrigin.link}
          </a>
        );
      }
      case ApplicationOrigin.FREELANCERMAP: {
        return (
          <>
            {props.applyMessageConfig?.applicationOrigin.projectId && (
              <a href={props.applyMessageConfig?.applicationOrigin.link}>{`${t(
                texts.applyMessageGenerator.projectId
              )} ${props.applyMessageConfig?.applicationOrigin.projectId}`}</a>
            )}
          </>
        );
      }
      default:
        throw new NotImplementedError(
          `Application origin ${props.applyMessageConfig?.applicationOrigin.applicationOrigin} not handled.`
        );
    }
  };

  const getGetInContactMessage = (): string => {
    if (props.applyMessageConfig?.applicationMedium === undefined) return "";
    let wouldPlaceholder;
    switch (props.applyMessageConfig.applicantNumber) {
      case ApplicantNumber.SINGLE:
        wouldPlaceholder = t(texts.applyMessageGenerator.messageSection.wouldI);
        break;
      case ApplicantNumber.DOUBLE:
        wouldPlaceholder = t(
          texts.applyMessageGenerator.messageSection.wouldWe
        );
        break;
      default:
        throw new NotImplementedError(
          `ApplicantNumber enum value '${props.applyMessageConfig.applicantNumber}' not handled.`
        );
    }

    switch (props.applyMessageConfig?.applicationMedium) {
      case ApplicationMedium.WEBSITE: {
        return t(
          texts.applyMessageGenerator.messageSection
            .getInContractWithoutPlatformInfoWithoutLink,
          { wouldWho: wouldPlaceholder }
        );
      }
      case ApplicationMedium.EMAIL: {
        if (props.applyMessageConfig?.applicationOrigin === undefined)
          return "";
        switch (props.applyMessageConfig?.applicationOrigin.applicationOrigin) {
          case ApplicationOrigin.FREELANCE:
          case ApplicationOrigin.FREELANCERMAP: {
            return t(
              texts.applyMessageGenerator.messageSection
                .getInContactWithPlatformInfo,
              {
                wouldWho: wouldPlaceholder,
                projectInfo:
                  props.applyMessageConfig?.applicationOrigin
                    ?.applicationOrigin ?? "",
              }
            );
          }
          case ApplicationOrigin.OTHER: {
            return t(
              texts.applyMessageGenerator.messageSection
                .getInContractWithoutPlatformInfoWithLink,
              { wouldWho: wouldPlaceholder }
            );
          }
          default:
            throw new NotImplementedError(
              `Application origin ${props.applyMessageConfig?.applicationOrigin.applicationOrigin} not handled.`
            );
        }
      }
      default:
        throw new NotImplementedError(
          `Case for ApplicationMedium ${props.applyMessageConfig?.applicationMedium} not handled.`
        );
    }
  };

  const getSecondProfileLink = (): ReactNode | string => {
    if (props.applyMessageConfig?.applicantNumber === ApplicantNumber.DOUBLE) {
      let codingBuddyLink = "";
      switch (props.applyMessageConfig.applicationOrigin?.applicationOrigin) {
        case ApplicationOrigin.FREELANCERMAP:
          codingBuddyLink =
            applyMessageGeneratorConfig.codingBuddyLink_freelancerMap;
          break;
        case ApplicationOrigin.FREELANCE:
          codingBuddyLink =
            applyMessageGeneratorConfig.codingBuddyLink_freelance;
          break;
        default:
          codingBuddyLink =
            applyMessageGeneratorConfig.codingBuddyLink_linkedIn;
      }
      return (
        <>
          {t(
            texts.applyMessageGenerator.messageSection.codingBuddyProfileInfo,
            {
              profileLink: <a href={codingBuddyLink}>{codingBuddyLink}</a>,
            }
          )}
          <br />
        </>
      );
    }
    return "";
  };

  const getConditions = (): string => {
    let conditions: string = "";

    if (props.applyMessageConfig?.availableFrom) {
      conditions = t(
        texts.applyMessageGenerator.messageSection.availabilityInfo,
        {
          availableFrom: props.applyMessageConfig.availableFrom,
        }
      );
    }

    if (props.applyMessageConfig?.hourlyRate) {
      conditions =
        conditions +
        t(texts.applyMessageGenerator.messageSection.hourlyRateInfo, {
          hourlyRate: props.applyMessageConfig.hourlyRate,
        });
    }
    return conditions;
  };

  const getFarewell = (): string => {
    if (props.applyMessageConfig?.farewell.farewell === undefined) return "";
    switch (props.applyMessageConfig?.farewell.farewell) {
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
          `Case for ApplicationMedium ${props.applyMessageConfig?.applicationMedium} not handled.`
        );
    }
  };

  const copyHTMLToClipboard = async () => {
    const htmlContent =
      document.getElementById("messageContent")?.innerHTML ?? "";
    const blob = new Blob([htmlContent], { type: "text/html" });
    const clipboardItem = new ClipboardItem({ "text/html": blob });
    await navigator.clipboard.write([clipboardItem]);
  };

  return (
    <>
      <div id="messageContent">
        <p>{props.applyMessageConfig?.salutation}</p>
        <p>{props.applyMessageConfig?.applicationText}</p>
        {getSecondProfileLink()}
        <div>{getGetInContactMessage()}</div>
        {props.applyMessageConfig?.applicationMedium ===
          ApplicationMedium.EMAIL && <div>{getProjectLink()}</div>}
        <div>{getConditions()}</div>
        <br />

        <div>{getFarewell()}</div>
        <div>{props.applyMessageConfig?.farewell.name ?? ""}</div>
      </div>
      <button className={styles.copyButton} onClick={copyHTMLToClipboard}>
        Copy to clipboard
      </button>
    </>
  );
};
