//closure
function saludo(){
    let nombre = 'Mario';
    
    function saluda(){
        return `Hola ${nombre}`;
    }
    return saluda;
};
const a = saludo();
console.log(a);
console.log(a());