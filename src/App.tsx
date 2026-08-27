import React, { useState, useEffect } from 'react';
import { NavTab, ProjectItem, CertificationItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MarqueeTicker } from './components/MarqueeTicker';
import { HomeScreen } from './components/screens/HomeScreen';
import { ProjectsScreen } from './components/screens/ProjectsScreen';
import { ExperienceScreen } from './components/screens/ExperienceScreen';
import { SkillsScreen } from './components/screens/SkillsScreen';
import { EducationScreen } from './components/screens/EducationScreen';

// Modals
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';
import { ManifestoModal } from './components/modals/ManifestoModal';
import { ResumeModal } from './components/modals/ResumeModal';
import { CertScanModal } from './components/modals/CertScanModal';
import { ImageLightboxModal } from './components/modals/ImageLightboxModal';
import { ContactModal } from './components/modals/ContactModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Modal States
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isManifestoOpen, setIsManifestoOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [previewImage, setPreviewImage] = useState<{
    url: string;
    title: string;
    caption?: string;
  } | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  // Toggle Theme
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    // Sync initial theme
    document.documentElement.classList.add('dark');
  }, []);

  // Keyboard shortcut listener (ESC to close modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setIsManifestoOpen(false);
        setIsResumeOpen(false);
        setSelectedCert(null);
        setPreviewImage(null);
        setIsContactOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenImagePreview = (url: string, title: string, caption?: string) => {
    setPreviewImage({ url, title, caption });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b1326] text-[#dae2fd] transition-colors selection:bg-[#00566a] selection:text-[#a4e6ff]">
      {/* Fixed Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onResumeClick={() => setIsResumeOpen(true)}
        onContactClick={() => setIsContactOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Dynamic View Area */}
      <main className="flex-1 flex flex-col items-center w-full">
        {activeTab === 'home' && (
          <>
            <HomeScreen
              onNavigate={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectProject={(p) => setSelectedProject(p)}
              onManifestoClick={() => setIsManifestoOpen(true)}
              onContactClick={() => setIsContactOpen(true)}
            />
            <MarqueeTicker />
          </>
        )}

        {activeTab === 'projects' && (
          <ProjectsScreen onSelectProject={(p) => setSelectedProject(p)} />
        )}

        {activeTab === 'experience' && (
          <ExperienceScreen
            onSelectCert={(cert) => setSelectedCert(cert)}
            onPreviewImage={handleOpenImagePreview}
          />
        )}

        {activeTab === 'skills' && <SkillsScreen />}

        {activeTab === 'education' && <EducationScreen />}
      </main>

      {/* Footer */}
      <Footer
        onContactClick={() => setIsContactOpen(true)}
        onResumeClick={() => setIsResumeOpen(true)}
        onManifestoClick={() => setIsManifestoOpen(true)}
      />

      {/* Interactive Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ManifestoModal
        isOpen={isManifestoOpen}
        onClose={() => setIsManifestoOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CertScanModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      <ImageLightboxModal
        image={previewImage}
        onClose={() => setPreviewImage(null)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
