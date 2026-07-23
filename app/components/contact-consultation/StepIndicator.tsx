'use client';

type Props = {
  currentStep: number;
  totalSteps: number;
};

export default function StepIndicator({ currentStep, totalSteps }: Props) {
  const percentage = (currentStep / totalSteps) * 100;
  
  return (
    <div className="consult-progress">
      <div className="consult-progress-text">
        {currentStep.toString().padStart(2, '0')} / {totalSteps.toString().padStart(2, '0')}
      </div>
      <div className="consult-progress-bar">
        <div className="consult-progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
