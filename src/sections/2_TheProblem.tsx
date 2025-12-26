import React from 'react';
import { AlertTriangle, ShieldCheck, ChevronRight, Layers } from 'lucide-react';

export const TheProblemSection: React.FC = () => {
  return (
    <section id="el-problema" className="py-20 border-t border-slate-200 w-full px-6 md:px-12 lg:px-20 scroll-mt-24">
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
  );
};