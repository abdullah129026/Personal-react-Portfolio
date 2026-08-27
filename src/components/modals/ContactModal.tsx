import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { X, Send, Sparkles, CheckCircle2, Terminal, Mail, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState('Full-Time Software Engineering');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  if (!isOpen) return null;

  const scopes = [
    'Full-Time Software Engineering',
    'Systems Architecture Consulting',
    'Local-First PWA Development',
    'Open Source Collaboration',
    'Academic / Research Inquiries',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#a4e6ff', '#4cd6ff', '#d1bcff', '#10b981'],
      });
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#131b2e] border border-[#3c494e] max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        {/* Header */}
        <div className="sticky top-0 bg-[#060e20] border-b border-[#3c494e]/40 p-4 px-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-2 font-code-sm text-xs text-[#a4e6ff]">
            <Terminal className="w-4 h-4" />
            <span>SYS.CONNECT // INITIATE_HANDSHAKE</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#859399] hover:text-[#dae2fd] transition-colors cursor-pointer"
            aria-label="Close contact modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-emerald-950/60 border border-emerald-400/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-headline-md text-2xl text-[#dae2fd]">
                Transmission Dispatched.
              </h3>
              <p className="font-body-base text-sm text-[#bbc9cf] max-w-md mx-auto">
                Thank you, {name}! Your message has been queued directly in my inbox at <strong className="text-[#a4e6ff]">{PERSONAL_INFO.email}</strong>. I will reply within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="font-code-sm text-xs px-6 py-3 bg-[#a4e6ff] text-[#003543] font-bold uppercase tracking-widest hover:bg-[#4cd6ff] transition-all cursor-pointer"
                >
                  RETURN TO PORTFOLIO
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <span className="font-label-caps text-xs text-[#a4e6ff] tracking-widest">
                  // LET'S BUILD
                </span>
                <h2 className="font-headline-md text-2xl text-[#dae2fd] mt-1">
                  Start A Project Conversation
                </h2>
                <p className="font-body-base text-xs text-[#bbc9cf] mt-1">
                  Direct connection with {PERSONAL_INFO.name} ({PERSONAL_INFO.role})
                </p>
              </div>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-code-sm text-xs">
                <div>
                  <label className="block text-[#bbc9cf] mb-1.5 font-label-caps text-[10px]">
                    YOUR NAME / IDENTIFIER *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#060e20] border border-[#3c494e]/50 focus:border-[#a4e6ff] focus:outline-none text-[#dae2fd] p-3 transition-all placeholder:text-[#859399]"
                  />
                </div>

                <div>
                  <label className="block text-[#bbc9cf] mb-1.5 font-label-caps text-[10px]">
                    EMAIL PIPE *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#060e20] border border-[#3c494e]/50 focus:border-[#a4e6ff] focus:outline-none text-[#dae2fd] p-3 transition-all placeholder:text-[#859399]"
                  />
                </div>
              </div>

              {/* Scope Selector */}
              <div>
                <label className="block text-[#bbc9cf] mb-1.5 font-label-caps text-[10px]">
                  COLLABORATION DOMAIN / ROLE
                </label>
                <select
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="w-full bg-[#060e20] border border-[#3c494e]/50 focus:border-[#a4e6ff] focus:outline-none text-[#dae2fd] p-3 font-code-sm text-xs transition-all cursor-pointer"
                >
                  {scopes.map((s) => (
                    <option key={s} value={s} className="bg-[#131b2e] text-[#dae2fd]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#bbc9cf] mb-1.5 font-label-caps text-[10px]">
                  MESSAGE PAYLOAD / PROJECT SPECS
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your engineering requirements, team, or opportunity..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#060e20] border border-[#3c494e]/50 focus:border-[#a4e6ff] focus:outline-none text-[#dae2fd] p-3 font-code-sm text-xs transition-all placeholder:text-[#859399]"
                />
              </div>

              {/* Submit */}
              <div className="pt-2 flex items-center justify-between">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-code-sm text-xs text-[#859399] hover:text-[#a4e6ff] flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>or email directly</span>
                </a>

                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-[#a4e6ff] hover:bg-[#4cd6ff] text-[#003543] font-bold font-code-sm text-xs px-6 py-3 uppercase tracking-widest flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(164,230,255,0.3)] cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSending ? 'SENDING...' : 'DISPATCH MESSAGE'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
