import { createClient } from '@supabase/supabase-js';

export interface Career {
  id: string;
  title: string;
  slug?: string;
  department: string;
  location: string;
  employment_type: string;
  deadline?: string;
  summary: string;
  description?: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  is_active?: boolean;
}

export const fallbackCareers: Career[] = [
  {
    id: 'b35c1a9b-274f-42c8-9914-81d65958bb90',
    title: 'Developer',
    slug: 'developer',
    department: 'Engineering & Product',
    location: 'Addis Ababa / Hybrid',
    employment_type: 'Full-time',
    deadline: 'Nov 26, 2026',
    summary: 'Build and scale the core software platforms, student-tutor matching engines, and educational technology powering Eagle Pathway across Africa and globally.',
    description: "Eagle Pathway is building Africa's premier technology and advisory ecosystem connecting students to world-class education, fully funded scholarships, and verified academic tutoring. With an operational mobile application, web portal, and established physical advisory centers in Addis Ababa, we are scaling technology to transform education across Ethiopia and the diaspora worldwide.\n\nAs a Developer at Eagle Pathway, you will drive core platform architecture across our web applications, mobile ecosystem, and student-tutor matching engines. You will work directly with leadership to build high-throughput matching workflows, diagnostic assessment tools, and scalable digital services that power life-changing educational opportunities for thousands of students.",
    responsibilities: [
      'Architect, build, and scale high-performance web applications and backend APIs using Next.js, TypeScript, and modern database systems.',
      'Develop and refine intelligent student-to-tutor matching algorithms and scheduling workflows that minimize turnaround time.',
      'Build intuitive, mobile-first interfaces and interactive dashboards for students, parents, and academic mentors.',
      'Implement reliable authentication, secure file and resume intake pipelines, and automated test coverage.',
      'Collaborate directly with academic and admissions leadership to rapidly turn operational requirements into production software.',
    ],
    requirements: [
      'Proven experience building and maintaining modern full-stack web or mobile applications using JavaScript / TypeScript, React / Next.js, and relational databases.',
      'Demonstrated track record of writing clean, maintainable, and well-tested code.',
      'Strong understanding of API design, responsive UI implementation, and database architecture.',
      'High agency, problem-solving mindset, and ability to take ownership of features from conception to deployment.',
      'Passion for educational equity, technology innovation, and building high-impact products for students.',
    ],
    benefits: [
      'Competitive compensation package with performance milestones',
      'Flexible hybrid work model (Addis Ababa office + remote flexibility)',
      'Direct ownership over technical architecture and product roadmap decisions',
      'Continuous learning, tech allowances, and rapid career acceleration opportunities',
    ],
    is_active: true,
  },
  {
    id: 'c1-operations-coordinator',
    title: 'Operations Coordinator',
    slug: 'operations-coordinator',
    department: 'Operations',
    location: 'Addis Ababa (On-site)',
    employment_type: 'Full-time',
    deadline: '25 Nov',
    summary: 'Coordinate daily advisory sessions, tutor scheduling, and student intake logistics at our City Square Mall headquarters.',
    description: 'We are looking for a highly organized Operations Coordinator to manage student intake workflows, scheduling across academic tutors, and parent communications.',
    responsibilities: [
      'Manage daily student consultation scheduling and advisor matching',
      'Track student attendance, test prep progress, and parent inquiries',
      'Support office administration and student intake documentation at City Square Mall',
    ],
    requirements: [
      'Bachelor’s degree in Business, Communications, Education, or related field',
      'Strong organizational, multi-tasking, and problem-solving skills',
      'Fluency in Amharic and English',
    ],
    is_active: true,
  },
  {
    id: 'c2-sat-tutor',
    title: 'Senior SAT & IELTS Academic Tutor',
    slug: 'senior-sat-ielts-academic-tutor',
    department: 'Education',
    location: 'Addis Ababa (Hybrid)',
    employment_type: 'Full-time / Part-time',
    deadline: '30 Nov',
    summary: 'Deliver 1-on-1 and small group digital SAT & IELTS instruction for students targeting top international scholarships.',
    description: 'Lead high-stakes SAT & IELTS preparation. You will conduct diagnostics, craft individualized score-lifting study plans, and coach high schoolers to top percentiles.',
    responsibilities: [
      'Conduct diagnostic testing and formulate 8–16 week study roadmaps',
      'Teach digital SAT (Math / Reading) and IELTS Academic modules',
      'Track mock exam analytics and provide weekly parent progress updates',
    ],
    requirements: [
      'Strong official SAT (1450+) or IELTS (8.0+) score',
      '2+ years verified teaching or tutoring experience',
      'Passionate about student outcomes and mentorship',
    ],
    is_active: true,
  },
  {
    id: 'c3-admissions-advisor',
    title: 'Scholarship & Admissions Consultant',
    slug: 'scholarship-admissions-consultant',
    department: 'Admissions',
    location: 'Addis Ababa / Remote',
    employment_type: 'Full-time',
    deadline: '5 Dec',
    summary: 'Guide undergraduate and master applicants through university shortlisting, SOP narrative structuring, and funded application submissions.',
    description: 'Eagle Pathway has secured over $1M+ in scholarships. We are seeking an experienced advisor to guide students through competitive international university applications.',
    responsibilities: [
      'Review student profiles and match them with funded international scholarship programs',
      'Provide structured feedback on Statements of Purpose (SOP) and personal statements',
      'Manage application timelines to ensure 100% on-time submission',
    ],
    requirements: [
      'Prior international degree experience or 2+ years admissions consulting experience',
      'Exceptional English writing and editorial skills',
      'Deep knowledge of European, US, and Canadian scholarship requirements',
    ],
    is_active: true,
  },
];

