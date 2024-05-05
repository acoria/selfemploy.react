import { IApplyMessage } from "../../../../core/types/IApplyMessage";

export interface IMessageGeneratorConfigProps {
  onApplyMessageChange: (applyMessage: IApplyMessage) => void;
}
