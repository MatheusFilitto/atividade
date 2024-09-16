document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitProfessor').addEventListener('click', (event) => {
        if (validarFormulario()) {
            alert("Objeto Criado!");
        } else {
            event.preventDefault();
        }
    });

    document.getElementById('redefinirProfessor').addEventListener('click', () => {
        document.getElementById('formProfessor').reset(); 
    });

    document.getElementById('nomeProfessor').addEventListener('blur', validarNome);
    document.getElementById('emailProfessor').addEventListener('blur', validarEmail);
    document.getElementById('dataNascProfessor').addEventListener('blur', validarDataNascimento);
    document.getElementById('telefoneProfessor').addEventListener('blur', validarTelefoneFixo);
    document.getElementById('celularProfessor').addEventListener('blur', validarCelular);
    document.getElementById('matriculaProfessor').addEventListener('blur', validarMatricula);

    document.getElementById('nomeAluno').addEventListener('blur', validarNome);
    document.getElementById('emailAluno').addEventListener('blur', validarEmail);
    document.getElementById('dataNascAluno').addEventListener('blur', validarDataNascimento);
    document.getElementById('telefoneAluno').addEventListener('blur', validarTelefoneFixo);
    document.getElementById('celularAluno').addEventListener('blur', validarCelular);
    document.getElementById('matriculaAluno').addEventListener('blur', validarMatricula);

    document.getElementById('submitAluno').addEventListener('click', (event) => {
        if (validarFormulario()) {
            alert("Objeto Criado!");
        } else {
            event.preventDefault();
        }
      });
});

function validarNome() {
    const nomeProfessor = document.getElementById('nomeProfessor');
    const nomeAluno = document.getElementById('nomeAluno');
    const nome = nomeProfessor?.value || nomeAluno?.value;
    const erroNome = document.getElementById(nomeProfessor ? 'erroNomeProfessor' : 'erroNomeAluno');
    const nomeRegex = /^[A-Za-z]+ [A-Za-z]+$/;

    if (!nome || !nomeRegex.test(nome)) {
        erroNome.textContent = 'Nome inválido. Exemplo: João Silva';
        return false;
    } else {
        erroNome.textContent = '';
        return true;
    }
}

function validarEmail() {
    const emailProfessor = document.getElementById('emailProfessor');
    const emailAluno = document.getElementById('emailAluno');
    const email = emailProfessor?.value || emailAluno?.value;
    const erroEmail = document.getElementById(emailProfessor ? 'erroEmailProfessor' : 'erroEmailAluno');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
        erroEmail.textContent = 'Email inválido. Exemplo: exemplo@dominio.com';
        return false;
    } else {
        erroEmail.textContent = '';
        return true;
    }
}

function validarDataNascimento() {
    const dataNascProfessor = document.getElementById('dataNascProfessor');
    const dataNascAluno = document.getElementById('dataNascAluno');
    const dataNasc = dataNascProfessor?.value || dataNascAluno?.value;
    const erroDataNasc = document.getElementById(dataNascProfessor ? 'erroDataNascProfessor' : 'erroDataNascAluno');
    const dataNascRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dataNasc || !dataNascRegex.test(dataNasc)) {
        erroDataNasc.textContent = 'Data de nascimento inválida. Use o formato aaaa-mm-dd';
        return false;
    } else {
        erroDataNasc.textContent = '';
        return true;
    }
}

function validarTelefoneFixo() {
    const telefoneProfessor = document.getElementById('telefoneProfessor');
    const telefoneAluno = document.getElementById('telefoneAluno');
    const telefone = telefoneProfessor?.value || telefoneAluno?.value;
    const erroTelefone = document.getElementById(telefoneProfessor ? 'erroTelefoneProfessor' : 'erroTelefoneAluno');
    const telefoneRegex = /^\(\d{2}\)\d{4}-\d{4}$/;

    if (!telefone || !telefoneRegex.test(telefone)) {
        erroTelefone.textContent = 'Telefone fixo inválido. Exemplo: (11)1234-5678';
        return false;
    } else {
        erroTelefone.textContent = '';
        return true;
    }
}

function validarCelular() {
    const celularProfessor = document.getElementById('celularProfessor');
    const celularAluno = document.getElementById('celularAluno');
    const celular = celularProfessor?.value || celularAluno?.value;
    const erroCelular = document.getElementById(celularProfessor ? 'erroCelularProfessor' : 'erroCelularAluno');
    const celularRegex = /^\(\d{2}\)\d{4,5}-\d{4}$/;

    if (!celular || !celularRegex.test(celular)) {
        erroCelular.textContent = 'Celular inválido. Exemplo: (11)91234-5678';
        return false;
    } else {
        erroCelular.textContent = '';
        return true;
    }
}

function validarArea() {
    const area = document.getElementById('area').value;
    const erroArea = document.getElementById('erroArea');

    if (!area) {
        erroArea.textContent = 'Área é obrigatória para professores';
        return false;
    } else {
        erroArea.textContent = '';
        return true;
    }
}

function validarCurso() {
    const curso = document.getElementById('curso').value;
    const erroCurso = document.getElementById('erroCurso');

    if (!curso) {
        erroCurso.textContent = 'Curso é obrigatório para alunos';
        return false;
    } else {
        erroCurso.textContent = '';
        return true;
    }
}

function validarMatricula() {
    const tipo = document.querySelector('input[name="tipo"]:checked')?.value;
    const matriculaProfessor = document.getElementById('matriculaProfessor');
    const matriculaAluno = document.getElementById('matriculaAluno');
    const matricula = matriculaProfessor?.value || matriculaAluno?.value;
    const erroMatricula = document.getElementById(matriculaProfessor ? 'erroMatriculaProfessor' : 'erroMatriculaAluno');
    const matriculaProfessorRegex = /^\d{5}$/;
    const matriculaAlunoRegex = /^\d{10}$/;

    if (tipo === "professor") {
        if (!matriculaProfessorRegex.test(matricula)) {
            erroMatricula.textContent = "Matrícula inválida para professor. Deve ter 5 dígitos.";
            return false;
        }
    } else if (tipo === "aluno") {
        if (!matriculaAlunoRegex.test(matricula)) {
            erroMatricula.textContent = "Matrícula inválida para aluno. Deve ter 10 dígitos.";
            return false;
        }
    } else {
        erroMatricula.textContent = "Perfil não selecionado.";
        return false;
    }

    erroMatricula.textContent = "";
    return true;
}

function validarLattes() {
    const lattes = document.getElementById('lattes').value;
    const erroLattes = document.getElementById('erroLattes');

    if (document.querySelector('input[name="tipo"]:checked')?.value === 'professor' && !lattes) {
        erroLattes.textContent = 'O link do Lattes é obrigatório para professores';
        return false;
    } else {
        erroLattes.textContent = '';
        return true;
    }
}

function limparErros() {
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
}
