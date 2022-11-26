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
            option.setAttribute("id", listeInstru[k]+j);
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
            option.setAttribute("id", listeVilles[k]+j);
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
            option.setAttribute("id", listeStyles[k]+j);
            let style = document.createTextNode(listeStyles[k]);
            option.append(style);
            select.append(option);
        }
        td.append(select);
    }
}

function supprimerLigne(ligne){
    let tbody = document.getElementById("tbody");
    let tr = document.getElementById("ligne"+ligne);
    tbody.removeChild(tr);

    for(ligne += 1; ligne < i; ++ligne){
        let tmp = document.getElementById("ligne"+ligne);
        tmp.setAttribute("id", "ligne"+(ligne-1));
        
        tmp = document.getElementById("Nom"+ligne);
        tmp.setAttribute("id", "Nom"+(ligne-1));

        tmp = document.getElementById("Nb_heures_hebdo"+ligne);
        tmp.setAttribute("id", "Nb_heures_hebdo"+(ligne-1));

        tmp = document.getElementById("Niv"+ligne);
        tmp.setAttribute("id", "Niv"+(ligne-1));

        tmp = document.getElementById("ligneInstru"+ligne);
        tmp.setAttribute("id", "ligneInstru"+(ligne-1));
        tmp = document.getElementById("Instru"+ligne);
        tmp.setAttribute("id", "Instru"+(ligne-1));
        for(let j = 0; j < listeInstru.length; ++j){
            tmp = document.getElementById(listeInstru[j]+ligne);
            tmp.setAttribute("id", listeInstru[j]+(ligne-1));
        }

        tmp = document.getElementById("ligneVille"+ligne);
        tmp.setAttribute("id", "ligneVille"+(ligne-1));
        tmp = document.getElementById("Ville"+ligne);
        tmp.setAttribute("id", "Ville"+(ligne-1));
        for(let j = 0; j < listeVilles.length; ++j){
            tmp = document.getElementById(listeVilles[j]+ligne);
            tmp.setAttribute("id", listeVilles[j]+(ligne-1));
        }

        tmp = document.getElementById("ligneStyles"+ligne);
        tmp.setAttribute("id", "ligneStyles"+(ligne-1));
        tmp = document.getElementById("Styles"+ligne);
        tmp.setAttribute("id", "Styles"+(ligne-1));
        for(let j = 0; j < listeStyles.length; ++j){
            tmp = document.getElementById(listeStyles[j]+ligne);
            tmp.setAttribute("id", listeStyles[j]+(ligne-1));
        }

        tmp = document.getElementById("Nb_H_Min"+ligne);
        tmp.setAttribute("id", "Nb_H_Min"+(ligne-1));

        tmp = document.getElementById("Nb_H_Max"+ligne);
        tmp.setAttribute("id", "Nb_H_Max"+(ligne-1));

        tmp = document.getElementById("Niv_Min"+ligne);
        tmp.setAttribute("id", "Niv_Min"+(ligne-1));

        tmp = document.getElementById("Niv_Max"+ligne);
        tmp.setAttribute("id", "Niv_Max"+(ligne-1));

        tmp = document.getElementById("Nb_Styles_Min"+ligne);
        tmp.setAttribute("id", "Nb_Styles_Min"+(ligne-1));

        tmp = document.getElementById("Supprimer"+ligne);
        tmp.setAttribute("id", "Supprimer"+(ligne-1));
        tmp.setAttribute("onclick","supprimerLigne("+(ligne-1)+")");
    }
    --i;
}

