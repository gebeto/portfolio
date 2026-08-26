import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

import "./TopBar.css";

export function TopBar({ isHome = false }: { isHome?: boolean }) {
  const prefix = isHome ? "" : "/";
  return (
    <div className="topbar">
      <div className="tb-nav">
        {!isHome && <Link href={`${prefix}`}>Home</Link>}
        <Link href={`${prefix}#projects`}>Projects</Link>
        <Link href={`${prefix}#writing`}>Writing</Link>
        <Link href={`${prefix}#contact`}>Contact</Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
