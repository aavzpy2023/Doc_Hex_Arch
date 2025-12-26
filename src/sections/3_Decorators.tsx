import React from 'react';
import { Sparkles, Boxes, Settings, ShieldCheck, Puzzle } from 'lucide-react';

export const DecoratorsSection: React.FC = () => {
  return (
    <section id="decoradores" className="py-20 border-t border-slate-200 w-full px-6 md:px-12 lg:px-20 scroll-mt-24">
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
  );
};