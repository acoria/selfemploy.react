import { Switch } from "../../../components/switch/Switch";
import styles from "./ApplicationTextEntry.module.scss";
import { IApplicationTextEntryProps } from "./IApplicationTextEntryProps";

export const ApplicationTextEntry: React.FC<IApplicationTextEntryProps> = (
  props
) => {
  return (
    <div className={styles.applicationTextEntry}>
      <Switch onChange={props.onSelect} className={styles.switch} />
      <label className={styles.title}>{props.title}</label>
      <p>{props.text}</p>
    </div>
  );
};
