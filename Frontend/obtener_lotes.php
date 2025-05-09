<?php
// obtener_lotes.php

// Configura la conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tu_base_de_datos";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Comprobar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta para obtener los lotes
$sql = "SELECT id, depto, medicion, fecha_ingreso FROM lotes";
$result = $conn->query($sql);

$lotes = [];

if ($result->num_rows > 0) {
    // Guardar los datos en un array
    while($row = $result->fetch_assoc()) {
        $lotes[] = $row;
    }
} else {
    echo "0 resultados";
}

$conn->close();

// Devolver los datos como JSON
echo json_encode($lotes);
?>
