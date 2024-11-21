"use client";

import Title from "./Title";
import NavBar from "./NavBar";
import { useState } from "react";

export default function Layout() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <>
      <Title clicked={isClicked} />
      <NavBar onLinkClick={handleClick} />
    </>
  );
}
