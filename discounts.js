// const precio = 120;
// const descuento = 15;

function precioDescuento(precio, descuento) {
    const totalDescuento = (descuento * precio) / 100;
    const totalPrecio = precio - totalDescuento;

    return totalPrecio;
};

function onClickDescuento() {
    const inputPrecio = document.getElementById('precio')
    const precioValue = inputPrecio.value;

    const inputDescuento = document.getElementById('descuento')
    const descuentoValue = inputDescuento.value;

    const precioConDescuento = precioDescuento(precioValue, descuentoValue);

    const resultP = document.getElementById('resultP');
    resultP.innerText = "Tu precio con descuento es de $" + precioConDescuento;

};


