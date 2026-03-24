import Link from "next/link";

export default function WhatMorePage() {
  const deliveryItems = [
    "Build practical apps and internal tools even when the stack is not my historical specialty.",
    "Move from requirement to working software quickly by combining engineering judgment with strong AI-tool usage.",
    "Work across algorithm design, system integration, testing, simulation, and real deployment constraints.",
    "Translate complex technical goals into reliable execution, especially in engineering-heavy products.",
  ];

  const strengths = [
    "Deep autonomous-systems and embedded-engineering background.",
    "Strong C++ and Python foundation for production software, tooling, and applied AI workflows.",
    "Solid understanding of sequence modeling, attention mechanisms, and the ideas behind modern large-model systems.",
    "Practical use of AI tools to accelerate development, research, debugging, and product iteration.",
  ];

  const positioning = [
    "I do not position myself as a specialist in Java or TypeScript-first frontend engineering.",
    "I can still build useful mobile apps and websites when the product needs it, as this portfolio and my Android work show.",
    "My strongest value is broader engineering depth: systems thinking, algorithmic understanding, validation discipline, and the ability to ship under real constraints.",
  ];

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(255,122,24,0.22),_transparent_45%),radial-gradient(circle_at_18%_24%,_rgba(96,165,250,0.16),_transparent_30%)]" />

      <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-8 lg:px-10">
        <div className="glass-panel rounded-[2rem] px-6 py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="section-kicker">Beyond Stack Labels</p>
              <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                I haven&apos;t built my career around Java, TypeScript, or frontend-first stacks.
              </h1>
            </div>
            <Link href="/" className="secondary-button">
              Back to home
            </Link>
          </div>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-stone-300">
            My background is built around autonomous systems, embedded software, industrial engineering, applied AI,
            and validation in demanding real-world environments. That is where I bring the most depth. Even so, I can
            build mobile apps and websites when needed, and I use modern AI tools effectively to move faster from idea
            to working result.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-4 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_auto_0.95fr] lg:items-stretch">
        <article className="glass-panel rounded-[2rem] p-7">
          <p className="section-kicker">My Positioning</p>
          <div className="mt-5 grid gap-3 text-stone-200">
            {positioning.map((item) => (
              <div key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </article>

        <div className="flex items-center justify-center">
          <div className="but-badge">
            <span className="but-badge-kicker">BUT</span>
            <span className="but-badge-text">I can still deliver value</span>
          </div>
        </div>

        <article className="glass-panel rounded-[2rem] p-7">
          <p className="section-kicker">What I Can Deliver</p>
          <div className="mt-5 grid gap-3 text-stone-200">
            {deliveryItems.map((item) => (
              <div key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-sky-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </article>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
        <article className="glass-panel rounded-[2rem] p-7">
          <p className="section-kicker">Why This Matters</p>
          <p className="mt-5 text-lg leading-8 text-stone-300">
            Many teams do not just need a framework specialist. They need someone who can understand a difficult
            technical problem, learn what is needed, choose the right tools, and push the work to a usable outcome.
            That is the role I fill best.
          </p>
          <p className="mt-5 text-lg leading-8 text-stone-300">
            I bring mature engineering habits from safety-relevant and production-focused environments: structured
            thinking, validation discipline, debugging patience, and a strong sense of responsibility for whether the
            solution actually works.
          </p>
        </article>

        <article className="glass-panel rounded-[2rem] p-7">
          <p className="section-kicker">What More Can I Do?</p>
          <div className="mt-5 grid gap-3 text-stone-200">
            {strengths.map((item) => (
              <div key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
            <p className="text-sm text-stone-400">Short answer</p>
            <p className="mt-3 text-base leading-7 text-stone-200">
              If you need someone who can combine strong engineering fundamentals, real-world delivery experience, and
              modern AI-assisted execution, I can contribute far beyond a single language label.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