export async function getCareers(): Promise<Career[]> {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { data, error } = await supabase
        .from('careers')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        return data as Career[];
      }
    }
  } catch (e) {
    // Return fallback if table not yet populated or network unavailable
  }
  return fallbackCareers;
}

export async function getCareerByIdOrSlug(idOrSlug: string): Promise<Career | null> {
  const decoded = decodeURIComponent(idOrSlug).toLowerCase();

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);

      // Try matching by slug first
      const { data: bySlug } = await supabase
        .from('careers')
        .select('*')
        .eq('slug', decoded)
        .single();

      if (bySlug) return bySlug as Career;

      // Try matching by id
      const { data: byId } = await supabase
        .from('careers')
        .select('*')
        .eq('id', decoded)
        .single();

      if (byId) return byId as Career;

      // Try case-insensitive title match if slug wasn't stored
      const { data: byTitle } = await supabase
        .from('careers')
        .select('*')
        .ilike('title', decoded.replace(/-/g, ' '))
        .single();

      if (byTitle) return byTitle as Career;

      // Try partial slug or partial title match
      const { data: partialMatch } = await supabase
        .from('careers')
        .select('*')
        .or(`slug.ilike.%${decoded}%,title.ilike.%${decoded.replace(/-/g, ' ')}%`)
        .limit(1);

      if (partialMatch && partialMatch.length > 0) {
        return partialMatch[0] as Career;
      }
    }
  } catch (e) {
    // Continue to fallback check
  }

  // Check fallback careers
  const fallback = fallbackCareers.find(
    (c) =>
      c.id.toLowerCase() === decoded ||
      (c.slug && c.slug.toLowerCase() === decoded) ||
      c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === decoded ||
      c.title.toLowerCase() === decoded.replace(/-/g, ' ') ||
      (c.slug && (c.slug.includes(decoded) || decoded.includes(c.slug))) ||
      c.title.toLowerCase().includes(decoded.replace(/-/g, ' ')) ||
      decoded.replace(/-/g, ' ').includes(c.title.toLowerCase())
  );

  return fallback || null;
}

