# hound-express-ts

Plantilla mínima pero lista para producción para crear **APIs REST con Express + TypeScript**.  
Incluye estructura de carpetas clara, validación básica, manejo centralizado de errores y scripts de desarrollo/testing.

> ✅ Útil para arrancar rápido servicios HTTP/JSON con buenas prácticas y tipado estático.

---

## 📌 Descripción del proyecto

- **TypeScript + Express** para una API sencilla y tipada.
- **Middlewares comunes**: `cors`, `helmet` (seguridad), `morgan`/logger (logs), `dotenv` (variables de entorno).
- **Errores unificados**: respuesta consistente en errores (400/401/404/500).
- **Validación** (opcional con `zod`/`express-validator` según esté configurado).
- **Testing** con `jest` + `supertest` (o similar).
- **Scripts** para desarrollo, build y tests.
- **Estructura** lista para escalar a módulos/recursos.

> Ajusta los nombres de rutas/archivos a lo que tengas en el repo. Este README usa ejemplos típicos.

---

## 🧰 Tecnologías utilizadas

- **Node.js** (>= 18)
- **TypeScript**
- **Express**
- **dotenv**, **cors**, **helmet**
- **morgan** (o pino) para logging
- **jest** + **supertest** (tests)
- **eslint** + **prettier** (estilo y estática)

*(Algunas librerías pueden variar; edita esta lista según tu `package.json`.)*

---

## ⚙️ Instrucciones de instalación y uso

### 1) Clonar e instalar
```bash
git clone https://github.com/BenjaminMacias/hound-express-ts.git
cd hound-express-ts
npm install
# o pnpm install / yarn


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
