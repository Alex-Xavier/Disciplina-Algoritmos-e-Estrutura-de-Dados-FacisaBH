//Exercício 2 -> TAD lista-aluno

//Operação criar-lista-alunos
function criaListaAlunos () {
    console.log("Lista de alunos criada!");
    return listaAlunos = [];
}

//Operação inserir-na-lista-aluno
function inseriAlunoLista (aluno) {
    listaAlunos.push(aluno);
    return console.log("Aluno",aluno,"inserido!");
}

//Operação eliminar-aluno-da-lista
function deletaAlunoLista (indice) {
    listaAlunos.splice(pos, indice);
    return console.log("Aluno no indice ",indice," deletado da lista!");
}

//Operação finalizar-lista-aluno
function destroiListaAluno () {
    for (i=0; i<listaAlunos.length; i++) {
        listaAlunos[i] = null;
    }
    return console.log("A lista de alunos foi deletada e está totalmente vazia!");
}

//Operação tamanho-lista-aluno
function quantidadeListaAluno () {
    return console.log("A lista contém ",listaAlunos.length," alunos!");
}

//Operação aluno-esta-na-lista
function procurarMatriculaAlunoLista (matricula) {
    for (i=0; i<listaAlunos.length; i++) {
        if (matricula == listaAlunos[i].matricula) {
            return console.log("Aluno com a matrícula ",matricula," está na lista na posição ",i,"!");
        }
    }
    return console.log("Aluno com a matrícula ",matricula," não foi encontrado!");
}

//Operação imprimir-aluno
function mostraAlunoLista () {
    if (listaAlunos[0] == null) {
        return console.log("A lista de alunos está vazia!");
    }
    for (i=0; i<listaAlunos.length; i++) {
        console.log("Nome: ",listaAlunos[i].nome);
        console.log("Matrícula: ",listaAlunos[i].matricula);
        console.log("Soma de Nostas: ",listaAlunos[i].somatorioNotas);
    }
    return console.log("Todos os alunos foram mostrados!");
}