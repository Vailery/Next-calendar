import styles from "./dark-mode-toggle.module.css";

interface IToggle {
  inputChecked: boolean;
  onChange: () => void;
}

export const DarkModeToggle = ({ inputChecked, onChange }: IToggle) => {
  return (
    <div className={styles.switchCheckbox}>
      <label className={styles.switch}>
        <input type="checkbox" onChange={onChange} checked={inputChecked} />
        <span className={styles.slider}> </span>
      </label>
    </div>
  );
};
