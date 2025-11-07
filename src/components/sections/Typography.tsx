export function Typography() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-slate-900 mb-2">Tipografía</h2>
        <p className="text-slate-600">
          La tipografía institucional complementa la identidad visual del logo y debe usarse
          en todos los materiales de comunicación oficiales.
        </p>
      </div>

      {/* Tipografía Principal */}
      <div className="border border-slate-200 rounded-lg p-6">
        <h3 className="text-slate-900 mb-4">Tipografía Principal</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-slate-600 mb-2">Familia tipográfica:</p>
            <p className="text-2xl">Times New Roman / Georgia</p>
            <p className="text-sm text-slate-500 mt-1">
              Fuente serif clásica que transmite tradición y formalidad
            </p>
          </div>

          <div className="bg-slate-50 rounded p-4 space-y-3">
            <div>
              <p className="text-xs text-slate-500 mb-1">Regular</p>
              <p className="text-lg" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
              </p>
              <p className="text-lg" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                abcdefghijklmnñopqrstuvwxyz
              </p>
              <p className="text-lg" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                0123456789
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tipografía Secundaria */}
      <div className="border border-slate-200 rounded-lg p-6">
        <h3 className="text-slate-900 mb-4">Tipografía Secundaria (Digital)</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-slate-600 mb-2">Familia tipográfica:</p>
            <p className="text-2xl">Arial / Helvetica</p>
            <p className="text-sm text-slate-500 mt-1">
              Fuente sans-serif para aplicaciones digitales y textos largos
            </p>
          </div>

          <div className="bg-slate-50 rounded p-4 space-y-3">
            <div>
              <p className="text-xs text-slate-500 mb-1">Regular</p>
              <p className="text-lg" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
              </p>
              <p className="text-lg" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                abcdefghijklmnñopqrstuvwxyz
              </p>
              <p className="text-lg" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                0123456789
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Jerarquía Tipográfica */}
      <div className="border border-slate-200 rounded-lg p-6">
        <h3 className="text-slate-900 mb-4">Jerarquía Tipográfica</h3>
        <div className="space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <p className="text-xs text-slate-500 mb-1">Título Principal - 32pt / 2rem</p>
            <h1 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Respétable Logia Estrella de Chile
            </h1>
          </div>

          <div className="border-b border-slate-200 pb-3">
            <p className="text-xs text-slate-500 mb-1">Subtítulo - 24pt / 1.5rem</p>
            <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Manual de Identidad Visual
            </h2>
          </div>

          <div className="border-b border-slate-200 pb-3">
            <p className="text-xs text-slate-500 mb-1">Encabezado - 18pt / 1.125rem</p>
            <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Guías de Uso del Logo
            </h3>
          </div>

          <div>
            <p className="text-xs text-slate-500 mb-1">Texto de Cuerpo - 14pt / 0.875rem</p>
            <p className="text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
              Este es un ejemplo de texto de cuerpo. Se utiliza para párrafos y contenido general
              en documentos y materiales digitales de la institución.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <h4 className="text-slate-900 mb-2">Uso en Títulos</h4>
          <p className="text-sm text-slate-600">
            Utilizar Georgia o Times New Roman para títulos y encabezados en documentos formales
            y materiales impresos.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <h4 className="text-slate-900 mb-2">Uso en Texto Corrido</h4>
          <p className="text-sm text-slate-600">
            Arial o Helvetica se recomiendan para textos largos en plataformas digitales,
            garantizando mejor legibilidad en pantalla.
          </p>
        </div>
      </div>
    </div>
  );
}
