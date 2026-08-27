import React, { useState } from 'react';
import {
  Cpu,
  Layers,
  Terminal,
  Database,
  Server,
  Code,
  Zap,
  Activity,
  CheckCircle,
  Play,
  RotateCcw,
} from 'lucide-react';

export const SkillsScreen: React.FC = () => {
  const [selectedSnippet, setSelectedSnippet] = useState<string>('typescript');
  const [simulatedLoad, setSimulatedLoad] = useState<number>(45);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [cacheHitRate, setCacheHitRate] = useState<number>(98.4);

  const architectureProficiencies = [
    {
      name: 'Local-First State Architecture',
      percentage: 95,
      description: 'IndexedDB, CRDT synchronization, background workers & zero-latency UI',
      color: 'from-[#a4e6ff] to-[#4cd6ff]',
    },
    {
      name: 'High-Concurrency Event Pipelines',
      percentage: 90,
      description: 'Fastify, Redis Streams, pub/sub topologies, asynchronous workers',
      color: 'from-[#4cd6ff] to-[#d1bcff]',
    },
    {
      name: 'Multi-Tenant Database Design',
      percentage: 92,
      description: 'PostgreSQL Row-Level Security (RLS), Kysely type-safe schemas, audit trails',
      color: 'from-[#d1bcff] to-[#7000ff]',
    },
    {
      name: 'Cloud-Native Container Orchestration',
      percentage: 88,
      description: 'Kubernetes, Docker namespaces, Helm charts, AWS VPCs',
      color: 'from-emerald-400 to-[#a4e6ff]',
    },
  ];

  const codeSnippets: Record<
    string,
    { title: string; language: string; code: string }
  > = {
    typescript: {
      title: 'Local-First CRDT Synced Store',
      language: 'TypeScript',
      code: `// LocalFirstStore.ts - High-Performance Client Cache
import { openDB, IDBPDatabase } from 'idb';

export class LocalStateEngine<T extends { id: string; version: number }> {
  private dbPromise: Promise<IDBPDatabase>;

  constructor(private storeName: string) {
    this.dbPromise = openDB('architect_cache_v2', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: 'id' });
        }
      },
    });
  }

  async upsertOptimistic(record: T): Promise<void> {
    const db = await this.dbPromise;
    await db.put(this.storeName, { ...record, synced: false, updatedAt: Date.now() });
    this.scheduleBackgroundSync(record);
  }
}`,
    },
    cpp: {
      title: 'Sub-Millisecond Zero-Copy Memory Mapper',
      language: 'C++20',
      code: `// MMapBuffer.hpp - Zero-Allocation Query Buffer
#include <sys/mman.h>
#include <fcntl.h>
#include <unistd.h>
#include <iostream>

template <typename HeaderType>
class MMapReader {
    void* mapped_region = nullptr;
    size_t length = 0;
public:
    explicit MMapReader(const char* filepath, size_t file_size) : length(file_size) {
        int fd = open(filepath, O_RDONLY);
        mapped_region = mmap(nullptr, length, PROT_READ, MAP_SHARED, fd, 0);
        close(fd);
    }
    const HeaderType* getHeader() const noexcept {
        return reinterpret_cast<const HeaderType*>(mapped_region);
    }
};`,
    },
    go: {
      title: 'High-Throughput Fast Ingestion Worker',
      language: 'Go 1.22',
      code: `// worker.go - Asynchronous Batch Ingestion
package main

import (
    "context"
    "sync"
    "time"
)

type EventBatch struct {
    Events []TelemetryPayload
    Flush  chan struct{}
}

func StartIngestWorker(ctx context.Context, incoming <-chan TelemetryPayload, batchSize int) {
    ticker := time.NewTicker(25 * time.Millisecond)
    defer ticker.Stop()

    buffer := make([]TelemetryPayload, 0, batchSize)
    for {
        select {
        case <-ctx.Done():
            return
        case item := <-incoming:
            buffer = append(buffer, item)
            if len(buffer) >= batchSize {
                flushBuffer(buffer)
                buffer = buffer[:0]
            }
        case <-ticker.C:
            if len(buffer) > 0 {
                flushBuffer(buffer)
                buffer = buffer[:0]
            }
        }
    }
}`,
    },
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setSimulatedLoad((prev) => Math.min(100, prev + Math.floor(Math.random() * 15)));
      setCacheHitRate((prev) => +(97 + Math.random() * 2.8).toFixed(1));
      if (step > 6) {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 400);
  };

  const handleResetSimulation = () => {
    setSimulatedLoad(45);
    setCacheHitRate(98.4);
    setIsSimulating(false);
  };

  return (
    <div className="w-full pt-28 pb-20 px-4 md:px-8 max-w-[1280px] mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="mb-14 border-b border-[#3c494e]/30 pb-8">
        <div className="flex items-center gap-2 font-label-caps text-xs text-[#a4e6ff] mb-2 tracking-widest">
          <Cpu className="w-3.5 h-3.5" />
          <span>CAPABILITIES // FULL-STACK SPECIFICATIONS</span>
        </div>
        <h1 className="font-display-lg text-[#dae2fd] tracking-tight">
          Systems Architecture & Capabilities
        </h1>
        <p className="font-body-base text-sm text-[#bbc9cf] mt-2 max-w-2xl">
          Deep computational fundamentals paired with pragmatic engineering. From low-level memory layouts in C++ to reactive multi-tier cloud microservices.
        </p>
      </div>

      {/* 1. Core Architecture Pillars with Visual Gauges */}
      <section className="mb-16">
        <div className="flex items-center gap-2 font-label-caps text-xs text-[#a4e6ff] mb-6 tracking-widest">
          <span>[01] ARCHITECTURAL DOMAINS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {architectureProficiencies.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#131b2e] border border-[#3c494e]/40 p-6 flex flex-col justify-between hover:border-[#a4e6ff]/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-headline-md text-lg text-[#dae2fd] group-hover:text-[#a4e6ff] transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-code-sm text-sm text-[#a4e6ff] font-bold">
                    {item.percentage}%
                  </span>
                </div>

                <p className="font-body-base text-xs text-[#bbc9cf] mb-4">
                  {item.description}
                </p>
              </div>

              {/* Progress Track */}
              <div className="w-full bg-[#060e20] h-2 rounded-none overflow-hidden border border-[#3c494e]/30">
                <div
                  className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Structured Tech Stack Matrix */}
      <section className="mb-16">
        <div className="flex items-center gap-2 font-label-caps text-xs text-[#a4e6ff] mb-6 tracking-widest">
          <span>[02] TECHNICAL SPECIFICATIONS MATRIX</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Languages */}
          <div className="bg-[#131b2e] border border-[#3c494e]/40 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#a4e6ff]">
                <Code className="w-5 h-5" />
                <h3 className="font-headline-md text-lg text-[#dae2fd]">
                  LANG_CORE
                </h3>
              </div>

              <ul className="space-y-2.5 font-code-sm text-xs text-[#bbc9cf]">
                <li className="flex items-center justify-between p-2 bg-[#060e20] border border-[#3c494e]/30">
                  <span>TypeScript / JavaScript</span>
                  <span className="text-[#a4e6ff]">v5.8 / ESNext</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-[#060e20] border border-[#3c494e]/30">
                  <span>C++ (Systems / DSA)</span>
                  <span className="text-[#a4e6ff]">C++20 / STL</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-[#060e20] border border-[#3c494e]/30">
                  <span>Go (Microservices)</span>
                  <span className="text-[#a4e6ff]">v1.22</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-[#060e20] border border-[#3c494e]/30">
                  <span>Python (ML & CLI)</span>
                  <span className="text-[#a4e6ff]">v3.11</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-[#060e20] border border-[#3c494e]/30">
                  <span>SQL (ANSI / PLpgSQL)</span>
                  <span className="text-[#a4e6ff]">PostgreSQL 16</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Frontend Layer */}
          <div className="bg-[#131b2e] border border-[#3c494e]/40 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#d1bcff]">
                <Layers className="w-5 h-5" />
                <h3 className="font-headline-md text-lg text-[#dae2fd]">
                  UI_LAYER
                </h3>
              </div>

              <ul className="space-y-2.5 font-code-sm text-xs text-[#bbc9cf]">
                <li className="flex items-center justify-between p-2 bg-[#060e20] border border-[#3c494e]/30">
                  <span>React & Next.js</span>
                  <span className="text-[#d1bcff]">React 19 / RSC</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-[#060e20] border border-[#3c494e]/30">
                  <span>Tailwind CSS</span>
                  <span className="text-[#d1bcff]">v4.0 / PostCSS</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-[#060e20] border border-[#3c494e]/30">
                  <span>State Engines</span>
                  <span className="text-[#d1bcff]">Zustand / Redux</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-[#060e20] border border-[#3c494e]/30">
                  <span>Client Storage</span>
                  <span className="text-[#d1bcff]">IndexedDB / OPFS</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-[#060e20] border border-[#3c494e]/30">
                  <span>Animation</span>
                  <span className="text-[#d1bcff]">Motion / Framer</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Backend & Cloud */}
          <div className="bg-[#131b2e] border border-[#3c494e]/40 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-emerald-400">
                <Server className="w-5 h-5" />
                <h3 className="font-headline-md text-lg text-[#dae2fd]">
                  SRV_LAYER & CLOUD
                </h3>
              </div>

              <ul className="space-y-2.5 font-code-sm text-xs text-[#bbc9cf]">
                <li className="flex items-center justify-between p-2 bg-[#060e20] border border-[#3c494e]/30">
                  <span>Node.js / Fastify / Express</span>
                  <span className="text-emerald-400">Asynchronous</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-[#060e20] border border-[#3c494e]/30">
                  <span>PostgreSQL / Redis / Kysely</span>
                  <span className="text-emerald-400">Type-Safe ORM</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-[#060e20] border border-[#3c494e]/30">
                  <span>Kubernetes & Docker</span>
                  <span className="text-emerald-400">Containerized</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-[#060e20] border border-[#3c494e]/30">
                  <span>AWS Architecture</span>
                  <span className="text-emerald-400">VPC / CloudOps</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-[#060e20] border border-[#3c494e]/30">
                  <span>CI/CD Pipelines</span>
                  <span className="text-emerald-400">GitHub Actions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Code Inspector */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 font-label-caps text-xs text-[#a4e6ff] tracking-widest">
            <span>[03] LIVE ARCHITECTURE SNIPPET VIEWER</span>
          </div>

          {/* Language Selector Buttons */}
          <div className="flex gap-2">
            {Object.keys(codeSnippets).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedSnippet(key)}
                className={`font-code-sm text-xs px-3 py-1.5 border transition-all cursor-pointer ${
                  selectedSnippet === key
                    ? 'bg-[#a4e6ff] text-[#003543] font-bold border-[#a4e6ff]'
                    : 'bg-[#131b2e] text-[#bbc9cf] border-[#3c494e]/40 hover:border-[#a4e6ff]'
                }`}
              >
                {codeSnippets[key].language}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#060e20] border border-[#3c494e]/50 overflow-hidden">
          <div className="px-4 py-2.5 bg-[#131b2e] border-b border-[#3c494e]/30 flex items-center justify-between font-code-sm text-xs">
            <div className="flex items-center gap-2 text-[#dae2fd]">
              <Terminal className="w-4 h-4 text-[#a4e6ff]" />
              <span>{codeSnippets[selectedSnippet].title}</span>
            </div>
            <span className="text-[#859399]">
              LANG: {codeSnippets[selectedSnippet].language.toUpperCase()}
            </span>
          </div>

          <pre className="p-6 text-xs font-mono text-[#a4e6ff] overflow-x-auto leading-relaxed selection:bg-[#00566a] selection:text-white">
            <code>{codeSnippets[selectedSnippet].code}</code>
          </pre>
        </div>
      </section>

      {/* 4. Interactive Live System Telemetry Simulator */}
      <section className="bg-[#131b2e] border border-[#3c494e]/40 p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="font-label-caps text-xs text-[#a4e6ff] mb-1">
              SYS.TELEMETRY_BENCHMARK
            </div>
            <h3 className="font-headline-md text-xl text-[#dae2fd]">
              High-Concurrency Ingestion Simulation
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className="bg-[#a4e6ff] hover:bg-[#4cd6ff] text-[#003543] font-bold font-code-sm text-xs px-4 py-2 uppercase flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{isSimulating ? 'IN PROGRESS...' : 'RUN BENCHMARK'}</span>
            </button>
            <button
              onClick={handleResetSimulation}
              className="p-2 border border-[#3c494e] text-[#bbc9cf] hover:text-[#dae2fd] transition-colors cursor-pointer"
              title="Reset Benchmark"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-code-sm">
          <div className="bg-[#060e20] p-4 border border-[#3c494e]/30">
            <div className="text-[10px] text-[#859399] uppercase">
              THROUGHPUT LOAD
            </div>
            <div className="text-xl text-[#dae2fd] font-bold mt-1">
              {(simulatedLoad * 1250).toLocaleString()} req/sec
            </div>
            <div className="text-xs text-[#a4e6ff] mt-1">
              {simulatedLoad}% capacity
            </div>
          </div>

          <div className="bg-[#060e20] p-4 border border-[#3c494e]/30">
            <div className="text-[10px] text-[#859399] uppercase">
              REDIS L2 CACHE HIT
            </div>
            <div className="text-xl text-emerald-400 font-bold mt-1">
              {cacheHitRate}%
            </div>
            <div className="text-xs text-[#859399] mt-1">
              Sub-1.2ms p99 latency
            </div>
          </div>

          <div className="bg-[#060e20] p-4 border border-[#3c494e]/30">
            <div className="text-[10px] text-[#859399] uppercase">
              SOCKET PACKET DROPS
            </div>
            <div className="text-xl text-[#d1bcff] font-bold mt-1">
              0.000%
            </div>
            <div className="text-xs text-[#859399] mt-1">
              Zero-loss backpressure
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
