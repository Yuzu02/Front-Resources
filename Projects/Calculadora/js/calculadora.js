let pantallaPrincipal = '';
let pantallaSecundaria = '';
let operacionActual = null;

function formatearNumero(numero) {
    
    const [entero, decimal] = numero.split('.');
    const enteroFormateado = entero.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return decimal ? `${enteroFormateado}.${decimal}` : enteroFormateado;
}

function agregarAPantalla(valor) {

    const pantalla = document.getElementById('pantallaPrincipal');
    if (pantallaPrincipal.length >= 16) return; 
    if (pantalla.innerText === '0' || pantallaPrincipal === '') {
        pantallaPrincipal = valor;
    } else {
        pantallaPrincipal += valor;
    }
    pantalla.innerText = formatearNumero(pantallaPrincipal);
}

function limpiarPantallas() {

    pantallaPrincipal = '';
    pantallaSecundaria = '';
    operacionActual = null;
    document.getElementById('pantallaPrincipal').innerText = '0';
    document.getElementById('pantallaSecundaria').innerText = '';
}

function establecerOperacion(operacion) {

    if (pantallaPrincipal === '') return;

    if (pantallaSecundaria !== '') {
        calcularResultado();
    }

    pantallaSecundaria = pantallaPrincipal;
    pantallaPrincipal = '';
    operacionActual = operacion;

    document.getElementById('pantallaSecundaria').innerText = formatearNumero(pantallaSecundaria) + ' ' + operacion;
    document.getElementById('pantallaPrincipal').innerText = '0';
}

function calcularResultado() {
    
    if (operacionActual === null || pantallaPrincipal === '' || pantallaSecundaria === '') return;

    let resultado = 0;
    const principal = parseFloat(pantallaPrincipal.replace(/,/g, ''));
    const secundaria = parseFloat(pantallaSecundaria.replace(/,/g, ''));

    switch (operacionActual) {
        case '+':
            resultado = secundaria + principal;
            break;
        case '-':
            resultado = secundaria - principal;
            break;
        case '*':
            resultado = secundaria * principal;
            break;
        case '/':
            if (principal == 0) 
            {
                    resultado = 'No división por cero'
                    break
            }
            resultado = secundaria / principal;
            break;
    }

    pantallaPrincipal = resultado.toString();
    pantallaSecundaria = '';
    operacionActual = null;

    document.getElementById('pantallaPrincipal').innerText = formatearNumero(pantallaPrincipal);
    document.getElementById('pantallaSecundaria').innerText = '';
}
