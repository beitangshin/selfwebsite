import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectItems } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return projectItems.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectItems.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(255,122,24,0.22),_transparent_45%),radial-gradient(circle_at_82%_18%,_rgba(96,165,250,0.14),_transparent_30%)]" />

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-8 lg:px-10">
        <div className="glass-panel rounded-[2rem] px-6 py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400">
                {project.category} / {project.year}
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                {project.title}
              </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/#projects" className="secondary-button">
                Back to projects
              </Link>
              {project.projectUrl ? (
                <a href={project.projectUrl} target="_blank" rel="noreferrer" className="secondary-button">
                  Open publication
                </a>
              ) : null}
              {project.repositoryUrl ? (
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="primary-button">
                  Open GitHub
                </a>
              ) : null}
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">{project.longDescription}</p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-4 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
        <div className="space-y-8">
          {project.heroImage ? (
            <div className="glass-panel overflow-hidden rounded-[2rem]">
              <div className="border-b border-white/10 px-5 py-4 font-mono text-xs uppercase tracking-[0.28em] text-stone-400">
                Project preview
              </div>
              <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.5rem] bg-[#f3eef7] shadow-[0_20px_60px_rgba(15,23,42,0.28)] aspect-[9/19.5]">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-contain"
                />
              </div>
            </div>
          ) : null}

          <article className="glass-panel rounded-[2rem] p-7">
            <p className="section-kicker">Overview</p>
            <p className="mt-5 text-lg leading-8 text-stone-300">{project.overview ?? project.shortDescription}</p>
          </article>

          {project.featureBullets?.length ? (
            <article className="glass-panel rounded-[2rem] p-7">
              <p className="section-kicker">What It Does</p>
              <div className="mt-5 grid gap-3 text-stone-200">
                {project.featureBullets.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ) : null}

          {project.codeLinks?.length ? (
            <article className="glass-panel rounded-[2rem] p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="section-kicker">Code View</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                    Key files you can open directly
                  </h2>
                </div>
                {project.repositoryUrl ? (
                  <a href={project.repositoryUrl} target="_blank" rel="noreferrer" className="secondary-button">
                    Repository root
                  </a>
                ) : null}
              </div>

              <div className="mt-6 grid gap-4">
                {project.codeLinks.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5 transition hover:border-white/30 hover:bg-white/7"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold text-white">{item.label}</h3>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-orange-200/80">
                        Open file
                      </span>
                    </div>
                    <p className="mt-3 font-mono text-xs text-stone-400">{item.path}</p>
                    <p className="mt-4 text-sm leading-7 text-stone-300">{item.description}</p>
                  </a>
                ))}
              </div>
            </article>
          ) : null}
        </div>

        <div className="space-y-6">
          <article className="glass-panel rounded-[2rem] p-7">
            <p className="section-kicker">Project Info</p>
            <div className="mt-5 grid gap-5">
              <div>
                <p className="text-sm text-stone-400">Role</p>
                <p className="mt-2 text-lg text-white">{project.role}</p>
              </div>
              <div>
                <p className="text-sm text-stone-400">Status</p>
                <p className="mt-2 text-lg text-white">{project.status}</p>
              </div>
              <div>
                <p className="text-sm text-stone-400">Repository</p>
                {project.repositoryUrl ? (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex text-base text-orange-200 transition hover:text-orange-100"
                  >
                    {project.repositoryUrl}
                  </a>
                ) : (
                  <p className="mt-2 text-lg text-white">Private project</p>
                )}
              </div>
              {project.projectUrl ? (
                <div>
                  <p className="text-sm text-stone-400">Publication</p>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex text-base text-orange-200 transition hover:text-orange-100"
                  >
                    {project.projectUrl}
                  </a>
                </div>
              ) : null}
            </div>
          </article>

          <article className="glass-panel rounded-[2rem] p-7">
            <p className="section-kicker">Stack</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </article>

          {project.architectureBullets?.length ? (
            <article className="glass-panel rounded-[2rem] p-7">
              <p className="section-kicker">Architecture</p>
              <div className="mt-5 grid gap-3 text-stone-200">
                {project.architectureBullets.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ) : null}

          <article className="glass-panel rounded-[2rem] p-7">
            <p className="section-kicker">Highlights</p>
            <div className="mt-5 grid gap-3 text-stone-200">
              {project.highlights.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
