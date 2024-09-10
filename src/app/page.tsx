// import styles from "./page.module.css";
import Link from "next/link";
import Title from "./components/Title";

const links = [{ href: "/projects", text: "Projects" }];

export default function Home() {
  return (
    <main>
      {/* <div className={styles.wrapper}>
        <div className={styles.typing}>i rayn over this domain.</div>
      </div> */}
      <Title />
      <div>
        {links.map((link) => {
          return <Link href={link.href}>{link.text}</Link>;
        })}
      </div>
    </main>
  );
}
