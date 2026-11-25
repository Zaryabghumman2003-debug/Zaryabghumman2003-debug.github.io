import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import VantraOSSection from './components/VantraOSSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsEducationSection from './components/SkillsEducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');
    if (!('IntersectionObserver' in window)) {
      sections.forEach((s) => s.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#07080d] text-slate-200 flex flex-col">
      <Navbar onOpenCV={() => setCvOpen(true)} />
      <main className="flex-1">
        <Hero onOpenCV={() => setCvOpen(true)} />
        <div className="reveal-section">
          <ServicesSection />
        </div>
        <div className="reveal-section">
          <VantraOSSection />
        </div>
        <div className="reveal-section">
          <ProjectsSection />
        </div>
        <div className="reveal-section">
          <ExperienceSection />
        </div>
        <div className="reveal-section">
          <SkillsEducationSection />
        </div>
        <div className="reveal-section">
          <ContactSection />
        </div>
      </main>
      <Footer />
      <CVModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
}
