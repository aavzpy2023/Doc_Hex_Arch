import React from 'react';
import { Zap, CheckCircle2, Github, Globe } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  return (
    <>
      <section id="beneficios" className="py-20 border-t border-slate-200 w-full px-6 md:px-12 lg:px-20 scroll-mt-24">
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

      {/* Footer integrado al final del último componente */}
      <footer className="py-24 text-center border-t border-slate-200 w-full bg-white px-6">
          <div className="flex justify-center gap-10 mb-10 text-slate-400">
              <Github size={32} className="hover:text-slate-900 cursor-pointer transition-all hover:scale-110" />
              <Globe size={32} className="hover:text-slate-900 cursor-pointer transition-all hover:scale-110" />
          </div>
          <p className="text-slate-400 text-lg font-medium">
              &copy; 2024 Guía de Arquitectura Hexagonal Pro. Diseñando software que perdura.
          </p>
      </footer>
    </>
  );
};