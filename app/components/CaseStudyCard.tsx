type Testimonial = {
  quote: string;
  name: string;
  location: string;
  outcome: string;
  track: string;
  metric: string;
};

type Props = {
  story: Testimonial;
  featured?: boolean;
};

export default function CaseStudyCard({ story, featured = false }: Props) {
  return (
    <article className={`case-study ${featured ? 'featured' : ''}`}>
      <p className="case-quote">“{story.quote}”</p>
      <div className="case-meta">
        <div>
          <b>{story.name}</b>
          <small>{story.location}</small>
        </div>
        <span className="case-track">{story.track}</span>
      </div>
      <div className="case-outcome">
        <strong>{story.outcome}</strong>
        <span>{story.metric}</span>
      </div>
    </article>
  );
}
