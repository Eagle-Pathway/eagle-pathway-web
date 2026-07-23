import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

interface ServiceCardProps {
  icon: string | React.ReactNode;
  title: string;
  description: string;
  includes: string[];
  bestFor?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  includes,
  bestFor,
  ctaText = 'Book Consultation',
  ctaLink = '/contact',
}: ServiceCardProps) {
  return (
    <div className="svc-card">
      <div className="svc-icon-wrapper">{icon}</div>
      <h3>{title}</h3>
      <p className="svc-desc">{description}</p>
      
      <div className="svc-includes">
        <strong>Includes:</strong>
        <ul>
          {includes.map((item, i) => (
            <li key={i}>
              <Check size={14} className="text-orange" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {bestFor && (
        <div className="svc-bestfor">
          <strong>Best for:</strong> {bestFor}
        </div>
      )}

      <Link href={ctaLink} className="svc-btn">
        <span>{ctaText}</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
