var linha, coluna, i=0;
var ttnumero = 0, numero, ttespaco;

linha= parseInt(prompt("Digite o número de linhas da matriz: "));
coluna = parseInt(prompt("Digite o número de colunas da matriz: "));

ttespaco = linha * coluna;

function matriz(i, numero, ttnumero, ttespaco){
  for(var i=1; i <= ttespaco; i++){
    numero = parseInt(prompt("Digite um número: "));
    ttnumero = ttnumero + numero; 
  }
  return ttnumero;
}
   
alert("A soma de todos os números é: " + matriz(i, numero, ttnumero, ttespaco));