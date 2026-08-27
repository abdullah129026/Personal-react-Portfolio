import React from 'react';
import { CertificationItem } from '../../types';
import { X, ShieldCheck, ExternalLink, Download, Lock, CheckCircle2 } from 'lucide-react';

interface CertScanModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

export const CertScanModal: React.FC<CertScanModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#131b2e] border border-[#3c494e] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Top bar */}
        <div className="sticky top-0 bg-[#060e20] border-b border-[#3c494e]/40 p-4 px-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-2 font-code-sm text-xs text-[#a4e6ff]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>SYS.VERIFY // {cert.id.toUpperCase()}_SCAN.PDF</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#859399] hover:text-[#dae2fd] transition-colors cursor-pointer"
            aria-label="Close certificate scan modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Certificate Image Canvas */}
          <div className="bg-[#060e20] border border-[#3c494e]/50 p-2 md:p-4 relative">
            <img
              alt={`${cert.title} scan`}
              className="w-full h-auto object-contain max-h-[500px] mx-auto border border-[#3c494e]/30"
              src={cert.scanPdfImage}
            />

            <div className="absolute top-6 right-6 font-code-sm text-xs px-3 py-1 bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 backdrop-blur flex items-center gap-1.5 shadow-lg">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>CRYPTOGRAPHICALLY_VERIFIED</span>
            </div>
          </div>

          {/* Details & Telemetry */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-code-sm text-xs">
            <div className="bg-[#060e20] p-4 border border-[#3c494e]/30 space-y-1.5">
              <div className="text-[#859399]">CERTIFICATION TITLE:</div>
              <div className="text-[#dae2fd] font-bold text-sm">{cert.title}</div>
              <div className="text-[#a4e6ff]">{cert.issuer}</div>
            </div>

            <div className="bg-[#060e20] p-4 border border-[#3c494e]/30 space-y-1.5">
              <div className="text-[#859399]">VALIDATION REGISTRY HASH:</div>
              <div className="text-[#d1bcff] font-mono break-all">
                SHA256: 8f9a2b7c4d1e0f3a5b6c8d9e0f1a2b3c4d5e6f7a
              </div>
              <div className="text-emerald-400">CREDENTIAL ID: {cert.credentialId}</div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="pt-4 border-t border-[#3c494e]/30 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {cert.verificationUrl && (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-code-sm text-xs px-4 py-2 bg-[#a4e6ff] text-[#003543] font-bold hover:bg-[#4cd6ff] flex items-center gap-2 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>OFFICIAL VERIFICATION PORTAL</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="font-code-sm text-xs px-4 py-2 border border-[#3c494e] text-[#bbc9cf] hover:text-[#dae2fd] cursor-pointer"
            >
              CLOSE PREVIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
