import './dzn-tools.js';

// Loading of line model for the array

let line_model;
fetch("./static/line.html")
    .then((response) => response.text())
    .then((html) => {
        line_model = document.createElement("tr");
        line_model.innerHTML = html;
        
    })
    .catch((error) => {
        console.warn(error);
    });

//---------

function eraseTab(){
    const tab = document.querySelector("#tableDonnees > tbody");
    
    while (tab.hasChildNodes()) {
        tab.removeChild(tab.lastChild);
    }

}

function eraseList(){
    let lists = document.querySelectorAll('.buttonList');

    for (let list of lists){
        while (list.hasChildNodes()) {
            list.removeChild(list.lastChild);
        }
    }

}

// Generate new blank line help to the line model
function generate_line(){
    let line = line_model.cloneNode(true)

    const buttonDelete = line.querySelector("td > input[name=delete]");
    buttonDelete.addEventListener('click',e => e.target.parentNode.parentNode.remove());
    let listButton = document.querySelectorAll(".buttonList")
    for(let list of listButton){
        let enumButtons = list.querySelectorAll("input[type=button]");
        for (let button of enumButtons) {

            
            let select_name = "les_"+list.parentNode.id+"s";
            const select = line.querySelector(`tr > td > select[name=${select_name}]`);
            
            let option = document.createElement("option");
            option.value = button.value;
            option.text = button.value;
            select.appendChild(option);
        }
        

    }

    return line;
}

// Create new button with the input value an attach a click listener to removes its value from the array and the button from the table when clicked.
function updateButtonList(name,value){

    let listbutton = document.querySelector(`#${name} > .buttonList`)

    if (listbutton === null) {
        return false;
    }

    let button = document.createElement("input");
    button.type = "button";
    button.value = value;
    
    button.addEventListener('click', function(e) {
       
        let options = document.querySelectorAll(`
            #tableDonnees > 
            tbody > 
            tr > 
            td > 
            select[name=${select_name}] 
            > option[value=${e.target.value}]`);
        
        
        for(let opt of options){
            opt.remove();
        }
        e.target.remove();

    });
    listbutton.appendChild(button);

    let select_name = "les_"+name+"s"
    const selectors = document.querySelectorAll(`#tableDonnees > tbody > tr > td > select[name=${select_name}]`);

    for(let select of selectors){

        let option = document.createElement("option");
        option.value = value;
        option.text = value;
        select.appendChild(option);
        
    }


    return true

}


// Add listener on click to the enum forms. 
const formEnum = document.querySelectorAll("#enumList > form");
for(let form of formEnum){
    form.addEventListener('submit',function(e){
        e.preventDefault();
        if (!form.checkValidity()) {
            return false;
        }
        const name = form.id;
        const input = document.querySelector(`#${name} > input[type=text]`);
        updateButtonList(name,input.value)

        input.value = "";
       

    });
 
}

// click listener on the buttonAddLine for create a new empty line.

const buttonAddLine = document.getElementById("addLine");

const arrayData = document.querySelector("#tableDonnees > tbody");

buttonAddLine.addEventListener("click",function(e){
    arrayData.appendChild(generate_line());
})



// Parse DZN file
const fileDznSelector = document.getElementById("file-selectorDZN");
fileDznSelector.addEventListener("change", function(e){

   

    let reader = new FileReader();

    reader.readAsText(this.files[0]);

    reader.onload = function(){
        eraseTab();
        eraseList();

        let obj = parseDzn(this.result);
        if (obj['nom'] !== undefined){
            for(let i=0;i<obj['nom'].length;++i){
                arrayData.appendChild(generate_line());
            }
        }
        else {
            alert('la donnée "nom" n\'existe pas.')
        }
        for(let key in obj){
            if (["ville","instrument","style"].includes(key)){
                for(let value of obj[key]) {
                    let err = updateButtonList(key,value)
                    if (!err) {
                        alert(`la variable "${key}" n'est pas requise.`)
                        return false;
                    }
                }
            }
            else {
                let cells = document.querySelectorAll(`#tableDonnees > tbody > tr > td > input[name=${key}],select[name=${key}] `);
                if (cells.length > obj[key].length){
                    alert(`la données ${key} est trop petite, de taille ${obj[key].length} au lieu de ${cells.length}`);
                    return false;
                }
                if (cells[0].tagName === "SELECT" && cells[0].multiple)
                {
                    let i = 0
                    for(let set of obj[key]){
                        if(cells[i] === undefined)
                            break
                        for (let opt of cells[i].options) {
                            opt.selected = (set.indexOf(opt.value) >= 0);
                        }
                        ++i;
                    }
                }
                else {
                    let i = 0
                    for(let value of obj[key]){
                    
                        if(cells[i] === undefined)
                            break
                        cells[i].value = value; 
                        ++i;
                    }
                }
            }
        }
    }
});



