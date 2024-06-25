import styles from "./ActionButton.module.scss";
import { IActionButtonProps } from "./IActionButtonProps";

export const ActionButton: React.FC<IActionButtonProps> = (props) => {
  return (
    <button className={styles.actionButton} onClick={props.onClick}>
      {props.caption}
    </button>
  );
};