function ajoutLigne(){
    
    let tbody = document.getElementById("tbody");

    let tr = document.createElement('tr');
    tr.setAttribute("id", "ligne"+i);

    /* nom */
    let td = document.createElement('td');
    let input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "Nom"+i);
    input.setAttribute("name", "Nom");
    td.setAttribute("style", "text-align: center");
    td.append(input);
    tr.append(td);

    /* nombre d'heures hebdomadaire */
    td = document.createElement('td');
    input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Nb_heures_hebdo"+i);
    input.setAttribute("name", "Nb_heures_hebdo");
    input.setAttribute("size", "15");
    td.setAttribute("style", "text-align: center");
    td.append(input);
    tr.append(td);

    /* niveau */
    td = document.createElement('td');
    input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Niv"+i);
    input.setAttribute("name", "Niv");
    input.setAttribute("size", "5");
    td.setAttribute("style", "text-align: center");
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
        option.setAttribute("id", listeInstru[j]+i);
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
        option.setAttribute("id", listeVilles[j]+i);
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
        option.setAttribute("id", listeStyles[j]+i);
        option.append(listeStyles[j]);
        select.append(option);
    }
    td.append(select);
    tr.append(td);

    /* nombre d'heaures minimum */
    td = document.createElement('td');
    input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Nb_H_Min"+i);
    input.setAttribute("name", "Nb_H_Min");
    input.setAttribute("size", "5");
    td.setAttribute("style", "text-align: center");
    td.append(input);
    tr.append(td);

    /* nombre d'heaures maximum */
    td = document.createElement('td');
    input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Nb_H_Max"+i);
    input.setAttribute("name", "Nb_H_Max");
    input.setAttribute("size", "5");
    td.setAttribute("style", "text-align: center");
    td.append(input);
    tr.append(td);

    /* niveau minimum */
    td = document.createElement('td');
    input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Niv_Min"+i);
    input.setAttribute("name", "Niv_Min");
    input.setAttribute("size", "5");
    td.setAttribute("style", "text-align: center");
    td.append(input);
    tr.append(td);

    /* niveau maximum */
    td = document.createElement('td');
    input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Niv_Max"+i);
    input.setAttribute("name", "Niv_max");
    input.setAttribute("size", "5");
    td.setAttribute("style", "text-align: center");
    td.append(input);
    tr.append(td);

    /* nombre de styles minimum */
    td = document.createElement('td');
    input = document.createElement('input');
    input.setAttribute("type", "int");
    input.setAttribute("id", "Nb_Styles_Min"+i);
    input.setAttribute("name", "Nb_Styles_Min");
    input.setAttribute("size", "10");
    td.setAttribute("style", "text-align: center");
    td.append(input);
    tr.append(td);

    /* bouton de suppression de la ligne */
    td = document.createElement('td');
    input = document.createElement('input');
    input.setAttribute("type", "button");
    input.setAttribute("value", "Supprimer");
    input.setAttribute("id", "Supprimer"+i);
    input.setAttribute("onclick","supprimerLigne("+i+")");
    td.append(input);
    tr.append(td);

    tbody.append(tr);

    ++i;
}

