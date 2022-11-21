var i=0;

var listeInstru = ["Guitare", "Batterie", "Violon", "Piano", "Basse"];
var listeVilles = ["Angers", "Nantes"];
var listeStyles = ["Rock", "Metal", "Jazz", "Pop", "Classique", "Funk", "RnB", "Rap", "Electro", "Punk"];

function ajoutInstru(){
    let instru = document.getElementById("ajoutInstru");
    listeInstru.push(instru.value);
    instru.value = "";
   
    affichageInstru();
    ChangementTableauInstru();
}

function affichageInstru(){
    let tr = document.getElementById("ligneInstru");
    let td = document.getElementById("Instru");
    tr.removeChild(td);
    
    td = document.createElement('td');
    td.setAttribute("id", "Instru");

    for(let j = 0; j < listeInstru.length; ++j){
        let button = document.createElement('input');
        button.setAttribute("type", "button");
        button.setAttribute("value", listeInstru[j]);
        button.setAttribute("onclick", "supprimerInstru("+j+")");
        td.append(button);
    }

    tr.append(td);
}

function supprimerInstru(j){
    listeInstru.splice(j, 1);
    affichageInstru();
    ChangementTableauInstru();
}

function ChangementTableauInstru(){
    for(j = 0; j < i; ++j){
        let td = document.getElementById("ligneInstru"+j);
        let select = document.getElementById("Instru"+j);
        td.removeChild(select);

        select = document.createElement('select');
        select.setAttribute("name", "Instru");
        select.setAttribute("id", "Instru"+j);

        for(let k = 0; k < listeInstru.length; ++k){
            let option = document.createElement('option');
            option.setAttribute("value", listeInstru[k]);
            let instru = document.createTextNode(listeInstru[k]);
            option.append(instru);
            select.append(option);
        }
        td.append(select);
    }
}

function ajoutVille(){
    let ville = document.getElementById("ajoutVille");
    listeVilles.push(ville.value);
    ville.value = "";

    affichageVille();
    ChangementTableauVille();
}

function affichageVille(){
    let tr = document.getElementById("ligneVille");
    let td = document.getElementById("Villes");
    tr.removeChild(td);
    
    td = document.createElement('td');
    td.setAttribute("id", "Villes");

    for(let j = 0; j < listeVilles.length; ++j){
        let button = document.createElement('input');
        button.setAttribute("type", "button");
        button.setAttribute("value", listeVilles[j]);
        button.setAttribute("onclick", "supprimerVille("+j+")");
        td.append(button);
    }

    tr.append(td);
}

function supprimerVille(j){
    listeVilles.splice(j, 1);
    affichageVille();
    ChangementTableauVille();
}

function ChangementTableauVille(){
    for(j = 0; j < i; ++j){
        let td = document.getElementById("ligneVille"+j);
        let select = document.getElementById("Ville"+j);
        td.removeChild(select);

        select = document.createElement('select');
        select.setAttribute("name", "Ville");
        select.setAttribute("id", "Ville"+j);

        for(let k = 0; k < listeVilles.length; ++k){
            let option = document.createElement('option');
            option.setAttribute("value", listeVilles[k]);
            let ville = document.createTextNode(listeVilles[k]);
            option.append(ville);
            select.append(option);
        }
        td.append(select);
    }
}

function ajoutStyles(){
    let style = document.getElementById("ajoutStyles");
    listeStyles.push(style.value);
    style.value = "";
   
    affichageStyles();
    ChangementTableauStyles();
}

function affichageStyles(){
    let tr = document.getElementById("ligneStyles");
    let td = document.getElementById("Styles");
    tr.removeChild(td);
    
    td = document.createElement('td');
    td.setAttribute("id", "Styles");

    for(let j = 0; j < listeStyles.length; ++j){
        let button = document.createElement('input');
        button.setAttribute("type", "button");
        button.setAttribute("value", listeStyles[j]);
        button.setAttribute("onclick", "supprimerStyles("+j+")");
        td.append(button);
    }

    tr.append(td);
}

