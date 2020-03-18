const DB_NAME = 'DB-texts';
const DB_VERSION = 1; 
const DB_STORE_NAME = 'texts';
const saveButton = document.getElementById('save');
const clearButton=  document.getElementById('clear');
let db;

function openDb() {
    console.log("openDb ...");
    const req = indexedDB.open(DB_NAME, DB_VERSION);
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
    const data = document.getElementById('random-text').value
    const trans = db.transaction([DB_STORE_NAME], "readwrite");
    const store = trans.objectStore(DB_STORE_NAME);
    const request =store.put(data, 'text');
    request.onsuccess = function(event) {
        document.getElementById('saved-data').innerHTML =  data;
      };
}

function clearData(){
    const trans = db.transaction([DB_STORE_NAME], "readwrite");
    const store = trans.objectStore(DB_STORE_NAME);
    store.clear();
    document.getElementById('saved-data').innerHTML =  'The information was deleted';
}
  

openDb();