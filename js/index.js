// Abre e fecha o menu quando clicar no icone

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle){

  //addEventListener - Registra uma espera de um evento, em um unico alvo.
    //Element - Alvo.
    //'click' - É o tipo de evento que o addEventListener está esperando. 
    //function - É a função que vai ser executada assim que o evento de click for executado

  element.addEventListener('click', function(){ 
    //Pegando a lista de classe que está dentro do elemento nav, e executar o uma função de toggle.
      //'show' - É a classe que vai ficar sendo adicionada ou retirada do elemente nav
        //Se tiver a classe show, vai ser retirada, se não, ela vai ser adicionada
    nav.classList.toggle('show')
  })
}

// Quando clicar um item do menu, esconder o menu.

const links = document.querySelectorAll('nav ul li a');

for ( const link of links) {
  link.addEventListener('click', function(){
    nav.classList.remove('show');
  })
}

// Deixar Header fixo quando rolar o scroll

const header  = document.getElementById('header');

window.addEventListener('scroll', function () {
    let getScrollposition = window.scrollY;
    if (getScrollposition > 10) {
       header.style.position = 'fixed'
       header.style.background = '#FFF'
       header.style.borderBottom = '1px solid rgb(248,248,248)'

    } else {
      header.style.position = 'relative'
      header.style.background = 'transparent'
      header.style.border = '0'

    }
});


// FORMULÁRIO 
  // MASCARA

function formatar(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i);

  if(texto.substring(0,1) != saida){
    documento.value += texto.substring(0,1)
  }
}

const validForm = function (event) {
    // VERIFICAÇÃO INPUT

  //Capturando o a tag html e colocando dentro de uma variável.
  var inputName = document.querySelector('#name');
  var inputPhone = document.querySelector('#phone');
  var inputEmail = document.querySelector('#email');
  var inputMessage = document.querySelector('#message');

  // Verificar se cada input está vazio.
  if(inputName.value == ""){
    alert("Preencha seu nome");
    inputName.focus();
    return false;
  }

  if(inputPhone.value == ""){
    alert("Preencha seu telefone");
    inputPhone.focus();
    return false;
  }

  if(inputEmail.value == ""){
    alert("Preencha seu e-mail");
    inputEmail.focus();
    return false;
  }

  if(inputMessage.value == ""){
    alert("Digite sua mensagem ou dúvida");
    inputMessage.focus();
    return false;
  }

  alert("Mensagem enviada com sucesso!")
}