function supprimerStyles(j){
    listeStyles.splice(j, 1);
    affichageStyles();
    ChangementTableauStyles();
}

function ChangementTableauStyles(){
    for(j = 0; j < i; ++j){
        let td = document.getElementById("ligneStyles"+j);
        let select = document.getElementById("Styles"+j);
        td.removeChild(select);

        select = document.createElement('select');
        select.setAttribute("name", "Styles");
        select.setAttribute("id", "Styles"+j);
        select.setAttribute("multiple", "true");

        for(let k = 0; k < listeStyles.length; ++k){
            let option = document.createElement('option');
            option.setAttribute("value", listeStyles[k]);
            let style = document.createTextNode(listeStyles[k]);
            option.append(style);
            select.append(option);
        }
        td.append(select);
    }
}

function ajoutLigne(){
    
    let tbody = document.getElementById("tbody");

    let tr = document.createElement('tr');
    tr.setAttribute("id", "ligne"+i);

    let td = document.createElement('td');
    let input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "Nom"+i);
    input.setAttribute("name", "Nom");
    td.append(input);
    tr.append(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Nb_heures_hebdo"+i);
    input.setAttribute("name", "Nb_heures_hebdo");
    td.append(input);
    tr.append(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Niv"+i);
    input.setAttribute("name", "Niv")
    td.append(input);
    tr.append(td);

    /* Les instrments */
    td = document.createElement('td');
    td.setAttribute("id", "ligneInstru"+i);
    let select = document.createElement('select');
    select.setAttribute("id", "Instru"+i);
    select.setAttribute("name", "Instru");
    for(let j = 0; j < listeInstru.length; ++j){
        var option = document.createElement('option');
        option.setAttribute("value", listeInstru[j]);
        option.append(listeInstru[j]);
        select.append(option);
    }
    td.append(select);
    tr.append(td);

    /* Les villes */
    td = document.createElement('td');
    td.setAttribute("id", "ligneVille"+i);
    select = document.createElement('select');
    select.setAttribute("id", "Ville"+i);
    select.setAttribute("name", "Ville");
    for(let j = 0; j < listeVilles.length; ++j){
        var option = document.createElement('option');
        option.setAttribute("value", listeVilles[j]);
        option.append(listeVilles[j]);
        select.append(option);
    }
    td.append(select);
    tr.append(td);

    /* les styles */
    td = document.createElement('td');
    td.setAttribute("id", "ligneStyles"+i);
    select = document.createElement('select');
    select.setAttribute("id", "Styles"+i);
    select.setAttribute("name", "Styles");
    select.setAttribute("multiple", "true");
    for(let j = 0; j < listeStyles.length; ++j){
        var option = document.createElement('option');
        option.setAttribute("value", listeStyles[j]);
        option.append(listeStyles[j]);
        select.append(option);
    }
    td.append(select);
    tr.append(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Nb_H_Min"+i);
    input.setAttribute("name", "Nb_H_Min");
    td.append(input);
    tr.append(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Nb_H_Max"+i);
    input.setAttribute("name", "Nb_H_Max");
    td.append(input);
    tr.append(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Niv_Min"+i);
    input.setAttribute("name", "Niv_Min");
    td.append(input);
    tr.append(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Niv_Max"+i);
    input.setAttribute("name", "Niv_max");
    td.append(input);
    tr.append(td);

    td = document.createElement('td');
    input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Nb_Styles_Min"+i);
    input.setAttribute("name", "Nb_Styles_Min");
    td.append(input);
    tr.append(td);

    tbody.append(tr);

    ++i;
}

function recuperationDonnees(results){
    let data = results.data;
    console.log(data);

    let tbody = document.getElementById("tbody");
    for(let j = 0; j < i; ++j){
        let tr = document.getElementById("ligne"+j);
        tbody.removeChild(tr);
    }

    for(i = 0; i < data.length-1; ++i){
        let tr = document.createElement('tr');
        tr.setAttribute("id", "ligne"+i);

        let td = document.createElement('td');
        let input = document.createElement('input');
        input.setAttribute("type", "text");
        input.setAttribute("id", "Nom"+i);
        input.setAttribute("name", "Nom");
        input.value = data[i][0];
        td.append(input);
        tr.append(td);

        td = document.createElement('td');
        input = document.createElement('input');
        input.setAttribute("type", "int");
        input.setAttribute("id", "Nb_heures_hebdo"+i);
        input.setAttribute("name", "Nb_heures_hebdo");
        input.value = data[i][1];
        td.append(input);
        tr.append(td);

        td = document.createElement('td');
        input = document.createElement('input');
        input.setAttribute("type", "int");
        input.setAttribute("id", "Niv"+i);
        input.setAttribute("name", "Niv");
        input.value = data[i][2];
        td.append(input);
        tr.append(td);

        /* Les instrments */
        td = document.createElement('td');
        td.setAttribute("id", "ligneInstru"+i);
        let select = document.createElement('select');
        select.setAttribute("id", "Instru"+i);
        select.setAttribute("name", "Instru");
        for(let j = 0; j < listeInstru.length; ++j){
            let option = document.createElement('option');
            option.setAttribute("value", listeInstru[j]);
            if(data[i][3] == listeInstru[j]){
                option.selected = true;
            }
            option.append(listeInstru[j]);
            select.append(option);
        }
        td.append(select);
        tr.append(td);

        /* Les villes */
        td = document.createElement('td');
        td.setAttribute("id", "ligneVille"+i)
        select = document.createElement('select');
        select.setAttribute("id", "Ville"+i);
        select.setAttribute("name", "Ville");
        for(let j = 0; j < listeVilles.length; ++j){
            let option = document.createElement('option');
            option.setAttribute("value", listeVilles[j]);
            if(data[i][4] == listeVilles[j]){
                option.selected = true;
            }
            option.append(listeVilles[j]);
            select.append(option);
        }
        td.append(select);
        tr.append(td);

        /* les styles */
        td = document.createElement('td');
        td.setAttribute("id", "ligneStyles"+i);
        select = document.createElement('select');
        select.setAttribute("id", "Styles"+i);
        select.setAttribute("name", "Styles");
        select.setAttribute("multiple", "true");
        for(let j = 0; j < listeStyles.length; ++j){
            let option = document.createElement('option');
            option.setAttribute("value", listeStyles[j]);
            let styles = data[i][5].split(",");
            for(let k = 0; k < styles.length; ++k){
                if(styles[k] == listeStyles[j]){
                    option.selected = true;
                    break;
                }
            }
            option.append(listeStyles[j]);
            select.append(option);
        }
        td.append(select);
        tr.append(td);

        td = document.createElement('td');
        input = document.createElement('input');
        input.setAttribute("type", "int");
        input.setAttribute("id", "Nb_H_Min"+i);
        input.setAttribute("name", "Nb_H_Min");
        input.value = data[i][6];
        td.append(input);
        tr.append(td);

        td = document.createElement('td');
        input = document.createElement('input');
        input.setAttribute("type", "int");
        input.setAttribute("id", "Nb_H_Max"+i);
        input.setAttribute("name", "Nb_H_Max");
        input.value = data[i][7];
        td.append(input);
        tr.append(td);

        td = document.createElement('td');
        input = document.createElement('input');
        input.setAttribute("type", "int");
        input.setAttribute("id", "Niv_Min"+i);
        input.setAttribute("name", "Niv_Min");
        input.value = data[i][8];
        td.append(input);
        tr.append(td);

        td = document.createElement('td');
        input = document.createElement('input');
        input.setAttribute("type", "int");
        input.setAttribute("id", "Niv_Max"+i);
        input.setAttribute("name", "Niv_max");
        input.value = data[i][9];
        td.append(input);
        tr.append(td);

        td = document.createElement('td');
        input = document.createElement('input');
        input.setAttribute("type", "int");
        input.setAttribute("id", "Nb_Styles_Min"+i);
        input.setAttribute("name", "Nb_Styles_Min");
        input.value = data[i][10];
        td.append(input);
        tr.append(td);

        tbody.append(tr);
    }
}

ajoutLigne();

affichageInstru();
affichageVille();
affichageStyles();