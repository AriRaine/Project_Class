/*
REGISTRO DOS PRODUTOS 
*/
class calculadoras {
    constructor(nome,valor,estoque){
       this.nome = nome
       this.valor = valor
       this.estoque = estoque
    }
 }
 
    const neymar = new calculadoras("neymar calc", 200.00, "10")
    const bts = new calculadoras("bts calculator", 52972.95, "7")
    const gamer = new calculadoras("calculadoragamer", 40.72, "100")
 
 /*FIM DO RESGISTRO DOS PRODUTOS*/


var loginarea=window.openDatabase("Meubanco","2.0","Mybase", 4096);
loginarea.transaction(function(criar){
    criar.executeSql('CREATE TABLE IF NOT EXISTS carrinho (nomProd text, valorProd REAL, quantProd REAL)')
});

function adccarrinhoNEY(){

    var neyNom = neymar.nome
    var neyVal = neymar.valor
    var neyQnt = 0

    if(neyQnt == 0 ){
        neyQnt = 1
        loginarea.transaction(function(inserir){
        inserir.executeSql('INSERT INTO carrinho (nomProd, valorProd, quantProd) VALUES (?, ?, ?)',[neyNom, neyVal, neyQnt]);
        })
        
    }
}

// Função para checar no BD se há o usuário

