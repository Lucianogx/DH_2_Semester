let tempoDeCozimento = 0

function preparoDaComida (tempo, opcao) {    
   
    if ( opcao === "pipoca") {
        tempoDeCozimento = 10
    } else if ( opcao === "carne") {
        tempoDeCozimento = 15
    } else if ( opcao === "macarrão") {
        tempoDeCozimento = 8
    } else if (opcao === "Feijão") {
        tempoDeCozimento = 12
    } else if (opcao === "Brigadeiro") {
        tempoDeCozimento = 8
    } else {
        return "Prato inesistente"
    }
  
    const comidaCrua = tempo < tempoDeCozimento;
    const comidaQueimanda = (tempo > 2*tempoDeCozimento && tempo < 3*tempoDeCozimento); //valor boelano
    const comidaPronta = (tempo >= tempoDeCozimento && tempo <= tempoDeCozimento*2); //verificar!!!


    if (comidaCrua) {
        console.log ("Tempo Insuficiente")
    } else if (comidaPronta){
        console.log ("Sua comida está pronta!!")
    } else if (comidaQueimanda) {
        console.log ("Sua comida queimou")
    } else {
        console.log ("Kabum")
    }
}

preparoDaComida(9,"pipoca")
preparoDaComida(15,"pipoca")
preparoDaComida(21,"pipoca")
preparoDaComida(31,"pipoca")

preparoDaComida(9,"carne")
preparoDaComida(16,"carne")
preparoDaComida(31,"carne")
preparoDaComida(46,"carne")

preparoDaComida(7,"macarrão")
preparoDaComida(15,"macarrão")
preparoDaComida(21,"macarrão")
preparoDaComida(31,"macarrão")

preparoDaComida(9,"Feijão")
preparoDaComida(17,"Feijão")
preparoDaComida(24,"Feijão")
preparoDaComida(38,"Feijão")

preparoDaComida(7,"Brigadeiro")
preparoDaComida(14,"Brigadeiro")
preparoDaComida(18,"Brigadeiro")
preparoDaComida(35,"Brigadeiro")