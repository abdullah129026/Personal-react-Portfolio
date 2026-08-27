import React from 'react';
import { MANIFESTO_TEXT, PERSONAL_INFO } from '../../data/portfolioData';
import { X, Terminal, Shield, Cpu, Zap, ArrowRight } from 'lucide-react';

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ManifestoModal: React.FC<ManifestoModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#131b2e] border border-[#3c494e] max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative">
        {/* Top bar */}
        <div className="sticky top-0 bg-[#060e20] border-b border-[#3c494e]/40 p-4 px-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-2 font-code-sm text-xs text-[#a4e6ff]">
            <Terminal className="w-4 h-4" />
            <span>SYS.PHILOSOPHY // THE_ARCHITECT_MANIFESTO</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#859399] hover:text-[#dae2fd] transition-colors cursor-pointer"
            aria-label="Close manifesto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 space-y-8">
          <div>
            <span className="font-label-caps text-xs text-[#a4e6ff] tracking-widest">
              // ENGINEERING ETHOS
            </span>
            <h2 className="font-headline-md text-3xl text-[#dae2fd] mt-1">
              The Architect's Manifesto
            </h2>
            <p className="font-body-base text-xs text-[#859399] mt-1">
              Authored by {PERSONAL_INFO.name} • Version 2025.1
            </p>
          </div>

          <div className="space-y-6">
            {/* Principle 1 */}
            <div className="p-5 bg-[#060e20] border border-[#3c494e]/40 space-y-2">
              <div className="flex items-center gap-2 font-headline-md text-base text-[#a4e6ff]">
                <Cpu className="w-4 h-4" />
                <h3>1. Determinism Over Ambiguity</h3>
              </div>
              <p className="font-body-base text-xs text-[#bbc9cf] leading-relaxed">
                Code is a computational contract. When building distributed systems or client-side interfaces, hidden side-effects are liabilities. We prioritize explicit data flow, strict typing, and pure functional state transformations.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-5 bg-[#060e20] border border-[#3c494e]/40 space-y-2">
              <div className="flex items-center gap-2 font-headline-md text-base text-[#d1bcff]">
                <Zap className="w-4 h-4" />
                <h3>2. Local-First As A First Principle</h3>
              </div>
              <p className="font-body-base text-xs text-[#bbc9cf] leading-relaxed">
                The user’s device is not merely a dumb terminal for remote cloud servers. By treating client memory and storage (IndexedDB, OPFS) as authoritative local stores with background synchronization, applications remain instantaneous, resilient, and immune to network volatility.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-5 bg-[#060e20] border border-[#3c494e]/40 space-y-2">
              <div className="flex items-center gap-2 font-headline-md text-base text-emerald-400">
                <Shield className="w-4 h-4" />
                <h3>3. Mechanical Sympathy</h3>
              </div>
              <p className="font-body-base text-xs text-[#bbc9cf] leading-relaxed">
                Software must respect the physical constraints of silicon: cache lines, memory allocation overhead, and thread concurrency. Whether structuring a database schema in PostgreSQL or rendering 60 FPS graphics in WebGL, true engineering balances clean abstraction with hardware awareness.
              </p>
            </div>

            {/* Principle 4 */}
            <div className="p-5 bg-[#060e20] border border-[#3c494e]/40 space-y-2">
              <div className="flex items-center gap-2 font-headline-md text-base text-[#4cd6ff]">
                <Terminal className="w-4 h-4" />
                <h3>4. Zero Unnecessary Complexity</h3>
              </div>
              <p className="font-body-base text-xs text-[#bbc9cf] leading-relaxed">
                We measure architectural excellence not by how many microservices we deploy, but by how elegantly a problem is solved with minimal moving parts. Simplicity is the pinnacle of engineering discipline.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#3c494e]/30 flex items-center justify-between">
            <span className="font-code-sm text-xs text-[#859399]">
              STATUS: COMMITTED TO REPO
            </span>
            <button
              onClick={onClose}
              className="bg-[#a4e6ff] text-[#003543] font-bold font-code-sm text-xs px-6 py-2.5 hover:bg-[#4cd6ff] transition-all cursor-pointer"
            >
              ACKNOWLEDGE & CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
