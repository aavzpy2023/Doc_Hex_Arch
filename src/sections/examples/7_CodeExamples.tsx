import React from 'react';
import { Code2 } from 'lucide-react';

// Importamos las sub-partes
import { ValueObjectsPart } from './examples/1_ValueObjects';
import { UserEntityPart } from './examples/2_UserEntity';
import { RepositoryInterfacePart } from './examples/3_RepositoryInterface';
import { UseCasePart } from './examples/4_UseCase';
import { InfrastructurePart } from './examples/5_Infrastructure';

export const CodeExamplesSection: React.FC = () => {
  return (
    <section id="codigo" className="py-20 border-t border-slate-200 w-full scroll-mt-24">
      
      {/* Header de la Sección */}
      <div className="px-6 md:px-12 lg:px-20 mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Code2 className="text-blue-600" size={32} />
          Ejemplos de Código: Paso a Paso
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Vamos a construir una funcionalidad real: <strong>"Registrar Usuario"</strong>. 
          Veremos cómo los datos viajan desde la definición más pura hasta la base de datos.
        </p>
      </div>

      {/* Renderizado de Bloques Modulares */}
      <div className="space-y-16">
        <ValueObjectsPart />
        <UserEntityPart />
        <RepositoryInterfacePart />
        <UseCasePart />
        <InfrastructurePart />
      </div>

    </section>
  );
};