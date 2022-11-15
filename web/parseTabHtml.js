function parseInfo(){
    var t = document.getElementById("Table");
    var lignes = t.getElementsByTagName("tr");

    var index_nom = 0;
    var index_heure_hebdo = 1;
    var index_niveau = 2;
    var index_instrument = 3;
    var index_ville = 4;
    var index_styles = 5;
    var index_nb_h_min = 6;
    var index_nb_h_max = 7;
    var index_niv_min = 8;
    var index_niv_max = 9;
    var index_nb_styles_min = 10;

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
            var aux = [];
            for (var option of document.getElementById("Styles"+i).options)
            {
                if (option.selected) {
                    aux.push(option.value);
                }
            }
            tab_styles.push(aux);
            tab_nb_h_min.push(document.getElementById("Nb_H_Min"+i).value);
            tab_nb_h_max.push(document.getElementById("Nb_H_Max"+i).value);
            tab_niv_min.push(document.getElementById("Niv_Min"+i).value);
            tab_niv_max.push(document.getElementById("Niv_Max"+i).value);
            tab_nb_styles_min.push(document.getElementById("Nb_Styles_Min"+i).value);
    }

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

}