-- ==============================================================================
-- EAGLE PATHWAY: Careers & Job Applications Migration
-- Execute this SQL in your Supabase SQL Editor or migration runner.
-- ==============================================================================

-- 1. Create Careers Table (Job Postings)
CREATE TABLE IF NOT EXISTS public.careers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE,
    department TEXT NOT NULL, -- e.g. 'Education & Tutoring', 'Admissions Advisory', 'Engineering', 'Operations'
    location TEXT NOT NULL DEFAULT 'Addis Ababa / Hybrid', -- e.g. 'Addis Ababa, Ethiopia', 'Remote Worldwide', 'Hybrid'
    employment_type TEXT NOT NULL DEFAULT 'Full-time', -- e.g. 'Full-time', 'Part-time', 'Contract', 'Internship'
    experience_level TEXT NOT NULL DEFAULT 'Mid-Level', -- e.g. 'Entry Level', 'Mid-Level', 'Senior', 'Lead'
    salary_range TEXT, -- e.g. 'Competitive ETB / USD', '30,000 - 50,000 ETB / month'
    summary TEXT NOT NULL,
    description TEXT,
    responsibilities JSONB DEFAULT '[]'::jsonb, -- Array of strings
    requirements JSONB DEFAULT '[]'::jsonb, -- Array of strings
    benefits JSONB DEFAULT '[]'::jsonb, -- Array of strings
    is_active BOOLEAN NOT NULL DEFAULT true,
    featured BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Create Job Applications Table (Candidates who apply)
