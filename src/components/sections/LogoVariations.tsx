import logoImage from "figma:asset/e09bdf9d6bc17c600bb1508e9eae8fbf5a7aa0e5.png";

export function LogoVariations() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-slate-900 mb-2">Variaciones del Logo</h2>
        <p className="text-slate-600">
          El logo cuenta con diferentes variaciones para adaptarse a distintos fondos y aplicaciones.
          Se debe seleccionar la versión adecuada según el contexto de uso.
        </p>
      </div>

      <div className="space-y-6">
        {/* Versión principal - A Color */}
        <div>
          <h3 className="text-slate-900 mb-3">Versión Principal - A Color</h3>
          <p className="text-slate-600 text-sm mb-4">
            Esta es la versión principal del logo. Debe usarse sobre fondos claros.
          </p>
          <div className="bg-white border-2 border-slate-200 rounded-lg p-12 flex items-center justify-center">
            <img 
              src={logoImage} 
              alt="Logo a color" 
              className="w-48 h-auto"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        </div>

        {/* Versión Blanco sobre fondo oscuro */}
        <div>
          <h3 className="text-slate-900 mb-3">Versión Blanco - Fondo Oscuro</h3>
          <p className="text-slate-600 text-sm mb-4">
            Versión en blanco para usar sobre fondos oscuros. Mantiene todos los detalles del diseño original.
          </p>
          <div className="bg-black rounded-lg p-12 flex items-center justify-center">
            <img 
              src={logoImage} 
              alt="Logo blanco" 
              className="w-48 h-auto"
              style={{ filter: "invert(1) brightness(2)" }}
            />
          </div>
        </div>

        {/* Versión Escala de Grises */}
        <div>
          <h3 className="text-slate-900 mb-3">Versión Escala de Grises - Fondo Gris</h3>
          <p className="text-slate-600 text-sm mb-4">
            Versión en escala de grises para impresiones en blanco y negro o aplicaciones que requieran monocromía.
          </p>
          <div className="bg-slate-400 rounded-lg p-12 flex items-center justify-center">
            <img 
              src={logoImage} 
              alt="Logo escala de grises" 
              className="w-48 h-auto"
              style={{ mixBlendMode: 'multiply', filter: "grayscale(1)" }}
            />
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-amber-900 text-sm">
          <strong>Nota importante:</strong> No se deben crear variaciones adicionales del logo sin autorización.
          Utilice únicamente las versiones oficiales presentadas en este manual. Para obtener los archivos vectorizados,
          contactar al área de comunicaciones.
        </p>
      </div>
    </div>
  );
}