function entrar(){
    i = 0;
    event.preventDefault();
    // Pegando dados
    usuario =document.getElementById("log").value;
    senha =document.getElementById("sen").value;
 
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

 /* Função para aparecer os produtos no carrinho*/
// Aparecer do neymar
function aparecer1(){
    var prod1 = document.querySelector('#prod1')
    prod1.style.display= 'flex'

    //aparecer
    qntNeymar = Number(document.getElementById('qntNeymar').innerHTML)
    valorFixoNeymar = Number(document.getElementById('valorFixoNeymar').innerHTML).toFixed(2)
    valorNeymarTotal = valorFixoNeymar * qntNeymar
    document.getElementById('valorNeymarTotal').innerHTML = valorNeymarTotal.toFixed(2)
    //soma
    totalNeymar = Number(document.getElementById('valorNeymarTotal').innerHTML)
    totalBts = Number(document.getElementById('valorBTSTotal').innerHTML)
    totalGamer = Number(document.getElementById('valorGamerTotal').innerHTML)
    totaltotal = Number(totalNeymar + totalBts + totalGamer)
    document.getElementById('subtotal').innerHTML = totaltotal.toFixed(2)
    document.getElementById('valordacompra').innerHTML = totaltotal.toFixed(2)
}
// Aparecer do BTS
function aparecer2(){
    var prod2 = document.querySelector('#prod2')
    prod2.style.display= 'flex'

    //aparecer
    qntBTS = Number(document.getElementById('qntBTS').innerHTML)
    valorFixoBTS = Number(document.getElementById('valorFixoBTS').innerHTML).toFixed(2)
    valorBTSTotal = valorFixoBTS * qntBTS
    document.getElementById('valorBTSTotal').innerHTML = valorBTSTotal.toFixed(2)
    //soma
    totalNeymar = Number(document.getElementById('valorNeymarTotal').innerHTML)
    totalBts = Number(document.getElementById('valorBTSTotal').innerHTML)
    totalGamer = Number(document.getElementById('valorGamerTotal').innerHTML)
    totaltotal = Number(totalNeymar + totalBts + totalGamer)
    document.getElementById('subtotal').innerHTML = totaltotal.toFixed(2)
    document.getElementById('valordacompra').innerHTML = totaltotal.toFixed(2)
}
// Aparecer Gamer
function aparecer3(){
    var prod3 = document.querySelector('#prod3')
    prod3.style.display= 'flex'

    //aparecer
    qntGamer = Number(document.getElementById('qntGamer').innerHTML)
    valorFixoGamer = Number(document.getElementById('valorFixoGamer').innerHTML).toFixed(2)
    valorGamerTotal = valorFixoGamer * qntGamer
    document.getElementById('valorGamerTotal').innerHTML = valorGamerTotal.toFixed(2)
    //soma
    totalNeymar = Number(document.getElementById('valorNeymarTotal').innerHTML)
    totalBts = Number(document.getElementById('valorBTSTotal').innerHTML)
    totalGamer = Number(document.getElementById('valorGamerTotal').innerHTML)
    totaltotal = Number(totalNeymar + totalBts + totalGamer)
    document.getElementById('subtotal').innerHTML = totaltotal.toFixed(2)
    document.getElementById('valordacompra').innerHTML = totaltotal.toFixed(2)
}
  /* Função para sumir os produtos no carrinho*/
  // Sumir do neymar
function sumir1(){
    var prod1 = document.querySelector('#prod1')
    prod1.style.display= 'none'
    qntNeymar = Number(document.getElementById('qntNeymar').innerHTML)
    subtotal = Number(document.getElementById('subtotal').innerHTML)
    subtotal = Number(subtotal - (qntNeymar * 200.00)).toFixed(2)
    document.getElementById('valordacompra').innerHTML = subtotal
    document.getElementById('subtotal').innerHTML = subtotal
    document.getElementById('qntNeymar').innerHTML = 1;
    document.getElementById('valorNeymarTotal').innerHTML = 0
}
 // Sumir do BTS
function sumir2(){
    var prod2 = document.querySelector('#prod2')
    prod2.style.display= 'none'

    qntBTS = Number(document.getElementById('qntBTS').innerHTML)
    subtotal = Number(document.getElementById('subtotal').innerHTML)
    subtotal = Number(subtotal - (qntBTS * 52972.95)).toFixed(2)
    document.getElementById('valordacompra').innerHTML = subtotal
    document.getElementById('subtotal').innerHTML = subtotal
    document.getElementById('qntBTS').innerHTML = 1;
    document.getElementById('valorBTSTotal').innerHTML = 0
}
 // Sumir Gamer
function sumir3(){
    var prod3 = document.querySelector('#prod3')
    prod3.style.display= 'none'
    qntGamer = Number(document.getElementById('qntGamer').innerHTML)
    subtotal = Number(document.getElementById('subtotal').innerHTML)
    subtotal = Number(subtotal - (qntGamer * 40.72)).toFixed(2)
    document.getElementById('valordacompra').innerHTML = subtotal
    document.getElementById('subtotal').innerHTML = subtotal
    document.getElementById('qntGamer').innerHTML = 1;
    document.getElementById('valorGamerTotal').innerHTML = 0
}

/*Somar e Subtrair produtos no carrinho*/

function mais1(){
    // Adicionar +1 na quantidade
    var qntdAtual = document.getElementById('qntNeymar').innerHTML;
    var vlrQntdAtual = parseInt(qntdAtual);
    vlrQntdAtual = vlrQntdAtual+1;
    // Exibe a quantidade
    document.getElementById('qntNeymar').innerHTML = " " + vlrQntdAtual + " ";
    //Alterar o valor total do produto

    var totalNeymar = document.querySelector('#valorNeymarTotal')
    totalNeymar = parseInt(vlrQntdAtual) * 200.00
    document.querySelector('#valorNeymarTotal').innerHTML = (parseInt(vlrQntdAtual) * 200.00).toFixed(2)

    //subtotal
    totalBTS =  Number(document.getElementById('valorBTSTotal').innerHTML)
    totalGamer = Number(document.getElementById('valorGamerTotal').innerHTML)
    totaltotal = Number(totalNeymar + totalBTS + totalGamer)
    document.getElementById('subtotal').innerHTML = totaltotal.toFixed(2)
    document.getElementById('valordacompra').innerHTML = totaltotal.toFixed(2)
    
}
function menos1(){
    // Subtrair -1 na quantidade
    var qntdAtual = document.getElementById('qntNeymar').innerHTML;
    var vlrQntdAtual = parseInt(qntdAtual);
    vlrQntdAtual = vlrQntdAtual-1;
    if(vlrQntdAtual < 1){
        vlrQntdAtual = 1;
    }
    // Exibe a quantidade
    document.getElementById('qntNeymar').innerHTML = " " + vlrQntdAtual + " ";

    //Alterar o valor total do produto

    var totalNeymar = document.querySelector('#valorNeymarTotal')
    totalNeymar = parseInt(vlrQntdAtual) * 200.00
    document.querySelector('#valorNeymarTotal').innerHTML = (parseInt(vlrQntdAtual) * 200.00).toFixed(2)

    //subtotal
    totalBTS =  Number(document.getElementById('valorBTSTotal').innerHTML)
    totalGamer = Number(document.getElementById('valorGamerTotal').innerHTML)
    totaltotal = Number(totalNeymar + totalBTS + totalGamer)
    document.getElementById('subtotal').innerHTML = totaltotal.toFixed(2)
    document.getElementById('valordacompra').innerHTML = totaltotal.toFixed(2)     
}

function mais2(){
    // Adicionar +1 na quantidade
    var qntdAtual = document.getElementById('qntBTS').innerHTML;
    var vlrQntdAtualBTS = parseInt(qntdAtual);
    vlrQntdAtualBTS = vlrQntdAtualBTS+1;
    // Exibe a quantidade
    document.getElementById('qntBTS').innerHTML = " " + vlrQntdAtualBTS + " ";
    //Alterar o valor total do produto

    var totalBTS = document.querySelector('#valorBTSTotal')
    totalBTS = parseInt(vlrQntdAtualBTS) * 52972.95
    document.querySelector('#valorBTSTotal').innerHTML = (parseInt(vlrQntdAtualBTS) * 52972.95).toFixed(2)

    //subtotal
    totalNeymar =  Number(document.getElementById('valorNeymarTotal').innerHTML)
    totalGamer = Number(document.getElementById('valorGamerTotal').innerHTML)
    totaltotal = Number(totalNeymar + totalBTS + totalGamer)
    document.getElementById('subtotal').innerHTML = totaltotal.toFixed(2)
    document.getElementById('valordacompra').innerHTML = totaltotal.toFixed(2)
    
}
function menos2(){
    // Subtrair -1 na quantidade
    var qntdAtual = document.getElementById('qntBTS').innerHTML;
    var vlrQntdAtual = parseInt(qntdAtual);
    vlrQntdAtual = vlrQntdAtual-1;
    if(vlrQntdAtual < 1){
        vlrQntdAtual = 1;
    }
    // Exibe a quantidade
    document.getElementById('qntBTS').innerHTML = " " + vlrQntdAtual + " ";

    //Alterar o valor total do produto

    var totalBTS = document.querySelector('#valorBTSTotal')
    totalBTS = parseInt(vlrQntdAtual) * 52972.95
    document.querySelector('#valorBTSTotal').innerHTML = (parseInt(vlrQntdAtual) * 52972.95).toFixed(2)

    //subtotal
    totalNeymar =  Number(document.getElementById('valorNeymarTotal').innerHTML)
    totalGamer = Number(document.getElementById('valorGamerTotal').innerHTML)
    totaltotal = Number(totalNeymar + totalBTS + totalGamer)
    document.getElementById('subtotal').innerHTML = totaltotal.toFixed(2)     
    document.getElementById('valordacompra').innerHTML = totaltotal.toFixed(2)
    document.getElementById('valordacompra').innerHTML = totaltotal.toFixed(2)
}

function mais2(){
    // Adicionar +1 na quantidade
    var qntdAtual = document.getElementById('qntBTS').innerHTML;
    var vlrQntdAtualBTS = parseInt(qntdAtual);
    vlrQntdAtualBTS = vlrQntdAtualBTS+1;
    // Exibe a quantidade
    document.getElementById('qntBTS').innerHTML = " " + vlrQntdAtualBTS + " ";
    //Alterar o valor total do produto

    var totalBTS = document.querySelector('#valorBTSTotal')
    totalBTS = parseInt(vlrQntdAtualBTS) * 52972.95
    document.querySelector('#valorBTSTotal').innerHTML = (parseInt(vlrQntdAtualBTS) * 52972.95).toFixed(2)

    //subtotal
    totalNeymar =  Number(document.getElementById('valorNeymarTotal').innerHTML)
    totalGamer = Number(document.getElementById('valorGamerTotal').innerHTML)
    totaltotal = Number(totalNeymar + totalBTS + totalGamer)
    document.getElementById('subtotal').innerHTML = totaltotal.toFixed(2)
    document.getElementById('valordacompra').innerHTML = totaltotal.toFixed(2)
    
}
function menos2(){
    // Subtrair -1 na quantidade
    var qntdAtual = document.getElementById('qntBTS').innerHTML;
    var vlrQntdAtual = parseInt(qntdAtual);
    vlrQntdAtual = vlrQntdAtual-1;
    if(vlrQntdAtual < 1){
        vlrQntdAtual = 1;
    }
    // Exibe a quantidade
    document.getElementById('qntBTS').innerHTML = " " + vlrQntdAtual + " ";

    //Alterar o valor total do produto

    var totalBTS = document.querySelector('#valorBTSTotal')
    totalBTS = parseInt(vlrQntdAtual) * 52972.95
    document.querySelector('#valorBTSTotal').innerHTML = (parseInt(vlrQntdAtual) * 52972.95).toFixed(2)

    //subtotal
    totalNeymar =  Number(document.getElementById('valorNeymarTotal').innerHTML)
    totalGamer = Number(document.getElementById('valorGamerTotal').innerHTML)
    totaltotal = Number(totalNeymar + totalBTS + totalGamer)
    document.getElementById('subtotal').innerHTML = totaltotal.toFixed(2)  
    document.getElementById('valordacompra').innerHTML = totaltotal.toFixed(2)   
}

function mais3(){
    // Adicionar +1 na quantidade
    var qntdAtual = document.getElementById('qntGamer').innerHTML;
    var vlrQntdAtualGamer = parseInt(qntdAtual);
    vlrQntdAtualGamer = vlrQntdAtualGamer+1;
    // Exibe a quantidade
    document.getElementById('qntGamer').innerHTML = " " + vlrQntdAtualGamer + " ";
    //Alterar o valor total do produto

    var totalGamer = document.querySelector('#valorGamerTotal')
    totalGamer = parseInt(vlrQntdAtualGamer) * 40.72
    document.querySelector('#valorGamerTotal').innerHTML = (parseInt(vlrQntdAtualGamer) * 40.72).toFixed(2)

    //subtotal
    totalNeymar =  Number(document.getElementById('valorNeymarTotal').innerHTML)
    totalBTS =  Number(document.getElementById('valorBTSTotal').innerHTML)
    totaltotal = Number(totalNeymar + totalBTS + totalGamer)
    document.getElementById('subtotal').innerHTML = totaltotal.toFixed(2)
    document.getElementById('valordacompra').innerHTML = totaltotal.toFixed(2)
    
}
function menos3(){
    // Subtrair -1 na quantidade
    var qntdAtual = document.getElementById('qntGamer').innerHTML;
    var vlrQntdAtual = parseInt(qntdAtual);
    vlrQntdAtual = vlrQntdAtual-1;
    if(vlrQntdAtual < 1){
        vlrQntdAtual = 1;
    }
    // Exibe a quantidade
    document.getElementById('qntGamer').innerHTML = " " + vlrQntdAtual + " ";

    //Alterar o valor total do produto

    var totalGamer = document.querySelector('#valorGamerTotal')
    totalGamer = parseInt(vlrQntdAtual) * 40.72
    document.querySelector('#valorGamerTotal').innerHTML = (parseInt(vlrQntdAtual) * 40.72).toFixed(2)

    //subtotal
    totalNeymar =  Number(document.getElementById('valorNeymarTotal').innerHTML)
    totalBTS =  Number(document.getElementById('valorBTSTotal').innerHTML)
    totaltotal = Number(totalNeymar + totalBTS + totalGamer)
    document.getElementById('subtotal').innerHTML = totaltotal.toFixed(2) 
    document.getElementById('valordacompra').innerHTML = totaltotal.toFixed(2)    
}

function finalizar(){
    var comprafinal = document.getElementById('valordacompra').innerHTML
    if(comprafinal != 0){
        alert('Compra realizada com sucesso!')
        location.reload();
    }else{
        alert('Adicione um produto para realizar a compra!')
    }
}