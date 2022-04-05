

function presupuesto (salarioValue, porcentaje) {
    const porcentajeMensual = (salarioValue * porcentaje) / 100;

    return porcentajeMensual;
}

function ahorroMensual() {
    const salarioInput = document.getElementById('salarioMensual');
    const salarioValue = salarioInput.value;

    const ahorroInput = document.getElementById('ahorroMensual');
    const ahorroValue = ahorroInput.value;

    const vehiculoInput = document.getElementById('ahorroVehiculo');
    const vehiculoValue = vehiculoInput.value;

    const hogarInput = document.getElementById('ahorroHogar');
    const hogarValue = hogarInput.value;

    const estudiosInput = document.getElementById('ahorroEstudios');
    const estudiosValue = estudiosInput.value;

    const comidaInput = document.getElementById('ahorroComida');
    const comidaValue = comidaInput.value;

    const textoPresupuesto1 = document.getElementById('textoPresupuesto1');
    const textoPresupuesto2 = document.getElementById('textoPresupuesto2');
    const textoPresupuesto3 = document.getElementById('textoPresupuesto3');
    const textoPresupuesto4 = document.getElementById('textoPresupuesto4');
    const textoPresupuesto5 = document.getElementById('textoPresupuesto5');


    const presupuestoAhorro = presupuesto(salarioValue, ahorroValue);
    const presupuestoVehiculo = presupuesto(salarioValue, vehiculoValue);
    const presupuestoHogar = presupuesto(salarioValue, hogarValue);
    const presupuestoEstudios = presupuesto(salarioValue, estudiosValue);
    const presupuestoComida = presupuesto(salarioValue, comidaValue);


    textoPresupuesto1.innerText = "Tu presupuesto de ahorro es de $" + presupuestoAhorro.toLocaleString("es-ES");
    textoPresupuesto2.innerText = "Tu presupuesto de vehiculo es de $" + presupuestoVehiculo.toLocaleString("es-ES");
    textoPresupuesto3.innerText = "Tu presupuesto de hogar es de $" + presupuestoHogar.toLocaleString("es-ES");
    textoPresupuesto4.innerText = "Tu presupuesto de estudios es de $" + presupuestoEstudios.toLocaleString("es-ES");
    textoPresupuesto5.innerText = "Tu presupuesto de comida es de $" + presupuestoComida.toLocaleString("es-ES");

    const presupuestoTotal = [
        presupuestoAhorro,
        presupuestoVehiculo,
        presupuestoHogar,
        presupuestoEstudios,
        presupuestoComida,
    ];

    let total = 0;

    for(let i = 0; i < presupuestoTotal.length; i++) {
        total += presupuestoTotal[i];
    }

    if(total > salarioValue) {
        const alerta = document.getElementById('alerta');

        textoPresupuesto1.remove('textoPresupuesto1');
        textoPresupuesto2.remove('textoPresupuesto2');
        textoPresupuesto3.remove('textoPresupuesto3');
        textoPresupuesto4.remove('textoPresupuesto4');
        textoPresupuesto5.remove('textoPresupuesto5');

        alerta.innerText = '¡Tu presupuesto no alcanza!';
    }

}

