import { BlogPosts } from "app/components/BlogPosts";
import { Projects } from "./components/Projects";
import Image from "next/image";
import avatarJpg from "./avatar.jpg";

export default function Page() {
  return (
    <section>
      <div>
        <Image
          alt="avatar"
          src={avatarJpg}
          width={60}
          className="rounded-full mb-2"
        />
      </div>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Yaroslav <br />
        Nychkalo
      </h1>
      <p className="mb-20">
        I'm a Yaroslav, enthusiast and tab advocate, finding unmatched
        efficiency in Vim's keystroke commands and tabs' flexibility for
        personal viewing preferences. This extends to my support for static
        typing, where its early error detection ensures cleaner code, and my
        preference for dark mode, which eases long coding sessions by reducing
        eye strain.
      </p>

      <div className="mb-24">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Blog posts
        </h1>
        <BlogPosts />
      </div>

      <div className="mb-30">
        <h1 className="mb-6 text-2xl font-semibold tracking-tighter">
          Projects
        </h1>
        <Projects />
      </div>
    </section>
  );
}
