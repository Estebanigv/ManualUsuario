import logoImage from "../../assets/e09bdf9d6bc17c600bb1508e9eae8fbf5a7aa0e5.png";
import medallaImg from "../../assets/medalla.png";
import papeleriaImg from "../../assets/papeleria.png";
import banderaImg from "../../assets/bandera.png";
import diplomaImg from "../../assets/diploma.png";
import placaImg from "../../assets/placa.png";
import { FileText, Mail, CreditCard, Shirt, Globe, File } from "lucide-react";

const applications = [
  {
    icon: FileText,
    title: "Papelería Institucional",
    items: ["Membrete oficial", "Tarjetas de presentación", "Sobres", "Carpetas"],
  },
  {
    icon: Mail,
    title: "Comunicaciones Digitales",
    items: ["Firma de email", "Redes sociales", "Sitio web", "Presentaciones"],
  },
  {
    icon: CreditCard,
    title: "Material Promocional",
    items: ["Diplomas", "Certificados", "Invitaciones", "Programas de eventos"],
  },
  {
    icon: Shirt,
    title: "Artículos Corporativos",
    items: ["Vestimenta institucional", "Accesorios", "Material de oficina", "Señalética"],
  },
  {
    icon: Globe,
    title: "Medios Digitales",
    items: ["Perfiles sociales", "Banners web", "Newsletters", "Aplicaciones móviles"],
  },
  {
    icon: File,
    title: "Documentación",
    items: ["Documentos oficiales", "Informes", "Actas", "Publicaciones"],
  },
];

export function Applications() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-slate-900 mb-2">Aplicaciones del Logo</h2>
        <p className="text-slate-600">
          El logo debe aplicarse de manera consistente en todos los puntos de contacto
          de la institución, manteniendo siempre las guías establecidas en este manual.
        </p>
      </div>


      {/* Lista de aplicaciones */}
      <div>
        <h3 className="text-slate-900 mb-4">Áreas de Aplicación</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {applications.map((app) => (
            <div key={app.title} className="border border-slate-200 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center">
                  <app.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-slate-900">{app.title}</h4>
              </div>
              <ul className="space-y-1">
                {app.items.map((item) => (
                  <li key={item} className="text-sm text-slate-600 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Ejemplos de Aplicación */}
      <div>
        <h3 className="text-slate-900 mb-6">Ejemplos de Aplicación</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Placa */}
          <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-slate-50 flex items-center justify-center">
              <img
                src={placaImg}
                alt="Placa institucional"
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-500 p-3 sm:p-4 text-center font-medium">Placa institucional</p>
          </div>

          {/* Medalla */}
          <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-slate-50 flex items-center justify-center">
              <img
                src={medallaImg}
                alt="Medalla conmemorativa"
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-500 p-3 sm:p-4 text-center font-medium">Medalla conmemorativa</p>
          </div>

          {/* Bandera */}
          <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm sm:col-span-2 lg:col-span-2">
            <div className="relative h-80 sm:h-96 lg:h-96 overflow-hidden bg-slate-50 flex items-center justify-center">
              <img
                src={banderaImg}
                alt="Bandera ceremonial"
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-500 p-3 sm:p-4 text-center font-medium">Bandera ceremonial</p>
          </div>

          {/* Papelería */}
          <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-white flex items-center justify-center">
              <img
                src={papeleriaImg}
                alt="Papelería oficial"
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-500 p-3 sm:p-4 text-center font-medium">Papelería oficial</p>
          </div>

          {/* Diploma */}
          <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-white flex items-center justify-center">
              <img
                src={diplomaImg}
                alt="Diploma certificado"
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-500 p-3 sm:p-4 text-center font-medium">Diploma y certificados</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-amber-900 text-sm">
          <strong>Importante:</strong> Para aplicaciones especiales no contempladas en este manual,
          consultar con el área de comunicaciones para asegurar el uso correcto del logo.
        </p>
      </div>
    </div>
  );
}