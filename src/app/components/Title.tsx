import styles from "./title.module.css";

export default function Title({ move }) {
  return (
    <>
      <div className={`${styles.wrapper} ${move ? styles.clicked : ""}`}>
        <div className={styles.typing}>i rayn over this domain.</div>
      </div>
    </>
  );
}
