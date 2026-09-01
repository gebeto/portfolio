import { Thoughts } from "app/components/Thoughts";

export const metadata = {
  title: "Thoughts",
  description: "Read my thoughts.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Thoughts
      </h1>

      <p className="mb-16">All my thoughts extracted into articles</p>

      <Thoughts />
    </section>
  );
}
