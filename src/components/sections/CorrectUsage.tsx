import logoImage from "../../assets/e09bdf9d6bc17c600bb1508e9eae8fbf5a7aa0e5.png";
import { Check, X } from "lucide-react";

export function CorrectUsage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-slate-900 mb-2">Usos Correctos e Incorrectos</h2>
        <p className="text-slate-600">
          Para mantener la integridad de la marca, es fundamental seguir las guías de uso correcto
          y evitar las modificaciones no autorizadas del logo.
        </p>
      </div>

      <div>
        <h3 className="text-slate-900 mb-4">Usos Correctos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-green-900">Correcto</span>
            </div>
            <div className="bg-white rounded p-4 flex items-center justify-center mb-2">
              <img 
                src={logoImage} 
                alt="Uso correcto 1" 
                className="w-24 h-auto"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <p className="text-sm text-slate-600">Tamaño adecuado con área de protección</p>
          </div>

          <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-green-900">Correcto</span>
            </div>
            <div className="bg-black rounded p-4 flex items-center justify-center mb-2">
              <img 
                src={logoImage} 
                alt="Uso correcto 2" 
                className="w-24 h-auto"
                style={{ filter: "invert(1) brightness(2)" }}
              />
            </div>
            <p className="text-sm text-slate-600">Versión blanca en fondo oscuro</p>
          </div>

          <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-green-900">Correcto</span>
            </div>
            <div className="bg-white rounded p-4 flex items-center justify-center mb-2">
              <img 
                src={logoImage} 
                alt="Uso correcto 3" 
                className="w-24 h-auto"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <p className="text-sm text-slate-600">Proporciones originales mantenidas</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-slate-900 mb-4">Usos Incorrectos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
              <span className="text-red-900">Incorrecto</span>
            </div>
            <div className="bg-white rounded p-4 flex items-center justify-center mb-2">
              <img 
                src={logoImage} 
                alt="Uso incorrecto 1" 
                className="w-32 h-24 object-cover"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <p className="text-sm text-slate-600">No deformar las proporciones</p>
          </div>

          <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
              <span className="text-red-900">Incorrecto</span>
            </div>
            <div className="bg-white rounded p-4 flex items-center justify-center mb-2">
              <img 
                src={logoImage} 
                alt="Uso incorrecto 2" 
                className="w-24 h-auto"
                style={{ mixBlendMode: 'multiply', filter: "hue-rotate(200deg)" }}
              />
            </div>
            <p className="text-sm text-slate-600">No cambiar los colores</p>
          </div>

          <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
              <span className="text-red-900">Incorrecto</span>
            </div>
            <div className="bg-white rounded p-4 flex items-center justify-center mb-2">
              <img 
                src={logoImage} 
                alt="Uso incorrecto 3" 
                className="w-24 h-auto"
                style={{ mixBlendMode: 'multiply', transform: "rotate(15deg)" }}
              />
            </div>
            <p className="text-sm text-slate-600">No rotar el logo</p>
          </div>

          <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
              <span className="text-red-900">Incorrecto</span>
            </div>
            <div className="bg-white rounded p-4 flex items-center justify-center mb-2">
              <img 
                src={logoImage} 
                alt="Uso incorrecto 4" 
                className="w-24 h-auto"
                style={{ mixBlendMode: 'multiply', opacity: 0.3 }}
              />
            </div>
            <p className="text-sm text-slate-600">No reducir la opacidad</p>
          </div>

          <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
              <span className="text-red-900">Incorrecto</span>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded p-4 flex items-center justify-center mb-2">
              <img 
                src={logoImage} 
                alt="Uso incorrecto 5" 
                className="w-24 h-auto"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <p className="text-sm text-slate-600">No usar fondos complejos</p>
          </div>

          <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                <X className="w-4 h-4 text-white" />
              </div>
              <span className="text-red-900">Incorrecto</span>
            </div>
            <div className="bg-white rounded p-4 flex items-center justify-center mb-2">
              <img 
                src={logoImage} 
                alt="Uso incorrecto 6" 
                className="w-24 h-auto"
                style={{ mixBlendMode: 'multiply', filter: "drop-shadow(0 0 10px rgba(0,0,0,0.8))" }}
              />
            </div>
            <p className="text-sm text-slate-600">No agregar efectos o sombras</p>
          </div>
        </div>
      </div>
    </div>
  );
}