CREATE TABLE IF NOT EXISTS public.job_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    career_id UUID REFERENCES public.careers(id) ON DELETE SET NULL,
    job_title TEXT NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    linkedin_url TEXT,
    portfolio_url TEXT,
    resume_url TEXT,
    cover_letter TEXT,
    status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'reviewing', 'interviewed', 'offered', 'rejected'
    notes TEXT, -- Private recruiter / admin notes
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Indexes for High-Performance Queries
CREATE INDEX IF NOT EXISTS idx_careers_is_active ON public.careers(is_active);
CREATE INDEX IF NOT EXISTS idx_careers_department ON public.careers(department);
CREATE INDEX IF NOT EXISTS idx_careers_created_at ON public.careers(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_job_applications_career_id ON public.job_applications(career_id);
CREATE INDEX IF NOT EXISTS idx_job_applications_created_at ON public.job_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_job_applications_status ON public.job_applications(status);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.careers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies for Careers
-- Anyone can view active careers on the public website
CREATE POLICY "Allow public read active careers" 
    ON public.careers 
    FOR SELECT 
    USING (is_active = true);

-- Service role & authenticated admin have full access
CREATE POLICY "Allow full access to service_role on careers" 
    ON public.careers 
    FOR ALL 
    USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

-- 6. RLS Policies for Job Applications
-- Anyone can submit an application via public website
CREATE POLICY "Allow public insert job_applications" 
    ON public.job_applications 
    FOR INSERT 
    WITH CHECK (true);

-- Only admins / service role can view and update applications
CREATE POLICY "Allow admin read job_applications" 
    ON public.job_applications 
    FOR SELECT 
    USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

CREATE POLICY "Allow admin update job_applications" 
    ON public.job_applications 
    FOR UPDATE 
    USING (auth.role() = 'service_role' OR auth.role() = 'authenticated');

-- 7. Supabase Storage Bucket for Resumes / CVs (Optional / Recommended)
INSERT INTO storage.buckets (id, name, public)
VALUES ('resumes', 'resumes', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Allow public upload to resumes bucket"
    ON storage.objects
    FOR INSERT
    WITH CHECK (bucket_id = 'resumes');

CREATE POLICY "Allow public read from resumes bucket"
    ON storage.objects
    FOR SELECT
    USING (bucket_id = 'resumes');

-- 8. Insert Initial Seed Job Openings for Eagle Pathway
INSERT INTO public.careers (
    title, slug, department, location, employment_type, experience_level, salary_range, 
    summary, description, responsibilities, requirements, benefits, is_active, featured
) VALUES 
(
    'Senior SAT & IELTS Academic Tutor',
    'senior-sat-ielts-academic-tutor',
    'Education & Tutoring',
    'Addis Ababa / Hybrid',
    'Full-time / Part-time',
    'Mid-Senior',
    'Competitive ETB (Performance Bonuses)',
    'Lead high-stakes digital SAT and IELTS preparation for top Ethiopian high schoolers targeting funded university admissions abroad.',
    'As a Senior SAT & IELTS Academic Tutor at Eagle Pathway, you will work directly with ambitious students across Addis Ababa and online worldwide. You will conduct rigorous diagnostics, craft personalized 8-to-16 week score lifting roadmaps, and coach students through critical thinking, reading comprehension, and advanced mathematics.',
    '["Conduct comprehensive diagnostic assessments for incoming test prep students", "Deliver structured 1-on-1 and small group digital SAT & IELTS sessions", "Track student homework completion, mock exam results, and weekly analytics", "Collaborate with admissions advisors to align test benchmarks with university requirements", "Provide constructive, encouraging weekly progress reports to students and parents"]'::jsonb,
    '["Bachelor degree or higher in STEM, English, Linguistics, Education, or related field", "Demonstrated high score on official SAT (1450+) or IELTS (Band 8.0+)", "Minimum 2+ years of verified tutoring or classroom teaching experience", "Deep familiarity with the digital SAT adaptive testing platform and IELTS Academic rubric", "Fluency in English with exceptional verbal and written communication skills"]'::jsonb,
    '["Competitive monthly compensation with milestone score-lifting bonuses", "Flexible hybrid schedule (in-person office in City Square Mall + remote)", "Access to premier international educational resources and AI teaching tools", "Clear pathway to Head of Academic Programs"]'::jsonb,
    true,
    true
),
(
    'International Scholarship & Admissions Advisor',
    'international-scholarship-admissions-advisor',
    'Admissions & Advisory',
    'Addis Ababa / Remote',
    'Full-time',
    'Mid-Senior',
    'Competitive Base + Success Incentives',
    'Guide undergraduate and postgraduate candidates from profile assessment to fully-funded scholarship offers across Canada, US, UK, and Europe.',
    'Eagle Pathway has guided students to McGill, Oxford, UBC, and Erasmus Mundus with over $1M+ in secured scholarships. We are seeking an experienced Admissions Advisor with deep insight into global university shortlisting, Statement of Purpose (SOP) narrative structuring, and deadline management.',
    '["Review candidate academic transcripts, CVs, and aspirations to build realistic target lists", "Lead weekly 1-on-1 strategy sessions guiding students through SOP and essay drafting", "Review, critique, and refine application essays, recommendation letters, and resumes", "Coordinate credential evaluations (WES, ECTS) and embassy visa interview preparation", "Maintain 95%+ on-time application submission rate across global deadlines"]'::jsonb,
    '["Prior international study experience (MSc/MA or BA abroad) or 3+ years in study-abroad advising", "Proven track record of successful scholarship placements (Erasmus, DAAD, Commonwealth, US endowments)", "Superb editing, storytelling, and essay refinement abilities", "Empathetic, highly organized mentor who thrives in motivating students", "Strong knowledge of European, Canadian, and American scholarship criteria"]'::jsonb,
    '["Generous performance incentives per successful funded student placement", "Opportunity to represent Eagle Pathway at international education fairs", "Professional development in international higher-education consulting", "Comprehensive health and wellness support"]'::jsonb,
    true,
    true
),
(
    'Full-Stack AI & Web Engineer',
    'full-stack-ai-web-engineer',
    'Engineering & Tech',
    'Remote / Addis Ababa',
    'Full-time',
    'Mid-Level',
    'Competitive ETB / USD',
    'Build next-generation EdTech platforms, AI study assistants, and portal tools powering thousands of students and tutors across Africa.',
    'We are scaling our student and parent web portal, mobile app, and AI-driven study tools. You will work on cutting-edge Next.js, Supabase, Node.js, and LLM integrations (Claude/OpenAI/Gemini) to modernize education delivery across Africa.',
    '["Develop and maintain high-performance web applications using Next.js, TypeScript, and Tailwind CSS", "Architect scalable Supabase PostgreSQL schemas, RLS policies, and REST/Edge APIs", "Integrate LLM reasoning pipelines for automated SOP reviews and Socratic practice quizzes", "Ensure flawless mobile responsiveness, sub-second load times, and bank-grade data security", "Collaborate with education specialists to translate pedagogical needs into sleek digital features"]'::jsonb,
    '["3+ years experience with Next.js, TypeScript, React, and PostgreSQL/Supabase", "Demonstrated experience integrating AI APIs, vector embeddings, or agentic workflows", "Strong understanding of RESTful APIs, auth protocols, and modern UI/UX design systems", "Passionate about building software that directly impacts lives and educational equity", "Self-starter who thrives in fast-moving, high-autonomy startup environments"]'::jsonb,
    '["Modern tech stack with zero legacy baggage", "Remote-first flexibility with optional City Square Mall office access", "Hardware and continuous learning stipend", "Direct equity / upside in Eagle Pathway technological expansion"]'::jsonb,
    true,
    false
)
ON CONFLICT (slug) DO NOTHING;

