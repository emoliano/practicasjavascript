
const btnCalcularp2 = document.getElementById('btnCalcularp2');
const btnLimpiarp2 = document.getElementById('btnLimpiarp2');


btnCalcularp2.addEventListener('click', function() {
  
    const opcion = document.getElementById('idOpcion').value;
    const idNumero1 = document.getElementById('idNumero1').value;
    const idNumero2 = document.getElementById('idNumero2').value;
    const txtResultado = document.getElementById('idResultado');

    const num1 = parseFloat(idNumero1);
    const num2 = parseFloat(idNumero2);

    let resultado = 0;

    switch(opcion) {
        case "1":resultado = num1 + num2;
            break;
        case "2": resultado = num1 - num2;
            break;
        case "3": resultado = num1 * num2;
            break;
        case "4":resultado = num1 / num2;
            break;
        default:
            txtResultado.textContent = "Operación no válida";
    }

    
    txtResultado.textContent = "El resultado es: " + resultado;
});


btnLimpiarp2.addEventListener('click', function() {
    
    document.getElementById('idNumero1').value = "";
    document.getElementById('idNumero2').value = "";
    document.getElementById('idResultado').textContent = "";
});

