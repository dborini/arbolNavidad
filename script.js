document.addEventListener("DOMContentLoaded", function () {
    const arbolDiv = document.getElementById("arbol");

    const rows = [13, 3]; // 10 filas para el follaje, 4 filas para el tronco
    rows.forEach((row, index) => {
        if (index === 0) {
            // Generar el follaje del árbol
            for (let i = 0; i < row; i++) {
                const fila = document.createElement("div");
                fila.className = "fila";
                fila.innerHTML = '<span class="color">*</span>'.repeat(1 + i * 2);
                arbolDiv.appendChild(fila);
            }
        } else {
            // Generar el tronco (3 * de ancho y 3 de largo)
            for (let i = 0; i < row; i++) {
                const fila = document.createElement("div");
                fila.className = "fila";
                fila.innerHTML = '<span class="color">*</span>'.repeat(3); // Ancho de 3 *
                arbolDiv.appendChild(fila);
            }
        }
    });

    // Ajustar animación dinámica
    const animacion = document.querySelectorAll(".color");
    animacion.forEach((hoja, i) => {
        const time = i / 20 + 0.5;
        hoja.style.animationDuration = `${time}s`;
    });
});
