import { useState, useRef, useEffect } from "react";
import { LogoPresentation } from "./sections/LogoPresentation";
import { LogoVariations } from "./sections/LogoVariations";
import { ClearSpace } from "./sections/ClearSpace";
import { CorrectUsage } from "./sections/CorrectUsage";
import { ColorPalette } from "./sections/ColorPalette";
import { Typography } from "./sections/Typography";
import { Applications } from "./sections/Applications";
import { ChevronRight, BookOpen, Download, Loader, Menu, X } from "lucide-react";

const sections = [
  { id: "presentation", title: "Presentación", component: LogoPresentation },
  { id: "variations", title: "Variaciones del Logo", component: LogoVariations },
  { id: "clearspace", title: "Área de Protección", component: ClearSpace },
  { id: "usage", title: "Usos Correctos e Incorrectos", component: CorrectUsage },
  { id: "colors", title: "Paleta de Colores", component: ColorPalette },
  { id: "typography", title: "Tipografía", component: Typography },
  { id: "applications", title: "Aplicaciones", component: Applications },
];

export function BrandManual() {
  const [activeSection, setActiveSection] = useState("presentation");
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const contentRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Detectar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ActiveComponent = sections.find((s) => s.id === activeSection)?.component || LogoPresentation;

  const downloadPresentation = async () => {
    setIsGeneratingPDF(true);
    try {
      const savedSection = activeSection;

      // Crear un contenedor invisible para renderizar todas las secciones
      const printContainer = document.createElement('div');
      printContainer.style.position = 'absolute';
      printContainer.style.left = '-9999px';
      printContainer.style.width = '210mm';
      printContainer.style.backgroundColor = 'white';
      document.body.appendChild(printContainer);

      // Crear portada
      const coverPage = document.createElement('div');
      coverPage.className = 'bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 min-h-screen flex flex-col items-center justify-center text-center';
      coverPage.style.pageBreakAfter = 'always';
      coverPage.innerHTML = `
        <h1 class="text-5xl font-bold mb-4">Manual de Marca</h1>
        <h2 class="text-3xl font-semibold mb-2">Respétable Logia</h2>
        <h2 class="text-3xl font-semibold mb-8">Estrella de Chile Nº 145</h2>
        <p class="text-lg text-slate-400">Versión 1.0 - 2025</p>
      `;
      printContainer.appendChild(coverPage);

      // Crear tabla de contenidos
      const tocPage = document.createElement('div');
      tocPage.className = 'bg-white p-10 min-h-screen';
      tocPage.style.pageBreakAfter = 'always';
      tocPage.innerHTML = `
        <h1 class="text-4xl font-bold mb-8 pb-4 border-b-4 border-slate-900">Tabla de Contenidos</h1>
        <ul class="text-lg space-y-3 mt-8">
          <li class="text-slate-700">• Presentación</li>
          <li class="text-slate-700">• Variaciones del Logo</li>
          <li class="text-slate-700">• Área de Protección</li>
          <li class="text-slate-700">• Usos Correctos e Incorrectos</li>
          <li class="text-slate-700">• Paleta de Colores</li>
          <li class="text-slate-700">• Tipografía</li>
          <li class="text-slate-700">• Aplicaciones</li>
        </ul>
      `;
      printContainer.appendChild(tocPage);

      // Iterar sobre todas las secciones
      for (const section of sections) {
        setActiveSection(section.id);
        const waitTime = section.id === "applications" ? 2500 : 1500;
        await new Promise(resolve => setTimeout(resolve, waitTime));

        const contentElement = contentRef.current;
        if (contentElement) {
          const clone = contentElement.cloneNode(true) as HTMLElement;

          // Eliminar botones innecesarios
          clone.querySelectorAll('button').forEach(btn => {
            if (btn.querySelector('svg') || btn.textContent.includes('Copy') || btn.textContent.includes('Check')) {
              const code = btn.querySelector('code');
              if (code) {
                btn.replaceWith(code.cloneNode(true));
              } else {
                btn.remove();
              }
            }
          });

          const sectionPage = document.createElement('div');
          sectionPage.className = 'bg-white p-10 min-h-screen';
          sectionPage.style.pageBreakAfter = 'always';
          sectionPage.innerHTML = `
            <h1 class="text-4xl font-bold mb-8 pb-4 border-b-4 border-slate-900">${section.title}</h1>
            <div class="text-base text-slate-700 space-y-4">
              ${clone.innerHTML}
            </div>
          `;
          printContainer.appendChild(sectionPage);
        }
      }

      setActiveSection(savedSection);

      // Esperar a que todo se renderice
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Usar técnica de iframe en lugar de popup
      const iframe = document.createElement('iframe');
      iframe.style.position = 'absolute';
      iframe.style.left = '-9999px';
      iframe.style.width = '0';
      iframe.style.height = '0';
      document.body.appendChild(iframe);

      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) {
        document.body.removeChild(printContainer);
        document.body.removeChild(iframe);
        setIsGeneratingPDF(false);
        return;
      }

      // Obtener el HTML completo de la página con todos los estilos
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Manual de Marca - Estrella de Chile</title>
          <script src="https://cdn.tailwindcss.com"><\/script>
          <style>
            @page { size: A4; margin: 0; }
            @media print {
              body { margin: 0; padding: 0; background: white; }
              * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            }
          </style>
        </head>
        <body>
          ${printContainer.innerHTML}
        </body>
        </html>
      `;

      iframeDoc.open();
      iframeDoc.write(htmlContent);
      iframeDoc.close();

      // Esperar a que cargue Tailwind y llamar a imprimir
      setTimeout(() => {
        iframe.contentWindow?.print();
        setTimeout(() => {
          document.body.removeChild(printContainer);
          document.body.removeChild(iframe);
          setIsGeneratingPDF(false);
        }, 500);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 flex-shrink-0" />
              <div className="min-w-0">
                <h1 className="text-base sm:text-lg font-semibold text-slate-900 truncate">Manual de Marca</h1>
                <p className="text-xs sm:text-sm text-slate-600 truncate">Respétable Logia Estrella de Chile</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={downloadPresentation}
                disabled={isGeneratingPDF}
                title={isGeneratingPDF ? "Generando PDF..." : "Descargar Manual en PDF"}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-700 hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGeneratingPDF ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <Download className="w-5 h-5" />
                )}
              </button>
              <div className="hidden sm:block text-xs text-slate-500 whitespace-nowrap">
                v1.0 - 2025
              </div>
              {/* Menu hamburguesa - solo en móvil */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-700 hover:text-slate-900"
                title={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-black/20 z-30" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-16 bg-white border-b border-slate-200 shadow-lg transition-all duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <h2 className="text-sm font-semibold text-slate-900 mb-3">Contenido</h2>
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors flex items-center justify-between group text-sm ${
                    activeSection === section.id
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span>{section.title}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform flex-shrink-0 ml-2 ${
                      activeSection === section.id ? "text-white" : "text-slate-400 group-hover:text-slate-600"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div ref={mainContentRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <div className={isDesktop ? "grid grid-cols-4 gap-8" : "flex flex-col gap-4"}>
          {/* Sidebar Navigation - Solo Desktop */}
          {isDesktop && (
            <nav className="col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-3 sm:p-4 sticky top-20 sm:top-24">
                <h2 className="text-sm sm:text-base font-semibold text-slate-900 mb-3 sm:mb-4">Contenido</h2>
                <ul className="space-y-0.5 sm:space-y-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left px-2 sm:px-3 py-1.5 sm:py-2 rounded-md transition-colors flex items-center justify-between group text-xs sm:text-sm ${
                          activeSection === section.id
                            ? "bg-slate-900 text-white"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span className="truncate">{section.title}</span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform flex-shrink-0 ml-1 ${
                            activeSection === section.id ? "text-white" : "text-slate-400 group-hover:text-slate-600"
                          }`}
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          )}

          {/* Main Content */}
          <main className={isDesktop ? "col-span-3" : "w-full"}>
            <div ref={contentRef} data-section-content className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 sm:p-6 md:p-8">
              <ActiveComponent />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
