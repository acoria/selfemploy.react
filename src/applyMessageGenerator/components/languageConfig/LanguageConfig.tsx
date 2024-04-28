import { MultiSelectButton } from "../../../components/core/multiSelectButtons/MultiSelectButtons";
import { ConfigureComponent } from "../core/configureComponent/ConfigureComponent";
import { ILanguageConfigProps } from "./ILanguageConfigProps";
import { Language } from "./types/Language";
import { NotImplementedError } from "../../../errors/NotImplementedError";

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
