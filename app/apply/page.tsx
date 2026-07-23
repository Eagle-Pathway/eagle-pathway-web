import ApplicationForm from '../components/ApplicationForm';

export const metadata = {
  title: 'Get Started | Eagle Pathway',
  description: 'Request your free consultation with Eagle Pathway. Tell us about your goals and we will reach out within 24 hours.',
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
