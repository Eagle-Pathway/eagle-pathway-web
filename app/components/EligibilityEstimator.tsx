'use client';

import { useState } from 'react';
import { Award, CheckCircle2, ArrowRight, RefreshCw, Sparkles, BookOpen } from 'lucide-react';

export default function EligibilityEstimator() {
  const [degree, setDegree] = useState<'bachelor' | 'master'>('master');
  const [gpa, setGpa] = useState<string>('high');
  const [english, setEnglish] = useState<string>('moi');
  const [calculated, setCalculated] = useState(false);

  const calculateResults = () => {
    setCalculated(true);
  };

  const resetForm = () => {
    setCalculated(false);
  };

  return (
    <div className="estimator-container">
      <div className="estimator-header">
        <span className="eyebrow">
          <Sparkles size={14} />
          <span>Instant Self-Assessment Tool</span>
        </span>
        <h2>Check Your Scholarship Eligibility</h2>
        <p>Answer 3 quick questions to check your profile match for international scholarships and funded admissions.</p>
      </div>

      {!calculated ? (
        <div className="estimator-card glass-card">
          <div className="estimator-grid">
            {/* Field 1: Target Degree */}
            <div className="estimator-field">
              <label className="field-label">1. What degree level are you targeting?</label>
              <div className="estimator-options">
                <button
                  type="button"
                  className={`estimator-btn ${degree === 'master' ? 'active' : ''}`}
                  onClick={() => setDegree('master')}
                >
                  🎓 Master&apos;s Degree
                </button>
                <button
                  type="button"
                  className={`estimator-btn ${degree === 'bachelor' ? 'active' : ''}`}
                  onClick={() => setDegree('bachelor')}
                >
                  📜 Bachelor&apos;s Degree
                </button>
              </div>
            </div>

            {/* Field 2: Academic Standing */}
            <div className="estimator-field">
              <label className="field-label">
                2. Academic Performance ({degree === 'master' ? 'University CGPA' : 'Grade 12 Score'})
              </label>
              <div className="estimator-options grid-2">
                {degree === 'master' ? (
                  <>
                    <button
                      type="button"
                      className={`estimator-btn ${gpa === 'high' ? 'active' : ''}`}
                      onClick={() => setGpa('high')}
                    >
                      3.50 – 4.00 CGPA (High Honor)
                    </button>
                    <button
                      type="button"
                      className={`estimator-btn ${gpa === 'mid' ? 'active' : ''}`}
                      onClick={() => setGpa('mid')}
                    >
                      3.00 – 3.49 CGPA (Strong)
                    </button>
                    <button
                      type="button"
                      className={`estimator-btn ${gpa === 'low' ? 'active' : ''}`}
                      onClick={() => setGpa('low')}
                    >
                      Below 3.00 CGPA
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className={`estimator-btn ${gpa === 'high' ? 'active' : ''}`}
                      onClick={() => setGpa('high')}
                    >
                      350+ / 600 National Exam
                    </button>
                    <button
                      type="button"
                      className={`estimator-btn ${gpa === 'mid' ? 'active' : ''}`}
                      onClick={() => setGpa('mid')}
                    >
                      275 – 349 National Exam
                    </button>
                    <button
                      type="button"
                      className={`estimator-btn ${gpa === 'low' ? 'active' : ''}`}
                      onClick={() => setGpa('low')}
                    >
                      Below 275 Score
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Field 3: English Proficiency */}
            <div className="estimator-field">
              <label className="field-label">3. English Proficiency Proof</label>
              <div className="estimator-options grid-2">
                <button
                  type="button"
                  className={`estimator-btn ${english === 'test' ? 'active' : ''}`}
                  onClick={() => setEnglish('test')}
                >
                  IELTS 6.5+ / TOEFL / Duolingo
                </button>
                <button
                  type="button"
                  className={`estimator-btn ${english === 'moi' ? 'active' : ''}`}
                  onClick={() => setEnglish('moi')}
                >
                  Medium of Instruction (MOI)
                </button>
                <button
                  type="button"
                  className={`estimator-btn ${english === 'none' ? 'active' : ''}`}
                  onClick={() => setEnglish('none')}
                >
                  No Official English Test Yet
                </button>
              </div>
            </div>
          </div>

          <div className="estimator-action">
            <button type="button" onClick={calculateResults} className="btn btn-primary btn-lg btn-block">
              Check My Match Score <ArrowRight size={18} />
            </button>
          </div>
        </div>
      ) : (
        /* Calculated Result Panel */
        <div className="estimator-card glass-card result-panel animate-in">
          <div className="result-header">
            <div className="score-badge">
              <span className="score-num">
                {gpa === 'high' ? '96%' : gpa === 'mid' ? '88%' : '75%'}
              </span>
              <span className="score-lbl">Eligibility Match</span>
            </div>
            <div>
              <h3>High Potential for Funded Pathways</h3>
              <p className="result-desc">
                Based on your profile ({degree === 'master' ? "Master's" : "Bachelor's"}{' '}
                target with {english === 'test' ? 'English Certification' : 'Medium of Instruction'}), you meet the core prerequisites for major international scholarship programs.
              </p>
            </div>
          </div>

          <div className="result-highlights">
            <div className="result-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>Qualifies for Italian DSU &amp; Regional Full-Funding Grants</span>
            </div>
            <div className="result-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>Eligible for Tuition Fee Waiver Programs across Europe &amp; UK</span>
            </div>
            <div className="result-item">
              <CheckCircle2 size={18} className="check-icon" />
              <span>Medium of Instruction accepted for preliminary application stages</span>
            </div>
          </div>

          <div className="result-footer">
            <a
              href="https://forms.gle/eUrPE13Gt2GL4D3y9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <BookOpen size={18} /> Reserve Scholarship Bootcamp Slot
            </a>
            <button type="button" onClick={resetForm} className="btn btn-ghost">
              <RefreshCw size={16} /> Re-assess Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
