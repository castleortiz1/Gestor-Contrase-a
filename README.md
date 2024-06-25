# Gestor de Contraseñas

Este es un gestor de contraseñas con encriptación, desarrollado utilizando Node.js, Express y MySQL. Permite guardar y recuperar contraseñas de forma segura utilizando un PIN de 17 dígitos.

## Contenidos

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Scripts](#scripts)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Instalación

1. Clona este repositorio en tu máquina local.

   ```bash
   git@github.com:castleortiz1/Gestor-Contrase-a.git
   cd password-manager
   ```

2. Instala las dependencias del proyecto.

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y configura tus credenciales de la base de datos.
   ```env
   DB_HOST=tu_host
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_NAME=tu_base_de_datos
   ```

## Configuración

1. Asegúrate de tener una base de datos MySQL corriendo y accesible.
2. Ejecuta el script `setup_database.sql` para crear la tabla necesaria.
   ```bash
   mysql -u tu_usuario -p tu_base_de_datos < scripts/setup_database.sql
   ```

## Uso

1. Inicia el servidor.

   ```bash
   npm start
   ```

2. Abre tu navegador web y ve a `http://localhost:3000`.

3. Usa la interfaz web para guardar y recuperar contraseñas.

## Scripts

En la carpeta `scripts` encontrarás el archivo `setup_database.sql` que contiene el script para crear la tabla necesaria en la base de datos.

### `scripts/setup_database.sql`

```sql
CREATE TABLE IF NOT EXISTS passwords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    app_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    encrypted_password TEXT NOT NULL,
    iv VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
