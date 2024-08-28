function verificarPalindromo() {

    const texto = document.getElementById('texto').value;

    const ehPalindromo = texto === texto.split('').reverse().join('');

    if (ehPalindromo) {
        alert('O texto é um palíndromo!');
    } else {
        alert('O texto não é um palíndromo.');
    }
}