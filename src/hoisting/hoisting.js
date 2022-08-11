/* var nameOfDog; //undefined

console.log(nameOfDog);
var nameOfDog = 'Elmo';
console.log(nameOfDog); */

nameOfDog();

function nameOfDog (){
    console.log(`El mejor perrito es ${elmo}`)
}

var elmo = 'Elmito';

//El hoisting es simplemente la elevación de las variables (declaradas con var) a la parte de arriba de nuestro código, con let y const esto no ocurre.
//También podemos tener hoisting con funciones DECLARATIVAS, no se puede tener hoisting con funciones de expresión.