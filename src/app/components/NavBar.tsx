import styles from "./navbar.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/projects",
    text: "Projects",
  },
  {
    href: "/tictactoe",
    text: "Tic Tac Toe",
  },
  {
    href: "/firstperson",
    text: "First Person Selector",
  },
  {
    href: "/teamrandomizer",
    text: "Team Randomizer",
  },
  {
    href: "top10boardgames",
    text: "Top 10 Board Games",
  },
  // {
  //   href: '#',
  //   text: 'Board Game Collection',
  // },
];

export default function NavigationBar({ onLinkClick }: { onLinkClick: any }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let animationDuration = 11000;
    if (pathname !== "/") {
      animationDuration = 0;
    }
    const timer = setTimeout(() => setIsAnimating(false), animationDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={styles.navbar}>
        {links.map((link, index) => {
          const linkStyle = {
            animationDelay: `${4 + index}s`,
          };
          return (
            <>
              {isAnimating ? (
                <span className={styles.slidein} style={linkStyle}>
                  {link.text}
                </span>
              ) : (
                <Link
                  onClick={onLinkClick}
                  className={styles.button}
                  href={link.href}
                >
                  {link.text}
                </Link>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}
