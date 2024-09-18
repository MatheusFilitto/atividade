class Tarefa {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
        this.status = 'pendente';  
    }

    concluir() {
        this.status = 'concluída';
    }

    detalhes() {
        return `Tarefa: ${this.nome}\nDescrição: ${this.descricao}\nStatus: ${this.status}`;
    }
}

class GerenciadorDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
        this.converter();
    }

    listarTarefas() {
        return this.tarefas;
    }

    marcarComoConcluida(index) {
        if (this.tarefas[index]) {
            this.tarefas[index].concluir();
            this.converter();
        }
    }

    removerTarefa(index) {
        if (this.tarefas[index]) {
            this.tarefas.splice(index, 1);
            this.converter();
        }
    }

    visualizarDetalhes(index) {
        if (this.tarefas[index]) {
            alert(this.tarefas[index].detalhes());
        }
    }

    converter() {
        const listaDeTarefas = document.getElementById('listaDeTarefas');
        listaDeTarefas.innerHTML = '';

        this.tarefas.forEach((tarefa, index) => {
            const li = document.createElement('li');
            li.classList.add('tarefa-item');
            if (tarefa.status === 'concluída') {
                li.classList.add('concluida');
            }

            li.innerHTML = `
                <span class="tarefa-nome">${tarefa.nome}</span>
                <div class="botoes">
                    <button onclick="gerenciador.visualizarDetalhes(${index})" class="botao-detalhes">Detalhes</button>
                    <button onclick="gerenciador.marcarComoConcluida(${index})" class="botao-concluir">Concluir</button>
                    <button onclick="gerenciador.removerTarefa(${index})" class="botao-remover">Remover</button>
                </div>
            `;
            listaDeTarefas.appendChild(li);
        });
    }
}

const gerenciador = new GerenciadorDeTarefas();

document.getElementById('formTarefa').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeTarefa').value;
    const descricao = document.getElementById('descricaoTarefa').value;

    if (nome && descricao) {
        const tarefa = new Tarefa(nome, descricao);
        gerenciador.adicionarTarefa(tarefa);

        
        document.getElementById('nomeTarefa').value = '';
        document.getElementById('descricaoTarefa').value = '';
    }
});
