let rs = require ("readline-sync");

let base = rs.questionInt ("Digite a base do triângulo: ");
let altura = rs.questionInt("Digite a altura do triângulo: ");
let area = (base * altura)/2;

console.log(area);