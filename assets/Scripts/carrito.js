
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
  