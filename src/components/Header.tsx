import React, { useState } from 'react';
import { NavTab } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, FileText, Sun, Moon, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onResumeClick: () => void;
  onContactClick: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onResumeClick,
  onContactClick,
  theme,
  toggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'education', label: 'EDUCATION' },
  ];

  const handleNav = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0b1326]/80 dark:bg-[#0b1326]/80 light:bg-[#f4f6fa]/90 backdrop-blur-xl border-b border-[#3c494e]/20 transition-colors">
      <div className="h-16 max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <img
            alt="Personal Brand Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src={PERSONAL_INFO.logoUrl}
          />
          <span className="font-headline-md tracking-tighter text-[#dae2fd] dark:text-[#dae2fd] group-hover:text-[#a4e6ff] transition-colors">
            {PERSONAL_INFO.brandName}
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`font-label-caps py-2 transition-all cursor-pointer relative text-xs tracking-[0.15em] ${
                  isActive
                    ? 'text-[#a4e6ff] font-bold'
                    : 'text-[#bbc9cf] hover:text-[#dae2fd]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#a4e6ff] shadow-[0_0_8px_#a4e6ff]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Theme toggle, Resume, Contact & Profile Avatar */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-lg border border-[#3c494e]/40 hover:border-[#a4e6ff] text-[#bbc9cf] hover:text-[#a4e6ff] transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Quick Contact Action */}
          <button
            onClick={onContactClick}
            className="hidden lg:flex items-center gap-1.5 font-code-sm text-xs px-3 py-1.5 rounded border border-[#a4e6ff]/30 bg-[#a4e6ff]/10 hover:bg-[#a4e6ff]/20 text-[#a4e6ff] transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONNECT</span>
          </button>

          {/* Resume Button */}
          <button
            onClick={onResumeClick}
            className="font-code-sm text-xs px-4 py-2 border border-[#3c494e] hover:border-[#a4e6ff] hover:bg-[#a4e6ff]/10 transition-all text-[#bbc9cf] hover:text-[#dae2fd] hidden sm:flex items-center gap-2 uppercase tracking-widest cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#a4e6ff]" />
            <span>Resume</span>
          </button>

          {/* Profile Avatar with clickable quick about */}
          <button
            onClick={() => handleNav('home')}
            className="relative cursor-pointer focus:outline-none group"
            title="Abdullah Shaak"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full border border-[#3c494e] group-hover:border-[#a4e6ff] object-cover transition-all"
              src={PERSONAL_INFO.avatarUrl}
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0b1326]" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#bbc9cf] hover:text-[#dae2fd] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#131b2e] border-b border-[#3c494e]/40 px-6 py-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-left font-label-caps py-2 px-3 rounded text-sm tracking-widest ${
                activeTab === item.id
                  ? 'bg-[#171f33] text-[#a4e6ff] font-bold border-l-2 border-[#a4e6ff]'
                  : 'text-[#bbc9cf] hover:text-[#dae2fd]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex gap-2 pt-2 border-t border-[#3c494e]/30">
            <button
              onClick={() => {
                onResumeClick();
                setMobileMenuOpen(false);
              }}
              className="flex-1 font-code-sm text-xs py-2 px-3 border border-[#3c494e] text-center text-[#dae2fd] rounded uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-[#a4e6ff]" />
              Resume
            </button>
            <button
              onClick={() => {
                onContactClick();
                setMobileMenuOpen(false);
              }}
              className="flex-1 font-code-sm text-xs py-2 px-3 bg-[#a4e6ff] text-[#003543] font-bold text-center rounded uppercase tracking-wider"
            >
              Let's Build
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
