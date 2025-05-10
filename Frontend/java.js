// Esta función hará la solicitud a tu servidor remoto y mostrará los datos
async function obtenerYProcesarLotes() {
    try {
        // Realizar la solicitud al servidor remoto que devuelve los datos de los lotes
        const response = await fetch('https://mi-servidor.com/api/lotes');  // Cambia la URL por la de tu servidor
        
        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error('Error al obtener los datos del servidor');
        }

        // Parsear la respuesta a formato JSON
        const lotes = await response.json();

        // Procesar los lotes
        const resultado = procesarLotes(lotes);

        // Mostrar los lotes en la tabla
        mostrarLotes(resultado.lotesProcesados, resultado.total);
    } catch (error) {
        console.error('Hubo un error con la solicitud:', error);
    }
}

// Procesamiento de los datos de los lotes
function procesarLotes(lotes) {
    let total = 0;
    const lotesProcesados = lotes.map(lote => {
        lote.cantidad = parseInt(lote.cantidad, 10);
        total += lote.cantidad;
        return {
            ...lote,
            destacado: lote.cantidad > 150  // Si la cantidad es mayor a 150, marcarlo como destacado
        };
    });

    return { lotesProcesados, total };
}

// Mostrar los lotes en la tabla HTML
function mostrarLotes(lotesProcesados, total) {
    const cuerpoTabla = document.getElementById("contenido-tabla");
    cuerpoTabla.innerHTML = '';  // Limpiar la tabla antes de agregar datos nuevos

    lotesProcesados.forEach(lote => {
        const fila = document.createElement("tr");

        // Si el lote es destacado, se agrega una clase
        if (lote.destacado) {
            fila.classList.add("destacado");
        }

        fila.innerHTML = `
            <td>${lote.id}</td>
            <td>${lote.depto}</td>
            <td>${lote.medicion}</td>
            <td>${lote.fecha_ingreso}</td>
        `;
        cuerpoTabla.appendChild(fila);
    });

    // Agregar una fila para mostrar el total de las unidades
    const filaTotal = document.createElement("tr");
    filaTotal.innerHTML = `
        <td colspan="2"><strong>Total</strong></td>
        <td colspan="2"><strong>${total} unidades</strong></td>
    `;
    cuerpoTabla.appendChild(filaTotal);
}

// Ejecutar la función al cargar la página
window.onload = obtenerYProcesarLotes;
