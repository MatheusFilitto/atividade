function mostrarFormulario() {
    const tipoSelecionado = document.querySelector('input[name="tipo"]:checked')?.value;
    if (tipoSelecionado === 'professor') {
        document.getElementById('formProfessor').style.display = 'block';
        document.getElementById('formAluno').style.display = 'none';
    } else if (tipoSelecionado === 'aluno') {
        document.getElementById('formProfessor').style.display = 'none';
        document.getElementById('formAluno').style.display = 'block';
    } else {
        document.getElementById('formProfessor').style.display = 'none';
        document.getElementById('formAluno').style.display = 'none';
    }
}
