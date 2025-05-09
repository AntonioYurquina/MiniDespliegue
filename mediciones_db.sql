-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS mediciones_db;

-- Usar la base de datos
USE mediciones_db;

-- Crear la tabla
CREATE TABLE IF NOT EXISTS mediciones (
    id INT,
    medicion INT,
    fecha DATETIME
);
