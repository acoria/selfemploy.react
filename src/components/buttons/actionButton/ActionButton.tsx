import { style } from "../../../utils/style";
import { Button } from "../button/Button";
import styles from "./ActionButton.module.scss";
import { IActionButtonProps } from "./IActionButtonProps";

export const ActionButton: React.FC<IActionButtonProps> = (props) => {
  return (
    <Button
      className={style(styles.actionButton, props.className)}
      onClick={props.onClick}
      caption={props.caption}
    />
  );
};
