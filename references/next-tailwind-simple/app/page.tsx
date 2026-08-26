import { BlogPosts } from 'app/components/BlogPosts'
import { Projects } from './components/Projects'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Yaroslav Nychkalo
      </h1>
      <p className="mb-4">
        I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.
      </p>

      <div className="my-8">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Projects
        </h1>
        <Projects />
      </div>

      <div className="my-8">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Blog posts
        </h1>
        <BlogPosts />
      </div>
    </section>
  )
}
