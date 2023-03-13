function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado
    if (operandoA.value !== '' && operandoB.value !== ''){
    resultado = Number(operandoA.value) + Number(operandoB.value);
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    }
    else
    document.getElementById('resultado').innerHTML = 'Uno de los campos esta vacio'
}