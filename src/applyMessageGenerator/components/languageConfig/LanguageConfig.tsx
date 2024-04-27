import { MultiSelectButton } from "../../../components/core/multiSelectButtons/MultiSelectButtons";
import { ConfigureComponent } from "../core/configureComponent/ConfigureComponent";
import { ILanguageConfigProps } from "./ILanguageConfigProps";
import { Language } from "./Language";

export const LanguageConfig: React.FC<ILanguageConfigProps> = (props) => {
  return (
    <ConfigureComponent title="Sprache">
      <MultiSelectButton
        buttonLabels={[Language.DE, Language.EN]}
        isSingleSelect
        preselectedIndices={[0]}
        onClick={(index) => {
          if (index === 0) {
            props.onChange(Language.DE);
          } else {
            props.onChange(Language.EN);
          }
        }}
      />
    </ConfigureComponent>
  );
};
