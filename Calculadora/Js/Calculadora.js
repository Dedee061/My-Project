function calcular(tipo, valor) {
  
  if(tipo === 'acao') {

    if(valor === 'C') {
      document.getElementById('resultado').value = ''
    }

    if (valor === '+' || valor === '-' || valor === '*' || valor ===  '/' || valor === '.') {
      
        document.getElementById('resultado').value += valor

    }

    if (valor === '=') {
     const valor_campo =  eval(document.getElementById('resultado').value)
     
     document.getElementById('resultado').value = valor_campo

    }

  } else if (tipo === 'valor') {

    const valor_campo = document.getElementById('resultado').value
    document.getElementById('resultado').value +=  valor
  }

}