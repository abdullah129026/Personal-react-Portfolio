import React from 'react';
import { Terminal, Cpu, Database, Network, ShieldCheck, Zap } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const tickerItems = [
    { icon: <Cpu className="w-3.5 h-3.5 text-[#a4e6ff]" />, text: 'CORE ARCHITECTURE: DISTRIBUTED & OFFLINE-FIRST' },
    { icon: <Database className="w-3.5 h-3.5 text-[#d1bcff]" />, text: 'DATA ENGINE: KYSELY // POSTGRESQL // INDEXEDDB' },
    { icon: <Network className="w-3.5 h-3.5 text-emerald-400" />, text: 'STREAM PROTOCOLS: WEBSOCKETS // FASTIFY // REDIS' },
    { icon: <ShieldCheck className="w-3.5 h-3.5 text-[#4cd6ff]" />, text: 'CLOUD & SRE: DOCKER // KUBERNETES // AWS' },
    { icon: <Zap className="w-3.5 h-3.5 text-amber-400" />, text: 'STATUS: ACTIVE FOR HIGH-IMPACT SOFTWARE ROLES' },
    { icon: <Terminal className="w-3.5 h-3.5 text-[#a4e6ff]" />, text: 'AWKUM CS // GPA 3.88/4.00' },
  ];

  return (
    <div className="w-full bg-[#060e20] border-y border-[#3c494e]/30 overflow-hidden py-2 select-none">
      <div className="flex animate-marquee whitespace-nowrap gap-10">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs font-code-sm text-[#bbc9cf]">
            {item.icon}
            <span className="tracking-wider">{item.text}</span>
            <span className="text-[#3c494e] font-bold">///</span>
          </div>
        ))}
      </div>
    </div>
  );
};
