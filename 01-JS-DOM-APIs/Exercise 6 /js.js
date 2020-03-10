const scores = {
    "exams": [
        {"id" : 1,
         "name":"Math"},
         {"id" : 2,
         "name":"Spanish"},
         {"id" : 3,
         "name":"chemistry"},
    ],

    "students" : [
        {"id" : 1,
         "name":"Juan",
         "qualifications" : [
             55 , 80 , 76
         ]},
         {"id" : 2,
         "name":"Miguel",
         "qualifications" : [
             20 , 84 , 15
         ]},
         {"id" : 3,
         "name":"Sofia",
         "qualifications" : [
             78 , 65 , 48
         ]},
         {"id" : 4,
         "name":"Nico",
         "qualifications" : [
             100 , 100 , 100
         ]},
         {"id" : 5,
         "name":"Carla",
         "qualifications" : [
             74 , 65 , 92
         ]}
    ]
}

function createTable(scores) {
    // I got the body element
    var body = document.getElementsByTagName("body")[0];
    
    // create a  <table> and a <tbody>
    let table   = document.createElement("table");
    let tblBody = document.createElement("tbody");
    let tblHead = document.createElement("thead");
    
    // Create all the exams
    const exams = scores.exams;
    //Create empty block
    let row = document.createElement("tr");
    let blockh = document.createElement("th");
    row.appendChild(blockh);
    // Creat all the exams at the top row
    exams.forEach(element => {
      let blockh = document.createElement("th");
      let texth = document.createTextNode(JSON.stringify(element.name));
      blockh.appendChild(texth);
      row.appendChild(blockh)
    })
    tblHead.appendChild(row);
   
    
    const students = scores.students;
    students.forEach(element => {
        // Names as first column , for each row
      let row = document.createElement("tr");
      let blockh = document.createElement("th");
      let texth = document.createTextNode(JSON.stringify(element.name));
      blockh.appendChild(texth);
      row.appendChild(blockh)
        //Qualifications for each row 
      let qualifications = element.qualifications;  
      qualifications.forEach(element => {
        let block = document.createElement("td");
        let text = document.createTextNode(JSON.stringify(element));
        block.appendChild(text);
        row.appendChild(block);
      
      });
      tblBody.appendChild(row);
        
    });
    
    table.appendChild(tblHead);
    table.appendChild(tblBody);   
    body.appendChild(table);
    table.setAttribute("border", "2");
  }

  createTable(scores);