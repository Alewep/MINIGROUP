var i=0;

function ajoutLigne(){
    ++i;

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

    var td = document.createElement('td');
    var select = document.createElement('select');
    select.setAttribute("id", "Instru"+i);
    select.setAttribute("name", "Instru");
    var option = document.createElement('option');
    option.setAttribute("value", "Guitare");
    var texte = document.createTextNode("Guiatre");
    option.append(texte);
    select.append(option);
    var option = document.createElement('option');
    option.setAttribute("value", "Batterie");
    var texte = document.createTextNode("Batterie");
    option.append(texte);
    select.append(option);
    td.append(select);
    var option = document.createElement('option');
    option.setAttribute("value", "Violon");
    var texte = document.createTextNode("Vilion");
    option.append(texte);
    select.append(option);
    td.append(select);
    var option = document.createElement('option');
    option.setAttribute("value", "Piano");
    var texte = document.createTextNode("Piano");
    option.append(texte);
    select.append(option);
    td.append(select);
    var option = document.createElement('option');
    option.setAttribute("value", "Basse");
    var texte = document.createTextNode("Basse");
    option.append(texte);
    select.append(option);
    td.append(select);
    tr.append(td);

    var td = document.createElement('td');
    var select = document.createElement('select');
    select.setAttribute("id", "Ville"+i);
    select.setAttribute("name", "Ville");
    var option = document.createElement('option');
    option.setAttribute("value", "Angers");
    var texte = document.createTextNode("Angers");
    option.append(texte);
    select.append(option);
    var option = document.createElement('option');
    option.setAttribute("value", "Nantes");
    var texte = document.createTextNode("Nantes");
    option.append(texte);
    select.append(option);
    td.append(select);
    tr.append(td);

    var td = document.createElement('td');
    var select = document.createElement('select');
    select.setAttribute("id", "Styles"+i);
    select.setAttribute("name", "Styles");
    select.setAttribute("multiple", "true")
    var option = document.createElement('option');
    option.setAttribute("value", "Rock");
    var texte = document.createTextNode("Rock");
    option.append(texte);
    select.append(option);
    var option = document.createElement('option');
    option.setAttribute("value", "Metal");
    var texte = document.createTextNode("Metal");
    option.append(texte);
    select.append(option);
    td.append(select);
    var option = document.createElement('option');
    option.setAttribute("value", "Jazz");
    var texte = document.createTextNode("Jazz");
    option.append(texte);
    select.append(option);
    td.append(select);
    var option = document.createElement('option');
    option.setAttribute("value", "Pop");
    var texte = document.createTextNode("Pop");
    option.append(texte);
    select.append(option);
    td.append(select);
    var option = document.createElement('option');
    option.setAttribute("value", "Classique");
    var texte = document.createTextNode("Classique");
    option.append(texte);
    select.append(option);
    td.append(select);
    var option = document.createElement('option');
    option.setAttribute("value", "Funk");
    var texte = document.createTextNode("Funk");
    option.append(texte);
    select.append(option);
    td.append(select);
    var option = document.createElement('option');
    option.setAttribute("value", "RnB");
    var texte = document.createTextNode("RnB");
    option.append(texte);
    select.append(option);
    td.append(select);
    var option = document.createElement('option');
    option.setAttribute("value", "Rap");
    var texte = document.createTextNode("Rap");
    option.append(texte);
    select.append(option);
    td.append(select);
    var option = document.createElement('option');
    option.setAttribute("value", "Eectro");
    var texte = document.createTextNode("Electro");
    option.append(texte);
    select.append(option);
    td.append(select);
    var option = document.createElement('option');
    option.setAttribute("value", "Punk");
    var texte = document.createTextNode("Punk");
    option.append(texte);
    select.append(option);
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
}
