import {
  GraduationCap,
  Target,
  FileText,
  CalendarCheck,
  Sparkles,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  tutoring: GraduationCap,
  strategy: Target,
  documents: FileText,
  tracking: CalendarCheck,
  ai: Sparkles,
  mobile: Smartphone,
  mail: Mail,
  phone: Phone,
  location: MapPin,
  book: BookOpen,
};

export default function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp size={size} strokeWidth={2} />;
}
