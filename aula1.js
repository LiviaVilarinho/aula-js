/* para imprimir na tela usa-se console.log*/

/*let e uma variável que pode ser alterada em qualquer momento e o const uma vez declarado nao consegue mais mudar o valor*/
let variavel = 10;
const pi = 3.14

/* Faça um programa para calcular o valor gasto do combustivel em uma viagem.
Você terá 3 variáveis. Sendo elas: 
- Preço do combustivel
- Valor médio de gasto do carro
- Distância em KM da viagem

Imprima no console o valor gasto para realizar esta viagem*/

let preco_combustivel = 4.99;
const gasto_medio = 14;
let distancia = 1500;

const litros_consumidos = distancia/gasto_medio;

const valor_gasto = litros_consumidos * preco_combustivel;
console.log(valor_gasto.toFixed(2));


/* toFixed ele converte o valor em texto e entre parenteses poe a quantidade de digitos apos a virgula (qtde de casas decimais)*/
