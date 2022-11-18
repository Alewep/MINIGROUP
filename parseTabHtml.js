function parseInfo(){
    var table = document.getElementById("Table");
    var lignes = table.getElementsByTagName("tr");

    var tab_nom = [];
    var tab_heure_hebdo = [];
    var tab_niveau = [];
    var tab_instrument = [];
    var tab_ville = [];
    var tab_styles = [];
    var tab_nb_h_min = [];
    var tab_nb_h_max = [];
    var tab_niv_min = [];
    var tab_niv_max = [];
    var tab_nb_styles_min = [];

    for (var i=0; i<lignes.length-1; i++){
            tab_nom.push(document.getElementById("Nom"+i).value);
            tab_heure_hebdo.push(document.getElementById("Nb_heures_hebdo"+i).value);
            tab_niveau.push(document.getElementById("Niv"+i).value);
            tab_instrument.push(document.getElementById("Instru"+i).value);
            tab_ville.push(document.getElementById("Ville"+i).value);
            //tab_styles.push(document.getElementById("Styles"+i).options);
            var stringStyle = "styles = {";
            var aux = [];
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

    /*
    console.log(tab_nom);
    console.log(tab_heure_hebdo);
    console.log(tab_niveau);
    console.log(tab_instrument);
    console.log(tab_ville);
    console.log(tab_styles);
    console.log(tab_nb_h_min);
    console.log(tab_nb_h_max);
    console.log(tab_niv_min);
    console.log(tab_niv_max);
    console.log(tab_nb_styles_min);
    */

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

    // Gamme des heures
    var stringHeure = tabToNumber("heures", tab_heure_hebdo);
    //console.log(stringHeure);

    // Gamme des niveaux
    var stringNiveau = tabToNumber("niveau", tab_niveau);
    //console.log(stringNiveau);

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
    //console.log(heures_hebdo);

    // heures_min
    var heures_min = tabToValue("heures_min", tab_nb_h_min);
    //console.log(heures_min);

    // heures_min
    var heures_max = tabToValue("heures_max", tab_nb_h_max);
    //console.log(heures_max);

    // les_niveaux
    var les_niveaux = tabToValue("les_niveaux", tab_niveau);
    //console.log(les_niveaux);

    // niveau_min
    var niveau_min = tabToValue("niveau_min", tab_niv_min);
    //console.log(niveau_min);

    // niveau_max
    var niveau_max = tabToValue("niveau_max", tab_niv_max);
    //console.log(niveau_max);

    // les_styles
    var les_styles = tabToStringStyle(tab_styles);
    //console.log(les_styles);

    // String final pour transfert en dzn
    var stringForDzn = stringNom + "\n" + stringInstrument + "\n" + stringVille + "\n" + stringStyle + "\n" + stringHeure + "\n" + stringNiveau + "\n" + nbStyleMin + "\n" + les_instruments + "\n" + les_villes + "\n" + heures_hebdo + "\n" + heures_min + "\n" + heures_max + "\n" + les_niveaux + "\n" + niveau_min + "\n" + niveau_max + "\n" + les_styles;
    console.log(stringForDzn);
    /*
    $.post("http://127.0.0.1:5000/resolve",
    {
        data: {"data" : stringForDzn}
    }
    );
    */
    $(document).ready(function(){
        $.post("http://127.0.0.1:5000/resolve/",
        {
            data: {data : stringForDzn}
        }
        );
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

// Créer variable numérique
function tabToNumber(nomVar, table){
    var max = 5;

    for (var i=0; i<table.length; i++){
        var value = parseInt(table[i]);
        if (value > max){
            max = value;
        }
    }

    return nomVar+" = 0.."+max+";";
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