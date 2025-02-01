export default {
  testEnvironment: "jest-environment-jsdom",  // Usa el entorno jsdom instalado
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",  // Transforma los archivos JS/TS con Babel
  },
  transformIgnorePatterns: [
    "/node_modules/(?!mi-paquete|otro-paquete)/"  // Si necesitas transformar algunas dependencias
  ]
};
