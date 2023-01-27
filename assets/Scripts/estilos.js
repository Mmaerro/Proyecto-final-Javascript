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
    span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
  body.style.overflowY = 'hidden';
}
span.onclick = function () {
  modal.style.display = "none";
  body.style.overflowY = 'auto';
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.overflowY = 'auto';

  }
}