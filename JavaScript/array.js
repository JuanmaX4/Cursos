var numeros = [0,11,98,33,4,5,6,7,8,9,10,11,12];
var total = 0;

for(var i = 0; i<numeros.length; i+=1) {
    if(i % 2 == 0) 
        console.log(i);

    total += numeros[i];
}

console.log("El total es: " + total);

/*var colores = ["verde", "negro", "azul"];

console.log(colores[0]);

for (var i = 0; i < colores.length; i+=1){
    console.log(colores[i]);
}*/




/* var colores = ["verde", "azul", "rojo"];
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]);
colores.push("negro")
console.log(colores[3]);
console.log(colores);*/
