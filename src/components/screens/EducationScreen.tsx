import React, { useState } from 'react';
import { ACADEMIC_DATA } from '../../data/portfolioData';
import { CourseworkModule } from '../../types';
import {
  GraduationCap,
  MapPin,
  Calendar,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Award,
  Terminal,
  Activity,
  Network,
  Cpu,
  Layers,
} from 'lucide-react';

export const EducationScreen: React.FC = () => {
  const [expandedCode, setExpandedCode] = useState<string | null>('CS-301');
  const [graphMode, setGraphMode] = useState<'flow' | 'memory' | 'latency'>('flow');

  const toggleExpand = (code: string) => {
    setExpandedCode(expandedCode === code ? null : code);
  };

  return (
    <div className="w-full pt-28 pb-20 px-4 md:px-8 max-w-[1280px] mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="mb-14 border-b border-[#3c494e]/30 pb-8">
        <div className="flex items-center gap-2 font-label-caps text-xs text-[#a4e6ff] mb-2 tracking-widest">
          <GraduationCap className="w-4 h-4" />
          <span>ACADEMIC PROFILE // EDUCATION & PEDAGOGY</span>
        </div>
        <h1 className="font-display-lg text-[#dae2fd] tracking-tight">
          Computer Science Degree & Core Coursework
        </h1>
        <p className="font-body-base text-sm text-[#bbc9cf] mt-2 max-w-2xl">
          Theoretical foundations, rigorous computational complexity analysis, systems programming, and software engineering principles.
        </p>
      </div>

      {/* Main Degree Card with Campus Map Background */}
      <section className="mb-16">
        <div className="relative bg-[#131b2e] border border-[#3c494e]/40 overflow-hidden group hover:border-[#a4e6ff]/50 transition-all">
          {/* Map Image Background */}
          <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none">
            <img
              alt="AWKUM Campus Map"
              className="w-full h-full object-cover grayscale contrast-150"
              src={ACADEMIC_DATA.mapImageUrl}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-[#131b2e]/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#3c494e]/30">
              <div>
                <div className="flex items-center gap-2 font-code-sm text-xs text-[#a4e6ff] mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{ACADEMIC_DATA.status.toUpperCase()} // {ACADEMIC_DATA.completion.toUpperCase()}</span>
                </div>
                <h2 className="font-headline-md text-3xl md:text-4xl text-[#dae2fd] mb-2">
                  {ACADEMIC_DATA.degreeType} in {ACADEMIC_DATA.major}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-sm font-code-sm text-[#bbc9cf]">
                  <span className="text-[#dae2fd] font-bold">
                    {ACADEMIC_DATA.university}
                  </span>
                  <span className="flex items-center gap-1 text-[#859399]">
                    <MapPin className="w-3.5 h-3.5 text-[#a4e6ff]" />
                    {ACADEMIC_DATA.location}
                  </span>
                  <span className="flex items-center gap-1 text-[#859399]">
                    <Calendar className="w-3.5 h-3.5 text-[#a4e6ff]" />
                    {ACADEMIC_DATA.years}
                  </span>
                </div>
              </div>

              {/* Cumulative GPA Badge */}
              <div className="bg-[#060e20] border border-[#3c494e]/40 p-4 min-w-[200px] flex flex-col items-center justify-center">
                <span className="font-label-caps text-[10px] text-[#859399] tracking-widest">
                  CUMULATIVE GPA
                </span>
                <span className="font-code-sm text-3xl font-bold text-[#a4e6ff] mt-1">
                  {ACADEMIC_DATA.gpa}
                </span>
                <span className="font-code-sm text-[10px] text-emerald-400 mt-1">
                  TOP 3% DEPARTMENTAL RANK
                </span>
              </div>
            </div>

            {/* Sub-Telemetry Specs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 font-code-sm text-xs text-[#bbc9cf]">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#d1bcff]" />
                <div>
                  <div className="text-[10px] text-[#859399] uppercase">
                    ACADEMIC HONORS
                  </div>
                  <div className="text-[#dae2fd] font-bold">
                    Dean's List of Academic Distinction
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-[#a4e6ff]" />
                <div>
                  <div className="text-[10px] text-[#859399] uppercase">
                    THESIS / CAPSTONE FOCUS
                  </div>
                  <div className="text-[#dae2fd] font-bold">
                    Distributed Consensus & Local-First State
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-[10px] text-[#859399] uppercase">
                    PRACTICAL LAB CREDITS
                  </div>
                  <div className="text-[#dae2fd] font-bold">
                    100% Practical Implementation Passed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Coursework Modules */}
      <section className="mb-16">
        <div className="flex items-center gap-2 font-label-caps text-xs text-[#a4e6ff] mb-6 tracking-widest">
          <span>[01] CORE CURRICULUM SYLLABI</span>
        </div>

        <div className="space-y-4">
          {ACADEMIC_DATA.coursework.map((course: CourseworkModule) => {
            const isExpanded = expandedCode === course.code;
            return (
              <div
                key={course.code}
                className={`bg-[#131b2e] border transition-all ${
                  isExpanded
                    ? 'border-[#a4e6ff] shadow-[0_0_20px_rgba(164,230,255,0.08)]'
                    : 'border-[#3c494e]/40 hover:border-[#3c494e]'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleExpand(course.code)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                    <span className="font-code-sm text-xs px-2.5 py-1 bg-[#060e20] text-[#a4e6ff] border border-[#3c494e]/40 font-bold">
                      {course.code}
                    </span>
                    <div>
                      <h3 className="font-headline-md text-lg md:text-xl text-[#dae2fd]">
                        {course.title}
                      </h3>
                      <p className="font-body-base text-xs text-[#859399] mt-0.5 max-w-xl">
                        {course.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#a4e6ff]">
                    <span className="font-code-sm text-xs hidden sm:inline">
                      {isExpanded ? 'COLLAPSE' : 'SYLLABUS'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Expanded Detailed Topics */}
                {isExpanded && (
                  <div className="px-5 pb-6 md:px-6 md:pb-6 pt-2 border-t border-[#3c494e]/30 animate-in fade-in duration-200">
                    <div className="font-label-caps text-[11px] text-[#859399] mb-3 uppercase tracking-wider">
                      KEY LEARNING MODULES & IMPLEMENTED ALGORITHMS:
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {course.topics.map((topic, tIdx) => (
                        <div
                          key={tIdx}
                          className="bg-[#060e20] border border-[#3c494e]/30 p-3 flex items-start gap-2.5 font-code-sm text-xs text-[#bbc9cf]"
                        >
                          <span className="text-[#a4e6ff] font-bold">0{tIdx + 1}.</span>
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Live Animated Knowledge Graph / Compilation Simulator */}
      <section className="bg-[#060e20] border border-[#3c494e]/40 p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#3c494e]/30">
          <div>
            <div className="font-label-caps text-xs text-[#a4e6ff] mb-1">
              SYS.COMPILATION_GRAPH // REAL-TIME TOPOLOGY
            </div>
            <h3 className="font-headline-md text-xl text-[#dae2fd]">
              Academic Synthesis & Knowledge Mapping
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {(['flow', 'memory', 'latency'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setGraphMode(mode)}
                className={`font-code-sm text-xs px-3 py-1 border uppercase cursor-pointer transition-all ${
                  graphMode === mode
                    ? 'bg-[#a4e6ff] text-[#003543] font-bold border-[#a4e6ff]'
                    : 'bg-[#131b2e] text-[#bbc9cf] border-[#3c494e]/40 hover:border-[#a4e6ff]'
                }`}
              >
                {mode}_MAP
              </button>
            ))}
          </div>
        </div>

        {/* Visual Matrix Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-code-sm text-xs">
          <div className="bg-[#131b2e] p-4 border border-[#3c494e]/30">
            <div className="text-[10px] text-[#859399]">DATA STRUCTURES</div>
            <div className="text-sm font-bold text-[#a4e6ff] mt-1">O(1) AMORTIZED</div>
            <div className="text-[10px] text-emerald-400 mt-2">✓ Trees, Hashes, Heaps</div>
          </div>

          <div className="bg-[#131b2e] p-4 border border-[#3c494e]/30">
            <div className="text-[10px] text-[#859399]">KERNEL CONCURRENCY</div>
            <div className="text-sm font-bold text-[#d1bcff] mt-1">NON-BLOCKING</div>
            <div className="text-[10px] text-emerald-400 mt-2">✓ Mutexes, Epoll, POSIX</div>
          </div>

          <div className="bg-[#131b2e] p-4 border border-[#3c494e]/30">
            <div className="text-[10px] text-[#859399]">NETWORK PROTOCOLS</div>
            <div className="text-sm font-bold text-emerald-400 mt-1">TCP / UDP / TLS1.3</div>
            <div className="text-[10px] text-emerald-400 mt-2">✓ Congestion Control</div>
          </div>

          <div className="bg-[#131b2e] p-4 border border-[#3c494e]/30">
            <div className="text-[10px] text-[#859399]">DISTRIBUTED STATE</div>
            <div className="text-sm font-bold text-[#4cd6ff] mt-1">CRDT CONVERGENCE</div>
            <div className="text-[10px] text-emerald-400 mt-2">✓ Raft, Paxos, Eventual</div>
          </div>
        </div>
      </section>
    </div>
  );
};
