export const PROFILE = {
  name: "PRAJWAL",
  tagline: "Aspiring IT Professional · India",
  focus: ["Linux", "Networking", "Technical Support", "Hardware Troubleshooting"],
  email: "prajwalnithyananda@gmail.com",
  github: "https://github.com/prajwaldark",
  linkedin: "https://www.linkedin.com/in/prajwaldark/",
  phone: "+91 8904547424",
};

export const ORIGIN = [
  {
    title: "Early Curiosity",
    body: "Drawn to computers, networking and electronics from a young age — taking devices apart just to understand how they tick.",
    tag: "ORIGIN",
    color: "red",
  },
  {
    title: "Hands-On Learning",
    body: "Rooted Android devices, flashed custom ROMs, distro-hopped through Fedora, Debian and Slackware, and tuned home networks end-to-end.",
    tag: "TRAINING",
    color: "blue",
  },
  {
    title: "Current Mission",
    body: "Building a career in Technical Support, IT Operations, Linux Administration, Networking and Hardware Diagnostics.",
    tag: "MISSION",
    color: "purple",
  },
] as const;

export const SKILLS = [
  {
    category: "Operating Systems",
    color: "red",
    items: [
      { name: "Linux (general)", level: 85 },
      { name: "Fedora", level: 80 },
      { name: "Debian", level: 80 },
      { name: "Slackware", level: 65 },
      { name: "Windows", level: 85 },
    ],
  },
  {
    category: "Technical Support",
    color: "blue",
    items: [
      { name: "Desktop Troubleshooting", level: 85 },
      { name: "Software Installation", level: 90 },
      { name: "Hardware Diagnostics", level: 80 },
      { name: "Printer Support", level: 75 },
      { name: "End-User Support", level: 85 },
    ],
  },
  {
    category: "Networking",
    color: "purple",
    items: [
      { name: "DNS Configuration", level: 75 },
      { name: "Router Configuration", level: 80 },
      { name: "Wi-Fi Troubleshooting", level: 85 },
      { name: "IP Addressing", level: 80 },
      { name: "Network Diagnostics", level: 78 },
    ],
  },
  {
    category: "Hardware",
    color: "yellow",
    items: [
      { name: "Laptop Troubleshooting", level: 82 },
      { name: "PC Assembly", level: 88 },
      { name: "Component Replacement", level: 80 },
      { name: "BIOS Updates", level: 72 },
    ],
  },
  {
    category: "Development",
    color: "blue",
    items: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 65 },
      { name: "Python", level: 60 },
      { name: "Git", level: 75 },
    ],
  },
] as const;

export const PROJECTS = [
  {
    title: "Linux Administration Lab",
    universe: "EARTH-1138",
    color: "red",
    body: "Personal multi-distro testing environment for learning Fedora, Debian and Slackware — package management, services, and system troubleshooting.",
    tags: ["Linux", "Fedora", "Debian", "Slackware"],
  },
  {
    title: "Android Modification Projects",
    universe: "EARTH-808",
    color: "blue",
    body: "Hands-on work with rooting, custom ROM flashing, kernel tweaks and performance optimization across multiple devices.",
    tags: ["Android", "Root", "Custom ROMs", "Optimization"],
  },
  {
    title: "Network Troubleshooting Toolkit",
    universe: "EARTH-65",
    color: "purple",
    body: "Practical playbook for resolving DNS issues, connectivity problems and wireless misconfigurations on real home and small-office networks.",
    tags: ["DNS", "Wi-Fi", "Diagnostics"],
  },
  {
    title: "Home Sphere",
    universe: "EARTH-0",
    color: "yellow",
    body: "An Android project built with Flutter and Dart to track subscriptions and appliance services in one place.",
    tags: ["Flutter", "Dart", "Android", "Subscriptions"],
  },
] as const;

export const TIMELINE = [
  {
    when: "Ongoing",
    title: "Technical Skills Development",
    body: "Self-directed study across Linux administration, networking, hardware support and end-user troubleshooting.",
    color: "red",
  },
  {
    when: "College",
    title: "General Secretary — Trekking Society",
    body: "Led event coordination, team management, member communication and organization for the college trekking society.",
    color: "blue",
  },
] as const;

export const CERTS = [
  { title: "AWS Cloud Internship", note: "☁️ 90 Hours – Cloud Infrastructure & EC2", color: "yellow" },
  { title: "Cybersecurity Hackathon", note: "🔐 Vulnerability Assessment & Exploitation", color: "red" },
  { title: "IBM SkillsBuild AI", note: "⭐ Grade A+ – Artificial Intelligence Program", color: "blue" },
  { title: "Nike UI/UX Design", note: "🏆 First Prize – Figma Design Competition", color: "purple" },
] as const;

