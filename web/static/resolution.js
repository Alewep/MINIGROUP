function getCheckboxValues() {
    let checkboxes = document.querySelectorAll('#constraint input[type="checkbox"]');
    checkboxes = Array.from(checkboxes).sort(x => -x.value)
    let values = [];
    for (let check of checkboxes) {
      values.push(check.checked === true);
    }
    return values;
}

function erase_resolution(){
    let solution = document.querySelector("#solution")

    while(solution.hasChildNodes()){
        solution.removeChild(solution.lastChild)
    }
}

function createTable(data) {
    // Créer le tableau HTML
    let table = document.createElement("table");
  
    // Pour chaque clé dans l'objet
    for (let key in data) {
      // Créer une ligne pour chaque clé
      let row = document.createElement("tr");
  
      // Créer la première cellule pour le nom de la clé
      let cell1 = document.createElement("td");
      let cell1Text = document.createTextNode(key);
      cell1.appendChild(cell1Text);
      row.appendChild(cell1);
  
      // Créer la deuxième cellule pour la liste associée à la clé
      let cell2 = document.createElement("td");
      let cell2Text = document.createTextNode(data[key].join(", "));
      cell2.appendChild(cell2Text);
      row.appendChild(cell2);
  
      // Ajouter la ligne au tableau
      table.appendChild(row);
    }
  
    return table
}
  

function parseArray() {
    data = {}
    const lignes =  document.querySelectorAll("#tableDonnees > tbody > tr");
    for (let ligne of lignes){
        let cellules = ligne.querySelectorAll("td > input:not(input[name=delete])");
        for(let cellule of cellules){
            let name = cellule.getAttribute("name");

            if(data[name] == undefined){
                data[name] = [];
            }
            data[name].push(cellule.value);
            
        }

        let selects = ligne.querySelectorAll("td > select")
        for(let select of selects){
            let name = select.getAttribute("name");
            values = []
            for(let opt of select.options){

                if (opt.selected){
                    if(data[name] == undefined){
                        data[name] = [];
                    }
                    values.push(opt.value);
                }
            }
            if(data[name] == undefined){
                data[name] = [];
            }
            data[name].push(values)
        }
        
    }

    const forms = document.querySelectorAll("#enumList > form");
    for (let form of forms){
        const buttons = form.querySelectorAll(".buttonList > input[type=button]");
        for(let button of buttons){
            
            if(data[form.id] == undefined){
                data[form.id] = []
            }
            data[form.id].push(button.value)
        }

    }
    return data
}

function createDzn(data) {
    dzn = ""
    for (let key in data){

        if(["nom","ville","instrument"].includes(key)){
            dzn += `${key} = {${data[key]}}; \n`;
        }
        else if(key === "les_styles")
        {
            let text = ""
            for(let ens of data[key]){
                text += `{${ens}},`;
            }
            dzn += `${key} = [${text}]; \n`;

        }
        else {
            dzn += `${key} = [${data[key]}]; \n`;
        }
    
    }
    return dzn
    
}

const form = document.querySelector("#data > form");
const solution = document.querySelector("#solution")
const select_name = document.querySelector("#model select")

form.addEventListener("submit",function(e){
    
    e.preventDefault();

    dzn = createDzn(parseArray())
    erase_resolution()

    if (dzn === "")
        return 
    // do the request 
    fetch('/resolve', 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({ "data": dzn,"model_name": select_name.value, "constraints":getCheckboxValues()})
    })
    .then(response => response.json())
    .then(function(data) {
        let error = data["error"];
        if (error != undefined) alert(error);
        else {
            console.log(data)
            if(data["statisfiable"]) {

                solution.appendChild(createTable(data["solution"]))

            }
            else {

                let msg_unsatisfied = document.createElement("p");
                msg_unsatisfied.id = "unsatisfied";
                msg_unsatisfied.textContent = "Unsatisfied";

                solution.appendChild(msg_unsatisfied);
            }

        }
        
    }).catch(function(e) {alert(e)});
});
