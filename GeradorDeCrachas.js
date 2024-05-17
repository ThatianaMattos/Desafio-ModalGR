function formatarNomeCracha(nomeCompleto) {
    const conectores = ['de', 'da', 'das', 'do', 'dos', 'e'];
    const nomes = nomeCompleto.split(' ').filter(nome => !conectores.includes(nome.toLowerCase()));
    const ultimoNome = nomes.pop().toUpperCase();
    const iniciais = nomes.map(nome => nome.charAt(0).toUpperCase()).join('. ') + '.';
    return `${ultimoNome}, ${iniciais}`;
  }
  
  // Exemplo de uso:
  const nomeCracha = formatarNomeCracha('Antônio Carlos Pereira da Silva dos Santos e Machado');
  console.log(nomeCracha); 
  // Deverá imprimir: MACHADO, A. C. P. S. S.
  