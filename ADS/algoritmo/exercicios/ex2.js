let rs = require ("readline-sync");

let anoDeNascimento = rs.questionInt("Digite o ano em que você nasceu: ");
let anoAtual = 2022;
let idade = anoAtual - anoDeNascimento;

if(idade >= 18 && idade <= 70){
  console.log("Você deve votar esse ano.");
}else if(idade >= 16 && idade < 18 || idade > 70){
  console.log("Seu voto é opcional!");
}else{
  console.log("Você não poderá votar esse ano.");
};