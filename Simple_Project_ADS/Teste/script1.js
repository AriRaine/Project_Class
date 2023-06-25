var login = document.querySelector('.body1')
const rst = document.querySelector("#refresh")

rst.addEventListener('click', () =>{
   location.reload()
})

// Aparecer a tela de login/cadastro

function cadastro(){
   login.style.left = "0"
}

// Registrar no banco de dados

function registrado(){
   alert("Cadastrado com sucesso! Faça seu Login.")
}

// Criando uma tabela no WebSQL - Cadastro

var db=window.openDatabase("Meubanco","2.0","Mybase", 4096);
db.transaction(function(criar){
    criar.executeSql('CREATE TABLE Login (CodID INTEGER PRIMARY KEY, usuário text, senha password)')
});

/* Capturar as informações da tela */
function salvar(){

// Captura dados digitados no elemento "Usuário"
var usuario = document.getElementById('log').value;

// Captura dados digitados no elemento "Senha"
var senha = document.getElementById('sen').value;

db.transaction(function(inserir){
    inserir.executeSql('INSERT INTO Login (usuário, senha) VALUES (?, ?)',[usuario, senha]);
})
}

// Função para efetuar o login do usuário [loginUsuario.html]

function entrar(){
   i = 0;
   event.preventDefault();
   //recebendo o login e a senha
   usuario =document.getElementById("log").value;
   senha =document.getElementById("sen").value;

   //Validação para adms

   let nomeAdm = ["Larissa", "Marlon-"]
   let admLog = ["larissaadm@fatec.com","marlonadm@fatec.com"]
   let admSen = ["12345", "12345"]
    // Verificação se o usuário é um ADM ou não
   if(usuario == admLog[0] && senha == admSen[0])  {
        alert("Olá " + nomeAdm[0] + " Você apagou a tabela com sucesso!")
        apagartabelatudo()
   }else if(usuario == admLog[1] && senha == admSen[1]){
        alert("Olá " + nomeAdm[1] + " Você apagou a tabela com sucesso!")
        apagartabelatudo()
    }else{

   // Validação para saber se existe ou não um usuário com o email e senha digitados
   db.transaction(function(selecionar){
      selecionar.executeSql('SELECT * FROM Login WHERE usuário = ? AND senha = ?', [usuario, senha], function (selecionar, results) {
         len = results.rows.length, i;  
           for (i = 0; i < len; i++) {
               row = results.rows.item(i);
           }

           // Se existir um aviso é exibido

           if(i > 0){
               alert("Usuário encontrado");
               window.location.href = "Produtos.html";
           }else{
               alert("Usuário inexistente");
           }
       }, null);
   });
}
}
/* Texto Piscando */

timer();
function timer(){
   let pisca = document.getElementById("pisca");
   pisca.style.opacity = pisca.style.opacity == 0 ? 1 : 0;
   setTimeout(timer, 500);
}

//Função para deletar a tabela pros adms
function apagartabelatudo(){
    db.transaction(function(excluir){
        excluir.executeSql('DELETE FROM Login')
        location.reload(

        )
    })
}