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
        modalContent.innerHTML = cardspan += card
    });

    let totalPrice = document.querySelector('.precio-total')
    totalPrice.innerText = carrito.reduce(
        (acc, prod) => acc + prod.cantidad * prod.precio,
        0
    );
}

function eliminarDelCarrito(){
    
}








// function actualizarCarrito(){
//     contenedorCarrito.innerHTML = "";
//     carrito.forEach((prod) => {
//       const div = document.createElement("div");
//       div.className = "productoEnCarrito";
//       div.innerHTML = `
//           <p>${prod.nombre}</p>
//           <p>Precio:$${prod.precio}</p>
//           <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
//           <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
//           `;

//       contenedorCarrito.appendChild(div);

//       localStorage.setItem("carrito", JSON.stringify(carrito));
//     });

//     contadorCarrito.innerText = carrito.length;

//     console.log(carrito);
//     precioTotal.innerText = carrito.reduce(
//       (acc, prod) => acc + prod.cantidad * prod.precio,
//       0
//     );
//   };