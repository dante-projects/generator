export default {
  presets: [
    [
      "@babel/preset-env", {
        targets: {
          node: "current" // Para usar la versión de Node.js actual
        },
        modules: "auto" // Auto detectará si debe usar módulos o CommonJS
      }
    ]
  ]
};