function ImportationCSV(results){
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

        /* nom */
        let td = document.createElement('td');
        let input = document.createElement('input');
        input.setAttribute("type", "text");
        input.setAttribute("id", "Nom"+i);
        input.setAttribute("name", "Nom");
        input.setAttribute("size", "5");
        input.value = data[i][0];
        td.append(input);
        tr.append(td);

        /* nombre d'heures hebdomadaire */
        td = document.createElement('td');
        input = document.createElement('input');
        input.setAttribute("type", "int");
        input.setAttribute("id", "Nb_heures_hebdo"+i);
        input.setAttribute("name", "Nb_heures_hebdo");
        input.setAttribute("size", "5");
        input.value = data[i][1];
        td.append(input);
        tr.append(td);

        /* niveau */
        td = document.createElement('td');
        input = document.createElement('input');
        input.setAttribute("type", "int");
        input.setAttribute("id", "Niv"+i);
        input.setAttribute("name", "Niv");
        input.setAttribute("size", "5");
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
            option.setAttribute("id", listeInstru[j]+i);
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
            option.setAttribute("id", listeVilles[j]+i);
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
            option.setAttribute("id", listeStyles[j]+i);
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

        /* nombre d'heures minimum */
        td = document.createElement('td');
        input = document.createElement('input');
        input.setAttribute("type", "int");
        input.setAttribute("id", "Nb_H_Min"+i);
        input.setAttribute("name", "Nb_H_Min");
        input.setAttribute("size", "5");
        input.value = data[i][6];
        td.append(input);
        tr.append(td);

        /* nombre d'heures maxmimum */
        td = document.createElement('td');
        input = document.createElement('input');
        input.setAttribute("type", "int");
        input.setAttribute("id", "Nb_H_Max"+i);
        input.setAttribute("name", "Nb_H_Max");
        input.setAttribute("size", "5");
        input.value = data[i][7];
        td.append(input);
        tr.append(td);

        /* niveau minimum */
        td = document.createElement('td');
        input = document.createElement('input');
        input.setAttribute("type", "int");
        input.setAttribute("id", "Niv_Min"+i);
        input.setAttribute("name", "Niv_Min");
        input.setAttribute("size", "5");
        input.value = data[i][8];
        td.append(input);
        tr.append(td);

        /* niveau maximum */
        td = document.createElement('td');
        input = document.createElement('input');
        input.setAttribute("type", "int");
        input.setAttribute("id", "Niv_Max"+i);
        input.setAttribute("name", "Niv_max");
        input.setAttribute("size", "5");
        input.value = data[i][9];
        td.append(input);
        tr.append(td);

        /* nombre de style minimum */ 
        td = document.createElement('td');
        input = document.createElement('input');
        input.setAttribute("type", "int");
        input.setAttribute("id", "Nb_Styles_Min"+i);
        input.setAttribute("name", "Nb_Styles_Min");
        input.setAttribute("size", "5");
        input.value = data[i][10];
        td.append(input);
        tr.append(td);

        /* bouton de suppression de la ligne */
        td = document.createElement('td');
        input = document.createElement('input');
        input.setAttribute("type", "button");
        input.setAttribute("value", "Supprimer");
        input.setAttribute("id", "Supprimer"+i);
        input.setAttribute("onclick","supprimerLigne("+i+")");
        input.setAttribute("size", "5");
        td.append(input);
        tr.append(td);

        tbody.append(tr);
    }
}

