//Operação criar-lista
function criaLista () {
    console.log("Lista criada!");
    return listaNumeros = [];
}

//Operação inserir-na-lista
function inseriElementoLista (n) {
    listaNumeros.push(n);
    return console.log("Número",n,"inserido!");
}

//Operação eliminar-da-lista
function deletaElementoLista (indice) {
    listaNumeros.splice(pos, indice);
    return console.log("Indice ",indice," deletado da lista!");
}

//Operação finalizar-lista
function finalizarLista () {
    //Não entendi!
}

//Operação tamanho
function tamanhoLista () {
    return console.log(listaNumeros.length);
}

//Operação esta-na-lista
function procurarElementoLista (n) {
    for (i=0; i<listaNumeros.length; i++) {
        if (n === listaNumeros[i]) {
            return console.log("Elemento ",n," está na lista na posição ",i,"!");
        }else{

        }
    }    
}

//Operação imprimir
function mostraElementosLista () {
    i=0;
    do{
        if (listaNumeros[i] == null) {
            console.log("Vazio");
        }else{
            console.log(listaNumeros[i]);
        }
        i++;
    }while(i<listaNumeros.length);
    return 0;
}