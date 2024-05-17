function separarDados(input) {
    const numeros = input.match(/\b\d+(\.\d+)?\b/g) || [];
    const strings = input.match(/[a-zA-Z\u00C0-\u00FF]+/g) || [];
    
    console.log('Números:', numeros);
    console.log('Strings:', strings);
  }
  
  // Exemplo de uso:
  separarDados('Ana, 89,78, Maria, 45.8, 27, 56, Paula Pereira, 978, A, VIVA, 35, 125, 8999,');
  