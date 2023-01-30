const productos = [];
let carrito = JSON.parse(localStorage.getItem('carrito')) || [],
  countCart = document.querySelector('#cart-count');

class Producto {
  constructor(id, nombre, precio, desc, categoria, image, rating) {
    this.id = id,
      this.nombre = nombre,
      this.precio = precio,
      this.desc = desc,
      this.categoria = categoria,
      this.image = image,
      this.rating = rating

  }
  todosProductos() {
    let cortado = this.categoria.split("'"),
        primerPlabra = cortado[0];
    const card = `
        <figure id="${primerPlabra}">
          <img src="${this.image}" alt="">
          <figcaption>${this.nombre}</figcaption>
          <b>${this.categoria}</b>
          <p>$ ${this.precio}</p>
          <input type="submit" value="Agregar al Carrito" id="${this.id}">
          </figure>
        `;
       
    const container = document.querySelector('.todos');
    container.innerHTML += card;  
  
  }

  agregarEvento() {
    const btnAgregar = document.getElementById(`${this.id}`),
          encontrarProducto = productos.find(prod => prod.id == this.id)
          
    btnAgregar.addEventListener('click', () => agregarAlCarrito(encontrarProducto))
  }
  
  eliminarProdCarrito(){
    const eliminarBtn = document.getElementById(`${this.id}`),
    encontrarProducto = carrito.find(prod => prod.id == this.id)
    
    eliminarBtn.addEventListener('click', () => eliminarDelCarrito(encontrarProducto))
  }
}
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    data.forEach(prod => {
      let newProd = new Producto(prod.id, prod.title, prod.price, prod.description, prod.category, prod.image, prod.rating)
      productos.push(newProd)
    })
    productos.forEach(e => {
     e.todosProductos();
    })
    productos.forEach(e => {
      e.agregarEvento()
    })  
  })
  .catch(err => console.log(err))

  function agregarAlCarrito(producto) {
    const enCarrito = carrito.find(prod => prod.id === producto.id);
    if (!enCarrito) {
        carrito.push({
            ...producto,
            cantidad: 1
        })
        localStorage.setItem('carrito', JSON.stringify(carrito))
    } else {
        let carritoFiltrado = carrito.filter(prod => prod.id != enCarrito.id)
        carrito = [
            ...carritoFiltrado,
            {
                ...enCarrito,
                cantidad: enCarrito.cantidad + 1
            }

        ]
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }
    countCart.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
}
countCart.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)

function verEnCarrito() {
  if(carrito.length !== 0){
    let cardspan = `
        <span class="close">&times;</span>
        <h4>TUS PRODUCTOS</h4>
        <p class="precio-total">Precio total:<b></b></p>
    `
    carrito.forEach((prod) => {
        modal.style.display = 'block';
        body.style.overflowY = 'hidden';
        let card = `
        <table class="table-cart">
            <tr>
                <td></td>
                <td>Producto:</td>
                <td>Precio: </td>
                <td>Cantidad:</td>
            </tr>
            <tr class="cont-cart">
                <td><img src="${prod.image}"></td>
                <td>${prod.nombre}</td>
                <td>$${prod.precio}</td>
                <td class="cantidad">${prod.cantidad} </td>
            </tr>
        </table>

        `
        contentCard.innerHTML = cardspan += card
    });

    let totalPrice = document.querySelector('.precio-total')
  
      console.log(carrito);
      totalPrice.innerText = 'Precio total: $' + carrito.reduce(
        (acc, prod) => acc + prod.cantidad * prod.precio,
        0
    );
    }
    
}