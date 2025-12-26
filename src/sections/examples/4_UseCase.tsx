import React from 'react';
import { Zap } from 'lucide-react';
import { CodeBlock } from '../../components/ui/CodeBlock';

export const UseCasePart: React.FC = () => {
  return (
    <div className="w-full">
      <div className="px-6 md:px-12 lg:px-20 mb-6">
        <h4 className="font-bold text-slate-800 text-2xl flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold">4</span>
          Capa de Aplicación: Caso de Uso
        </h4>
      </div>

      <CodeBlock 
        filename="src/applications/register_user/use_case.py"
        code={`
class RegisterUserUseCase:
    
    def __init__(self, repository: UserRepository):
        # Inyección de Dependencia: "Dame cualquier cosa que sepa guardar usuarios"
        self.repository = repository

    def execute(self, data: dict):
        # 1. Lógica de Flujo: Verificar duplicados
        if self.repository.find_by_email(data['email']):
            raise ValueError("Usuario ya existente")
            
        # 2. Lógica de Dominio: Crear el usuario válido
        user = User.create(name=data['name'], email=data['email'])
        
        # 3. Persistencia: Guardarlo (sin saber dónde)
        self.repository.save(user)
        
        return {"id": user.id.value, "status": "ok"}
        `}
      />
      <div className="mx-6 md:mx-12 lg:mx-20 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl p-6 text-slate-700 text-sm leading-relaxed">
          <h5 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
            <Zap size={16} />
            El Poder de la Inyección de Dependencias
          </h5>
          <p>
              Observa el <code>__init__</code>. El caso de uso <strong>pide</strong> un repositorio, no lo crea (<code>new Database()</code>).
          </p>
          <p className="mt-2 font-medium">
              Analogía del Taladro:
          </p>
          <p className="text-xs mt-1">
              El Caso de Uso es el motor del taladro. El Repositorio es la punta (broca). Puedes cambiar la punta (usar MySQL, MongoDB o un archivo de texto) y el motor sigue funcionando exactamente igual.
          </p>
      </div>
    </div>
  );
};