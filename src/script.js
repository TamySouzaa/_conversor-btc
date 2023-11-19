var valorEmReal = 730;
var cotacaoBitcoin = 0.0000057;
var nome = prompt("Por favor, digite seu nome:");

totalEmBitcoin = valorEmReal * cotacaoBitcoin;
totalEmBitcoin = totalEmBitcoin.toFixed(5);
alert(" Olá " + nome + ", o valor convertido é de ₿" + totalEmBitcoin);
