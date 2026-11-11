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
      c.title.toLowerCase() === decoded.replace(/-/g, ' ')
  );

  return fallback || null;
}

