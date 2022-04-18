
let primera = document.getElementsByTagName('h1')[0].innerText;
console.log(primera);

let segunda = document.getElementsByClassName('subtitulo')[0].innerText;
console.log(segunda);

let tercera = document.getElementById('perro').innerText;
console.log(tercera);

//INTECTANDO CODIGO

document.getElementById('demo').innerHTML = 'hola mundo';

document.getElementsByClassName('miclase')[0].innerHTML = 'Clase inyectada';

document.getElementsByTagName("h3")[0].innerHTML = "Hello World!";
document.getElementsByTagName('h3')[1].innerHTML = "Hola Mundo";

//INYECTANDO CSS

document.getElementsByClassName('color1')[0].style.backgroundColor = 'blue'
document.getElementsByClassName('color1')[0].style.color = 'pink';


//BOTON QUE CAMBIA DE COLOR

//la variable index empieza en cero,false o apagado podria decirse
var index = 0;

function boton(){
    let colores = ['pink','aqua']
    //hacemos que index recorra los colores
    document.getElementsByClassName('click')[0].style.backgroundColor = colores[index];
    document.getElementsByClassName('click')[0].style.color = 'red'
//En este if index esta igualado a 0 ose false, con index++ le sumamos 1 osea true
if(index == 0) {
    index++
    //cuando volvemos a presionar pasa a else igualado a 0 osea vuelve a false
}else{
    index = 0;
}
};

var index2 = 0;

function boton2() {
  var colores = ['deeppink', 'green', '#6666ff', 'blueviolet', 'orange', 'red'];
  document.getElementsByClassName('presiona')[0].style.backgroundColor =
    colores[index2];

  index2++;

  if (index2 == colores.length) {
    index2 = 0;
  }
}










