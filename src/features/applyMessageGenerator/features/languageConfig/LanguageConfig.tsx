import { MultiSelectButtons } from "../../../../components/multiSelectButtons/MultiSelectButtons";
import { ConfigureComponent } from "../../components/configureComponent/ConfigureComponent";
import { ILanguageConfigProps } from "./ILanguageConfigProps";
import { Language } from "./types/Language";
import { NotImplementedError } from "../../../../core/errors/NotImplementedError";
import { useTranslation } from "../../../../hooks/useTranslation/useTranslation";
import { texts } from "../../../../hooks/useTranslation/texts";

export const LanguageConfig: React.FC<ILanguageConfigProps> = (props) => {
  const { t } = useTranslation();
  return (
    <ConfigureComponent
      title={t(texts.applyMessageGenerator.languageConfigTitle)}
    >
      <MultiSelectButtons
        buttonLabels={[Language.DE, Language.EN]}
        isSingleSelect
        preselectedIndices={[0]}
        onClick={(index) => {
          if (index === 0) {
            props.onChange(Language.DE);
          } else if (index === 1) {
            props.onChange(Language.EN);
          } else {
            throw new NotImplementedError();
          }
        }}
      />
    </ConfigureComponent>
  );
};
