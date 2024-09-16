// Classe Pessoa
class Pessoa {
  constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula) {
    this.nome = nome;
    this.email = email;
    this.dataNascimento = dataNascimento;
    this.telefoneFixo = telefoneFixo;
    this.telefoneCelular = telefoneCelular;
    this.matricula = matricula;
  }
}

// Classe Professor (herda de Pessoa)
class Professor extends Pessoa {
  constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, areaAtuacao, lattes) {
    super(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula);
    this.areaAtuacao = areaAtuacao;
    this.lattes = lattes;
  }
}

// Classe Aluno (herda de Pessoa)
class Aluno extends Pessoa {
  constructor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, curso) {
    super(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula);
    this.curso = curso;
  }
}

function validarFormulario() {
  // Validações individuais
  const nomeValido = validarNome();
  const emailValido = validarEmail();
  const dataValida = validarDataNascimento();
  const telefoneFixoValido = validarTelefoneFixo();
  const telefoneCelularValido = validarCelular();
  const matriculaValida = validarMatricula();

  // Se todos os campos forem válidos
  if (nomeValido && emailValido && dataValida && telefoneFixoValido && telefoneCelularValido && matriculaValida) {
      const tipoSelecionado = document.querySelector('input[name="tipo"]:checked')?.value;
      const nome = document.getElementById("nomeProfessor")?.value || document.getElementById("nomeAluno")?.value;
      const email = document.getElementById("emailProfessor")?.value || document.getElementById("emailAluno")?.value;
      const dataNascimento = document.getElementById("dataNascProfessor")?.value || document.getElementById("dataNascAluno")?.value;
      const telefoneFixo = document.getElementById("telefoneProfessor")?.value || document.getElementById("telefoneAluno")?.value;
      const telefoneCelular = document.getElementById("celularProfessor")?.value || document.getElementById("celularAluno")?.value;
      const matricula = document.getElementById("matriculaProfessor")?.value || document.getElementById("matriculaAluno")?.value;

      if (tipoSelecionado === 'professor') {
          const areaAtuacao = document.getElementById("area").value;
          const lattes = document.getElementById("lattes").value;
          const professor = new Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, areaAtuacao, lattes);
          console.log('Dados do Professor:', professor);
      } else if (tipoSelecionado === 'aluno') {
          const curso = document.getElementById("curso").value;
          if (validarCurso()) {
              const aluno = new Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, matricula, curso);
              console.log('Dados do Aluno:', aluno);
          }
      }
  } else {
      console.log("Formulário inválido.");
  }
}
