# Tech Challenge

📜 Descripción
Este proyecto es un challenge técnico que implementa automatización de pruebas end-to-end (E2E) usando tecnologías modernas. Es perfecto para pruebas tanto de API como de GUI con Cypress.

🚀 Tecnologías Usadas
Node.js: Entorno de ejecución para JavaScript.
Cypress: Framework para pruebas E2E.
JavaScript: Lenguaje base del proyecto.

🛠️ Clonar el Repositorio
Sigue estos pasos para clonar y configurar el proyecto:

1) git clone https://github.com/Maurovalls/tech-challenge.git
2) cd tech-challenge
3) npm install


📦 Comandos disponibles
A continuación, se explican los comandos que puedes usar:

npm run cypress:open: Abre la interfaz de Cypress para pruebas interactivas.
npm run cypress:run: Ejecuta todas las pruebas en modo headless.
npm run test: Ejecuta las pruebas utilizando Cypress.
npm run cypress:run:gui: Ejecuta las pruebas de GUI en modo headless.
npm run cypress:run:api: Ejecuta las pruebas de API en modo headles.



💻 Herramientas recomendadas
Es recomendable tener instalados los siguientes programas:

Node.js (v14+)
Git
Cypress (instalado con npm install)

🗂️ Estructura del Proyecto
El proyecto tiene dos carpetas principales para pruebas:

e2e/api-tests: Contiene las pruebas de API.
e2e/gui-tests: Contiene las pruebas de la interfaz gráfica.


⚙️ Cómo ejecutar las pruebas
Para ejecutar las pruebas de forma automática, utiliza:

1) npm run cypress:run
   
Si prefieres un entorno interactivo:

2) npm run cypress:open


🔧 Integración continua con GitHub Actions
Este proyecto está configurado para ejecutar pruebas automáticamente usando GitHub Actions cada vez que se haga un push a la rama main.
