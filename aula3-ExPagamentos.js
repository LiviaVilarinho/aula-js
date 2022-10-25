/* Elabore um algoritmo que calcule o que deve
ser pago por um produto, considerando
o preço normal de etiqueta e a escolha da condição
de pagamento.
Utilize os códigos da tabela a seguir para ler
qual a condição de pagamento escolhido e 
efetuar o cálculo adequado.

Código de condição de pagamento:
- 1-A vista Débito, recebe 10% de desconto
- 2-A vista no Dinheiro ou PIX, recebe 15% de desconto
- 3-Em duas vezes, preço normal de etiqueta sem juros
- 4-Acima de duas vezes, preço normal de etiqueta mais juros de 10%*/

const valorProduto = 10;
let valorDaCompra;

let tipoDeCondicao = 1;

if (tipoDeCondicao === 1) {
    valorDaCompra = valorProduto - (valorProduto * 0.1).toFixed(2);
    console.log('Valor do Produto: R$' + valorProduto);
    console.log(valorDaCompra);
    console.log('Valor da compra: R$' + 'A vista no Débito cliente recebe 10% de desconto');
} else if (tipoDeCondicao === 2) {
    valorDaCompra = valorProduto - (valorProduto * 0.15).toFixed(2);
    console.log('Valor do Produto: R$' + valorProduto);
    console.log('Valor da compra: R$' + valorDaCompra);
    console.log('A vista no Dinheiro ou PIX, cliente recebe 15% de desconto');
} else if (tipoDeCondicao === 3) {
    valorDaCompra = (valorProduto/2).toFixed(2);
    console.log('Valor do Produto: R$' + valorProduto);
    console.log('Valor da Parcela em 2x: R$' + valorDaCompra);
    console.log('Em 2x, cliente paga preço normal de etiqueta sem juros');
} else {
    valorDaCompra = ((valorProduto + (valorProduto * 0.10))/3).toFixed(2);
    console.log('Valor da Parcela: R$' + valorDaCompra);    
    console.log('Valor do Produto: R$' + valorProduto);
    console.log('Acima de 2x, preço normal de etiqueta mais juros de 10%');
}