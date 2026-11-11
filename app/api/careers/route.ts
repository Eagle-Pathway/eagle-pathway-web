import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Fallback career opportunities displayed if the database is still initializing
const fallbackCareers = [
  {
    id: 'f1-sat-ielts-tutor',
    title: 'Senior SAT & IELTS Academic Tutor',
    slug: 'senior-sat-ielts-academic-tutor',
    department: 'Education & Tutoring',
    location: 'Addis Ababa / Hybrid',
    employment_type: 'Full-time / Part-time',
    experience_level: 'Mid-Senior',
    salary_range: 'Competitive ETB + Milestone Bonuses',
    summary: 'Lead high-stakes digital SAT and IELTS Academic preparation for top Ethiopian high schoolers targeting funded university admissions abroad.',
    description: 'As a Senior SAT & IELTS Academic Tutor at Eagle Pathway, you will work directly with ambitious students across Addis Ababa and online worldwide. You will conduct rigorous diagnostics, craft personalized 8-to-16 week score lifting roadmaps, and coach students through critical thinking, reading comprehension, and advanced mathematics.',
    responsibilities: [
      'Conduct comprehensive diagnostic assessments for incoming test prep students',
      'Deliver structured 1-on-1 and small group digital SAT & IELTS sessions',
      'Track student homework completion, mock exam results, and weekly analytics',
      'Collaborate with admissions advisors to align test benchmarks with university requirements',
      'Provide constructive, encouraging weekly progress reports to students and parents',
    ],
    requirements: [
      'Bachelor degree or higher in STEM, English, Linguistics, Education, or related field',
      'Demonstrated high score on official SAT (1450+) or IELTS (Band 8.0+)',
      'Minimum 2+ years of verified tutoring or classroom teaching experience',
      'Deep familiarity with the digital SAT adaptive testing platform and IELTS Academic rubric',
      'Fluency in English with exceptional verbal and written communication skills',
    ],
    benefits: [
      'Competitive monthly compensation with milestone score-lifting bonuses',
      'Flexible hybrid schedule (in-person office in City Square Mall + remote)',
      'Access to premier international educational resources and AI teaching tools',
      'Clear pathway to Head of Academic Programs',
    ],
    is_active: true,
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 'f2-scholarship-advisor',
    title: 'International Scholarship & Admissions Advisor',
    slug: 'international-scholarship-admissions-advisor',
    department: 'Admissions & Advisory',
    location: 'Addis Ababa / Remote',
    employment_type: 'Full-time',
    experience_level: 'Mid-Senior',
    salary_range: 'Competitive Base + Success Incentives',
    summary: 'Guide undergraduate and postgraduate candidates from profile assessment to fully-funded scholarship offers across Canada, US, UK, and Europe.',
    description: 'Eagle Pathway has guided students to McGill, Oxford, UBC, and Erasmus Mundus with over $1M+ in secured scholarships. We are seeking an experienced Admissions Advisor with deep insight into global university shortlisting, Statement of Purpose (SOP) narrative structuring, and deadline management.',
    responsibilities: [
      'Review candidate academic transcripts, CVs, and aspirations to build realistic target lists',
      'Lead weekly 1-on-1 strategy sessions guiding students through SOP and essay drafting',
      'Review, critique, and refine application essays, recommendation letters, and resumes',
      'Coordinate credential evaluations (WES, ECTS) and embassy visa interview preparation',
      'Maintain 95%+ on-time application submission rate across global deadlines',
    ],
    requirements: [
      'Prior international study experience (MSc/MA or BA abroad) or 3+ years in study-abroad advising',
      'Proven track record of successful scholarship placements (Erasmus, DAAD, Commonwealth, US endowments)',
      'Superb editing, storytelling, and essay refinement abilities',
      'Empathetic, highly organized mentor who thrives in motivating students',
      'Strong knowledge of European, Canadian, and American scholarship criteria',
    ],
    benefits: [
      'Generous performance incentives per successful funded student placement',
      'Opportunity to represent Eagle Pathway at international education fairs',
      'Professional development in international higher-education consulting',
      'Comprehensive health and wellness support',
    ],
    is_active: true,
    featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: 'f3-fullstack-ai-engineer',
    title: 'Full-Stack AI & Web Engineer',
    slug: 'full-stack-ai-web-engineer',
    department: 'Engineering & Tech',
    location: 'Remote / Addis Ababa',
    employment_type: 'Full-time',
    experience_level: 'Mid-Level',
    salary_range: 'Competitive ETB / USD',
    summary: 'Build next-generation EdTech platforms, AI study assistants, and portal tools powering thousands of students and tutors across Africa.',
    description: 'We are scaling our student and parent web portal, mobile app, and AI-driven study tools. You will work on cutting-edge Next.js, Supabase, Node.js, and LLM integrations (Claude/OpenAI/Gemini) to modernize education delivery across Africa.',
    responsibilities: [
      'Develop and maintain high-performance web applications using Next.js, TypeScript, and Tailwind CSS',
      'Architect scalable Supabase PostgreSQL schemas, RLS policies, and REST/Edge APIs',
      'Integrate LLM reasoning pipelines for automated SOP reviews and Socratic practice quizzes',
      'Ensure flawless mobile responsiveness, sub-second load times, and bank-grade data security',
      'Collaborate with education specialists to translate pedagogical needs into sleek digital features',
    ],
    requirements: [
      '3+ years experience with Next.js, TypeScript, React, and PostgreSQL/Supabase',
      'Demonstrated experience integrating AI APIs, vector embeddings, or agentic workflows',
      'Strong understanding of RESTful APIs, auth protocols, and modern UI/UX design systems',
      'Passionate about building software that directly impacts lives and educational equity',
      'Self-starter who thrives in fast-moving, high-autonomy startup environments',
    ],
    benefits: [
      'Modern tech stack with zero legacy baggage',
      'Remote-first flexibility with optional City Square Mall office access',
      'Hardware and continuous learning stipend',
      'Direct equity / upside in Eagle Pathway technological expansion',
    ],
    is_active: true,
    featured: false,
    created_at: new Date().toISOString(),
  },
];

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { data, error } = await supabase
        .from('careers')
        .select('*')
        .eq('is_active', true)
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (!error && data && data.length > 0) {
        return NextResponse.json({
          careers: data,
          source: 'database',
          count: data.length,
        });
      }
    }

    // Return fallback curated jobs if database is empty or not yet connected
    return NextResponse.json({
      careers: fallbackCareers,
      source: 'fallback',
      count: fallbackCareers.length,
    });
  } catch (err) {
    console.error('Error fetching careers:', err);
    return NextResponse.json({
      careers: fallbackCareers,
      source: 'fallback-on-error',
      count: fallbackCareers.length,
    });
  }
}

