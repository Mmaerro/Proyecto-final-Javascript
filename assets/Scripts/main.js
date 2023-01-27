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
    const card = `
        <figure>
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
    const btnAgregar = document.getElementById(`${this.id}`);
    const encontrarProducto = productos.find(prod => prod.id == this.id)
    btnAgregar.addEventListener('click', () => agregarAlCarrito(encontrarProducto))
  }
  
  productosCategorias() {
    const catA = document.querySelectorAll('#cat a');
    for (let value of catA) { 
      const titleCat = document.querySelector('.cate');
    if (this.categoria == value.textContent){
      value.addEventListener('click', () => {
        titleCat.innerHTML = '<span></span>'+ this.categoria +'<span></span>';
        
      const cards = `
      <figure>
      <img src="${this.image}" alt="">
      <figcaption>${this.nombre}</figcaption>
      <b>${this.categoria}</b>
      <p>$ ${this.precio}</p>
      <input type="submit" value="Agregar al Carrito" id="${this.id}">
      </figure>
      `;

      const container = document.querySelector('.new');
      container.innerHTML += cards;

    });
    }
    }
  }
}
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    data.forEach(prod => {
      let newProd = new Producto(prod.id, prod.title, prod.price, prod.desciption, prod.category, prod.image, prod.rating)
      productos.push(newProd)
    })
    productos.forEach(e => {
      e.todosProductos();
    })
    productos.forEach(e =>{
      e.productosCategorias()
    })
    productos.forEach(e =>{
      e.agregarEvento()
    })
  })
  .catch(err => console.log(err))


function agregarAlCarrito(producto) {
  const enCarrito = carrito.find(prod => prod.id === producto.id)
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