let nav = document.querySelector("nav"),
    navLink = document.querySelectorAll('nav a');

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav.style.background = "#fff";
    nav.style.height = "60px";
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].style.color = '#000';
    }
    
    countCart.style.color = "#fff"
    countCart.style.backgroundColor = "#000"
  } else {
    nav.style.background = "linear-gradient(#000000, rgb(0, 0, 0, 0))";
    nav.style.height = "50px";
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].style.color = '#fff';
    }
    countCart.style.color = " #000"
    countCart.style.backgroundColor = "#fff"
  }
}
window.onscroll = function () {
  scrollFunction();
}

//  modal
let modal = document.getElementById("myModal"),
    btn = document.getElementById("myBtn"),
    modalContent = document.querySelector(".modal-content"),
    contentCard = document.querySelector(".content-card"),
    caritss = document.querySelector("#carrito"),
    body = document.querySelector('body');
btn.onclick = function () {
  let card = `
  <form action="#" method="post">
      <label for="email">Email</label>
      <input id="email" type="email" name="email" />
      <label for="password">Contraseña</label>
      <input id="pass" type="password" name="password" autocomplete="current-password" />
      <input id="submit" type="submit" value="Enviar" />
  </form>
  `
  contentCard.innerHTML = card;
  modal.style.display = "block";
  body.style.overflowY = 'hidden';

  spanClose();
}

 
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.overflowY = 'auto';
    contentCard.innerHTML = " ";

  }
}
caritss.addEventListener('click', ()=>{
  verEnCarrito();
  spanClose();

})

function spanClose(){
  let span = document.querySelector(".close")
  span.onclick = function () {
    modal.style.display = "none";
    body.style.overflowY = 'auto';
    modalContent.innerHTML = " ";
  }
}
// document.getElementById('carrito').addEventListener('click', ()=> {
//   Swal.fire({
//     title: 'Error!',
//    html: 'You can use <b>bold text</b>, ' +
//    '<a href="//sweetalert2.github.io">links</a> ' +
//    'and other HTML tags',
//     icon: 'error',
//     confirmButtonText: 'Cool'
//   })
// })



