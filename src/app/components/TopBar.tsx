"use client";

import Title from "./Title";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TopBar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isClicked, setIsClicked] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setShowContent(false);
    if (pathname === "/") {
      setTimeout(() => {
        setShowContent(true);
      }, 2000);
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      setIsClicked(false);
    } else {
      setIsClicked(true);
      setShowContent(true);
    }
  });

  return (
    <>
      <Title clicked={isClicked} />
      <NavBar onLinkClick={handleClick} />
      {showContent && <main>{children}</main>}
    </>
  );
}
