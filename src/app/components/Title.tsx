import styles from "./title.module.css";

export default function Title({ clicked }: { clicked: any }) {
  return (
    <>
      <div className={`${styles.wrapper} ${clicked ? styles.clicked : ""}`}>
        <div className={styles.typing}>i rayn over this domain.</div>
      </div>
    </>
  );
}
