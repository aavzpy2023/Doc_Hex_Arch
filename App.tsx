
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Layers, 
  ShieldCheck, 
  Code2, 
  FolderTree, 
  ChevronRight, 
  Menu, 
  X, 
  Zap, 
  CheckCircle2, 
  AlertTriangle, 
  Github, 
  Globe, 
  Monitor, 
  Cpu, 
  ArrowRightLeft, 
  Server, 
  Package, 
  Sparkles, 
  Database, 
  Copy, 
  Check, 
  Settings, 
  Puzzle, 
  Boxes, 
  Compass, 
  Cpu as MemoryIcon,
  GitBranch,
  ArrowDownWideNarrow,
  Workflow,
  TableProperties
} from 'lucide-react';

// Types
interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
}

// Helper Components
const CodeBlock: React.FC<{ code: string; language?: string; filename?: string }> = ({ code, language = 'python', filename }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-xl overflow-hidden bg-white shadow-xl border border-slate-200 w-full relative group">
      {filename && (
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 text-slate-500 text-xs font-mono flex items-center justify-between">
          <div className="flex items-center gap-2">
              <Code2 size={14} className="text-slate-400" />
              <span className="font-semibold tracking-tight">{filename}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-40 uppercase tracking-widest font-bold">{language}</span>
            <button 
              onClick={handleCopy}
              className="p-1.5 hover:bg-slate-200 rounded-md transition-colors text-slate-400 hover:text-slate-600"
              title="Copiar código"
            >
              {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
            </button>
          </div>
        </div>
      )}
      {!filename && (
        <button 
          onClick={handleCopy}
          className="absolute right-4 top-4 p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
        >
          {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} className="text-slate-400" />}
        </button>
      )}
      <div className="p-6 bg-white overflow-visible">
        <code className="block text-black font-mono text-[13px] leading-relaxed whitespace-pre-wrap">
          {code.trim().split('\n').map((line, i) => (
            <div key={i} className="flex hover:bg-slate-50/50 transition-colors">
              <span className="w-10 shrink-0 text-slate-300 text-right pr-4 select-none border-r border-slate-100 mr-4">{i + 1}</span>
              <span>{line || '\u00A0'}</span>
            </div>
          ))}
        </code>
      </div>
    </div>
  );
};

