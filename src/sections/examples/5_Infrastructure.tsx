import React from 'react';
import { Database, ArrowRightLeft } from 'lucide-react';
import { CodeBlock } from '../../components/ui/CodeBlock';

export const InfrastructurePart: React.FC = () => {
  return (
    <div className="w-full">
      <div className="px-6 md:px-12 lg:px-20 mb-6">
        <h4 className="font-bold text-slate-800 text-2xl flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 text-sm font-bold">5</span>
          Infraestructura: El Traductor
        </h4>
      </div>

      <CodeBlock 
        filename="src/infrastructure/output/persistence/postgres_user_repo.py"
        code={`
class PostgresUserRepository(UserRepository):
    
    def __init__(self, db_session):
        self.session = db_session

    def save(self, user: User) -> None:
        # TRADUCCIÓN: Dominio (Objetos) -> Base de Datos (Strings)
        # Desempacamos los Value Objects
        db_user = UserModel(
            id=user.id.value,       # De objeto a string
            name=user.name.value,   
            email=user.email.value
        )
        self.session.add(db_user)
        self.session.commit()
        `}
      />
      <div className="mx-6 md:mx-12 lg:mx-20 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-6 text-slate-700 text-sm leading-relaxed">
          <h5 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
            <ArrowRightLeft size={16} />
            El Trabajo Sucio
          </h5>
          <p>
              La Base de Datos es "tonta". No entiende de reglas de negocio ni de objetos complejos. Solo entiende texto y números.
          </p>
          <p className="mt-2">
              Este adaptador es el <strong>traductor oficial</strong>. Toma la riqueza del dominio y la "aplana" para que pueda guardarse en filas y columnas de SQL.
          </p>
      </div>
    </div>
  );
};