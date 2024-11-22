import { TextToHTMLConverter } from "../../../services/TextToHTMLConverter";
import { IApplicationTextProps } from "./IApplicationTextProps";
import styles from "./ApplicationText.module.css";

export const ApplicationText: React.FC<IApplicationTextProps> = (props) => {

  return (
    <div className={styles.applicationText}>
      <p>{props.applicationText.type}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: TextToHTMLConverter.convert(props.applicationText.text),
        }}
      ></div>
    </div>
  );
};
