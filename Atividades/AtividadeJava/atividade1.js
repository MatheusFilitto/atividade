function obterDiaSemana(diaSemana){
    const diaDasSemana = [
        'segunda-Feira', 'terça-feira', 'quarta-feira','quinta-feira',
        'sexta-feira', 'sabado', 'domingo'
    ];
    return diaDasSemana[diaSemana];
   
}
 
function obterDiaMes(mes){
    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
        'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    return meses[mes];
 
}
 
function formatarData(){
    const dataAtual = new Date();
    const diaSemana = dataAtual.getDay();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth();
    const ano = dataAtual.getFullYear();
 
    const nomeDiaSemana = obterDiaSemana(diaSemana);
    const nomeMes = obterDiaMes(mes);
 
    return `${nomeDiaSemana}, ${dia} de ${nomeMes} de ${ano}`;
 
}
 
alert(formatarData());