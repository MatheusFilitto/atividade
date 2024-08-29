document.addEventListener('DOMContentLoaded', () => {
 
    const array = [];
    const btn = document.getElementById('btn');
   
     
     
    btn.addEventListener('click', adicionarArray);
     
    function adicionarArray(){
        const input = document.getElementById('palavras');
        const valor = input.value;
        if (valor !== '') {
            array.push(valor);
            input.value = '';
            console.log(array);

            imprimir();
 
        }  
    }

    function imprimir() {
        var e = document.createElement("P");
        var t = document.createTextNode(array.sort());
        e.appendChild(t);
        document.body.appendChild(e);
       }
 
 
     
    });