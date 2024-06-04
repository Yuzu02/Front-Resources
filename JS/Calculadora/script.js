// Declarar función greet
function greet() {

// Mostrar alerta con saludo
alert("Hola mundo!");
}

// Función para sumar dos números
function sum(num1, num2) {

// Calcular suma
let result = num1 + num2;

// Mostrar resultado
document.getElementById("result").innerText = result;
}

// Crear elementos HTML
let html = `

<button id="btnGreet">Saludar</button>
<div id="result"></div>
<button id="btnSum">Sumar</button>
`;

// Agregar elementos al DOM
document.body.innerHTML = html;

// Llamar función sum inicialmente con valores
sum(5, 10);

// Agregar evento al botón para llamar función greet
document.getElementById("btnGreet").addEventListener("click", greet);

// Agregar evento al botón para llamar función sum otra vez
document.getElementById("btnSum").addEventListener("click", () => {

sum(10, 5);

});
