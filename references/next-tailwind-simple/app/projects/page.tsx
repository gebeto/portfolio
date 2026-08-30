import { Projects } from "app/components/Projects";

export const metadata = {
  title: "Projects",
  description: "Check all of my works.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 mt-10 tracking-tighter">
        Projects
      </h1>

      <p className="mb-16">
        The list of project I was working at my free time. Includes a lot of
        different projects using Web, Embedded and way more other technologies
      </p>

      <Projects limit={0} />
    </section>
  );
}
