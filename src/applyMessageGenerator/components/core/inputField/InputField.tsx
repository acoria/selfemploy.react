import { IInputFieldProps } from "./IInputFieldProps";
import styles from "./InputField.module.scss";

export const InputField: React.FC<IInputFieldProps> = (props) => {
  return (
    <div className={styles.inputField}>
      {props.label && (
        <label className={styles.label} htmlFor={props.label}>
          {props.label}
        </label>
      )}
      <input
        id={props.label}
        onChange={(event) => {
          props.onChange(event.currentTarget.value);
        }}
      />
    </div>
  );
};
