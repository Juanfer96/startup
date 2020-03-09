

window.onload = () => document.getElementById('hidden').style.opacity = 1;

function clickAlert(){
    alert("Alerta de Click")
}


let button = document.getElementById('button');

button.onclick = clickAlert;


