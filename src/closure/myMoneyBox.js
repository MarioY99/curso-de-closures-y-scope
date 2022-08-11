//Aplicación de closure con ejemplo de una alcancía
//Estamos utilizando un closure en el momento en el que una funcion accede a la variable que está fuera de ella, el el ambito de la función exterior (o en el ambiente de su función padre).
function moneyBox(){
    let dineroActual = 0; //Esta es mi variable a la que va a acceder la función interna

    function total(dinero){ //Función interna, y es donde generamos nuestro closure
        dineroActual += dinero; //Acá, para que la función, guarde el valor, vamos a REINICIALIZAR la variable, haciendo uso de += ya que así el valor de la variable ahora va a ser el valor principal de la variable creada en el ambiente de la función padre, y le agregará, lo que pase como parámetro, a mi función hijo.
        console.log(`Tienes: $${dineroActual}`); //Acá solo decimos la acción que realizará la función.
    };
    return total; //Y este return, será, lo que va a devolver mi función moneyBox al momento de llamarla, y como mi return es una función, se la mando sin paréntesis, para que cuando llame, a la función padre moneyBox(5) al devolverme la función total(en este caso la función hijo), su hijo, recibirá como argumento el mismo con el que se llamó a moneyBox.
    //Es decir. cuando le ponemos el return a una función, esta va a ser una herramienta, de mi función principal y al ejecutarla, va a ejecutar también la función interna que estoy llamando con el Return
    //Y las funciones a las que no les apliquemos return, solamente estarán disponibles para su misma función padre.
}

const miDinero = moneyBox(); //Para hacer uso del closure, generamos una variable, cuyo valor va a ser la función en donde se haya creado el closure porque cuando se ejecuta la función, lo que está retornando es otra función y esta es la que recibirá el argumento enviado y se guarda en una variable para poder instanciarla las veces que sean necesarias y así guarde su valor en memoria. Si lo hacemos, llamando, moneyBox(5) y luego lo repetimos, no guardaría el valor que se ejecutó la primera vez que fue llamada. y así, mantiene su historial. De esta forma, se guarda en memoria y no tiene que iniciar siempre su valor en 0
miDinero(20);
miDinero(-2);