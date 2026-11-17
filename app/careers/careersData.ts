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
  status?: string;
}

export function isCareerOpen(job?: Career | null): boolean {
  if (!job) return false;
  if (job.is_active === false) return false;
  if (job.status && ['closed', 'inactive', 'archived', 'filled'].includes(job.status.toLowerCase())) {
    return false;
  }
  return true;
}

export const fallbackCareers: Career[] = [];

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

      if (!error && data) {
        return (data as Career[]).filter((c) => isCareerOpen(c));
      }
    }
  } catch (e) {
    console.error('getCareers error:', e);
  }
  return [];
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
    console.error('getCareerByIdOrSlug error:', e);
  }

  return null;
}

