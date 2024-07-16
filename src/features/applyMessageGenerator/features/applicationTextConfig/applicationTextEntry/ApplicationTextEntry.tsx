import { IApplicationTextEntryProps } from "./IApplicationTextEntryProps";
import styles from "./ApplicationTextEntry.module.scss";

export const ApplicationTextEntry: React.FC<IApplicationTextEntryProps> = (
  props
) => {
  return (
    <div className={styles.applicationTextEntry}>
      <input
        type="checkbox"
        id="applicationTextType"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          props.onSelect?.(event.target.value === "on" ? true : false);
        }}
      ></input>
      <label htmlFor="applicationTextType" className={styles.title}>
        {props.title}
      </label>
      <p>{props.text}</p>
    </div>
  );
};
