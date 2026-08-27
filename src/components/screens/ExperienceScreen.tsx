import React, { useState } from 'react';
import {
  EXPERIENCE_DATA,
  CERTIFICATIONS_DATA,
} from '../../data/portfolioData';
import { CertificationItem } from '../../types';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  FileCheck,
  ExternalLink,
  ShieldCheck,
  Maximize2,
  Paperclip,
  Eye,
  Award,
} from 'lucide-react';

interface ExperienceScreenProps {
  onSelectCert: (cert: CertificationItem) => void;
  onPreviewImage: (imageUrl: string, title: string, caption?: string) => void;
}

export const ExperienceScreen: React.FC<ExperienceScreenProps> = ({
  onSelectCert,
  onPreviewImage,
}) => {
  return (
    <div className="w-full pt-28 pb-20 px-4 md:px-8 max-w-[1280px] mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="mb-14 border-b border-[#3c494e]/30 pb-8">
        <div className="flex items-center gap-2 font-label-caps text-xs text-[#a4e6ff] mb-2 tracking-widest">
          <Briefcase className="w-3.5 h-3.5" />
          <span>SYS.LOG // MODULE 02</span>
        </div>
        <h1 className="font-display-lg text-[#dae2fd] tracking-tight">
          Work History & Experience
        </h1>
        <p className="font-body-base text-sm text-[#bbc9cf] mt-2 max-w-2xl">
          Engineering roles, high-concurrency microservices, architectural blueprints, and industry-standard cloud certifications.
        </p>
      </div>

      {/* Vertical Interactive Timeline */}
      <section className="mb-20">
        <div className="relative pl-6 md:pl-10 border-l border-[#3c494e]/40 space-y-16">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1 w-5 h-5 rounded-full bg-[#131b2e] border-2 border-[#a4e6ff] flex items-center justify-center group-hover:scale-125 group-hover:bg-[#a4e6ff] transition-all shadow-[0_0_12px_rgba(164,230,255,0.4)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003543]" />
              </div>

              {/* Main Role Card */}
              <div className="bg-[#131b2e] border border-[#3c494e]/40 hover:border-[#a4e6ff]/50 transition-all p-6 md:p-8">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-[#3c494e]/30">
                  <div>
                    <span className="font-label-caps text-xs text-[#a4e6ff] tracking-widest">
                      // {exp.company}
                    </span>
                    <h3 className="font-headline-md text-2xl text-[#dae2fd] mt-1">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 font-code-sm text-xs text-[#bbc9cf] bg-[#060e20] px-3 py-1.5 border border-[#3c494e]/30">
                    <Calendar className="w-3.5 h-3.5 text-[#a4e6ff]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <ul className="space-y-3 mb-8">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start gap-3 text-sm text-[#bbc9cf] font-body-base"
                    >
                      <span className="text-[#a4e6ff] font-bold mt-1 text-xs">
                        ▸
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Image Attachments */}
                {exp.attachments && exp.attachments.length > 0 && (
                  <div className="pt-6 border-t border-[#3c494e]/30">
                    <div className="flex items-center gap-2 font-label-caps text-xs text-[#859399] mb-4">
                      <Paperclip className="w-3.5 h-3.5 text-[#a4e6ff]" />
                      <span>LOG ATTACHMENTS & ARCHIVES</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {exp.attachments.map((att, aIdx) => (
                        <div
                          key={aIdx}
                          onClick={() =>
                            onPreviewImage(att.imageUrl, att.filename, att.caption)
                          }
                          className="bg-[#060e20] border border-[#3c494e]/40 hover:border-[#a4e6ff] transition-all p-3 cursor-pointer group/att"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden mb-2">
                            <img
                              alt={att.altText || att.title}
                              className="w-full h-full object-cover grayscale group-hover/att:grayscale-0 transition-all duration-300 transform group-hover/att:scale-105"
                              src={att.imageUrl}
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/att:opacity-100 flex items-center justify-center transition-opacity">
                              <Eye className="w-5 h-5 text-[#a4e6ff]" />
                            </div>
                          </div>
                          <div className="flex items-center justify-between font-code-sm text-xs">
                            <span className="text-[#dae2fd] font-bold truncate max-w-[180px]">
                              {att.filename}
                            </span>
                            <span className="text-[10px] text-[#a4e6ff] uppercase">
                              CLICK TO EXPAND
                            </span>
                          </div>
                          {att.caption && (
                            <p className="text-[11px] text-[#859399] mt-1 line-clamp-1">
                              {att.caption}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative Transition Divider + Certifications */}
      {CERTIFICATIONS_DATA.length > 0 && (
        <>
          <div className="my-16 py-3 border-y border-[#3c494e]/30 flex items-center justify-between font-code-sm text-xs text-[#859399] bg-[#060e20]/50 px-4">
            <span>// VALIDATION_LAYER // CRYPTOGRAPHICALLY VERIFIED CREDENTIALS</span>
            <span className="hidden sm:inline text-emerald-400">ACTIVE LICENSES</span>
          </div>

          {/* Certifications Section */}
          <section>
            <div className="flex items-center gap-2 font-label-caps text-xs text-[#a4e6ff] mb-2 tracking-widest">
              <Award className="w-4 h-4" />
              <span>SYS.CREDENTIALS // INDUSTRY CERTIFICATIONS</span>
            </div>
            <h2 className="font-headline-md text-2xl md:text-3xl text-[#dae2fd] mb-8">
              Architectural Credentials & Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-[#131b2e] border border-[#3c494e]/40 hover:border-[#a4e6ff]/60 transition-all p-6 md:p-8 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header with status badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-code-sm text-xs px-2.5 py-1 bg-emerald-950/40 text-emerald-400 border border-emerald-400/30 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{cert.status}</span>
                      </span>
                      <span className="font-code-sm text-xs text-[#859399]">
                        ISSUED: {cert.issueDate}
                      </span>
                    </div>

                    <h3 className="font-headline-md text-2xl text-[#dae2fd] mb-2 group-hover:text-[#a4e6ff] transition-colors">
                      {cert.title}
                    </h3>
                    <div className="font-code-sm text-xs text-[#a4e6ff] mb-6">
                      {cert.issuer}
                    </div>

                    {/* Topics Covered */}
                    <div className="bg-[#060e20] p-4 border border-[#3c494e]/30 mb-6 font-code-sm text-xs space-y-2">
                      <div className="text-[#859399] uppercase tracking-wider text-[10px]">
                        VERIFIED SKILL DOMAINS:
                      </div>
                      {cert.skillsCovered.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-2 text-[#bbc9cf]"
                        >
                          <span className="text-[#a4e6ff]">✓</span>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[#3c494e]/30 flex flex-wrap items-center justify-between gap-3">
                    <span className="font-code-sm text-xs text-[#859399]">
                      ID: {cert.credentialId}
                    </span>

                    <button
                      onClick={() => onSelectCert(cert)}
                      className="font-code-sm text-xs px-4 py-2 bg-[#171f33] hover:bg-[#a4e6ff]/20 text-[#a4e6ff] border border-[#a4e6ff]/40 flex items-center gap-2 font-bold transition-all cursor-pointer"
                    >
                      <FileCheck className="w-3.5 h-3.5" />
                      <span>VIEW_SCAN.PDF</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};
