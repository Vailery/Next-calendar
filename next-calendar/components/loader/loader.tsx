import styles from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loaderRing}>
      <div className={styles.loaderRingLight}></div>
      <div className={styles.loaderRingTrack}></div>
    </div>
  );
};
