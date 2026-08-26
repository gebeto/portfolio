import Image from "next/image";

import "./Hero.css";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-top">
        <div className="avatar">
          <Image unoptimized src="/avatar.jpg" alt="Yaroslav Nychkalo" width={60} height={60} />
        </div>
        <div className="who">
          <h1>Hello, I&rsquo;m <em>Yaroslav Nychkalo</em>.</h1>
          <p className="role">Full Stack Engineer at SPSoft &middot; Based in Lviv, Ukraine</p>
        </div>
      </div>
      <div className="bio">
        <p>Passionate software engineer focused on the full cycle of product development &mdash; from gathering requirements and configuring infrastructure and CI, to crafting clean frontend UI and scalable backend code.</p>
        <p>I care about shipping thoughtful, reliable software. I read, I write, and I try to leave every codebase quieter than I found it.</p>
      </div>
      <div className="chips">
        <span className="chip">TypeScript</span>
        <span className="chip">React</span>
        <span className="chip">Python</span>
        <span className="chip">Postgres</span>
        <span className="chip">AWS</span>
        <span className="chip">and way more</span>
      </div>
    </header>
  );
}
