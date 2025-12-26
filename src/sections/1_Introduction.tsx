import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const IntroductionSection: React.FC = () => {
  return (
    <section id="introduccion" className="mb-20 w-full px-4 md:px-0 scroll-mt-28">
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
  );
};