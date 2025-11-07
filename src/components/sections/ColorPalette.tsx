import { Copy, Check } from "lucide-react";
import { useState } from "react";

const colors = [
  {
    name: "Negro Primario",
    hex: "#000000",
    rgb: "RGB(0, 0, 0)",
    cmyk: "CMYK(0, 0, 0, 100)",
    usage: "Color principal del logo. Usar sobre fondos claros."
  },
  {
    name: "Blanco",
    hex: "#FFFFFF",
    rgb: "RGB(255, 255, 255)",
    cmyk: "CMYK(0, 0, 0, 0)",
    usage: "Para versión invertida sobre fondos oscuros."
  },
  {
    name: "Gris Oscuro",
    hex: "#1E293B",
    rgb: "RGB(30, 41, 59)",
    cmyk: "CMYK(75, 65, 50, 60)",
    usage: "Color secundario para aplicaciones digitales."
  },
  {
    name: "Gris Medio",
    hex: "#64748B",
    rgb: "RGB(100, 116, 139)",
    cmyk: "CMYK(60, 45, 35, 15)",
    usage: "Para textos secundarios y elementos de apoyo."
  },
];

export function ColorPalette() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-slate-900 mb-2">Paleta de Colores</h2>
        <p className="text-slate-600">
          La paleta de colores oficial está compuesta principalmente por negro y blanco,
          con grises como colores secundarios para aplicaciones digitales y materiales complementarios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {colors.map((color) => (
          <div key={color.hex} className="border border-slate-200 rounded-lg overflow-hidden">
            <div
              className="h-24 sm:h-32 relative"
              style={{ backgroundColor: color.hex }}
            >
              {color.hex === "#FFFFFF" && (
                <div className="absolute inset-0 border-2 border-slate-200" />
              )}
            </div>
            <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
              <h3 className="text-slate-900 text-sm sm:text-base font-semibold">{color.name}</h3>

              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm text-slate-600">HEX</span>
                  <button
                    onClick={() => copyToClipboard(color.hex)}
                    className="flex items-center gap-1 sm:gap-2 px-2 py-0.5 sm:py-1 rounded hover:bg-slate-100 transition-colors text-xs sm:text-sm"
                  >
                    <code className="text-xs sm:text-sm truncate">{color.hex}</code>
                    {copiedColor === color.hex ? (
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm text-slate-600">RGB</span>
                  <button
                    onClick={() => copyToClipboard(color.rgb)}
                    className="flex items-center gap-1 sm:gap-2 px-2 py-0.5 sm:py-1 rounded hover:bg-slate-100 transition-colors text-xs sm:text-sm"
                  >
                    <code className="text-xs sm:text-sm truncate">{color.rgb}</code>
                    {copiedColor === color.rgb ? (
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm text-slate-600">CMYK</span>
                  <button
                    onClick={() => copyToClipboard(color.cmyk)}
                    className="flex items-center gap-1 sm:gap-2 px-2 py-0.5 sm:py-1 rounded hover:bg-slate-100 transition-colors text-xs sm:text-sm"
                  >
                    <code className="text-xs sm:text-sm truncate">{color.cmyk}</code>
                    {copiedColor === color.cmyk ? (
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 pt-2 sm:pt-3 border-t border-slate-200">
                {color.usage}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-900 text-sm">
          <strong>Nota:</strong> El negro puro (#000000) es el color oficial del logo.
          No sustituir por otros tonos de negro o gris oscuro.
        </p>
      </div>
    </div>
  );
}
