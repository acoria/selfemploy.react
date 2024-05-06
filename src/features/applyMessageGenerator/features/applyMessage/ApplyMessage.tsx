import { IApplyMessageProps } from "./IApplyMessageProps";
import styles from "./ApplyMessage.module.scss";
import { ApplicationOrigin } from "../applicationOriginConfig/types/ApplicationOrigin";
import { NotImplementedError } from "../../../../core/errors/NotImplementedError";
import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { ApplicationMedium } from "../applicationMediumConfig/types/ApplicationMedium";
import { Farewell } from "../farewellConfig/Farewell";
import { ApplicantNumber } from "../applicantNumberConfig/ApplicantNumber";
import { ReactNode } from "react";

export const ApplyMessage: React.FC<IApplyMessageProps> = (props) => {
  const { t } = useTranslation();

  const getProjectLink = (): JSX.Element => {
    if (props.applyMessage?.applicationOrigin === undefined) return <></>;
    switch (props.applyMessage?.applicationOrigin.applicationOrigin) {
      case ApplicationOrigin.FREELANCE:
      case ApplicationOrigin.OTHER: {
        return (
          <a href={props.applyMessage?.applicationOrigin.link}>
            {props.applyMessage?.applicationOrigin.link}
          </a>
        );
      }
      case ApplicationOrigin.FREELANCERMAP: {
        return (
          <>
            {props.applyMessage?.applicationOrigin.projectId && (
              <a href={props.applyMessage?.applicationOrigin.link}>{`${t(
                texts.applyMessageGenerator.projectId
              )} ${props.applyMessage?.applicationOrigin.projectId}`}</a>
            )}
          </>
        );
      }
      default:
        throw new NotImplementedError(
          `Application origin ${props.applyMessage?.applicationOrigin.applicationOrigin} not handled.`
        );
    }
  };

  const getGetInContactMessage = (): string | JSX.Element => {
    if (props.applyMessage?.applicationMedium === undefined) return "";
    let wouldPlaceholder;
    switch (props.applyMessage.applicantNumber) {
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
          `ApplicantNumber enum value '${props.applyMessage.applicantNumber}' not handled.`
        );
    }

    switch (props.applyMessage?.applicationMedium) {
      case ApplicationMedium.WEBSITE: {
        return t(
          texts.applyMessageGenerator.messageSection
            .getInContractWithoutPlatformInfoWithoutLink,
          { wouldWho: wouldPlaceholder }
        );
      }
      case ApplicationMedium.EMAIL: {
        if (props.applyMessage?.applicationOrigin === undefined) return "";
        switch (props.applyMessage?.applicationOrigin.applicationOrigin) {
          case ApplicationOrigin.FREELANCE:
          case ApplicationOrigin.FREELANCERMAP: {
            return t(
              texts.applyMessageGenerator.messageSection
                .getInContactWithPlatformInfo,
              {
                wouldWho: wouldPlaceholder,
                projectInfo:
                  props.applyMessage?.applicationOrigin?.applicationOrigin ??
                  "",
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
              `Application origin ${props.applyMessage?.applicationOrigin.applicationOrigin} not handled.`
            );
        }
      }
      default:
        throw new NotImplementedError(
          `Case for ApplicationMedium ${props.applyMessage?.applicationMedium} not handled.`
        );
    }
  };

  const getSecondProfileLink = (): ReactNode | string => {
    if (props.applyMessage?.applicantNumber === ApplicantNumber.DOUBLE) {
      return (
        <>
          {t(texts.applyMessageGenerator.messageSection.buddyProfile, {
            profileLink: (
              <a href="https://www.freelancermap.de/profil/software-architekt-251647">
                https://www.freelancermap.de/profil/software-architekt-251647
              </a>
            ),
          })}
          <br />
        </>
      );
    }
    return "";
  };

  const getConditions = () => {
    return (
      <>
        {(props.applyMessage?.availableFrom ||
          props.applyMessage?.hourlyRate) && (
          <div>
            {props.applyMessage?.availableFrom &&
              t(texts.applyMessageGenerator.messageSection.availabilityInfo, {
                availableFrom: props.applyMessage.availableFrom,
              })}
            {props.applyMessage?.hourlyRate &&
              t(texts.applyMessageGenerator.messageSection.hourlyRateInfo, {
                hourlyRate: props.applyMessage.hourlyRate,
              })}
          </div>
        )}
      </>
    );
  };

  const getFarewell = (): string => {
    if (props.applyMessage?.farewell.farewell === undefined) return "";
    switch (props.applyMessage?.farewell.farewell) {
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
          `Case for ApplicationMedium ${props.applyMessage?.applicationMedium} not handled.`
        );
    }
  };

  return (
    <>
      <p>{props.applyMessage?.salutation}</p>
      <p>{props.applyMessage?.applicationText}</p>
      {getSecondProfileLink()}
      <div>{getGetInContactMessage()}</div>
      {props.applyMessage?.applicationMedium === ApplicationMedium.EMAIL && (
        <div>{getProjectLink()}</div>
      )}
      {getConditions()}
      <br />

      <div>{getFarewell()}</div>
      <div>{props.applyMessage?.farewell.name ?? ""}</div>
    </>
  );
};