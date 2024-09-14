"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Title from "./components/Title";
import { useState } from "react";

const links = [{ href: "/projects", text: "Projects" }];

export default function Home() {
  const [move, setMove] = useState(false);

  const handleClick = () => {
    setMove(!move);
  };

  return (
    <main>
      <Title />
      <div
        className={`${styles.box} ${move ? styles.move : ""}`}
        onClick={handleClick}
      >
        Projects
      </div>
    </main>
  );
}
