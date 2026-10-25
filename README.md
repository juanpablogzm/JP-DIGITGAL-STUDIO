# JP / Digital Studio

Landing de portafolio para presentar servicios de diseño y desarrollo de soluciones tecnológicas para negocios. El sitio traduce experiencia técnica en una propuesta clara, visual y orientada a generar conversaciones con prospectos.

## Propósito

Mostrar una oferta de valor centrada en productos digitales a medida: plataformas web, sistemas operativos internos, automatización e inteligencia artificial aplicada. La narrativa está diseñada para comunicar capacidad técnica, claridad de proceso y confianza.

## Proyectos destacados

| Proyecto | Enfoque | Enlace |
| --- | --- | --- |
| Terranova ERP | SaaS inmobiliario, contratos, geodatos e IA | Incluido como caso de estudio |
| FisioAdmin | Gestión clínica, agenda, expedientes y métricas | [Ver landing](https://fisioadminlanding.vercel.app/) |
| Obra+ | Presupuestos y precios unitarios para construcción | Incluido como caso de estudio |
| FocusWork | PWA de enfoque y bienestar laboral | Incluido como caso de estudio |
| Infinity Energy | Presencia comercial para energía solar | [Visitar sitio](https://infinityenergy.com.mx/) |

## Características

- Diseño responsive, pensado primero para comunicar valor y convertir visitas en contactos.
- Navegación de una página con anclas a soluciones, proyectos, proceso y contacto.
- Componentes visuales propios para presentar cada proyecto, sin depender de capturas externas.
- Estética editorial de alto contraste, microanimaciones y tipografía optimizada para lectura.
- Enlaces externos seguros para los proyectos publicados.

## Tecnologías

- HTML5
- CSS3 personalizado
- [Bootstrap 5](https://getbootstrap.com/) para la base responsive
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- JavaScript nativo para el estado de navegación y el año dinámico del footer
- Google Fonts: Manrope y DM Mono

No requiere instalación de dependencias ni proceso de compilación.

## Ejecutar localmente

Puedes abrir `index.html` directamente en el navegador. Para evitar limitaciones del navegador y simular un servidor web, usa cualquier servidor estático:

```bash
cd "Digital Studio"
python3 -m http.server 4173
```

Después abre [http://localhost:4173](http://localhost:4173).

## Estructura

```text
Digital Studio/
├── index.html      # Contenido, estructura y enlaces de la landing
├── styles.css      # Sistema visual, layouts y comportamiento responsive
├── script.js       # Interacciones ligeras
└── README.md       # Documentación del proyecto
```

## Personalización antes de publicar

1. Reemplaza `hola@jp-digital.studio` en `index.html` por la dirección de Gmail de contacto.
2. Actualiza el nombre de marca `JP / Digital Studio` si se utilizará una marca comercial distinta.
3. Revisa que las descripciones de los casos de estudio correspondan a la versión publicada de cada producto.
4. Añade un dominio propio y configura HTTPS en el proveedor de hosting elegido.

## Publicación

Al ser un sitio estático, puede desplegarse en GitHub Pages, Vercel, Netlify, Cloudflare Pages o cualquier hosting que sirva archivos HTML, CSS y JavaScript.

## Derechos

© 2026 JP / Digital Studio. Todos los derechos reservados.
