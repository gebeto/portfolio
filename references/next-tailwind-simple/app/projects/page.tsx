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
      <Projects limit={0} />
    </section>
  );
}
