function enviarMensagem() {
  // let nome = document.getElementById("input_nome").value
  let nome = document.getElementById('input_nome')
  let mensagem = document.getElementById('input_mensagem')

  if (nome.value == '') {
    // document.getElementById("input_nome").classList.add("erro");
    nome.classList.add('erro')
    // document.getElementById("input_nome").placeholder = "O Nome é obrigatório!"
    nome.placeholder = 'O Nome é obrigatório!'
  } else {
    let texto = `Oi me chamo ${nome.value}, ${mensagem.value}`
    let url = `https://api.whatsapp.com/send?phone=&text=${texto}` //inserir numero de contato aqui phone= + numero tel

    window.open(url)
  }
}
