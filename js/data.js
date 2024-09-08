document.addEventListener("DOMContentLoaded", function(){
    const notaGuardada= localStorage.getItem('miNota');
    if (notaGuardada) {
        document.getElementById('data').innerText= notaGuardada;
    } else {
        document.getElementById('data').innerText = 'No hay ninguna nota guardada.';
    }
});