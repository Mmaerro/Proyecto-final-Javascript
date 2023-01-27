const categorias = [],
    prodCat = [];
class Categoria {
    constructor(categoria) {
        this.categoria = categoria;
    }
    mostrarCategorias() {
        const card = `<a>${this.categoria}</a>`;

        const container = document.getElementById('cat');
        container.innerHTML += card;
    }
}
fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(data => {
        data.forEach(cat => {
            let newCat = new Categoria(cat)
            categorias.push(newCat)
        })
        categorias.forEach(e => {
            e.mostrarCategorias();
        })
    })
    .catch(err => console.log(err))