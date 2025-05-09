-- Script SQL para crear y poblar la tabla "lotes"
CREATE TABLE lotes (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    cantidad INT,
    fecha_ingreso DATE
);

INSERT INTO lotes (id, nombre, cantidad, fecha_ingreso) VALUES
(1, 'Lote A', 100, '2024-05-01'),
(2, 'Lote B', 150, '2024-05-03'),
(3, 'Lote C', 200, '2024-05-05');
