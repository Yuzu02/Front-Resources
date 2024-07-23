const botonAgregar = document.getElementById('btnAgregar')

let id = 1;

botonAgregar.addEventListener('click', function () {
    
    const textoEntrada = document.getElementById('cajaTXT');

    if (textoEntrada.value !== '')
    {
        const contenedorLista = document.querySelector('ul');
        contenedorLista.appendChild(generarElementoLista(textoEntrada.value))
        textoEntrada.value = '';
    }
    else {
        alert("Error!!. Asegurate de escribir una tarea")
    }
    
})

function generarElementoLista(value) {

    // creando nuevo elemento <li> y añadiendo la clase 'elementoLista'.
    const listaElement = document.createElement('li');
    listaElement.classList.add('elementoLista');

    // agregando los elementos creados a el elemento lista <li>.
    listaElement.appendChild(generarElementoCheck(id));
    listaElement.appendChild(generarElementLabel(value, id));
    listaElement.appendChild(generarBtnEliminar());

    id++

    return listaElement
}

function generarElementLabel(value, id) {
    // creando elemento de <label> de la lista
    //agregando las clases necesarias para los estilos.
    const elementLabelText = document.createElement('label');
    elementLabelText.classList.add('elementoListaTexto');
    elementLabelText.setAttribute('for', id);
    elementLabelText.innerText = value;

    return elementLabelText;
}

function generarElementoCheck(id) {
    // creando elemento de <input> de la lista
    //agregando las clases necesarias para los estilos.
    const elementBtnCheck = document.createElement('input');
    elementBtnCheck.classList.add('marcarBoton')
    elementBtnCheck.setAttribute('type', 'checkbox')
    elementBtnCheck.setAttribute('id', id)

    elementBtnCheck.addEventListener("click", function () {
        if (elementBtnCheck.checked) 
            elementBtnCheck.parentNode.classList.add('textoMarcado');
        else elementBtnCheck.parentNode.classList.remove('textoMarcado')
    })

    return elementBtnCheck;
}

function generarBtnEliminar() {
    const element = document.createElement('button');
    element.textContent = 'x';
    element.classList.add('eliminarBoton')

    element.addEventListener('click', function () { 

        let respues = confirm("Deseas Eliminar esta tarea?");

        if (respues) {
            let nodoAbuelo = element.parentNode.parentNode;
            nodoAbuelo.removeChild(element.parentNode)
        }

        
    })

    return element;
}
