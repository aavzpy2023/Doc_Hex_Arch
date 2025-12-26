import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { CodeBlock } from '../../components/ui/CodeBlock';

export const ValueObjectsPart: React.FC = () => {
  return (
    <div className="w-full">
      <div className="px-6 md:px-12 lg:px-20 mb-6">
        <h4 className="font-bold text-slate-800 text-2xl flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold">1</span>
          Capa de Dominio: Value Objects
        </h4>
        <p className="text-slate-600 mt-2 text-lg">
          Aquí definimos las piezas más pequeñas. No son solo datos, son reglas.
        </p>
      </div>
      
      {/* USER ID EXAMPLE */}
      <CodeBlock 
        filename="src/domain/user/value_objects/user_id.py"
        code={`
from dataclasses import dataclass, field
import uuid

@dataclass(frozen=True)
class UserID:
    value: str = field(default_factory=lambda: str(uuid.uuid4()))

    def __post_init__(self):
        # Guardia de seguridad: Validación automática
        try:
            uuid.UUID(self.value)
        except ValueError:
            raise ValueError(f"ID inválido: {self.value}")

    @classmethod
    def from_string(cls, value: str) -> "UserID":
        """Reconstruye el ID desde un string primitivo."""
        return cls(value=value)
        `}
      />
      <div className="mx-6 md:mx-12 lg:mx-20 bg-slate-50 border-l-4 border-blue-400 rounded-r-xl p-6 text-slate-700 text-sm leading-relaxed mb-12">
          <h5 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
            <ShieldCheck size={16} />
            Concepto Clave: Inmutabilidad
          </h5>
          <p className="mb-2">
            <strong>@dataclass(frozen=True):</strong> Esto es mágico. Significa que una vez creas un ID, <strong>nadie puede modificarlo</strong>. Es como grabar en piedra.
          </p>
          <p>
            Esto evita bugs terribles donde, por error, el código cambia el ID de un usuario en mitad de una operación. Si necesitas un ID diferente, creas uno nuevo, no reciclas el viejo.
          </p>
      </div>

      {/* EMAIL EXAMPLE (Simplificado para brevedad visual, enfocado en concepto) */}
      <CodeBlock 
        filename="src/domain/user/value_objects/user_email.py"
        code={`
@dataclass(frozen=True)
class UserEmail:
    value: str

    def __post_init__(self):
        # La regla de negocio vive AQUÍ, no en el controlador
        if "@" not in self.value:
            raise ValueError("Email debe tener @")
        `}
      />
    </div>
  );
};