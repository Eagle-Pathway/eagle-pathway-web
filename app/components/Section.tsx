import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  soft?: boolean;
  id?: string;
  tight?: boolean;
};

export default function Section({ children, className = '', soft = false, id, tight = false }: Props) {
  return (
    <section
      id={id}
      className={`section ${soft ? 'section-soft' : ''} ${tight ? 'section-tight' : ''} ${className}`.trim()}
    >
      <div className="container">{children}</div>
    </section>
  );
}
