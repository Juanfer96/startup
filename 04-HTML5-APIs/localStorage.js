let saveButton = document.getElementById('save');
let clearButton=  document.getElementById('clear');

saveButton.onclick = saveData;
clearButton.onclick= clearData;

function saveData(){
    let data = document.getElementById('random-text').value
    localStorage.setItem('data',data);
    document.getElementById('saved-data').innerHTML =  localStorage.data;
}

function clearData(){
    localStorage.removeItem('data');
    document.getElementById('saved-data').innerHTML =  'The information was deleted';
}