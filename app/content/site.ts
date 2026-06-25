// Central content for the Eagle Pathway marketing site.
// Scholarship guidance + academic tutoring for Ethiopian students.

export const site = {
  name: "Eagle Pathway",
  tagline: "From the classroom to a global scholarship.",
  email: "info@eaglepathway.com",
  phone: "+251 912 345 678",
  location: "Addis Ababa, Ethiopia",
  // Native student & tutor apps — not published yet.
  app: {
    available: false,
    ios: "#",
    android: "#",
  },
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "70+", label: "University placements" },
  { value: "$1M+", label: "Scholarships secured" },
  { value: "4", label: "Continents reached" },
  { value: "94%", label: "On-time submissions" },
];

// Logos / wordmarks of universities students have been placed at.
export const placements = [
  "Oxford",
  "McGill",
  "UBC",
  "Edinburgh",
  "EPFL",
  "TU Munich",
];

export const features = [
  {
    title: "1-on-1 tutoring",
    description:
      "Personal tutors for SAT, IELTS and core subjects. Every plan is built around real diagnostics, not guesswork.",
    icon: "tutoring",
  },
  {
    title: "Scholarship strategy",
    description:
      "We shortlist the right universities and funded programs for your profile, then map every deadline and requirement.",
    icon: "strategy",
  },
  {
    title: "Application support",
    description:
      "Statement of purpose, essays and documents reviewed and packaged to a standard admissions officers respect.",
    icon: "documents",
  },
  {
    title: "Weekly tracking",
    description:
      "A shared roadmap with owners and milestones. Students and parents always know the current stage and next step.",
    icon: "tracking",
  },
  {
    title: "AI study guide",
    description:
      "An assistant inside the portal that answers questions, drafts SOP starting points and keeps you moving daily.",
    icon: "ai",
  },
  {
    title: "Mobile portal",
    description:
      "Track tasks, message your advisor and join sessions from the Eagle Pathway app — on any device.",
    icon: "mobile",
  },
];

export const steps = [
  {
    week: "Week 1",
    title: "Discovery",
    description:
      "We review your profile and goals, then recommend a realistic pathway and target list.",
  },
  {
    week: "Week 2",
    title: "Plan",
    description:
      "Your roadmap is finalized with milestones, task owners and a clear timeline.",
  },
  {
    week: "Weeks 3–6",
    title: "Execute",
    description:
      "Tutoring sessions run while your application materials are built and reviewed.",
  },
  {
    week: "Week 7+",
    title: "Submit",
    description:
      "Final quality checks, submission support and live status tracking through to a decision.",
  },
];

export const audiences = [
  {
    title: "High school students",
    description:
      "Grades 9–12 working to lift exam scores and build a competitive university application.",
  },
  {
    title: "Scholarship applicants",
    description:
      "Students targeting funded undergraduate and postgraduate places in Canada, the UK, the USA and Europe.",
  },
  {
    title: "Parents & families",
    description:
      "Families who want clear progress visibility, realistic timelines and lower application risk.",
  },
];

export const serviceTracks = [
  {
    title: "Tutoring Track",
    subtitle: "Academic & exam readiness",
    items: [
      "Subject-specific 1-on-1 tutoring",
      "SAT / IELTS study plans",
      "Diagnostics and progress feedback",
      "Exam strategy and mock reviews",
    ],
  },
  {
    title: "Scholarship Track",
    subtitle: "From shortlist to submission",
    items: [
      "University & scholarship shortlisting",
      "Statement of purpose structuring",
      "Document review and packaging",
      "Deadline and submission management",
    ],
  },
  {
    title: "Application Studio",
    subtitle: "Essays & documents",
    items: [
      "AI-assisted SOP drafts",
      "Essay structuring and revision rounds",
      "Reference and transcript guidance",
      "Final professional review",
    ],
  },
  {
    title: "Global Services",
    subtitle: "Payments & logistics",
    items: [
      "Application fee payments worldwide",
      "Tuition transfers in multiple currencies",
      "Secure, fast processing",
      "Receipts and confirmation tracking",
    ],
  },
];

export const pricing = [
  {
    name: "Starter",
    description: "A clear direction before committing to a full plan.",
    features: [
      "Profile assessment",
      "One strategy session",
      "Two follow-up checkpoints",
      "Basic document review",
    ],
    featured: false,
  },
  {
    name: "Growth",
    description: "Balanced tutoring and application support — our most chosen plan.",
    features: [
      "Full application roadmap",
      "SOP and essay support",
      "Weekly progress tracking",
      "Ongoing tutoring sessions",
      "Priority advisor response",
    ],
    featured: true,
  },
  {
    name: "Premium",
    description: "End-to-end execution with close oversight.",
    features: [
      "Everything in Growth",
      "Multiple application strategy",
      "Interview preparation",
      "Submission coordination",
      "Dedicated success manager",
    ],
    featured: false,
  },
];

export const team = [
  {
    name: "Tegegn T.",
    role: "Founder & Lead Advisor",
    initials: "TT",
    bio: "Master in Economic Policy & Data Analytics, University of Verona. 5+ years in international admissions consulting.",
  },
  {
    name: "Amanuel A.",
    role: "Executive Director",
    initials: "AA",
    bio: "BA in Economics, Addis Ababa University. Leads operations and partnerships.",
  },
  {
    name: "Genene T.",
    role: "Head of Education Technology",
    initials: "GT",
    bio: "Software engineer building the Eagle Pathway platform. SAT/IELTS and STEM specialist.",
  },
];

export const testimonials = [
  {
    quote:
      "I went from no plan to a fully funded offer. The weekly tracking kept me honest and the SOP feedback was a different level.",
    name: "Student placed at McGill",
    detail: "Scholarship Track",
  },
  {
    quote:
      "As a parent I finally had visibility. Every week I knew exactly where my daughter was in the process and what came next.",
    name: "Parent, Addis Ababa",
    detail: "Growth plan",
  },
  {
    quote:
      "The tutoring lifted my IELTS band enough to qualify for the programs I actually wanted. Worth every session.",
    name: "Student placed at Edinburgh",
    detail: "Tutoring Track",
  },
];

export const faqs = [
  {
    question: "Do you guarantee scholarship approval?",
    answer:
      "No ethical advisor can guarantee outcomes. We focus on application quality, strategy and consistency to maximize your real chances.",
  },
  {
    question: "Can students outside Addis Ababa work with you?",
    answer:
      "Yes. We support both in-person and fully remote workflows, including online tutoring and advisory sessions.",
  },
  {
    question: "How early should we start?",
    answer:
      "Ideally 6–12 months before deadlines. We also run accelerated plans when timelines are tight.",
  },
  {
    question: "Do parents receive progress updates?",
    answer:
      "Yes. Families get structured weekly updates showing the current stage, risks and next steps.",
  },
];
