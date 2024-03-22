const horas = document.getElementById('horas');
const Minutos = document.getElementById('Minutos');
const Segundos = document.getElementById('Segundos');

const Relogio = setInterval( function time () {
    let dateToday = new Date();

    let hr = dateToday.getHours();
    let Mim = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (Mim < 10) mim = '0' + Mim;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    Minutos.textContent = Mim;
    Segundos.textContent = s;

})