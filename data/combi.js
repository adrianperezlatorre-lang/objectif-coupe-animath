window.PROBLEMES = (window.PROBLEMES || []).concat([
  {
    id: "combi-01",
    theme: "combi",
    niveau: 1,
    type: "reponse",
    titre: `Les tenues de Léa`,
    enonce: `<p>Pour aller au collège, Léa choisit un tee-shirt parmi ses <strong>3</strong> tee-shirts, un pantalon parmi ses <strong>4</strong> pantalons et une paire de baskets parmi ses <strong>2</strong> paires.</p><p>Combien de tenues différentes peut-elle composer ?</p>`,
    figure: ``,
    reponse: ["24", "vingt-quatre", "vingtquatre"],
    reponseTexte: `24`,
    pistes: [
      `<p>Commence plus petit : si Léa n'avait que ses 3 tee-shirts et ses 4 pantalons, combien de tenues aurait-elle ? Essaie de toutes les écrire.</p>`,
      `<p>Dessine un arbre : une première branche par tee-shirt, puis, au bout de chaque branche, une branche par pantalon. Combien de « bouts de branches » obtiens-tu ?</p>`,
      `<p>Pour chacun des 3 tee-shirts il y a 4 pantalons possibles, donc 3 × 4 = 12 couples (tee-shirt, pantalon). Que se passe-t-il quand on ajoute les baskets ?</p>`,
      `<p>Chacun des 12 couples peut être complété de 2 façons. Il reste à multiplier.</p>`
    ],
    lecon: {
      titre: `Le principe multiplicatif`,
      html: `<p>Quand on fait une suite de choix <strong>successifs</strong>, avec <span class="m">a</span> possibilités pour le premier, <span class="m">b</span> pour le deuxième, <span class="m">c</span> pour le troisième…, le nombre total de résultats est le <strong>produit</strong> :</p><div class="calc">a × b × c × …</div><p>Pourquoi ? On peut représenter tous les choix par un <strong>arbre</strong> : chaque « étage » multiplie le nombre de branches.</p><div class="exemple">Un code de cadenas à 3 molettes, chaque molette allant de 0 à 9 : 10 × 10 × 10 = 1000 codes (de 000 à 999, ce qui est cohérent !).</div><div class="astuce">Astuce olympique : avant d'appliquer le principe multiplicatif, vérifie que le <em>nombre</em> de possibilités à chaque étape ne dépend pas des choix précédents. Les choix eux-mêmes peuvent changer, mais leur nombre doit rester le même.</div>`
    },
    correction: `<p>Léa fait trois choix successifs :</p><ul><li>le tee-shirt : 3 possibilités ;</li><li>le pantalon : 4 possibilités, quel que soit le tee-shirt ;</li><li>les baskets : 2 possibilités, quels que soient les choix précédents.</li></ul><p>D'après le principe multiplicatif, le nombre de tenues est</p><div class="calc">3 × 4 × 2 = 24.</div><p>Léa peut composer <strong>24 tenues</strong>.</p><p><em>Erreur fréquente :</em> additionner (3 + 4 + 2 = 9). On additionne quand on choisit <strong>un seul</strong> objet parmi plusieurs catégories (« ou »), on multiplie quand on choisit <strong>un objet dans chaque</strong> catégorie (« et »).</p>`
  },
  {
    id: "combi-02",
    theme: "combi",
    niveau: 1,
    type: "reponse",
    titre: `Somme des chiffres égale à 6`,
    enonce: `<p>On écrit des nombres à trois chiffres en n'utilisant que les chiffres <strong>1</strong>, <strong>2</strong> et <strong>3</strong> (un même chiffre peut être utilisé plusieurs fois).</p><p>Combien de ces nombres ont une somme des chiffres égale à <strong>6</strong> ?</p>`,
    figure: ``,
    reponse: ["7", "sept"],
    reponseTexte: `7`,
    pistes: [
      `<p>Donne un exemple : 123 convient-il ? Et 222 ? Et 114 ?</p>`,
      `<p>Au lieu de chercher les nombres au hasard, cherche d'abord quels <strong>groupes de trois chiffres</strong> (sans tenir compte de l'ordre) ont pour somme 6, en n'utilisant que 1, 2, 3.</p>`,
      `<p>Range les chiffres dans l'ordre croissant : on cherche a ≤ b ≤ c dans {1, 2, 3} avec a + b + c = 6. Il n'y a que deux possibilités. Lesquelles ?</p>`,
      `<p>Les groupes sont {1, 2, 3} et {2, 2, 2}. Combien de nombres différents peut-on écrire avec chaque groupe ?</p>`
    ],
    lecon: {
      titre: `La liste organisée : ne rien oublier, ne rien compter deux fois`,
      html: `<p>Quand les nombres sont petits, on peut <strong>tout lister</strong>, mais il faut le faire avec méthode :</p><ol><li>on choisit un <strong>ordre de rangement</strong> (par exemple l'ordre croissant des chiffres, ou l'ordre alphabétique) ;</li><li>on énumère les cas dans cet ordre, sans sauter d'étape ;</li><li>on regroupe les objets qui « se ressemblent » et on compte chaque groupe.</li></ol><div class="exemple">Écrire 5 comme somme de deux entiers ≥ 1, dans l'ordre : 1+4, 2+3, 3+2, 4+1. En imposant « premier terme croissant », on est sûr de n'en oublier aucune.</div><div class="astuce">Astuce olympique : pour compter des nombres dont les chiffres vérifient une condition, cherche d'abord les <strong>groupes de chiffres</strong> (rangés dans l'ordre croissant), puis compte les façons de les ordonner.</div>`
    },
    correction: `<p><strong>Étape 1 : les groupes de chiffres.</strong> Rangeons les trois chiffres dans l'ordre croissant : a ≤ b ≤ c, avec a, b, c ∈ {1, 2, 3} et a + b + c = 6.</p><ul><li>Si a = 1 : b + c = 5 avec 1 ≤ b ≤ c ≤ 3, donc (b, c) = (2, 3).</li><li>Si a = 2 : b + c = 4 avec 2 ≤ b ≤ c, donc (b, c) = (2, 2).</li><li>Si a = 3 : b + c = 3 avec b, c ≥ 3, impossible.</li></ul><p>Les seuls groupes sont {1, 2, 3} et {2, 2, 2}.</p><p><strong>Étape 2 : les ordres.</strong> Avec 1, 2, 3 (chiffres distincts), on obtient 3 × 2 × 1 = 6 nombres : 123, 132, 213, 231, 312, 321. Avec 2, 2, 2, un seul nombre : 222.</p><p>Au total : <strong>6 + 1 = 7</strong> nombres.</p><p><em>Pour aller plus loin :</em> combien de nombres à trois chiffres, écrits avec 1, 2, 3, ont une somme égale à 7 ? (Réponse : 6.)</p>`
  },
  {
    id: "combi-03",
    theme: "combi",
    niveau: 1,
    type: "demo",
    titre: `Poignées de main au club`,
    enonce: `<p>À la réunion du club de maths, il y a <strong>10</strong> personnes. Chaque personne serre la main de chacune des autres exactement une fois.</p><p>Démontrer qu'il y a eu exactement <strong>45</strong> poignées de main, en donnant <strong>deux</strong> raisonnements différents.</p>`,
    figure: ``,
    reponse: [],
    reponseTexte: ``,
    pistes: [
      `<p>Commence avec 3 personnes, puis 4 : combien de poignées de main ? Dessine des points reliés par des traits.</p>`,
      `<p>Première idée : fais arriver les personnes une par une. La 1re ne serre aucune main, la 2e serre 1 main, la 3e en serre 2… Que fait la 10e ?</p>`,
      `<p>Deuxième idée : chaque personne serre combien de mains ? Si on multiplie ce nombre par 10, a-t-on compté chaque poignée de main une fois, ou plus ?</p>`,
      `<p>Une poignée de main concerne <strong>deux</strong> personnes : dans le produit 10 × 9, chaque poignée est comptée deux fois. Il reste à diviser par 2.</p>`
    ],
    lecon: {
      titre: `Compter deux fois pour mieux diviser`,
      html: `<p>Pour compter des <strong>paires non ordonnées</strong> (poignées de main, matchs, segments…), une méthode très puissante :</p><ol><li>on compte les paires <strong>ordonnées</strong> (on distingue « A serre la main de B » et « B serre la main de A ») : c'est facile avec le principe multiplicatif, n × (n − 1) ;</li><li>chaque paire non ordonnée apparaît exactement <strong>deux</strong> fois dans ce comptage ;</li><li>on divise donc par 2.</li></ol><div class="calc">nombre de paires parmi n objets = n(n − 1)/2</div><div class="exemple">Avec n = 4 : 4 × 3 / 2 = 6. Vérifie avec A, B, C, D : AB, AC, AD, BC, BD, CD.</div><div class="astuce">Astuce olympique : on retrouve aussi 1 + 2 + … + (n − 1) = n(n − 1)/2. Deux façons de compter la même chose donnent une <strong>égalité</strong> : c'est le début du « double comptage ».</div>`
    },
    correction: `<p><strong>Méthode 1 (arrivées successives).</strong> Imaginons que les personnes arrivent une par une et serrent la main de toutes celles déjà présentes. La 1re ne serre aucune main, la 2e en serre 1, la 3e en serre 2, …, la 10e en serre 9. Chaque poignée est comptée exactement une fois (au moment où arrive la seconde des deux personnes). Le total est</p><div class="calc">0 + 1 + 2 + … + 9 = 45.</div><p><strong>Méthode 2 (double comptage).</strong> Chaque personne serre la main des 9 autres. Si l'on additionne, pour chacune des 10 personnes, le nombre de mains qu'elle serre, on obtient 10 × 9 = 90. Mais chaque poignée de main fait intervenir exactement deux personnes : elle a été comptée deux fois, une fois pour chacune. Le nombre de poignées est donc</p><div class="calc">90 ÷ 2 = 45.</div><p>Les deux méthodes donnent bien <strong>45</strong> poignées de main.</p><p><em>Pour aller plus loin :</em> en comparant les deux méthodes pour n personnes, on démontre la formule 1 + 2 + … + (n − 1) = n(n − 1)/2.</p>`,
    bareme: [
      `Méthode 1 : compter les nouvelles poignées à chaque arrivée et justifier que chaque poignée est comptée une seule fois.`,
      `Calculer 0 + 1 + … + 9 = 45.`,
      `Méthode 2 : obtenir 10 × 9 = 90 en comptant par personne.`,
      `Justifier la division par 2 (chaque poignée concerne deux personnes) et conclure à 45.`
    ]
  },
  {
    id: "combi-04",
    theme: "combi",
    niveau: 1,
    type: "reponse",
    titre: `Le chiffre porte-bonheur`,
    enonce: `<p>Combien d'entiers compris entre <strong>1 et 100</strong> (inclus) s'écrivent avec <strong>au moins un chiffre 7</strong> ?</p>`,
    figure: ``,
    reponse: ["19", "dix-neuf", "dixneuf"],
    reponseTexte: `19`,
    pistes: [
      `<p>Cite quelques exemples : 7, 17, 70, 77… Lesquels ont un 7 aux unités ? aux dizaines ?</p>`,
      `<p>Compte d'abord les nombres qui ont 7 comme chiffre des unités : 7, 17, 27, … Combien y en a-t-il ?</p>`,
      `<p>Compte ensuite ceux qui ont 7 comme chiffre des dizaines : de 70 à 79. Combien ?</p>`,
      `<p>Attention : un nombre a été compté dans les deux listes. Lequel ? Il faut le retirer une fois.</p>`
    ],
    lecon: {
      titre: `Additionner… sans compter deux fois`,
      html: `<p>Le <strong>principe additif</strong> : si un ensemble est découpé en morceaux <strong>sans chevauchement</strong>, son nombre d'éléments est la somme des nombres d'éléments des morceaux.</p><p>Mais si deux listes <strong>se chevauchent</strong>, les éléments communs sont comptés deux fois. On corrige :</p><div class="calc">nombre dans A ou B = nombre dans A + nombre dans B − nombre dans A et B</div><div class="exemple">Dans une classe, 12 élèves font du foot, 8 du judo, et 3 font les deux. Le nombre d'élèves faisant au moins l'un des deux sports est 12 + 8 − 3 = 17.</div><div class="astuce">Astuce olympique : « au moins un » se compte souvent plus facilement par le <strong>complémentaire</strong>. Ici : de 1 à 99, les nombres sans aucun 7 s'écrivent avec deux chiffres (dizaine, unité, en écrivant 05 pour 5) pris chacun parmi 9 valeurs, soit 9 × 9 = 81 écritures, dont « 00 » à exclure : 80 nombres. Donc 99 − 80 = 19 nombres avec un 7 (et 100 n'en a pas).</div>`
    },
    correction: `<p>Notons A l'ensemble des nombres de 1 à 100 dont le chiffre des unités est 7, et B ceux dont le chiffre des dizaines est 7.</p><ul><li>A = {7, 17, 27, 37, 47, 57, 67, 77, 87, 97} : 10 nombres.</li><li>B = {70, 71, …, 79} : 10 nombres.</li><li>A et B ont un seul élément commun : 77.</li></ul><p>Le nombre 100 ne contient pas de 7. Donc le nombre cherché est</p><div class="calc">10 + 10 − 1 = 19.</div><p><strong>Vérification par le complémentaire :</strong> un entier de 0 à 99 s'écrit avec deux chiffres (on complète par un 0 à gauche). Sans 7, chaque chiffre a 9 valeurs possibles : 81 écritures, dont 00 qui n'est pas dans l'intervalle, soit 80 nombres de 1 à 99 sans 7. Il reste 99 − 80 = 19.</p><p><em>Erreur fréquente :</em> répondre 20 en oubliant que 77 figure dans les deux listes.</p>`
  },
  {
    id: "combi-05",
    theme: "combi",
    niveau: 1,
    type: "reponse",
    titre: `L'étagère de Noé`,
    enonce: `<p>Noé possède <strong>5</strong> livres tous différents. De combien de façons peut-il les ranger côte à côte sur une étagère ?</p>`,
    figure: ``,
    reponse: ["120", "cent vingt", "centvingt"],
    reponseTexte: `120`,
    pistes: [
      `<p>Avec 2 livres, combien de rangements ? Avec 3 livres ? Écris-les.</p>`,
      `<p>Remplis l'étagère place par place : combien de livres peux-tu mettre à la première place ?</p>`,
      `<p>Une fois la première place remplie, combien de choix reste-t-il pour la deuxième ? pour la troisième ?</p>`,
      `<p>Le nombre de choix diminue de 1 à chaque place : 5, 4, 3, 2, 1. Applique le principe multiplicatif.</p>`
    ],
    lecon: {
      titre: `Les permutations et la factorielle`,
      html: `<p>Une <strong>permutation</strong> de n objets distincts est une façon de les ranger dans un ordre. On remplit les places une à une : n choix pour la 1re, n − 1 pour la 2e, …, 1 pour la dernière. Le nombre de permutations est donc</p><div class="calc">n! = n × (n − 1) × … × 2 × 1</div><p>On lit « factorielle n ». Par convention, 0! = 1.</p><div class="exemple">1! = 1, 2! = 2, 3! = 6, 4! = 24, 5! = 120, 6! = 720, 7! = 5040. La factorielle grandit extrêmement vite : 10! = 3 628 800.</div><div class="astuce">Astuce olympique : n! = n × (n − 1)!. C'est pratique pour calculer de proche en proche, et pour simplifier des fractions comme 8!/6! = 8 × 7 = 56.</div>`
    },
    correction: `<p>Remplissons l'étagère de gauche à droite.</p><ul><li>1re place : 5 livres possibles ;</li><li>2e place : il reste 4 livres ;</li><li>3e place : 3 livres ;</li><li>4e place : 2 livres ;</li><li>5e place : le dernier livre.</li></ul><p>Le nombre de choix à chaque étape ne dépend pas des choix précédents, donc par le principe multiplicatif :</p><div class="calc">5 × 4 × 3 × 2 × 1 = 5! = 120.</div><p>Noé a <strong>120</strong> façons de ranger ses livres.</p><p><em>Pour aller plus loin :</em> s'il veut que ses deux tomes d'Astérix soient côte à côte, on les « colle » : 4 blocs à ranger (4! = 24 façons) et 2 ordres pour les deux tomes, soit 48 rangements.</p>`
  },
  {
    id: "combi-06",
    theme: "combi",
    niveau: 1,
    type: "demo",
    titre: `Combien d'équipes au tournoi ?`,
    enonce: `<p>Lors d'un tournoi de handball, chaque équipe a rencontré chacune des autres équipes <strong>exactement une fois</strong>. Au total, <strong>28</strong> matchs ont été joués.</p><p>Démontrer qu'il y avait exactement <strong>8</strong> équipes.</p>`,
    figure: ``,
    reponse: [],
    reponseTexte: ``,
    pistes: [
      `<p>Avec 3 équipes, combien de matchs ? Avec 4 ? Avec 5 ? Fais un tableau.</p>`,
      `<p>Un match correspond à une paire d'équipes. Si n équipes participent, exprime le nombre de matchs en fonction de n (pense aux poignées de main).</p>`,
      `<p>Tu dois résoudre n(n − 1)/2 = 28, c'est-à-dire n(n − 1) = 56. Quel entier convient ?</p>`,
      `<p>Il reste à justifier qu'il n'y a pas d'autre solution : que se passe-t-il pour n(n − 1) quand n augmente ?</p>`
    ],
    lecon: {
      titre: `Matchs d'un tournoi : un outil qui marche dans les deux sens`,
      html: `<p>Dans un tournoi « toutes rondes » (chacun rencontre chacun une fois) à n équipes, chaque match est une <strong>paire</strong> d'équipes. Le nombre de matchs est</p><div class="calc">n(n − 1)/2</div><p>Valeurs à connaître : 2 → 1, 3 → 3, 4 → 6, 5 → 10, 6 → 15, 7 → 21, 8 → 28, 9 → 36, 10 → 45. Ce sont les <strong>nombres triangulaires</strong>.</p><p>On peut aussi faire le chemin inverse : connaissant le nombre de matchs, retrouver n. Pour prouver qu'il n'y a qu'une seule solution, on utilise la <strong>croissance</strong> : si n augmente, n(n − 1) augmente strictement.</p><div class="astuce">Astuce olympique : quand on résout une équation en entiers, trouver une solution ne suffit pas, il faut prouver qu'il n'y en a <strong>pas d'autre</strong>. La monotonie (une quantité qui ne fait qu'augmenter) est l'argument le plus simple.</div>`
    },
    correction: `<p>Soit n le nombre d'équipes (n ≥ 2). Un match est déterminé par la paire d'équipes qui s'affrontent, et chaque paire joue exactement une fois.</p><p><strong>Nombre de matchs.</strong> Chaque équipe joue n − 1 matchs. En additionnant sur toutes les équipes, on obtient n(n − 1), mais chaque match est compté deux fois (une fois pour chacune des deux équipes). Il y a donc n(n − 1)/2 matchs.</p><p><strong>Équation.</strong> On a n(n − 1)/2 = 28, soit n(n − 1) = 56. Pour n = 8 : 8 × 7 = 56, cela convient.</p><p><strong>Unicité.</strong> La quantité n(n − 1) augmente strictement avec n (pour n ≥ 1, les deux facteurs augmentent et sont positifs). Donc si n ≤ 7, n(n − 1) ≤ 7 × 6 = 42 < 56, et si n ≥ 9, n(n − 1) ≥ 9 × 8 = 72 > 56.</p><p>Ainsi n = 8 est la seule possibilité : il y avait exactement <strong>8 équipes</strong>.</p><p><em>Erreur fréquente :</em> écrire « 8 × 7 / 2 = 28 donc n = 8 » sans justifier qu'aucune autre valeur ne convient.</p>`,
    bareme: [
      `Établir que le nombre de matchs avec n équipes est n(n − 1)/2, avec justification.`,
      `Se ramener à n(n − 1) = 56 et vérifier que n = 8 convient.`,
      `Prouver l'unicité (croissance, ou encadrement n ≤ 7 et n ≥ 9).`,
      `Conclure clairement.`
    ]
  },
  {
    id: "combi-07",
    theme: "combi",
    niveau: 1,
    type: "reponse",
    titre: `Le podium de la course`,
    enonce: `<p>Huit coureurs participent à une course. Il n'y a pas d'ex æquo. Combien de <strong>podiums</strong> différents (1er, 2e, 3e, dans cet ordre) sont possibles ?</p>`,
    figure: ``,
    reponse: ["336"],
    reponseTexte: `336`,
    pistes: [
      `<p>Combien de coureurs peuvent terminer premiers ?</p>`,
      `<p>Une fois le premier connu, combien de coureurs peuvent être deuxièmes ? Et ensuite troisièmes ?</p>`,
      `<p>L'ordre compte ici : (Alice, Bob, Chloé) et (Bob, Alice, Chloé) sont deux podiums différents. Il ne faut donc pas diviser.</p>`,
      `<p>Calcule 8 × 7 × 6.</p>`
    ],
    lecon: {
      titre: `Les arrangements : choisir ET ordonner`,
      html: `<p>Un <strong>arrangement</strong> de k objets parmi n est une liste <strong>ordonnée</strong> de k objets distincts choisis parmi n. On remplit k places : n choix, puis n − 1, …, puis n − k + 1.</p><div class="calc">nombre d'arrangements = n × (n − 1) × … × (n − k + 1) = n!/(n − k)!</div><div class="exemple">Élire un président, un trésorier et un secrétaire (trois postes différents) dans un club de 10 personnes : 10 × 9 × 8 = 720 façons.</div><p>Quand k = n, on retrouve les permutations : n!.</p><div class="astuce">Astuce olympique : la question clé est toujours « <strong>l'ordre compte-t-il ?</strong> ». Si les places ont des rôles différents (1er/2e/3e, président/trésorier), oui. Si on forme juste un groupe, non : on verra qu'il faut alors diviser.</div>`
    },
    correction: `<p>Un podium est une liste ordonnée de 3 coureurs distincts parmi 8.</p><ul><li>Le 1er : 8 possibilités ;</li><li>le 2e : 7 possibilités (tout le monde sauf le 1er) ;</li><li>le 3e : 6 possibilités.</li></ul><p>Par le principe multiplicatif :</p><div class="calc">8 × 7 × 6 = 336.</div><p>Il y a <strong>336</strong> podiums possibles.</p><p><em>Pour aller plus loin :</em> si l'on demande seulement <em>quels</em> coureurs montent sur le podium (sans l'ordre), chaque groupe de 3 correspond à 3! = 6 podiums, donc il y a 336 ÷ 6 = 56 groupes.</p>`
  },
  {
    id: "combi-08",
    theme: "combi",
    niveau: 1,
    type: "reponse",
    titre: `Au moins un pile`,
    enonce: `<p>On lance <strong>trois fois</strong> une pièce de monnaie équilibrée. Quelle est la probabilité d'obtenir <strong>au moins une fois « pile »</strong> ?</p><p>Donner la réponse sous forme de fraction irréductible.</p>`,
    figure: ``,
    reponse: ["7/8", "0.875"],
    reponseTexte: `7/8`,
    pistes: [
      `<p>Combien y a-t-il de résultats possibles pour trois lancers ? Écris-les (PPP, PPF, …).</p>`,
      `<p>Les 8 résultats sont-ils tous aussi probables ? Pourquoi ?</p>`,
      `<p>Plutôt que de compter les issues avec au moins un pile, compte celles qui n'en ont <strong>aucun</strong>.</p>`,
      `<p>Une seule issue n'a aucun pile : FFF. La probabilité cherchée est 1 moins la probabilité de FFF.</p>`
    ],
    lecon: {
      titre: `Probabilités et événement contraire`,
      html: `<p>Quand toutes les issues d'une expérience sont <strong>équiprobables</strong> (même chance), la probabilité d'un événement est</p><div class="calc">P = (nombre d'issues favorables) / (nombre total d'issues)</div><p>Pour trois lancers d'une pièce équilibrée, les 2 × 2 × 2 = 8 suites de P et F sont équiprobables.</p><p>L'<strong>événement contraire</strong> de A (noté « non A ») est réalisé exactement quand A ne l'est pas. On a toujours</p><div class="calc">P(A) = 1 − P(non A)</div><div class="exemple">« Au moins un 6 en lançant deux dés » : le contraire est « aucun 6 », qui a 5 × 5 = 25 issues sur 36. Donc P = 1 − 25/36 = 11/36.</div><div class="astuce">Astuce olympique : dès que tu lis « au moins un », pense au contraire « aucun ». C'est presque toujours plus simple.</div>`
    },
    correction: `<p>Les issues sont les suites de trois lettres P ou F : il y en a 2 × 2 × 2 = 8 et, la pièce étant équilibrée, elles sont équiprobables.</p><p>L'événement contraire de « au moins un pile » est « aucun pile », c'est-à-dire FFF : 1 issue sur 8.</p><div class="calc">P(au moins un pile) = 1 − 1/8 = 7/8.</div><p>La probabilité cherchée est <strong>7/8</strong>.</p><p><em>Erreur fréquente :</em> penser qu'il y a « 4 cas » (0, 1, 2 ou 3 piles) équiprobables. Ce n'est pas le cas : 1 pile arrive de 3 façons (PFF, FPF, FFP), 0 pile d'une seule façon. Il faut toujours raisonner sur des issues vraiment équiprobables.</p>`
  },
  {
    id: "combi-09",
    theme: "combi",
    niveau: 1,
    type: "demo",
    titre: `Trente carrés cachés`,
    enonce: `<p>On considère une grille carrée de <strong>4 × 4</strong> cases (voir la figure).</p><p>Démontrer que l'on peut voir exactement <strong>30</strong> carrés dans cette figure (tous les carrés dont les côtés sont sur les lignes de la grille, quelle que soit leur taille).</p>`,
    figure: `<svg viewBox="0 0 320 220" width="300" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="60" y="10" width="200" height="200"/><line x1="110" y1="10" x2="110" y2="210"/><line x1="160" y1="10" x2="160" y2="210"/><line x1="210" y1="10" x2="210" y2="210"/><line x1="60" y1="60" x2="260" y2="60"/><line x1="60" y1="110" x2="260" y2="110"/><line x1="60" y1="160" x2="260" y2="160"/></g></svg>`,
    reponse: [],
    reponseTexte: ``,
    pistes: [
      `<p>Commence par une grille 2 × 2 : combien de carrés vois-tu ? (Il n'y en a pas que 4 !)</p>`,
      `<p>Classe les carrés selon leur <strong>taille</strong> : 1 × 1, 2 × 2, 3 × 3, 4 × 4. Combien y en a-t-il de chaque sorte ?</p>`,
      `<p>Un carré 2 × 2 est déterminé par la position de son coin en haut à gauche. Combien de positions possibles horizontalement ? verticalement ?</p>`,
      `<p>Pour un carré k × k dans une grille 4 × 4, le coin haut-gauche a (5 − k) positions dans chaque direction, donc (5 − k)<sup>2</sup> carrés. Il reste à additionner.</p>`
    ],
    lecon: {
      titre: `Compter des figures : trier par taille`,
      html: `<p>Pour compter des figures dans un dessin, on évite de « chercher à l'œil » : on <strong>classe</strong> les figures selon un critère (taille, orientation…), puis on compte chaque classe avec précision.</p><p>Pour repérer une figure sans ambiguïté, on choisit un <strong>point caractéristique</strong>, par exemple le coin en haut à gauche. Deux carrés de même taille sont égaux si et seulement si ils ont le même coin haut-gauche : pas d'oubli, pas de doublon.</p><div class="exemple">Dans une grille n × n, les carrés k × k sont au nombre de (n − k + 1)<sup>2</sup>. Pour n = 3 : 9 + 4 + 1 = 14 carrés.</div><div class="astuce">Astuce olympique : une grille n × n contient 1<sup>2</sup> + 2<sup>2</sup> + … + n<sup>2</sup> carrés. Pour un échiquier 8 × 8 : 204 carrés !</div>`
    },
    correction: `<p>Numérotons les lignes verticales de la grille 0, 1, 2, 3, 4 de gauche à droite et les lignes horizontales 0, 1, 2, 3, 4 de haut en bas. Tout carré de la figure a ses côtés sur ces lignes ; sa taille k (en nombre de cases) vaut 1, 2, 3 ou 4.</p><p><strong>Repérage.</strong> Un carré de taille k est entièrement déterminé par son coin haut-gauche (a, b), où a est le numéro de sa ligne verticale gauche et b celui de sa ligne horizontale du haut. Il faut a + k ≤ 4 et b + k ≤ 4, donc a et b prennent chacun les valeurs 0, 1, …, 4 − k, soit 5 − k valeurs. Il y a donc (5 − k)<sup>2</sup> carrés de taille k, et deux coins différents donnent deux carrés différents.</p><ul><li>taille 1 : 4<sup>2</sup> = 16 carrés ;</li><li>taille 2 : 3<sup>2</sup> = 9 carrés ;</li><li>taille 3 : 2<sup>2</sup> = 4 carrés ;</li><li>taille 4 : 1<sup>2</sup> = 1 carré.</li></ul><div class="calc">16 + 9 + 4 + 1 = 30.</div><p>Chaque carré a une seule taille, donc ces quatre classes ne se chevauchent pas : la figure contient exactement <strong>30 carrés</strong>.</p><p><em>Pour aller plus loin :</em> et si l'on compte aussi les carrés « penchés » dont les sommets sont des nœuds de la grille ? (Indice : dans chaque carré droit de taille k, on peut inscrire k − 1 carrés penchés.)</p>`,
    bareme: [
      `Classer les carrés par taille (1, 2, 3, 4).`,
      `Justifier le nombre de carrés de chaque taille (repérage par un coin, (5 − k)² positions).`,
      `Faire la somme 16 + 9 + 4 + 1 = 30.`,
      `Expliquer pourquoi il n'y a ni oubli ni doublon.`
    ]
  },
  {
    id: "combi-10",
    theme: "combi",
    niveau: 1,
    type: "reponse",
    titre: `Mots de passe courts`,
    enonce: `<p>Un mot de passe est formé de <strong>1, 2 ou 3 lettres</strong>, chaque lettre étant A, B ou C (les lettres peuvent se répéter, et l'ordre compte : AB et BA sont différents).</p><p>Combien de mots de passe différents existe-t-il ?</p>`,
    figure: ``,
    reponse: ["39", "trente-neuf", "trenteneuf"],
    reponseTexte: `39`,
    pistes: [
      `<p>Combien de mots de passe d'une seule lettre ?</p>`,
      `<p>Pour les mots de 2 lettres, combien de choix pour la 1re lettre ? pour la 2e ?</p>`,
      `<p>Les mots de 1, 2 et 3 lettres forment trois familles séparées. Faut-il additionner ou multiplier les nombres obtenus ?</p>`,
      `<p>Il y a 3 mots d'une lettre, 3<sup>2</sup> de deux lettres et 3<sup>3</sup> de trois lettres : additionne.</p>`
    ],
    lecon: {
      titre: `Principe additif et principe multiplicatif ensemble`,
      html: `<p>Deux règles fondamentales :</p><ul><li><strong>« ET » → on multiplie</strong> : pour choisir une 1re lettre ET une 2e lettre, on multiplie les nombres de choix.</li><li><strong>« OU » → on additionne</strong> : si les objets à compter se répartissent en cas <strong>disjoints</strong> (qui ne se chevauchent pas), on additionne les nombres de chaque cas.</li></ul><p>Pour des mots de longueur k sur un alphabet de m lettres (répétitions permises), il y a m<sup>k</sup> mots.</p><div class="exemple">Plaques « deux lettres puis trois chiffres » : 26 × 26 × 10 × 10 × 10 = 676 000.</div><div class="astuce">Astuce olympique : 1 + 3 + 3<sup>2</sup> + … + 3<sup>n</sup> = (3<sup>n+1</sup> − 1)/2. Par exemple 1 + 3 + 9 + 27 = (81 − 1)/2 = 40. Les sommes de puissances reviennent souvent.</div>`
    },
    correction: `<p>On sépare selon la longueur du mot de passe (cas disjoints) :</p><ul><li>1 lettre : 3 mots (A, B, C) ;</li><li>2 lettres : 3 × 3 = 9 mots (3 choix pour chaque lettre) ;</li><li>3 lettres : 3 × 3 × 3 = 27 mots.</li></ul><p>Par le principe additif :</p><div class="calc">3 + 9 + 27 = 39.</div><p>Il y a <strong>39</strong> mots de passe.</p><p><em>Erreur fréquente :</em> multiplier 3 × 9 × 27. Un mot de passe a <strong>une</strong> longueur : on est dans une situation « ou », pas « et ».</p>`
  },
  {
    id: "combi-11",
    theme: "combi",
    niveau: 1,
    type: "reponse",
    titre: `Deux boules de la même couleur`,
    enonce: `<p>Une urne contient <strong>3 boules rouges</strong> et <strong>2 boules bleues</strong>, indiscernables au toucher. On tire <strong>simultanément</strong> deux boules au hasard.</p><p>Quelle est la probabilité que les deux boules soient de la <strong>même couleur</strong> ? Donner une fraction irréductible.</p>`,
    figure: ``,
    reponse: ["2/5", "0.4", "4/10"],
    reponseTexte: `2/5`,
    pistes: [
      `<p>Numérote les boules : R1, R2, R3, B1, B2. Les boules deviennent ainsi toutes différentes, ce qui rend les tirages équiprobables.</p>`,
      `<p>Combien de paires de boules différentes peut-on tirer ? (Pense aux poignées de main entre 5 personnes.)</p>`,
      `<p>Combien de paires sont formées de deux rouges ? de deux bleues ?</p>`,
      `<p>Il y a 10 paires en tout, 3 paires rouges et 1 paire bleue.</p>`
    ],
    lecon: {
      titre: `Rendre les objets distincts pour avoir l'équiprobabilité`,
      html: `<p>Dans une urne, des boules « de même couleur » ont en réalité chacune la même chance d'être tirée. Pour calculer une probabilité, on <strong>numérote</strong> les boules : toutes les issues (paires, listes…) deviennent alors équiprobables.</p><p>Un tirage <strong>simultané</strong> de 2 boules parmi n correspond à une paire non ordonnée : il y en a n(n − 1)/2.</p><div class="exemple">Urne avec 4 boules numérotées 1, 2, 3, 4 : 6 paires. La probabilité que la somme des deux numéros soit paire est 2/6 = 1/3 (paires {1, 3} et {2, 4}).</div><div class="astuce">Astuce olympique : on peut aussi raisonner avec des tirages successifs (ordonnés). Probabilité de deux rouges = 3/5 × 2/4 = 3/10. Les deux méthodes doivent donner le même résultat, c'est une bonne vérification.</div>`
    },
    correction: `<p>Numérotons les boules R1, R2, R3, B1, B2. Un tirage simultané est une paire de boules ; il y a 5 × 4 / 2 = 10 paires, toutes équiprobables.</p><ul><li>Paires de deux rouges : {R1, R2}, {R1, R3}, {R2, R3}, soit 3 paires ;</li><li>paires de deux bleues : {B1, B2}, soit 1 paire.</li></ul><div class="calc">P(même couleur) = (3 + 1)/10 = 4/10 = 2/5.</div><p>La probabilité est <strong>2/5</strong>.</p><p><em>Vérification :</em> avec des tirages successifs, P(RR) = 3/5 × 2/4 = 3/10 et P(BB) = 2/5 × 1/4 = 1/10, total 4/10 = 2/5.</p><p><em>Erreur fréquente :</em> dire qu'il y a 3 « sortes de paires » (RR, RB, BB) donc 2 chances sur 3. Ces trois cas ne sont pas équiprobables (RB arrive dans 6 paires sur 10).</p>`
  },
  {
    id: "combi-12",
    theme: "combi",
    niveau: 1,
    type: "demo",
    titre: `Délégués et binômes`,
    enonce: `<p>Une classe compte <strong>25</strong> élèves.</p><ol><li>Montrer qu'il y a <strong>600</strong> façons d'élire un délégué et un suppléant (deux élèves différents, les rôles sont distincts).</li><li>En déduire, en le justifiant soigneusement, qu'il y a <strong>300</strong> façons de choisir un binôme de deux élèves pour un exposé (les deux élèves ont le même rôle).</li></ol>`,
    figure: ``,
    reponse: [],
    reponseTexte: ``,
    pistes: [
      `<p>Pour la question 1 : combien de choix pour le délégué ? Une fois qu'il est choisi, combien pour le suppléant ?</p>`,
      `<p>Pour la question 2 : prends un binôme, par exemple {Inès, Tom}. À combien de choix « délégué + suppléant » de la question 1 correspond-il ?</p>`,
      `<p>Chaque binôme donne exactement 2 choix de la question 1 : (Inès délégué, Tom suppléant) et (Tom délégué, Inès suppléant). Et réciproquement, chaque choix de la question 1 donne un seul binôme.</p>`,
      `<p>On a donc « 2 fois plus » de choix ordonnés que de binômes. Il reste à l'écrire proprement.</p>`
    ],
    lecon: {
      titre: `Passer de l'ordonné au non ordonné`,
      html: `<p>Quand on compte des objets <strong>ordonnés</strong> alors qu'on veut des groupes <strong>non ordonnés</strong>, on utilise la règle :</p><div class="calc">nombre de groupes = nombre de listes ordonnées / nombre d'ordres possibles pour un groupe</div><p>Cette division est valable parce que <strong>chaque groupe correspond au même nombre de listes</strong> (ici 2 pour un binôme, 3! = 6 pour un trio, k! pour un groupe de k).</p><div class="exemple">Choisir 3 élèves parmi 25 pour une équipe : 25 × 24 × 23 = 13 800 listes ordonnées, chaque équipe apparaît 6 fois, donc 2 300 équipes.</div><div class="astuce">Astuce olympique : c'est le « principe du berger » : pour compter les moutons, on compte les pattes et on divise par 4. Il faut que <em>chaque</em> mouton ait bien 4 pattes !</div>`
    },
    correction: `<p><strong>1.</strong> On choisit d'abord le délégué : 25 possibilités. Le suppléant doit être différent : il reste 24 possibilités, quel que soit le délégué choisi. Par le principe multiplicatif, il y a 25 × 24 = <strong>600</strong> choix (délégué, suppléant).</p><p><strong>2.</strong> À chaque choix (délégué, suppléant), associons le binôme formé de ces deux élèves.</p><ul><li>Tout binôme {X, Y} est obtenu, car il provient des choix (X, Y) et (Y, X).</li><li>Il est obtenu par exactement ces <strong>deux</strong> choix, qui sont distincts puisque X ≠ Y.</li></ul><p>Ainsi, les 600 choix ordonnés se regroupent par paquets de 2, un paquet par binôme. Le nombre de binômes est donc</p><div class="calc">600 ÷ 2 = 300.</div><p><em>Pour aller plus loin :</em> ce nombre s'écrit C(25, 2) = 25 × 24 / 2. On retrouvera bientôt ces « coefficients binomiaux ».</p>`,
    bareme: [
      `Question 1 : 25 choix puis 24 choix, principe multiplicatif, 600.`,
      `Question 2 : associer à chaque choix ordonné le binôme correspondant.`,
      `Justifier que chaque binôme correspond à exactement 2 choix ordonnés.`,
      `Conclure 600 ÷ 2 = 300.`
    ]
  },
  {
    id: "combi-13",
    theme: "combi",
    niveau: 2,
    type: "reponse",
    titre: `Le comité des fêtes`,
    enonce: `<p>Dans un club de <strong>10</strong> personnes, on doit former un comité de <strong>3</strong> personnes (sans rôle particulier : seul compte qui en fait partie).</p><p>Combien de comités différents peut-on former ?</p>`,
    figure: ``,
    reponse: ["120", "cent vingt", "centvingt"],
    reponseTexte: `120`,
    pistes: [
      `<p>Si l'on choisissait un président, un vice-président et un secrétaire, combien de choix y aurait-il ?</p>`,
      `<p>Un même comité {A, B, C} correspond à combien de ces choix « avec rôles » ?</p>`,
      `<p>Les 3 personnes d'un comité peuvent être ordonnées de 3! = 6 façons.</p>`,
      `<p>Calcule (10 × 9 × 8) ÷ 6.</p>`
    ],
    lecon: {
      titre: `Les combinaisons C(n, k)`,
      html: `<p>Le nombre de façons de choisir <strong>k objets parmi n</strong>, sans tenir compte de l'ordre, se note <span class="m">C(n, k)</span> (on lit « k parmi n » ; on le trouve aussi écrit comme un n au-dessus d'un k entre parenthèses).</p><p>On compte les listes ordonnées (n × (n − 1) × … × (n − k + 1)) et on divise par le nombre d'ordres d'un même groupe (k!) :</p><div class="calc">C(n, k) = n × (n − 1) × … × (n − k + 1) / k! = n! / (k! (n − k)!)</div><div class="exemple">C(5, 2) = 5 × 4 / 2 = 10 ; C(6, 3) = 6 × 5 × 4 / 6 = 20 ; C(n, 1) = n ; C(n, 0) = C(n, n) = 1.</div><p><strong>Symétrie :</strong> C(n, k) = C(n, n − k), car choisir les k élus revient à choisir les n − k non-élus.</p><div class="astuce">Astuce olympique : pour calculer C(n, k) de tête, simplifie avant de multiplier : C(10, 3) = (10 × 9 × 8)/(3 × 2 × 1) = 10 × 3 × 4 = 120.</div>`
    },
    correction: `<p>Comptons d'abord les choix <strong>ordonnés</strong> de 3 personnes distinctes : 10 × 9 × 8 = 720.</p><p>Un comité donné, par exemple {A, B, C}, correspond à toutes les façons d'ordonner ses trois membres : ABC, ACB, BAC, BCA, CAB, CBA, soit 3! = 6 listes. Chaque comité est donc compté exactement 6 fois.</p><div class="calc">C(10, 3) = 720 ÷ 6 = 120.</div><p>On peut former <strong>120</strong> comités.</p><p><em>Pour aller plus loin :</em> vérifie que C(10, 7) = 120 aussi. Pourquoi est-ce évident sans calcul ?</p>`
  },
  {
    id: "combi-14",
    theme: "combi",
    niveau: 2,
    type: "demo",
    titre: `La règle du triangle de Pascal`,
    enonce: `<p>On note C(n, k) le nombre de façons de choisir k objets parmi n (sans ordre).</p><p>Démontrer, <strong>sans utiliser de formule avec des factorielles</strong>, que pour tous entiers 1 ≤ k ≤ n − 1 :</p><div class="calc">C(n, k) = C(n − 1, k − 1) + C(n − 1, k).</div><p>En déduire les 7 premières lignes du triangle de Pascal et la valeur de C(6, 3).</p>`,
    figure: ``,
    reponse: [],
    reponseTexte: ``,
    pistes: [
      `<p>Donne un sens concret : C(n, k) est le nombre d'équipes de k joueurs parmi n. Vérifie l'égalité pour n = 4, k = 2.</p>`,
      `<p>Parmi les n personnes, choisis-en une en particulier : appelons-la Zoé. Toute équipe de k personnes contient Zoé… ou ne la contient pas.</p>`,
      `<p>Combien d'équipes contiennent Zoé ? (Il faut compléter l'équipe avec k − 1 personnes parmi les n − 1 autres.) Combien ne la contiennent pas ?</p>`,
      `<p>Les deux cas sont disjoints et couvrent toutes les équipes : le principe additif conclut. Pour le triangle, chaque nombre est la somme des deux nombres au-dessus de lui.</p>`
    ],
    lecon: {
      titre: `Le triangle de Pascal et la preuve « par un élément distingué »`,
      html: `<p>On range les C(n, k) en triangle : la ligne n contient C(n, 0), C(n, 1), …, C(n, n).</p><div class="calc">1<br>1 1<br>1 2 1<br>1 3 3 1<br>1 4 6 4 1<br>1 5 10 10 5 1<br>1 6 15 20 15 6 1</div><p>Chaque ligne commence et finit par 1, et chaque nombre intérieur est la <strong>somme des deux nombres situés au-dessus</strong>. C'est la <strong>formule de Pascal</strong>.</p><p><strong>Preuve combinatoire :</strong> au lieu de calculer, on montre que les deux membres comptent la même chose. On isole un élément particulier et on sépare les cas selon qu'il est choisi ou non.</p><div class="astuce">Astuce olympique : la somme de la ligne n vaut 2<sup>n</sup> (1, 2, 4, 8, 16…), et le triangle est symétrique. Ces propriétés se démontrent toutes « en racontant une histoire de choix ».</div>`
    },
    correction: `<p>Soit E un ensemble de n personnes et Zoé l'une d'elles. C(n, k) est le nombre de groupes de k personnes de E. Répartissons ces groupes en deux catégories disjointes.</p><p><strong>Groupes contenant Zoé.</strong> Un tel groupe est formé de Zoé et de k − 1 autres personnes choisies parmi les n − 1 personnes différentes de Zoé. Réciproquement, tout choix de k − 1 personnes parmi ces n − 1, auquel on ajoute Zoé, donne un tel groupe. Il y en a donc C(n − 1, k − 1).</p><p><strong>Groupes ne contenant pas Zoé.</strong> Ce sont exactement les groupes de k personnes choisies parmi les n − 1 autres : il y en a C(n − 1, k).</p><p>Tout groupe est dans une et une seule catégorie, donc par le principe additif :</p><div class="calc">C(n, k) = C(n − 1, k − 1) + C(n − 1, k).</div><p><strong>Triangle.</strong> Avec C(n, 0) = C(n, n) = 1 et cette règle, on obtient les lignes 0 à 6 :</p><div class="calc">1 / 1 1 / 1 2 1 / 1 3 3 1 / 1 4 6 4 1 / 1 5 10 10 5 1 / 1 6 15 20 15 6 1</div><p>d'où <strong>C(6, 3) = 10 + 10 = 20</strong> (vérification : 6 × 5 × 4 / 6 = 20).</p>`,
    bareme: [
      `Interpréter C(n, k) comme un nombre de groupes et distinguer un élément particulier.`,
      `Compter les groupes contenant cet élément : C(n − 1, k − 1), avec justification.`,
      `Compter les groupes ne le contenant pas : C(n − 1, k).`,
      `Invoquer le principe additif (cas disjoints et exhaustifs).`,
      `Construire le triangle jusqu'à la ligne 6 et lire C(6, 3) = 20.`
    ]
  },
  {
    id: "combi-15",
    theme: "combi",
    niveau: 2,
    type: "reponse",
    titre: `La fourmi sur le quadrillage`,
    enonce: `<p>Une fourmi part du coin A d'un quadrillage de <strong>5 cases de large</strong> et <strong>3 cases de haut</strong>, et veut rejoindre le coin opposé B en suivant les lignes. À chaque pas, elle avance d'un côté de case soit <strong>vers la droite</strong>, soit <strong>vers le haut</strong>.</p><p>Combien de chemins différents peut-elle emprunter ?</p>`,
    figure: `<svg viewBox="0 0 320 200" width="300" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="1.5" fill="none"><rect x="35" y="20" width="250" height="150"/><line x1="85" y1="20" x2="85" y2="170"/><line x1="135" y1="20" x2="135" y2="170"/><line x1="185" y1="20" x2="185" y2="170"/><line x1="235" y1="20" x2="235" y2="170"/><line x1="35" y1="70" x2="285" y2="70"/><line x1="35" y1="120" x2="285" y2="120"/></g><circle cx="35" cy="170" r="5" fill="currentColor"/><circle cx="285" cy="20" r="5" fill="currentColor"/><text x="14" y="190" font-size="14" fill="currentColor">A</text><text x="292" y="16" font-size="14" fill="currentColor">B</text></svg>`,
    reponse: ["56", "cinquante-six", "cinquantesix"],
    reponseTexte: `56`,
    pistes: [
      `<p>Combien de pas vers la droite la fourmi fait-elle en tout ? Et vers le haut ? Est-ce toujours pareil, quel que soit le chemin ?</p>`,
      `<p>Code un chemin par un mot de 8 lettres, D (droite) ou H (haut). Par exemple DDHDDHDH. Chaque chemin donne-t-il un seul mot ? Chaque mot avec 5 D et 3 H donne-t-il un chemin ?</p>`,
      `<p>Compter les mots, c'est choisir les <strong>positions</strong> des 3 lettres H parmi les 8 positions.</p>`,
      `<p>Autre méthode : écris à chaque nœud le nombre de chemins pour y arriver. Chaque nombre est la somme de celui de gauche et de celui du dessous.</p>`
    ],
    lecon: {
      titre: `Chemins sur une grille et coefficients binomiaux`,
      html: `<p>Un chemin « droite/haut » de (0, 0) à (a, b) comporte toujours <strong>a pas D et b pas H</strong>, soit a + b pas. Le coder par un mot de D et de H établit une <strong>bijection</strong> (correspondance un à un) entre chemins et mots. Choisir un mot revient à choisir les positions des H :</p><div class="calc">nombre de chemins = C(a + b, b)</div><p><strong>Deuxième méthode, sans formule :</strong> on écrit à chaque nœud le nombre de chemins qui y mènent. Sur les bords gauche et bas, c'est 1 ; ailleurs, c'est la somme du nœud de gauche et du nœud du dessous (on arrive forcément par l'un des deux). On voit réapparaître le <strong>triangle de Pascal</strong>, penché.</p><div class="astuce">Astuce olympique : la méthode « on écrit les nombres sur les nœuds » marche encore quand la grille a des trous, des points interdits ou des formes bizarres. C'est souvent la plus sûre en concours.</div>`
    },
    correction: `<p>Tout chemin de A à B comporte exactement 5 pas vers la droite et 3 pas vers le haut, donc 8 pas. Codons-le par la suite de ses pas : un mot de 8 lettres contenant 5 D et 3 H. Inversement, tout tel mot décrit un chemin de A à B. Il y a donc autant de chemins que de mots.</p><p>Un mot est entièrement déterminé par les positions de ses 3 lettres H parmi les 8 positions :</p><div class="calc">C(8, 3) = 8 × 7 × 6 / (3 × 2 × 1) = 56.</div><p><strong>Vérification par les nœuds</strong> (une ligne de nœuds par ligne de la grille, de bas en haut) :</p><div class="calc">1 1 1 1 1 1<br>1 2 3 4 5 6<br>1 3 6 10 15 21<br>1 4 10 20 35 56</div><p>La fourmi a <strong>56</strong> chemins possibles.</p>`
  },
  {
    id: "combi-16",
    theme: "combi",
    niveau: 2,
    type: "reponse",
    titre: `Anagrammes d'ANIMATH`,
    enonce: `<p>Une anagramme d'un mot est un mot (ayant un sens ou non) formé en réordonnant toutes ses lettres. Par exemple, MANITHA est une anagramme de ANIMATH.</p><p>Combien le mot <strong>ANIMATH</strong> possède-t-il d'anagrammes (en comptant le mot lui-même) ?</p>`,
    figure: ``,
    reponse: ["2520"],
    reponseTexte: `2520`,
    pistes: [
      `<p>Combien de lettres le mot contient-il ? Lesquelles sont répétées ?</p>`,
      `<p>Si les deux A étaient différents (A<sub>1</sub> et A<sub>2</sub>), combien y aurait-il d'anagrammes ?</p>`,
      `<p>Chaque anagramme « réelle » correspond à combien d'anagrammes avec A<sub>1</sub> et A<sub>2</sub> ?</p>`,
      `<p>Calcule 7! ÷ 2.</p>`
    ],
    lecon: {
      titre: `Anagrammes avec lettres répétées`,
      html: `<p>Si un mot a n lettres, dont une lettre répétée a fois, une autre b fois, etc., le nombre d'anagrammes est</p><div class="calc">n! / (a! × b! × …)</div><p><strong>Pourquoi ?</strong> On rend les lettres identiques distinctes (on les numérote) : il y a n! mots. Puis on efface les numéros : les a! façons de permuter les copies d'une même lettre donnent le même mot, et de même pour les autres lettres répétées.</p><div class="exemple">BANANE : 6 lettres, A deux fois, N deux fois : 6!/(2! × 2!) = 720/4 = 180 anagrammes.</div><div class="astuce">Astuce olympique : autre méthode, on place les lettres une sorte à la fois en choisissant leurs positions. Pour BANANE : C(6, 2) positions pour les A, puis C(4, 2) pour les N, puis 2 × 1 pour B et E : 15 × 6 × 2 = 180. Même résultat, et c'est pratique quand il y a beaucoup de répétitions.</div>`
    },
    correction: `<p>ANIMATH comporte 7 lettres : A, N, I, M, A, T, H. Seule la lettre A est répétée (2 fois).</p><p>Numérotons les A : A<sub>1</sub>, N, I, M, A<sub>2</sub>, T, H sont 7 lettres distinctes, qui ont 7! = 5040 permutations.</p><p>Quand on efface les numéros, chaque anagramme de ANIMATH provient d'exactement 2 permutations (celle où A<sub>1</sub> est avant A<sub>2</sub> et celle où c'est l'inverse). Donc le nombre d'anagrammes est</p><div class="calc">5040 ÷ 2 = 2520.</div><p><strong>Autre méthode :</strong> on choisit les 2 positions des A parmi 7 : C(7, 2) = 21, puis on place N, I, M, T, H dans les 5 positions restantes : 5! = 120. Total 21 × 120 = 2520.</p><p>ANIMATH a <strong>2520</strong> anagrammes.</p>`
  },
  {
    id: "combi-17",
    theme: "combi",
    niveau: 2,
    type: "demo",
    titre: `Toutes les pizzas possibles`,
    enonce: `<p>Un pizzaïolo propose <strong>n</strong> ingrédients différents (n ≥ 1). Une pizza est définie par l'ensemble des ingrédients qu'on y met : on peut en mettre autant qu'on veut, y compris aucun (pizza « nature »).</p><ol><li>Démontrer qu'il existe exactement <strong>2<sup>n</sup></strong> pizzas différentes.</li><li>En déduire que C(n, 0) + C(n, 1) + C(n, 2) + … + C(n, n) = 2<sup>n</sup>.</li></ol>`,
    figure: ``,
    reponse: [],
    reponseTexte: ``,
    pistes: [
      `<p>Avec 2 ingrédients (tomate, fromage), liste toutes les pizzas. Avec 3 ?</p>`,
      `<p>Pour chaque ingrédient, le pizzaïolo se pose une question à deux réponses. Laquelle ?</p>`,
      `<p>Code chaque pizza par un mot de n lettres, O ou N (oui/non) : la k-ième lettre dit si le k-ième ingrédient est présent. Est-ce une correspondance un à un ?</p>`,
      `<p>Pour la question 2, compte les mêmes pizzas autrement : combien de pizzas ont exactement k ingrédients ? Puis additionne sur k.</p>`
    ],
    lecon: {
      titre: `Bijection avec des mots binaires`,
      html: `<p>Une <strong>bijection</strong> entre deux ensembles est une correspondance qui associe à chaque élément du premier <strong>exactement un</strong> élément du second, et réciproquement. Deux ensembles en bijection ont le même nombre d'éléments.</p><p>Les <strong>sous-ensembles</strong> d'un ensemble {1, 2, …, n} sont en bijection avec les <strong>mots binaires</strong> de longueur n (des 0 et des 1) : le k-ième chiffre vaut 1 si k est dans le sous-ensemble, 0 sinon.</p><div class="exemple">Pour n = 4, le sous-ensemble {1, 3, 4} correspond au mot 1011, et le mot 0100 correspond à {2}.</div><p>Comme il y a 2<sup>n</sup> mots binaires de longueur n, un ensemble à n éléments a 2<sup>n</sup> sous-ensembles.</p><div class="astuce">Astuce olympique : si tu dois compter des objets compliqués, cherche une bijection avec des objets simples (mots, chemins, suites…). Pour la rédiger : dire comment on passe de l'un à l'autre, et expliquer pourquoi on peut revenir en arrière.</div>`
    },
    correction: `<p>Numérotons les ingrédients 1, 2, …, n.</p><p><strong>1.</strong> À une pizza, associons le mot de n lettres dont la k-ième lettre est O si l'ingrédient k est présent et N sinon. Réciproquement, un mot de n lettres O/N détermine une unique pizza : celle qui contient exactement les ingrédients dont la lettre est O. On a donc une bijection entre les pizzas et les mots de n lettres O/N.</p><p>Pour former un tel mot, on a 2 choix pour chacune des n lettres, indépendamment : 2 × 2 × … × 2 = 2<sup>n</sup> mots. Il y a donc <strong>2<sup>n</sup> pizzas</strong>.</p><p><strong>2.</strong> Classons les pizzas selon leur nombre k d'ingrédients (k = 0, 1, …, n). Les pizzas à k ingrédients correspondent aux choix de k ingrédients parmi n : il y en a C(n, k). Ces classes sont disjointes et contiennent toutes les pizzas, donc</p><div class="calc">C(n, 0) + C(n, 1) + … + C(n, n) = 2<sup>n</sup>.</div><p><em>Vérification :</em> pour n = 4, 1 + 4 + 6 + 4 + 1 = 16 = 2<sup>4</sup>.</p>`,
    bareme: [
      `Définir clairement le codage d'une pizza par un mot O/N (ou 0/1).`,
      `Justifier que c'est une bijection (on peut revenir en arrière).`,
      `Compter 2ⁿ mots par le principe multiplicatif.`,
      `Classer les pizzas par nombre d'ingrédients et conclure à la somme des C(n, k).`
    ]
  },
  {
    id: "combi-18",
    theme: "combi",
    niveau: 2,
    type: "reponse",
    titre: `Chiffres qui montent`,
    enonce: `<p>Un nombre est dit <strong>ascendant</strong> si chacun de ses chiffres est strictement plus grand que le précédent (par exemple 1379 ou 2568, mais pas 1224 ni 3120).</p><p>Combien y a-t-il de nombres ascendants à <strong>4 chiffres</strong> ?</p>`,
    figure: ``,
    reponse: ["126", "cent vingt-six"],
    reponseTexte: `126`,
    pistes: [
      `<p>Le chiffre 0 peut-il apparaître dans un nombre ascendant à 4 chiffres ? Pourquoi ?</p>`,
      `<p>Prends 4 chiffres différents parmi 1, …, 9, par exemple {7, 2, 9, 4}. Combien de nombres ascendants peux-tu écrire avec exactement ces chiffres ?</p>`,
      `<p>Un nombre ascendant est donc la même chose qu'un <strong>ensemble</strong> de 4 chiffres parmi {1, …, 9}.</p>`,
      `<p>Calcule C(9, 4).</p>`
    ],
    lecon: {
      titre: `Quand l'ordre est imposé, il ne reste que le choix`,
      html: `<p>Si une contrainte impose <strong>l'ordre</strong> dans lequel les éléments apparaissent (croissant, alphabétique…), alors une liste est entièrement déterminée par <strong>l'ensemble</strong> de ses éléments. Compter les listes revient à compter les sous-ensembles : c'est un coefficient binomial.</p><div class="exemple">Nombre de façons de tirer 3 numéros distincts parmi 1 à 10 et de les écrire dans l'ordre croissant : C(10, 3) = 120.</div><p>Attention aux chiffres interdits : un nombre ne commence pas par 0. Ici, 0 ne peut pas être dans un nombre ascendant, car il serait forcément en première position.</p><div class="astuce">Astuce olympique : pour les chiffres « croissants au sens large » (1224 autorisé), on se ramène au cas strict par une astuce de décalage : on ajoute 0, 1, 2, 3 aux chiffres successifs. C'est une bijection classique.</div>`
    },
    correction: `<p>Dans un nombre ascendant, le premier chiffre est le plus petit ; il n'est pas 0 (un nombre ne commence pas par 0), donc tous les chiffres sont dans {1, 2, …, 9} et sont distincts.</p><p>À un nombre ascendant, associons l'ensemble de ses 4 chiffres. Inversement, un ensemble de 4 chiffres distincts de {1, …, 9} donne exactement un nombre ascendant : on écrit ses chiffres dans l'ordre croissant. C'est une bijection, donc le nombre cherché est</p><div class="calc">C(9, 4) = 9 × 8 × 7 × 6 / (4 × 3 × 2 × 1) = 126.</div><p>Il y a <strong>126</strong> nombres ascendants à 4 chiffres.</p><p><em>Pour aller plus loin :</em> combien y a-t-il de nombres ascendants en tout (de 1 à 9 chiffres) ? C'est le nombre de sous-ensembles non vides de {1, …, 9} : 2<sup>9</sup> − 1 = 511.</p>`
  },
  {
    id: "combi-19",
    theme: "combi",
    niveau: 2,
    type: "reponse",
    titre: `Multiples de 2 ou de 3`,
    enonce: `<p>Combien d'entiers compris entre <strong>1 et 100</strong> (inclus) sont divisibles <strong>par 2 ou par 3</strong> (ou par les deux) ?</p>`,
    figure: ``,
    reponse: ["67", "soixante-sept"],
    reponseTexte: `67`,
    pistes: [
      `<p>Combien de multiples de 2 entre 1 et 100 ? Combien de multiples de 3 ?</p>`,
      `<p>Si tu additionnes ces deux nombres, certains entiers ont été comptés deux fois. Lesquels ?</p>`,
      `<p>Un entier divisible par 2 et par 3 est divisible par 6. Combien de multiples de 6 entre 1 et 100 ?</p>`,
      `<p>Il y a 50 multiples de 2, 33 multiples de 3 et 16 multiples de 6.</p>`
    ],
    lecon: {
      titre: `Inclusion-exclusion pour deux ensembles`,
      html: `<p>Pour deux ensembles A et B (le symbole |A| désigne le nombre d'éléments de A) :</p><div class="calc">|A ∪ B| = |A| + |B| − |A ∩ B|</div><p>A ∪ B (« A union B ») contient les éléments qui sont dans A <em>ou</em> dans B ; A ∩ B (« A inter B ») ceux qui sont dans les deux. En additionnant |A| et |B|, les éléments de A ∩ B sont comptés deux fois : on les retire une fois.</p><p><strong>Outil utile :</strong> le nombre de multiples de d entre 1 et N est le quotient de la division euclidienne de N par d.</p><div class="exemple">De 1 à 50 : multiples de 4 → 12, multiples de 6 → 8, multiples de 4 et de 6, c'est-à-dire de 12 → 4. Donc 12 + 8 − 4 = 16 multiples de 4 ou de 6.</div><div class="astuce">Astuce olympique : « divisible par a et par b » équivaut à « divisible par le PPCM de a et b », et pas forcément par a × b ! (Par 4 et 6 → par 12, pas par 24.)</div>`
    },
    correction: `<p>Notons A l'ensemble des multiples de 2 et B celui des multiples de 3 entre 1 et 100.</p><ul><li>|A| = 50 (de 2 à 100) ;</li><li>|B| = 33 (de 3 à 99, car 100 = 3 × 33 + 1) ;</li><li>A ∩ B est l'ensemble des entiers divisibles par 2 et par 3, c'est-à-dire par 6 : |A ∩ B| = 16 (de 6 à 96, car 100 = 6 × 16 + 4).</li></ul><div class="calc">|A ∪ B| = 50 + 33 − 16 = 67.</div><p>Il y a <strong>67</strong> entiers divisibles par 2 ou par 3.</p><p><em>Pour aller plus loin :</em> il reste 33 entiers divisibles ni par 2 ni par 3 : ce sont exactement ceux qui s'écrivent 6k + 1 ou 6k + 5.</p>`
  },
  {
    id: "combi-20",
    theme: "combi",
    niveau: 2,
    type: "demo",
    titre: `Pair ou impair, match nul`,
    enonce: `<p>On considère tous les nombres entiers à trois chiffres (de 100 à 999).</p><p>Démontrer qu'il y a exactement autant de ces nombres dont la <strong>somme des chiffres est paire</strong> que de nombres dont la <strong>somme des chiffres est impaire</strong>. Combien y en a-t-il de chaque sorte ?</p>`,
    figure: ``,
    reponse: [],
    reponseTexte: ``,
    pistes: [
      `<p>Combien y a-t-il de nombres à trois chiffres en tout ?</p>`,
      `<p>Regarde les nombres 340 et 341, puis 342 et 343. Que se passe-t-il pour la parité de la somme des chiffres ?</p>`,
      `<p>Associe chaque nombre à un « partenaire » en modifiant seulement son chiffre des unités : 0 ↔ 1, 2 ↔ 3, 4 ↔ 5, 6 ↔ 7, 8 ↔ 9.</p>`,
      `<p>Vérifie que ce partenariat est une bijection entre les nombres de somme paire et ceux de somme impaire.</p>`
    ],
    lecon: {
      titre: `Prouver une égalité par appariement`,
      html: `<p>Pour prouver que deux ensembles ont le même nombre d'éléments <strong>sans les compter</strong>, on peut construire une <strong>bijection</strong> entre eux, c'est-à-dire un « appariement » : chaque élément du premier a exactement un partenaire dans le second, et inversement.</p><p>Souvent, la bijection est une petite opération qui change une propriété : ajouter ou enlever 1, échanger deux éléments, retourner un chemin…</p><div class="exemple">Parmi les sous-ensembles de {1, 2, 3}, il y a autant de sous-ensembles ayant un nombre pair d'éléments que de sous-ensembles en ayant un nombre impair : on apparie chaque sous-ensemble S avec S auquel on ajoute (ou retire) l'élément 1.</div><div class="astuce">Astuce olympique : une bonne bijection est souvent une <strong>involution</strong> : si on l'applique deux fois, on revient au point de départ. Il suffit alors de vérifier qu'elle envoie toujours un objet de la 1re sorte vers un objet de la 2e sorte, et inversement.</div>`
    },
    correction: `<p>Notons P l'ensemble des nombres de 100 à 999 dont la somme des chiffres est paire et I celui des nombres dont elle est impaire.</p><p><strong>L'appariement.</strong> À un nombre N = abc (a centaines, b dizaines, c unités), associons le nombre N' = abc' où c' est obtenu en échangeant 0 ↔ 1, 2 ↔ 3, 4 ↔ 5, 6 ↔ 7, 8 ↔ 9. Autrement dit, c' = c + 1 si c est pair et c' = c − 1 si c est impair.</p><ul><li>N' est encore un nombre à trois chiffres (on ne touche pas au chiffre des centaines).</li><li>La somme des chiffres de N' diffère de celle de N de 1 (en plus ou en moins), donc sa parité est opposée : si N ∈ P, alors N' ∈ I, et si N ∈ I, alors N' ∈ P.</li><li>Appliquer deux fois l'opération redonne N : (N')' = N.</li></ul><p>Ainsi, l'opération réalise une bijection de P sur I (sa réciproque est elle-même), donc P et I ont le même nombre d'éléments.</p><p><strong>Le nombre.</strong> Il y a 999 − 100 + 1 = 900 nombres à trois chiffres, donc chacun des deux ensembles en contient 900 ÷ 2 = <strong>450</strong>.</p><p><em>Remarque :</em> ce n'est pas vrai sur n'importe quel intervalle ! De 1 à 10, seuls 2, 4, 6, 8 ont une somme des chiffres paire (celle de 10 vaut 1) : 4 contre 6. L'appariement marche ici parce que les chiffres des unités vont par paires complètes.</p>`,
    bareme: [
      `Définir précisément l'opération sur le chiffre des unités.`,
      `Montrer qu'elle change la parité de la somme des chiffres.`,
      `Justifier qu'il s'agit d'une bijection (involution, on reste dans les nombres à 3 chiffres).`,
      `Conclure : 450 de chaque sorte.`
    ]
  },
  {
    id: "combi-21",
    theme: "combi",
    niveau: 2,
    type: "reponse",
    titre: `Rectangles en série`,
    enonce: `<p>On dessine une grille de <strong>4 cases de large</strong> et <strong>3 cases de haut</strong> (voir figure).</p><p>Combien de <strong>rectangles</strong> (carrés compris) dont les côtés sont sur les lignes de la grille peut-on y voir ?</p>`,
    figure: `<svg viewBox="0 0 320 190" width="300" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="60" y="20" width="200" height="150"/><line x1="110" y1="20" x2="110" y2="170"/><line x1="160" y1="20" x2="160" y2="170"/><line x1="210" y1="20" x2="210" y2="170"/><line x1="60" y1="70" x2="260" y2="70"/><line x1="60" y1="120" x2="260" y2="120"/></g></svg>`,
    reponse: ["60", "soixante"],
    reponseTexte: `60`,
    pistes: [
      `<p>Combien de lignes verticales la grille comporte-t-elle ? Et de lignes horizontales ?</p>`,
      `<p>Un rectangle est délimité par deux côtés verticaux et deux côtés horizontaux. Sur quelles lignes se trouvent-ils ?</p>`,
      `<p>Choisir un rectangle revient à choisir 2 lignes verticales parmi 5 et 2 lignes horizontales parmi 4. Est-ce une correspondance un à un ?</p>`,
      `<p>Calcule C(5, 2) × C(4, 2).</p>`
    ],
    lecon: {
      titre: `Compter des rectangles en choisissant leurs bords`,
      html: `<p>Plutôt que de trier les rectangles par taille (ce qui devient vite pénible), on les repère par leurs <strong>bords</strong> :</p><ul><li>le bord gauche et le bord droit sont deux lignes verticales <strong>distinctes</strong> ;</li><li>le bord haut et le bord bas sont deux lignes horizontales <strong>distinctes</strong>.</li></ul><p>Réciproquement, deux lignes verticales et deux lignes horizontales délimitent exactement un rectangle. Dans une grille de a cases sur b, il y a a + 1 lignes verticales et b + 1 lignes horizontales, donc</p><div class="calc">nombre de rectangles = C(a + 1, 2) × C(b + 1, 2)</div><div class="exemple">Échiquier 8 × 8 : C(9, 2)<sup>2</sup> = 36<sup>2</sup> = 1296 rectangles.</div><div class="astuce">Astuce olympique : « choisir un objet » = « choisir ce qui le détermine ». Bien choisir les paramètres qui décrivent un objet de manière unique, c'est la moitié du travail.</div>`
    },
    correction: `<p>La grille comporte 5 lignes verticales et 4 lignes horizontales.</p><p>Un rectangle de la figure est déterminé par ses deux côtés verticaux, situés sur deux lignes verticales distinctes, et ses deux côtés horizontaux, situés sur deux lignes horizontales distinctes. Réciproquement, deux lignes verticales distinctes et deux lignes horizontales distinctes délimitent un unique rectangle. Donc</p><div class="calc">nombre de rectangles = C(5, 2) × C(4, 2) = 10 × 6 = 60.</div><p>On voit <strong>60</strong> rectangles.</p><p><em>Vérification par la taille :</em> un rectangle de largeur l et de hauteur h (en cases) peut être placé de (5 − l)(4 − h) façons ; la somme sur l = 1..4 et h = 1..3 vaut (4 + 3 + 2 + 1)(3 + 2 + 1) = 10 × 6 = 60.</p>`
  },
  {
    id: "combi-22",
    theme: "combi",
    niveau: 2,
    type: "reponse",
    titre: `L'escalier de la tour`,
    enonce: `<p>Pour monter un escalier de <strong>10 marches</strong>, Hugo monte à chaque enjambée <strong>une</strong> ou <strong>deux</strong> marches.</p><p>De combien de façons différentes peut-il monter l'escalier ? (Par exemple, pour 3 marches, il y a 3 façons : 1+1+1, 1+2, 2+1.)</p>`,
    figure: ``,
    reponse: ["89", "quatre-vingt-neuf"],
    reponseTexte: `89`,
    pistes: [
      `<p>Note e<sub>n</sub> le nombre de façons de monter n marches. Calcule e<sub>1</sub>, e<sub>2</sub>, e<sub>3</sub>, e<sub>4</sub> en listant.</p>`,
      `<p>Regarde la <strong>première</strong> enjambée de Hugo : elle fait 1 ou 2 marches. Combien reste-t-il de marches dans chaque cas ?</p>`,
      `<p>Tu dois trouver e<sub>n</sub> = e<sub>n−1</sub> + e<sub>n−2</sub>. Explique pourquoi.</p>`,
      `<p>Avec e<sub>1</sub> = 1 et e<sub>2</sub> = 2, calcule de proche en proche jusqu'à e<sub>10</sub>.</p>`
    ],
    lecon: {
      titre: `Compter par récurrence : la suite de Fibonacci`,
      html: `<p>Quand un comptage direct est difficile, on cherche une <strong>relation de récurrence</strong> : on exprime le nombre d'objets de taille n à l'aide des nombres pour des tailles plus petites.</p><p>La méthode : on regarde le <strong>premier pas</strong> (ou le dernier) et on sépare les cas. Chaque cas se ramène à un problème plus petit du même type.</p><div class="calc">e<sub>n</sub> = e<sub>n−1</sub> + e<sub>n−2</sub></div><p>Avec e<sub>1</sub> = 1, e<sub>2</sub> = 2, on obtient 1, 2, 3, 5, 8, 13, 21, 34, 55, 89… : ce sont les <strong>nombres de Fibonacci</strong>, où chaque terme est la somme des deux précédents.</p><div class="astuce">Astuce olympique : calcule toujours les premiers termes <strong>à la main</strong> pour vérifier la récurrence. Et pense à fixer une convention utile : e<sub>0</sub> = 1 (une seule façon de monter 0 marche : ne rien faire), qui rend e<sub>2</sub> = e<sub>1</sub> + e<sub>0</sub> correct.</div>`
    },
    correction: `<p>Notons e<sub>n</sub> le nombre de façons de monter n marches. On a e<sub>1</sub> = 1 (1) et e<sub>2</sub> = 2 (1+1 ou 2).</p><p><strong>Récurrence.</strong> Pour n ≥ 3, classons les façons de monter n marches selon la première enjambée :</p><ul><li>si elle fait 1 marche, il reste n − 1 marches à monter, de n'importe laquelle des e<sub>n−1</sub> façons ;</li><li>si elle fait 2 marches, il reste n − 2 marches : e<sub>n−2</sub> façons.</li></ul><p>Ces deux cas sont disjoints et couvrent toutes les possibilités, donc e<sub>n</sub> = e<sub>n−1</sub> + e<sub>n−2</sub>.</p><p><strong>Calcul.</strong></p><div class="calc">e<sub>1</sub> = 1, e<sub>2</sub> = 2, e<sub>3</sub> = 3, e<sub>4</sub> = 5, e<sub>5</sub> = 8, e<sub>6</sub> = 13, e<sub>7</sub> = 21, e<sub>8</sub> = 34, e<sub>9</sub> = 55, e<sub>10</sub> = 89.</div><p>Hugo a <strong>89</strong> façons de monter l'escalier.</p><p><em>Autre méthode :</em> avec k enjambées de 2 marches et 10 − 2k de 1 marche, il y a C(10 − k, k) ordres possibles ; 1 + 9 + 28 + 35 + 15 + 1 = 89.</p>`
  },
  {
    id: "combi-23",
    theme: "combi",
    niveau: 2,
    type: "demo",
    titre: `Dominos sur une bande`,
    enonce: `<p>On veut paver une bande de <strong>2 cases de haut</strong> et <strong>n cases de long</strong> avec des dominos 1 × 2 (chaque domino recouvre exactement deux cases voisines, sans chevauchement ni débordement). On note p<sub>n</sub> le nombre de pavages.</p><ol><li>Calculer p<sub>1</sub>, p<sub>2</sub>, p<sub>3</sub>.</li><li>Démontrer que p<sub>n</sub> = p<sub>n−1</sub> + p<sub>n−2</sub> pour n ≥ 3.</li><li>En déduire le nombre de pavages d'une bande 2 × 8.</li></ol>`,
    figure: ``,
    reponse: [],
    reponseTexte: ``,
    pistes: [
      `<p>Dessine les pavages pour n = 1, 2, 3. Tu devrais trouver 1, 2 et 3.</p>`,
      `<p>Regarde la <strong>colonne de gauche</strong> (ses deux cases). Comment la case en haut à gauche peut-elle être recouverte ?</p>`,
      `<p>Si un domino vertical recouvre la colonne de gauche, que reste-t-il à paver ? Si le domino est horizontal, que doit-il se passer pour la case en bas à gauche ?</p>`,
      `<p>Dans le deuxième cas, la case en bas à gauche est forcément couverte par un autre domino horizontal, juste en dessous du premier. Il reste alors une bande 2 × (n − 2).</p>`
    ],
    lecon: {
      titre: `Pavages et récurrence : regarder le bord`,
      html: `<p>Pour compter des pavages, on regarde une case <strong>particulière</strong> (souvent la case du coin) et on se demande <strong>comment elle peut être couverte</strong>. Chaque possibilité force parfois d'autres pièces, puis laisse une région plus petite du même type.</p><p>Il faut bien vérifier deux choses :</p><ul><li>les cas sont <strong>disjoints</strong> (un pavage ne peut pas être dans deux cas) ;</li><li>dans chaque cas, les pavages correspondent <strong>exactement</strong> aux pavages de la petite région (correspondance un à un).</li></ul><div class="exemple">Bande 1 × n pavée par des carrés 1 × 1 et des dominos 1 × 2 : même récurrence, c'est l'escalier de 1 ou 2 marches déguisé !</div><div class="astuce">Astuce olympique : deux problèmes qui ont la même récurrence et les mêmes premiers termes ont les mêmes réponses. Reconnaître Fibonacci caché dans un problème fait gagner beaucoup de temps.</div>`
    },
    correction: `<p><strong>1.</strong> Bande 2 × 1 : un seul domino vertical, p<sub>1</sub> = 1. Bande 2 × 2 : deux verticaux ou deux horizontaux, p<sub>2</sub> = 2. Bande 2 × 3 : trois verticaux, ou un vertical à gauche puis deux horizontaux, ou deux horizontaux puis un vertical à droite : p<sub>3</sub> = 3.</p><p><strong>2.</strong> Soit n ≥ 3. Considérons la case en haut à gauche. Elle est couverte :</p><ul><li><strong>soit par un domino vertical</strong>, qui couvre toute la colonne de gauche. Le reste est un pavage quelconque de la bande 2 × (n − 1) restante, et réciproquement tout pavage de cette bande complété par ce domino convient : p<sub>n−1</sub> pavages ;</li><li><strong>soit par un domino horizontal</strong> couvrant les deux premières cases de la ligne du haut. Alors la case en bas à gauche ne peut pas être couverte par un domino vertical (la case au-dessus est prise) : elle est couverte par un domino horizontal occupant les deux premières cases du bas. Il reste une bande 2 × (n − 2), à paver de façon quelconque : p<sub>n−2</sub> pavages.</li></ul><p>Les deux cas sont disjoints (le domino de la case en haut à gauche est vertical ou horizontal), donc p<sub>n</sub> = p<sub>n−1</sub> + p<sub>n−2</sub>.</p><p><strong>3.</strong> p<sub>1</sub> = 1, p<sub>2</sub> = 2, p<sub>3</sub> = 3, p<sub>4</sub> = 5, p<sub>5</sub> = 8, p<sub>6</sub> = 13, p<sub>7</sub> = 21, p<sub>8</sub> = <strong>34</strong>.</p>`,
    bareme: [
      `Calculer correctement p₁ = 1, p₂ = 2, p₃ = 3.`,
      `Distinguer les deux cas pour la case du coin (domino vertical / horizontal).`,
      `Justifier que le cas horizontal force un second domino horizontal.`,
      `Établir la correspondance avec les pavages de 2 × (n − 1) et 2 × (n − 2), et conclure à la récurrence.`,
      `Calculer p₈ = 34.`
    ]
  },
  {
    id: "combi-24",
    theme: "combi",
    niveau: 2,
    type: "reponse",
    titre: `Le plus grand des deux dés`,
    enonce: `<p>On lance deux dés équilibrés à six faces et on note le <strong>plus grand</strong> des deux nombres obtenus (si les deux dés donnent le même nombre, c'est ce nombre).</p><p>Quelle est la probabilité que ce plus grand nombre soit égal à <strong>4</strong> ?</p>`,
    figure: ``,
    reponse: ["7/36"],
    reponseTexte: `7/36`,
    pistes: [
      `<p>Distingue les deux dés (un rouge, un vert). Combien y a-t-il d'issues équiprobables ?</p>`,
      `<p>Dessine un tableau 6 × 6 et colorie les cases où le maximum vaut 4.</p>`,
      `<p>« Le maximum vaut au plus 4 » signifie que les deux dés sont ≤ 4. Combien d'issues ? Et « au plus 3 » ?</p>`,
      `<p>Max = 4 ⇔ max ≤ 4 mais pas max ≤ 3. Fais la différence 16 − 9.</p>`
    ],
    lecon: {
      titre: `Le tableau à double entrée et l'astuce « au plus »`,
      html: `<p>Pour deux dés, on distingue toujours les dés (rouge/vert) : les <strong>36</strong> couples (a, b) sont équiprobables. Un tableau 6 × 6 permet de voir tous les cas.</p><p>Pour un <strong>maximum</strong>, l'événement « max ≤ k » est simple : les deux dés sont ≤ k, ce qui fait k × k issues. On en déduit</p><div class="calc">nombre d'issues où max = k : k<sup>2</sup> − (k − 1)<sup>2</sup> = 2k − 1</div><div class="exemple">Probabilité que le max vaille 6 : 11/36. Probabilité qu'il vaille 1 : 1/36 (seulement (1, 1)).</div><div class="astuce">Astuce olympique : « égal à k » = « au plus k » moins « au plus k − 1 ». Cette soustraction marche pour tous les problèmes de maximum (et, avec « au moins », pour les minimums).</div>`
    },
    correction: `<p>Distinguons les deux dés : les 36 couples (a, b), avec a, b ∈ {1, …, 6}, sont équiprobables.</p><p>Le maximum est ≤ 4 exactement quand a ≤ 4 et b ≤ 4 : 4 × 4 = 16 couples. Le maximum est ≤ 3 pour 3 × 3 = 9 couples. Le maximum vaut exactement 4 pour 16 − 9 = 7 couples :</p><div class="calc">(4, 1), (4, 2), (4, 3), (4, 4), (1, 4), (2, 4), (3, 4).</div><p>La probabilité est <strong>7/36</strong>.</p><p><em>Erreur fréquente :</em> compter (4, 4) deux fois (« 4 sur le premier dé » : 4 cas avec b ≤ 4, « 4 sur le second » : 4 cas, total 8). Le couple (4, 4) est dans les deux listes !</p>`
  },
  {
    id: "combi-25",
    theme: "combi",
    niveau: 2,
    type: "reponse",
    titre: `Ni 2, ni 3, ni 5`,
    enonce: `<p>Combien d'entiers compris entre <strong>1 et 1000</strong> (inclus) ne sont divisibles <strong>ni par 2, ni par 3, ni par 5</strong> ?</p>`,
    figure: ``,
    reponse: ["266", "deux cent soixante-six"],
    reponseTexte: `266`,
    pistes: [
      `<p>Il est plus simple de compter d'abord ceux qui sont divisibles par <strong>au moins un</strong> des nombres 2, 3, 5.</p>`,
      `<p>Combien de multiples de 2, de 3, de 5 ? Combien de multiples de 6, de 10, de 15 ? Et de 30 ?</p>`,
      `<p>Formule d'inclusion-exclusion pour trois ensembles : |A ∪ B ∪ C| = |A| + |B| + |C| − |A ∩ B| − |A ∩ C| − |B ∩ C| + |A ∩ B ∩ C|.</p>`,
      `<p>Tu dois trouver 500 + 333 + 200 − 166 − 100 − 66 + 33. Il reste à retirer ce nombre de 1000.</p>`
    ],
    lecon: {
      titre: `Inclusion-exclusion pour trois ensembles`,
      html: `<p>Pour trois ensembles A, B, C :</p><div class="calc">|A ∪ B ∪ C| = |A| + |B| + |C| − |A ∩ B| − |A ∩ C| − |B ∩ C| + |A ∩ B ∩ C|</div><p><strong>Pourquoi ça marche ?</strong> Un élément qui est dans exactement un ensemble est compté 1 fois. S'il est dans exactement deux ensembles : 2 − 1 = 1 fois. S'il est dans les trois : 3 − 3 + 1 = 1 fois. Chaque élément de l'union est compté <strong>exactement une fois</strong>.</p><div class="exemple">Dans une classe de 30 : 15 font du sport, 12 de la musique, 10 du théâtre ; 5 sport+musique, 4 sport+théâtre, 3 musique+théâtre, 2 les trois. Au moins une activité : 15 + 12 + 10 − 5 − 4 − 3 + 2 = 27 ; aucune : 3.</div><div class="astuce">Astuce olympique : pour « ni… ni… ni… », on combine inclusion-exclusion et complémentaire. On peut aussi raisonner par blocs : parmi 30 entiers consécutifs, exactement 8 ne sont divisibles ni par 2, ni par 3, ni par 5.</div>`
    },
    correction: `<p>Notons A, B, C les ensembles des multiples de 2, 3, 5 entre 1 et 1000. Les intersections correspondent aux multiples de 6, 10, 15 et 30 (2, 3, 5 sont premiers entre eux deux à deux).</p><ul><li>|A| = 500, |B| = 333, |C| = 200 ;</li><li>|A ∩ B| = 166 (multiples de 6), |A ∩ C| = 100 (de 10), |B ∩ C| = 66 (de 15) ;</li><li>|A ∩ B ∩ C| = 33 (multiples de 30).</li></ul><div class="calc">|A ∪ B ∪ C| = 500 + 333 + 200 − 166 − 100 − 66 + 33 = 734.</div><p>Le nombre d'entiers divisibles ni par 2, ni par 3, ni par 5 est 1000 − 734 = <strong>266</strong>.</p><p><em>Vérification par blocs :</em> de 1 à 990 il y a 33 blocs de 30 entiers, contenant chacun 8 « bons » nombres, soit 264 ; entre 991 et 1000, seuls 991 et 997 conviennent. Total 266.</p>`
  },
  {
    id: "combi-26",
    theme: "combi",
    niveau: 2,
    type: "demo",
    titre: `Trois amis chacun`,
    enonce: `<p>Dans une colonie de vacances, chaque enfant a <strong>exactement 3 amis</strong> parmi les autres enfants de la colonie (l'amitié est réciproque : si Alix est amie avec Bilal, alors Bilal est ami avec Alix).</p><p>Démontrer que le nombre d'enfants de la colonie est <strong>pair</strong>.</p>`,
    figure: ``,
    reponse: [],
    reponseTexte: ``,
    pistes: [
      `<p>Essaie de construire un exemple avec 4 enfants. Est-ce possible avec 5 ? Représente les enfants par des points et les amitiés par des traits.</p>`,
      `<p>Compte le nombre total de « traits » (amitiés) de deux façons.</p>`,
      `<p>Si on additionne, pour chaque enfant, son nombre d'amis, combien de fois chaque amitié est-elle comptée ?</p>`,
      `<p>Avec n enfants, on obtient 3n = 2 × (nombre d'amitiés). Que peut-on en déduire sur n ?</p>`
    ],
    lecon: {
      titre: `Le double comptage (lemme des poignées de main)`,
      html: `<p>Le <strong>double comptage</strong> consiste à compter la même quantité de deux façons différentes et à écrire que les résultats sont égaux.</p><p>Application classique : dans un groupe, représentons les personnes par des points et les relations réciproques (amitiés, poignées de main) par des traits. Si l'on additionne, pour chaque personne, le nombre de traits qui partent d'elle, chaque trait est compté <strong>deux fois</strong> (une fois à chaque bout). Donc :</p><div class="calc">somme des nombres d'amis = 2 × (nombre d'amitiés)</div><p>Cette somme est donc toujours <strong>paire</strong>. Conséquence : le nombre de personnes ayant un nombre <strong>impair</strong> d'amis est pair.</p><div class="exemple">Peut-on avoir 7 personnes ayant chacune exactement 3 amis ? Non : la somme vaudrait 21, impaire.</div><div class="astuce">Astuce olympique : dès qu'un problème parle de relations réciproques entre personnes, compte les « couples (personne, ami) » : c'est souvent la clé.</div>`
    },
    correction: `<p>Notons n le nombre d'enfants et A le nombre d'amitiés (une amitié est une paire d'enfants amis).</p><p>Comptons de deux façons le nombre N de couples (X, Y) où X et Y sont deux enfants amis.</p><ul><li><strong>Par enfant :</strong> pour chaque enfant X, il y a exactement 3 enfants Y amis avec X. Donc N = 3n.</li><li><strong>Par amitié :</strong> chaque amitié {X, Y} donne exactement deux couples, (X, Y) et (Y, X). Donc N = 2A.</li></ul><p>On obtient 3n = 2A, donc 3n est pair. Comme 3 est impair, n est pair (si n était impair, 3n serait le produit de deux impairs, donc impair).</p><p>Le nombre d'enfants est donc <strong>pair</strong>.</p><p><em>Pour aller plus loin :</em> pour tout n pair supérieur ou égal à 4, une telle colonie existe : place les enfants en cercle, chacun est ami avec ses deux voisins et avec l'enfant diamétralement opposé.</p>`,
    bareme: [
      `Modéliser (paires d'amis, couples ordonnés).`,
      `Compter les couples par enfant : 3n.`,
      `Compter les couples par amitié : 2A, en justifiant le facteur 2.`,
      `Conclure que 3n est pair donc n est pair.`
    ]
  },
  {
    id: "combi-27",
    theme: "combi",
    niveau: 2,
    type: "reponse",
    titre: `Somme des chiffres égale à 10`,
    enonce: `<p>Combien d'entiers compris entre <strong>1 et 999</strong> ont une <strong>somme des chiffres égale à 10</strong> ?</p>`,
    figure: ``,
    reponse: ["63", "soixante-trois"],
    reponseTexte: `63`,
    pistes: [
      `<p>Écris chaque entier avec exactement 3 chiffres en ajoutant des 0 devant (7 devient 007, 46 devient 046). On cherche les triplets (a, b, c) de chiffres avec a + b + c = 10.</p>`,
      `<p>Oublie un instant la contrainte « chaque chiffre ≤ 9 ». Imagine 10 billes alignées et 2 barres de séparation : combien de façons de placer les barres ?</p>`,
      `<p>10 billes et 2 barres, soit 12 objets, dont on choisit les positions des 2 barres : C(12, 2) = 66 solutions en entiers ≥ 0.</p>`,
      `<p>Parmi ces 66 solutions, lesquelles ne sont pas valables parce qu'un « chiffre » vaut 10 ?</p>`
    ],
    lecon: {
      titre: `Les étoiles et les barres`,
      html: `<p>Combien y a-t-il de façons d'écrire n comme somme de k entiers <strong>positifs ou nuls</strong>, dans l'ordre (x<sub>1</sub> + x<sub>2</sub> + … + x<sub>k</sub> = n) ?</p><p>On représente n par n étoiles alignées, et on insère k − 1 barres pour les séparer en k paquets : x<sub>1</sub> est le nombre d'étoiles avant la 1re barre, etc.</p><div class="exemple">★★|★|★★★ représente 2 + 1 + 3 = 6 ; ||★★★★★★ représente 0 + 0 + 6 = 6.</div><p>Chaque solution correspond à une façon de placer k − 1 barres parmi n + k − 1 positions :</p><div class="calc">nombre de solutions = C(n + k − 1, k − 1)</div><div class="astuce">Astuce olympique : s'il y a des bornes supérieures (un chiffre est ≤ 9), on compte d'abord sans les bornes, puis on retire les solutions « interdites » (éventuellement par inclusion-exclusion).</div>`
    },
    correction: `<p>Écrivons chaque entier de 1 à 999 avec trois chiffres a, b, c (en complétant par des zéros à gauche). On cherche le nombre de triplets (a, b, c) d'entiers entre 0 et 9 tels que a + b + c = 10 (le triplet (0, 0, 0) n'intervient pas puisque la somme vaut 10).</p><p><strong>Sans la borne 9.</strong> Les solutions en entiers positifs ou nuls correspondent aux dispositions de 10 étoiles et 2 barres : C(12, 2) = 66.</p><p><strong>Solutions interdites.</strong> Un « chiffre » dépasse 9 seulement s'il vaut 10, les deux autres valant alors 0 : (10, 0, 0), (0, 10, 0), (0, 0, 10). Deux chiffres ne peuvent pas dépasser 9 en même temps. Il y a donc 3 solutions interdites.</p><div class="calc">66 − 3 = 63.</div><p>Il y a <strong>63</strong> entiers entre 1 et 999 dont la somme des chiffres vaut 10.</p><p><em>Vérification partielle :</em> les nombres à deux chiffres (a = 0) sont 19, 28, 37, 46, 55, 64, 73, 82, 91 : 9 nombres, ce qui correspond bien aux 11 − 2 = 9 solutions de b + c = 10 avec b, c ≤ 9.</p>`
  },
  {
    id: "combi-28",
    theme: "combi",
    niveau: 2,
    type: "reponse",
    titre: `Triangles dans l'octogone`,
    enonce: `<p>On considère un octogone régulier. Combien de <strong>triangles</strong> ont leurs trois sommets parmi les sommets de l'octogone et <strong>n'ont aucun côté commun</strong> avec l'octogone ?</p><p><em>Sur la figure, en pointillés, un exemple de triangle qui convient.</em></p>`,
    figure: `<svg viewBox="0 0 320 220" width="280" xmlns="http://www.w3.org/2000/svg"><polygon points="247.8,146.4 196.4,197.8 123.6,197.8 72.2,146.4 72.2,73.6 123.6,22.2 196.4,22.2 247.8,73.6" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="247.8,146.4 72.2,146.4 123.6,22.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><circle cx="247.8" cy="146.4" r="4" fill="currentColor"/><circle cx="196.4" cy="197.8" r="4" fill="currentColor"/><circle cx="123.6" cy="197.8" r="4" fill="currentColor"/><circle cx="72.2" cy="146.4" r="4" fill="currentColor"/><circle cx="72.2" cy="73.6" r="4" fill="currentColor"/><circle cx="123.6" cy="22.2" r="4" fill="currentColor"/><circle cx="196.4" cy="22.2" r="4" fill="currentColor"/><circle cx="247.8" cy="73.6" r="4" fill="currentColor"/></svg>`,
    reponse: ["16", "seize"],
    reponseTexte: `16`,
    pistes: [
      `<p>Combien de triangles en tout ont leurs sommets parmi les 8 sommets de l'octogone ?</p>`,
      `<p>Un triangle peut avoir 0, 1 ou 2 côtés communs avec l'octogone (pourquoi pas 3 ?). Compte ceux qui en ont 2 : ils sont formés de trois sommets consécutifs.</p>`,
      `<p>Pour ceux qui ont exactement 1 côté commun : choisis ce côté (8 choix), puis le troisième sommet ne doit être voisin d'aucune extrémité. Combien de choix ?</p>`,
      `<p>C(8, 3) = 56, dont 8 triangles à deux côtés communs et 8 × 4 = 32 à un seul. Il reste à soustraire.</p>`
    ],
    lecon: {
      titre: `Compter le complémentaire, cas par cas`,
      html: `<p>Pour compter les objets qui <strong>évitent</strong> une propriété, on compte souvent tous les objets, puis on retire ceux qui ont la propriété. Pour ne pas se tromper, on <strong>classe les objets à retirer</strong> selon « à quel point » ils ont la propriété (ici : nombre de côtés communs), pour que chaque objet soit retiré exactement une fois.</p><div class="exemple">Dans un hexagone, triangles sans côté commun : C(6, 3) − 6 (deux côtés communs) − 6 × 2 (un seul) = 20 − 6 − 12 = 2. Ce sont bien les deux « triangles équilatéraux » de l'hexagone.</div><div class="astuce">Astuce olympique : autre approche, par bijection. Choisir 3 sommets deux à deux non voisins sur un cercle de n sommets revient à répartir les n − 3 sommets non choisis dans les 3 « trous », chaque trou en recevant au moins un. Pour n = 8, on peut vérifier : 8 × C(4, 2) / 3 = 16.</div>`
    },
    correction: `<p>Il y a C(8, 3) = 56 triangles ayant leurs sommets parmi ceux de l'octogone. Un tel triangle ne peut pas avoir 3 côtés communs avec l'octogone (il faudrait un octogone à 3 côtés !). Retirons ceux qui ont au moins un côté commun.</p><ul><li><strong>Exactement 2 côtés communs :</strong> les trois sommets sont consécutifs. Un tel triangle est déterminé par son sommet du milieu : 8 triangles.</li><li><strong>Exactement 1 côté commun :</strong> on choisit ce côté [AB] (8 choix). Le troisième sommet doit être différent de A et B et ne doit être voisin ni de A ni de B (sinon il y aurait un deuxième côté commun) : on exclut A, B et leurs deux autres voisins, il reste 8 − 4 = 4 sommets. Chaque triangle est obtenu une fois (par son unique côté commun) : 8 × 4 = 32 triangles.</li></ul><div class="calc">56 − 8 − 32 = 16.</div><p>Il y a <strong>16</strong> triangles sans côté commun avec l'octogone.</p><p><em>Vérification :</em> en fixant un sommet A, les deux autres doivent être choisis parmi les 5 sommets non voisins de A et non voisins entre eux : il y a 6 choix. Chaque triangle est compté 3 fois (une fois par sommet) : 8 × 6 / 3 = 16.</p>`
  },
  {
    id: "combi-29",
    theme: "combi",
    niveau: 3,
    type: "reponse",
    titre: `Le carrefour en travaux`,
    enonce: `<p>Dans une ville en quadrillage, Mia part du coin A et doit rejoindre le coin B, situé <strong>6 rues à l'est</strong> et <strong>4 rues au nord</strong>. Elle ne se déplace que vers l'est ou vers le nord, en suivant les rues.</p><p>Malheureusement, le carrefour C, situé 3 rues à l'est et 2 rues au nord de A, est <strong>fermé</strong> pour travaux : elle ne peut pas y passer.</p><p>Combien de trajets différents Mia peut-elle emprunter ?</p>`,
    figure: `<svg viewBox="0 0 320 210" width="300" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="1.5" fill="none"><rect x="40" y="20" width="240" height="160"/><line x1="80" y1="20" x2="80" y2="180"/><line x1="120" y1="20" x2="120" y2="180"/><line x1="160" y1="20" x2="160" y2="180"/><line x1="200" y1="20" x2="200" y2="180"/><line x1="240" y1="20" x2="240" y2="180"/><line x1="40" y1="60" x2="280" y2="60"/><line x1="40" y1="100" x2="280" y2="100"/><line x1="40" y1="140" x2="280" y2="140"/></g><circle cx="40" cy="180" r="5" fill="currentColor"/><circle cx="280" cy="20" r="5" fill="currentColor"/><circle cx="160" cy="100" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="153" y1="93" x2="167" y2="107" stroke="currentColor" stroke-width="2.5"/><line x1="167" y1="93" x2="153" y2="107" stroke="currentColor" stroke-width="2.5"/><text x="20" y="200" font-size="14" fill="currentColor">A</text><text x="288" y="16" font-size="14" fill="currentColor">B</text><text x="170" y="92" font-size="14" fill="currentColor">C</text></svg>`,
    reponse: ["110", "cent dix"],
    reponseTexte: `110`,
    pistes: [
      `<p>Sans travaux, combien de trajets de A à B ? (10 déplacements, dont 4 vers le nord.)</p>`,
      `<p>Il est plus facile de compter les trajets qui <strong>passent</strong> par C, puis de les retirer.</p>`,
      `<p>Un trajet passant par C se décompose en un trajet de A à C suivi d'un trajet de C à B. Combien de choix pour chaque morceau ?</p>`,
      `<p>C(10, 4) = 210 trajets en tout ; C(5, 2) × C(5, 2) = 100 passent par C.</p>`
    ],
    lecon: {
      titre: `Chemins avec obstacle : complémentaire et découpage`,
      html: `<p>Pour compter les chemins qui <strong>évitent</strong> un point C :</p><div class="calc">(chemins de A à B) − (chemins de A à C) × (chemins de C à B)</div><p>Le produit vient du principe multiplicatif : un chemin passant par C est formé d'un morceau A → C <strong>et</strong> d'un morceau C → B, choisis indépendamment.</p><p>S'il y a <strong>plusieurs</strong> points interdits, il faut faire attention aux chemins qui passent par deux d'entre eux (inclusion-exclusion), ou revenir à la méthode sûre : écrire sur chaque nœud le nombre de chemins, en mettant <strong>0</strong> sur les nœuds interdits.</p><div class="exemple">Grille 2 × 2 (de (0, 0) à (2, 2)) en évitant le centre (1, 1) : 6 − 2 × 2 = 2 chemins (tout droit par les bords).</div><div class="astuce">Astuce olympique : fais toujours une vérification par la méthode des nœuds sur une petite grille. C'est rapide et ça évite les erreurs de découpage.</div>`
    },
    correction: `<p>Un trajet de A à B comporte 6 déplacements vers l'est et 4 vers le nord, dans un ordre quelconque : il y a C(10, 4) = 210 trajets sans restriction.</p><p><strong>Trajets passant par C.</strong> Un tel trajet est la juxtaposition d'un trajet de A à C (3 est, 2 nord) et d'un trajet de C à B (3 est, 2 nord). Il y a C(5, 2) = 10 choix pour chacun, donc 10 × 10 = 100 trajets passant par C.</p><div class="calc">210 − 100 = 110.</div><p>Mia a <strong>110</strong> trajets possibles.</p><p><em>Vérification par les nœuds</em> (lignes du sud au nord, 0 au carrefour fermé) :</p><div class="calc">1 1 1 1 1 1 1<br>1 2 3 4 5 6 7<br>1 3 6 0 5 11 18<br>1 4 10 10 15 26 44<br>1 5 15 25 40 66 110</div>`
  },
  {
    id: "combi-30",
    theme: "combi",
    niveau: 3,
    type: "demo",
    titre: `Autant de pairs que d'impairs`,
    enonce: `<p>Soit n ≥ 1 un entier et E = {1, 2, …, n}.</p><p>Démontrer que E possède autant de sous-ensembles ayant un nombre <strong>pair</strong> d'éléments que de sous-ensembles ayant un nombre <strong>impair</strong> d'éléments (l'ensemble vide compte parmi les « pairs »).</p><p>En déduire que C(n, 0) − C(n, 1) + C(n, 2) − C(n, 3) + … + (−1)<sup>n</sup> C(n, n) = 0, et que chacune des deux catégories contient 2<sup>n−1</sup> sous-ensembles.</p>`,
    figure: ``,
    reponse: [],
    reponseTexte: ``,
    pistes: [
      `<p>Vérifie pour n = 3 : liste les 8 sous-ensembles de {1, 2, 3} et classe-les.</p>`,
      `<p>Cherche une opération simple qui transforme un sous-ensemble pair en un sous-ensemble impair, et inversement. Que se passe-t-il si on ajoute ou retire un élément ?</p>`,
      `<p>Opération proposée : « si 1 est dans S, on l'enlève ; sinon, on l'ajoute ». Que devient la parité du nombre d'éléments ? Que donne l'opération appliquée deux fois ?</p>`,
      `<p>Pour l'égalité, regroupe les C(n, k) avec k pair (ils comptent les sous-ensembles pairs) et ceux avec k impair. Pour 2<sup>n−1</sup>, utilise que le total est 2<sup>n</sup>.</p>`
    ],
    lecon: {
      titre: `Les involutions qui changent la parité`,
      html: `<p>Pour prouver qu'il y a autant d'objets de type « pair » que de type « impair », on cherche une <strong>involution</strong> f (une opération telle que f(f(x)) = x) qui <strong>change toujours le type</strong>. Alors f apparie chaque objet pair avec un objet impair, et c'est une bijection.</p><p>Pour les sous-ensembles, l'opération « ajouter ou retirer un élément fixé » est l'involution idéale : elle change le nombre d'éléments de 1, donc sa parité.</p><div class="exemple">Pour n = 3 : ∅ ↔ {1}, {2} ↔ {1, 2}, {3} ↔ {1, 3}, {2, 3} ↔ {1, 2, 3}. Quatre paires : 4 pairs, 4 impairs.</div><p>Traduit en coefficients binomiaux, cela donne une somme alternée nulle : sur chaque ligne du triangle de Pascal (sauf la ligne 0), 1 − 4 + 6 − 4 + 1 = 0, 1 − 5 + 10 − 10 + 5 − 1 = 0…</p><div class="astuce">Astuce olympique : quand une somme a des signes alternés, cherche une involution qui « annule » les termes par paires. C'est une technique très utilisée en combinatoire.</div>`
    },
    correction: `<p>Notons P l'ensemble des sous-ensembles de E ayant un nombre pair d'éléments et I celui des sous-ensembles ayant un nombre impair d'éléments.</p><p><strong>L'involution.</strong> Pour un sous-ensemble S de E, posons f(S) = S privé de 1 si 1 ∈ S, et f(S) = S auquel on ajoute 1 si 1 ∉ S (c'est possible car n ≥ 1, donc 1 ∈ E).</p><ul><li>f(S) est un sous-ensemble de E dont le nombre d'éléments diffère de celui de S d'exactement 1 : la parité change. Donc f envoie P dans I et I dans P.</li><li>f(f(S)) = S : si 1 ∈ S, f l'enlève puis le remet ; sinon f l'ajoute puis l'enlève.</li></ul><p>Ainsi, f restreinte à P est une bijection de P sur I (sa réciproque est f restreinte à I). Donc |P| = |I|.</p><p><strong>Somme alternée.</strong> Le nombre de sous-ensembles à k éléments est C(n, k). Donc |P| = C(n, 0) + C(n, 2) + C(n, 4) + … et |I| = C(n, 1) + C(n, 3) + … L'égalité |P| = |I| s'écrit</p><div class="calc">C(n, 0) − C(n, 1) + C(n, 2) − … + (−1)<sup>n</sup> C(n, n) = 0.</div><p><strong>Valeur commune.</strong> On sait (problème des pizzas) que |P| + |I| = 2<sup>n</sup>. Comme |P| = |I|, chacun vaut <strong>2<sup>n−1</sup></strong>.</p><p><em>Erreur fréquente :</em> oublier l'hypothèse n ≥ 1. Pour n = 0, il n'y a que l'ensemble vide (pair) et la somme vaut 1.</p>`,
    bareme: [
      `Définir l'opération « ajouter ou retirer 1 » et justifier qu'elle est bien définie (n ≥ 1).`,
      `Montrer qu'elle change la parité du nombre d'éléments.`,
      `Montrer que c'est une involution, donc une bijection entre P et I.`,
      `Traduire en somme alternée des C(n, k).`,
      `Conclure que chaque catégorie a 2ⁿ⁻¹ éléments.`
    ]
  },
  {
    id: "combi-31",
    theme: "combi",
    niveau: 3,
    type: "reponse",
    titre: `Pas de voisins au loto`,
    enonce: `<p>Maël choisit <strong>3 numéros distincts</strong> parmi les entiers de <strong>1 à 20</strong>, en s'interdisant de prendre deux numéros <strong>consécutifs</strong> (par exemple {2, 9, 14} est autorisé, mais {5, 6, 17} ne l'est pas).</p><p>Combien de choix possibles a-t-il ?</p>`,
    figure: ``,
    reponse: ["816", "huit cent seize"],
    reponseTexte: `816`,
    pistes: [
      `<p>Essaie un cas plus petit : 2 numéros sans voisins parmi 1 à 5. Liste-les. Compare avec C(4, 2).</p>`,
      `<p>Écris les numéros choisis dans l'ordre : a &lt; b &lt; c avec b ≥ a + 2 et c ≥ b + 2. Comment transformer ce triplet en un triplet <strong>sans contrainte</strong> ?</p>`,
      `<p>Pose a' = a, b' = b − 1, c' = c − 2. Montre que a' &lt; b' &lt; c' et que ces nombres sont entre 1 et 18.</p>`,
      `<p>Vérifie que la transformation est réversible : tout triplet 1 ≤ a' &lt; b' &lt; c' ≤ 18 redonne un choix valable. Il reste à calculer C(18, 3).</p>`
    ],
    lecon: {
      titre: `La bijection par décalage`,
      html: `<p>Choisir k nombres parmi 1, …, n <strong>sans deux consécutifs</strong> : on les range dans l'ordre x<sub>1</sub> &lt; x<sub>2</sub> &lt; … &lt; x<sub>k</sub>, et on « resserre » en retirant 0 au premier, 1 au deuxième, 2 au troisième, etc. :</p><div class="calc">y<sub>i</sub> = x<sub>i</sub> − (i − 1)</div><p>Les écarts d'au moins 2 deviennent des écarts d'au moins 1 : les y<sub>i</sub> sont simplement distincts, entre 1 et n − k + 1. La transformation se défait en rajoutant i − 1. D'où</p><div class="calc">nombre de choix = C(n − k + 1, k)</div><div class="exemple">2 numéros sans voisins parmi 1 à 5 : C(4, 2) = 6, à savoir {1,3}, {1,4}, {1,5}, {2,4}, {2,5}, {3,5}.</div><div class="astuce">Astuce olympique : le même décalage, dans l'autre sens (ajouter i − 1), transforme des choix « avec répétitions » (x<sub>1</sub> ≤ x<sub>2</sub> ≤ …) en choix sans répétition. Les deux usages sont très fréquents.</div>`
    },
    correction: `<p>Rangeons les numéros choisis dans l'ordre croissant : a &lt; b &lt; c, avec 1 ≤ a, c ≤ 20, b ≥ a + 2 et c ≥ b + 2.</p><p><strong>Transformation.</strong> Posons a' = a, b' = b − 1, c' = c − 2. Alors :</p><ul><li>b' − a' = b − a − 1 ≥ 1 et c' − b' = c − b − 1 ≥ 1, donc a' &lt; b' &lt; c' ;</li><li>a' ≥ 1 et c' = c − 2 ≤ 18.</li></ul><p>Donc {a', b', c'} est un ensemble de 3 entiers distincts de {1, …, 18}.</p><p><strong>Réciproque.</strong> Si 1 ≤ a' &lt; b' &lt; c' ≤ 18, alors a = a', b = b' + 1, c = c' + 2 vérifient b − a = b' − a' + 1 ≥ 2, c − b ≥ 2 et c ≤ 20 : c'est un choix valable, et c'est le seul qui donne (a', b', c').</p><p>On a donc une bijection, et le nombre de choix est</p><div class="calc">C(18, 3) = 18 × 17 × 16 / 6 = 816.</div><p>Maël a <strong>816</strong> choix possibles.</p><p><em>Pour aller plus loin :</em> par complémentaire, cela signifie que C(20, 3) − 816 = 1140 − 816 = 324 choix contiennent au moins deux numéros consécutifs.</p>`
  },
  {
    id: "combi-32",
    theme: "combi",
    niveau: 3,
    type: "demo",
    titre: `Six invités à une fête`,
    enonce: `<p>Six personnes se retrouvent à une fête. Deux personnes quelconques se connaissent déjà ou ne se connaissent pas (la relation est réciproque).</p><ol><li>Démontrer qu'il existe forcément <strong>trois personnes qui se connaissent deux à deux</strong>, ou <strong>trois personnes qui ne se connaissent pas deux à deux</strong>.</li><li>Montrer que ce n'est plus vrai avec seulement cinq personnes.</li></ol>`,
    figure: ``,
    reponse: [],
    reponseTexte: ``,
    pistes: [
      `<p>Représente les personnes par 6 points ; relie deux points par un trait plein s'ils se connaissent et par un trait pointillé sinon. On cherche un triangle d'une seule sorte de trait.</p>`,
      `<p>Fixe une personne, Anna. Elle a 5 relations avec les autres. Que dit le principe des tiroirs sur ces 5 traits de deux sortes ?</p>`,
      `<p>Au moins 3 des 5 traits partant d'Anna sont de la même sorte, disons pleins, vers B, C, D. Regarde maintenant les traits entre B, C et D.</p>`,
      `<p>Si un des traits BC, BD, CD est plein, il forme un triangle plein avec Anna. Sinon… Pour la question 2, dispose 5 personnes en cercle.</p>`
    ],
    lecon: {
      titre: `Le principe des tiroirs en combinatoire`,
      html: `<p><strong>Principe des tiroirs :</strong> si l'on range plus de k × m objets dans m tiroirs, un tiroir contient au moins k + 1 objets. En particulier, 5 objets dans 2 tiroirs : un tiroir en contient au moins 3.</p><p>En combinatoire, il sert souvent à trouver une <strong>structure régulière</strong> dans une situation quelconque. Méthode typique :</p><ol><li>on fixe un élément ;</li><li>on applique les tiroirs à ses relations avec les autres ;</li><li>on étudie le groupe « privilégié » ainsi obtenu.</li></ol><div class="exemple">Parmi 5 entiers quelconques, trois ont la même parité (5 objets, 2 tiroirs : pair/impair).</div><div class="astuce">Astuce olympique : pour montrer qu'une constante est optimale (ici 6), il faut aussi un <strong>contre-exemple</strong> pour la valeur juste en dessous. Une bonne réponse de concours donne toujours les deux parties.</div>`
    },
    correction: `<p>Représentons les personnes par des points ; relions deux points par un trait « plein » s'ils se connaissent, « pointillé » sinon. On cherche un triangle dont les trois côtés sont de la même sorte.</p><p><strong>1.</strong> Fixons une personne A. Les 5 autres sont reliées à A par 5 traits de deux sortes. D'après le principe des tiroirs (5 objets, 2 tiroirs), au moins 3 de ces traits sont de la même sorte. Quitte à échanger les rôles de « plein » et « pointillé » (le raisonnement est symétrique), supposons que A est reliée par des traits pleins à trois personnes B, C, D.</p><ul><li>Si l'un des traits BC, BD, CD est plein, par exemple BC, alors A, B, C se connaissent deux à deux.</li><li>Sinon, les trois traits BC, BD, CD sont pointillés : B, C, D ne se connaissent pas deux à deux.</li></ul><p>Dans tous les cas, on a trouvé trois personnes qui conviennent.</p><p><strong>2.</strong> Plaçons 5 personnes P<sub>1</sub>, …, P<sub>5</sub> en cercle ; chacune connaît exactement ses deux voisines. Les traits pleins forment le pentagone P<sub>1</sub>P<sub>2</sub>P<sub>3</sub>P<sub>4</sub>P<sub>5</sub>, qui ne contient aucun triangle. Les traits pointillés forment l'étoile P<sub>1</sub>P<sub>3</sub>P<sub>5</sub>P<sub>2</sub>P<sub>4</sub>, qui est aussi un cycle de 5 points, sans triangle. Donc aucun trio ne convient : le résultat est faux pour 5 personnes.</p><p><em>Pour aller plus loin :</em> on dit que le « nombre de Ramsey » R(3, 3) vaut 6.</p>`,
    bareme: [
      `Fixer une personne et appliquer le principe des tiroirs à ses 5 relations.`,
      `Traiter le cas « au moins 3 connaissances » (symétrie pour l'autre cas).`,
      `Examiner les relations entre les trois personnes obtenues et conclure dans les deux sous-cas.`,
      `Donner et vérifier un contre-exemple à 5 personnes.`
    ]
  },
  {
    id: "combi-33",
    theme: "combi",
    niveau: 3,
    type: "reponse",
    titre: `Trois dés, total 10`,
    enonce: `<p>On lance <strong>trois dés</strong> équilibrés à six faces. Quelle est la probabilité que la <strong>somme</strong> des trois nombres obtenus soit égale à <strong>10</strong> ? Donner une fraction irréductible.</p>`,
    figure: ``,
    reponse: ["1/8", "0.125", "27/216"],
    reponseTexte: `1/8`,
    pistes: [
      `<p>Distingue les trois dés : combien y a-t-il d'issues équiprobables ?</p>`,
      `<p>Méthode 1 : fixe le résultat du premier dé (1 à 6), puis compte les couples possibles pour les deux autres. Méthode 2 : cherche les groupes de trois nombres de somme 10, puis leurs ordres.</p>`,
      `<p>Les groupes sont {1, 3, 6}, {1, 4, 5}, {2, 2, 6}, {2, 3, 5}, {2, 4, 4}, {3, 3, 4}. Combien d'ordres pour chacun ?</p>`,
      `<p>Groupe à trois nombres distincts : 6 ordres ; avec deux nombres égaux : 3 ordres. Tu dois trouver 27 issues favorables.</p>`
    ],
    lecon: {
      titre: `Groupes puis ordres : compter les issues de plusieurs dés`,
      html: `<p>Avec plusieurs dés, les issues <strong>équiprobables</strong> sont les listes ordonnées (dé 1, dé 2, dé 3) : 6<sup>3</sup> = 216 issues.</p><p>Pour compter celles de somme donnée, on peut :</p><ul><li><strong>lister les groupes</strong> (chiffres rangés en ordre croissant) puis compter les ordres : 6 si les trois valeurs sont distinctes, 3 si exactement deux sont égales, 1 si les trois sont égales ;</li><li>ou utiliser les <strong>étoiles et barres</strong> avec bornes : a + b + c = 10 avec 1 ≤ a, b, c ≤ 6.</li></ul><div class="exemple">Somme 4 avec trois dés : groupes {1, 1, 2} seulement, 3 ordres, probabilité 3/216 = 1/72.</div><div class="astuce">Astuce olympique : la symétrie a ↦ 7 − a (face opposée) montre que P(somme = s) = P(somme = 21 − s). Ainsi P(10) = P(11) : ce sont les deux sommes les plus probables.</div>`
    },
    correction: `<p>Distinguons les dés : les 6<sup>3</sup> = 216 triplets (a, b, c) sont équiprobables.</p><p><strong>Groupes de somme 10</strong> (rangés a ≤ b ≤ c, valeurs de 1 à 6) :</p><ul><li>a = 1 : b + c = 9 avec 1 ≤ b ≤ c ≤ 6 : (3, 6), (4, 5) ;</li><li>a = 2 : b + c = 8 avec 2 ≤ b ≤ c : (2, 6), (3, 5), (4, 4) ;</li><li>a = 3 : b + c = 7 avec 3 ≤ b ≤ c : (3, 4) ;</li><li>a ≥ 4 : b + c ≤ 6 impossible avec b, c ≥ 4.</li></ul><p><strong>Ordres :</strong> {1, 3, 6}, {1, 4, 5}, {2, 3, 5} ont trois valeurs distinctes (6 ordres chacun) ; {2, 2, 6}, {2, 4, 4}, {3, 3, 4} ont deux valeurs égales (3 ordres chacun).</p><div class="calc">3 × 6 + 3 × 3 = 27 issues favorables, P = 27/216 = 1/8.</div><p><em>Vérification par étoiles et barres :</em> avec x = a − 1, etc., on cherche x + y + z = 7 avec 0 ≤ x, y, z ≤ 5. Sans borne : C(9, 2) = 36. Une variable ≥ 6 : on retire 6, reste une somme de 1 en trois variables, 3 solutions, et 3 choix de la variable : 9. Donc 36 − 9 = 27.</p><p>La probabilité est <strong>1/8</strong>.</p>`
  },
  {
    id: "combi-34",
    theme: "combi",
    niveau: 3,
    type: "demo",
    titre: `Comités avec président`,
    enonce: `<p>Soit n ≥ 1. Démontrer, par un raisonnement de dénombrement, que</p><div class="calc">1 × C(n, 1) + 2 × C(n, 2) + 3 × C(n, 3) + … + n × C(n, n) = n × 2<sup>n−1</sup>.</div><p>Vérifier la formule pour n = 4.</p>`,
    figure: ``,
    reponse: [],
    reponseTexte: ``,
    pistes: [
      `<p>Dans un club de n personnes, on forme un comité (de taille quelconque, non vide) et on désigne un président <strong>parmi les membres du comité</strong>. Combien de façons ?</p>`,
      `<p>Première façon de compter : choisis d'abord la taille k du comité, puis le comité, puis son président. Qu'obtiens-tu pour k fixé ?</p>`,
      `<p>Deuxième façon : choisis d'abord le président (n choix), puis les autres membres du comité. Parmi qui, et combien de possibilités ?</p>`,
      `<p>Les autres membres forment un sous-ensemble quelconque des n − 1 personnes restantes : 2<sup>n−1</sup> choix. Les deux comptages donnent le même nombre.</p>`
    ],
    lecon: {
      titre: `Démonstration combinatoire d'une identité`,
      html: `<p>Pour démontrer une égalité entre deux expressions, on peut trouver <strong>un ensemble d'objets</strong> que chaque membre compte, de deux façons différentes. C'est le <strong>double comptage</strong>.</p><p>Méthode :</p><ol><li>interpréter chaque terme (C(n, k) = choix d'un groupe, 2<sup>m</sup> = choix d'un sous-ensemble quelconque, un facteur k = choix d'un élément parmi k…) ;</li><li>inventer une « histoire » qui produit ces objets ;</li><li>raconter l'histoire dans deux ordres différents.</li></ol><div class="exemple">k × C(n, k) = n × C(n − 1, k − 1) : choisir un comité de k personnes puis son président, ou choisir d'abord le président puis les k − 1 autres membres.</div><div class="astuce">Astuce olympique : un produit comme k × C(n, k) suggère presque toujours « un groupe <em>avec un élément distingué</em> » (chef, capitaine, président).</div>`
    },
    correction: `<p>Considérons un club de n personnes et comptons de deux façons le nombre N de couples (comité, président) où le comité est un groupe non vide de personnes du club et le président est un membre du comité.</p><p><strong>Premier comptage (par taille du comité).</strong> Pour k fixé entre 1 et n, il y a C(n, k) comités de k personnes, et pour chacun k choix de président. Les tailles différentes donnent des couples différents, donc</p><div class="calc">N = 1 × C(n, 1) + 2 × C(n, 2) + … + n × C(n, n).</div><p><strong>Second comptage (président d'abord).</strong> On choisit le président : n possibilités. Les autres membres du comité forment un sous-ensemble quelconque (éventuellement vide) des n − 1 autres personnes : 2<sup>n−1</sup> possibilités. Chaque couple (comité, président) est obtenu exactement une fois. Donc N = n × 2<sup>n−1</sup>.</p><p>Les deux expressions sont égales à N, ce qui démontre l'identité.</p><p><strong>Vérification pour n = 4 :</strong> 1 × 4 + 2 × 6 + 3 × 4 + 4 × 1 = 4 + 12 + 12 + 4 = 32 = 4 × 2<sup>3</sup>.</p>`,
    bareme: [
      `Définir clairement les objets comptés (comité non vide + président membre).`,
      `Premier comptage : k × C(n, k) pour chaque taille, puis somme.`,
      `Second comptage : n choix de président puis 2ⁿ⁻¹ sous-ensembles.`,
      `Justifier que chaque objet est compté une seule fois dans chaque méthode et conclure.`,
      `Vérifier pour n = 4 (32).`
    ]
  },
  {
    id: "combi-35",
    theme: "combi",
    niveau: 3,
    type: "reponse",
    titre: `Triangles dans le triangle`,
    enonce: `<p>Un grand triangle équilatéral de côté 4 est découpé en <strong>16</strong> petits triangles équilatéraux de côté 1 (voir la figure).</p><p>Combien de <strong>triangles</strong> (de toutes tailles) peut-on voir dans cette figure ?</p>`,
    figure: `<svg viewBox="0 0 320 250" width="300" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="1.8" fill="none"><polygon points="40,230 280,230 160,22.2"/><line x1="70" y1="178" x2="250" y2="178"/><line x1="100" y1="126.1" x2="220" y2="126.1"/><line x1="130" y1="74.1" x2="190" y2="74.1"/><line x1="100" y1="230" x2="190" y2="74.1"/><line x1="160" y1="230" x2="220" y2="126.1"/><line x1="220" y1="230" x2="250" y2="178"/><line x1="100" y1="230" x2="70" y2="178"/><line x1="160" y1="230" x2="100" y2="126.1"/><line x1="220" y1="230" x2="130" y2="74.1"/></g></svg>`,
    reponse: ["27", "vingt-sept"],
    reponseTexte: `27`,
    pistes: [
      `<p>Les triangles de la figure sont tous équilatéraux. Certains ont la pointe <strong>en haut</strong>, d'autres la pointe <strong>en bas</strong>. Compte-les séparément.</p>`,
      `<p>Pointe en haut, taille 1 : compte ligne par ligne (1, 2, 3, 4). Taille 2 : repère chaque triangle par son sommet du haut. Où peut-il être ?</p>`,
      `<p>Pointe en haut : 10 de taille 1, 6 de taille 2, 3 de taille 3, 1 de taille 4. Pointe en bas : combien de taille 1 ? de taille 2 ? En existe-t-il de taille 3 ?</p>`,
      `<p>Pointe en bas : 6 de taille 1 et 1 de taille 2 (au centre). Additionne tout.</p>`
    ],
    lecon: {
      titre: `Compter des figures : taille ET orientation`,
      html: `<p>Pour compter des triangles dans un réseau triangulaire, on classe selon <strong>deux critères</strong> : l'orientation (pointe en haut ▲ ou en bas ▼) et la taille.</p><ul><li>Un triangle ▲ de taille s est repéré par son <strong>sommet du haut</strong>, qui doit être assez haut pour que le triangle tienne dans la figure. Dans un grand triangle de côté n, il y en a 1 + 2 + … + (n − s + 1).</li><li>Un triangle ▼ de taille s doit laisser de la place au-dessus et en dessous : il n'en existe que si 2s ≤ n.</li></ul><div class="exemple">Côté 3 : ▲ : 6 + 3 + 1 = 10 ; ▼ : 3 de taille 1 ; total 13.</div><div class="astuce">Astuce olympique : les petits cas (côté 1 : 1 ; côté 2 : 5 ; côté 3 : 13 ; côté 4 : 27) permettent de vérifier. Un comptage « à l'œil » oublie presque toujours les grands triangles pointe en bas.</div>`
    },
    correction: `<p>Toutes les lignes de la figure sont parallèles à l'un des trois côtés du grand triangle ; un triangle de la figure a donc ses trois côtés dans les trois directions : il est équilatéral, pointe en haut (▲) ou pointe en bas (▼). Notons les lignes horizontales 0 (sommet) à 4 (base).</p><p><strong>Triangles ▲.</strong> Un triangle ▲ de taille s a son sommet sur un nœud de la ligne j et sa base sur la ligne j + s ≤ 4. La ligne j contient j + 1 nœuds, et chacun convient. Donc :</p><ul><li>taille 1 : j = 0, 1, 2, 3 → 1 + 2 + 3 + 4 = 10 ;</li><li>taille 2 : j = 0, 1, 2 → 1 + 2 + 3 = 6 ;</li><li>taille 3 : j = 0, 1 → 1 + 2 = 3 ;</li><li>taille 4 : 1.</li></ul><p>Soit 20 triangles ▲.</p><p><strong>Triangles ▼.</strong> Parmi les 16 petits triangles, 10 sont ▲, donc 6 sont ▼ de taille 1. Un ▼ de taille 2 a sa base (côté du haut) sur une ligne j et sa pointe sur la ligne j + 2, et sa base doit tenir dans la ligne j, de longueur j : il faut j ≥ 2 et j + 2 ≤ 4, donc j = 2, et la ligne 2 (longueur 2) contient une seule position. Il y a 1 triangle ▼ de taille 2 ; aucun de taille ≥ 3 (il faudrait j ≥ 3 et j + 3 ≤ 4). Soit 7 triangles ▼.</p><div class="calc">20 + 7 = 27.</div><p>On voit <strong>27</strong> triangles.</p>`
  },
  {
    id: "combi-36",
    theme: "combi",
    niveau: 3,
    type: "reponse",
    titre: `Le Père Noël secret`,
    enonce: `<p>Cinq amis écrivent chacun leur prénom sur un papier, mettent les papiers dans un chapeau, puis chacun tire un papier au hasard (sans remise). Si quelqu'un tire son propre prénom, il faut recommencer.</p><p>Parmi toutes les distributions possibles des papiers, combien sont telles que <strong>personne ne tire son propre prénom</strong> ?</p>`,
    figure: ``,
    reponse: ["44", "quarante-quatre"],
    reponseTexte: `44`,
    pistes: [
      `<p>Combien de distributions en tout ? Fais les petits cas : avec 2 amis, combien de « bonnes » distributions ? avec 3 ?</p>`,
      `<p>Compte plutôt les distributions où <strong>au moins une</strong> personne tire son prénom, avec l'inclusion-exclusion. Note A<sub>i</sub> : « la personne i tire son propre prénom ».</p>`,
      `<p>Combien de distributions dans A<sub>i</sub> ? Dans A<sub>i</sub> ∩ A<sub>j</sub> ? Dans l'intersection de k ensembles donnés ? Et combien de façons de choisir ces k ensembles ?</p>`,
      `<p>Intersection de k ensembles donnés : (5 − k)! distributions, et C(5, k) choix. Au moins un point fixe : 5 × 24 − 10 × 6 + 10 × 2 − 5 × 1 + 1 = 76.</p>`
    ],
    lecon: {
      titre: `Inclusion-exclusion générale et dérangements`,
      html: `<p>Avec plus de trois ensembles, la formule d'inclusion-exclusion continue avec des signes alternés :</p><div class="calc">|A<sub>1</sub> ∪ … ∪ A<sub>n</sub>| = Σ|A<sub>i</sub>| − Σ|A<sub>i</sub> ∩ A<sub>j</sub>| + Σ|A<sub>i</sub> ∩ A<sub>j</sub> ∩ A<sub>k</sub>| − …</div><p>(on additionne les intersections d'un nombre impair d'ensembles et on retranche celles d'un nombre pair).</p><p>Une permutation où <strong>aucun</strong> élément ne reste à sa place s'appelle un <strong>dérangement</strong>. Leur nombre D<sub>n</sub> vérifie D<sub>1</sub> = 0, D<sub>2</sub> = 1, D<sub>3</sub> = 2, D<sub>4</sub> = 9, D<sub>5</sub> = 44, et la récurrence</p><div class="calc">D<sub>n</sub> = (n − 1)(D<sub>n−1</sub> + D<sub>n−2</sub>)</div><div class="exemple">D<sub>3</sub> = 2 : pour ABC, les dérangements sont BCA et CAB.</div><div class="astuce">Astuce olympique : la proportion de dérangements D<sub>n</sub>/n! se rapproche très vite de 1/e ≈ 0,368, quel que soit n. Avec 5 amis, on recommence donc environ 2 fois sur 3 !</div>`
    },
    correction: `<p>Une distribution est une permutation des 5 prénoms : il y en a 5! = 120. Numérotons les amis de 1 à 5 et notons A<sub>i</sub> l'ensemble des distributions où l'ami i tire son propre prénom.</p><p><strong>Intersections.</strong> Si k amis donnés tirent leur propre prénom, les 5 − k autres papiers se répartissent librement entre les 5 − k autres amis : (5 − k)! distributions. Il y a C(5, k) façons de choisir ces k amis.</p><p><strong>Inclusion-exclusion :</strong></p><div class="calc">|A<sub>1</sub> ∪ … ∪ A<sub>5</sub>| = C(5,1)·4! − C(5,2)·3! + C(5,3)·2! − C(5,4)·1! + C(5,5)·0!<br>= 120 − 60 + 20 − 5 + 1 = 76.</div><p>Le nombre de distributions où personne ne tire son prénom est donc 120 − 76 = <strong>44</strong>.</p><p><em>Vérification par récurrence :</em> D<sub>1</sub> = 0, D<sub>2</sub> = 1, D<sub>3</sub> = 2 × (1 + 0) = 2, D<sub>4</sub> = 3 × (2 + 1) = 9, D<sub>5</sub> = 4 × (9 + 2) = 44.</p><p><em>Pour aller plus loin :</em> la probabilité de réussir du premier coup est 44/120 = 11/30.</p>`
  },
  {
    id: "combi-37",
    theme: "combi",
    niveau: 3,
    type: "demo",
    titre: `Découper un nombre en morceaux`,
    enonce: `<p>On appelle <strong>décomposition ordonnée</strong> d'un entier n ≥ 1 une écriture de n comme somme d'entiers strictement positifs, en tenant compte de l'ordre. Par exemple, 3 a quatre décompositions ordonnées : 3, 2 + 1, 1 + 2, 1 + 1 + 1.</p><ol><li>Démontrer que n possède exactement <strong>2<sup>n−1</sup></strong> décompositions ordonnées.</li><li>Démontrer que le nombre de décompositions ordonnées de n en exactement k termes est C(n − 1, k − 1).</li></ol>`,
    figure: ``,
    reponse: [],
    reponseTexte: ``,
    pistes: [
      `<p>Liste les décompositions de 4. En trouves-tu 8 ?</p>`,
      `<p>Écris n sous la forme de n bâtons alignés : | | | | (pour n = 4). Entre deux bâtons voisins, il y a un « espace ». Combien d'espaces ?</p>`,
      `<p>Dans chaque espace, on peut mettre un signe « + » ou rien. Que représente un tel choix ? Par exemple | | + | + | pour n = 4.</p>`,
      `<p>Montre que c'est une bijection entre les décompositions et les façons de choisir un sous-ensemble des n − 1 espaces. Pour k termes, il faut exactement k − 1 signes « + ».</p>`
    ],
    lecon: {
      titre: `Bijection avec des coupures`,
      html: `<p>Beaucoup d'objets « découpés » se codent par l'ensemble des <strong>endroits où l'on coupe</strong>.</p><p>Pour une somme ordonnée de n : on aligne n unités ; il y a n − 1 intervalles entre unités voisines ; une décomposition correspond exactement au choix des intervalles où l'on coupe.</p><div class="exemple">n = 5 : ●● | ● | ●● représente 2 + 1 + 2 ; les coupures sont dans les intervalles 2 et 3 (parmi 1, 2, 3, 4).</div><p>Conséquences : 2<sup>n−1</sup> décompositions au total, et C(n − 1, k − 1) en k termes (k − 1 coupures).</p><div class="astuce">Astuce olympique : c'est la version « termes ≥ 1 » des étoiles et barres. Pour des termes ≥ 0, on ajoute 1 à chaque terme : les solutions de x<sub>1</sub> + … + x<sub>k</sub> = n en entiers ≥ 0 correspondent aux décompositions de n + k en k termes ≥ 1, d'où C(n + k − 1, k − 1).</div>`
    },
    correction: `<p>Représentons n par n points alignés. Entre deux points consécutifs il y a un intervalle : il y a n − 1 intervalles, numérotés de 1 à n − 1.</p><p><strong>La correspondance.</strong> À une décomposition n = a<sub>1</sub> + a<sub>2</sub> + … + a<sub>k</sub>, associons l'ensemble des « coupures » {a<sub>1</sub>, a<sub>1</sub> + a<sub>2</sub>, …, a<sub>1</sub> + … + a<sub>k−1</sub>}. Ce sont k − 1 entiers strictement croissants (car les a<sub>i</sub> ≥ 1) compris entre 1 et n − 1 (car a<sub>k</sub> ≥ 1) : c'est un sous-ensemble de {1, …, n − 1} à k − 1 éléments.</p><p><strong>Réciproque.</strong> Un sous-ensemble {c<sub>1</sub> &lt; c<sub>2</sub> &lt; … &lt; c<sub>k−1</sub>} de {1, …, n − 1} donne la décomposition a<sub>1</sub> = c<sub>1</sub>, a<sub>2</sub> = c<sub>2</sub> − c<sub>1</sub>, …, a<sub>k</sub> = n − c<sub>k−1</sub>, dont tous les termes sont ≥ 1 et de somme n, et c'est la seule décomposition qui donne ces coupures.</p><p>On a donc une bijection entre les décompositions ordonnées de n et les sous-ensembles de {1, …, n − 1}, qui envoie les décompositions en k termes sur les sous-ensembles à k − 1 éléments.</p><p><strong>1.</strong> {1, …, n − 1} a 2<sup>n−1</sup> sous-ensembles : n a <strong>2<sup>n−1</sup></strong> décompositions ordonnées.</p><p><strong>2.</strong> Il y a C(n − 1, k − 1) sous-ensembles à k − 1 éléments : n a <strong>C(n − 1, k − 1)</strong> décompositions en k termes.</p><p><em>Vérification :</em> pour n = 4 : 4 ; 3+1, 1+3, 2+2 ; 2+1+1, 1+2+1, 1+1+2 ; 1+1+1+1. Soit 1 + 3 + 3 + 1 = 8 = 2<sup>3</sup>.</p>`,
    bareme: [
      `Introduire le codage par les positions des coupures (ou des « + »).`,
      `Vérifier que le codage donne bien un sous-ensemble de {1, …, n − 1}.`,
      `Justifier la réciproque (bijection).`,
      `Conclure 2ⁿ⁻¹ pour le total.`,
      `Conclure C(n − 1, k − 1) pour k termes.`
    ]
  },
  {
    id: "combi-38",
    theme: "combi",
    niveau: 3,
    type: "demo",
    titre: `L'échiquier écorné`,
    enonce: `<p>On retire d'un échiquier 8 × 8 deux cases situées dans des <strong>coins opposés</strong> (voir figure). Il reste 62 cases.</p><p>Démontrer qu'il est <strong>impossible</strong> de recouvrir exactement ces 62 cases avec 31 dominos 1 × 2 (chaque domino couvre deux cases voisines ; pas de chevauchement ni de débordement).</p>`,
    figure: `<svg viewBox="0 0 320 216" width="280" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" fill="none"><rect x="56" y="4" width="208" height="208" stroke-width="2"/><line x1="82" y1="4" x2="82" y2="212"/><line x1="56" y1="30" x2="264" y2="30"/><line x1="108" y1="4" x2="108" y2="212"/><line x1="56" y1="56" x2="264" y2="56"/><line x1="134" y1="4" x2="134" y2="212"/><line x1="56" y1="82" x2="264" y2="82"/><line x1="160" y1="4" x2="160" y2="212"/><line x1="56" y1="108" x2="264" y2="108"/><line x1="186" y1="4" x2="186" y2="212"/><line x1="56" y1="134" x2="264" y2="134"/><line x1="212" y1="4" x2="212" y2="212"/><line x1="56" y1="160" x2="264" y2="160"/><line x1="238" y1="4" x2="238" y2="212"/><line x1="56" y1="186" x2="264" y2="186"/><line x1="60" y1="8" x2="78" y2="26" stroke-width="2"/><line x1="78" y1="8" x2="60" y2="26" stroke-width="2"/><line x1="242" y1="190" x2="260" y2="208" stroke-width="2"/><line x1="260" y1="190" x2="242" y2="208" stroke-width="2"/></g></svg>`,
    reponse: [],
    reponseTexte: ``,
    pistes: [
      `<p>Le nombre de cases (62) est pair : ce n'est donc pas ce qui bloque. Il faut trouver une autre quantité à comparer.</p>`,
      `<p>Pense aux couleurs d'un vrai échiquier : les cases sont noires et blanches, en alternance. Que couvre un domino ?</p>`,
      `<p>Les deux coins retirés ont-ils la même couleur ? Combien reste-t-il de cases noires ? de cases blanches ?</p>`,
      `<p>31 dominos couvrent 31 cases noires et 31 cases blanches. Compare avec ce qui reste.</p>`
    ],
    lecon: {
      titre: `Le coloriage : un invariant pour les pavages`,
      html: `<p>Pour prouver qu'un pavage est <strong>impossible</strong>, on colorie les cases de façon astucieuse de sorte que chaque pièce couvre toujours <strong>le même nombre de cases de chaque couleur</strong>. On compare ensuite avec les cases de la région : si les nombres ne collent pas, le pavage est impossible.</p><p>Le coloriage en damier est le plus courant : deux cases voisines ont des couleurs différentes, donc un domino couvre <strong>une case noire et une case blanche</strong>.</p><div class="exemple">Un rectangle 3 × 3 privé de sa case centrale (8 cases) : 4 noires et 4 blanches, et il est bien pavable. En revanche, privé d'un coin, il reste 3 noires et 5 blanches (si les coins sont noirs) : impossible.</div><div class="astuce">Astuce olympique : pour d'autres pièces (triminos 1 × 3, tétraminos…), on essaie des coloriages en bandes, en diagonales ou avec 3 ou 4 couleurs. L'idée reste la même : trouver une quantité que chaque pièce modifie toujours de la même façon.</div>`
    },
    correction: `<p>Colorions l'échiquier en damier, comme un échiquier ordinaire : la case de la ligne i et de la colonne j est noire si i + j est pair, blanche sinon. L'échiquier complet a 32 cases noires et 32 cases blanches.</p><p><strong>Les coins retirés.</strong> Les coins opposés sont les cases (1, 1) et (8, 8) : les sommes 2 et 16 sont paires, donc ces deux cases sont noires. Il reste 30 cases noires et 32 cases blanches.</p><p><strong>Ce que couvre un domino.</strong> Un domino couvre deux cases voisines, qui diffèrent d'une unité sur la ligne ou sur la colonne : les sommes i + j diffèrent de 1, donc les deux cases sont de couleurs différentes. Chaque domino couvre exactement une case noire et une case blanche.</p><p><strong>Conclusion.</strong> Si 31 dominos recouvraient exactement les 62 cases, ils couvriraient 31 cases noires. Or il n'en reste que 30 : contradiction. Le pavage est <strong>impossible</strong>.</p><p><em>Pour aller plus loin :</em> si l'on retire une case noire et une case blanche <strong>quelconques</strong>, le pavage est toujours possible (théorème de Gomory) : on peut parcourir tout l'échiquier par un circuit fermé passant par toutes les cases, puis le découper en dominos.</p>`,
    bareme: [
      `Introduire le coloriage en damier.`,
      `Montrer que les deux coins retirés sont de la même couleur et compter 30 / 32.`,
      `Justifier qu'un domino couvre toujours une case de chaque couleur.`,
      `Conclure par la contradiction (31 ≠ 30).`
    ]
  },
  {
    id: "combi-39",
    theme: "combi",
    niveau: 3,
    type: "reponse",
    titre: `Dominos et carrés`,
    enonce: `<p>On veut paver une bande de <strong>2 cases de haut</strong> et <strong>8 cases de long</strong> en utilisant deux sortes de pièces : des <strong>dominos 1 × 2</strong> (que l'on peut poser horizontalement ou verticalement) et des <strong>carrés 2 × 2</strong>. On peut utiliser autant de pièces de chaque sorte que l'on veut.</p><p>Combien y a-t-il de pavages différents ?</p>`,
    figure: ``,
    reponse: ["171", "cent soixante et onze", "cent soixante-et-onze"],
    reponseTexte: `171`,
    pistes: [
      `<p>Note t<sub>n</sub> le nombre de pavages d'une bande 2 × n. Calcule t<sub>1</sub> et t<sub>2</sub> à la main.</p>`,
      `<p>Regarde comment est couverte la case en haut à gauche. Il y a trois possibilités : laquelle laisse une bande 2 × (n − 1) ? lesquelles laissent une bande 2 × (n − 2) ?</p>`,
      `<p>Tu dois obtenir t<sub>n</sub> = t<sub>n−1</sub> + 2 t<sub>n−2</sub>. Justifie bien que le cas « domino horizontal » force un second domino horizontal en dessous.</p>`,
      `<p>t<sub>1</sub> = 1, t<sub>2</sub> = 3. Calcule jusqu'à t<sub>8</sub>.</p>`
    ],
    lecon: {
      titre: `Récurrences linéaires : au-delà de Fibonacci`,
      html: `<p>La méthode « regarder comment le coin est couvert » donne une récurrence dont les <strong>coefficients</strong> comptent le nombre de façons de faire chaque « premier pas ».</p><div class="calc">t<sub>n</sub> = a × t<sub>n−1</sub> + b × t<sub>n−2</sub></div><p>où a est le nombre de façons de couvrir exactement la première colonne, et b le nombre de façons de couvrir exactement les deux premières colonnes <strong>sans pouvoir les séparer</strong> en deux colonnes indépendantes.</p><div class="exemple">Escalier où l'on monte 1, 2 ou 3 marches à la fois : e<sub>n</sub> = e<sub>n−1</sub> + e<sub>n−2</sub> + e<sub>n−3</sub>. Pour 10 marches : 274.</div><div class="astuce">Astuce olympique : attention au double comptage des « premiers pas ». Deux verticaux côte à côte ne comptent pas dans b : ils sont déjà comptés via deux fois « une colonne ». Seuls les blocs <em>insécables</em> comptent.</div>`
    },
    correction: `<p>Notons t<sub>n</sub> le nombre de pavages d'une bande 2 × n (et t<sub>0</sub> = 1). On a t<sub>1</sub> = 1 (un domino vertical) et t<sub>2</sub> = 3 (deux verticaux, deux horizontaux, ou un carré).</p><p><strong>Récurrence.</strong> Pour n ≥ 2, considérons la pièce qui couvre la case en haut à gauche :</p><ul><li><strong>un domino vertical</strong> : il couvre la première colonne ; le reste est un pavage quelconque de 2 × (n − 1) : t<sub>n−1</sub> pavages ;</li><li><strong>un domino horizontal</strong> : la case en bas à gauche ne peut plus être couverte que par un domino horizontal (un vertical chevaucherait, un carré aussi) ; les deux premières colonnes sont couvertes, reste 2 × (n − 2) : t<sub>n−2</sub> pavages ;</li><li><strong>un carré 2 × 2</strong> : il couvre les deux premières colonnes, reste 2 × (n − 2) : t<sub>n−2</sub> pavages.</li></ul><p>Les trois cas sont disjoints et exhaustifs : t<sub>n</sub> = t<sub>n−1</sub> + 2 t<sub>n−2</sub>.</p><div class="calc">t<sub>1</sub> = 1, t<sub>2</sub> = 3, t<sub>3</sub> = 5, t<sub>4</sub> = 11, t<sub>5</sub> = 21, t<sub>6</sub> = 43, t<sub>7</sub> = 85, t<sub>8</sub> = 171.</div><p>Il y a <strong>171</strong> pavages.</p><p><em>Pour aller plus loin :</em> on peut montrer que t<sub>n</sub> = (2<sup>n+1</sup> + (−1)<sup>n</sup>)/3. Vérifie : (512 + 1)/3 = 171.</p>`
  },
  {
    id: "combi-40",
    theme: "combi",
    niveau: 3,
    type: "demo",
    titre: `Le rectangle monochrome`,
    enonce: `<p>On colorie chacune des cases d'une grille de <strong>3 lignes et 7 colonnes</strong> en noir ou en blanc.</p><ol><li>Démontrer que, quel que soit le coloriage, on peut trouver <strong>quatre cases de même couleur</strong> qui sont les <strong>coins d'un rectangle</strong> (c'est-à-dire situées à l'intersection de deux lignes et de deux colonnes).</li><li>Montrer que le résultat est faux pour une grille de 3 lignes et 6 colonnes.</li></ol>`,
    figure: ``,
    reponse: [],
    reponseTexte: ``,
    pistes: [
      `<p>Regarde une seule colonne : 3 cases, 2 couleurs. Que peut-on toujours y trouver ?</p>`,
      `<p>Dans chaque colonne, il y a au moins deux cases de la même couleur. Décris cette information par un « type » : quelle paire de lignes, et quelle couleur. Combien de types possibles ?</p>`,
      `<p>Il y a C(3, 2) = 3 paires de lignes et 2 couleurs : 6 types. Avec 7 colonnes, que dit le principe des tiroirs ?</p>`,
      `<p>Deux colonnes ont le même type : même paire de lignes, même couleur. Où sont les quatre coins ? Pour la question 2, construis 6 colonnes qui ont toutes des types différents et une seule paire monochrome chacune.</p>`
    ],
    lecon: {
      titre: `Tiroirs + dénombrement : choisir le bon « type »`,
      html: `<p>Pour appliquer le principe des tiroirs dans un problème compliqué, il faut inventer les <strong>bons tiroirs</strong>. Méthode :</p><ol><li>associer à chaque objet (ici chaque colonne) une information qu'il possède <strong>forcément</strong> (ici : une paire monochrome et sa couleur) ;</li><li><strong>dénombrer</strong> les valeurs possibles de cette information (c'est là qu'intervient la combinatoire : C(3, 2) × 2 = 6) ;</li><li>s'il y a plus d'objets que de valeurs, deux objets partagent la même information, et on conclut.</li></ol><div class="exemple">Parmi 11 entiers, deux ont la même écriture du chiffre des unités ; parmi 13 personnes, deux sont nées le même mois.</div><div class="astuce">Astuce olympique : le nombre de tiroirs donne souvent la constante exacte du problème. Ici 6 types → 7 colonnes suffisent. Pour prouver que 6 ne suffisent pas, on construit un exemple qui utilise chaque tiroir <em>exactement une fois</em>.</div>`
    },
    correction: `<p><strong>1.</strong> Numérotons les lignes 1, 2, 3.</p><p><strong>Chaque colonne contient une paire monochrome.</strong> Une colonne a 3 cases et il y a 2 couleurs : d'après le principe des tiroirs, deux de ses cases au moins ont la même couleur. Choisissons, dans chaque colonne, une telle paire de cases ; on appelle <strong>type</strong> de la colonne le couple (paire de lignes, couleur) correspondant.</p><p><strong>Nombre de types.</strong> Il y a C(3, 2) = 3 paires de lignes ({1, 2}, {1, 3}, {2, 3}) et 2 couleurs : 3 × 2 = 6 types possibles.</p><p><strong>Tiroirs.</strong> Il y a 7 colonnes et seulement 6 types : deux colonnes distinctes c et c' ont le même type, par exemple la paire de lignes {i, j} et la couleur noire. Alors les cases (i, c), (j, c), (i, c'), (j, c') sont toutes noires : ce sont les quatre coins d'un rectangle monochrome.</p><p><strong>2.</strong> Voici un coloriage 3 × 6 sans rectangle monochrome (N = noir, B = blanc), colonne par colonne de haut en bas :</p><div class="calc">NNB, NBN, BNN, BBN, BNB, NBB</div><p>Chaque colonne contient exactement deux cases d'une couleur et une de l'autre, donc une seule paire monochrome, et les 6 colonnes ont des types deux à deux différents (les trois premières ont une paire noire sur des lignes différentes, les trois dernières une paire blanche sur des lignes différentes). Un rectangle monochrome demanderait deux colonnes ayant une paire de même couleur sur les mêmes lignes, c'est-à-dire deux colonnes de même type : impossible. Le résultat est donc faux pour 6 colonnes.</p><p><em>Pour aller plus loin :</em> avec 4 lignes, combien de colonnes faut-il pour être sûr d'avoir un rectangle monochrome ? (Cherche le bon nombre de types !)</p>`,
    bareme: [
      `Montrer que chaque colonne contient deux cases de même couleur (tiroirs).`,
      `Définir le type (paire de lignes, couleur) et dénombrer 6 types.`,
      `Appliquer le principe des tiroirs aux 7 colonnes et en déduire le rectangle.`,
      `Donner un contre-exemple 3 × 6 et justifier qu'il ne contient aucun rectangle monochrome.`
    ]
  }
]);
