import { ActionButton } from "../../../../components/actionButton/ActionButton";
import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { IApplySubjectProps } from "./IApplySubjectProps";

export const ApplySubject: React.FC<IApplySubjectProps> = (props) => {
  const { t } = useTranslation();

  const subject = t(texts.applyMessageGenerator.messageSection.subject, {
    website: props.applicationOrigin.applicationOrigin ?? "",
    projectId: props.applicationOrigin.projectId ?? "",
  });

  const copyToClipboard = async () => {
    navigator.clipboard.writeText(subject);
  };

  return (
    <>
      <p>{subject}</p>
      <ActionButton
        onClick={copyToClipboard}
        caption={t(texts.general.copyToClipboard)}
      />
    </>
  );
};
