

window.onload = () => document.getElementById('hidden').style.opacity = 1;

function clickAlert(){
    alert("Alerta de Click")
}

let button = document.getElementById('button');
let buttonSearch= document.getElementById('button-search');

button.onclick = data;
buttonSearch.onclick = dataSearch;
dataSearchJavaScript();

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

/* Function to fetch repo with q = JavaScript */

function dataSearchJavaScript(){
    fetch('https://api.github.com/search/repositories?q=JavaScript')
        .then(response => {
            if (!response.ok) throw Error(response.status);
      
            return response.json();
        })
        .then(data => {
            let firstLi = document.getElementById("first-li"); 
            firstLi.innerHTML += 'Lista de Repositorios con "JavaScript"';
            data.items.forEach(element => {
                let repo = JSON.stringify(element.html_url);
                let newLi = document.createElement("li");
                let newContent = document.createTextNode(repo);
                newLi.appendChild(newContent);
                firstLi.insertAdjacentElement('afterend', newLi);
            })
        })
        .catch(error => {
            console.log(error);
        }); 
}

/* Function to fetch repo with with q = input text*/

function dataSearch(){
    let search = document.getElementById('search').value;
    search = JSON.stringify(search)
    fetch('https://api.github.com/search/repositories?q='+search)
        .then(response => {
            if (!response.ok) throw Error(response.status);
      
            return response.json();
        })
        .then(data => {
            let firstLi = document.getElementById("first-li"); 
            firstLi.innerHTML ='Lista de Repositorios con '+ search;
            data.items.forEach(element => {
                let repo = JSON.stringify(element.html_url);
                let newLi = document.createElement("li");
                let newContent = document.createTextNode(repo);
                newLi.appendChild(newContent);
                firstLi.insertAdjacentElement('afterend', newLi);
            })
        })
        .catch(error => {
            console.log(error);
        }); 
}


