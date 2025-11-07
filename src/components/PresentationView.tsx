import logoImage from "../../assets/e09bdf9d6bc17c600bb1508e9eae8fbf5a7aa0e5.png";
import medallaImg from "../../assets/medalla.png";
import papeleriaImg from "../../assets/papeleria.png";
import banderaImg from "../../assets/bandera.png";
import diplomaImg from "../../assets/diploma.png";
import placaImg from "../../assets/placa.png";

export function PresentationView() {
  return (
    <div className="bg-white">
      {/* Diapositiva 1: Portada */}
      <div className="h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center text-white p-8 page-break">
        <img src={logoImage} alt="Logo" className="w-32 h-32 mb-8" />
        <h1 className="text-5xl font-bold mb-4 text-center">Manual de Marca</h1>
        <p className="text-2xl mb-2">Respétable Logia</p>
        <p className="text-2xl mb-8">Estrella de Chile Nº 145</p>
        <p className="text-lg text-slate-400">Versión 1.0 - 2025</p>
      </div>

      {/* Diapositiva 2: Placa */}
      <div className="h-screen w-full bg-white flex flex-col items-center justify-center p-8 page-break">
        <h2 className="text-4xl font-bold mb-8 text-slate-900">Placa Institucional</h2>
        <img src={placaImg} alt="Placa" className="max-h-96 w-auto mb-8" />
        <ul className="text-xl text-slate-600 text-center">
          <li>• Placas en latón o bronce</li>
          <li>• Señalización direccional</li>
          <li>• Letreros identificativos</li>
        </ul>
      </div>

      {/* Diapositiva 3: Medalla */}
      <div className="h-screen w-full bg-white flex flex-col items-center justify-center p-8 page-break">
        <h2 className="text-4xl font-bold mb-8 text-slate-900">Medalla Conmemorativa</h2>
        <img src={medallaImg} alt="Medalla" className="max-h-96 w-auto mb-8" />
        <ul className="text-xl text-slate-600 text-center">
          <li>• Medallas conmemorativas</li>
          <li>• Distintivos y condecoraciones</li>
          <li>• Reconocimientos especiales</li>
        </ul>
      </div>

      {/* Diapositiva 4: Bandera */}
      <div className="h-screen w-full bg-white flex flex-col items-center justify-center p-8 page-break">
        <h2 className="text-4xl font-bold mb-8 text-slate-900">Bandera Ceremonial</h2>
        <img src={banderaImg} alt="Bandera" className="max-h-96 w-auto mb-8" />
        <ul className="text-xl text-slate-600 text-center">
          <li>• Estandartes y banderas</li>
          <li>• Pendones ceremoniales</li>
          <li>• Decoración de eventos</li>
        </ul>
      </div>

      {/* Diapositiva 5: Papelería */}
      <div className="h-screen w-full bg-white flex flex-col items-center justify-center p-8 page-break">
        <h2 className="text-4xl font-bold mb-8 text-slate-900">Papelería Oficial</h2>
        <img src={papeleriaImg} alt="Papelería" className="max-h-96 w-auto mb-8" />
        <ul className="text-xl text-slate-600 text-center">
          <li>• Membrete oficial</li>
          <li>• Tarjetas de presentación</li>
          <li>• Sobres institucionales</li>
        </ul>
      </div>

      {/* Diapositiva 6: Diploma */}
      <div className="h-screen w-full bg-white flex flex-col items-center justify-center p-8 page-break">
        <h2 className="text-4xl font-bold mb-8 text-slate-900">Diploma y Certificados</h2>
        <img src={diplomaImg} alt="Diploma" className="max-h-96 w-auto mb-8" />
        <ul className="text-xl text-slate-600 text-center">
          <li>• Diplomas y certificados</li>
          <li>• Invitaciones ceremoniales</li>
          <li>• Documentos formales</li>
        </ul>
      </div>

      {/* Diapositiva 7: Cierre */}
      <div className="h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center text-white p-8 page-break">
        <img src={logoImage} alt="Logo" className="w-24 h-24 mb-8" />
        <h2 className="text-4xl font-bold mb-8">Gracias</h2>
        <p className="text-xl text-slate-300">Respétable Logia Estrella de Chile</p>
        <p className="text-lg text-slate-400 mt-4">Manual de Marca 2025</p>
      </div>

      <style>{`
        @media print {
          .page-break {
            page-break-after: always;
            break-after: page;
          }
          body {
            margin: 0;
            padding: 0;
          }
          html {
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}
