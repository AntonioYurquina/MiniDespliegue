-- Script SQL para crear y poblar la tabla "lotes"
CREATE TABLE lotes (
    id INT PRIMARY KEY,
    depto INT,
    medicion INT,
    fecha_ingreso DATE
);

INSERT INTO lotes (id, depto, medicion, fecha_ingreso) VALUES
(1, 1, 100, '2024-05-01'),
(2, 2, 150, '2024-05-03'),
(3, 3, 200, '2024-05-05'),
(4, 6, 2, '2024-05-06'),
(5, 8, 99, '2024-05-07'),
(6, 2, 600, '2024-05-10'),
(7, 1, 100, '2024-05-09'),
(8, 12, 180, '2024-05-11'),
(9, 4, 75, '2024-05-12'),
(10, 9, 320, '2024-05-13');
