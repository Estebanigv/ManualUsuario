import logoImage from "../../assets/e09bdf9d6bc17c600bb1508e9eae8fbf5a7aa0e5.png";

export function generatePDFHTML() {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Manual de Marca - Estrella de Chile</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: white;
          color: #1e293b;
          line-height: 1.6;
        }

        .page {
          width: 210mm;
          height: 297mm;
          padding: 20mm;
          page-break-after: always;
          break-after: page;
          background: white;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        /* PORTADA */
        .cover-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          color: white;
        }

        .cover-page img {
          width: 80mm;
          height: 80mm;
          margin-bottom: 20mm;
        }

        .cover-page h1 {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .cover-page h2 {
          font-size: 32px;
          font-weight: 600;
          margin: 10px 0;
          color: #cbd5e1;
        }

        .cover-page p {
          font-size: 16px;
          color: #94a3b8;
          margin-top: 40px;
        }

        /* PÁGINAS NORMALES */
        .content-page h1 {
          font-size: 36px;
          font-weight: bold;
          color: #1e293b;
          margin-bottom: 20mm;
          border-bottom: 3px solid #1e293b;
          padding-bottom: 10mm;
        }

        .content-page h2 {
          font-size: 24px;
          font-weight: 600;
          color: #334155;
          margin: 15mm 0 10mm 0;
        }

        .content-page h3 {
          font-size: 18px;
          font-weight: 600;
          color: #475569;
          margin: 10mm 0 5mm 0;
        }

        .content-page p {
          font-size: 12px;
          color: #475569;
          margin-bottom: 8mm;
          line-height: 1.8;
        }

        .content-page ul, .content-page ol {
          margin-left: 10mm;
          margin-bottom: 8mm;
        }

        .content-page li {
          font-size: 12px;
          color: #475569;
          margin-bottom: 3mm;
        }

        .content-page img {
          max-width: 100%;
          height: auto;
          margin: 10mm 0;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10mm;
          margin-bottom: 10mm;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8mm;
          margin-bottom: 10mm;
        }

        .color-box {
          padding: 8mm;
          border-radius: 4px;
          text-align: center;
          font-size: 11px;
        }

        .section-box {
          border: 1px solid #e2e8f0;
          padding: 8mm;
          margin-bottom: 8mm;
          border-radius: 4px;
          background: #f8fafc;
        }

        .section-box h4 {
          font-size: 13px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 4mm;
        }

        .section-box p {
          font-size: 11px;
          color: #64748b;
          margin-bottom: 0;
        }

        /* TABLA DE CONTENIDOS */
        .toc {
          background: white;
        }

        .toc h1 {
          font-size: 32px;
          margin-bottom: 20mm;
        }

        .toc ul {
          list-style: none;
          margin-left: 0;
        }

        .toc li {
          font-size: 14px;
          color: #334155;
          margin-bottom: 6mm;
          padding-left: 0;
        }

        .toc li:before {
          content: "• ";
          color: #1e293b;
          font-weight: bold;
          margin-right: 5mm;
        }

        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          .page {
            page-break-after: always;
            break-after: page;
            margin: 0;
            padding: 20mm;
            width: 210mm;
            height: 297mm;
            box-shadow: none;
            border: none;
          }
        }
      </style>
    </head>
    <body>
      <!-- PORTADA -->
      <div class="page cover-page">
        <svg width="80mm" height="80mm" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="display: none;">
          <circle cx="50" cy="50" r="45" fill="none" stroke="white" stroke-width="2"/>
          <path d="M 50 20 L 80 80 L 20 80 Z" fill="none" stroke="white" stroke-width="2"/>
        </svg>
        <h1>Manual de Marca</h1>
        <h2>Respétable Logia</h2>
        <h2>Estrella de Chile Nº 145</h2>
        <p style="font-size: 14px; margin-top: 40mm;">Versión 1.0 - 2025</p>
      </div>

      <!-- TABLA DE CONTENIDOS -->
      <div class="page toc content-page">
        <h1>Tabla de Contenidos</h1>
        <ul>
          <li>Presentación</li>
          <li>Variaciones del Logo</li>
          <li>Área de Protección</li>
          <li>Usos Correctos e Incorrectos</li>
          <li>Paleta de Colores</li>
          <li>Tipografía</li>
          <li>Aplicaciones</li>
        </ul>
      </div>

      <!-- PRESENTACIÓN -->
      <div class="page content-page">
        <h1>Presentación</h1>
        <p>El logo de la Respétable Logia Estrella de Chile es el símbolo fundamental de nuestra identidad institucional. Representa los valores, la historia y la misión de nuestra organización.</p>
        <p>Este manual de marca establece los lineamientos necesarios para la correcta utilización del logo en todos nuestros materiales y comunicaciones, asegurando consistencia visual y fortalecimiento de nuestra marca.</p>
        <div style="text-align: center; margin-top: 20mm;">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='90' fill='none' stroke='%231e293b' stroke-width='4'/%3E%3Cpath d='M 100 30 L 140 160 L 60 160 Z' fill='%231e293b'/%3E%3Ccircle cx='100' cy='100' r='20' fill='white'/%3E%3C/svg%3E" alt="Logo" style="width: 100mm; height: 100mm;">
        </div>
      </div>

      <!-- VARIACIONES DEL LOGO -->
      <div class="page content-page">
        <h1>Variaciones del Logo</h1>
        <h2>Versión Principal</h2>
        <p>La versión principal del logo debe utilizarse en la mayoría de aplicaciones. Colores en su forma original.</p>
        <div style="text-align: center; margin: 10mm 0;">
          <div style="display: inline-block; background: white; padding: 10mm; border: 1px solid #e2e8f0;">
            <svg width="60mm" height="60mm" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="none" stroke="#1e293b" stroke-width="4"/>
              <path d="M 100 30 L 140 160 L 60 160 Z" fill="#1e293b"/>
              <circle cx="100" cy="100" r="20" fill="white"/>
            </svg>
          </div>
        </div>

        <h2>Versión Monocromática</h2>
        <p>Para aplicaciones en blanco y negro o cuando la impresión en color no sea posible.</p>
        <div style="text-align: center; margin: 10mm 0;">
          <div style="display: inline-block; background: #f8fafc; padding: 10mm; border: 1px solid #e2e8f0;">
            <svg width="60mm" height="60mm" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="none" stroke="#000" stroke-width="4"/>
              <path d="M 100 30 L 140 160 L 60 160 Z" fill="#000"/>
              <circle cx="100" cy="100" r="20" fill="white"/>
            </svg>
          </div>
        </div>

        <h2>Versión Invertida</h2>
        <p>Para aplicaciones sobre fondos oscuros manteniendo la máxima legibilidad.</p>
        <div style="text-align: center; margin: 10mm 0;">
          <div style="display: inline-block; background: #1e293b; padding: 10mm;">
            <svg width="60mm" height="60mm" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="90" fill="none" stroke="white" stroke-width="4"/>
              <path d="M 100 30 L 140 160 L 60 160 Z" fill="white"/>
              <circle cx="100" cy="100" r="20" fill="#1e293b"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- ÁREA DE PROTECCIÓN -->
      <div class="page content-page">
        <h1>Área de Protección</h1>
        <p>El área de protección es el espacio mínimo requerido alrededor del logo. Este espacio debe mantenerse libre de cualquier elemento gráfico, texto u otro contenido.</p>

        <h2>Dimensiones Mínimas</h2>
        <p>La altura mínima del logo debe ser de 25mm para impresiones. Para aplicaciones digitales, mínimo 100 píxeles de altura.</p>

        <h2>Separación Recomendada</h2>
        <p>Mantener un mínimo de 10mm de separación en todos los lados del logo respecto a cualquier otro elemento.</p>
      </div>

      <!-- USOS CORRECTOS E INCORRECTOS -->
      <div class="page content-page">
        <h1>Usos Correctos e Incorrectos</h1>

        <div class="section-box">
          <h4>✓ CORRECTO</h4>
          <p>Usar el logo en su versión original</p>
        </div>

        <div class="section-box">
          <h4>✓ CORRECTO</h4>
          <p>Mantener el logo sobre fondos sólidos</p>
        </div>

        <div class="section-box" style="background: #fee2e2;">
          <h4>✗ INCORRECTO</h4>
          <p>No distorsionar o estirar el logo</p>
        </div>

        <div class="section-box" style="background: #fee2e2;">
          <h4>✗ INCORRECTO</h4>
          <p>No cambiar los colores del logo</p>
        </div>
      </div>

      <!-- PALETA DE COLORES -->
      <div class="page content-page">
        <h1>Paleta de Colores</h1>

        <h2>Colores Principales</h2>
        <div class="grid-3">
          <div class="color-box" style="background: #1e293b; color: white;">
            <div style="font-weight: bold; margin-bottom: 4px;">Negro Profundo</div>
            <div>#1e293b</div>
          </div>
          <div class="color-box" style="background: #64748b; color: white;">
            <div style="font-weight: bold; margin-bottom: 4px;">Gris Acento</div>
            <div>#64748b</div>
          </div>
          <div class="color-box" style="background: #cbd5e1;">
            <div style="font-weight: bold; margin-bottom: 4px;">Gris Claro</div>
            <div>#cbd5e1</div>
          </div>
        </div>

        <h2>Colores Secundarios</h2>
        <div class="grid-3">
          <div class="color-box" style="background: #f1f5f9;">
            <div style="font-weight: bold; margin-bottom: 4px;">Blanco Hueso</div>
            <div>#f1f5f9</div>
          </div>
          <div class="color-box" style="background: #e2e8f0;">
            <div style="font-weight: bold; margin-bottom: 4px;">Gris Suave</div>
            <div>#e2e8f0</div>
          </div>
          <div class="color-box" style="background: #94a3b8; color: white;">
            <div style="font-weight: bold; margin-bottom: 4px;">Gris Medio</div>
            <div>#94a3b8</div>
          </div>
        </div>
      </div>

      <!-- TIPOGRAFÍA -->
      <div class="page content-page">
        <h1>Tipografía</h1>

        <h2>Fuente Principal: System UI</h2>
        <p style="font-size: 18px; font-weight: bold; margin: 8mm 0;">Encabezados Bold</p>
        <p style="font-size: 16px; font-weight: 600; margin: 8mm 0;">Encabezados Semibold</p>
        <p style="font-size: 14px; margin: 8mm 0;">Texto Regular</p>

        <h2>Tamaños Recomendados</h2>
        <ul>
          <li>Títulos Principales: 36-48px</li>
          <li>Subtítulos: 24-32px</li>
          <li>Encabezados: 16-20px</li>
          <li>Texto Cuerpo: 12-14px</li>
          <li>Pequeño: 10-11px</li>
        </ul>
      </div>

      <!-- APLICACIONES -->
      <div class="page content-page">
        <h1>Aplicaciones</h1>

        <h2>Aplicaciones Físicas</h2>
        <div class="grid-3">
          <div class="section-box">
            <h4>Placa Institucional</h4>
            <p>Placas en latón o bronce para señalización</p>
          </div>
          <div class="section-box">
            <h4>Medalla</h4>
            <p>Medallas conmemorativas y distintivos</p>
          </div>
          <div class="section-box">
            <h4>Bandera</h4>
            <p>Estandartes y banderas ceremoniales</p>
          </div>
        </div>

        <h2>Papelería y Material Corporativo</h2>
        <div class="grid-2">
          <div class="section-box">
            <h4>Papelería Oficial</h4>
            <p>Membrete, tarjetas, sobres institucionales</p>
          </div>
          <div class="section-box">
            <h4>Diploma y Certificados</h4>
            <p>Documentos formales y reconocimientos</p>
          </div>
        </div>
      </div>

      <!-- CIERRE -->
      <div class="page content-page" style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="color: #1e293b; border: none; padding: 0; margin-bottom: 20mm;">Fin del Manual</h1>
        <p style="font-size: 16px; text-align: center; color: #64748b;">Respétable Logia Estrella de Chile</p>
        <p style="font-size: 14px; text-align: center; color: #94a3b8;">Manual de Marca 2025</p>
      </div>
    </body>
    </html>
  `;
}
