enum nom;
enum instrument;
enum ville;
enum styles;

array[nom] of instrument: les_instruments;
array[nom] of ville: les_villes;
array[nom] of var set of styles : les_styles;

array[nom] of int: nbStyleMin;
array[nom] of int: heures_hebdo;
array[nom] of int: heures_min;
array[nom] of int: heures_max;
array[nom] of int: les_niveaux;
array[nom] of int: niveau_min;
array[nom] of int: niveau_max;



int:size=3;

array[nom] of var set of nom: group;

constraint forall(n in nom)(card(group[n]) == (size-1));

% la même ville
%constraint forall(n1 in nom,n2 in group[n1] ) (les_villes[n1] == les_villes[n2]);

% Consistant
constraint forall(n1 in nom, n2 in group[n1])(group[n1] diff {n2} == group[n2] diff {n1});

% les styles 
constraint forall(n1 in nom,n2 in group[n1])(card(les_styles[n1] intersect les_styles[n2]) >= min(nbStyleMin[n1],nbStyleMin[n2]));

% pas les mêmes instruments 
constraint forall(n1 in nom,n2 in group[n1] ) (les_instruments[n1] != les_instruments[n2]); 
                

% Nombre d'heure



% optimisation des niveaux
solve minimize sum(n1 in nom,n2 in group[n1]) (abs(les_niveaux[n1] - les_niveaux[n2]));

output 
[
  "\(p) : \(group[p])\n" 
  | p in nom
]
;