let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos= document.getElementById('segundos');

const relogio = setInterval(function tempo(){
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    if(hr < 10){
        hr = '0' + hr
    }
    if(min < 10){
        min = '0' + min
    }
    if(sec < 10){
        sec = '0' + sec
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos. textContent = sec;

})

