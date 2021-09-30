// Quarta-feira,29/09/2021{à tarde} das 14:00:00 até as 15:11:00 h +|-
// Obs.: Rafa explica como será o jogo...
var carta1 = {
    nome: "Ikki de Fênix",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_858750-MLB31003347583_062019-O.jpg",
    atributos: {
      ataque: 9,
      defesa: 8,
      forca: 10
    }
  };
  var carta2 = {
    nome: "Harpy Valentine ",
    imagem:
      "https://i.pinimg.com/236x/e8/56/85/e85685cfbaf6901bd9829bfd618d6273--cloths-hades.jpg",
    atributos: {
      ataque: 7,
      defesa: 9,
      forca: 6
    }
  };
  var carta3 = {
    nome: "Shaka de Virgem",
    imagem:
      "https://i.pinimg.com/474x/7a/14/a4/7a14a482ec58c785d549a4b366964520--super-comics-gold.jpg",
    atributos: {
      ataque: 8,
      defesa: 9,
      forca: 10
    }
  };
  // console.log(carta1.atributos.ataque);
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    // exibirOpcoes();
    exibirCartaJogador();
  }
  // Quinta-feira,30/09/2021{amanhã} das 08:00:00 até as 09:55:00 h+|-
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes"); /*coloquei  {documment}*/
    var opcoesTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      // console.log(atributo);
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        " '>" +
        atributo;
    }
    opcoes.innerHTML = opcoesTexto;
  }
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    // console.log(atributoSelecionado);
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "Você venceu";
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML = "Você perdeu , a carta da Máquina é maior..";
    } else {
      elementoResultado.innerHTML = "Empatou";
    }
    console.log(valorCartaMaquina);
    // console.log(cartaJogador.atributos[atributoSelecionado]);
  }
  // Quinta-feira,30/09/2021 = Super Trunfo- Dia 8_revisão {pela manhã} das 10:17:00 até as 11:41:00 h +| - à noite após o intervalo da Aula de Inglês finalizo,preciso sair agora pela tarde...
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.background = `url(${cartaJogador.imagem})`; // jeito novo de codificar uma string;
    /* divCartaJogador.style.background ="url(${" + cartaJogador.imagem + "}" => jeito antigo de codificar uma string;*/
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status' >";
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      // console.log(atributo);
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        " '>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle"> ${cartaJogador.nome} </p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  