type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
};

export default function SectionHeader({ eyebrow, title, description, align = 'center' }: Props) {
  return (
    <div className={`section-head ${align === 'left' ? 'left' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
