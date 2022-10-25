/*estruturas condicionais*/

/* % usa-se pra pegar o resto da divisão */

/* == e === usa-se para igualdade. De preferência usar os === */

/* ! sinal de negação */

/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:

1 - Preço do etanol
2- Preço da gasolina
3 - O tipo de combustivel que está no seu carro
4- Gasto médio de combustível do carro por KM
5 - Distância em KM da viagem

Imprima no console o valor que será gasto
para realizar esta viagem.*/

const precoEtanol = 5.99;
const precoGasolina = 4.99;
let tipoDeCombustivelCarro = 'Gasolina';
const gastoMedioLtPorKm = 14;
const distancia = 100;

const litrosConsumidos = distancia/gastoMedioLtPorKm;

if (tipoDeCombustivelCarro === 'Etanol') {   
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}