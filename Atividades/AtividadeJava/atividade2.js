function mostrarHora() {
    const agora = new Date();
    const horas = String(agora.getHours());
    const minutos = String(agora.getMinutes());
    const segundos = String(agora.getSeconds());
    const horarioAtual = `${horas}:${minutos}:${segundos}`;
    
   
    alert(horarioAtual);
    
 
    setTimeout(mostrarHora, 1000);
}


mostrarHora();