export const CERT_IMAGES = [
  /* ── 1. INTERNSHIP ── */
  {
    id: 1,
    src: "/certificates/intern.png",
    title: "AWS Cloud Computing Internship",
    issuer: "Elevate Pro",
    date: "Dec 2025 – Jan 2026",
    color: "yellow" as NeonColor,
    achievement: "90 Hours Completed",
    description: "Completed a 90-hour internship covering cloud infrastructure, EC2, virtual servers, load balancing, auto scaling, cloud storage and AWS architecture.",
    portrait: true,
    rotation: 90,
  },
  /* ── 2–3. HACKATHONS ── */
  {
    id: 2,
    src: "/certificates/spnt.png",
    title: "Cybersecurity Hackathon",
    issuer: "Sapientia '26 – Sapient College",
    date: "2026",
    color: "red" as NeonColor,
    achievement: "",
    description: "Participated in a cybersecurity challenge involving vulnerability assessment, security analysis, exploitation concepts and OS security comparison.",
    portrait: false,
  },
  {
    id: 3,
    src: "/certificates/amt.png",
    title: "Byte Trails Hackathon",
    issuer: "Sathgamaya 2025 – Amrita Vishwa Vidyapeetham",
    date: "2025",
    color: "purple" as NeonColor,
    achievement: "",
    description: "Participated in a competitive hackathon solving logical challenges and programming problems under time constraints without internet access.",
    portrait: false,
  },
  /* ── 4–7. PRIZE-WINNERS & TECHNICAL PROGRAMS ── */
  {
    id: 4,
    src: "/certificates/ibm.png",
    title: "IBM SkillsBuild – Artificial Intelligence",
    issuer: "IBM SkillsBuild Advanced IT Skills Program",
    date: "2025",
    color: "blue" as NeonColor,
    achievement: "Grade: A+",
    description: "Completed IBM's AI training covering fundamentals of Artificial Intelligence, Machine Learning basics, data preparation, model training and practical AI use cases.",
    portrait: false,
  },
  {
    id: 5,
    src: "/certificates/sbrr.png",
    title: "IoT Smart Drip Irrigation System",
    issuer: "National Science Day 2025 – SBRR Mahajana First Grade College",
    date: "Feb 2025",
    color: "red" as NeonColor,
    achievement: "First Prize – Science Model Exhibition",
    description: "Designed an IoT-based Smart Drip Irrigation System using ESP32, soil moisture, temperature and AQI sensors with Blynk IoT Platform for remote monitoring and automated irrigation.",
    portrait: false,
  },
  {
    id: 6,
    src: "/certificates/shesha.png",
    title: "Nike Experience Center UI/UX Design",
    issuer: "Shreshta 2026 – Seshadripuram Degree College",
    date: "2026",
    color: "yellow" as NeonColor,
    achievement: "First Prize",
    description: "Designed a Nike Experience Center in Figma without AI tools, focusing on storytelling, brand identity, visual hierarchy and immersive user experience.",
    portrait: false,
  },
  {
    id: 7,
    src: "/certificates/mrit.png",
    title: "Venture Forge",
    issuer: "MRITNOVUS 2026 – Mysuru Royal Institute of Technology",
    date: "2026",
    color: "blue" as NeonColor,
    achievement: "First Place",
    description: "Won First Place by developing a brand from scratch based on a problem statement and delivering a complete business pitch with marketing and product positioning.",
    portrait: false,
  },
  /* ── 8–10. COMPETITIONS & WORKSHOPS ── */
  {
    id: 8,
    src: "/certificates/jss.png",
    title: "AI Quiz Competition",
    issuer: "SparkTechthra 2026 – JSS College for Women",
    date: "2026",
    color: "purple" as NeonColor,
    achievement: "Second Place",
    description: "Secured 2nd Place in an AI-focused quiz competition testing knowledge of Machine Learning, LLMs, AI history and emerging technologies.",
    portrait: false,
  },
  {
    id: 9,
    src: "/certificates/nie.png",
    title: "Mastering AI: Tools & Techniques",
    issuer: "NIE First Grade College",
    date: "2025",
    color: "blue" as NeonColor,
    achievement: "",
    description: "Attended a state-level AI workshop covering generative AI, AI productivity tools, prompt engineering and responsible AI practices.",
    portrait: false,
  },
  {
    id: 10,
    src: "/certificates/agas.png",
    title: "Adobe Creative Skilling Program",
    issuer: "Agastya International Foundation × Adobe",
    date: "2025",
    color: "yellow" as NeonColor,
    achievement: "",
    description: "Completed an intensive Adobe Creative Suite workshop covering Photoshop, Illustrator, XD, Premiere Pro and creative design workflows.",
    portrait: false,
  },
  /* ── 11–12. BUSINESS & EXTRACURRICULAR ── */
  {
    id: 11,
    src: "/certificates/mmk.png",
    title: "Vyapar Utsav",
    issuer: "Prabhigyan 2025–26 – MMK & SDM Mahila Mahavidyalaya",
    date: "2025",
    color: "red" as NeonColor,
    achievement: "Second Prize",
    description: "Participated in a business strategy competition focused on entrepreneurship, marketing strategies, business model development and pitching.",
    portrait: false,
  },
  {
    id: 12,
    src: "/certificates/gsss.png",
    title: "Treasure Hunt Challenge",
    issuer: "GITA SAMHITA 2026 – GSSS Simha Subbamahalakshmi First Grade College",
    date: "2026",
    color: "purple" as NeonColor,
    achievement: "",
    description: "Participated in a state-level inter-collegiate Treasure Hunt testing analytical thinking, teamwork and problem-solving through campus-wide clues and challenges.",
    portrait: false,
  },
] as const;

export type NeonColor = "red" | "blue" | "purple" | "yellow";

export const NEON_CLASS: Record<NeonColor, { text: string; bg: string; ring: string; shadow: string }> = {
  red:    { text: "text-neon-red",    bg: "bg-neon-red",    ring: "ring-neon-red",    shadow: "shadow-[var(--shadow-neon-red)]" },
  blue:   { text: "text-neon-blue",   bg: "bg-neon-blue",   ring: "ring-neon-blue",   shadow: "shadow-[var(--shadow-neon-blue)]" },
  purple: { text: "text-neon-purple", bg: "bg-neon-purple", ring: "ring-neon-purple", shadow: "shadow-[var(--shadow-neon-purple)]" },
  yellow: { text: "text-neon-yellow", bg: "bg-neon-yellow", ring: "ring-neon-yellow", shadow: "shadow-[var(--shadow-neon-yellow)]" },
};
