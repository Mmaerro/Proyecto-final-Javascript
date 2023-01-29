function verEnCarrito() {
    let cardspan = `
        <span class="close">&times;</span>
        <h4>TUS PRODUCTOS</h4>
        <p class="precio-total">Precio total:<b></b></p>
    `
    carrito.forEach((prod) => {
        modal.style.display = 'block';
        body.style.overflowY = 'hidden';
        let card = `
            <ul class="ul-carrito">
            <li>${prod.nombre}</li>
            <li>${prod.desc}</li>
            <li>${prod.precio}</li>
            <li>${prod.cantidad}</li>
            </ul>
            <button id="${prod.id}" value>Borrar Producto</button>
        `
        contentCard.innerHTML = cardspan += card
    });
      
    let totalPrice = document.querySelector('.precio-total')
    totalPrice.innerText = carrito.reduce(
        (acc, prod) => acc + prod.cantidad * prod.precio,
        0
    );
}

function eliminarDelCarrito(){
    
}