function ImportationDZN(file){
    console.log(file);

    let reader = new FileReader();

    reader.readAsText(file);
    reader.onload = function(){ 
        let fileContentArray = this.result.split(/\r\n|\n/);

        let tbody = document.getElementById("tbody");
        for(let j = 0; j < i; ++j){
            let tr = document.getElementById("ligne"+j);
            tbody.removeChild(tr);
        }

        for(var line = 0; line < fileContentArray.length; line++){
            let linetxt = fileContentArray[line].split(" ");

            /* liste d'instruments */
            if(linetxt[0] == "instrument"){
                listeInstru = linetxt[2].slice(1, linetxt[2].length-2).split(",");
                affichageInstru();
                ChangementTableauInstru();
            }

            /* liste de villes */
            if(linetxt[0] == "ville"){
                listeVilles = linetxt[2].slice(1, linetxt[2].length-2).split(",");
                affichageVille();
                ChangementTableauVille();
            }

            /* liste de styles */
            if(linetxt[0] == "styles"){
                listeStyles = linetxt[2].slice(1, linetxt[2].length-2).split(",");
                affichageStyles();
                ChangementTableauStyles();
            }

            /* nom */
            if(linetxt[0] == "nom"){
                linetxt = linetxt[2].slice(1, linetxt[2].length-2).split(",");
                for(i = 0; i < linetxt.length;){
                    ajoutLigne();
                    let nom = document.getElementById("Nom"+(i-1));
                    nom.value = linetxt[i-1];
                }
            }

            /* nombre de styles minimum */
            if(linetxt[0] == "nbStyleMin"){
                linetxt = linetxt[2].slice(1, linetxt[2].length-2).split(",");
                for(let j = 0; j < linetxt.length; ++j){
                    let Nb_Styles_Min = document.getElementById("Nb_Styles_Min"+j);
                    Nb_Styles_Min.value = linetxt[j];
                } 
            }

            /* les instruments */
            if(linetxt[0] == "les_instruments"){
                linetxt = linetxt[2].slice(1, linetxt[2].length-2).split(",");
                for(let j = 0; j < linetxt.length; ++j){
                    for(let k = 0; k < listeInstru.length; ++k){
                        if(linetxt[j] == listeInstru[k]){
                            document.getElementById(listeInstru[k]+j).selected = true;
                            break;
                        }  
                    }
                } 
            }

            /* les villes */ 
            if(linetxt[0] == "les_villes"){
                linetxt = linetxt[2].slice(1, linetxt[2].length-2).split(",");
                for(let j = 0; j < linetxt.length; ++j){
                    for(let k = 0; k < listeVilles.length; ++k){
                        if(linetxt[j] == listeVilles[k]){
                            document.getElementById(listeVilles[k]+j).selected =  true;
                            break;
                        }  
                    }
                } 
            }

            /* nombre d'heaures hebdo */
            if(linetxt[0] == "heures_hebdo"){
                linetxt = linetxt[2].slice(1, linetxt[2].length-2).split(",");
                for(let j = 0; j < linetxt.length; ++j){
                    let Nb_heures_hebdo = document.getElementById("Nb_heures_hebdo"+j);
                    Nb_heures_hebdo.value = linetxt[j];
                } 
            }

            /* nombre d'heures minimum */
            if(linetxt[0] == "heures_min"){
                linetxt = linetxt[2].slice(1, linetxt[2].length-2).split(",");
                for(let j = 0; j < linetxt.length; ++j){
                    let Nb_H_Min = document.getElementById("Nb_H_Min"+j);
                    Nb_H_Min.value = linetxt[j];
                } 
            }

            /* nombre d'heures maximum */
            if(linetxt[0] == "heures_max"){
                linetxt = linetxt[2].slice(1, linetxt[2].length-2).split(",");
                for(let j = 0; j < linetxt.length; ++j){
                    let Nb_H_Max = document.getElementById("Nb_H_Max"+j);
                    Nb_H_Max.value = linetxt[j];
                } 
            }

            /* les styles */
            if(linetxt[0] == "les_styles"){
                for(let j = 0; j < i; ++j){
                    ++line;
                    linetxt = fileContentArray[line].split(" ");
                    linetxt = linetxt[2].slice(1, linetxt[2].length-2).split(",");
                    for(let k = 0; k < linetxt.length; ++k){
                        for(let l = 0; l < listeStyles.length; ++l){
                            if(linetxt[k] == listeStyles[l]){
                                document.getElementById(listeStyles[l]+j).selected =  true;
                                break;
                            }  
                        }  
                    }
                }
            }

            /* les niveaux */
            if(linetxt[0] == "les_niveaux"){
                linetxt = linetxt[2].slice(1, linetxt[2].length-2).split(",");
                for(let j = 0; j < linetxt.length; ++j){
                    let Niv = document.getElementById("Niv"+j);
                    Niv.value = linetxt[j];
                } 
            }

            /* niveau minimum */
            if(linetxt[0] == "niveau_min"){
                linetxt = linetxt[2].slice(1, linetxt[2].length-2).split(",");
                for(let j = 0; j < linetxt.length; ++j){
                    let Niv_Min = document.getElementById("Niv_Min"+j);
                    Niv_Min.value = linetxt[j];
                } 
            }

            /* niveau maximum */
            if(linetxt[0] == "niveau_max"){
                linetxt = linetxt[2].slice(1, linetxt[2].length-2).split(",");
                for(let j = 0; j < linetxt.length; ++j){
                    let Niv_Max = document.getElementById("Niv_Max"+j);
                    Niv_Max.value = linetxt[j];
                } 
            }
        }
    }
}

ajoutLigne();

affichageInstru();
affichageVille();
affichageStyles();