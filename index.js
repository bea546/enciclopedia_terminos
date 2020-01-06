

var para = document.querySelector(".p-boton");

para.addEventListener('click', updateName);

function updateName() {
  var name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}
import "@fortawesome/fontawesome-free/css/all.css"
