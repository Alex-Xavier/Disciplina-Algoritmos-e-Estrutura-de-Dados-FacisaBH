//Exercício 2 -> TAD lista-aluno

//Operação criar-lista-aluno
function criaListaAluno () {
    console.log("Lista de alunos criada!");
    return listaAluno = [];
}

//Operação inserir-na-lista-aluno
function inseriAlunoLista (aluno) {
    aluno = {nome: "Alex Xavier", matricula: 14458, somatorioNota: 40};
    listaAluno.push(aluno);
    aluno = {nome: "Godines Silva", matricula: 14459, somatorioNota: 18};
    listaAluno.push(aluno);
    aluno = {nome: "Janaína Vitória", matricula: 14460, somatorioNota: 28};
    listaAluno.push(aluno);
    aluno = {nome: "Kleber Santos", matricula: 14461, somatorioNota: 32};
    listaAluno.push(aluno);
    aluno = {nome: "Lucas Gimenez", matricula: 14462, somatorioNota: 37};
    listaAluno.push(aluno);
    return console.log("Alunos padrões inserido!");
}

//Operação eliminar-aluno-da-lista
//Passe como parâmetro a matrícula do aluno que deseja deletar
//Se o aluno for deletado será retornado sua matrícula, caso não seja encontrado será retornado uma mensagem
function deletaAlunoLista (matricula) {
    for (i=0; i<listaAluno.length; i++) {
        if (listaAluno[i].matricula == matricula) {
            console.log("Aluno ",listaAluno[i].nome," matricula",listaAluno[i].matricula," foi deletado!");
            listaAluno[i] = null;
            return matricula;
        }
    }
    return console.log("Aluno com a matrícula ",listaAluno[i].matricula," não foi encontrado!");
}

//Operação finalizar-lista-aluno
function destroiListaAluno () {
    for (i=0; i<listaAluno.length; i++) {
        listaAluno[i] = null;
    }
    return console.log("A lista de alunos foi deletada e está totalmente vazia!");
}

//Operação tamanho-lista-aluno
function quantidadeListaAluno () {
    return console.log("A lista contém ",listaAluno.length," alunos!");
}

//Operação aluno-esta-na-lista
//Passe como parâmetro a matrícula do aluno
function procurarMatriculaAlunoLista (matricula) {
    for (i=0; i<listaAluno.length; i++) {
        if (matricula == listaAluno[i].matricula) {
            return console.log("Aluno com a matrícula ",matricula," está na lista na posição ",i,"!");
        }
    }
    return console.log("Aluno com a matrícula ",matricula," não foi encontrado!");
}

//Operação imprimir-aluno
function mostraAlunoLista () {
    if (listaAluno[0] == null) {
        return console.log("A lista de alunos está vazia!");
    }
    for (i=0; i<listaAluno.length; i++) {
        console.log("Nome: ",listaAluno[i].nome);
        console.log("Matrícula: ",listaAluno[i].matricula);
        console.log("Soma de Nostas: ",listaAluno[i].somatorioNota);
    }
    return console.log("Todos os alunos foram mostrados!");
}

function capturaEscolhaExecuta () {
    do {    
        escolha = prompt("Escolha uma das opções listadas: ");
        switch (escolha) {
            case 1:
                criaListaAluno();
                break;
            case 2:
                inseriAlunoLista();
                break;
            case 3:

                break;
            case 4:

                break;
            case 5:

                break;
            case 6:

                break;
            case 7:
                
                break;
        }
    }while(escolha != 7);
}

capturaEscolhaExecuta();