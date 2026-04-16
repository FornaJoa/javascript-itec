const nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));
const contrasena = prompt("Ingrese su contraseña:");

if(nombre === ""){
    console.log("Error: Nombre no puede estar vacio");
} else  if (edad < 18) {
    console.log("Acceso Denegado: Tiene que tener 18 años o mas");
} else if (contrasena.length < 6) {
    console.log("Contraseña invalida: Tiene que tener 6 o mas caracteres");
} else {
    console.log("Bienvenido " + nombre);
    console.log("Datos ingresados");
    console.log("Nombre: " + nombre + " | Edad: " + edad + " | Contraseña: " + contrasena);


    edad = edad + 10;
    console.log("En 10 años tendras: " + edad + " años" );

    console.log("Nombre: " + nombre + " | Edad: " + edad + " | Contraseña: " + contrasena);
}