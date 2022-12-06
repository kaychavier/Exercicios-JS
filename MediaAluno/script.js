function ttmedia(nota1, nota2, media){
    media = (nota1 + nota2)/2;
    return media;
  }
  
var nota1, nota2, media;
nota1= parseInt(prompt("Digite a primeira nota: "));
nota2= parseInt(prompt("Digite a segunda nota: "));
  
if (ttmedia(nota1, nota2, media) > 5){
    alert("APROVADO(A) - Média: " + ttmedia(nota1, nota2, media));
}
else{
    alert("REPROVADO(A) - Média: " + ttmedia(nota1, nota2, media));
};