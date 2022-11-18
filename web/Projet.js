var i=0;

var listeInstru = ["Guitare", "Batterie", "Violon", "Piano", "Basse"];
var listeVilles = ["Angers", "Nantes"];
var listeStyles = ["Rock", "Metal", "Jazz", "Pop", "Classique", "Funk", "RnB", "Rap", "Electro", "Punk"];

function ajoutInstru(){
    let instru = document.getElementById("ajoutInstru").value;
    listeInstru.push(instru);
   
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
    let ville = document.getElementById("ajoutVille").value;
    listeVilles.push(ville);
   
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
    let style = document.getElementById("ajoutStyles").value;
    listeStyles.push(style);
   
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
    
    var tbody = document.getElementById("tbody");

    var tr = document.createElement('tr');
    tr.setAttribute("id", "ligne"+i);

    var td = document.createElement('td');
    var input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "Nom"+i);
    input.setAttribute("name", "Nom")
    td.append(input);
    tr.append(td);

    var td = document.createElement('td');
    var input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Nb_heures_hebdo"+i);
    input.setAttribute("name", "Nb_heures_hebdo")
    td.append(input);
    tr.append(td);

    var td = document.createElement('td');
    var input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Niv"+i);
    input.setAttribute("name", "Niv")
    td.append(input);
    tr.append(td);

    /* Les instrments */
    var td = document.createElement('td');
    td.setAttribute("id", "ligneInstru"+i);
    var select = document.createElement('select');
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
    var td = document.createElement('td');
    td.setAttribute("id", "ligneVille"+i)
    var select = document.createElement('select');
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
    var td = document.createElement('td');
    td.setAttribute("id", "ligneStyles"+i);
    var select = document.createElement('select');
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

    var td = document.createElement('td');
    var input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Nb_H_Min"+i);
    input.setAttribute("name", "Nb_H_Min")
    td.append(input);
    tr.append(td);

    var td = document.createElement('td');
    var input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Nb_H_Max"+i);
    input.setAttribute("name", "Nb_H_Max")
    td.append(input);
    tr.append(td);

    var td = document.createElement('td');
    var input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Niv_Min"+i);
    input.setAttribute("name", "Niv_Min")
    td.append(input);
    tr.append(td);

    var td = document.createElement('td');
    var input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Niv_Max"+i);
    input.setAttribute("name", "Niv_max")
    td.append(input);
    tr.append(td);

    var td = document.createElement('td');
    var input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Nb_Styles_Min"+i);
    input.setAttribute("name", "Nb_Styles_Min")
    td.append(input);
    tr.append(td);

    tbody.append(tr);

    ++i;
}

ajoutLigne();

affichageInstru();
affichageVille();
affichageStyles();