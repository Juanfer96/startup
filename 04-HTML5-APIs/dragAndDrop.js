function dropHandler(ev) {
    console.log('File(s) dropped');
    let dataZone= document.getElementById("data-zone");
    dataZone.textContent=''
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    let files = ev.dataTransfer.files;
    for (var i = 0; i < files.length ; i++) {
        if(files[i].type ==  'text/plain'){
            let text = files[i].text()
            .then( text => dataZone.textContent += '{' + text +'}' );
        }
    }
    // Pass event to removeDragData for cleanup
    removeDragData(ev)
  }

function dragOverHandler(ev) {
    console.log('File(s) in drop zone'); 

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}

function removeDragData(ev) {
    console.log('Removing drag data')
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to remove the drag data
      ev.dataTransfer.items.clear();
    } else {
      // Use DataTransfer interface to remove the drag data
      ev.dataTransfer.clearData();
    }
  }