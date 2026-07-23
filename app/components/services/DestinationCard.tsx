import Link from 'next/link';

interface DestinationCardProps {
  country: string;
  flag: string;
  description: string;
  link?: string;
}

export default function DestinationCard({ country, flag, description, link = '/contact' }: DestinationCardProps) {
  return (
    <div className="dest-card">
      <div className="dest-header">
        <span className="dest-flag">{flag}</span>
        <h3>{country}</h3>
      </div>
      <p>{description}</p>
      <Link href={link} className="dest-link">
        Learn More &rarr;
      </Link>
    </div>
  );
}
