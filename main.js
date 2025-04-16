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
    console.log(dadoslista);
    criaLista();    
    document.getElementById('nomeUser').value = "";
  }else{
    alert("favor informar um nome para cadastro");
  }
}


// função para preencher a lista de cadatro

function criaLista(){
    let tabela = "<tr><th>Nome</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadoslista.length - 1); i++){
        tabela += "<tr><td>" + dadoslista[i] + "</td><td><button class='btn btn-warning'>Editar</button><button class='btn btn-danger'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

// função ára excluir nome da lista
function excluir(i){
    dadoslista.splice((i-1), 1);
}