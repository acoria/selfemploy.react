import { MultiSelectButton } from "../../../components/core/multiSelectButtons/MultiSelectButtons";
import { NotImplementedError } from "../../../errors/NotImplementedError";
import { ApplicationMedium } from "./types/ApplicationMedium";
import { ConfigureComponent } from "../core/configureComponent/ConfigureComponent";
import { IApplicationMediumConfigProps } from "./IApplicationMediumConfigProps";

export const ApplicationMediumConfig: React.FC<
  IApplicationMediumConfigProps
> = (props) => {
  return (
    <ConfigureComponent title={"Bewerbung über"}>
      <MultiSelectButton
        buttonLabels={[ApplicationMedium.WEBSITE, ApplicationMedium.EMAIL]}
        isSingleSelect
        onClick={(index) => {
          if (index === 0) {
            props.onChange(ApplicationMedium.WEBSITE);
          } else if (index === 1) {
            props.onChange(ApplicationMedium.EMAIL);
          } else {
            throw new NotImplementedError();
          }
        }}
      />
    </ConfigureComponent>
  );
};
