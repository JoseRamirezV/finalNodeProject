# Descripción

Backend para aplicación que permite realizar operaciones CRUD para la gestión de 'Fun Facts', o datos curiosos, acerca del planeta tierra.

## Ejecutar en Dev

1. Clonar repositorio
2. Crear copia de archivo `.env.template`, renombrar a `.env` reemplazar los campos necesarios
3. Instalar dependencias `npm i`
4. Correr proyecto en modo desarrollo `npm run dev`
   -  **Nota**: En caso de tener mongoDB instalado localmente, ejecutar `mongod` antes de `npm run dev`
5. Para agregar datos de prueba hacer una petición POST al endpoint http://localhost:5000/api/facts/seed

## Dependencias

-  `mongoose V8.8.2`,
-  `express V4.21.1`,
-  `cors V2.8.5`,
-  `morgan V1.10.0`

## Autores

-  [JoseRamirezV](https://github.com/JoseRamirezV)
-  [Segura98Sara](https://github.com/Segura98Sara)
-  [catalinasilva-sys](https://github.com/catalinasilva-sys)
