// Datos simulados, normalmente vendrían de una base de datos
const lotes = [
    { id: 1, nombre: "Lote A", cantidad: 100, fecha: "2024-05-01" },
    { id: 2, nombre: "Lote B", cantidad: 150, fecha: "2024-05-03" },
    { id: 3, nombre: "Lote C", cantidad: 200, fecha: "2024-05-05" }
];

window.onload = function() {
    const cuerpoTabla = document.getElementById("contenido-tabla");

    lotes.forEach(lote => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${lote.id}</td>
            <td>${lote.nombre}</td>
            <td>${lote.cantidad}</td>
            <td>${lote.fecha}</td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}
