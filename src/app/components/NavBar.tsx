import styles from "./navbar.module.css";
import Link from "next/link";

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
  return (
    <>
      <div className={styles.navbar}>
        {links.map((link, index) => {
          const linkStyle = {
            animationDelay: `${4 + index}s`,
          };
          return (
            <Link
              onClick={onLinkClick}
              className={styles.slidein}
              style={linkStyle}
              href={link.href}
            >
              {link.text}
            </Link>
          );
        })}
      </div>
    </>
  );
}
