const DB_NAME = 'DB-texts';
const DB_VERSION = 1; 
const DB_STORE_NAME = 'texts';
let db;
let saveButton = document.getElementById('save');
let clearButton=  document.getElementById('clear');


function openDb() {
    console.log("openDb ...");
    var req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = function (evt) {
      db = this.result;
      console.log("openDb DONE");
    };
    req.onerror = function (evt) {
      console.error("openDb:", evt.target.errorCode);
    };

    req.onupgradeneeded = function (evt) {
      console.log("openDb.onupgradeneeded");
      evt.currentTarget.result.createObjectStore(
        DB_STORE_NAME, { autoIncrement: false });

    };
  }


saveButton.onclick = saveData;
clearButton.onclick= clearData;


function saveData(){
    console.log('paso')
    let data = document.getElementById('random-text').value
    let trans = db.transaction([DB_STORE_NAME], "readwrite");
    let store = trans.objectStore(DB_STORE_NAME);
    let request =store.put(data, 'text');
    request.onsuccess = function(event) {
        document.getElementById('saved-data').innerHTML =  data;
      };
}

function clearData(){
    let trans = db.transaction([DB_STORE_NAME], "readwrite");
    let store = trans.objectStore(DB_STORE_NAME);
    store.clear();
    document.getElementById('saved-data').innerHTML =  'The information was deleted';
}
  

openDb();