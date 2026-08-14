const projects = [
  {
    slug: "web-app",
    caseNumber: 1,
    title: "Hoomie",
    logos: [
      `${import.meta.env.BASE_URL}hoomielogo.svg`,
      `${import.meta.env.BASE_URL}hoomielogo1.svg`,
    ],
    year: "2. Semester - Web App",
    summary:
      " En webapp, der hjælper med at organisere hvedagen og holde styr på aktiviteter.",
    description: "Placeholder (ved ik hvad der skal stå endnu).",
    tags: ["React", "Supabase", "Animationsdesign"],
    image: `${import.meta.env.BASE_URL}Hoomiemockup.svg`,
    links: [
      {
        label: "Live site",
        href: "https://sebbbenator.github.io/hoomie/",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/Sebbbenator/hoomie",
      },
    ],
  },
  {
    slug: "customer-experience",
    caseNumber: 2,
    title: "WANTED Archives",
    logos: [
      `${import.meta.env.BASE_URL}wantedlogo.svg`,
      `${import.meta.env.BASE_URL}wantedlogo1.svg`,
      `${import.meta.env.BASE_URL}wantedlogo2.svg`,
    ],
    year: "2. Semester - Customer Experience",
    summary:
      "En hjemmeside, der designet til specifik målgruppe, med fokus på idensitet og brugeroplevelse.",
    description: "Placeholder (ved ik hvad der skal stå endnu)",
    tags: ["Design", "Brugeroplevelse", "Proces"],
    image: `${import.meta.env.BASE_URL}wantedmockup.svg`,
    links: [
      {
        label: "Live site",
        href: "https://magecties.github.io/customer-experience-exam/",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/magecties/customer-experience-exam",
      },
    ],
  },
  {
    slug: "exam-project",
    caseNumber: 3,
    title: "Optimering af Akvarie projekt",
    logos: [
      `${import.meta.env.BASE_URL}storcenterNordLogo.svg`,
      `${import.meta.env.BASE_URL}nemologo.png`,
    ],
    year: "1. Semester - Exam Project",
    summary:
      "Optimering af tidligere projekt, fokus på semantisk struktur, design og brugeroplevelse.",
    description: "Placeholder (ved ik hvad der skal stå endnu).",
    tags: ["Design", "Semantisk struktur", "Optimering"],
    image: `${import.meta.env.BASE_URL}akvariemockup.svg`,
    links: [
      {
        label: "Live site",
        href: "https://sebbbenator.github.io/exd-projekt-eksamen/",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/Sebbbenator/exd-projekt-eksamen",
      },
    ],
  },
  {
    slug: "boardbase",
    caseNumber: 4,
    title: "Boardbase",
    year: "2025 - hjemmeprojekt",
    summary:
      "Hjemmeprojekt til at holde styr på brætspil, samt få overblik over hvad man vil spille.",
    description: "Placeholder (ved ik hvad der skal stå endnu).",
    tags: ["Vercel", "Supabase", "Organisering"],
    image: `${import.meta.env.BASE_URL}boardbasemockup.svg`,
    links: [
      {
        label: "Live site",
        href: "https://boardbase-rose.vercel.app/",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/Sebbbenator/Boardbase",
      },
    ],
  },
  {
    slug: "homebase",
    caseNumber: 5,
    title: "Homebase",
    year: "2025 - hjemmeprojekt",
    summary:
      "Hjemmeprojekt til at holde styr på hjemmeopgaver, samt fordeling af opgaver.",
    description: "Placeholder (ved ik hvad der skal stå endnu).",
    tags: ["Vercel", "Supabase", "Struktur"],
    image: `${import.meta.env.BASE_URL}homebasemockup.svg`,
    links: [
      {
        label: "Live site",
        href: "https://homebase-ruby.vercel.app/dashboard",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/Sebbbenator/Homebase",
      },
    ],
  },
];

export default projects;
