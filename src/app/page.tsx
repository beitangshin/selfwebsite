import Link from "next/link";
import { experienceItems } from "@/data/experience";
import { profile } from "@/data/profile";
import { projectItems } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export default function Home() {
  const stats = [
    { label: "Experience", value: "8+ years" },
    { label: "Core Stack", value: "C++ + Python" },
    { label: "Delivery", value: "Code to vehicle" },
  ];

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,_rgba(255,122,24,0.22),_transparent_45%),radial-gradient(circle_at_18%_28%,_rgba(96,165,250,0.16),_transparent_34%)]" />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 lg:px-10">
        <header className="glass-panel sticky top-4 z-20 mb-10 flex items-center justify-between rounded-full px-5 py-3">
          <a href="#top" className="font-mono text-sm uppercase tracking-[0.3em] text-stone-200">
            {profile.initials}
          </a>
          <nav className="hidden gap-6 text-sm text-stone-300 md:flex">
            {profile.navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={profile.resumeUrl}
            download
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/8"
          >
            Resume
          </a>
        </header>

        <div id="top" className="grid flex-1 items-center gap-14 pb-10 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-stone-200">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
              {profile.availability}
            </div>

            <div className="space-y-6">
              <p className="font-mono text-sm uppercase tracking-[0.32em] text-stone-400">
                {profile.location}
              </p>
              <div className="space-y-2">
                <p className="text-lg text-stone-300 sm:text-xl">{profile.name}</p>
                <p className="font-mono text-sm uppercase tracking-[0.26em] text-orange-200/80">
                  {profile.title}
                </p>
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                {profile.heroHeadline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
                {profile.heroSummary}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="primary-button">
                View work
              </a>
              <a href={`mailto:${profile.email}`} className="secondary-button">
                Contact me
              </a>
              <a href={profile.coverLetterUrl} download className="secondary-button">
                Cover letter
              </a>
            </div>

            <dl className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="glass-panel rounded-3xl p-5">
                  <dt className="text-sm text-stone-400">{item.label}</dt>
                  <dd className="mt-3 text-3xl font-semibold text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <aside className="relative">
            <div className="absolute inset-0 -rotate-6 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.02))]" />
            <div className="glass-panel relative rounded-[2rem] p-8">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400">
                Professional snapshot
              </p>
              <div className="mt-8 grid gap-6">
                <div>
                  <p className="text-sm text-stone-400">Focus</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{profile.title}</p>
                </div>
                <div>
                  <p className="text-sm text-stone-400">Strengths</p>
                  <ul className="mt-3 space-y-3 text-stone-200">
                    {profile.strengths.map((strength) => (
                      <li key={strength} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-orange-300" />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <p className="text-sm text-stone-400">Currently interested in</p>
                  <p className="mt-2 text-base leading-7 text-stone-200">{profile.currentFocus}</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
        <div className="space-y-4">
          <p className="section-kicker">About</p>
          <h2 className="section-title">Systems engineering depth, validation discipline, and practical AI tooling.</h2>
        </div>
        <div className="glass-panel rounded-[2rem] p-8">
          <p className="max-w-3xl text-lg leading-8 text-stone-300">{profile.about}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {profile.highlights.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/4 p-5">
                <p className="text-sm text-stone-400">{item.label}</p>
                <p className="mt-2 text-base leading-7 text-stone-200">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">From algorithm work to simulator, HIL, and on-site vehicle validation.</h2>
          </div>
        </div>

        <div className="space-y-5">
          {experienceItems.map((item) => (
            <article key={`${item.company}-${item.period}`} className="glass-panel rounded-[2rem] p-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
                <div className="max-w-3xl">
                  <p className="font-mono text-xs uppercase tracking-[0.26em] text-stone-400">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.role} / {item.company}</h3>
                  <p className="mt-2 text-stone-300">{item.summary}</p>
                  <ul className="mt-5 grid gap-3 text-stone-200">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-72">
                  <p className="text-sm text-stone-400">Core stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Public projects and confidentiality-safe engineering work spanning autonomous systems, local-first AI, and reliable software delivery.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projectItems.map((project) => (
            <article key={project.id} className="project-card rounded-[2rem] p-7">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-orange-200/80">
                    {project.category} / {project.year}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                </div>
                {project.featured ? (
                  <span className="rounded-full border border-orange-200/20 bg-orange-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-orange-100">
                    Featured
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-stone-300">{project.shortDescription}</p>
              <p className="mt-4 text-sm leading-7 text-stone-400">{project.longDescription}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-3 text-sm text-stone-200">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-300" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="primary-button" href={`/projects/${project.id}`}>
                  View project
                </Link>
                {project.repositoryUrl ? (
                  <a className="secondary-button" href={project.repositoryUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                ) : null}
                {project.demoUrl ? (
                  <a className="secondary-button" href={project.demoUrl} target="_blank" rel="noreferrer">
                    Live demo
                  </a>
                ) : null}
                {project.projectUrl ? (
                  <a className="secondary-button" href={project.projectUrl} target="_blank" rel="noreferrer">
                    Publication
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Languages, systems, and engineering practices I use to build and validate real products.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <article key={group.title} className="glass-panel rounded-[2rem] p-6">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-400">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-6 py-12 pb-20 lg:px-10">
        <div className="glass-panel rounded-[2.2rem] px-8 py-10">
          <p className="section-kicker">Contact</p>
          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="section-title">If you need someone who can build, test, and validate complex intelligent systems, let&apos;s talk.</h2>
              <p className="mt-4 text-lg leading-8 text-stone-300">{profile.contactBlurb}</p>
            </div>
            <div className="grid gap-3 text-base">
              <a href={`mailto:${profile.email}`} className="contact-link">
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} className="contact-link">
                {profile.phone}
              </a>
              {profile.githubUrl ? (
                <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="contact-link">
                  GitHub
                </a>
              ) : null}
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="contact-link">
                LinkedIn
              </a>
              <a href={profile.resumeUrl} download className="contact-link">
                Download resume
              </a>
              <a href={profile.coverLetterUrl} download className="contact-link">
                Download cover letter
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
