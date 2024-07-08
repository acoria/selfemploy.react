import { ActionButton } from "../../../../components/actionButton/ActionButton";
import { texts } from "../../../../hooks/useTranslation/texts";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { copyToClipboard } from "../../../../services/copyToClipboard";
import { IApplySubjectProps } from "./IApplySubjectProps";

export const ApplySubject: React.FC<IApplySubjectProps> = (props) => {
  const { t } = useTranslation();

  const copyHTMLToClipboard = async () => {
    copyToClipboard(document.getElementById("subject")?.outerHTML ?? "");
  };

  return (
    <>
      <p id="subject">
        {t(texts.applyMessageGenerator.messageSection.subject, {
          website: props.applicationOrigin.applicationOrigin ?? "",
          projectId: props.applicationOrigin.projectId ?? "",
        })}
      </p>
      <ActionButton
        onClick={copyHTMLToClipboard}
        caption={t(texts.general.copyToClipboard)}
      />
    </>
  );
};
