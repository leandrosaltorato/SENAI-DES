// Exercicio 1
var nome = "Leandro";
console.log("Olá,"+ nome +"!");

// Exercicio 2
var a = 20;
var b = 10;
console.log("Soma = " + (a+b));
console.log("Subtração = " + (a-b));
console.log("Multiplicação = " + (a*b));
console.log("Divisão = " + (a/b));

//Exercicio 3
var altura = 10;
var largura = 20;
var area = altura * largura;
console.log("A área do retângulo é: " + area);

//Exercicio 4
var idade = 2025 - 2009;
if (idade >= 18) { 
   console.log("Maior de idade");
}else{ 
  console.log("Menor de idade");}

//Exercicio 5
var numero = 10; 
if (numero % 2 === 0) {
   console.log("O número é par");
} else {
    console.log("O número é ímpar");
}

//Exercicio 6
var n1 = 9.0;  
var n2 = 10.0;  
var n3 = 10.0;  
var media = (n1 + n2 + n3) / 3;
if (media >= 9) {
    console.log("A");
} else if (media >= 7) {
    console.log("B");
} else if (media >= 5) {
    console.log("C");
} else {
    console.log("Reprovado");
}

//Exercicio 7
for (let i = 1; i <= 200; i++) {
    if (i % 2 === 0) { 
        console.log(i); 
    }
}

//Exercicio 8
var fatorial = 1;
for (var i = 1; i <= 5; i++) {
    fatorial *= i;
}
console.log("o valor é: " + fatorial);

//Exercicio 9
for (var i = 0; i <= 1000; i += 3) {
    console.log(i);
}