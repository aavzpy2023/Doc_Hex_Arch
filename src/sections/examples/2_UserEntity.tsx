import React from 'react';
import { Package } from 'lucide-react';
import { CodeBlock } from '../../components/ui/CodeBlock';

export const UserEntityPart: React.FC = () => {
  return (
    <div className="w-full">
      <div className="px-6 md:px-12 lg:px-20 mb-6">
        <h4 className="font-bold text-slate-800 text-2xl flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">2</span>
          Capa de Dominio: La Entidad
        </h4>
      </div>

      <CodeBlock 
        filename="src/domain/user/user_entity.py"
        code={`
@dataclass
class User:
    # Composición: El usuario está hecho de piezas pequeñas y seguras
    id: UserID
    name: UserName
    email: UserEmail

    @classmethod
    def create(cls, name: str, email: str):
        # Factory: La única forma correcta de nacer
        return cls(
            id=UserID(),          # Genera uno nuevo
            name=UserName(name),  # Valida el nombre
            email=UserEmail(email)# Valida el email
        )
        `}
      />
      <div className="mx-6 md:mx-12 lg:mx-20 bg-slate-50 border-l-4 border-blue-500 rounded-r-xl p-6 text-slate-700 text-sm leading-relaxed">
          <p className="font-bold mb-2 text-blue-900">El Director de Orquesta de Datos:</p>
          <p>
             La clase <code>User</code> no valida nada por sí misma. Ella confía ciegamente en sus componentes (<code>UserID</code>, <code>UserName</code>).
          </p>
          <p className="mt-2">
             Si llegas a tener un objeto <code>User</code> en tus manos, tienes la <strong>garantía matemática</strong> de que sus datos son correctos, porque si no lo fueran, las piezas pequeñas habrían explotado (lanzado error) antes de que el usuario se terminara de construir.
          </p>
      </div>
    </div>
  );
};