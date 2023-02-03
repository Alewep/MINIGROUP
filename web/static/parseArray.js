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
        console.log(selects)
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

const form = document.getElementById("donnees");

form.addEventListener("click",function(e){
    data = parseArray();
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

    console.log(dzn);
   

})