async function obtenerYProcesarLotes() {
    try {
        const response = await fetch('obtener_lotes.php');
        const lotes = await response.json();

        const resultado = procesarLotes(lotes);
        mostrarLotes(resultado.lotesProcesados, resultado.total);
    } catch (error) {
        console.error('Error al obtener los lotes:', error);
    }
}

function procesarLotes(lotes) {
    let total = 0;

    const lotesProcesados = lotes.map(lote => {
        lote.medicion = parseInt(lote.medicion, 10);
        total += lote.medicion;
        return {
            ...lote,
            destacado: lote.medicion > 150
        };
    });

    return { lotesProcesados, total };
}

function mostrarLotes(lotesProcesados, total) {
    const cuerpoTabla = document.getElementById("contenido-tabla");
    cuerpoTabla.innerHTML = '';

    lotesProcesados.forEach(lote => {
        const fila = document.createElement("tr");

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

    const filaTotal = document.createElement("tr");
    filaTotal.innerHTML = `
        <td colspan="2"><strong>Total</strong></td>
        <td colspan="2"><strong>${total} unidades</strong></td>
    `;
    cuerpoTabla.appendChild(filaTotal);
}

window.onload = obtenerYProcesarLotes;
