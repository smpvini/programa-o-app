function sortearNumeros(tipoJogo) {
    let qtdNumeros;
    let maxNumero;
  
    // Configurações de acordo com o tipo de jogo
    switch (tipoJogo.toLowerCase()) {
      case 'quina':
        qtdNumeros = 5;
        maxNumero = 80;
        break;
      case 'mega-sena':
        qtdNumeros = 6;
        maxNumero = 60;
        break;
      case 'lotofácil':
        qtdNumeros = 15;
        maxNumero = 25;
        break;
      case 'lotomania':
        qtdNumeros = 50;
        maxNumero = 100;
        break;
      default:
        console.log('Tipo de jogo não reconhecido.');
        return;
    }
  
    // Função para gerar números aleatórios e sem repetição
    const numerosSorteados = new Set();
    
    while (numerosSorteados.size < qtdNumeros) {
      const numero = Math.floor(Math.random() * maxNumero) + 1;
      numerosSorteados.add(numero); // Garante que não haverá repetição
    }
  
    return Array.from(numerosSorteados);
  }
  
  // Exemplos de uso
  console.log("Quina:", sortearNumeros('quina'));
  console.log("Mega-Sena:", sortearNumeros('mega-sena'));
  console.log("Lotofácil:", sortearNumeros('lotofácil'));
  console.log("Lotomania:", sortearNumeros('lotomania'));
  