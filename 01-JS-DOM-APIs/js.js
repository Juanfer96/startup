

window.onload = () => document.getElementById('hidden').style.opacity = 1;

function clickAlert(){
    alert("Alerta de Click")
}

let button = document.getElementById('button');

function data(){
    let section= document.getElementById('section');
    fetch('http://api.icndb.com/jokes/random')
        .then(response => {
            if (!response.ok) throw Error(response.status);
      
            return response.text();
        })
         .then(text => section.innerHTML += text) // section.innerHTML = text is OK if I want to change the section content and not append the data response 
        .catch(error => {
            console.log(error);
            section.style.color = '#ff0000';
        }); 
}

button.onclick = data;