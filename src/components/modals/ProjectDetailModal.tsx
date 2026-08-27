import React from 'react';
import { ProjectItem } from '../../types';
import { X, ExternalLink, Github, Terminal, CheckCircle2, Shield, Layers } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#131b2e] border border-[#3c494e] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Header Bar */}
        <div className="sticky top-0 bg-[#060e20] border-b border-[#3c494e]/40 p-4 px-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-2 font-code-sm text-xs text-[#a4e6ff]">
            <Terminal className="w-4 h-4" />
            <span>SYS.INSPECT // {project.title.toUpperCase()}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#859399] hover:text-[#dae2fd] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Optional Project Hero Image */}
          {project.imageUrl && (
            <div className="aspect-[16/9] w-full overflow-hidden bg-[#060e20] border border-[#3c494e]/30">
              <img
                alt={project.title}
                className="w-full h-full object-cover"
                src={project.imageUrl}
              />
            </div>
          )}

          {/* Title & Version */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-code-sm text-xs px-2.5 py-0.5 bg-[#060e20] text-[#a4e6ff] border border-[#3c494e]/40">
                {project.version || 'v1.0.0'}
              </span>
              <span className="font-label-caps text-xs text-[#859399] uppercase">
                {project.category.toUpperCase()}_DEPLOYMENT
              </span>
            </div>
            <h2 className="font-headline-md text-3xl text-[#dae2fd]">
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="font-code-sm text-xs text-[#859399] mt-1">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-code-sm text-xs px-3 py-1 bg-[#171f33] text-[#bbc9cf] border border-[#3c494e]/40"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-3 font-body-base text-sm text-[#bbc9cf] leading-relaxed">
            <p>{project.longDescription || project.description}</p>
          </div>

          {/* Architecture Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="bg-[#060e20] p-5 border border-[#3c494e]/30 space-y-3">
              <div className="font-label-caps text-xs text-[#a4e6ff] flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                <span>ARCHITECTURAL GUARANTEES & BENCHMARKS</span>
              </div>
              <ul className="space-y-2 font-code-sm text-xs text-[#bbc9cf]">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics */}
          {project.metrics && (
            <div className="font-code-sm text-xs text-[#859399] border-t border-[#3c494e]/30 pt-4 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>{project.metrics}</span>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-[#3c494e]/30 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-code-sm text-xs px-4 py-2.5 bg-[#060e20] border border-[#3c494e] hover:border-[#a4e6ff] text-[#bbc9cf] hover:text-[#dae2fd] flex items-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>SOURCE CODE</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-code-sm text-xs px-5 py-2.5 bg-[#a4e6ff] text-[#003543] font-bold hover:bg-[#4cd6ff] flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(164,230,255,0.3)]"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="font-code-sm text-xs px-4 py-2 text-[#859399] hover:text-[#dae2fd] cursor-pointer"
            >
              [ESC TO CLOSE]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
