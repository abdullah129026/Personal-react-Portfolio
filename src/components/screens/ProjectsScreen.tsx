import React, { useState, useMemo } from 'react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { ProjectItem } from '../../types';
import {
  Search,
  Filter,
  ArrowUpRight,
  Github,
  Zap,
  Terminal,
  Database,
  Layers,
  ArrowRight,
  ExternalLink,
  Code,
  Radio,
} from 'lucide-react';

interface ProjectsScreenProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'ALL_MODULES' },
    { id: 'flagship', label: 'FLAGSHIP_SYSTEMS' },
    { id: 'architecture', label: 'DEPLOYED_ARCHITECTURE' },
    { id: 'micro', label: 'MICRO_UTILITIES' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      const matchCategory =
        activeCategory === 'all' || p.category === activeCategory;
      const matchQuery =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.stack.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  const flagshipList = filteredProjects.filter((p) => p.category === 'flagship');
  const archList = filteredProjects.filter((p) => p.category === 'architecture');
  const microList = filteredProjects.filter((p) => p.category === 'micro');

  return (
    <div className="w-full pt-28 pb-20 px-4 md:px-8 max-w-[1280px] mx-auto animate-in fade-in duration-300">
      {/* Header & Section Title */}
      <div className="mb-12 border-b border-[#3c494e]/30 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-label-caps text-xs text-[#a4e6ff] mb-2 tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>SYS.CATALOG // PRODUCTION DIRECTORY</span>
            </div>
            <h1 className="font-display-lg text-[#dae2fd] tracking-tight">
              Systems & Software Catalog
            </h1>
            <p className="font-body-base text-sm text-[#bbc9cf] mt-2 max-w-2xl">
              Architected for high throughput, local-first determinism, and seamless user experiences. Explore production builds, core topologies, and low-level tools.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#859399] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search stack, title, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#131b2e] border border-[#3c494e]/40 focus:border-[#a4e6ff] focus:outline-none text-[#dae2fd] text-xs font-code-sm pl-9 pr-4 py-2.5 transition-all placeholder:text-[#859399]"
            />
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
          <span className="font-label-caps text-[11px] text-[#859399] mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> FILTER:
          </span>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-label-caps text-xs px-3.5 py-1.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#a4e6ff] text-[#003543] font-bold shadow-[0_0_15px_rgba(164,230,255,0.3)]'
                    : 'bg-[#131b2e] text-[#bbc9cf] hover:text-[#dae2fd] border border-[#3c494e]/40 hover:border-[#a4e6ff]/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. Flagship Bento Grid */}
      {flagshipList.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center gap-2 font-label-caps text-xs text-[#a4e6ff] mb-6 tracking-widest">
            <span>[01] FLAGSHIP ARCHITECTURES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {flagshipList.map((project, idx) => {
              const isFirst = idx === 0;
              return (
                <div
                  key={project.id}
                  className={`${
                    isFirst ? 'lg:col-span-7' : 'lg:col-span-5'
                  } bg-[#131b2e] border border-[#3c494e]/40 hover:border-[#a4e6ff]/50 transition-all flex flex-col justify-between group`}
                >
                  {project.imageUrl && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#060e20] border-b border-[#3c494e]/30">
                      <img
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={project.imageUrl}
                      />
                      <div className="absolute top-3 left-3 font-code-sm text-[11px] px-2.5 py-1 bg-[#060e20]/90 backdrop-blur border border-[#a4e6ff]/30 text-[#a4e6ff]">
                        {project.version}
                      </div>
                    </div>
                  )}

                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-label-caps text-xs text-[#859399]">
                          {project.subtitle || '// MACHINE LEARNING & EVALUATION'}
                        </span>
                        {project.version && !project.imageUrl && (
                          <span className="font-code-sm text-[11px] px-2 py-0.5 bg-[#171f33] text-[#a4e6ff] border border-[#3c494e]/30">
                            {project.version}
                          </span>
                        )}
                      </div>

                      <h3 className="font-headline-md text-2xl text-[#dae2fd] mb-3 group-hover:text-[#a4e6ff] transition-colors">
                        {project.title}
                      </h3>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="font-code-sm text-[11px] px-2 py-0.5 bg-[#171f33] text-[#bbc9cf] border border-[#3c494e]/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <p className="font-body-base text-sm text-[#bbc9cf] leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#3c494e]/30 flex items-center justify-between">
                      <span className="font-code-sm text-xs text-[#859399]">
                        {project.metrics || 'ENTERPRISE CERTIFIED'}
                      </span>
                      <button
                        onClick={() => onSelectProject(project)}
                        className="font-code-sm text-xs text-[#a4e6ff] hover:text-white flex items-center gap-1.5 font-bold cursor-pointer transition-colors"
                      >
                        <span>VIEW SPECIFICATIONS</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 2. Deployed Architecture Cards */}
      {archList.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center gap-2 font-label-caps text-xs text-[#a4e6ff] mb-6 tracking-widest">
            <span>[02] DEPLOYED ARCHITECTURES & NATIVE SYSTEMS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {archList.map((project) => (
              <div
                key={project.id}
                className="bg-[#131b2e] border border-[#3c494e]/40 hover:border-[#4cd6ff]/60 transition-all p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-code-sm text-xs px-2 py-0.5 bg-[#171f33] text-[#4cd6ff] border border-[#3c494e]/30">
                      {project.version}
                    </span>
                    <span className="font-label-caps text-[10px] text-[#859399]">
                      SYSTEM_NODE
                    </span>
                  </div>

                  <h3 className="font-headline-md text-xl text-[#dae2fd] mb-3 group-hover:text-[#4cd6ff] transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-code-sm text-[10px] px-2 py-0.5 bg-[#171f33] text-[#bbc9cf] border border-[#3c494e]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="font-body-base text-sm text-[#bbc9cf] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#3c494e]/30 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="font-code-sm text-xs text-[#a4e6ff] hover:text-white flex items-center gap-1 font-bold cursor-pointer"
                  >
                    <span>ARCHITECTURE DOCS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <ExternalLink className="w-3.5 h-3.5 text-[#859399] group-hover:text-[#a4e6ff] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. Micro-Projects & Utilities Table */}
      {microList.length > 0 && (
        <section>
          <div className="flex items-center gap-2 font-label-caps text-xs text-[#a4e6ff] mb-6 tracking-widest">
            <span>[03] MICRO-PROJECTS & UTILITY TOOLS</span>
          </div>

          <div className="bg-[#131b2e] border border-[#3c494e]/40 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#3c494e]/40 bg-[#060e20]/60 font-label-caps text-xs text-[#859399]">
                  <th className="py-3.5 px-4 font-normal">PROJECT NAME</th>
                  <th className="py-3.5 px-4 font-normal">VERSION</th>
                  <th className="py-3.5 px-4 font-normal">TECH STACK</th>
                  <th className="py-3.5 px-4 font-normal">FUNCTIONALITY</th>
                  <th className="py-3.5 px-4 font-normal text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3c494e]/20 font-code-sm text-xs text-[#bbc9cf]">
                {microList.map((project) => (
                  <tr
                    key={project.id}
                    className="hover:bg-[#171f33]/80 transition-colors group cursor-pointer"
                    onClick={() => onSelectProject(project)}
                  >
                    <td className="py-4 px-4 font-bold text-[#dae2fd] group-hover:text-[#a4e6ff] transition-colors whitespace-nowrap">
                      {project.title}
                    </td>
                    <td className="py-4 px-4 text-[#859399]">
                      {project.version || 'v1.0.0'}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1">
                        {project.stack.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] px-1.5 py-0.5 bg-[#060e20] text-[#a4e6ff] border border-[#3c494e]/30"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-xs max-w-xs text-[#bbc9cf] truncate">
                      {project.description}
                    </td>
                    <td className="py-4 px-4 text-right whitespace-nowrap">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(project);
                        }}
                        className="font-code-sm text-xs text-[#a4e6ff] hover:underline inline-flex items-center gap-1"
                      >
                        <span>INSPECT</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
};
