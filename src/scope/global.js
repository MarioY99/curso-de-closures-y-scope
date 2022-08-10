//variables
var a; //declarando
var b = 'b'; // declarando/asignando (inicializando)
b = 'bb'; // reasignación (o Reinicialización)
var a = 'aa'; // redeclaración (o inicialización)

//Global Scope
var fruit = 'Apple'; //Esta variable tiene un alcance global por lo que se puede acceder a ella desde cualquier parte del código

function bestFruit() {
    console.log(fruit); //accedemos a nuestra variable que tiene scope global
};
bestFruit();

//Pero también se pueden crear variables con scope global por accidente, al momento de inicializarlas dentro de una función, sin haberlas declarado antes.
//Debes tener cuidado al momento de hacer esto
function showCountries(){
    let country = 'venezuela'; //Inicializamos una variable que nunca declaramos, por lo que javascript la toma como scope global y podemos acceder a ella desde cualquier parte del código también.
    console.log(country);
};
showCountries()