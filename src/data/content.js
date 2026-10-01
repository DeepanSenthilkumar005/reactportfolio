// Everything the site says lives here. Edit words here, not in components.
// Fields left as null are optional — the components skip them rather than
// render an empty paragraph.

export const profile = {
  name: "Deepan S",
  location: "Bengaluru",
  email: "workwithdeepan@gmail.com",
  phone: "+91 94424 79225",
  github: "https://github.com/DeepanSenthilkumar005",
  linkedin: "https://www.linkedin.com/in/deepan-senthilkumar",
  whatsapp: "https://wa.me/919442479225",
  photo: "/photo.jpg",
};

export const hero = {
  greeting: "Hey — I'm Deepan.",
  lines: [
    "I'm a software engineer in Bengaluru. For the last six months I built payments, search and caching for Dendo, a delivery platform live on Android and iOS.",
    "Before that: Spring Boot and Vue at Restaurantware, React at Hertzworkz, and a B.E. in Computer Science finished earlier this year.",
  ],
};

// The lead piece of work — the one with pictures.
export const feature = {
  kicker: "Most recently",
  title: "Dendo",
  subtitle: "Food and parcel delivery · Apr — Sep 2026",
  body: [
    "Dendo is a food and parcel delivery platform, live on both stores. I worked across all of it — Flutter app on the front, Laravel and MySQL behind it — and put 680+ commits into production in six months.",
    "The part I'm proudest of is payments: the Cashfree integration, the deep link that brings you back into the app after paying, and the job that expires orders nobody finished. The rest was speed — caching that cut ~40 queries out of every home-screen load, zone rules for cash on delivery, and restaurant search by road distance instead of straight-line. I also helped move our deploys onto AWS with GitHub Actions and Docker.",
  ],
  brand: {
    logo: "/dendo-logo.png",
    tagline: "delivered daily",
    platforms: "Android and iOS",
  },
  // Real screenshots from the shipped app.
  shots: [
    { src: "/dendo-1.jpg", label: "Home" },
    { src: "/dendo-3.jpg", label: "Cart and payment" },
  ],
  links: [
    { label: "Get it on Google Play", href: "https://play.google.com/store/apps/details?id=com.dendo.update.user" },
    { label: "Download on the App Store", href: "https://apps.apple.com/in/app/dendo-food-everything-app/id6754545236" },
  ],
};

export const work = [
  {
    title: "Police Event Coordination Portal",
    year: "2025",
    blurb:
      "During the festival, 27 police stations coordinate by radio and nobody has the full picture. I built a portal that put every unit on one shared map, with role-based access so a station sees its own ground and control sees all of it.",
    // One sentence on what was actually hard here would lift this a lot.
    hard: null,
    stack: ["React", "Leaflet.js", "Bootstrap"],
    image: null,
    link: null,
  },
  {
    title: "Bus360 — scheduling and route management",
    year: "2025",
    blurb:
      "A system that automates bus schedules and crew assignments across depots, with role-based dashboards, email alerts and routes drawn live on a map. My final-year project, and the first full-stack thing I built where the data model mattered more than the UI.",
    hard: null,
    stack: ["React", "Node.js", "MongoDB", "Leaflet.js"],
    image: "bus360",
    link: "https://github.com/DeepanSenthilkumar005/MiniProject",
  },
];

export const jobs = [
  {
    company: "Restaurantware",
    role: "Full-stack Java developer, intern",
    period: "Feb — Apr 2026",
    blurb:
      "Built the Request Catalog module — Spring Boot REST APIs underneath, Vue and TypeScript on top — with MySQL for storage, Elasticsearch for search and ActiveMQ for the messaging between them. First time I'd used any of those three in anger.",
  },
  {
    company: "Hertzworkz",
    role: "React developer, intern",
    period: "Sep 2024 — Jan 2025",
    blurb:
      "Shipped three web applications in five months, including the company's own site, and wired them to Node and Express APIs. This is where I learned to actually finish things.",
  },
];

export const now = {
  // Why you started writing software, in your own words — the one thing here
  // that can't be read off a CV. Fill it in and it renders first.
  origin: null,
  study:
    "I finished my B.E. in Computer Science at KSR College of Engineering, Tiruchengode, in 2026 with a CGPA of 7.54. Along the way I scored 100% on the hands-on programming section of the TCS NQT and came second at Code Relay at Karpagam.",
  reading:
    "I work AI-assisted — Claude Code sits next to IntelliJ on my CV, because pretending otherwise would be silly. Choosing what to build and judging whether it actually worked is still the job.",
  between:
    "I'm between roles at the moment and using the time on purpose: reading back through the Laravel codebase I spent six months shipping into, properly this time, and learning the AWS side I only ever touched through a pipeline.",
};

export const skills = [
  {
    label: "Day to day",
    items: ["Java", "Spring Boot", "React", "JavaScript", "TypeScript", "Node.js", "Express", "MySQL", "REST APIs", "Git"],
  },
  {
    label: "Comfortable",
    items: ["Vue.js", "Tailwind", "MongoDB", "Laravel", "Flutter", "Elasticsearch", "ActiveMQ", "JUnit", "Jest", "Postman"],
  },
  {
    label: "Working knowledge",
    items: ["AWS (EC2, RDS, S3)", "Docker", "Nginx", "GitHub Actions", "Firebase"],
  },
];
