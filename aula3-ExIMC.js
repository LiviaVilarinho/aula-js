/*O IMC é um critério da Organização Mundial da Saúde
para dar uma indicação sobre a condição
de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algorítmo que dado o peso
e a altura de um adulto, mostre a sua condição
de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso
- Entre 18.5 e 25 Peso normal
- Entre 25 e 30 Acima do peso
- Entre 30 e 40 Obeso
- Acima de 40 Obesidade grave*/

const peso = 60
const altura = 1.58;

const imc = peso / Math.pow(altura, 2).toFixed(2); /*uso de numero ao quadrado, cubo e etc*/

if (imc < 18.5) {
    console.log('Peso - ' + peso + ' IMC - ' + imc +  ' - Adulto abaixo do Peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso - ' + peso + ' IMC - ' + imc +  ' - Adulto com peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Peso - ' + peso + ' IMC - ' + imc +  ' - Adulto acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Peso - ' + peso + ' IMC - ' + imc +  ' - Adulto obeso');
} else {
    console.log('Peso - ' + peso + ' IMC - ' + imc +  ' - Adulto com obesidade grave');
}