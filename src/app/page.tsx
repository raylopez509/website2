// import styles from "./page.module.css";
"use client";

import Link from "next/link";
import Title from "./components/Title";
import { useState } from "react";

const links = [{ href: "/projects", text: "Projects" }];

export default function Home() {
  const [move, setMove] = useState(false);

  const handleClick = () => {
    setMove(!move);
    console.log("i got clicked!");
  };

  return (
    <main>
      {/* <div className={styles.wrapper}>
        <div className={styles.typing}>i rayn over this domain.</div>
      </div> */}
      <Title />
      {/* <div>
        {links.map((link) => {
          return <Link href={link.href}>{link.text}</Link>;
        })}
      </div> */}
      <div className={`box ${move ? "move" : ""}`} onClick={handleClick}>
        Projects
      </div>
    </main>
  );
}
