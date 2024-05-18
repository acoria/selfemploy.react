import { IApplyMessageConfig } from "../../../../core/types/IApplyMessageConfig";

export interface IMessageGeneratorConfigProps {
  onApplyMessageConfigChange: (applyMessage: IApplyMessageConfig) => void;
}
