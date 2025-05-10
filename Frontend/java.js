async function cargarDatos() {
    try {
        // Usa la IP/puerto público de tu backend
        const response = await fetch('http://149.50.147.99:5000/api/lotes');
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const lotes = await response.json();
        
        // Generar tabla dinámicamente
        const cuerpoTabla = document.getElementById("contenido-tabla");
        cuerpoTabla.innerHTML = "";  // Limpiar contenido previo
        
        lotes.forEach(lote => {
            cuerpoTabla.innerHTML += `
                <tr>
                    <td>${new Date(lote.fecha).toLocaleString()}</td> <!-- Convertir fecha a formato legible -->
                    <td>${lote.id_sensor}</td>
                    <td>${lote.medicion}</td>
                </tr>
            `;
        });
        
    } catch (error) {
        console.error("Error:", error);
        // Mostrar mensaje de error al usuario
        cuerpoTabla.innerHTML = `<tr><td colspan="3">⚠️ Error cargando datos: ${error.message}</td></tr>`;
    }
}

window.onload = cargarDatos;

