import logoImage from "../../assets/e09bdf9d6bc17c600bb1508e9eae8fbf5a7aa0e5.png";

export function LogoPresentation() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-slate-900 mb-2">Presentación del Logo</h2>
        <p className="text-slate-600">
          El logo de la Respétable Logia Estrella de Chile representa los valores y la tradición de la institución.
          Está compuesto por elementos simbólicos que incluyen la escuadra y el compás, una estrella de cinco puntas,
          y una corona de laurel.
        </p>
      </div>

      <div className="bg-slate-50 rounded-lg p-12 flex items-center justify-center">
        <img 
          src={logoImage} 
          alt="Logo Estrella de Chile" 
          className="w-64 h-auto"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-slate-200 rounded-lg p-4">
          <h3 className="text-slate-900 mb-2">Elementos Principales</h3>
          <ul className="text-slate-600 space-y-1 text-sm">
            <li>• Círculo exterior con texto</li>
            <li>• Escuadra y compás</li>
            <li>• Estrella de cinco puntas</li>
            <li>• Corona de laurel</li>
            <li>• Número 145</li>
          </ul>
        </div>

        <div className="border border-slate-200 rounded-lg p-4">
          <h3 className="text-slate-900 mb-2">Simbología</h3>
          <p className="text-slate-600 text-sm">
            Cada elemento del logo tiene un significado específico que representa los valores
            y principios de la logia masónica.
          </p>
        </div>

        <div className="border border-slate-200 rounded-lg p-4">
          <h3 className="text-slate-900 mb-2">Proporción</h3>
          <p className="text-slate-600 text-sm">
            El logo mantiene una proporción 1:1 y debe ser utilizado siempre manteniendo
            estas proporciones originales.
          </p>
        </div>
      </div>
    </div>
  );
}