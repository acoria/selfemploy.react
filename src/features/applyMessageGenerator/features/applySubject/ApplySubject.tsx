import { ActionButton } from "../../../../components/buttons/actionButton/ActionButton";
import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { ApplicationOrigin } from "../applicationOriginConfig/types/ApplicationOrigin";
import { IApplySubjectProps } from "./IApplySubjectProps";

export const ApplySubject: React.FC<IApplySubjectProps> = (props) => {
  const { t } = useTranslation();

  const subject = (): string => {
    const projectInfo = `"${props.applicationOrigin.projectTitle}" ${
      props.applicationOrigin.projectId &&
      props.applicationOrigin.applicationOrigin ===
        ApplicationOrigin.FREELANCERMAP
        ? `(${t(texts.applyMessageGenerator.projectId)}: ${
            props.applicationOrigin.projectId
          })`
        : ""
    }`;
    return t(texts.applyMessageGenerator.messageSection.subject, {
      website: props.applicationOrigin.applicationOrigin ?? "",
      projectInfo: projectInfo,
    });
  };

  const copyToClipboard = async () => {
    navigator.clipboard.writeText(subject());
  };

  return (
    <>
      <p>{subject()}</p>
      <ActionButton
        onClick={copyToClipboard}
        caption={t(texts.general.copyToClipboard)}
      />
    </>
  );
};
