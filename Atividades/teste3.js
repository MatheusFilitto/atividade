function verificarTipoDado() {

    var dado = prompt("Digite um dado:");

    var verificarTipo = confirm("Deseja verificar o tipo do dado informado?");


    var resultado;
    if (verificarTipo) {

        var tipoDado;
        if (dado === null) {
            tipoDado = "nulo"; 
        } else if (dado === "") {
            tipoDado = "vazia"; 
        } else if (!isNaN(dado) && dado.trim() !== "") {
            tipoDado = "Numero"; 
        } else {
            tipoDado = "String"; 
        }
        resultado = "O tipo do dado informado é: " + tipoDado;
    } else {
        resultado = "Obrigado por visitar esta página";
    }


    document.body.innerHTML = "<p>" + resultado + "</p>";
}

window.onload = verificarTipoDado;