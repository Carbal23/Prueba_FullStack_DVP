# Prueba Full Stack DVP - Documentación
Este repositorio contiene el código fuente de la prueba Full Stack desarrollado con Node.js, Express.js, React.js y TypeScript. El proyecto incluye una aplicación backend y una aplicación frontend que se comunican entre sí para proporcionar una experiencia de usuario completa.

## Backend
El backend del proyecto está desarrollado utilizando Node.js y Express.js. Utiliza una base de datos PostgreSQL para almacenar información de usuarios. A continuación, se muestran las dependencias principales utilizadas en el backend:

* cors: Middleware que habilita la comunicación entre dominios cruzados (CORS) para permitir que el frontend interactúe con el backend.

* dotenv: Carga variables de entorno desde un archivo .env para configurar la conexión con la base de datos.

* express: Framework para construir aplicaciones web y APIs en Node.js.

* express-validator: Middleware para validar y sanitizar los datos enviados al servidor.

* pg: Cliente PostgreSQL para Node.js.

* sequelize: ORM (Object-Relational Mapping) para interactuar con la base de datos.

## Levantar el Backend
Para ejecutar el backend, sigue estos pasos:

1. Asegúrate de tener una base de datos PostgreSQL configurada con los mismos  valores que se encuentran en el archivo .env del backend.
2. Abre una terminal en la carpeta backend.
3. Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

4. Luego, ejecuta el siguiente comando para iniciar el servidor:

```bash
npm start
```
El backend estará disponible en http://localhost:4000.

## Frontend
El frontend del proyecto está desarrollado utilizando React.js con TypeScript. Utiliza diversas librerías y dependencias para el manejo de la interfaz de usuario y la comunicación con el backend. A continuación, se muestran las dependencias principales utilizadas en el frontend:

* axios: Cliente HTTP para realizar solicitudes al backend.

* chart.js y react-chartjs-2: Librerías para crear gráficos y visualizaciones.

* next: Framework para construir aplicaciones de React con enfoque en renderizado del lado del servidor (SSR) y generación de sitios estáticos.

* react y react-dom: Librerías principales de React para construir componentes y manejar el DOM virtual.

* sweetalert2: Librería para mostrar alertas personalizadas.

## Levantar el Frontend
Para ejecutar el frontend, sigue estos pasos:

1. Abre una terminal en la carpeta frontend.
2. Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```

3. Luego, ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```bash
npm start
```
El frontend estará disponible en http://localhost:3000.

## Docker
El proyecto también incluye archivos Dockerfile y docker-compose.yml para facilitar el despliegue de las aplicaciones utilizando Docker. El backend se ejecutará en el puerto 4000 y el frontend en el puerto 3000.

## Levantar las Aplicaciones con Docker
Para levantar las aplicaciones utilizando Docker, sigue estos pasos:

1. Asegúrate de tener Docker instalado y configurado en tu sistema.
2. Abre una terminal en la raíz del proyecto (donde se encuentra el archivo docker-compose.yml).
3. Ejecuta el siguiente comando para iniciar los servicios:

```bash
docker-compose build
```
4. luego el siguiente comando:

```bash
docker-compose up
```

Una vez que los contenedores se hayan iniciado, el backend estará disponible en http://localhost:4000 y el frontend en http://localhost:3000.

Con esto, tendrás el proyecto Full Stack DVP completamente levantado y listo para ser utilizado.

¡Gracias por revisar la documentación del proyecto! Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.