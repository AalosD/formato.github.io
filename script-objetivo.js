let contadorObjetivos = 3;

function agregarObjetivo() {
    contadorObjetivos++;

    // Crear elementos label y input
    const nuevoLabel = document.createElement("label");
    nuevoLabel.setAttribute("for", "obj" + contadorObjetivos);
    nuevoLabel.textContent = "Objetivo " + contadorObjetivos + ":";

    const nuevoInput = document.createElement("input");
    nuevoInput.setAttribute("type", "text");
    nuevoInput.setAttribute("id", "obj" + contadorObjetivos);
    nuevoInput.setAttribute("name", "obj" + contadorObjetivos);

    // Agregar salto de línea
    const saltoLinea = document.createElement("br");

    // Agregar los elementos al contenedor
    const container = document.getElementById("item5");
    container.appendChild(saltoLinea);
    container.appendChild(nuevoLabel);
    container.appendChild(nuevoInput);
    container.appendChild(saltoLinea.cloneNode());
}