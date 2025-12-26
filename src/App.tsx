import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Layers, 
  ShieldCheck, 
  Code2, 
  FolderTree, 
  Menu, 
  X, 
  Zap, 
  AlertTriangle, 
  Sparkles 
} from 'lucide-react';

// Importación de Secciones Modulares
import { IntroductionSection } from './sections/1_Introduction';
import { TheProblemSection } from './sections/2_TheProblem';
import { DecoratorsSection } from './sections/3_Decorators';
import { RulesSection } from './sections/4_Rules';
import { LayersSection } from './sections/5_Layers';
import { StructureSection } from './sections/6_Structure';
import { CodeExamplesSection } from './sections/7_CodeExamples';
import { BenefitsSection } from './sections/8_Benefits';

// Tipado estricto para la configuración de navegación
interface SectionConfig {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduccion');

  // Configuración Centralizada del Menú Lateral
  // Los IDs deben coincidir exactamente con los 'id' en los <section> de cada componente
  const sections: SectionConfig[] = [
    { id: 'introduccion', title: 'Introducción', icon: <BookOpen size={20} /> },
    { id: 'el-problema', title: 'El Problema', icon: <AlertTriangle size={20} /> },
    { id: 'decoradores', title: 'Decoradores', icon: <Sparkles size={20} /> },
    { id: 'regla-oro', title: 'Regla de Oro', icon: <ShieldCheck size={20} /> },
    { id: 'capas', title: 'Capas', icon: <Layers size={20} /> },
    { id: 'estructura', title: 'Estructura', icon: <FolderTree size={20} /> },
    { id: 'codigo', title: 'Ejemplos', icon: <Code2 size={20} /> },
    { id: 'beneficios', title: 'Beneficios', icon: <Zap size={20} /> },
  ];

  // Lógica de Scroll Spy (Observador de Intersección)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.2, 
        rootMargin: '-10% 0px -60% 0px' // Ajuste fino para detectar la sección activa visualmente
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex selection:bg-blue-100 selection:text-blue-900 bg-slate-50/50">
      
      {/* SIDEBAR DESKTOP */}
      <aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 bg-white border-r border-slate-200 p-6 z-40">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-blue-600 rounded-lg text-white">
            <Layers size={24} />
          </div>
          <h1 className="font-bold text-lg tracking-tight leading-tight">
            Guía Arquite-<br/>ctura Hexagonal
          </h1>
        </div>
        
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeSection === section.id 
                  ? 'bg-blue-50 text-blue-700 shadow-sm' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {section.icon}
              {section.title}
            </button>
          ))}
        </nav>

        <div className="mt-auto p-4 bg-slate-50 rounded-xl border border-slate-100">
          <p className="text-xs text-slate-500 mb-2 font-semibold">Diseñado para:</p>
          <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
            <Code2 size={16} className="text-blue-500" />
            <span>Clean Architects JR</span>
          </div>
        </div>
      </aside>

      {/* NAVBAR MOBILE */}
      <div className="lg:hidden fixed top-0 w-full glass-nav z-50 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers size={20} className="text-blue-600" />
          <span className="font-bold text-lg">Guía Arquite-ctura</span>
        </div>
        <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-slate-100 rounded-lg">
          <Menu size={24} />
        </button>
      </div>

      {/* DRAWER MOBILE */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-3/4 bg-white p-6 shadow-2xl flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold">Contenido</span>
              <button onClick={() => setIsSidebarOpen(false)}><X size={24} /></button>
            </div>
            <nav className="space-y-2 flex-1 overflow-y-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                      activeSection === section.id ? 'bg-blue-50 text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {section.icon}
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* ÁREA DE CONTENIDO PRINCIPAL */}
      <div className="flex-1 lg:ml-64 w-full">
        <main className="w-full py-12 lg:py-24">
          
          {/* Renderizado Secuencial de Módulos */}
          <IntroductionSection />
          <TheProblemSection />
          <DecoratorsSection />
          <RulesSection />
          <LayersSection />
          <StructureSection />
          <CodeExamplesSection />
          <BenefitsSection />

        </main>
      </div>
    </div>
  );
};

export default App;