import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCE_DATA, ACADEMIC_DATA, CERTIFICATIONS_DATA } from '../../data/portfolioData';
import { X, Printer, Copy, Check, Download, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
${PERSONAL_INFO.name.toUpperCase()} - ${PERSONAL_INFO.role}
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
University: ${PERSONAL_INFO.university} (GPA: ${ACADEMIC_DATA.gpa})

SUMMARY:
${PERSONAL_INFO.shortBio} ${PERSONAL_INFO.extendedBio}

EXPERIENCE:
${EXPERIENCE_DATA.map(
  (e) => `
* ${e.role} at ${e.company} (${e.period})
${e.responsibilities.map((r) => `  - ${r}`).join('\n')}`
).join('\n')}

EDUCATION:
* ${ACADEMIC_DATA.degreeType} in ${ACADEMIC_DATA.major} - ${ACADEMIC_DATA.university} (${ACADEMIC_DATA.years})
  GPA: ${ACADEMIC_DATA.gpa} | Honors: Dean's List of Academic Distinction

${CERTIFICATIONS_DATA.length > 0
      ? `CERTIFICATIONS:\n${CERTIFICATIONS_DATA.map((c) => `* ${c.title} (${c.issuer}, ${c.issueDate}) - ID: ${c.credentialId}`).join('\n')}\n`
      : ''}
    `;

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#131b2e] border border-[#3c494e] max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
        {/* Header Bar */}
        <div className="sticky top-0 bg-[#060e20] border-b border-[#3c494e]/40 p-4 px-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-2 font-code-sm text-xs text-[#a4e6ff]">
            <span>SYS.DOC // ATS_COMPLIANT_RESUME</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyText}
              className="font-code-sm text-xs px-3 py-1.5 bg-[#171f33] border border-[#3c494e] hover:border-[#a4e6ff] text-[#bbc9cf] hover:text-[#dae2fd] flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY TEXT</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="font-code-sm text-xs px-4 py-1.5 bg-[#a4e6ff] text-[#003543] font-bold hover:bg-[#4cd6ff] flex items-center gap-1.5 transition-all cursor-pointer shadow-[0_0_12px_rgba(164,230,255,0.3)]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 text-[#859399] hover:text-[#dae2fd] transition-colors cursor-pointer ml-2"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ATS Resume Canvas */}
        <div className="p-8 md:p-12 bg-white text-slate-900 selection:bg-sky-200 selection:text-slate-900 print:p-0">
          {/* Header */}
          <div className="border-b-2 border-slate-800 pb-4 mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-sky-700 tracking-wide mt-0.5">
              {PERSONAL_INFO.role.toUpperCase()}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-2 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-sky-600" /> {PERSONAL_INFO.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-sky-600" /> {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-sky-600" /> {PERSONAL_INFO.github}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2 uppercase">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {PERSONAL_INFO.shortBio} {PERSONAL_INFO.extendedBio} Experienced with high-throughput event streaming, IndexedDB-driven offline state reconciliation, microservices architecture, and modern TypeScript frontend/backend engineering.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2 uppercase">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 font-mono">
              <div>
                <strong>Languages:</strong> TypeScript, JavaScript, C++20, Go 1.22, Python, SQL
              </div>
              <div>
                <strong>Frontend:</strong> React 19, Tailwind CSS, Vite, WebSockets, State Engines
              </div>
              <div>
                <strong>Backend & Data:</strong> Node.js, Fastify, Express, PostgreSQL, Kysely, Redis
              </div>
              <div>
                <strong>DevOps & Cloud:</strong> Kubernetes, Docker, AWS Solutions Architecture, CI/CD
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-3 uppercase">
              Engineering Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-bold text-slate-900">
                      {exp.role} — <span className="text-sky-700">{exp.company}</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-xs text-slate-700">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2 uppercase">
              Academic Education
            </h2>
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs font-bold text-slate-900">
                  {ACADEMIC_DATA.degreeType} in {ACADEMIC_DATA.major}
                </span>
                <div className="text-xs text-slate-600">
                  {ACADEMIC_DATA.university} • {ACADEMIC_DATA.location} (GPA: {ACADEMIC_DATA.gpa})
                </div>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                {ACADEMIC_DATA.years}
              </span>
            </div>
          </div>

          {/* Certifications */}
          {CERTIFICATIONS_DATA.length > 0 && (
            <div>
              <h2 className="text-xs font-bold font-mono tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2 uppercase">
                Industry Certifications & Credentials
              </h2>
              <div className="space-y-1.5 text-xs text-slate-700">
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div key={cert.id} className="flex justify-between">
                    <span>
                      <strong>{cert.title}</strong> — {cert.issuer} (ID: {cert.credentialId})
                    </span>
                    <span className="font-mono text-slate-500 text-[11px]">{cert.issueDate}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
