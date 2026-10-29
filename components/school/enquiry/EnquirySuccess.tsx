"use client";

type EnquirySuccessProps = {
  onClose: () => void;
};

export default function EnquirySuccess({ onClose }: EnquirySuccessProps) {
  return (
    <div className="enquiry-success" role="status" aria-live="polite">
      <div className="success-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M5 12.5 9.4 17 19 7" />
        </svg>
      </div>
      <span>APPLICATION RECEIVED</span>
      <h3>ADMISSION ENQUIRY SUBMITTED</h3>
      <p>
        Thank you for your interest in Karnataka College of Management (KCM). Our MBA admissions counselor will connect with you shortly with eligibility assessment and program brochures.
      </p>
      <div className="success-actions">
        <a href="#admissions" onClick={onClose}>VIEW ADMISSION STEPS</a>
        <button type="button" onClick={onClose}>CLOSE</button>
      </div>
    </div>
  );
}
