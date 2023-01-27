const user = []
class Usuario{
    constructor (id, nombre, email, password, roll){
        this.id = id,
        this.nombre = nombre,
        this.email = email,
        this.password = password,
        this.roll = roll
    }
    ingresar(){
        const email = document.getElementById('email'),
              pass = document.getElementById('pass');
        
        
    }
}
fetch('./assets/json/users.json')
    .then(res => res.json())
    .then(data => data.forEach(user => {
        let usuarios = new Usuario(user.id, user.nombre, user.email, user.password, user.roll)
        //console.log(usuarios);
    }))