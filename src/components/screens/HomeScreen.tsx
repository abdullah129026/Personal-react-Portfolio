import React, { useState } from 'react';
import { PERSONAL_INFO, PROJECTS_DATA } from '../../data/portfolioData';
import { NavTab, ProjectItem } from '../../types';
import {
  ArrowRight,
  Code,
  Layers,
  GitCommit,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Database,
  Cpu,
  Shield,
  Activity,
} from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (tab: NavTab) => void;
  onSelectProject: (project: ProjectItem) => void;
  onManifestoClick: () => void;
  onContactClick: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectProject,
  onManifestoClick,
  onContactClick,
}) => {
  const [commits, setCommits] = useState(PERSONAL_INFO.commitsYtd);
  const [hoverProfile, setHoverProfile] = useState(false);
  const [simulatedLoad, setSimulatedLoad] = useState(false);

  const flagshipProjects = PROJECTS_DATA.filter((p) => p.category === 'flagship');

  const handleSimulateCommit = () => {
    setCommits((prev) => prev + 1);
    setSimulatedLoad(true);
    setTimeout(() => setSimulatedLoad(false), 1200);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-8 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#131b2e] border border-[#3c494e]/30 rounded-none mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-label-caps text-xs text-[#a4e6ff] tracking-wider">
                {PERSONAL_INFO.status}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display-lg text-[#dae2fd] tracking-tight mb-6">
              Software Engineer &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a4e6ff] via-[#4cd6ff] to-[#d1bcff]">
                Systems Architect.
              </span>
            </h1>

            {/* University & Bio */}
            <div className="font-body-base text-[#bbc9cf] text-lg mb-8 max-w-xl space-y-3 leading-relaxed">
              <p>
                <strong className="text-[#dae2fd]">
                  {PERSONAL_INFO.shortBio}
                </strong>
              </p>
              <p className="text-base text-[#859399]">
                {PERSONAL_INFO.extendedBio}
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto bg-[#a4e6ff] hover:bg-[#4cd6ff] text-[#003543] font-bold font-code-sm text-xs px-8 py-4 uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-[0_0_25px_rgba(164,230,255,0.25)] hover:shadow-[0_0_35px_rgba(76,214,255,0.4)] cursor-pointer"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onManifestoClick}
                className="w-full sm:w-auto font-code-sm text-xs px-6 py-4 border border-[#3c494e] hover:border-[#a4e6ff] text-[#bbc9cf] hover:text-[#dae2fd] bg-[#131b2e]/50 hover:bg-[#171f33] transition-all uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>_read_manifesto</span>
                <Code className="w-3.5 h-3.5 text-[#a4e6ff]" />
              </button>
            </div>

            {/* System Key Attributes */}
            <div className="mt-12 pt-8 border-t border-[#3c494e]/30 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <div className="font-label-caps text-[10px] text-[#859399] uppercase">
                  ARCHITECTURE
                </div>
                <div className="font-code-sm text-sm text-[#a4e6ff] font-bold mt-1">
                  Local-First
                </div>
              </div>
              <div>
                <div className="font-label-caps text-[10px] text-[#859399] uppercase">
                  ACADEMIC GPA
                </div>
                <div className="font-code-sm text-sm text-[#d1bcff] font-bold mt-1">
                  3.88 / 4.00
                </div>
              </div>
              <div>
                <div className="font-label-caps text-[10px] text-[#859399] uppercase">
                  STATUS
                </div>
                <div className="font-code-sm text-sm text-emerald-400 font-bold mt-1">
                  Open to Work
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile Image & Interactive Telemetry */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              className="relative group w-full max-w-[380px]"
              onMouseEnter={() => setHoverProfile(true)}
              onMouseLeave={() => setHoverProfile(false)}
            >
              {/* Decorative Corner Brackets */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#a4e6ff] pointer-events-none transition-all group-hover:scale-110" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#a4e6ff] pointer-events-none transition-all group-hover:scale-110" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#3c494e] pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#3c494e] pointer-events-none" />

              {/* Glowing Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#a4e6ff]/10 via-[#7000ff]/10 to-transparent blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Main Profile Canvas Card */}
              <div className="relative bg-[#131b2e] border border-[#3c494e]/40 p-4 transition-all duration-300 group-hover:border-[#a4e6ff]/50">
                <div className="relative overflow-hidden bg-[#060e20] aspect-[4/5] border border-[#3c494e]/30">
                  <img
                    alt="Abdullah Shaak"
                    className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    src={PERSONAL_INFO.avatarUrl}
                    referrerPolicy="no-referrer"
                  />

                  {/* High-tech HUD Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-transparent to-transparent opacity-90" />

                  {/* Live Status overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <div className="font-label-caps text-[10px] text-[#a4e6ff]">
                        SYS.OPERATOR
                      </div>
                      <div className="font-code-sm text-sm text-[#dae2fd] font-bold">
                        {PERSONAL_INFO.name}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-label-caps text-[10px] text-[#859399]">
                        LOCATION
                      </div>
                      <div className="font-code-sm text-xs text-[#bbc9cf]">
                        {PERSONAL_INFO.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Commits YTD Telemetry Bar */}
                <div className="mt-4 pt-3 border-t border-[#3c494e]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GitCommit className="w-4 h-4 text-emerald-400" />
                    <span className="font-label-caps text-xs text-[#859399]">
                      COMMITS (YTD):
                    </span>
                    <span className="font-code-sm text-sm text-[#dae2fd] font-bold">
                      {commits.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={handleSimulateCommit}
                    title="Simulate Git Commit Telemetry"
                    className="font-code-sm text-[10px] px-2 py-1 bg-[#171f33] hover:bg-[#a4e6ff]/20 text-[#a4e6ff] border border-[#3c494e] hover:border-[#a4e6ff] transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <Activity
                      className={`w-3 h-3 ${
                        simulatedLoad ? 'animate-spin text-emerald-400' : ''
                      }`}
                    />
                    <span>{simulatedLoad ? '+1 PUSHED' : 'SIMULATE'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Architecture Highlight Cards */}
      <section className="py-16 bg-[#060e20]/60 border-y border-[#3c494e]/20 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="font-label-caps text-xs text-[#a4e6ff] mb-2 tracking-widest">
                // SYSTEM HIGHLIGHTS
              </div>
              <h2 className="font-headline-md text-2xl md:text-3xl text-[#dae2fd]">
                Core Architectural Pillars
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="font-code-sm text-xs text-[#a4e6ff] hover:text-[#dae2fd] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>EXPLORE ALL PROJECTS</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: Local-First */}
            <div className="bg-[#131b2e] border border-[#3c494e]/40 p-6 relative group hover:border-[#a4e6ff]/60 transition-all">
              <div className="w-10 h-10 rounded bg-[#a4e6ff]/10 border border-[#a4e6ff]/30 flex items-center justify-center text-[#a4e6ff] mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-headline-md text-lg text-[#dae2fd] mb-2">
                Local-First & Offline Sync
              </h3>
              <p className="font-body-base text-sm text-[#bbc9cf] leading-relaxed">
                Prioritizing client-side state engines (IndexedDB, CRDTs) with resilient background synchronization protocols for instantaneous zero-latency user experiences.
              </p>
            </div>

            {/* Pillar 2: High Concurrency */}
            <div className="bg-[#131b2e] border border-[#3c494e]/40 p-6 relative group hover:border-[#d1bcff]/60 transition-all">
              <div className="w-10 h-10 rounded bg-[#d1bcff]/10 border border-[#d1bcff]/30 flex items-center justify-center text-[#d1bcff] mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-headline-md text-lg text-[#dae2fd] mb-2">
                High-Throughput Pipelines
              </h3>
              <p className="font-body-base text-sm text-[#bbc9cf] leading-relaxed">
                Asynchronous event-driven pipelines engineered in Go, Fastify, and Redis Sorted Sets capable of handling thousands of real-time telemetry events.
              </p>
            </div>

            {/* Pillar 3: Multi-Tenant Cloud */}
            <div className="bg-[#131b2e] border border-[#3c494e]/40 p-6 relative group hover:border-emerald-400/60 transition-all">
              <div className="w-10 h-10 rounded bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-headline-md text-lg text-[#dae2fd] mb-2">
                Enterprise Multi-Tenancy
              </h3>
              <p className="font-body-base text-sm text-[#bbc9cf] leading-relaxed">
                Row-Level Security (RLS) policies in PostgreSQL, hardened Kysely query builders, and SOC2-ready tenant isolation patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Projects Spotlight */}
      <section className="py-20 px-4 md:px-8 max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="font-label-caps text-xs text-[#a4e6ff] mb-2 tracking-widest">
              // FLAGSHIP DEPLOYMENTS
            </div>
            <h2 className="font-headline-md text-2xl md:text-3xl text-[#dae2fd]">
              Featured Production Systems
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="hidden sm:flex font-code-sm text-xs px-4 py-2 border border-[#3c494e] hover:border-[#a4e6ff] text-[#bbc9cf] hover:text-[#dae2fd] items-center gap-2 transition-all cursor-pointer"
          >
            <span>FULL CATALOG</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#a4e6ff]" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* CompetitionHub Spotlight */}
          {flagshipProjects[0] && (
            <div className="lg:col-span-7 bg-[#131b2e] border border-[#3c494e]/40 hover:border-[#a4e6ff]/50 transition-all flex flex-col group overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#060e20]">
                <img
                  alt={flagshipProjects[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={flagshipProjects[0].imageUrl}
                />
                <div className="absolute top-4 left-4 font-code-sm text-xs px-2.5 py-1 bg-[#060e20]/80 backdrop-blur border border-[#a4e6ff]/30 text-[#a4e6ff]">
                  FLAGSHIP_01 // {flagshipProjects[0].version}
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {flagshipProjects[0].stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-code-sm text-[11px] px-2 py-0.5 bg-[#171f33] text-[#bbc9cf] border border-[#3c494e]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-headline-md text-2xl text-[#dae2fd] mb-3 group-hover:text-[#a4e6ff] transition-colors">
                    {flagshipProjects[0].title}
                  </h3>

                  <p className="font-body-base text-sm text-[#bbc9cf] leading-relaxed mb-6">
                    {flagshipProjects[0].description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#3c494e]/30 flex items-center justify-between">
                  <span className="font-code-sm text-xs text-[#859399]">
                    {flagshipProjects[0].metrics}
                  </span>
                  <button
                    onClick={() => onSelectProject(flagshipProjects[0])}
                    className="font-code-sm text-xs text-[#a4e6ff] hover:text-white flex items-center gap-1.5 font-bold cursor-pointer"
                  >
                    <span>DEEP DIVE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Panacea PMS Spotlight */}
          {flagshipProjects[1] && (
            <div className="lg:col-span-5 bg-[#131b2e] border border-[#3c494e]/40 hover:border-[#d1bcff]/50 transition-all flex flex-col justify-between p-6 md:p-8 group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-code-sm text-xs px-2.5 py-1 bg-[#171f33] text-[#d1bcff] border border-[#d1bcff]/30">
                    FLAGSHIP_02 // {flagshipProjects[1].version}
                  </span>
                  <span className="font-label-caps text-xs text-[#859399]">
                    ENTERPRISE PMS
                  </span>
                </div>

                <h3 className="font-headline-md text-2xl text-[#dae2fd] mb-1 group-hover:text-[#d1bcff] transition-colors">
                  {flagshipProjects[1].title}
                </h3>
                <div className="font-code-sm text-xs text-[#859399] mb-4">
                  {flagshipProjects[1].subtitle}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {flagshipProjects[1].stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-code-sm text-[11px] px-2 py-0.5 bg-[#171f33] text-[#bbc9cf] border border-[#3c494e]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="font-body-base text-sm text-[#bbc9cf] leading-relaxed mb-6">
                  {flagshipProjects[1].description}
                </p>

                <div className="bg-[#060e20] p-4 border border-[#3c494e]/30 mb-6 font-code-sm text-xs text-[#bbc9cf] space-y-2">
                  <div className="text-[#a4e6ff]">// ARCHITECTURE HIGHLIGHTS:</div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> PostgreSQL RLS Isolation
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Type-Safe SQL with Kysely
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Double-Entry Ledger Reconciliation
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#3c494e]/30 flex items-center justify-between">
                <span className="font-code-sm text-xs text-emerald-400">
                  SOC2 READY
                </span>
                <button
                  onClick={() => onSelectProject(flagshipProjects[1])}
                  className="font-code-sm text-xs text-[#d1bcff] hover:text-white flex items-center gap-1.5 font-bold cursor-pointer"
                >
                  <span>INSPECT SPECS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
