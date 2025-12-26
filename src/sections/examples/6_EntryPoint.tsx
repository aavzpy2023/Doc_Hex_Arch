import React from 'react';
import { Play, Settings } from 'lucide-react';
import { CodeBlock } from '../../components/ui/CodeBlock';

export const EntryPointPart: React.FC = () => {
  return (
    <div className="w-full">
      <div className="px-6 md:px-12 lg:px-20 mb-6">
        <h4 className="font-bold text-slate-800 text-2xl flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white text-sm font-bold">6</span>
          Punto de Entrada: Composition Root
        </h4>
      </div>

      <CodeBlock 
        filename="src/app.py"
        code={`
from fastapi import FastAPI
from src.infrastructure.input.api.user_controller import router as user_router

def create_app() -> FastAPI:
    # 1. Inicializar Framework (Infraestructura Pura)
    app = FastAPI(title="Hexagonal API")

    # 2. Conectar Cables (Wiring)
    # Aquí es donde le decimos a la API: "Usa este controlador"
    # Y el controlador ya tiene inyectado el caso de uso.
    app.include_router(user_router, prefix="/api/v1")

    return app

# Instancia global para el servidor ASGI
app = create_app()
        `}
      />
      <div className="mx-6 md:mx-12 lg:mx-20 bg-slate-100 border-l-4 border-slate-600 rounded-r-xl p-6 text-slate-700 text-sm leading-relaxed">
          <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
            <Settings size={16} />
            El Lugar donde Todo se Conecta
          </h5>
          <p className="mb-2">
              Hasta ahora, nuestras clases (<code>User</code>, <code>UseCase</code>, <code>Repo</code>) estaban flotando en el vacío, desconectadas.
          </p>
          <p>
              El archivo <strong>app.py</strong> es el "Electricista". Su trabajo es conectar los cables:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 font-mono text-xs">
              <li>Instancia la Base de Datos.</li>
              <li>Se la pasa al Repositorio.</li>
              <li>Pasa el Repositorio al Caso de Uso.</li>
              <li>Pone el Caso de Uso en el Controlador.</li>
              <li>Enciende el servidor.</li>
          </ul>
      </div>
    </div>
  );
};