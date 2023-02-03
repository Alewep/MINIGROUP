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




array[nom] of var nom: duo;

% Pas la même ville
constraint
  forall(m in nom) (les_villes[m] == les_villes[duo[m]]);
  
% Nombre d'heure
constraint
  forall(m in nom) ((heures_hebdo[m] >= heures_min[duo[m]] /\ heures_hebdo[m] <= heures_max[duo[m]])
                /\ (heures_hebdo[duo[m]] >= heures_min[m] /\ heures_hebdo[duo[m]] <= heures_max[m]));
                
% Style
constraint 
  forall(m in nom)(card(les_styles[m] intersect les_styles[duo[m]]) >= nbStyleMin[m]);
  
% Pas le même instruments
constraint 
  forall(m in nom) (les_instruments[m] != les_instruments[duo[m]]); 
  
% Niveau
constraint
  forall(m in nom) ((les_niveaux[m] >= niveau_min[duo[m]] /\ les_niveaux[m] <= niveau_max[duo[m]])
                /\ (les_niveaux[duo[m]] >= niveau_min[m] /\ les_niveaux[duo[m]] <= niveau_max[m]));
                
% Consistant
constraint
  forall(m, n in nom) (duo[m] == n -> duo[n] == m);

solve satisfy;

output 
[
  "\(p) -> \(duo[p])\n" 
  | p in nom
]
;