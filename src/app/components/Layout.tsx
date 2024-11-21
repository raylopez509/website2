"use client";

import Title from "./Title";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Layout() {
  const pathname = usePathname();
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
  };
  useEffect(() => {
    if (pathname === "/") {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  });

  return (
    <>
      <Title clicked={isClicked} />
      <NavBar onLinkClick={handleClick} />
    </>
  );
}
