import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import portraitAsset from "@/assets/hadassah-portrait.jpg.asset.json";
import { TaskOrganizer } from "@/components/TaskOrganizer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hadassah Mphohoni — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Hadassah Mphohoni, Data Analyst & Professional Foundation Specialist turning insights into actionable results.",
      },
      { property: "og:title", content: "Hadassah Mphohoni — Data Analyst Portfolio" },
      {
        property: "og:description",
        content:
          "Data analytics projects, skills, education and experience by Hadassah Mphohoni, based in Gauteng, South Africa.",
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "tasks", label: "Tasks" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border frosted-nav">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <a href="#home" className="min-w-0 truncate text-lg font-bold tracking-tight">
          Hadassah M.
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="shrink-0 rounded-full border border-border p-2 text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-ivory px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

const SKILLS = [
  { title: "Data & Technical", items: ["Data Analytics", "Problem Solving", "Data Interpretation", "Reporting"] },
  { title: "Productivity Tools", items: ["Microsoft Excel (Advanced)", "Google Workspace (Docs, Sheets)"] },
  { title: "Collaboration Apps", items: ["Microsoft Teams", "Zoom"] },
  {
    title: "AI & Machine Learning",
    items: [
      "AI Workflows",
      "Artificial Intelligence",
      "Generative AI",
      "Model Training",
      "Responsible AI",
      "AI Enablement",
      "AI Literacy",
      "AI/ML",
      "Human Machine Interfaces",
      "Prompt Engineering",
      "Large Language Modeling",
    ],
  },
  {
    title: "Verified Certifications",
    items: ["AI Foundations", "Data Analytics", "Professional Foundations"],
  },
];

const STRENGTHS = [
  { label: "Time Management", value: 90 },
  { label: "Teamwork", value: 88 },
  { label: "Leadership & Execution", value: 85 },
];

const PROJECTS = [
  {
    title: "Customer Data Analytics & Insights Dashboard",
    description:
      "End-to-end data analysis identifying operational bottlenecks and performance KPIs with actionable recommendations.",
    tags: ["Excel", "Data Analytics", "Google Sheets"],
  },
  {
    title: "Operational Productivity & Task Workflow System",
    description:
      "Interactive workflow system designed to streamline team communication, task tracking, and milestone delivery.",
    tags: ["Productivity", "Process Automation", "Teams"],
  },
  {
    title: "Digital Foundations & Team Collaboration Hub",
    description:
      "Integrated collaboration portal structuring remote team workflows and documentation protocols.",
    tags: ["Google Workspace", "Zoom", "Documentation"],
  },
];

const EDUCATION = [
  {
    title: "Data Analytics Program",
    issuer: "ALX Africa",
    meta: "Certificate ID: 9H3s62pmyG · September 2025",
    focus:
      "6-Month Intensive Programme in Data Analytics with Professional Development Skills for the Digital Age.",
  },
  {
    title: "Professional Foundations",
    issuer: "ALX Africa",
    meta: "Certificate ID: 2nyXE96ZH7 · June 2025",
    focus: "Professional Development Skills for the Digital Age.",
  },
  {
    title: "High School Matric",
    issuer: "Lethulwazi Comprehensive School",
    meta: "2020",
    focus: "National Senior Certificate.",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main className="pt-20">
        {/* HERO */}
        <section id="home" className="bg-ivory">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full border border-border bg-background px-4 py-1.5 text-xs text-muted-foreground">
                👋 Welcome to my portfolio.
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
                Hadassah Mphohoni
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                I am an emerging data analyst &amp; AI practitioner — transforming raw data into
                actionable insights and leveraging generative AI workflows to solve real-world
                problems.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="/cv-hadassah-mphohoni.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Get in Touch
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-full bg-card p-3 shadow-soft ring-1 ring-border">
                <img
                  src={portraitAsset.url}
                  alt="Portrait of Hadassah Mphohoni"
                  width={1024}
                  height={1024}
                  className="h-64 w-64 rounded-full object-cover object-[50%_30%] sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-14">
            <SectionHeading eyebrow="Introduction" title="About Me" />
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
              I am a determined, detail-oriented, and open-minded professional seeking to contribute
              significantly to organizational growth. With a strong background in data analytics and
              digital-age professional development, I excel both as an independent problem-solver and
              within collaborative teams to drive impactful solutions.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="bg-ivory">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <SectionHeading eyebrow="Capabilities" title="Skills" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SKILLS.map((group) => (
                <div
                  key={group.title}
                  className="rounded-3xl border border-border bg-background p-7 shadow-soft"
                >
                  <h3 className="text-base font-semibold">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((i) => (
                      <li
                        key={i}
                        className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="rounded-3xl border border-border bg-background p-7 shadow-soft md:col-span-2 lg:col-span-3">
                <h3 className="text-base font-semibold">Core Strengths</h3>
                <div className="mt-5 grid gap-5 sm:grid-cols-3">
                  {STRENGTHS.map((s) => (
                    <div key={s.label}>
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="min-w-0 truncate text-sm text-foreground">{s.label}</span>
                        <span className="shrink-0 text-xs text-muted-foreground">{s.value}%</span>
                      </div>
                      <div className="mt-2 h-1.5 rounded-full bg-card">
                        <div
                          className="h-1.5 rounded-full bg-primary"
                          style={{ width: `${s.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <SectionHeading eyebrow="Selected work" title="Featured Projects" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="flex flex-col rounded-3xl border border-border bg-background p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-card px-3 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* TASKS */}
        <section id="tasks" className="bg-ivory">
          <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
            <SectionHeading eyebrow="Interactive" title="Task & Project Organizer" />
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
              A working productivity tool — your tasks are saved in this browser.
            </p>
            <div className="mt-10">
              <TaskOrganizer />
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <SectionHeading eyebrow="Credentials" title="Education & Certifications" />
          <ol className="mt-10 border-l border-border pl-6 sm:pl-10">
            {EDUCATION.map((e) => (
              <li key={e.title} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border border-border bg-primary sm:-left-[2.9rem]" />
                <h3 className="text-lg font-semibold">{e.title}</h3>
                <p className="mt-1 text-sm text-foreground">{e.issuer}</p>
                <p className="mt-1 text-xs text-muted-foreground">{e.meta}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {e.focus}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="bg-ivory">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <SectionHeading eyebrow="Journey" title="Work Experience" />
            <div className="mt-10 rounded-3xl border border-border bg-background p-8 shadow-soft sm:p-12">
              <p className="text-sm leading-relaxed text-muted-foreground">
                I am currently an emerging professional focused on building hands-on
                experience through data analytics projects, AI workflows, and
                professional development programmes. While I do not have formal work
                experience yet, I am actively applying my skills through real-world
                projects and welcome opportunities to contribute and grow.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-border bg-ivory">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <SectionHeading eyebrow="Contact" title="Let's Connect" />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <a
                href="mailto:hadassahmphohoni06@gmail.com"
                className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-2xl border border-border bg-background p-5 transition-colors hover:bg-card"
              >
                <Mail className="h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="min-w-0 truncate text-sm">hadassahmphohoni06@gmail.com</span>
              </a>
              <a
                href="tel:+27684903907"
                className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-2xl border border-border bg-background p-5 transition-colors hover:bg-card"
              >
                <Phone className="h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="min-w-0 truncate text-sm">+27 68 490 3907</span>
              </a>
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-2xl border border-border bg-background p-5">
                <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="min-w-0 truncate text-sm">Gauteng, South Africa</span>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-border bg-background p-3 transition-colors hover:bg-accent"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-border bg-background p-3 transition-colors hover:bg-accent"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <footer className="border-t border-border">
            <p className="mx-auto max-w-6xl px-5 py-8 text-xs text-muted-foreground sm:px-8">
              © 2026 Hadassah Mphohoni. All rights reserved.
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
}
