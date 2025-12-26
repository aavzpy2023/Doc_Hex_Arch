import React from 'react';
import { 
  FolderTree, ShieldCheck, Code2, Package, Zap, Server, Monitor, 
  Database, Cpu as MemoryIcon, TableProperties, CheckCircle2, 
  Compass, Workflow, ChevronRight, ArrowDownWideNarrow, Play 
} from 'lucide-react';
import { FileNode } from '../components/ui/FileNode';

export const StructureSection: React.FC = () => {
  return (
    <section id="estructura" className="py-20 border-t border-slate-200 w-full px-6 md:px-12 lg:px-20 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <FolderTree className="text-blue-600" size={32} />
        Estructura de Carpetas Screaming
      </h2>
      <div className="grid lg:grid-cols-2 gap-12 w-full mb-16">
        
        {/* COLUMNA IZQUIERDA: ÁRBOL DE ARCHIVOS 
            CORRECCIÓN: Eliminado 'overflow-hidden' y 'scale-110' para evitar cortes.
            Añadido 'h-full' para asegurar expansión.
        */}
        <div className="p-8 md:p-12 bg-white border border-slate-200 rounded-[3rem] shadow-sm h-full">
            <div className="text-xs text-slate-400 font-bold mb-8 uppercase tracking-[0.3em]">Directorio Raíz: src/</div>
            <div className="w-full origin-top-left"> {/* Eliminado scale-110 */}
                <FileNode name="src/">
                    <FileNode name="domain/" icon={<ShieldCheck size={18} className="text-blue-500" />}>
                        <FileNode name="user/" icon={<Package size={18} className="text-blue-400" />}>
                            <FileNode name="user_entity.py" icon={<Code2 size={16} />} />
                            <FileNode name="user_repo.py" icon={<Code2 size={16} />} />
                            <FileNode name="value_objects/">
                                <FileNode name="user_id.py" icon={<Code2 size={16} />} />
                                <FileNode name="user_name.py" icon={<Code2 size={16} />} />
                                <FileNode name="user_email.py" icon={<Code2 size={16} />} />
                                <FileNode name="user_created_at.py" icon={<Code2 size={16} />} />
                            </FileNode>
                        </FileNode>
                    </FileNode>
                    <FileNode name="applications/" icon={<Zap size={18} className="text-indigo-500" />}>
                        <FileNode name="register_user/">
                            <FileNode name="use_case.py" icon={<Code2 size={16} />} />
                        </FileNode>
                    </FileNode>
                    <FileNode name="infrastructure/" icon={<Server size={18} className="text-slate-500" />}>
                        <FileNode name="input/">
                            <FileNode name="api/">
                                <FileNode name="user_controller.py" icon={<Monitor size={16} />} />
                            </FileNode>
                        </FileNode>
                        <FileNode name="output/">
                            <FileNode name="persistence/">
                                <FileNode name="postgres_user_repo.py" icon={<Database size={16} />} />
                                <FileNode name="in_memory_user_repo.py" icon={<MemoryIcon size={16} className="text-amber-500" />} />
                                <FileNode name="models.py" icon={<TableProperties size={16} className="text-emerald-500" />} />
                            </FileNode>
                        </FileNode>
                    </FileNode>
                    
                    {/* NODO DEL ENTRY POINT (APP.PY) VISIBLE */}
                    <div className="mt-4 pt-2 border-t border-dashed border-slate-200">
                      <FileNode name="app.py" icon={<Play size={18} className="text-green-600" />} />
                    </div>
                </FileNode>
            </div>
        </div>

        {/* COLUMNA DERECHA: EXPLICACIONES */}
        <div className="space-y-8 flex flex-col justify-start">
            <div className="bg-blue-50 p-10 rounded-[2.5rem] border border-blue-100 shadow-sm">
                <h4 className="font-bold text-blue-800 text-xl mb-6 flex items-center gap-2">
                  <CheckCircle2 size={24} />
                  ¿Por qué estructura desagregada?
                </h4>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Robert C. Martin (Uncle Bob) dice que la arquitectura debe "gritar" la intención del negocio. Al ver esta carpeta <code>src/</code>, no ves un "Modelo-Vista-Controlador"; ves inmediatamente que el sistema maneja <strong>Usuarios</strong>.
                </p>
                
                {/* Explicación Específica de app.py */}
                <div className="p-5 bg-white rounded-2xl border border-blue-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-2 font-bold text-green-700">
                    <Play size={20} />
                    <span>El Rol de app.py</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Es el <strong>"Composition Root"</strong>. El único lugar donde se permite "ensuciarse las manos". Aquí se conecta la Base de Datos real con los Casos de Uso y se inicia el servidor Web.
                  </p>
                </div>

                <ul className="text-base space-y-4 text-slate-500 mt-6">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</span>
                      <span><strong>Modularidad Extrema:</strong> Los Value Objects están separados de las entidades, permitiendo cambios quirúrgicos sin efectos secundarios.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</span>
                      <span><strong>Testing Paralelo:</strong> Al tener <code>in_memory_user_repo.py</code>, puedes desarrollar y testear toda la lógica sin tener instalada una base de datos real.</span>
                    </li>
                </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-xl text-white">
                <h4 className="font-bold text-blue-300 text-lg mb-4 flex items-center gap-2">
                  <Compass size={20} />
                  Estrategia Screaming
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Esta estructura "grita" qué hace el sistema. Al abrir la carpeta <code>domain</code>, ves inmediatamente conceptos de negocio como <strong>User</strong>, no detalles técnicos como "SQL" o "REST".
                </p>
            </div>
        </div>
      </div>

      {/* REST API AS INPUT ADAPTER SECTION */}
      <div className="w-full bg-indigo-50 border border-indigo-100 rounded-[3rem] p-12 mb-16 shadow-sm">
          <h4 className="font-bold text-indigo-900 text-2xl mb-6 flex items-center gap-3">
              <Monitor size={28} />
              El API REST como Adaptador de Entrada
          </h4>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                  <p>
                      En el ecosistema hexagonal, el <strong>Controlador REST</strong> (<code>user_controller.py</code>) actúa como un centinela en la frontera de la aplicación. Su rol es puramente técnico: escucha peticiones HTTP, valida sintaxis y traduce el lenguaje de la web (JSON) al lenguaje de nuestro negocio.
                  </p>
                  <p>
                      Al interactuar con <code>register_user/use_case.py</code>, el controlador simplemente "pasa la pelota". El controlador conoce la existencia del Caso de Uso, pero el Caso de Uso es totalmente ignorante de que existe una API REST.
                  </p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-indigo-100 shadow-inner">
                  <h5 className="font-bold text-indigo-800 mb-4 uppercase tracking-wider text-sm">¿Por qué este desacoplamiento es clave?</h5>
                  <ul className="space-y-4 text-base text-slate-600">
                      <li className="flex gap-3">
                          <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-1" />
                          <span><strong>Sustituibilidad:</strong> Puedes reemplazar la API REST por una interfaz de línea de comandos (CLI) o un consumidor de colas (RabbitMQ) sin tocar una sola línea de lógica de negocio.</span>
                      </li>
                      <li className="flex gap-3">
                          <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-1" />
                          <span><strong>Protección del Núcleo:</strong> Los errores o vulnerabilidades en el framework web (FastAPI/Flask) no afectan la integridad de tus entidades de dominio.</span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

      {/* FLOW EXPLANATION SECTION */}
      <div className="w-full bg-white border border-slate-200 rounded-[3rem] p-12 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-600 text-white rounded-2xl"><Workflow size={32} /></div>
              <div>
                  <h3 className="text-3xl font-bold text-slate-900">Trazabilidad: El Camino de la Petición</h3>
                  <p className="text-slate-500 text-lg">Definición de Capas y Flujo Lógico entre Archivos</p>
              </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
              <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase text-slate-400 block tracking-widest bg-slate-100 py-1 rounded">Infraestructura (In)</span>
                  <div className="h-16 w-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto border-2 border-slate-200">
                      <Monitor className="text-slate-600" />
                  </div>
                  <h4 className="font-bold text-sm">user_controller.py</h4>
                  <p className="text-xs text-slate-500">Maneja el protocolo HTTP y la traducción de JSON.</p>
              </div>
              <div className="flex items-center justify-center hidden lg:flex mt-6">
                  <ChevronRight className="text-slate-300" />
              </div>
              <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase text-indigo-400 block tracking-widest bg-indigo-50 py-1 rounded">Aplicación</span>
                  <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto border-2 border-indigo-200">
                      <Zap className="text-indigo-600" />
                  </div>
                  <h4 className="font-bold text-sm">use_case.py</h4>
                  <p className="text-xs text-slate-500">Coordina el flujo de negocio sin detalles técnicos.</p>
              </div>
              <div className="flex items-center justify-center hidden lg:flex mt-6">
                  <ChevronRight className="text-slate-300" />
              </div>
              <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase text-blue-400 block tracking-widest bg-blue-50 py-1 rounded">Dominio</span>
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto border-2 border-blue-200">
                      <Package className="text-blue-600" />
                  </div>
                  <h4 className="font-bold text-sm">user_entity.py</h4>
                  <p className="text-xs text-slate-500">Reglas puras del negocio y validación de estado.</p>
              </div>
              <div className="flex items-center justify-center hidden lg:flex mt-6">
                  <ChevronRight className="text-slate-300" />
              </div>
              <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase text-amber-400 block tracking-widest bg-amber-50 py-1 rounded">Dominio (Puerto)</span>
                  <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto border-2 border-amber-200">
                      <ShieldCheck className="text-amber-600" />
                  </div>
                  <h4 className="font-bold text-sm">user_repo.py</h4>
                  <p className="text-xs text-slate-500">Contrato abstracto que el Dominio requiere.</p>
              </div>
              <div className="flex items-center justify-center hidden lg:flex mt-6">
                  <ChevronRight className="text-slate-300" />
              </div>
              <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase text-emerald-400 block tracking-widest bg-emerald-50 py-1 rounded">Infraestructura (Out)</span>
                  <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200">
                      <Database className="text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-sm">postgres_user_repo.py</h4>
                  <p className="text-xs text-slate-500">Implementación técnica y real del almacenamiento.</p>
              </div>
          </div>

          <div className="mt-12 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <h5 className="font-bold text-slate-800 text-xl mb-6 flex items-center gap-2">
                  <ArrowDownWideNarrow size={24} className="text-blue-600" />
                  Detalle del Flujo de Ejecución (Paso a Paso):
              </h5>
              <div className="space-y-8 text-slate-600 text-lg leading-relaxed">
                  <div className="border-l-4 border-slate-200 pl-6">
                      <p className="font-bold text-slate-900 mb-2">1. Capa de Infraestructura (Entrada) - user_controller.py:</p>
                      <p>El flujo se inicia cuando el <strong>Adaptador de Entrada</strong> recibe una petición externa (como un POST de FastAPI). Su responsabilidad es técnica: valida el esquema del JSON y traduce los datos primitivos al lenguaje de la aplicación, llamando al método <code>execute</code> del Caso de Uso.</p>
                  </div>
                  
                  <div className="border-l-4 border-indigo-200 pl-6">
                      <p className="font-bold text-indigo-900 mb-2">2. Capa de Aplicación (Orquestación) - register_user/use_case.py:</p>
                      <p>El <strong>Caso de Uso</strong> actúa como director de orquesta. Define el flujo lógico (ej. "primero comprueba si existe, luego crea, luego guarda"). No contiene reglas de negocio complejas ni detalles técnicos; solo coordina la interacción entre el Dominio y los Puertos técnicos necesarios.</p>
                  </div>

                  <div className="border-l-4 border-blue-200 pl-6">
                      <p className="font-bold text-blue-900 mb-2">3. Capa de Dominio (Núcleo) - user_entity.py:</p>
                      <p>Aquí reside el corazón del sistema. El Caso de Uso instancia una <strong>Entidad</strong> de negocio. La entidad utiliza sus <strong>Value Objects</strong> para autovalidarse. Si el email es inválido, el Dominio detiene el proceso. Es un código puro, sin dependencias de frameworks ni de bases de datos.</p>
                  </div>

                  <div className="border-l-4 border-amber-200 pl-6">
                      <p className="font-bold text-amber-900 mb-2">4. Puerto de Dominio (Abstracción) - user_repo.py:</p>
                      <p>Para persistir el usuario, el Caso de Uso llama a un <strong>Puerto</strong>. Este es el punto clave de la <strong>Inversión de Dependencias</strong>: el Dominio define una interfaz (contrato) que él mismo posee, obligando a la infraestructura externa a adaptarse a sus necesidades y no al revés.</p>
                  </div>

                  <div className="border-l-4 border-emerald-200 pl-6">
                      <p className="font-bold text-emerald-900 mb-2">5. Capa de Infraestructura (Salida) - postgres_user_repo.py:</p>
                      <p>Finalmente, el <strong>Adaptador de Salida</strong> implementa el Puerto. Traduce la Entidad de Dominio a un modelo de base de datos (UserModel) y realiza la operación técnica de guardado mediante SQL. El flujo termina devolviendo el resultado a través de las capas hasta que el controlador envía la respuesta al cliente.</p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};