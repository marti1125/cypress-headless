const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Reporter que genera el reporte HTML
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true, // gráficos de pruebas exitosas y fallidas
    reportPageTitle: "Reporte de pruebas de Swag Labs",
    embeddedScreenshots: true, // incluye las capturas de las fallas dentro del HTML
    inlineAssets: true, // un solo archivo HTML, sin carpetas de estilos aparte
    saveAllAttempts: false, // solo la captura del último intento
  },
  e2e: {
    // URL base de la aplicación (Swag Labs)
    baseUrl: "https://www.saucedemo.com",
    // Patrón para encontrar los archivos de prueba
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      // Registra el plugin del reporter
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
  // Grabar un video de cada archivo de pruebas, comprimido (0 a 51; más alto, más pequeño)
  // video: true,
  // videoCompression: 32,
  // Guardar una captura cuando una prueba falla (activado por defecto)
  screenshotOnRunFailure: true,
  // Reintentar las pruebas fallidas: una vez en cypress run, ninguna en cypress open
  retries: {
    runMode: 1,
    openMode: 0,
  },
});