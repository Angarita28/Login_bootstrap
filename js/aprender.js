//########## Formas de Escribir js ##########
console.log("Hola Chus")
//alert ("Hola Profe")
//document.body.innerHTML="<h1>Hola Querido profesor</h1>"
//document.body.innerText="<h1>Hola Querido profesor</h1>"


//########## Variables en js => let, var, const

const edad = 18;
let edad_dos = 18;
var nombre= "Jesus David"
edad_dos = edad_dos + 2;

console.log(edad_dos)


//########## Tipos de datos => entero, decimal, string, booleans, arrays
var entero = 20;
var decimal = 20.5;
var string = "MI nombre es Jesus ";
var boolean = true //false;
var array_string = ["Lun", "Mar", "Mir","Jue","Vier","Sab", "Dom" ]



//######### Tipos de variable pascalcase, Camelcase, snakeCase


//############### Operadores arimeticos

var suma = entero + decimal;
var resta = decimal-entero;
var multi = decimal*entero;
var divi = decimal / entero;
var modulo = decimal % 2;


// ###### Operadores decomparacion 

// ###### Estructruras logicas 
var impresion = ""; 
for(let i = 0 ; i < array_string.length; i++){

    console.log(array_string[i])
    impresion = impresion + array_string[i]

}
Swal.fire("Hola chus");
  
