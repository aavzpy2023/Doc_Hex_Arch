import React from 'react';
import { CheckCircle2, Zap, Server, Database, Globe, Settings, ArrowRightLeft } from 'lucide-react';

export const LayersSection: React.FC = () => {
  return (
    <section id="capas" className="py-20 border-t border-slate-200 w-full px-6 md:px-12 lg:px-20 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-16">Anatomía de las Capas: Un Desglose Detallado</h2>
      
      <div className="space-y-24">
        {/* Domain */}
        <div className="flex flex-col md:flex-row gap-16 group w-full">
          <div className="flex-1">
            <div className="flex items-center gap-3 text-blue-600 font-bold mb-8">
              <span className="px-4 py-1.5 bg-blue-100 rounded-full text-sm font-black uppercase tracking-widest">Nivel 1</span>
              <h3 className="text-3xl">El Dominio: Reglas Eternas</h3>
            </div>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8">
              <p>Es la capa más estable. Si su empresa vende suscripciones, la regla de que "una suscripción vence a los 30 días" es una regla de dominio. No importa si la guarda en SQL o en una servilleta de papel.</p>
            </div>
            <ul className="text-lg space-y-6 text-slate-500">
              <li className="flex items-start gap-4">
                <div className="mt-1.5 p-1 bg-blue-50 rounded-lg"><CheckCircle2 size={24} className="text-blue-500" /></div>
                <span><strong>Value Objects:</strong> Objetos inmutables que encapsulan lógica de validación. Un <code>UserEmail</code> no solo es un string; es un objeto que garantiza que tiene un '@'.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 p-1 bg-blue-50 rounded-lg"><CheckCircle2 size={24} className="text-blue-500" /></div>
                <span><strong>Entidades:</strong> Modelos que tienen un ciclo de vida y una identidad única. Ejemplo: Un <code>Pedido</code> que pasa de 'pendiente' a 'pagado'.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 p-1 bg-blue-50 rounded-lg"><CheckCircle2 size={24} className="text-blue-500" /></div>
                <span><strong>Puertos (Interfaces):</strong> Definiciones abstractas de lo que el dominio necesita para funcionar (ej. <code>UserRepository</code>).</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-slate-50 rounded-[3rem] p-12 border border-slate-100 flex flex-col justify-center shadow-inner group-hover:bg-blue-50/30 transition-colors">
            <p className="text-slate-700 font-semibold italic text-2xl leading-relaxed text-center">
              "El Dominio es la única parte de su código por la que un cliente pagaría dinero real. Todo lo demás es fontanería técnica."
            </p>
          </div>
        </div>

        {/* Applications */}
        <div className="flex flex-col md:flex-row gap-16 group w-full">
          <div className="flex-1">
            <div className="flex items-center gap-3 text-indigo-600 font-bold mb-8">
              <span className="px-4 py-1.5 bg-indigo-100 rounded-full text-sm font-black uppercase tracking-widest">Nivel 2</span>
              <h3 className="text-3xl">Aplicación: El Director de Orquesta</h3>
            </div>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8">
              <p>Esta capa define <strong>qué</strong> hace el sistema. Implementa los casos de uso específicos que un usuario puede realizar. Si el Dominio sabe cómo calcular un descuento, la capa de Aplicación sabe cuándo debe llamarse ese cálculo al procesar una compra.</p>
            </div>
            <ul className="text-lg space-y-6 text-slate-500">
              <li className="flex items-start gap-4">
                <div className="mt-1.5 p-1 bg-indigo-50 rounded-lg"><Zap size={24} className="text-indigo-500" /></div>
                <span><strong>Casos de Uso (Interactors):</strong> Unidades de trabajo que orquestan el flujo (ej. <code>RegisterUserUseCase</code>).</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 p-1 bg-indigo-50 rounded-lg"><Zap size={24} className="text-indigo-500" /></div>
                <span><strong>Flujo Orquestado:</strong> Recupera una entidad del puerto, le pide al dominio que haga algo, y guarda el resultado de vuelta en el puerto.</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-slate-50 rounded-[3rem] p-12 border border-slate-100 flex flex-col justify-center shadow-inner group-hover:bg-indigo-50/30 transition-colors">
            <div className="flex justify-center mb-8">
              <ArrowRightLeft className="text-indigo-300 w-24 h-24 animate-pulse" />
            </div>
            <p className="text-slate-600 text-center text-lg font-bold uppercase tracking-[0.2em]">Capa de Interacción Pura</p>
          </div>
        </div>

        {/* Infrastructure */}
        <div className="flex flex-col md:flex-row gap-16 group w-full">
          <div className="flex-1">
            <div className="flex items-center gap-3 text-slate-800 font-bold mb-8">
              <span className="px-4 py-1.5 bg-slate-200 rounded-full text-sm font-black uppercase tracking-widest">Nivel 3</span>
              <h3 className="text-3xl">Infraestructura: El Mundo Técnico</h3>
            </div>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8">
              <p>Es la capa más volátil y ruidosa. Aquí es donde los detalles técnicos cobran vida. Contiene todo el código que sabe hablar con el exterior, ya sea un navegador web, una base de datos o un servicio de colas de mensajes.</p>
            </div>
            <ul className="text-lg space-y-6 text-slate-500">
              <li className="flex items-start gap-4">
                <div className="mt-1.5 p-1 bg-slate-100 rounded-lg"><Server size={24} className="text-slate-600" /></div>
                <span><strong>Adaptadores de Entrada:</strong> Transforman peticiones externas (HTTP, CLI, Eventos) en llamadas que la capa de Aplicación entiende.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 p-1 bg-slate-100 rounded-lg"><Server size={24} className="text-slate-600" /></div>
                <span><strong>Adaptadores de Salida:</strong> Son las implementaciones reales de los puertos del dominio. Aquí vive el código SQL, Redis, o clientes de AWS.</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-slate-900 rounded-[3rem] p-12 flex flex-col justify-center shadow-2xl">
            <div className="space-y-6 text-slate-300">
              <div className="flex items-center gap-4">
                  <Database className="text-emerald-400 w-8 h-8" />
                  <span className="text-lg font-mono tracking-tight">PostgreSQL / MongoDB / DynamoDB</span>
              </div>
              <div className="flex items-center gap-4">
                  <Globe className="text-blue-400 w-8 h-8" />
                  <span className="text-lg font-mono tracking-tight">FastAPI / Flask / Django REST</span>
              </div>
              <div className="flex items-center gap-4">
                  <Settings className="text-amber-400 w-8 h-8" />
                  <span className="text-lg font-mono tracking-tight">Kafka / RabbitMQ / SQS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};