function datos(nombre,apellido,edad){
    this.tunombre = nombre;
    this.tuapellido = apellido;
    this.tuedad = edad;
 };
 
 let tusDatos = [];
 
 for(let index = 0; index < 2; index++){
   
    let nombre = prompt('INGRESA TU NOMBRE: ');
    let apellido = prompt('INGRESA TU APELLIDO :');
    let edad = prompt('INGRESA TU EDAD:');
    if (edad <18) {
       console.log('Eres menor de edad' + nombre);
       break;
    }
 tusDatos.push(new datos(nombre,apellido,edad))
 };
 
 for(let index = 0; index < tusDatos.length; index++){
    console.log(tusDatos[index]);
 }