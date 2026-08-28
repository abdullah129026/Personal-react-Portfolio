import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Heart, Code2 } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
  onResumeClick: () => void;
  onManifestoClick: () => void;
}
export const Footer: React.FC<FooterProps> = ({
  onContactClick,
  onResumeClick,
  onManifestoClick,
}) => {
  return (
    <footer className="w-full bg-[#060e20] border-t border-[#3c494e]/30 mt-20 pt-16 pb-12 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  alt="Personal Brand Logo"
                  className="h-8 w-auto object-contain"
                  src={PERSONAL_INFO.logoUrl}
                />
                <span className="font-headline-md tracking-tighter text-[#dae2fd]">
                  {PERSONAL_INFO.brandName}
                </span>
                <span className="font-code-sm text-xs px-2 py-0.5 rounded bg-[#171f33] text-[#a4e6ff] border border-[#a4e6ff]/20">
                  SYS_BUILD.2025
                </span>
              </div>
              <p className="text-[#bbc9cf] text-sm leading-relaxed max-w-md font-body-base">
                Engineering resilient software architectures, offline-first applications, and high-throughput distributed systems. Available for challenging engineering roles and high-impact software projects.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                onClick={onContactClick}
                className="bg-[#a4e6ff] hover:bg-[#4cd6ff] text-[#003543] font-bold font-code-sm text-xs px-6 py-3 rounded-none uppercase tracking-widest flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(164,230,255,0.2)] cursor-pointer"
              >
                <span>LET'S BUILD TOGETHER</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={onManifestoClick}
                className="font-code-sm text-xs px-5 py-3 border border-[#3c494e] hover:border-[#a4e6ff] text-[#bbc9cf] hover:text-[#dae2fd] transition-all uppercase tracking-widest cursor-pointer"
              >
                _READ_MANIFESTO
              </button>
            </div>
          </div>

          {/* Quick Links & Modules */}
          <div className="md:col-span-3">
            <h4 className="font-label-caps text-xs text-[#a4e6ff] mb-4 tracking-widest">
              SYSTEM MODULES
            </h4>
            <ul className="space-y-2.5 font-code-sm text-xs text-[#bbc9cf]">
              <li>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#a4e6ff] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#3c494e]">#</span> MODULE_00 // HOME_CORE
                </button>
              </li>
              <li>
                <button
                  onClick={onResumeClick}
                  className="hover:text-[#a4e6ff] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#3c494e]">#</span> MODULE_01 // ATS_RESUME
                </button>
              </li>
              <li>
                <button
                  onClick={onManifestoClick}
                  className="hover:text-[#a4e6ff] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#3c494e]">#</span> MODULE_02 // MANIFESTO
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-[#a4e6ff] transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[#3c494e]">#</span> DIRECT_PIPE // {PERSONAL_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Nodes & Telemetry */}
          <div className="md:col-span-3">
            <h4 className="font-label-caps text-xs text-[#a4e6ff] mb-4 tracking-widest">
              TELEMETRY & NODES
            </h4>
            <div className="flex flex-col gap-3 font-code-sm text-xs">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-[#131b2e] border border-[#3c494e]/30 hover:border-[#a4e6ff]/50 text-[#bbc9cf] hover:text-[#dae2fd] transition-all"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-[#a4e6ff]" />
                  <span>GitHub Node</span>
                </div>
                <span className="text-[10px] text-emerald-400">ONLINE</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-[#131b2e] border border-[#3c494e]/30 hover:border-[#a4e6ff]/50 text-[#bbc9cf] hover:text-[#dae2fd] transition-all"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-[#4cd6ff]" />
                  <span>LinkedIn Network</span>
                </div>
                <span className="text-[10px] text-[#bbc9cf]">CONNECT</span>
              </a>

              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-[#131b2e] border border-[#3c494e]/30 hover:border-[#a4e6ff]/50 text-[#bbc9cf] hover:text-[#dae2fd] transition-all"
              >
                <div className="flex items-center gap-2">
                  <Twitter className="w-4 h-4 text-[#d1bcff]" />
                  <span>X / Twitter</span>
                </div>
                <span className="text-[10px] text-[#bbc9cf]">FOLLOW</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Tech Specs */}
        <div className="pt-8 border-t border-[#3c494e]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-code-sm text-[#859399]">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-[#a4e6ff]" />
            <span>
              ENGINEERED WITH REACT 19, TYPESCRIPT & TAILWIND CSS
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>LOCATION: {PERSONAL_INFO.location.toUpperCase()}</span>
            <span>STATUS: 200 OK</span>
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
