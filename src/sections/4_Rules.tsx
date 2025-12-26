import React from 'react';
import { ShieldCheck, ChevronRight, Layers } from 'lucide-react';

export const RulesSection: React.FC = () => {
  return (
    <section id="regla-oro" className="py-20 border-t border-slate-200 w-full px-6 md:px-12 lg:px-20 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-blue-800">
        <ShieldCheck size={32} />
        La Regla de Oro: Inversión de Dependencias
      </h2>
      <div className="space-y-8 text-lg text-slate-600 leading-relaxed mb-12">
        <p>
          Este es el concepto más difícil de digerir para quienes vienen de arquitecturas tradicionales: <strong>el Dominio no conoce a nadie</strong>. No sabe qué es una base de datos, no sabe qué es una petición HTTP, no sabe qué es un servidor.
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
  );
};