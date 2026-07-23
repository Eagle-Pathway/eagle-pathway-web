import ApplicationForm from '../components/ApplicationForm';

export const metadata = {
  title: 'Commitment Application Form | Eagle Pathway',
  description: 'Apply for Eagle Pathway consultancy services.',
};

export default function ApplyPage() {
  return (
    <div className="application-page">
      <div className="container application-container">
        <ApplicationForm />
      </div>
    </div>
  );
}
