import React from 'react';
import { FileText } from 'lucide-react';
import { CodeBlock } from '../../components/ui/CodeBlock';

export const RepositoryInterfacePart: React.FC = () => {
  return (
    <div className="w-full">
      <div className="px-6 md:px-12 lg:px-20 mb-6">
        <h4 className="font-bold text-slate-800 text-2xl flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600 text-sm font-bold">3</span>
          El Contrato (Puerto)
        </h4>
      </div>

      <CodeBlock 
        filename="src/domain/user/user_repo.py"
        code={`
from abc import ABC, abstractmethod

class UserRepository(ABC):
    
    @abstractmethod
    def save(self, user: User) -> None:
        """Firma obligatoria: Quien quiera guardar usuarios, debe implementar esto."""
        pass

    @abstractmethod
    def find_by_email(self, email: str) -> User | None:
        pass
        `}
      />
      <div className="mx-6 md:mx-12 lg:mx-20 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 text-slate-700 text-sm leading-relaxed">
          <h5 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
            <FileText size={16} />
            Traducción Humana:
          </h5>
          <ul className="list-disc list-inside space-y-2">
              <li>
                  <strong>ABC (Abstract Base Class):</strong> Le dice a Python: <em>"Esto no es real, es un plano"</em>.
              </li>
              <li>
                  <strong>@abstractmethod:</strong> Es una ley. Le dice a la base de datos: <em>"Si quieres trabajar con este Dominio, estás OBLIGADA a tener una función `save` que reciba un Usuario. Si no la tienes, no compilo"</em>.
              </li>
          </ul>
      </div>
    </div>
  );
};