import Markdown from "react-markdown";
import { Switch } from "../../../components/switch/Switch";
import styles from "./ApplicationTextEntry.module.scss";
import { IApplicationTextEntryProps } from "./IApplicationTextEntryProps";
import remarkGfm from "remark-gfm";

export const ApplicationTextEntry: React.FC<IApplicationTextEntryProps> = (
  props
) => {
  return (
    <div className={styles.applicationTextEntry}>
      <Switch onChange={props.onSelect} className={styles.switch} />
      <label className={styles.title}>{props.title}</label>
      <div>
        <Markdown remarkPlugins={[remarkGfm]}>{props.text}</Markdown>
      </div>
    </div>
  );
};
