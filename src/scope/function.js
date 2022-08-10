//function scope
//También conocido como local scope, es el alcance que va a tener una variable pero solamente dentro del bloque de código que fue declarada
//Por ejemplo en esta función declaramos una variable userName la cual puede ser usada dentro de la función, y en cualquier bloque de código DENTRO DE LA FUNCIÓN, pero si queremos acceder a ella fuera de la función no vamos a poder ya que su alcance es meramente local (es decir en la función.)
function greeting(){
    let userName = 'Mario';
    console.log(userName);
    if(userName === 'Mario'){
        console.log(`Hello ${userName}`)
    }
}
greeting();
console.log(userName);