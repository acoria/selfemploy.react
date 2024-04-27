import styles from "./ApplyMessageGeneratorComponent.module.scss";
import { Salutation } from "./components/salutation/Salutation";

export const ApplyMessageGeneratorComponent = () => {
  return (
    <div className={styles.applyMessageGeneratorComponent}>
      <Salutation onMessageChange={(message) => console.log(message)} />
    </div>
  );
};