const FileNode: React.FC<{ name: string; icon?: React.ReactNode; children?: React.ReactNode }> = ({ name, icon, children }) => (
  <div className="relative ml-4 py-1">
    <div className="flex items-center gap-2 group">
      <div className="text-slate-400">
        {icon || <FolderTree size={16} />}
      </div>
      <span className="text-slate-700 font-mono text-sm group-hover:text-blue-600 cursor-default transition-colors">{name}</span>
    </div>
    {children && <div className="border-l border-slate-200 ml-2 mt-1">{children}</div>}
  </div>
);

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('introduccion');

  const sections: Section[] = [
    { id: 'introduccion', title: 'Introducción', icon: <BookOpen size={20} /> },
    { id: 'el-problema', title: 'El Problema', icon: <AlertTriangle size={20} /> },
    { id: 'decoradores', title: 'Decoradores', icon: <Sparkles size={20} /> },
    { id: 'regla-oro', title: 'Regla de Oro', icon: <ShieldCheck size={20} /> },
    { id: 'capas', title: 'Capas', icon: <Layers size={20} /> },
    { id: 'estructura', title: 'Estructura', icon: <FolderTree size={20} /> },
    { id: 'codigo', title: 'Ejemplos', icon: <Code2 size={20} /> },
    { id: 'beneficios', title: 'Beneficios', icon: <Zap size={20} /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
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
      {/* Sidebar - Desktop */}
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

      {/* Mobile Nav */}
      <div className="lg:hidden fixed top-0 w-full glass-nav z-50 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers size={20} className="text-blue-600" />
          <span className="font-bold text-lg">Guía Arquite-ctura Hexagonal</span>
        </div>
        <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-slate-100 rounded-lg">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
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

      {/* Main Content - Updated for True Full Width */}
      <div className="flex-1 lg:ml-64 w-full">
        <main className="w-full py-12 lg:py-24">
          
          {/* Header Hero */}
          <section id="introduccion" className="mb-20 w-full px-4 md:px-0">
            <div className="px-6 md:px-12 lg:px-20">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-6 tracking-wider uppercase">Arquitectura de Software Profesional</span>
                <h2 className="text-4xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-tight">
                Desmitificando la Arquitectura Hexagonal
                </h2>
                <div className="space-y-6 text-xl text-slate-600 leading-relaxed mb-10">
                <p>
                    La Arquitectura Hexagonal, también conocida como el patrón de <strong>"Puertos y Adaptadores"</strong>, no es solo una forma de organizar carpetas; es una filosofía de diseño que pone el valor del negocio en el centro absoluto del software. Imagine que está construyendo una estación espacial modular: cada módulo (funcionalidad) debe poder conectarse a la estación central (dominio) de forma estandarizada, sin importar si el soporte de vida es de un fabricante u otro.
                </p>
                <p>
                    En el mundo real del desarrollo, esto significa que su lógica para calcular impuestos, registrar usuarios o procesar pagos debe ser totalmente independiente de si los datos se guardan en una base de datos Oracle, un archivo JSON o se envían a través de una API REST de terceros. Esta separación radical garantiza que el código más importante —el que resuelve problemas reales del usuario— sea inmune al envejecimiento tecnológico y a las modas de frameworks.
                </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 w-full">
                <div className="p-10 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                    <h3 className="font-bold text-2xl mb-4 flex items-center gap-3">
                    <CheckCircle2 size={28} className="text-green-500" />
                    Soberanía del Dominio
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                    El negocio dicta las reglas, no la tecnología. Si su base de datos necesita un cambio de esquema, su lógica de negocio no debería enterarse ni cambiar una sola línea de código.
                    </p>
                </div>
                <div className="p-10 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                    <h3 className="font-bold text-2xl mb-4 flex items-center gap-3">
                    <CheckCircle2 size={28} className="text-green-500" />
                    Evolución sin Miedo
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                    Permite realizar "Upgrades" tecnológicos de forma quirúrgica. Cambiar de Postgres a MongoDB se convierte en una tarea de infraestructura, no en una reconstrucción total del sistema.
                    </p>
                </div>
                </div>
            </div>
          </section>

          {/* The Problem Section */}
          <section id="el-problema" className="py-20 border-t border-slate-200 w-full px-6 md:px-12 lg:px-20">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <AlertTriangle className="text-amber-500" size={32} />
              El Gran Problema de la Arquitectura Tradicional
            </h2>
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed mb-12">
              <p>
                Durante años, el estándar de la industria fue la <strong>Arquitectura en N capas</strong>. Aunque útil en su momento, introdujo un acoplamiento mortal: la lógica de negocio dependía directamente de la base de datos. Si querías probar si un descuento se aplicaba correctamente, tenías que levantar una base de datos real, configurar conexiones y lidiar con latencias.
              </p>
              <p>
                Esto crea lo que llamamos la <strong>"Gran Bola de Lodo"</strong>: un software donde un pequeño cambio en un controlador HTTP acaba rompiendo un reporte de fin de mes porque todo está entrelazado. La Arquitectura Hexagonal invierte esta relación para que el mundo técnico sirva al negocio, y no al revés.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center p-16 bg-white border border-slate-100 rounded-[3rem] mb-12 shadow-sm w-full">
              <div className="text-center space-y-4 flex-1">
                <div className="text-xs text-slate-400 font-bold uppercase mb-4 tracking-widest">Modelo Acoplado (3 Capas)</div>
                <div className="px-10 py-6 bg-slate-50 border border-slate-200 rounded-xl shadow-sm font-bold text-slate-400">UI / Presentación</div>
                <div className="h-10 w-0.5 bg-slate-200 mx-auto"></div>
                <div className="px-10 py-6 bg-slate-50 border border-slate-200 rounded-xl shadow-sm font-bold text-slate-400">Business Logic (Atado a DB)</div>
                <div className="h-10 w-0.5 bg-slate-200 mx-auto"></div>
                <div className="px-10 py-6 bg-red-50 border border-red-100 rounded-xl shadow-sm font-bold text-red-400">Base de Datos (Dicta todo)</div>
              </div>
              <div className="text-slate-300 font-black text-4xl hidden md:block px-12 italic">EVOLUCIONA A</div>
              <div className="text-center space-y-4 flex-1">
                <div className="text-xs text-blue-500 font-bold uppercase mb-4 tracking-widest">Modelo Hexagonal (Libertad)</div>
                <div className="flex items-center justify-center w-72 h-72 bg-blue-600 rounded-full text-white font-bold relative group shadow-2xl shadow-blue-200 mx-auto">
                  <div className="absolute inset-0 border-4 border-dashed border-blue-300 rounded-full animate-[spin_15s_linear_infinite] opacity-30"></div>
                  <div className="flex flex-col items-center">
                    <ShieldCheck size={48} className="mb-3" />
                    <span className="text-2xl tracking-tight">Dominio</span>
                    <span className="text-xs font-normal opacity-70 uppercase tracking-widest mt-1">El Núcleo Inmortal</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Decorators Section */}
          <section id="decoradores" className="py-20 border-t border-slate-200 w-full px-6 md:px-12 lg:px-20">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-amber-600">
              <Sparkles size={32} />
              Herramientas en Python: Decoradores Profesionales
            </h2>
            <div className="space-y-6 text-lg text-slate-600 mb-12">
              <p>
                Python ofrece una sintaxis elegante para implementar la rigurosidad necesaria en la Arquitectura Hexagonal. Los decoradores no son solo "azúcar sintáctico"; son declaraciones de intención que ayudan a los desarrolladores y a las herramientas de análisis de código (como MyPy) a entender las fronteras de nuestro sistema.
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
              <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Boxes size={24} /></div>
                  <h4 className="font-bold text-slate-900 text-lg">@dataclass</h4>
                </div>
                <p className="text-base text-slate-600 leading-relaxed flex-1">
                  Esencial para crear "Value Objects". Al usar <code>frozen=True</code>, aseguramos que el objeto sea inmutable, lo cual es vital para evitar errores secundarios en la lógica de negocio.
                </p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-all flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><Settings size={24} /></div>
                  <h4 className="font-bold text-slate-900 text-lg">@property</h4>
                </div>
                <p className="text-base text-slate-600 leading-relaxed flex-1">
                  Permite encapsular el acceso a los datos. Podemos transformar un campo interno en un atributo de solo lectura, protegiendo el estado de nuestras entidades.
                </p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-amber-300 transition-all flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><ShieldCheck size={24} /></div>
                  <h4 className="font-bold text-slate-900 text-lg">@abstractmethod</h4>
                </div>
                <p className="text-base text-slate-600 leading-relaxed flex-1">
                  La piedra angular de los <strong>Puertos</strong>. Define el contrato técnico que cualquier adaptador (Postgres, S3, Email) debe cumplir obligatoriamente.
                </p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><Puzzle size={24} /></div>
                  <h4 className="font-bold text-slate-900 text-lg">@classmethod</h4>
                </div>
                <p className="text-base text-slate-600 leading-relaxed flex-1">
                  Ideal para implementar el patrón <strong>Factory</strong>. Permite crear instancias de entidades con validaciones previas de una forma semántica y limpia.
                </p>
              </div>
            </div>
          </section>

          {/* Rule Section */}
          <section id="regla-oro" className="py-20 border-t border-slate-200 w-full px-6 md:px-12 lg:px-20">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-blue-800">
              <ShieldCheck size={32} />
              La Regla de Oro: Inversión de Dependencias
            </h2>
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed mb-12">
              <p>
                Este es el concept más difícil de digerir para quienes vienen de arquitecturas tradicionales: <strong>el Dominio no conoce a nadie</strong>. No sabe qué es una base de datos, no sabe qué es una petición HTTP, no sabe qué es un servidor.
              </p>
              <p>
                Para lograr esto, aplicamos el <strong>Principio de Inversión de Dependencias (DIP)</strong>. En lugar de que el dominio llame a una base de datos, el dominio define una interfaz (Puerto) y es la infraestructura quien implementa esa interfaz y "se enchufa" al dominio.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden mb-12 w-full">
              <div className="relative z-10">
                <blockquote className="text-3xl md:text-5xl font-semibold italic mb-12 leading-tight">
                  "Las dependencias del código fuente solo pueden apuntar hacia el interior del hexágono, hacia el Dominio."
                </blockquote>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
                    <span className="text-xs font-bold uppercase opacity-60 block mb-4 tracking-widest">Infraestructura</span>
                    <p className="text-lg font-medium leading-snug">Sabe cómo funcionan las bases de datos y la red. Depende de Aplicación y Dominio.</p>
                    <ChevronRight className="mt-6 opacity-50" />
                  </div>
                  <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
                    <span className="text-xs font-bold uppercase opacity-60 block mb-4 tracking-widest">Aplicación</span>
                    <p className="text-lg font-medium leading-snug">Conoce el flujo del sistema pero no los detalles técnicos. Solo depende del Dominio.</p>
                    <ChevronRight className="mt-6 opacity-50" />
                  </div>
                  <div className="p-8 bg-white/20 rounded-2xl backdrop-blur-md border border-white/40 border-l-4 border-l-blue-400">
                    <span className="text-xs font-bold uppercase block mb-4 text-blue-200 tracking-widest">Dominio</span>
                    <p className="text-lg font-bold leading-snug">Es autosuficiente. No depende de nada. Contiene solo reglas puras.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none">
                <Layers size={500} />
              </div>
            </div>
          </section>

          {/* Layers Section */}
          <section id="capas" className="py-20 border-t border-slate-200 w-full px-6 md:px-12 lg:px-20">
            <h2 className="text-3xl font-bold mb-16">Anatomía de las Capas: Un Desglose Detallado</h2>
            
            <div className="space-y-24">
              {/* Domain */}
              <div className="flex flex-col md:flex-row gap-16 group w-full">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-blue-600 font-bold mb-8">
                    <span className="px-4 py-1.5 bg-blue-100 rounded-full text-sm font-black uppercase tracking-widest">Nivel 1</span>
                    <h3 className="text-3xl">El Dominio: Reglas Eternas</h3>
                  </div>
                  <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8">
                    <p>Es la capa más estable. Si su empresa vende suscripciones, la regla de que "una suscripción vence a los 30 días" es una regla de dominio. No importa si la guarda en SQL o en una servilleta de papel.</p>
                  </div>
                  <ul className="text-lg space-y-6 text-slate-500">
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 p-1 bg-blue-50 rounded-lg"><CheckCircle2 size={24} className="text-blue-500" /></div>
                      <span><strong>Value Objects:</strong> Objetos inmutables que encapsulan lógica de validación. Un <code>UserEmail</code> no solo es un string; es un objeto que garantiza que tiene un '@'.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 p-1 bg-blue-50 rounded-lg"><CheckCircle2 size={24} className="text-blue-500" /></div>
                      <span><strong>Entidades:</strong> Modelos que tienen un ciclo de vida y una identidad única. Ejemplo: Un <code>Pedido</code> que pasa de 'pendiente' a 'pagado'.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 p-1 bg-blue-50 rounded-lg"><CheckCircle2 size={24} className="text-blue-500" /></div>
                      <span><strong>Puertos (Interfaces):</strong> Definiciones abstractas de lo que el dominio necesita para funcionar (ej. <code>UserRepository</code>).</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-slate-50 rounded-[3rem] p-12 border border-slate-100 flex flex-col justify-center shadow-inner group-hover:bg-blue-50/30 transition-colors">
                  <p className="text-slate-700 font-semibold italic text-2xl leading-relaxed text-center">
                    "El Dominio es la única parte de su código por la que un cliente pagaría dinero real. Todo lo demás es fontanería técnica."
                  </p>
                </div>
              </div>

              {/* Applications */}
              <div className="flex flex-col md:flex-row gap-16 group w-full">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-indigo-600 font-bold mb-8">
                    <span className="px-4 py-1.5 bg-indigo-100 rounded-full text-sm font-black uppercase tracking-widest">Nivel 2</span>
                    <h3 className="text-3xl">Aplicación: El Director de Orquesta</h3>
                  </div>
                  <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8">
                    <p>Esta capa define <strong>qué</strong> hace el sistema. Implementa los casos de uso específicos que un usuario puede realizar. Si el Dominio sabe cómo calcular un descuento, la capa de Aplicación sabe cuándo debe llamarse ese cálculo al procesar una compra.</p>
                  </div>
                  <ul className="text-lg space-y-6 text-slate-500">
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 p-1 bg-indigo-50 rounded-lg"><Zap size={24} className="text-indigo-500" /></div>
                      <span><strong>Casos de Uso (Interactors):</strong> Unidades de trabajo que orquestan el flujo (ej. <code>RegisterUserUseCase</code>).</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 p-1 bg-indigo-50 rounded-lg"><Zap size={24} className="text-indigo-500" /></div>
                      <span><strong>Flujo Orquestado:</strong> Recupera una entidad del puerto, le pide al dominio que haga algo, y guarda el resultado de vuelta en el puerto.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-slate-50 rounded-[3rem] p-12 border border-slate-100 flex flex-col justify-center shadow-inner group-hover:bg-indigo-50/30 transition-colors">
                  <div className="flex justify-center mb-8">
                    <ArrowRightLeft className="text-indigo-300 w-24 h-24 animate-pulse" />
                  </div>
                  <p className="text-slate-600 text-center text-lg font-bold uppercase tracking-[0.2em]">Capa de Interacción Pura</p>
                </div>
              </div>

              {/* Infrastructure */}
              <div className="flex flex-col md:flex-row gap-16 group w-full">
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-slate-800 font-bold mb-8">
                    <span className="px-4 py-1.5 bg-slate-200 rounded-full text-sm font-black uppercase tracking-widest">Nivel 3</span>
                    <h3 className="text-3xl">Infraestructura: El Mundo Técnico</h3>
                  </div>
                  <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8">
                    <p>Es la capa más volátil y ruidosa. Aquí es donde los detalles técnicos cobran vida. Contiene todo el código que sabe hablar con el exterior, ya sea un navegador web, una base de datos o un servicio de colas de mensajes.</p>
                  </div>
                  <ul className="text-lg space-y-6 text-slate-500">
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 p-1 bg-slate-100 rounded-lg"><Server size={24} className="text-slate-600" /></div>
                      <span><strong>Adaptadores de Entrada:</strong> Transforman peticiones externas (HTTP, CLI, Eventos) en llamadas que la capa de Aplicación entiende.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1.5 p-1 bg-slate-100 rounded-lg"><Server size={24} className="text-slate-600" /></div>
                      <span><strong>Adaptadores de Salida:</strong> Son las implementaciones reales de los puertos del dominio. Aquí vive el código SQL, Redis, o clientes de AWS.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-slate-900 rounded-[3rem] p-12 flex flex-col justify-center shadow-2xl">
                  <div className="space-y-6 text-slate-300">
                    <div className="flex items-center gap-4">
                        <Database className="text-emerald-400 w-8 h-8" />
                        <span className="text-lg font-mono tracking-tight">PostgreSQL / MongoDB / DynamoDB</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Globe className="text-blue-400 w-8 h-8" />
                        <span className="text-lg font-mono tracking-tight">FastAPI / Flask / Django REST</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Settings className="text-amber-400 w-8 h-8" />
                        <span className="text-lg font-mono tracking-tight">Kafka / RabbitMQ / SQS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Structure Section */}
          <section id="estructura" className="py-20 border-t border-slate-200 w-full px-6 md:px-12 lg:px-20">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <FolderTree className="text-blue-600" size={32} />
              Estructura de Carpetas Screaming
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 w-full mb-16">
              <div className="p-12 bg-white border border-slate-200 rounded-[3rem] shadow-sm overflow-hidden">
                  <div className="text-xs text-slate-400 font-bold mb-8 uppercase tracking-[0.3em]">Directorio Raíz: src/</div>
                  <div className="w-full scale-110 origin-top-left">
                      <FileNode name="src/">
                          <FileNode name="domain/" icon={<ShieldCheck size={18} className="text-blue-500" />}>
                              <FileNode name="user/" icon={<Package size={18} className="text-blue-400" />}>
                                  <FileNode name="user_entity.py" icon={<Code2 size={16} />} />
                                  <FileNode name="user_repo.py" icon={<Code2 size={16} />} />
                                  <FileNode name="value_objects/">
                                      <FileNode name="user_id.py" icon={<Code2 size={16} />} />
                                      <FileNode name="user_name.py" icon={<Code2 size={16} />} />
                                      <FileNode name="user_email.py" icon={<Code2 size={16} />} />
                                      <FileNode name="user_created_at.py" icon={<Code2 size={16} />} />
                                  </FileNode>
                              </FileNode>
                          </FileNode>
                          <FileNode name="applications/" icon={<Zap size={18} className="text-indigo-500" />}>
                              <FileNode name="register_user/">
                                  <FileNode name="use_case.py" icon={<Code2 size={16} />} />
                              </FileNode>
                          </FileNode>
                          <FileNode name="infrastructure/" icon={<Server size={18} className="text-slate-500" />}>
                              <FileNode name="input/">
                                  <FileNode name="api/">
                                      <FileNode name="user_controller.py" icon={<Monitor size={16} />} />
                                  </FileNode>
                              </FileNode>
                              <FileNode name="output/">
                                  <FileNode name="persistence/">
                                      <FileNode name="postgres_user_repo.py" icon={<Database size={16} />} />
                                      <FileNode name="in_memory_user_repo.py" icon={<MemoryIcon size={16} className="text-amber-500" />} />
                                      <FileNode name="models.py" icon={<TableProperties size={16} className="text-emerald-500" />} />
                                  </FileNode>
                              </FileNode>
                          </FileNode>
                      </FileNode>
                  </div>
              </div>

              <div className="space-y-8 flex flex-col justify-start">
                  <div className="bg-blue-50 p-10 rounded-[2.5rem] border border-blue-100 shadow-sm">
                      <h4 className="font-bold text-blue-800 text-xl mb-6 flex items-center gap-2">
                        <CheckCircle2 size={24} />
                        ¿Por qué estructura desagregada?
                      </h4>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                          Robert C. Martin (Uncle Bob) dice que la arquitectura debe "gritar" la intención del negocio. Al ver esta carpeta <code>src/</code>, no ves un "Modelo-Vista-Controlador"; ves inmediatamente que el sistema maneja <strong>Usuarios</strong>.
                      </p>
                      <ul className="text-base space-y-6 text-slate-500">
                          <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</span>
                            <span><strong>Modularidad Extrema:</strong> Los Value Objects están separados de las entidades, permitiendo cambios quirúrgicos sin efectos secundarios.</span>
                          </li>
                          <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</span>
                            <span><strong>Testing Paralelo:</strong> Al tener <code>in_memory_user_repo.py</code>, puedes desarrollar y testear toda la lógica sin tener instalada una base de datos real.</span>
                          </li>
                      </ul>
                  </div>

                  <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-xl text-white">
                      <h4 className="font-bold text-blue-300 text-lg mb-4 flex items-center gap-2">
                        <Compass size={20} />
                        Estrategia Screaming
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Esta estructura "grita" qué hace el sistema. Al abrir la carpeta <code>domain</code>, ves inmediatamente conceptos de negocio como <strong>User</strong>, no detalles técnicos como "SQL" o "REST".
                      </p>
                  </div>
              </div>
            </div>

            {/* REST API AS INPUT ADAPTER SECTION */}
            <div className="w-full bg-indigo-50 border border-indigo-100 rounded-[3rem] p-12 mb-16 shadow-sm">
                <h4 className="font-bold text-indigo-900 text-2xl mb-6 flex items-center gap-3">
                    <Monitor size={28} />
                    El API REST como Adaptador de Entrada
                </h4>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            En el ecosistema hexagonal, el <strong>Controlador REST</strong> (<code>user_controller.py</code>) actúa como un centinela en la frontera de la aplicación. Su rol es puramente técnico: escucha peticiones HTTP, valida sintaxis y traduce el lenguaje de la web (JSON) al lenguaje de nuestro negocio.
                        </p>
                        <p>
                            Al interactuar con <code>register_user/use_case.py</code>, el controlador simplemente "pasa la pelota". El controlador conoce la existencia del Caso de Uso, pero el Caso de Uso es totalmente ignorante de que existe una API REST.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-indigo-100 shadow-inner">
                        <h5 className="font-bold text-indigo-800 mb-4 uppercase tracking-wider text-sm">¿Por qué este desacoplamiento es clave?</h5>
                        <ul className="space-y-4 text-base text-slate-600">
                            <li className="flex gap-3">
                                <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-1" />
                                <span><strong>Sustituibilidad:</strong> Puedes reemplazar la API REST por una interfaz de línea de comandos (CLI) o un consumidor de colas (RabbitMQ) sin tocar una sola línea de lógica de negocio.</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-1" />
                                <span><strong>Protección del Núcleo:</strong> Los errores o vulnerabilidades en el framework web (FastAPI/Flask) no afectan la integridad de tus entidades de dominio.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* FLOW EXPLANATION SECTION ENHANCED */}
            <div className="w-full bg-white border border-slate-200 rounded-[3rem] p-12 shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-blue-600 text-white rounded-2xl"><Workflow size={32} /></div>
                    <div>
                        <h3 className="text-3xl font-bold text-slate-900">Trazabilidad: El Camino de la Petición</h3>
                        <p className="text-slate-500 text-lg">Definición de Capas y Flujo Lógico entre Archivos</p>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
                    <div className="space-y-4">
                        <span className="text-[10px] font-black uppercase text-slate-400 block tracking-widest bg-slate-100 py-1 rounded">Infraestructura (In)</span>
                        <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto border-2 border-slate-200">
                            <Monitor className="text-slate-600" />
                        </div>
                        <h4 className="font-bold text-sm">user_controller.py</h4>
                        <p className="text-xs text-slate-500">Maneja el protocolo HTTP y la traducción de JSON.</p>
                    </div>
                    <div className="flex items-center justify-center hidden lg:flex mt-6">
                        <ChevronRight className="text-slate-300" />
                    </div>
                    <div className="space-y-4">
                        <span className="text-[10px] font-black uppercase text-indigo-400 block tracking-widest bg-indigo-50 py-1 rounded">Aplicación</span>
                        <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto border-2 border-indigo-200">
                            <Zap className="text-indigo-600" />
                        </div>
                        <h4 className="font-bold text-sm">use_case.py</h4>
                        <p className="text-xs text-slate-500">Coordina el flujo de negocio sin detalles técnicos.</p>
                    </div>
                    <div className="flex items-center justify-center hidden lg:flex mt-6">
                        <ChevronRight className="text-slate-300" />
                    </div>
                    <div className="space-y-4">
                        <span className="text-[10px] font-black uppercase text-blue-400 block tracking-widest bg-blue-50 py-1 rounded">Dominio</span>
                        <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto border-2 border-blue-200">
                            <Package className="text-blue-600" />
                        </div>
                        <h4 className="font-bold text-sm">user_entity.py</h4>
                        <p className="text-xs text-slate-500">Reglas puras del negocio y validación de estado.</p>
                    </div>
                    <div className="flex items-center justify-center hidden lg:flex mt-6">
                        <ChevronRight className="text-slate-300" />
                    </div>
                    <div className="space-y-4">
                        <span className="text-[10px] font-black uppercase text-amber-400 block tracking-widest bg-amber-50 py-1 rounded">Dominio (Puerto)</span>
                        <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto border-2 border-amber-200">
                            <ShieldCheck className="text-amber-600" />
                        </div>
                        <h4 className="font-bold text-sm">user_repo.py</h4>
                        <p className="text-xs text-slate-500">Contrato abstracto que el Dominio requiere.</p>
                    </div>
                    <div className="flex items-center justify-center hidden lg:flex mt-6">
                        <ChevronRight className="text-slate-300" />
                    </div>
                    <div className="space-y-4">
                        <span className="text-[10px] font-black uppercase text-emerald-400 block tracking-widest bg-emerald-50 py-1 rounded">Infraestructura (Out)</span>
                        <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200">
                            <Database className="text-emerald-600" />
                        </div>
                        <h4 className="font-bold text-sm">postgres_user_repo.py</h4>
                        <p className="text-xs text-slate-500">Implementación técnica y real del almacenamiento.</p>
                    </div>
                </div>

                <div className="mt-12 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                    <h5 className="font-bold text-slate-800 text-xl mb-6 flex items-center gap-2">
                        <ArrowDownWideNarrow size={24} className="text-blue-600" />
                        Detalle del Flujo de Ejecución (Paso a Paso):
                    </h5>
                    <div className="space-y-8 text-slate-600 text-lg leading-relaxed">
                        <div className="border-l-4 border-slate-200 pl-6">
                            <p className="font-bold text-slate-900 mb-2">1. Capa de Infraestructura (Entrada) - user_controller.py:</p>
                            <p>El flujo se inicia cuando el <strong>Adaptador de Entrada</strong> recibe una petición externa (como un POST de FastAPI). Su responsabilidad es técnica: valida el esquema del JSON y traduce los datos primitivos al lenguaje de la aplicación, llamando al método <code>execute</code> del Caso de Uso.</p>
                        </div>
                        
                        <div className="border-l-4 border-indigo-200 pl-6">
                            <p className="font-bold text-indigo-900 mb-2">2. Capa de Aplicación (Orquestación) - register_user/use_case.py:</p>
                            <p>El <strong>Caso de Uso</strong> actúa como director de orquesta. Define el flujo lógico (ej. "primero comprueba si existe, luego crea, luego guarda"). No contiene reglas de negocio complejas ni detalles técnicos; solo coordina la interacción entre el Dominio y los Puertos técnicos necesarios.</p>
                        </div>

                        <div className="border-l-4 border-blue-200 pl-6">
                            <p className="font-bold text-blue-900 mb-2">3. Capa de Dominio (Núcleo) - user_entity.py:</p>
                            <p>Aquí reside el corazón del sistema. El Caso de Uso instancia una <strong>Entidad</strong> de negocio. La entidad utiliza sus <strong>Value Objects</strong> para autovalidarse. Si el email es inválido, el Dominio detiene el proceso. Es un código puro, sin dependencias de frameworks ni de bases de datos.</p>
                        </div>

                        <div className="border-l-4 border-amber-200 pl-6">
                            <p className="font-bold text-amber-900 mb-2">4. Puerto de Dominio (Abstracción) - user_repo.py:</p>
                            <p>Para persistir el usuario, el Caso de Uso llama a un <strong>Puerto</strong>. Este es el punto clave de la <strong>Inversión de Dependencias</strong>: el Dominio define una interfaz (contrato) que él mismo posee, obligando a la infraestructura externa a adaptarse a sus necesidades y no al revés.</p>
                        </div>

                        <div className="border-l-4 border-emerald-200 pl-6">
                            <p className="font-bold text-emerald-900 mb-2">5. Capa de Infraestructura (Salida) - postgres_user_repo.py:</p>
                            <p>Finalmente, el <strong>Adaptador de Salida</strong> implementa el Puerto. Traduce la Entidad de Dominio a un modelo de base de datos (UserModel) y realiza la operación técnica de guardado mediante SQL. El flujo termina devolviendo el resultado a través de las capas hasta que el controlador envía la respuesta al cliente.</p>
                        </div>
                    </div>
                </div>
            </div>
          </section>

          {/* Code Examples */}
          <section id="codigo" className="py-20 border-t border-slate-200 w-full">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 px-6 md:px-12 lg:px-20">
              <Code2 className="text-blue-600" size={32} />
              Ejemplos de Código: Implementación Completa
            </h2>
            <div className="space-y-6 text-lg text-slate-600 mb-12 w-full px-6 md:px-12 lg:px-20">
              <p>
                A continuación se presenta una implementación paso a paso siguiendo la estructura profesional. Todos los bloques de código están organizados de forma secuencial para una mejor trazabilidad del flujo.
              </p>
            </div>

            <div className="space-y-12">
              {/* VALUE OBJECTS */}
              <div className="w-full">
                <h4 className="font-bold text-slate-800 text-2xl flex items-center gap-3 mb-6 px-6 md:px-12 lg:px-20">
                  1. Capa de Dominio: Value Objects (Inmutabilidad y Validación)
                </h4>
                
                <div className="w-full">
                  <CodeBlock 
                    filename="src/domain/user/value_objects/user_id.py"
                    code={`
from dataclasses import dataclass, field
import uuid

@dataclass(frozen=True)
class UserID:
    """Identificador único universal para el usuario."""
    value: str = field(default_factory=lambda: str(uuid.uuid4()))

    def __post_init__(self):
        # Validación avanzada: Comprobar formato UUID
        try:
            uuid.UUID(self.value)
        except ValueError:
            raise ValueError(f"ID no tiene formato UUID válido: {self.value}")

    @classmethod
    def from_string(cls, value: str) -> "UserID":
        """Reconstruye el ID desde un string primitivo."""
        return cls(value=value)
                    `}
                  />
                  <div className="p-6 bg-slate-50 border-l-4 border-blue-400 rounded-r-xl text-slate-700 text-sm leading-relaxed mx-6 md:mx-12 lg:px-20">
                      <p className="font-bold mb-2">Explicación Técnica:</p>
                      <p className="mb-2"><strong>@dataclass(frozen=True):</strong> Define una clase inmutable. Es vital en el dominio para asegurar que un ID no cambie una vez creado.</p>
                      <p className="mb-2"><strong>field(default_factory=...):</strong> Genera un UUID dinámicamente cada vez que se instancia un nuevo objeto.</p>
                      <p className="mb-2"><strong>__post_init__:</strong> Valida que el ID sea estructuralmente correcto. Si el valor es inválido, el objeto nunca se crea.</p>
                      <p><strong>@classmethod from_string:</strong> Patrón Factory que permite a otras capas (como la DB) instanciar el objeto de dominio sin conocer su lógica interna.</p>
                  </div>
                </div>

                <div className="w-full">
                  <CodeBlock 
                    filename="src/domain/user/value_objects/user_name.py"
                    code={`
from dataclasses import dataclass

@dataclass(frozen=True)
class UserName:
    """Encapsula el nombre del usuario con validaciones de negocio."""
    value: str

    def __post_init__(self):
        # Validaciones de longitud y contenido
        if not self.value or len(self.value) < 3:
            raise ValueError("El nombre debe tener al menos 3 caracteres")
        if len(self.value) > 60:
            raise ValueError("El nombre es demasiado largo (máx 60)")
        if self.value.isnumeric():
            raise ValueError("El nombre no puede ser puramente numérico")

    @classmethod
    def from_string(cls, value: str) -> "UserName":
        return cls(value=value)
                    `}
                  />
                  <div className="p-6 bg-slate-50 border-l-4 border-blue-400 rounded-r-xl text-slate-700 text-sm leading-relaxed mx-6 md:mx-12 lg:px-20">
                      <p className="font-bold mb-2">Explicación Técnica:</p>
                      <p>El <code>UserName</code> garantiza que cualquier nombre en nuestro sistema cumpla con las reglas de negocio, como la longitud mínima y el contenido alfanumérico.</p>
                  </div>
                </div>

                <div className="w-full">
                  <CodeBlock 
                    filename="src/domain/user/value_objects/user_email.py"
                    code={`
from dataclasses import dataclass
import re

@dataclass(frozen=True)
class UserEmail:
    """Valida el formato de email mediante reglas de negocio."""
    value: str

    def __post_init__(self):
        regex = r'^[a-z0-9]+[\\._]?[a-z0-9]+[@]\\w+[.]\\w{2,3}$'
        if not re.search(regex, self.value):
            raise ValueError(f"Email inválido: {self.value}")
        
        # Validación de negocio extra
        if "forbidden.com" in self.value:
            raise ValueError("Dominio de email prohibido por política")

    @classmethod
    def from_string(cls, value: str) -> "UserEmail":
        return cls(value=value)
                    `}
                  />
                  <div className="p-6 bg-slate-50 border-l-4 border-blue-400 rounded-r-xl text-slate-700 text-sm leading-relaxed mx-6 md:mx-12 lg:px-20">
                      <p className="font-bold mb-2">Explicación Técnica:</p>
                      <p>Encapsula la validación de formato mediante Regex, centralizando la lógica en el Dominio.</p>
                  </div>
                </div>

                <div className="w-full">
                  <CodeBlock 
                    filename="src/domain/user/value_objects/user_created_at.py"
                    code={`
from dataclasses import dataclass, field
from datetime import datetime

@dataclass(frozen=True)
class UserCreatedAt:
    """Representa la fecha de creación en el Dominio."""
    value: datetime = field(default_factory=datetime.utcnow)

    def __post_init__(self):
        if self.value > datetime.utcnow():
            raise ValueError("La fecha de creación no puede estar en el futuro")

    @classmethod
    def from_string(cls, value: str) -> "UserCreatedAt":
        """Factory para reconstruir desde un string ISO."""
        return cls(value=datetime.fromisoformat(value))
                    `}
                  />
                  <div className="p-6 bg-slate-50 border-l-4 border-blue-400 rounded-r-xl text-slate-700 text-sm leading-relaxed mx-6 md:mx-12 lg:px-20">
                      <p className="font-bold mb-2">Explicación Técnica:</p>
                      <p>Incluso las marcas de tiempo pueden ser <strong>Value Objects</strong>. Al incluirlas en el dominio, permitimos que las reglas de negocio (ej. "el usuario debe tener al menos 30 días de antigüedad") se ejecuten de forma pura.</p>
                  </div>
                </div>
              </div>

              {/* USER ENTITY */}
              <div className="w-full">
                <h4 className="font-bold text-slate-800 text-2xl flex items-center gap-3 mb-6 px-6 md:px-12 lg:px-20">
                  2. Capa de Dominio: Entidad User
                </h4>
                <CodeBlock 
                  filename="src/domain/user/user_entity.py"
                  code={`
from dataclasses import dataclass
from src.domain.user.value_objects.user_id import UserID
from src.domain.user.value_objects.user_name import UserName
from src.domain.user.value_objects.user_email import UserEmail
from src.domain.user.value_objects.user_created_at import UserCreatedAt

@dataclass
class User:
    """Entidad rica que representa a un Usuario del sistema."""
    id: UserID
    name: UserName
    email: UserEmail
    created_at: UserCreatedAt

    @classmethod
    def create(cls, name: str, email: str):
        """Factory para crear un usuario nuevo con validación total."""
        return cls(
            id=UserID(),
            name=UserName(name),
            email=UserEmail(email),
            created_at=UserCreatedAt()
        )
                  `}
                />
                <div className="p-6 bg-slate-50 border-l-4 border-blue-500 rounded-r-xl text-slate-700 text-sm leading-relaxed mx-6 md:mx-12 lg:px-20">
                    <p className="font-bold mb-2">Explicación Técnica:</p>
                    <p>La entidad <code>User</code> orquestra múltiples Value Objects. Al usar el método <code>create</code>, delegamos la validación a los objetos de valor, asegurando que el estado de la entidad siempre sea correcto.</p>
                </div>
              </div>

              {/* REPOSITORY INTERFACE */}
              <div className="w-full">
                <h4 className="font-bold text-slate-800 text-2xl flex items-center gap-3 mb-6 px-6 md:px-12 lg:px-20">
                  3. Capa de Dominio: Puerto (UserRepository)
                </h4>
                <CodeBlock 
                  filename="src/domain/user/user_repo.py"
                  code={`
from abc import ABC, abstractmethod
from src.domain.user.user_entity import User

class UserRepository(ABC):
    """Contrato abstracto para la persistencia de usuarios."""
    
    @abstractmethod
    def save(self, user: User) -> None:
        """Guarda una entidad de usuario."""
        pass

    @abstractmethod
    def find_by_email(self, email: str) -> User | None:
        """Recupera un usuario por su email."""
        pass
                  `}
                />
                <div className="p-6 bg-slate-50 border-l-4 border-amber-400 rounded-r-xl text-slate-700 text-sm leading-relaxed mx-6 md:mx-12 lg:px-20">
                    <p className="font-bold mb-2">Explicación Técnica:</p>
                    <p><strong>ABC (Abstract Base Class):</strong> Define el puerto. El dominio declara lo que necesita (guardar y buscar), pero no dice cómo hacerlo (SQL, NoSQL, etc.).</p>
                </div>
              </div>

              {/* USE CASE */}
              <div className="w-full">
                <h4 className="font-bold text-slate-800 text-2xl flex items-center gap-3 mb-6 px-6 md:px-12 lg:px-20">
                  4. Capa de Aplicación: Caso de Uso (Orquestación)
                </h4>
                <CodeBlock 
                  filename="src/applications/register_user/use_case.py"
                  code={`
from src.domain.user.user_repo import UserRepository
from src.domain.user.user_entity import User

class RegisterUserUseCase:
    """Implementa el flujo de registro de usuarios."""
    
    def __init__(self, repository: UserRepository):
        # Inyección de Dependencia: dependemos de la abstracción
        self.repository = repository

    def execute(self, data: dict):
        # 1. Comprobar existencia (Lógica de flujo)
        if self.repository.find_by_email(data['email']):
            raise ValueError("Usuario ya existente")
            
        # 2. Crear entidad (Lógica de negocio)
        user = User.create(name=data['name'], email=data['email'])
        
        # 3. Guardar (Persistencia agnóstica)
        self.repository.save(user)
        
        return {"id": user.id.value, "status": "ok"}
                  `}
                />
                <div className="p-6 bg-slate-50 border-l-4 border-indigo-500 rounded-r-xl text-slate-700 text-sm leading-relaxed mx-6 md:mx-12 lg:px-20">
                    <p className="font-bold mb-2">Explicación Técnica:</p>
                    <p>El caso de uso es agnóstico a la tecnología. Utiliza el repositorio (puerto) para persistir datos, permitiendo que la lógica sea testeable sin una base de datos real.</p>
                </div>
              </div>

              {/* NEW SECTION: DATABASE SCHEMA / MODELS */}
              <div className="w-full">
                <h4 className="font-bold text-slate-800 text-2xl flex items-center gap-3 mb-6 px-6 md:px-12 lg:px-20">
                  5. Capa de Infraestructura: Definición de Tablas (SQLAlchemy)
                </h4>
                <div className="space-y-6 text-lg text-slate-600 mb-8 px-6 md:px-12 lg:px-20">
                  <p>
                    En esta capa definimos el <strong>Esquema de Base de Datos</strong>. Aquí es donde los conceptos de negocio se transforman en tablas físicas. Usamos un ORM (como SQLAlchemy) para definir los tipos de datos exactos, longitudes y restricciones que la base de datos aplicará.
                  </p>
                </div>
                <CodeBlock 
                  filename="src/infrastructure/output/persistence/models.py"
                  code={`
from sqlalchemy import Column, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class UserModel(Base):
    """Representación física del usuario en la base de datos SQL."""
    __tablename__ = 'users'

    # Campos técnicos (Primary Keys, Indices, Timestamps)
    id = Column(String(36), primary_key=True)
    name = Column(String(60), nullable=False)
    email = Column(String(100), unique=True, nullable=False, index=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<UserModel(name='{self.name}', email='{self.email}')>"
                  `}
                />
                <div className="p-6 bg-slate-50 border-l-4 border-emerald-500 rounded-r-xl text-slate-700 text-sm leading-relaxed mx-6 md:mx-12 lg:px-20">
                    <p className="font-bold mb-2">Explicación Técnica:</p>
                    <p className="mb-2"><strong>UserModel:</strong> Es un objeto puramente técnico. Aunque ahora la entidad de dominio también incluye <code>created_at</code>, el modelo de base de datos sigue siendo el responsable de las anotaciones técnicas (como <code>DateTime</code> o <code>default</code>).</p>
                    <p className="mb-2"><strong>Mapeo Bidireccional:</strong> Al tener el campo en ambas capas, el Adaptador simplemente actúa como un puente, transfiriendo el dato del Dominio a la DB y viceversa.</p>
                    <p><strong>Evolución:</strong> Si en el futuro necesitamos que la DB guarde la fecha en un formato específico, solo modificamos este modelo sin tocar el Dominio.</p>
                </div>
              </div>

              {/* PERSISTENCE ADAPTER */}
              <div className="w-full">
                <h4 className="font-bold text-slate-800 text-2xl flex items-center gap-3 mb-6 px-6 md:px-12 lg:px-20">
                  6. Capa de Infraestructura: Adaptador PostgreSQL
                </h4>
                <CodeBlock 
                  filename="src/infrastructure/output/persistence/postgres_user_repo.py"
                  code={`
from src.domain.user.user_repo import UserRepository
from src.domain.user.user_entity import User
from src.infrastructure.output.persistence.models import UserModel
from src.domain.user.value_objects.user_created_at import UserCreatedAt

class PostgresUserRepository(UserRepository):
    """Adaptador que implementa el puerto usando PostgreSQL."""
    
    def __init__(self, db_session):
        self.session = db_session

    def save(self, user: User) -> None:
        # Mapeo: Entidad de Dominio -> Modelo de Base de Datos
        db_user = UserModel(
            id=user.id.value,
            name=user.name.value,
            email=user.email.value,
            created_at=user.created_at.value
        )
        self.session.add(db_user)
        self.session.commit()

    def find_by_email(self, email: str) -> User | None:
        # Mapeo inverso: Modelo DB -> Entidad Dominio
        row = self.session.query(UserModel).filter_by(email=email).first()
        if not row:
            return None
        return User(
            id=UserID.from_string(row.id),
            name=UserName.from_string(row.name),
            email=UserEmail.from_string(row.email),
            created_at=UserCreatedAt(value=row.created_at)
        )
                  `}
                />
                <div className="p-6 bg-slate-50 border-l-4 border-emerald-600 rounded-r-xl text-slate-700 text-sm leading-relaxed mx-6 md:mx-12 lg:px-20">
                    <p className="font-bold mb-2">Explicación Técnica:</p>
                    <p>El adaptador ahora transfiere el campo <code>created_at</code>. Observe cómo en <code>save</code> extraemos el valor primitivo (datetime) y en <code>find_by_email</code> reconstruimos el <strong>Value Object</strong> del dominio.</p>
                </div>
              </div>

              {/* INPUT ADAPTER */}
              <div className="w-full">
                <h4 className="font-bold text-slate-800 text-2xl flex items-center gap-3 mb-6 px-6 md:px-12 lg:px-20">
                  7. Capa de Infraestructura: Adaptador de Entrada (FastAPI)
                </h4>
                <CodeBlock 
                  filename="src/infrastructure/input/api/user_controller.py"
                  code={`
from fastapi import APIRouter, Depends, HTTPException
from src.applications.register_user.use_case import RegisterUserUseCase

router = APIRouter()

@router.post("/users")
def register(payload: dict, uc: RegisterUserUseCase = Depends()):
    try:
        return uc.execute(payload)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
                  `}
                />
                <div className="p-6 bg-slate-50 border-l-4 border-slate-400 rounded-r-xl text-slate-700 text-sm leading-relaxed mx-6 md:mx-12 lg:px-20">
                    <p className="font-bold mb-2">Explicación Técnica:</p>
                    <p>El controlador es el responsable de traducir excepciones de negocio (ValueError) en respuestas técnicas estandarizadas (HTTP 400).</p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="beneficios" className="py-20 border-t border-slate-200 w-full px-6 md:px-12 lg:px-20">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Zap className="text-yellow-500" size={32} />
              ¿Por qué vale la pena tanto esfuerzo?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
              <div className="p-10 bg-green-50 border border-green-100 rounded-[2.5rem] shadow-sm">
                <CheckCircle2 size={32} className="text-green-600 mb-6" />
                <h4 className="font-bold text-green-900 text-xl mb-4">Mantenibilidad a 10 años</h4>
                <p className="text-base text-green-800 leading-relaxed">
                  Podrá actualizar todas sus librerías técnicas sin riesgo de romper el motor del negocio.
                </p>
              </div>
              <div className="p-10 bg-blue-50 border border-blue-100 rounded-[2.5rem] shadow-sm">
                <CheckCircle2 size={32} className="text-blue-600 mb-6" />
                <h4 className="font-bold text-blue-900 text-xl mb-4">Cero Dependencia de Vendor</h4>
                <p className="text-base text-blue-800 leading-relaxed">
                  ¿AWS subió los precios? Cambiar de proveedor es solo escribir un nuevo adaptador.
                </p>
              </div>
              <div className="p-10 bg-indigo-50 border border-indigo-100 rounded-[2.5rem] shadow-sm">
                <CheckCircle2 size={32} className="text-indigo-600 mb-6" />
                <h4 className="font-bold text-indigo-900 text-xl mb-4">Testing de Nivel Superior</h4>
                <p className="text-base text-indigo-800 leading-relaxed">
                  90% de sus tests serán unitarios sobre el Dominio, rápidos y confiables.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-24 text-center border-t border-slate-200 w-full bg-white px-6">
              <div className="flex justify-center gap-10 mb-10 text-slate-400">
                  <Github size={32} className="hover:text-slate-900 cursor-pointer transition-all hover:scale-110" />
                  <Globe size={32} className="hover:text-slate-900 cursor-pointer transition-all hover:scale-110" />
              </div>
              <p className="text-slate-400 text-lg font-medium">
                  &copy; 2024 Guía de Arquitectura Hexagonal Pro. Diseñando software que perdura.
              </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
