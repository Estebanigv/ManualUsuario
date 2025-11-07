import logoImage from "../../assets/e09bdf9d6bc17c600bb1508e9eae8fbf5a7aa0e5.png";

export function ClearSpace() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-slate-900 mb-2">Área de Protección</h2>
        <p className="text-slate-600">
          El área de protección garantiza la visibilidad y el impacto del logo. Ningún elemento gráfico
          o texto debe invadir este espacio mínimo alrededor del logo.
        </p>
      </div>

      {/* Diagrama visual mejorado */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-12 flex justify-center">
        <div className="relative inline-block">
          {/* Logo central */}
          <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg">
            <img 
              src={logoImage} 
              alt="Logo con área de protección" 
              className="w-48 h-auto"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
          
          {/* Área de protección visual */}
          <div className="absolute inset-0 -m-12 border-2 border-dashed border-blue-500 rounded-lg bg-blue-50/20">
            {/* Flechas y medidas */}
            <div className="absolute -top-8 left-0 right-0 flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-12 h-0.5 bg-blue-500"></div>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">X</span>
                <div className="w-12 h-0.5 bg-blue-500"></div>
              </div>
            </div>
            
            <div className="absolute top-0 bottom-0 -left-8 flex items-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-0.5 h-12 bg-blue-500"></div>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">X</span>
                <div className="w-0.5 h-12 bg-blue-500"></div>
              </div>
            </div>

            <div className="absolute -bottom-8 left-0 right-0 flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-12 h-0.5 bg-blue-500"></div>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">X</span>
                <div className="w-12 h-0.5 bg-blue-500"></div>
              </div>
            </div>
            
            <div className="absolute top-0 bottom-0 -right-8 flex items-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-0.5 h-12 bg-blue-500"></div>
                <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">X</span>
                <div className="w-0.5 h-12 bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-900 mb-3">Cálculo del Espacio Mínimo (X)</h3>
        <p className="text-blue-900 text-sm mb-4">
          La medida "X" corresponde al 10% del ancho total del logo. Este espacio debe mantenerse 
          libre de cualquier elemento gráfico, texto u otro logo en todas las direcciones.
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white rounded p-3">
            <p className="text-blue-900"><strong>Ancho del logo:</strong> 100mm</p>
            <p className="text-blue-600">Espacio X = 10mm</p>
          </div>
          <div className="bg-white rounded p-3">
            <p className="text-blue-900"><strong>Ancho del logo:</strong> 200px</p>
            <p className="text-blue-600">Espacio X = 20px</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-slate-200 rounded-lg p-6">
          <h3 className="text-slate-900 mb-3">Tamaño Mínimo</h3>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
              <span>Digital (pantalla):</span>
              <strong className="text-slate-900">120 × 120 px</strong>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
              <span>Impreso:</span>
              <strong className="text-slate-900">25 × 25 mm</strong>
            </div>
            <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-200">
              No se recomienda usar el logo en tamaños menores para garantizar la legibilidad de todos sus elementos.
            </p>
          </div>
        </div>

        <div className="border border-slate-200 rounded-lg p-6">
          <h3 className="text-slate-900 mb-3">Ejemplos de Aplicación Correcta</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
                <img 
                  src={logoImage} 
                  alt="Logo pequeño" 
                  className="w-12 h-auto"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
              <p className="text-sm text-slate-600">Tamaño mínimo con espacio adecuado</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-24 h-24 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
                <img 
                  src={logoImage} 
                  alt="Logo mediano" 
                  className="w-16 h-auto"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
              <p className="text-sm text-slate-600">Tamaño recomendado para documentos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-amber-900 text-sm">
          <strong>Importante:</strong> Mantener siempre el área de protección libre asegura que el logo 
          mantenga su impacto visual y sea fácilmente reconocible en cualquier aplicación.
        </p>
      </div>
    </div>
  );
}