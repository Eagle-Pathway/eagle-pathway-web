'use client';

type Props = {
  selectedServices: string[];
  onChange: (services: string[]) => void;
};

const options = [
  'Recommendation Letter Writing',
  'Zoom Consultation Meeting',
  'Finding Suitable Universities',
  'Scholarship Strategy',
  'One-to-One Mentorship',
  'Full Application Service',
  'Embassy & Visa Interview Preparation',
  'CV & Motivation Letter Support',
  'English Test Preparation',
  'Government Scholarship Consultation',
];

export default function ServiceSelector({ selectedServices, onChange }: Props) {
  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      onChange(selectedServices.filter((s) => s !== service));
    } else {
      onChange([...selectedServices, service]);
    }
  };

  return (
    <div className="consult-services-grid">
      {options.map((option) => {
        const isSelected = selectedServices.includes(option);
        return (
          <label 
            key={option} 
            className={`consult-service-card ${isSelected ? 'selected' : ''}`}
          >
            <input 
              type="checkbox" 
              checked={isSelected} 
              onChange={() => toggleService(option)}
              style={{ display: 'none' }}
            />
            <span className="checkbox-ui"></span>
            <span className="service-name">{option}</span>
          </label>
        );
      })}
    </div>
  );
}
