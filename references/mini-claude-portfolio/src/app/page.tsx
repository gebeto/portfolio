import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { NowSection } from "@/components/home/NowSection";
import { WritingSection } from "@/components/home/WritingSection";
import { BlogSection } from "@/components/home/BlogSection";
import { ReposSection } from "@/components/home/ReposSection";
import { ContactSection } from "@/components/home/ContactSection";
import { getAllProjects, getProjectTags } from "@/lib/content";

export default function Home() {
  const projects = getAllProjects();
  const projectTags = getProjectTags();
  return (
    <div className="page">
      <TopBar isHome />

      <Hero />

      <NowSection />

      <ProjectsSection projects={projects} tags={projectTags} />

      <WritingSection />

      <BlogSection />

      <ReposSection />

      <ContactSection />

      <Footer variant="home" />
    </div>
  );
}
