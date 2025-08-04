// var - escopo global
// let - escopo local
// const - escopo global e o valor não altera

var nome = "Fulano"; // string
var idade = 50.5;
var habilitado = true;
const nascimento = 1875;

console.log(habilitado);// imprime no terminal

console.log(typeof(habilitado));// typeof retorna o tipo da variavel

/*
    soma +
    subtração -
    divisao /
    multiplicação *
    modulo %
    estritamente igual ===
    estritamente diferentes !==
*/



var a = "10";
var b = 10;

console.log(a+b);

if(a !== b) {
    console.log("Sao iguais");
}else {
    console.log("São diferentes")
}


switch (b) {
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}

for(let i = 0; i< 10; i++) {
    console.log(i);
}

while(a < 10){
    if(a == 5) {
        break;
    }
}

do {

}while(a == 5);