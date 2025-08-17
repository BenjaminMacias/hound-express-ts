# Hound Express (TypeScript)

## 🧾 Descripción del proyecto
**Hound Express TS** es una API REST escrita en **Node.js + Express + TypeScript** para la gestión de envíos/paquetería.  
Incluye endpoints para **autenticación (JWT)**, **CRUD de envíos**, y **seguimiento por código**.  
El diseño está modularizado (rutas → controladores → servicios → capa de datos) para poder cambiar fácilmente la base de datos o el proveedor de persistencia.

---

## 🧰 Tecnologías utilizadas
- **Node.js** + **Express**
- **TypeScript**
- **JWT** para autenticación
- **dotenv** para variables de entorno
- **cors**, **helmet**, **morgan** como middlewares comunes
- (Opcional) Conector a BD via `DATABASE_URL` (Mongo/Postgres/MySQL, etc.)
- Herramientas de desarrollo (sugeridas): `ts-node-dev` / `nodemon`, ESLint, Prettier, Jest

---

## ⚙️ Instrucciones de instalación y uso

### 1) Clonar e instalar dependencias
```bash
git clone https://github.com/BenjaminMacias/hound-express-ts.git
cd hound-express-ts
npm install

Variables de entorno
Crea un archivo .env en la raíz del proyecto:


# .env
PORT=4000
NODE_ENV=development

# Clave para firmar/validar JWT
JWT_SECRET=super_secret_key_change_me

# (Opcional) URL de base de datos. El proyecto puede funcionar en memoria si no se define.
# DATABASE_URL=mongodb://localhost:27017/hound_express
# DATABASE_URL=postgres://user:pass@localhost:5432/hound_express
# DATABASE_URL=mysql://user:pass@localhost:3306/hound_express

Desarrollo con TypeScript en caliente

npm run dev
Servidor en: http://localhost:4000

Compilar a JavaScript y ejecutar en producción

npm run build
npm start
# o
npm run start:prod
🔎 Scripts típicos (ajústalos a tu package.json):

dev: arranca con ts-node-dev o nodemon observando src/**/*.ts

build: tsc

start: node dist/server.js

start:prod: igual que start (opcional)

🧪 Ejemplos de uso (cURL)
Para endpoints protegidos añade el header:
Authorization: Bearer <TU_TOKEN_JWT>

Auth
Registro


curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Jane Doe",
    "email":"jane@example.com",
    "password":"Secret123!"
  }'
Login


curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email":"jane@example.com",
    "password":"Secret123!"
  }'
# Respuesta: { "token": "<JWT>" }
Envíos (Shipments)
Crear envío


curl -X POST http://localhost:4000/api/shipments \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "code":"HX-202401-0001",
    "sender":"Acme Inc.",
    "receiver":"Jane Doe",
    "origin":"CDMX",
    "destination":"GDL",
    "status":"created",
    "weight": 3.2
  }'
Listar envíos


curl "http://localhost:4000/api/shipments?status=created&search=GDL&page=1&limit=20" \
  -H "Authorization: Bearer <TOKEN>"
Obtener por ID


curl http://localhost:4000/api/shipments/64f2c1... \
  -H "Authorization: Bearer <TOKEN>"
Actualizar estado


curl -X PATCH http://localhost:4000/api/shipments/64f2c1... \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{ "status":"in_transit" }'
Eliminar


curl -X DELETE http://localhost:4000/api/shipments/64f2c1... \
  -H "Authorization: Bearer <TOKEN>"
Tracking
Seguimiento público por código


curl http://localhost:4000/api/tracking/HX-202401-0001
# → Últimos estatus / checkpoints asociados al envío


















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
