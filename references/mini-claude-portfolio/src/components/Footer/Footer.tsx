import Link from "next/link";

import "./Footer.css";

export function Footer({ variant = "home" }: { variant?: "home" | "blog" | "post" }) {
  if (variant === "home") {
    return (
      <footer>
        <span>&copy; 2026 &middot; Yaroslav Nychkalo &middot; Set in Source Serif 4</span>
        <span>Last updated Apr 22</span>
      </footer>
    );
  }

  if (variant === "blog") {
    return (
      <footer>
        <div>&copy; 2026 Yaroslav Nychkalo. Built by hand.</div>
        <div>
          <Link href="/">Portfolio</Link> &middot; <a href="#">RSS</a> &middot; <a href="#">Colophon</a>
        </div>
      </footer>
    );
  }

  return (
    <footer>
      <div>&copy; 2026 Yaroslav Nychkalo. Built by hand.</div>
      <div>
        <Link href="/">Portfolio</Link> &middot; <Link href="/blog">Blog</Link> &middot; <a href="#">RSS</a>
      </div>
    </footer>
  );
}
