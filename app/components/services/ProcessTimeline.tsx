interface Step {
  num: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: Step[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="process-timeline">
      {steps.map((step, i) => (
        <div key={i} className="process-step">
          <div className="process-num">{step.num}</div>
          <div className="process-content">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
          {i !== steps.length - 1 && <div className="process-connector" />}
        </div>
      ))}
    </div>
  );
}
