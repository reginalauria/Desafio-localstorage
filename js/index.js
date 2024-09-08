const guardar = document.getElementById ('buttonText');

guardar.onclick = function(){
    const nota = document.getElementById ('inputText').value;
    localStorage.setItem('miNota', nota);
};