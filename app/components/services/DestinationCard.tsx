interface DestinationCardProps {
  country: string;
  flag: string;
  description: string;
  link?: string;
}

export default function DestinationCard({
  country,
  flag,
  description,
  link = 'https://forms.gle/NL2oB6mHHUscnZo9A',
}: DestinationCardProps) {
  return (
    <div className="dest-card">
      <div className="dest-header">
        <span className="dest-flag">{flag}</span>
        <h3>{country}</h3>
      </div>
      <p>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="dest-link"
      >
        Learn More &rarr;
      </a>
    </div>
  );
}
