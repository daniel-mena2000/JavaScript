//en la funcion auto tenemos las propiedad que espeamos que nuestro bojeto tenga
function auto(marca,modelo,annio){
//this como referencia nuestra funcion constructora y la palabra calve marca y nuestro parametro marca
    this.marca1 = marca;
    this.modelo2 = modelo;
    this.annio3 = annio;
};
//new va a generar una nueva instancia de nuestra funcion contructora
//una instancia es generar un objeto que deriva de otro objeto
//Aqui generamos un nuevo objeto que es 'autoNuevo' con relacion al template que hemos construido de esta funcion constructora
let autoNuevo = new auto('tesla','modelo 3', 2020);

let autoNuevo2 = new auto('chevi','model X',2018);

let autoNuevo3 = new auto('toyota','corola', 2010);



function auto2(marca2,modelo2,annioo){
        this.marca22 = marca2;
        this.modelo2 = modelo2;
        this.annio2 = annioo;
    };

    let autos=[];

for(let index = 0; index < 2; index++){
    let marca2 = prompt('ingresa la marca del auto: ');
    let modelo2 = prompt('ingresa el modelo: ');
    let annioo = prompt('Ingresa el año del auto: ');
    autos.push(new auto2(marca2,modelo2,annioo));
}

for(let index = 0; index < autos.length; index ++){
    console.log(autos[index]);
}