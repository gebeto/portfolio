import { Thoughts } from "app/components/Thoughts";
import { Projects } from "./components/Projects";
import Image from "next/image";
import avatarJpg from "./avatar.jpg";

export default function Page() {
  return (
    <section>
      <div className="w-section">
        <Image
          alt="avatar"
          src={avatarJpg}
          width={60}
          className="rounded-full mb-2"
        />
      </div>
      <h1 className="w-section mb-8 text-2xl font-semibold tracking-tighter">
        Yaroslav <br />
        Nychkalo
      </h1>
      {/* <p className="w-section mb-20">
        I'm a Yaroslav, enthusiast and tab advocate, finding unmatched
        efficiency in Vim's keystroke commands and tabs' flexibility for
        personal viewing preferences. This extends to my support for static
        typing, where its early error detection ensures cleaner code, and my
        preference for dark mode, which eases long coding sessions by reducing
        eye strain.
      </p> */}
      <p className="w-section mb-20">
        I am a Full-Stack Software Engineer, love to find simple solutions for
        hard problems. My passion is to build solid/bulletproof UI that
        comfortable to use, and backend that never fail down. I'm creating well
        polished products that works flawlessly
      </p>

      <h1 className="w-section mb-8 text-2xl font-semibold tracking-tighter">
        Thoughts
      </h1>
      <div className="w-section mb-24">
        <Thoughts />
      </div>

      <h1 className=" w-section mb-6 text-2xl font-semibold tracking-tighter">
        Projects
      </h1>
      <div className="w-section-wide mb-30">
        <Projects limit={6} />
      </div>
    </section>
  );
}
