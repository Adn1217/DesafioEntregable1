let acumulado = 0;
let numero = 0;
let cont = 0;
let respuesta = false;
alert("Sumatoria de números ingresados por el usuario");

for (let i=1; i<=2; i++){
    acumulado += ingreseNum(i);
    cont = i;
}

do {
    respuesta = confirm('¿Desea continuar ingresando números?');
    debugger
    if (respuesta){
        cont += 1;        
        acumulado += ingreseNum(cont);
        console.log(acumulado);
    }
}while (respuesta);
alert("Sumatoria igual a " + acumulado);


function ingreseNum (i) {
        numero = parseFloat(prompt('Ingrese número '+ i, 10 ));
        return numero;
}