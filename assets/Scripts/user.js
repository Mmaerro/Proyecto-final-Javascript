const users = [],
    bienvenido = document.querySelector('#userName'),
    b = document.querySelector('#userName > b'),
    btn = document.getElementById("myBtn"),
    salir = document.querySelector('#salir');
class Usuario {
    constructor(id, nombre, email, password, roll) {
        this.id = id,
            this.nombre = nombre,
            this.email = email,
            this.password = password,
            this.roll = roll
    }
    ingresar() {
        const usuarioEmail = users.find(user => user.id === this.id);
        modalLogin(usuarioEmail)
    }
}
fetch('./assets/json/users.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(user => {
            let usuarios = new Usuario(user.id, user.nombre, user.email, user.password, user.roll)
            users.push(usuarios);
        })
        users.forEach(e => {
            e.ingresar();
        })
    })
    .catch(err => console.log(err));



function modalLogin(param) {
    btn.onclick = function () {
        let cardspan = `
            <span class="close">&times;</span>
            <h4>INGRESAR</h4>
            `
        let card = `
            <form action="">
            <label for="email">Email</label>
            <input id="email" type="email" name="email" />
            <label for="password">Contraseña</label>
            <input id="password" type="password" name="password" autocomplete="current-password" />
            <input id="submit" type="submit" value="Enviar" />
            </form>
            `
        contentCard.innerHTML = cardspan += card;
        modal.style.display = "block";
        body.style.overflowY = 'hidden';

        spanClose();

        let button = document.getElementById('submit');
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const email = document.getElementById('email'),
                pass = document.getElementById('password'),
                userFilter = users.find(prod => prod.email === email.value);
            console.log(userFilter);
            ingresar(userFilter, email.value, pass.value)

        })
    }

    function ingresar(param, email, pass) {
        if (param.email === email && param.password === pass) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'A ingresado satisfactoriamente!',
                showConfirmButton: false,
                timer: 1500
            })
            sessionStorage.setItem('user', JSON.stringify(param))
            bienvenido.style.display = 'block';
            b.innerHTML = param.nombre
            btn.style.display = 'none'
            salir.style.display = 'block';
            cerrar();
        } else {
            console.log('none');

        }
    }
}
let userEnSession = JSON.parse(sessionStorage.getItem('user'));
if (userEnSession) {
    bienvenido.style.display = 'block';
    b.innerHTML = userEnSession.nombre
    
    btn.style.display = 'none'
}
salir.addEventListener('click', () =>{
    sessionStorage.removeItem('user')
})
