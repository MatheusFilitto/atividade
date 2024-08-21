function calcularFatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function solicitarNumero() {
    let numero;
    do {
        numero = parseInt(prompt("Digite um número inteiro positivo:"), 10);
    } while (isNaN(numero) || numero < 0);

    let fatorial = calcularFatorial(numero);
    alert("O fatorial de " + numero + " é " + fatorial);
}


window.onload = solicitarNumero;