function parseInfo(){

    const table = document.getElementById("Table");
    const lignes = table.getElementsByTagName("tr");

    let tab_nom = [];
    let tab_heure_hebdo = [];
    let tab_niveau = [];
    let tab_instrument = [];
    let tab_ville = [];
    let tab_styles = [];
    let tab_nb_h_min = [];
    let tab_nb_h_max = [];
    let tab_niv_min = [];
    let tab_niv_max = [];
    let tab_nb_styles_min = [];

    for (var i=0; i<lignes.length-1; i++){
            tab_nom.push(document.getElementById("Nom"+i).value);
            tab_heure_hebdo.push(document.getElementById("Nb_heures_hebdo"+i).value);
            tab_niveau.push(document.getElementById("Niv"+i).value);
            tab_instrument.push(document.getElementById("Instru"+i).value);
            tab_ville.push(document.getElementById("Ville"+i).value);

            let stringStyle = "styles = {";
            let aux = [];
            for (var option of document.getElementById("Styles"+i).options)
            {
                if (option.selected) {
                    aux.push(option.value);
                }
                stringStyle += option.value + ",";
            }
            tab_styles.push(aux);
            newStrStyle = stringStyle.slice(0, -1);
            stringStyle = newStrStyle + "};";
            tab_nb_h_min.push(document.getElementById("Nb_H_Min"+i).value);
            tab_nb_h_max.push(document.getElementById("Nb_H_Max"+i).value);
            tab_niv_min.push(document.getElementById("Niv_Min"+i).value);
            tab_niv_max.push(document.getElementById("Niv_Max"+i).value);
            tab_nb_styles_min.push(document.getElementById("Nb_Styles_Min"+i).value);
    }

    // Ensemble des noms
    var stringNom = tabToEns("nom", tab_nom);
    //console.log(stringNom);

    // Ensemble des instruments
    var stringInstrument = tabToEnsAllDifferent("instrument", tab_instrument);
    //console.log(stringInstrument);

    // Ensemble des villes
    var stringVille = tabToEnsAllDifferent("ville", tab_ville);
    //console.log(stringVille);

    // Ensemble des styles
    //console.log(stringStyle);

    // nbStyleMin
    var nbStyleMin = tabToValue("nbStyleMin", tab_nb_styles_min);
    //console.log(nbStyleMin);

    // les_instruments
    var les_instruments = tabToValue("les_instruments", tab_instrument);
    //console.log(les_instruments);

    // les_villes
    var les_villes = tabToValue("les_villes", tab_ville);
    //console.log(les_villes);

    // heures_hebdo
    var heures_hebdo = tabToValue("heures_hebdo", tab_heure_hebdo);

    // heures_min
    var heures_min = tabToValue("heures_min", tab_nb_h_min);

    // heures_min
    var heures_max = tabToValue("heures_max", tab_nb_h_max);


    // les_niveaux
    var les_niveaux = tabToValue("les_niveaux", tab_niveau);


    // niveau_min
    var niveau_min = tabToValue("niveau_min", tab_niv_min);


    // niveau_max
    var niveau_max = tabToValue("niveau_max", tab_niv_max);


    // les_styles
    var les_styles = tabToStringStyle(tab_styles);


    // String final pour transfert en dzn
    var stringForDzn = stringNom + stringInstrument + stringVille + stringStyle + nbStyleMin + les_instruments + les_villes + heures_hebdo + heures_min + heures_max + les_niveaux + niveau_min + niveau_max + les_styles;
    console.log(stringForDzn);

    data = { javascript_data: stringForDzn };

    $.ajax({
        url: "/resolve",
        method: "POST",
        data : data
    }).done(function (data) {
        document.getElementById("resultat").remove();
        var tag = document.createElement("p");
        tag.id = "resultat"
        var text = document.createTextNode(data);
        tag.appendChild(text);
        var element = document.getElementById("response");
        element.appendChild(tag);
        console.log(data)
    });
}

// Transformer valeur d'un tableau en ensemble
function tabToEns(nomEns, table){
    var string = nomEns + " = {";
    for (var i=0; i<table.length; i++){
        if (i != table.length-1){
            string += table[i] + ",";
        }
        else {
            string += table[i];
        }
    }
    string += "};";
    return string;
}

// Créer ensemble de variable non différentes
function tabToEnsAllDifferent(nomEns, table){
    var auxTab = new Array();
    for (var i=0; i<table.length; i++){
        if (!auxTab.includes(table[i])){
            auxTab.push(table[i]);
        }
    }

    return tabToEns(nomEns, auxTab);
}



// Créer données 
function tabToValue(nomVal, table){
    var string = nomVal + " = [";
    for (var i=0; i<table.length; i++){
        if (i != table.length-1){
            string += table[i] + ",";
        }
        else {
            string += table[i];
        }
    }
    string += "];";
    return string;
}

// Créer données des styles
function tabToStringStyle(table){
    var string = "les_styles = [";

    for (var i=0; i<table.length; i++){
        if (i != table.length-1){
            string += "{"+table[i]+"},";
        }
        else {
            string += "{"+table[i]+"}";
        }
    }

    string += "];";
    return string;
}