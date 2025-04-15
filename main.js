// implementa acesso para tela de login
function acessar(){
    let loginemail = document.getElementById('loginemail').value
    let loginsenha = document.getElementById('loginsenha').value

    if(!loginemail || !loginsenha){
        alert("Favor preencher todo os campos");
    }else{
        window.location.href = "cadastro.html";
    }


}
// criando um array sem numero definido
var dadoslista = [];

function salvarUser(){
  let nomeUser = document.getElementById('nomeUser').value;  

  if(nomeUser){
    dadoslista.push(nomeUser);
  }
}