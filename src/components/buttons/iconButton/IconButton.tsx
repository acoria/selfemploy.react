import { ReactElement } from "react";
import { Button } from "../button/Button";
import { IIconButtonProps } from "./IIconButtonProps";
import { IconTypeToComponentMapper } from "./IconTypeToComponentMapper";

export const IconButton: React.FC<IIconButtonProps> = (props) => {
  const { iconType, className, caption, ...buttonProps } = props;
  const icon = IconTypeToComponentMapper(iconType);
  const iconButtonCaption: ReactElement = (
    <div className={className}>
      {icon}
      {caption}
    </div>
  );
  return <Button caption={iconButtonCaption} {...buttonProps} />;
};
