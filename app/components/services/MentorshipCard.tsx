import Link from 'next/link';
import { Check } from 'lucide-react';

interface MentorshipCardProps {
  type: 'Private' | 'Group';
  description: string;
  includes: string[];
  ctaText: string;
  ctaLink?: string;
  isPopular?: boolean;
}

export default function MentorshipCard({
  type,
  description,
  includes,
  ctaText,
  ctaLink = '/contact',
  isPopular = false,
}: MentorshipCardProps) {
  return (
    <div className={`mentor-card ${isPopular ? 'popular' : ''}`}>
      {isPopular && <div className="mentor-badge">Most Popular</div>}
      <div className="mentor-header">
        <h3>{type} Mentorship</h3>
        <p>{description}</p>
      </div>
      <div className="mentor-body">
        <ul>
          {includes.map((item, i) => (
            <li key={i}>
              <div className="mentor-check">
                <Check size={16} />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link href={ctaLink} className={`btn btn-block ${isPopular ? 'btn-primary' : 'btn-ghost'}`}>
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
