"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import { useState } from "react";

const links = [{ href: "/projects", text: "Projects" }];

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <main>
      <Title clicked={isClicked} />
      <NavBar />
      {/* <div onClick={handleClick}>Projects</div> */}
    </main>
  );
}
