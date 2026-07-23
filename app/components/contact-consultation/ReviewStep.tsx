'use client';

type ReviewData = {
  fullName: string;
  gender: string;
  phone: string;
  email: string;
  telegram: string;
  academicLevel: string;
  englishProof: string;
  services: string[];
  motivation: string;
  appliedBefore: string;
  appliedDetails: string;
  referral: string;
  paymentReceipt: File | null;
  agreements: {
    accurate: boolean;
    noGuarantee: boolean;
    terms: boolean;
  };
};

type Props = {
  data: ReviewData;
};

export default function ReviewStep({ data }: Props) {
  return (
    <div className="consult-review-step">
      <div className="review-section">
        <h3>1. Personal Information</h3>
        <div className="review-grid">
          <div><label>Full Name</label><p>{data.fullName}</p></div>
          <div><label>Gender</label><p>{data.gender}</p></div>
          <div><label>Email</label><p>{data.email}</p></div>
          <div><label>Phone</label><p>{data.phone}</p></div>
          <div><label>Telegram</label><p>{data.telegram}</p></div>
        </div>
      </div>

      <div className="review-section">
        <h3>2. Academic Background</h3>
        <div className="review-grid">
          <div><label>Current Level</label><p>{data.academicLevel}</p></div>
          <div><label>English Proof</label><p>{data.englishProof}</p></div>
        </div>
      </div>

      <div className="review-section">
        <h3>3. Selected Services</h3>
        <div className="review-tags">
          {data.services.length > 0 ? (
            data.services.map(s => <span key={s} className="review-tag">{s}</span>)
          ) : (
            <p className="no-data">No services selected.</p>
          )}
        </div>
      </div>

      <div className="review-section">
        <h3>4. Goal &amp; Context</h3>
        <div className="review-block">
          <label>Motivation</label>
          <p>{data.motivation || <span className="no-data">Not provided</span>}</p>
        </div>
        <div className="review-grid" style={{ marginTop: '1rem' }}>
          <div><label>Applied Before</label><p>{data.appliedBefore}</p></div>
          {data.appliedBefore === 'Yes' && <div><label>Details</label><p>{data.appliedDetails}</p></div>}
          <div><label>Referral Source</label><p>{data.referral}</p></div>
        </div>
      </div>

      <div className="review-section">
        <h3>5. Payment Confirmation</h3>
        <div className="review-block">
          <label>Receipt Uploaded</label>
          <p>{data.paymentReceipt ? data.paymentReceipt.name : <span className="no-data" style={{ color: 'red' }}>Missing</span>}</p>
        </div>
      </div>
    </div>
  );
}
