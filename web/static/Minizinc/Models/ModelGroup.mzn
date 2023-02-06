%#n



enum nom;
enum instrument;
enum ville;
enum style;

array[nom] of instrument: les_instruments;
array[nom] of ville: les_villes;
array[nom] of var set of style : les_styles;

array[nom] of int: nbStyleMin;
array[nom] of int: heures_hebdo;
array[nom] of int: heures_min;
array[nom] of int: heures_max;
array[nom] of int: les_niveaux;
array[nom] of int: niveau_min;
array[nom] of int: niveau_max;


int:size;

array[nom] of var set of nom: group;

% Chaque groupe à la même taille
constraint forall(n in nom)(card(group[n]) == (size-1));

% Habiter la même ville
/*constraint forall(n1 in nom,n2 in group[n1] ) (les_villes[n1] == les_villes[n2]);*/

% Le nombre d’heures voulues doit être dans le créneau Min - Max shouaité par chacun
/*constraint forall(n1 in nom,n2 in group[n1])(
  heures_hebdo[n1] >= heures_min[n2] /\ 
  heures_hebdo[n1] <= heures_max[n2] /\ 
  heures_hebdo[n2] >= heures_min[n1] /\ 
  heures_hebdo[n2] <= heures_max[n1]
);*/ 

% Le nombre de style commun doit respecter les exigences de chacun
constraint forall(n1 in nom,n2 in group[n1])(card(les_styles[n1] intersect les_styles[n2]) >= min(nbStyleMin[n1],nbStyleMin[n2]));

% Deux musiciens jouant du même instrument ne peuvent pas être dans le même groupe
constraint forall(n1 in nom,n2 in group[n1] ) (les_instruments[n1] != les_instruments[n2]);  

% Le groupe est consistant
constraint forall(n1 in nom, n2 in group[n1])(group[n1] diff {n2} == group[n2] diff {n1});

% Le niveau de chaque musicien du duo doit être dans l’intervalle de niveau accepté par chaque musicien
/*constraint forall(n1 in nom,n2 in group[n1]) (
   les_niveaux[n1] >= niveau_min[n2] /\
   les_niveaux[n1] <= niveau_max[n2] /\
   les_niveaux[n2] >= niveau_min[n1] /\
   les_niveaux[n2] <= niveau_max[n1]
);*/

% Optimisation des niveaux 
solve minimize sum(n1 in nom,n2 in group[n1]) (abs(les_niveaux[n1] - les_niveaux[n2]));


                

output["{"];
output(
[ 
  "\"\(nom[p])\""++":"++"\([ show(n) | n in fix(group[nom[p]])])"++","
  | p in 1..length(nom)-1
]);
output["\"\(nom[length(nom)])\""++":"++"\([ show(n) | n in fix(group[nom[length(nom)]])])"];
output["}"];