%#2
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




array[nom] of var nom: duo;

%Les deux musiciens doivent habiter la même ville
constraint
  forall(m in nom) (les_villes[m] == les_villes[duo[m]]);

%Le nombre d’heures voulues doit être dans le créneau Min - Max souhaité par l’autre
constraint
  forall(m in nom) ((heures_hebdo[m] >= heures_min[duo[m]] /\ heures_hebdo[m] <= heures_max[duo[m]])
                /\ (heures_hebdo[duo[m]] >= heures_min[m] /\ heures_hebdo[duo[m]] <= heures_max[m]));

%Le nombre de style commun doit respecter les exigences de chacun
constraint
  forall(m in nom)(card(les_styles[m] intersect les_styles[duo[m]]) >= nbStyleMin[m]);

%Deux musiciens jouant du même instrument ne peuvent former un duo
constraint
  forall(m in nom) (les_instruments[m] != les_instruments[duo[m]]);

%Le niveau de chaque musicien du duo doit être dans l’intervalle de niveau accepté par l’autre musicien
constraint
  forall(m in nom) ((les_niveaux[m] >= niveau_min[duo[m]] /\ les_niveaux[m] <= niveau_max[duo[m]])
                /\ (les_niveaux[duo[m]] >= niveau_min[m] /\ les_niveaux[duo[m]] <= niveau_max[m]));

%Le duo est consistant
constraint
  forall(m, n in nom) (duo[m] == n -> duo[n] == m);

solve satisfy;


% display in json format
output["{"];
output
[
  "\"\(nom[p])\"" ++ ":" ++ "[\"\(duo[nom[p]])\"]" ++ ","
  | p in 1..length(nom)-1
];
output["\"\(nom[length(nom)])\"" ++ ":" ++ "[\"\(duo[nom[length(nom)]])\"]"];
output["}"];