window.PROBLEMES = (window.PROBLEMES || []).concat([
  {
    id: "logique-01",
    theme: "logique",
    niveau: 1,
    type: "reponse",
    titre: `Trois habitants de l'île`,
    enonce: `<p>Sur une île vivent des <strong>chevaliers</strong>, qui disent toujours la vérité, et des <strong>menteurs</strong>, qui mentent toujours. Tu rencontres trois habitants, A, B et C.</p>
<ul>
<li>A déclare : « Nous sommes tous les trois des menteurs. »</li>
<li>B déclare : « Exactement un d'entre nous trois est un chevalier. »</li>
</ul>
<p>C ne dit rien. Combien y a-t-il de chevaliers parmi A, B et C ?</p>`,
    figure: ``,
    reponse: ["1", "un"],
    reponseTexte: `1 (seul B est chevalier)`,
    pistes: [
      `<p>Commence par A. Si A était un chevalier, sa phrase serait vraie… Que dirait-elle alors de A lui-même ?</p>`,
      `<p>A ne peut pas être chevalier (un chevalier ne peut pas affirmer qu'il est menteur). Donc A est un menteur, et sa phrase est fausse : il y a <em>au moins un</em> chevalier.</p>`,
      `<p>Teste maintenant les deux cas pour B : chevalier ou menteur. Dans chaque cas, que peut être C ?</p>`,
      `<p>Si B est menteur, alors A et B sont menteurs, et il faut au moins un chevalier : c'est forcément C. Compte alors les chevaliers : la phrase de B serait-elle vraie ou fausse ?</p>`
    ],
    lecon: {
      titre: `Chevaliers et menteurs : l'analyse par cas`,
      html: `<p>Dans les énigmes de chevaliers et de menteurs, chaque personne a un <strong>type</strong> (chevalier ou menteur) et chaque phrase prononcée est vraie si et seulement si celui qui la dit est chevalier.</p>
<p>La méthode sûre : <strong>faire des hypothèses et les tester</strong>. On suppose que telle personne est chevalier, on déduit tout ce qu'on peut, et on regarde si l'on tombe sur une contradiction. Si oui, l'hypothèse est fausse.</p>
<div class="exemple">Quelqu'un dit « Je suis un menteur ». Chevalier ? Il dirait une chose fausse : impossible. Menteur ? Sa phrase serait vraie : impossible aussi. Cette phrase ne peut donc être prononcée par personne sur l'île !</div>
<p>De même, un habitant ne peut jamais dire « Nous sommes tous menteurs » en étant chevalier : cette phrase trahit donc toujours un menteur, et elle est fausse, ce qui prouve qu'il existe au moins un chevalier.</p>
<div class="astuce">Astuce olympique : repère d'abord les phrases « auto-référentes » (qui parlent de celui qui les dit). Elles donnent souvent immédiatement le type de quelqu'un et font tomber tout le reste.</div>`
    },
    correction: `<p><strong>A est un menteur.</strong> Si A était chevalier, sa phrase serait vraie, donc A serait menteur : contradiction. Donc A ment, et sa phrase « nous sommes tous menteurs » est fausse : il y a au moins un chevalier parmi A, B, C.</p>
<p><strong>Cas 1 : B est chevalier.</strong> Sa phrase est vraie : il y a exactement un chevalier, c'est B. Donc C est menteur. On vérifie : A menteur (sa phrase est bien fausse), B chevalier (sa phrase est vraie : un seul chevalier). Tout est cohérent.</p>
<p><strong>Cas 2 : B est menteur.</strong> A et B sont menteurs ; comme il faut au moins un chevalier, C est chevalier. Il y a alors exactement un chevalier, donc la phrase de B est vraie… alors que B ment : contradiction.</p>
<p>Seul le cas 1 est possible : <strong>il y a exactement 1 chevalier</strong> (B).</p>
<p><em>Erreur fréquente :</em> oublier de vérifier que la solution trouvée est vraiment cohérente. Il faut toujours relire chaque phrase avec les types trouvés.</p>`
  },
  {
    id: "logique-02",
    theme: "logique",
    niveau: 1,
    type: "reponse",
    titre: `Chaussettes dans le noir`,
    enonce: `<p>Un tiroir contient 10 chaussettes rouges, 8 chaussettes bleues et 6 chaussettes vertes, bien mélangées. La lumière est en panne et on prend les chaussettes au hasard, sans voir leur couleur.</p>
<p>Combien de chaussettes faut-il prendre, <strong>au minimum</strong>, pour être <strong>certain</strong> d'avoir 3 chaussettes de la même couleur ?</p>`,
    figure: ``,
    reponse: ["7", "sept"],
    reponseTexte: `7`,
    pistes: [
      `<p>Mets-toi dans la peau d'un « malchanceux » : combien de chaussettes peut-on prendre en <em>évitant</em> d'avoir 3 chaussettes de la même couleur ?</p>`,
      `<p>Pour éviter 3 chaussettes d'une même couleur, on peut prendre au plus 2 chaussettes de chaque couleur.</p>`,
      `<p>Avec 3 couleurs, le pire cas contient donc 2 + 2 + 2 = 6 chaussettes sans trois de même couleur. Que se passe-t-il avec une chaussette de plus ?</p>`,
      `<p>Il reste à montrer que 7 chaussettes suffisent toujours : si chaque couleur apparaissait au plus 2 fois, combien de chaussettes aurait-on au maximum ?</p>`
    ],
    lecon: {
      titre: `Le principe des tiroirs (version simple et généralisée)`,
      html: `<p><strong>Principe des tiroirs.</strong> Si l'on range n + 1 objets dans n tiroirs, un tiroir contient au moins 2 objets.</p>
<p><strong>Version généralisée.</strong> Si l'on range plus de k × n objets dans n tiroirs, un tiroir contient au moins k + 1 objets. (Sinon chaque tiroir contiendrait au plus k objets, soit au plus k × n objets en tout.)</p>
<div class="exemple">Ici, les « tiroirs » sont les 3 couleurs et les « objets » les chaussettes. Avec 7 &gt; 2 × 3 chaussettes, une couleur apparaît au moins 3 fois.</div>
<p>Dans une question « combien au minimum pour être sûr », il y a toujours <strong>deux choses à montrer</strong> :</p>
<ul><li>que ce nombre <strong>suffit</strong> (principe des tiroirs) ;</li>
<li>qu'un nombre plus petit <strong>ne suffit pas</strong> (on exhibe le « pire cas »).</li></ul>
<div class="astuce">Astuce olympique : pense toujours au pire cas, celui d'un adversaire qui te donne les chaussettes les plus mal choisies possibles.</div>`
    },
    correction: `<p><strong>6 chaussettes ne suffisent pas.</strong> On peut tirer 2 rouges, 2 bleues et 2 vertes : on a 6 chaussettes et aucune couleur n'apparaît 3 fois.</p>
<p><strong>7 chaussettes suffisent.</strong> Si parmi 7 chaussettes chaque couleur apparaissait au plus 2 fois, on aurait au plus 2 × 3 = 6 chaussettes : contradiction. Donc une couleur apparaît au moins 3 fois (principe des tiroirs généralisé, avec 3 tiroirs = 3 couleurs).</p>
<p>La réponse est <strong>7</strong>.</p>
<p><em>Remarque :</em> les nombres 10, 8, 6 ne servent à rien ici, sauf à vérifier que chaque couleur possède bien au moins 2 chaussettes (pour que le pire cas existe). Pour aller plus loin : combien faut-il en tirer pour être sûr d'avoir 2 chaussettes <em>bleues</em> ? (Réponse : 10 + 6 + 2 = 18.)</p>`
  },
  {
    id: "logique-03",
    theme: "logique",
    niveau: 1,
    type: "demo",
    titre: `Sept pièces à retourner`,
    enonce: `<p>Sept pièces sont posées sur une table, toutes côté <strong>pile</strong>. À chaque coup, on doit retourner <strong>exactement deux</strong> pièces (au choix).</p>
<p>Peut-on, après un certain nombre de coups, obtenir les sept pièces côté <strong>face</strong> ? Justifier.</p>`,
    figure: ``,
    pistes: [
      `<p>Essaie avec 3 pièces au lieu de 7 : arrives-tu à les mettre toutes côté face ? Et avec 4 pièces ?</p>`,
      `<p>Regarde le nombre de pièces côté face. Au départ il vaut 0. De combien peut-il changer en un coup ?</p>`,
      `<p>En retournant deux pièces, le nombre de faces augmente de 2, diminue de 2, ou ne change pas. Que dire de sa <strong>parité</strong> ?</p>`,
      `<p>Le nombre de faces reste toujours pair. Or on voudrait 7 faces…</p>`
    ],
    lecon: {
      titre: `Les invariants : la parité`,
      html: `<p>Quand un problème décrit des <strong>opérations répétées</strong> et demande « peut-on atteindre telle situation ? », on cherche un <strong>invariant</strong> : une quantité qui ne change jamais, quelle que soit l'opération.</p>
<p>Si l'invariant n'a pas la même valeur dans la situation de départ et dans la situation d'arrivée, alors l'arrivée est <strong>impossible</strong>.</p>
<p>L'invariant le plus fréquent est la <strong>parité</strong> (pair ou impair) d'un nombre bien choisi : nombre d'objets d'un certain type, somme de nombres, etc.</p>
<div class="exemple">Retourner 2 pièces change le nombre de faces de −2, 0 ou +2 : un nombre pair. Donc la parité du nombre de faces ne change jamais.</div>
<div class="astuce">Astuce olympique : pour trouver un invariant, regarde ce que fait une seule opération sur des quantités simples (nombre de…, somme de…) et demande-toi « qu'est-ce qui ne bouge pas ? ».</div>`
    },
    correction: `<p><strong>Réponse : non.</strong></p>
<p>Notons F le nombre de pièces côté face. Au départ, F = 0.</p>
<p>Lors d'un coup, on retourne deux pièces :</p>
<ul><li>deux piles deviennent faces : F augmente de 2 ;</li>
<li>deux faces deviennent piles : F diminue de 2 ;</li>
<li>une pile et une face : l'une devient face, l'autre pile, F ne change pas.</li></ul>
<p>Dans tous les cas F change d'un nombre pair, donc <strong>la parité de F ne change jamais</strong>. Comme F = 0 est pair au départ, F est pair après n'importe quel nombre de coups.</p>
<p>Or pour avoir les sept pièces côté face il faudrait F = 7, qui est impair. C'est donc impossible.</p>
<p><em>Pour aller plus loin :</em> avec 8 pièces, c'est possible (4 coups suffisent). Avec 7 pièces et en retournant exactement <em>trois</em> pièces à chaque coup, est-ce possible ?</p>`,
    bareme: [
      `Introduire une quantité pertinente (le nombre de faces).`,
      `Étudier l'effet d'un coup dans tous les cas (−2, 0, +2).`,
      `En déduire que la parité est invariante.`,
      `Comparer départ (0, pair) et arrivée (7, impair) et conclure.`
    ]
  },
  {
    id: "logique-04",
    theme: "logique",
    niveau: 1,
    type: "reponse",
    titre: `Compte à rebours jusqu'à la Coupe`,
    enonce: `<p>Le lundi 28 septembre 2026, tu commences ta préparation. Tu t'arrêtes le 15 avril 2027 (inclus).</p>
<p>Combien de <strong>dimanches</strong> y a-t-il entre le 28 septembre 2026 et le 15 avril 2027, ces deux dates incluses ?</p>
<p><em>Rappel : 2027 n'est pas bissextile.</em></p>`,
    figure: ``,
    reponse: ["28", "vingt-huit"],
    reponseTexte: `28`,
    pistes: [
      `<p>Quelle est la date du premier dimanche de la période ?</p>`,
      `<p>Le premier dimanche est le 4 octobre 2026. Les dimanches suivants tombent tous les 7 jours.</p>`,
      `<p>Compte le nombre de jours entre le 4 octobre 2026 et le 15 avril 2027 : octobre compte 31 jours, novembre 30, décembre 31, janvier 31, février 28, mars 31.</p>`,
      `<p>Du 4 octobre au 15 avril, il y a 193 jours d'écart. Combien de multiples de 7 entre 0 et 193 ?</p>`
    ],
    lecon: {
      titre: `Calendriers et restes de division par 7`,
      html: `<p>Les jours de la semaine se répètent tous les 7 jours. Décaler une date de n jours décale le jour de la semaine de <strong>r</strong> jours, où r est le <strong>reste</strong> de la division de n par 7.</p>
<div class="exemple">Une année non bissextile a 365 = 52 × 7 + 1 jours : le 1er janvier d'une année suivante « avance » d'un jour de la semaine (de deux après une année bissextile).</div>
<p>Mois : 31 jours = 4 semaines + 3 jours ; 30 jours = 4 semaines + 2 jours ; 28 jours = exactement 4 semaines.</p>
<p>Pour compter les dimanches d'une période : on repère le premier dimanche, on calcule l'écart D (en jours) jusqu'à la fin, et le nombre de dimanches est <span class="m">(partie entière de D/7) + 1</span>.</p>
<div class="astuce">Astuce olympique : attention aux « piquets et intervalles ». Entre le jour 0 et le jour 21 inclus, il y a 4 dimanches (0, 7, 14, 21) et non 3.</div>`
    },
    correction: `<p>Le 28 septembre 2026 est un lundi, donc le premier dimanche de la période est le <strong>4 octobre 2026</strong>.</p>
<p>Comptons les jours du 4 octobre 2026 au 15 avril 2027 :</p>
<div class="calc">(31 − 4) + 30 + 31 + 31 + 28 + 31 + 15 = 27 + 30 + 31 + 31 + 28 + 31 + 15 = 193</div>
<p>Le 15 avril 2027 est donc 193 jours après le 4 octobre. Les dimanches sont les jours situés 0, 7, 14, …, 7k jours après le 4 octobre avec 7k ≤ 193, soit k ≤ 27 (car 7 × 27 = 189 et 7 × 28 = 196).</p>
<p>Il y a donc k = 0, 1, …, 27, c'est-à-dire <strong>28 dimanches</strong>.</p>
<p>Au passage, 193 = 27 × 7 + 4 : le 15 avril 2027 est 4 jours après un dimanche, c'est un <strong>jeudi</strong>.</p>
<p><em>Erreur fréquente :</em> diviser 193 par 7 et répondre 27, en oubliant de compter le premier dimanche.</p>`
  },
  {
    id: "logique-05",
    theme: "logique",
    niveau: 1,
    type: "reponse",
    titre: `La pièce trop légère`,
    enonce: `<p>On dispose de 80 pièces d'apparence identique. Toutes ont la même masse, sauf une fausse pièce, un peu <strong>plus légère</strong>. On possède une balance à deux plateaux (sans poids) : chaque pesée indique seulement quel plateau est le plus lourd, ou s'ils sont en équilibre.</p>
<p>Quel est le <strong>nombre minimal</strong> de pesées qui permet à coup sûr de trouver la fausse pièce ?</p>`,
    figure: ``,
    reponse: ["4", "quatre"],
    reponseTexte: `4`,
    pistes: [
      `<p>Avec 3 pièces, une seule pesée suffit. Comment ? (Pense au cas d'équilibre !)</p>`,
      `<p>Une pesée a 3 issues possibles : gauche plus lourd, droite plus lourd, équilibre. Avec 9 pièces, peut-on faire 3 groupes de 3 ?</p>`,
      `<p>Avec k pesées, on peut distinguer au plus 3<sup>k</sup> situations. Combien vaut 3<sup>3</sup> ? 3<sup>4</sup> ?</p>`,
      `<p>3<sup>3</sup> = 27 &lt; 80 ≤ 81 = 3<sup>4</sup>. Il reste à expliquer comment faire en 4 pesées : partage les 80 pièces en trois tas « presque égaux ».</p>`
    ],
    lecon: {
      titre: `Pesées : compter les issues`,
      html: `<p>Une pesée sur une balance à deux plateaux a <strong>3 issues</strong> : penche à gauche, penche à droite, équilibre. Avec k pesées, il y a au plus <strong>3<sup>k</sup></strong> suites d'issues différentes.</p>
<p><strong>Borne inférieure.</strong> Si le problème a N possibilités (ici : N pièces peuvent être la fausse) et que 3<sup>k</sup> &lt; N, alors deux possibilités donnent les mêmes résultats : k pesées ne suffisent pas (c'est le principe des tiroirs !).</p>
<p><strong>Stratégie.</strong> On partage les suspects en trois groupes, deux de même taille sur les plateaux, le troisième de côté. La pesée indique dans quel groupe est la fausse pièce.</p>
<div class="exemple">9 pièces : 3 contre 3. Si ça penche, la légère est dans le plateau qui monte ; sinon elle est dans les 3 restantes. Puis 1 contre 1 parmi les 3 suspectes. Total : 2 pesées.</div>
<div class="astuce">Astuce olympique : ne gaspille jamais le cas « équilibre ». Une bonne pesée utilise les 3 issues.</div>`
    },
    correction: `<p><strong>3 pesées ne suffisent pas.</strong> Trois pesées donnent au plus 3 × 3 × 3 = 27 suites de résultats différentes. Il y a 80 pièces pouvant être la fausse ; comme 80 &gt; 27, deux pièces différentes donneraient exactement les mêmes résultats, et on ne pourrait pas les distinguer.</p>
<p><strong>4 pesées suffisent.</strong></p>
<ul><li>Pesée 1 : 27 pièces contre 27 pièces (26 de côté). Si un plateau monte, la fausse est parmi ses 27 pièces ; sinon, elle est parmi les 26 restantes. Il reste au plus 27 suspectes.</li>
<li>Pesée 2 : parmi (au plus) 27 suspectes, 9 contre 9 : il reste au plus 9 suspectes.</li>
<li>Pesée 3 : 3 contre 3 : il reste au plus 3 suspectes.</li>
<li>Pesée 4 : 1 contre 1 : on trouve la fausse (si équilibre, c'est la troisième).</li></ul>
<p>(Avec 26 suspectes, on fait 9 contre 9 avec 8 de côté, etc. : il reste toujours au plus 9, puis 3, puis 1.)</p>
<p>La réponse est <strong>4</strong>.</p>
<p><em>Pour aller plus loin :</em> avec k pesées, on peut traiter jusqu'à 3<sup>k</sup> pièces. Et si l'on ne sait pas si la fausse est plus lourde ou plus légère ? Voir un problème plus loin…</p>`
  },
  {
    id: "logique-06",
    theme: "logique",
    niveau: 1,
    type: "demo",
    titre: `La table ronde impossible`,
    enonce: `<p>Sur l'île des chevaliers (qui disent toujours la vérité) et des menteurs (qui mentent toujours), 2027 habitants sont assis autour d'une table ronde. Chacun d'eux déclare :</p>
<p style="text-align:center">« Mon voisin de droite est un menteur. »</p>
<p>Montrer que cette situation est impossible.</p>`,
    figure: ``,
    pistes: [
      `<p>Essaie avec 3 personnes autour d'une table, puis 4. Dans quel cas y arrives-tu ?</p>`,
      `<p>Si une personne est chevalier, que peut-on dire de son voisin de droite ? Et si elle est menteuse ?</p>`,
      `<p>Un chevalier a un menteur à sa droite ; un menteur ment, donc son voisin de droite est… un chevalier. Les types alternent autour de la table.</p>`,
      `<p>Si les types alternent (C, M, C, M, …) sur un cercle, que peut-on dire du nombre de personnes ?</p>`
    ],
    lecon: {
      titre: `Alternance sur un cercle`,
      html: `<p>Beaucoup de problèmes font apparaître une <strong>alternance</strong> : deux voisins sont toujours de « types » différents (couleurs, chevalier/menteur, pair/impair…).</p>
<p><strong>Fait clé :</strong> sur un cercle, une alternance parfaite de deux types n'est possible que si le nombre d'éléments est <strong>pair</strong>.</p>
<p>Pourquoi ? En faisant le tour, on passe d'un type à l'autre à chaque pas. Après n pas, on revient au point de départ, donc au même type : il faut avoir changé de type un nombre pair de fois, donc n est pair.</p>
<div class="exemple">On ne peut pas colorier les sommets d'un pentagone en noir et blanc de sorte que deux sommets voisins aient toujours des couleurs différentes.</div>
<div class="astuce">Astuce olympique : « faire le tour » d'un cercle et compter les changements est une technique très puissante, qui reviendra souvent.</div>`
    },
    correction: `<p>Supposons par l'absurde que la situation soit possible. Numérotons les habitants 1, 2, …, 2027 dans le sens des aiguilles d'une montre, de sorte que le voisin de droite de k soit k + 1, et celui de 2027 soit 1.</p>
<p><strong>Étape 1.</strong> Si k est un chevalier, sa phrase est vraie : k + 1 est un menteur.</p>
<p><strong>Étape 2.</strong> Si k est un menteur, sa phrase est fausse : k + 1 n'est pas menteur, c'est un chevalier.</p>
<p>Donc deux voisins sont <strong>toujours de types différents</strong>. Par conséquent, les habitants 1, 3, 5, …, 2027 (numéros impairs) sont tous du même type que l'habitant 1, et les habitants de numéro pair sont de l'autre type.</p>
<p><strong>Étape 3.</strong> Mais l'habitant 2027 (impair) est du même type que l'habitant 1, et l'habitant 1 est le voisin de droite de 2027 : deux voisins seraient du même type. C'est une contradiction.</p>
<p>La situation est donc impossible.</p>
<p><em>Pour aller plus loin :</em> avec 2026 habitants, la situation est possible (alternance C, M, C, M, …) et il y a alors exactement 1013 chevaliers.</p>`,
    bareme: [
      `Montrer qu'un chevalier a un menteur à sa droite.`,
      `Montrer qu'un menteur a un chevalier à sa droite.`,
      `En déduire l'alternance des types autour de la table.`,
      `Utiliser l'imparité de 2027 pour obtenir une contradiction.`
    ]
  },
  {
    id: "logique-07",
    theme: "logique",
    niveau: 1,
    type: "reponse",
    titre: `Carré magique impair`,
    enonce: `<p>On place les neuf nombres impairs <strong>3, 5, 7, 9, 11, 13, 15, 17, 19</strong> dans les cases d'une grille 3 × 3 (chacun une seule fois) de sorte que les sommes des trois lignes, des trois colonnes et des deux diagonales soient toutes égales.</p>
<p>Quel nombre se trouve obligatoirement dans la case <strong>centrale</strong> ?</p>`,
    figure: ``,
    reponse: ["11", "onze"],
    reponseTexte: `11`,
    pistes: [
      `<p>Commence par calculer la somme des neuf nombres. Que vaut alors la somme commune S d'une ligne ?</p>`,
      `<p>La somme totale vaut 99, donc chaque ligne vaut S = 33.</p>`,
      `<p>Combien de « lignes » (lignes, colonnes, diagonales) passent par la case centrale ? Additionne les quatre qui passent par le centre.</p>`,
      `<p>La ligne du milieu, la colonne du milieu et les deux diagonales recouvrent toutes les cases une fois, sauf le centre qui est compté 4 fois. Donc 4 × 33 = 99 + 3 × c.</p>`
    ],
    lecon: {
      titre: `Carrés magiques : compter de deux façons`,
      html: `<p>Dans un carré magique 3 × 3, notons S la somme commune (la « constante magique ») et T la somme de tous les nombres.</p>
<ul><li>Les 3 lignes recouvrent chaque case une fois : <span class="m">3S = T</span>.</li>
<li>Les 4 lignes passant par le centre c (ligne et colonne du milieu, deux diagonales) recouvrent chaque case une fois, sauf le centre compté 4 fois : <span class="m">4S = T + 3c</span>.</li></ul>
<p>On en déduit <span class="m">3c = 4S − T = S</span>, soit <strong>c = S/3</strong>.</p>
<div class="exemple">Avec 1, 2, …, 9 : T = 45, S = 15, et le centre vaut 5.</div>
<div class="astuce">Astuce olympique : « compter la même chose de deux façons » (ici la somme de plusieurs lignes) est l'une des idées les plus utiles des olympiades.</div>`
    },
    correction: `<p>La somme des neuf nombres est</p>
<div class="calc">3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19 = 99.</div>
<p>Les trois lignes recouvrent chaque case exactement une fois, donc 3S = 99 et <strong>S = 33</strong>.</p>
<p>Considérons maintenant les quatre alignements qui passent par le centre c : la ligne du milieu, la colonne du milieu et les deux diagonales. Leur somme vaut 4 × 33 = 132. Dans cette somme, chacune des 8 cases autour du centre est comptée exactement une fois, et le centre 4 fois. Donc</p>
<div class="calc">132 = 99 + 3c, d'où 3c = 33 et c = 11.</div>
<p>Le centre vaut <strong>11</strong>. (Un tel carré existe : par exemple la grille 17, 3, 13 / 7, 11, 15 / 9, 19, 5.)</p>
<p><em>Remarque :</em> ces nombres sont 2k + 1 pour k = 1, …, 9 ; le carré est l'image du carré magique classique 1…9, de centre 5, et on retrouve 2 × 5 + 1 = 11.</p>`
  },
  {
    id: "logique-08",
    theme: "logique",
    niveau: 1,
    type: "demo",
    titre: `L'échiquier sans coins`,
    enonce: `<p>On retire d'un échiquier 8 × 8 deux cases situées à deux coins <strong>opposés</strong> (en haut à gauche et en bas à droite). Il reste 62 cases.</p>
<p>Peut-on recouvrir exactement ces 62 cases avec 31 dominos, chaque domino couvrant deux cases voisines (côte à côte) ? Justifier.</p>`,
    figure: `<svg viewBox="0 0 170 170" width="170" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="0.8"><rect x="5" y="5" width="160" height="160" fill="none"/></g><g fill="currentColor" fill-opacity="0.35"><rect x="25" y="5" width="20" height="20"/><rect x="65" y="5" width="20" height="20"/><rect x="105" y="5" width="20" height="20"/><rect x="145" y="5" width="20" height="20"/><rect x="5" y="25" width="20" height="20"/><rect x="45" y="25" width="20" height="20"/><rect x="85" y="25" width="20" height="20"/><rect x="125" y="25" width="20" height="20"/><rect x="25" y="45" width="20" height="20"/><rect x="65" y="45" width="20" height="20"/><rect x="105" y="45" width="20" height="20"/><rect x="145" y="45" width="20" height="20"/><rect x="5" y="65" width="20" height="20"/><rect x="45" y="65" width="20" height="20"/><rect x="85" y="65" width="20" height="20"/><rect x="125" y="65" width="20" height="20"/><rect x="25" y="85" width="20" height="20"/><rect x="65" y="85" width="20" height="20"/><rect x="105" y="85" width="20" height="20"/><rect x="145" y="85" width="20" height="20"/><rect x="5" y="105" width="20" height="20"/><rect x="45" y="105" width="20" height="20"/><rect x="85" y="105" width="20" height="20"/><rect x="125" y="105" width="20" height="20"/><rect x="25" y="125" width="20" height="20"/><rect x="65" y="125" width="20" height="20"/><rect x="105" y="125" width="20" height="20"/><rect x="145" y="125" width="20" height="20"/><rect x="5" y="145" width="20" height="20"/><rect x="45" y="145" width="20" height="20"/><rect x="85" y="145" width="20" height="20"/><rect x="125" y="145" width="20" height="20"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="7" y1="7" x2="23" y2="23"/><line x1="23" y1="7" x2="7" y2="23"/><line x1="147" y1="147" x2="163" y2="163"/><line x1="163" y1="147" x2="147" y2="163"/></g></svg>`,
    pistes: [
      `<p>Un domino couvre deux cases voisines de l'échiquier. De quelles couleurs sont ces deux cases ?</p>`,
      `<p>Un domino couvre toujours une case blanche et une case noire. Combien de cases blanches et de cases noires couvrent 31 dominos ?</p>`,
      `<p>Les deux coins retirés (opposés) ont-ils la même couleur ou des couleurs différentes ?</p>`,
      `<p>Il reste 30 cases d'une couleur et 32 de l'autre. Conclus.</p>`
    ],
    lecon: {
      titre: `Invariant de coloriage`,
      html: `<p>Pour montrer qu'un <strong>pavage est impossible</strong>, une idée classique est de <strong>colorier</strong> les cases de façon astucieuse, puis de compter.</p>
<p>Le coloriage en échiquier (noir/blanc alterné) a une propriété clé : <strong>deux cases voisines sont toujours de couleurs différentes</strong>. Donc chaque domino couvre exactement une case noire et une case blanche.</p>
<p>Conséquence : une région pavable par des dominos contient <strong>autant de cases noires que de cases blanches</strong>. Si ce n'est pas le cas, le pavage est impossible.</p>
<div class="exemple">Un carré 3 × 3 n'est pas pavable par dominos : il a 9 cases, nombre impair. Mais un carré 4 × 4 privé de deux coins opposés a bien 14 cases, un nombre pair… et pourtant il n'est pas pavable (couleurs !).</div>
<div class="astuce">Astuce olympique : la condition « nombre de cases pair » est nécessaire mais pas suffisante. Le coloriage donne une condition plus fine.</div>`
    },
    correction: `<p><strong>Réponse : non.</strong></p>
<p>Colorions l'échiquier de la manière habituelle, en noir et blanc alternés. L'échiquier complet a 32 cases noires et 32 cases blanches.</p>
<p><strong>Les deux coins retirés ont la même couleur.</strong> En effet, la case en haut à gauche (ligne 1, colonne 1) et celle en bas à droite (ligne 8, colonne 8) ont une somme ligne + colonne paire (2 et 16) : elles sont de la même couleur, disons blanche. Il reste donc 30 cases blanches et 32 cases noires.</p>
<p><strong>Chaque domino couvre une case de chaque couleur</strong>, car deux cases voisines sont de couleurs différentes. Donc 31 dominos couvriraient exactement 31 cases blanches et 31 cases noires.</p>
<p>Or il y a 30 cases blanches et 32 noires : c'est impossible.</p>
<p><em>Pour aller plus loin :</em> si l'on retire deux cases de couleurs différentes <strong>n'importe où</strong>, le pavage est toujours possible (théorème de Gomory). La coloration est alors la seule obstruction !</p>`,
    bareme: [
      `Introduire le coloriage en échiquier.`,
      `Justifier que les deux coins retirés sont de la même couleur (30 et 32 cases).`,
      `Justifier que chaque domino couvre une case de chaque couleur.`,
      `Conclure par comptage à l'impossibilité.`
    ]
  },
  {
    id: "logique-09",
    theme: "logique",
    niveau: 1,
    type: "reponse",
    titre: `Aiguilles superposées`,
    enonce: `<p>Sur une horloge à aiguilles, combien de fois l'aiguille des heures et l'aiguille des minutes sont-elles exactement superposées pendant une journée, de 0 h 00 (inclus) à 24 h 00 (exclu) ?</p>`,
    figure: ``,
    reponse: ["22", "vingt-deux"],
    reponseTexte: `22`,
    pistes: [
      `<p>À 0 h 00 elles sont superposées. Le sont-elles à 1 h 05 pile ? Un peu après ?</p>`,
      `<p>L'aiguille des minutes fait un tour par heure ; celle des heures un tour en 12 heures. En 12 heures, combien de tours fait la grande aiguille ? Et la petite ?</p>`,
      `<p>Chaque fois que la grande aiguille « rattrape » la petite d'un tour, elles se superposent. En 12 heures, la grande aiguille fait 12 tours et la petite 1 tour : combien de fois la grande a-t-elle « rattrapé » la petite ?</p>`,
      `<p>Donc 11 superpositions par période de 12 h (espacées de 12/11 h ≈ 1 h 05 min 27 s). Et pour 24 h ?</p>`
    ],
    lecon: {
      titre: `Horloges : raisonner en tours et en vitesses`,
      html: `<p>Les problèmes d'horloge se traitent comme des problèmes de <strong>poursuite</strong> sur un cercle.</p>
<ul><li>Aiguille des minutes : 360° par heure, soit 6° par minute.</li>
<li>Aiguille des heures : 30° par heure, soit 0,5° par minute.</li></ul>
<p>La grande aiguille gagne donc <strong>5,5° par minute</strong> sur la petite. Les deux aiguilles sont superposées chaque fois que la grande a pris exactement un tour complet (360°) d'avance de plus, c'est-à-dire toutes les</p>
<div class="calc">360 ÷ 5,5 = 720/11 minutes ≈ 65 min 27 s.</div>
<div class="exemple">Après 0 h 00, la première superposition a lieu à 1 h 05 min 27 s environ, et non à 1 h 05 pile.</div>
<div class="astuce">Astuce olympique : compter des « dépassements » sur un cercle revient à compter les tours d'avance : si A fait a tours et B fait b tours (a &gt; b) dans le même temps, A dépasse B exactement a − b fois.</div>`
    },
    correction: `<p>En 24 heures, l'aiguille des minutes fait 24 tours et l'aiguille des heures en fait 2. La grande aiguille prend donc 24 − 2 = 22 tours d'avance.</p>
<p>Les aiguilles sont superposées exactement lorsque la grande aiguille a un nombre entier de tours d'avance sur la petite : 0, 1, 2, …, 21 tours pendant la journée (22 tours d'avance correspondent à 24 h 00, exclu).</p>
<p>Concrètement, les superpositions ont lieu aux instants k × 720/11 minutes, pour k = 0, 1, …, 21 (car 22 × 720/11 = 1440 minutes = 24 h).</p>
<p>La réponse est <strong>22</strong>.</p>
<p><em>Erreur fréquente :</em> répondre 24 (« une fois par heure »). Entre 11 h et 13 h, il n'y a qu'une superposition : à midi pile !</p>`
  },
  {
    id: "logique-10",
    theme: "logique",
    niveau: 1,
    type: "reponse",
    titre: `Le jeu des 21 allumettes`,
    enonce: `<p>Il y a 21 allumettes sur la table. Deux joueurs retirent à tour de rôle 1, 2 ou 3 allumettes. Le joueur qui prend la <strong>dernière</strong> allumette gagne.</p>
<p>Tu joues en premier. Combien d'allumettes dois-tu retirer au premier coup pour être sûr de gagner (quoi que fasse ton adversaire ensuite) ?</p>`,
    figure: ``,
    reponse: ["1", "une", "un"],
    reponseTexte: `1`,
    pistes: [
      `<p>Commence par la fin : s'il reste 1, 2 ou 3 allumettes et que c'est ton tour, que fais-tu ? Et s'il en reste 4 ?</p>`,
      `<p>S'il reste 4 allumettes devant ton adversaire, il perd : quoi qu'il prenne (1, 2 ou 3), tu prends le reste. On dit que 4 est une position <strong>perdante</strong> (pour celui qui doit jouer).</p>`,
      `<p>Et 8 ? Si ton adversaire doit jouer avec 8 allumettes, tu peux toujours compléter son coup à 4 pour le ramener à 4. Quelles sont toutes les positions perdantes ?</p>`,
      `<p>Les positions perdantes sont les multiples de 4. Il faut laisser à l'adversaire 20 allumettes.</p>`
    ],
    lecon: {
      titre: `Jeux : positions gagnantes et perdantes`,
      html: `<p>Dans un jeu à deux joueurs sans hasard, on classe les positions (du point de vue du joueur qui doit jouer) :</p>
<ul><li>une position est <strong>perdante</strong> (P) si tous les coups possibles mènent à une position gagnante pour l'adversaire (ou s'il n'y a aucun coup) ;</li>
<li>une position est <strong>gagnante</strong> (G) s'il existe au moins un coup menant à une position perdante.</li></ul>
<p>On remplit un tableau <strong>en partant de la fin</strong>. La stratégie gagnante consiste à toujours laisser l'adversaire dans une position P.</p>
<div class="exemple">Retrait de 1, 2 ou 3 : 0 est P (celui qui doit jouer a perdu), 1, 2, 3 sont G, 4 est P, 5, 6, 7 sont G, 8 est P… Les positions P sont les multiples de 4.</div>
<div class="astuce">Astuce olympique : pour prouver une stratégie, il faut deux choses : de toute position P on ne peut aller que vers G ; de toute position G on peut aller vers une P.</div>`
    },
    correction: `<p>Appelons « perdante » une position où le joueur qui doit jouer perd si l'adversaire joue bien.</p>
<p><strong>Les multiples de 4 sont perdants.</strong> Si un joueur doit jouer face à 4k allumettes (k ≥ 1) et retire a allumettes (a = 1, 2 ou 3), l'autre retire 4 − a (qui vaut 3, 2 ou 1) : il reste 4(k − 1) allumettes. En répétant, l'autre joueur finit par laisser 0 allumette, c'est-à-dire qu'il prend la dernière et gagne.</p>
<p><strong>Premier coup.</strong> 21 = 4 × 5 + 1. En retirant <strong>1</strong> allumette, tu laisses 20 allumettes (multiple de 4) à ton adversaire. Ensuite, à chaque coup de l'adversaire qui retire a allumettes, tu retires 4 − a : il reste successivement 16, 12, 8, 4, puis 0, et c'est toi qui prends la dernière.</p>
<p>Si tu retirais 2 ou 3 allumettes, tu laisserais 19 ou 18 allumettes, et c'est ton adversaire qui pourrait appliquer la stratégie gagnante. Le seul bon coup est donc de retirer <strong>1</strong> allumette.</p>
<p><em>Pour aller plus loin :</em> si l'on peut retirer de 1 à m allumettes, les positions perdantes sont les multiples de m + 1.</p>`
  },
  {
    id: "logique-11",
    theme: "logique",
    niveau: 1,
    type: "demo",
    titre: `Somme onze garantie`,
    enonce: `<p>On choisit six nombres entiers <strong>distincts</strong> parmi 1, 2, 3, …, 10.</p>
<p>Montrer que, parmi les nombres choisis, il y en a toujours deux dont la somme vaut 11.</p>`,
    figure: ``,
    pistes: [
      `<p>Quelles paires de nombres entre 1 et 10 ont pour somme 11 ? Écris-les toutes.</p>`,
      `<p>Il y a 5 paires : {1, 10}, {2, 9}, {3, 8}, {4, 7}, {5, 6}. Chaque nombre de 1 à 10 appartient à exactement une de ces paires.</p>`,
      `<p>Vois ces 5 paires comme des tiroirs. Tu ranges 6 nombres dans 5 tiroirs…</p>`,
      `<p>Deux nombres choisis tombent dans la même paire. Comme ils sont distincts, ce sont les deux éléments de la paire.</p>`
    ],
    lecon: {
      titre: `Tiroirs : bien choisir les tiroirs`,
      html: `<p>Le principe des tiroirs est simple ; <strong>toute la difficulté est de choisir les tiroirs</strong>. On construit les tiroirs pour que « deux objets dans le même tiroir » donne exactement la conclusion voulue.</p>
<p>Ici, on veut deux nombres de somme 11 : on prend comme tiroirs les paires de somme 11.</p>
<div class="exemple">Parmi 4 entiers quelconques, deux ont la même différence divisible par 3 : les tiroirs sont les restes 0, 1, 2 dans la division par 3.</div>
<p>Il faut aussi vérifier que l'on a bien un <strong>partage</strong> : chaque objet possible est dans un tiroir et un seul.</p>
<div class="astuce">Astuce olympique : le résultat est souvent optimal. Ici, avec seulement 5 nombres (1, 2, 3, 4, 5), aucune somme ne vaut 11. Mentionner cet exemple montre que tu as compris pourquoi 6 est le bon nombre.</div>`
    },
    correction: `<p>Répartissons les nombres de 1 à 10 en cinq paires de somme 11 :</p>
<div class="calc">{1, 10}, {2, 9}, {3, 8}, {4, 7}, {5, 6}.</div>
<p>Chaque entier de 1 à 10 appartient à exactement une de ces paires.</p>
<p>On a choisi 6 nombres, et il n'y a que 5 paires. D'après le principe des tiroirs, deux des nombres choisis appartiennent à la même paire. Comme ils sont distincts, ce sont exactement les deux éléments de cette paire, et leur somme vaut 11.</p>
<p><em>Remarque :</em> le nombre 6 est optimal : en choisissant 1, 2, 3, 4, 5, aucune somme de deux nombres ne vaut 11 (la plus grande est 4 + 5 = 9).</p>`,
    bareme: [
      `Former les 5 paires de somme 11 et remarquer qu'elles partagent {1, …, 10}.`,
      `Appliquer correctement le principe des tiroirs (6 nombres, 5 paires).`,
      `Conclure en utilisant que les deux nombres sont distincts.`
    ]
  },
  {
    id: "logique-12",
    theme: "logique",
    niveau: 1,
    type: "reponse",
    titre: `Qui a cassé la vitre ?`,
    enonce: `<p>Une vitre de la salle de classe a été cassée par un seul des cinq élèves numérotés 1, 2, 3, 4 et 5. Interrogés, ils déclarent :</p>
<ul>
<li>Élève 1 : « C'est l'élève 2. »</li>
<li>Élève 2 : « C'est l'élève 4. »</li>
<li>Élève 3 : « Ce n'est pas moi. »</li>
<li>Élève 4 : « L'élève 2 ment. »</li>
<li>Élève 5 : « Ce n'est pas l'élève 1. »</li>
</ul>
<p>On sait qu'<strong>un seul</strong> des cinq élèves ment. Quel est le numéro du coupable ?</p>`,
    figure: ``,
    reponse: ["2"],
    reponseTexte: `L'élève 2`,
    pistes: [
      `<p>Les élèves 2 et 4 disent des choses contraires. Que peut-on en déduire ?</p>`,
      `<p>Exactement l'un des élèves 2 et 4 ment. Comme il n'y a qu'un menteur, tous les autres (1, 3, 5) disent la vérité.</p>`,
      `<p>L'élève 1 dit la vérité. Que déclare-t-il ?</p>`,
      `<p>Le coupable est donc l'élève 2. Vérifie que dans ce cas, il y a bien exactement un menteur.</p>`
    ],
    lecon: {
      titre: `« Qui ment ? » : repérer les affirmations contradictoires`,
      html: `<p>Dans les énigmes du type « qui ment ? », on connaît le nombre de menteurs. Une astuce efficace : repérer deux affirmations <strong>contradictoires</strong> (l'une est vraie exactement quand l'autre est fausse).</p>
<p>Parmi deux affirmations contradictoires, <strong>exactement une</strong> est fausse. Si l'on sait qu'il n'y a qu'un menteur, il est forcément l'un des deux, et tous les autres disent la vérité.</p>
<div class="exemple">« C'est 4 » et « Celui qui dit que c'est 4 ment » sont contradictoires.</div>
<p>Autre méthode, toujours possible : <strong>tester chaque coupable</strong> et compter les affirmations vraies. C'est plus long mais très sûr ; on peut faire un tableau.</p>
<div class="astuce">Astuce olympique : même si tu trouves la réponse par une astuce, vérifie-la en relisant toutes les déclarations avec ce coupable.</div>`
    },
    correction: `<p>L'élève 4 affirme que l'élève 2 ment. Donc ces deux déclarations sont contradictoires : si l'élève 2 dit vrai, l'élève 4 ment ; si l'élève 2 ment, l'élève 4 dit vrai. Exactement un des deux ment.</p>
<p>Comme il y a un seul menteur, les élèves 1, 3 et 5 disent la vérité. L'élève 1 dit vrai : <strong>le coupable est l'élève 2</strong>.</p>
<p><strong>Vérification</strong> avec le coupable 2 : l'élève 1 dit vrai ; l'élève 2 (« c'est 4 ») ment ; l'élève 3 dit vrai ; l'élève 4 (« 2 ment ») dit vrai ; l'élève 5 (« ce n'est pas 1 ») dit vrai. Il y a bien un seul menteur.</p>
<p>Tableau complet du nombre de déclarations vraies selon le coupable : coupable 1 → 2 vraies ; 2 → 4 ; 3 → 2 ; 4 → 3 ; 5 → 3. Seul le coupable 2 donne 4 vraies, c'est-à-dire 1 menteur.</p>
<p>Réponse : <strong>2</strong>.</p>`
  },
  {
    id: "logique-13",
    theme: "logique",
    niveau: 2,
    type: "reponse",
    titre: `Anniversaires au lycée`,
    enonce: `<p>Un grand établissement compte 2027 élèves. On ne sait rien de leurs dates de naissance (certains peuvent être nés un 29 février).</p>
<p>Quel est le plus grand entier k tel qu'on soit <strong>certain</strong> qu'au moins k élèves fêtent leur anniversaire le même jour de l'année ?</p>`,
    figure: ``,
    reponse: ["6", "six"],
    reponseTexte: `6`,
    pistes: [
      `<p>Combien y a-t-il de jours d'anniversaire possibles, en comptant le 29 février ?</p>`,
      `<p>Il y a 366 « tiroirs ». Si chaque jour avait au plus 5 élèves, combien d'élèves y aurait-il au maximum ?</p>`,
      `<p>366 × 5 = 1830 &lt; 2027. Donc un jour contient au moins 6 élèves. Mais peut-on garantir 7 ?</p>`,
      `<p>Pour montrer qu'on ne peut pas garantir 7, construis une répartition des 2027 élèves où chaque jour a au plus 6 élèves : 366 × 6 = 2196 ≥ 2027.</p>`
    ],
    lecon: {
      titre: `Tiroirs généralisé : la formule avec l'arrondi`,
      html: `<p><strong>Principe des tiroirs généralisé.</strong> Si l'on range N objets dans n tiroirs, un tiroir contient au moins <span class="m">⌈N/n⌉</span> objets, où ⌈x⌉ désigne l'entier immédiatement supérieur ou égal à x (« arrondi au-dessus »).</p>
<p>Preuve : si chaque tiroir contenait au plus ⌈N/n⌉ − 1 objets, comme ⌈N/n⌉ − 1 &lt; N/n, on aurait au total moins de n × N/n = N objets. Absurde.</p>
<p>Et ce nombre est le meilleur possible : en répartissant les objets le plus équitablement possible, aucun tiroir ne dépasse ⌈N/n⌉.</p>
<div class="exemple">100 pigeons dans 30 pigeonniers : un pigeonnier contient au moins ⌈100/30⌉ = ⌈3,33…⌉ = 4 pigeons.</div>
<div class="astuce">Astuce olympique : pour une réponse du type « le plus grand k garanti », il faut toujours montrer la garantie ET un exemple où l'on n'obtient pas k + 1.</div>`
    },
    correction: `<p>Les jours d'anniversaire possibles sont au nombre de 366 (en comptant le 29 février) : ce sont nos tiroirs.</p>
<p><strong>On peut garantir 6.</strong> Si chaque jour comptait au plus 5 élèves, il y aurait au plus 366 × 5 = 1830 élèves, or 2027 &gt; 1830. Donc un jour compte au moins 6 élèves.</p>
<p><strong>On ne peut pas garantir 7.</strong> Comme 366 × 6 = 2196 ≥ 2027, il est possible de répartir les 2027 élèves de sorte qu'aucun jour n'en ait plus de 6 (par exemple 6 élèves nés chacun des 337 premiers jours de l'année, soit 2022 élèves, puis 5 élèves nés le 338e jour). Dans ce cas, aucun jour n'a 7 élèves.</p>
<p>La réponse est <strong>k = 6</strong> = ⌈2027/366⌉.</p>
<p><em>Erreur fréquente :</em> oublier le 29 février et diviser par 365. Ici cela donnerait le même résultat (365 × 5 = 1825 &lt; 2027), mais ce n'est pas toujours le cas !</p>`
  },
  {
    id: "logique-14",
    theme: "logique",
    niveau: 2,
    type: "demo",
    titre: `Différences au tableau`,
    enonce: `<p>On écrit au tableau les nombres 1, 2, 3, …, 10. À chaque étape, on efface deux nombres a et b et on écrit à leur place le nombre <span class="m">|a − b|</span> (la différence du plus grand et du plus petit).</p>
<p>Après 9 étapes, il ne reste qu'un seul nombre. Montrer que ce nombre est <strong>impair</strong>.</p>`,
    figure: ``,
    pistes: [
      `<p>Fais une partie « à la main » avec 1, 2, 3, 4 : quel nombre obtiens-tu à la fin ? Recommence autrement. Remarques-tu quelque chose ?</p>`,
      `<p>Regarde la somme S de tous les nombres écrits au tableau. Comment change-t-elle quand on remplace a et b par |a − b| ?</p>`,
      `<p>Compare a + b et |a − b| : sont-ils toujours de même parité ? (Pense que a + b − (a − b) = 2b.)</p>`,
      `<p>La parité de S est invariante. Calcule S au départ.</p>`
    ],
    lecon: {
      titre: `Invariant : la parité d'une somme`,
      html: `<p>Quand une opération remplace quelques nombres par d'autres, on regarde l'effet sur la <strong>somme</strong> de tous les nombres. Souvent la somme elle-même change, mais sa <strong>parité</strong> (ou son reste modulo un entier) reste la même.</p>
<p><strong>Outil :</strong> a + b et a − b ont toujours la même parité, car leur différence 2b est paire. De même a + b et |a − b|.</p>
<div class="exemple">Si l'on remplace a et b par a + b, la somme ne change pas du tout : c'est un invariant exact.<br>Si l'on remplace a et b par |a − b|, la somme diminue de 2 × min(a, b) : seule la parité est conservée.</div>
<div class="astuce">Astuce olympique : dans les problèmes « on efface, on remplace », calcule toujours ce que devient la somme, le produit, et le nombre de nombres impairs. L'un d'eux est souvent l'invariant cherché.</div>`
    },
    correction: `<p>Notons S la somme de tous les nombres écrits au tableau.</p>
<p><strong>Effet d'une étape.</strong> On remplace a et b par |a − b|. La somme devient S − a − b + |a − b|. Or, si par exemple a ≥ b, |a − b| = a − b et</p>
<div class="calc">(a + b) − |a − b| = (a + b) − (a − b) = 2b,</div>
<p>qui est pair. Donc S diminue d'un nombre pair : <strong>la parité de S est invariante</strong>.</p>
<p><strong>Au départ</strong>, S = 1 + 2 + … + 10 = 55, qui est impair.</p>
<p><strong>À la fin</strong>, il ne reste qu'un nombre N, et S = N. Par invariance, N a la même parité que 55 : <strong>N est impair</strong>.</p>
<p><em>Pour aller plus loin :</em> on peut montrer que le dernier nombre peut valoir 1 (par exemple en formant des différences 1 = 2 − 1 = 4 − 3 = …) ; peut-il valoir 9 ?</p>`,
    bareme: [
      `Introduire la somme S des nombres écrits.`,
      `Montrer que S varie d'un nombre pair à chaque étape (calcul de (a + b) − |a − b|).`,
      `Calculer la somme initiale 55 (impaire).`,
      `Conclure que le dernier nombre est impair.`
    ]
  },
  {
    id: "logique-15",
    theme: "logique",
    niveau: 2,
    type: "reponse",
    titre: `Retirer 1, 3 ou 4`,
    enonce: `<p>Un tas contient n jetons. Deux joueurs jouent à tour de rôle ; à chaque coup, on retire <strong>1, 3 ou 4</strong> jetons du tas (s'il en reste assez). Le joueur qui prend le dernier jeton gagne (autrement dit, celui qui ne peut plus jouer a perdu).</p>
<p>Pour combien de valeurs de n comprises entre 1 et 50 (inclus) le <strong>second</strong> joueur a-t-il une stratégie gagnante ?</p>`,
    figure: ``,
    reponse: ["14", "quatorze"],
    reponseTexte: `14`,
    pistes: [
      `<p>Construis un tableau pour n = 0, 1, 2, …, 14 en marquant chaque position P (perdante pour celui qui doit jouer) ou G (gagnante). n = 0 est P.</p>`,
      `<p>Règle : n est G si l'on peut aller (en retirant 1, 3 ou 4) vers une position P ; sinon n est P.</p>`,
      `<p>Tu dois trouver : 0 P, 1 G, 2 P, 3 G, 4 G, 5 G, 6 G, 7 P, 8 G, 9 P… Vois-tu une période ?</p>`,
      `<p>Les positions P sont celles dont le reste dans la division par 7 vaut 0 ou 2. Compte-les entre 1 et 50.</p>`
    ],
    lecon: {
      titre: `Jeux de retrait : chercher la période`,
      html: `<p>Pour un jeu de retrait avec un ensemble de coups fixé (ici {1, 3, 4}), on calcule les positions P et G <strong>de proche en proche</strong> à partir de 0.</p>
<p>Comme chaque position ne dépend que des 4 précédentes, le motif finit par se <strong>répéter</strong>. Dès qu'on observe une période, on la <strong>démontre</strong> : on vérifie que depuis chaque position P on ne peut atteindre que des G, et que depuis chaque G on peut atteindre une P.</p>
<div class="exemple">Coups {1, 2} : les positions P sont les multiples de 3.<br>Coups {1, 3, 4} : les positions P sont les n tels que n ≡ 0 ou 2 (mod 7).</div>
<p>La notation <span class="m">n ≡ r (mod 7)</span> signifie « n a pour reste r dans la division par 7 ».</p>
<div class="astuce">Astuce olympique : une fois la période trouvée, ne te contente pas de « on voit que » : une vérification sur une période complète (les 7 restes) est une vraie preuve.</div>`
    },
    correction: `<p>Notons P les positions perdantes pour le joueur qui doit jouer et G les gagnantes. On a 0 : P. Ensuite :</p>
<div class="calc">n : 0 1 2 3 4 5 6 | 7 8 9 10 11 12 13<br>  P G P G G G G | P G P G G G G</div>
<p>(1 → 0 ; 2 ne peut aller qu'en 1 : P ; 3 → 2 ; 4 → 0 ; 5 → 2 ; 6 → 2 ; 7 ne peut aller qu'en 6, 4, 3 : P ; etc.)</p>
<p><strong>Preuve de la période 7 :</strong> les positions P sont les n ≡ 0 ou 2 (mod 7). En effet :</p>
<ul><li>d'une position ≡ 0, on va vers ≡ 6, 4 ou 3 ; d'une position ≡ 2, on va vers ≡ 1, 6 ou 5 : jamais vers 0 ou 2 ;</li>
<li>d'une position ≡ 1 on va en ≡ 0 (retirer 1) ; ≡ 3 → ≡ 2 (retirer 1) ; ≡ 4 → ≡ 0 (retirer 4) ; ≡ 5 → ≡ 2 (retirer 3) ; ≡ 6 → ≡ 2 (retirer 4).</li></ul>
<p>Le second joueur gagne exactement quand n est une position P. Entre 1 et 50 :</p>
<ul><li>n ≡ 0 : 7, 14, 21, 28, 35, 42, 49 (7 valeurs) ;</li>
<li>n ≡ 2 : 2, 9, 16, 23, 30, 37, 44 (7 valeurs).</li></ul>
<p>Réponse : <strong>14</strong>.</p>`
  },
  {
    id: "logique-16",
    theme: "logique",
    niveau: 2,
    type: "demo",
    titre: `Pièces sur la table`,
    enonce: `<p>Deux joueurs disposent d'une table rectangulaire et d'une réserve illimitée de pièces de monnaie identiques. À tour de rôle, chacun pose une pièce à plat sur la table, entièrement sur la table et sans chevaucher les pièces déjà posées. Le joueur qui ne peut plus poser de pièce a perdu.</p>
<p>Montrer que le <strong>premier</strong> joueur possède une stratégie gagnante.</p>`,
    figure: ``,
    pistes: [
      `<p>Le rectangle a une propriété de symétrie particulière : lequel de ses points est « spécial » ?</p>`,
      `<p>Le centre O du rectangle : la symétrie de centre O envoie la table sur elle-même. Où le premier joueur pourrait-il poser sa première pièce ?</p>`,
      `<p>Premier coup : une pièce centrée en O. Ensuite, à chaque pièce posée par l'adversaire, le premier joueur pose la pièce symétrique par rapport à O. Pourquoi est-ce toujours possible ?</p>`,
      `<p>Il faut vérifier que la place symétrique est libre et sur la table, et que la pièce symétrique ne chevauche pas celle que l'adversaire vient de poser.</p>`
    ],
    lecon: {
      titre: `Stratégie de symétrie`,
      html: `<p>Une stratégie classique pour un joueur est de <strong>copier</strong> les coups de l'adversaire de façon symétrique. Si, après chacun de ses coups, la position est symétrique, alors chaque coup de l'adversaire a un « coup miroir » disponible : ce joueur ne peut jamais être bloqué le premier.</p>
<p>Deux points sont à vérifier soigneusement :</p>
<ul><li>le coup miroir est <strong>légal</strong> (la place est libre) ;</li>
<li>le coup miroir n'est pas <strong>gêné par le coup que l'adversaire vient de jouer</strong> (c'est souvent là qu'il faut un argument, ou un premier coup spécial au centre).</li></ul>
<div class="exemple">Deux tas égaux d'allumettes : le second joueur copie dans l'autre tas le coup du premier et gagne.</div>
<div class="astuce">Astuce olympique : si la position de départ n'est pas symétrique, le premier joueur peut souvent la rendre symétrique en un coup, puis copier.</div>`
    },
    correction: `<p>Soit O le centre de la table rectangulaire. La symétrie centrale de centre O envoie le rectangle sur lui-même.</p>
<p><strong>Stratégie du premier joueur.</strong></p>
<ul><li>Premier coup : il pose une pièce dont le centre est O.</li>
<li>Ensuite, chaque fois que l'adversaire pose une pièce de centre M, il pose une pièce de centre M', symétrique de M par rapport à O.</li></ul>
<p><strong>Invariant :</strong> après chaque coup du premier joueur, la configuration des pièces est symétrique par rapport à O.</p>
<p><strong>Le coup miroir est toujours possible.</strong> Supposons la configuration symétrique, et l'adversaire pose une pièce D de centre M.</p>
<ul><li>D est sur la table, donc son symétrique D' aussi (la table est symétrique).</li>
<li>D ne chevauchait aucune pièce avant son coup ; par symétrie, D' ne chevauche aucune de ces pièces (sinon, en appliquant la symétrie, D chevaucherait le symétrique d'une pièce, qui est aussi une pièce posée).</li>
<li>D' ne chevauche pas D : sinon, il existerait un point P commun à D et D'. Son symétrique P' serait aussi commun à D' et D (la symétrie échange D et D'). Le disque D contiendrait P et P', donc tout le segment [PP'], et en particulier son milieu O. Mais O est recouvert par la pièce centrale : D chevaucherait la pièce centrale, ce qui est impossible.</li></ul>
<p>Donc le premier joueur peut toujours jouer. Comme le jeu s'arrête (la table a une aire finie, et chaque pièce occupe une aire fixe), c'est l'adversaire qui se retrouve le premier bloqué : <strong>le premier joueur gagne</strong>.</p>
<p><em>Erreur fréquente :</em> oublier de justifier que le jeu se termine, ou que la pièce miroir ne chevauche pas celle de l'adversaire.</p>`,
    bareme: [
      `Proposer le premier coup au centre puis la stratégie de symétrie centrale.`,
      `Justifier que la pièce symétrique est sur la table et ne chevauche pas les pièces anciennes.`,
      `Justifier qu'elle ne chevauche pas la pièce que l'adversaire vient de poser (rôle de la pièce centrale).`,
      `Conclure : le jeu est fini, donc l'adversaire est bloqué en premier.`
    ]
  },
  {
    id: "logique-17",
    theme: "logique",
    niveau: 2,
    type: "reponse",
    titre: `Dominos en ruban`,
    enonce: `<p>De combien de façons peut-on paver un rectangle de <strong>2 lignes et 10 colonnes</strong> avec des dominos 1 × 2 (chaque domino peut être posé horizontalement ou verticalement) ?</p>`,
    figure: `<svg viewBox="0 0 250 60" width="250" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="1.2"><rect x="5" y="5" width="240" height="48"/><rect x="5" y="5" width="24" height="48"/><rect x="29" y="5" width="48" height="24"/><rect x="29" y="29" width="48" height="24"/><rect x="77" y="5" width="24" height="48"/><rect x="101" y="5" width="24" height="48"/></g><text x="150" y="35" font-size="14" fill="currentColor">…</text></svg>`,
    reponse: ["89", "quatre-vingt-neuf"],
    reponseTexte: `89`,
    pistes: [
      `<p>Compte pour un rectangle 2 × 1, 2 × 2, 2 × 3, 2 × 4. Obtiens-tu 1, 2, 3, 5 ?</p>`,
      `<p>Regarde la colonne tout à gauche d'un pavage d'un rectangle 2 × n. Soit elle est couverte par un domino vertical, soit… ?</p>`,
      `<p>Si la première colonne n'est pas couverte par un domino vertical, alors deux dominos horizontaux couvrent les deux premières colonnes. Il reste un rectangle 2 × (n − 2).</p>`,
      `<p>Donc t<sub>n</sub> = t<sub>n−1</sub> + t<sub>n−2</sub>. Calcule jusqu'à t<sub>10</sub>.</p>`
    ],
    lecon: {
      titre: `Compter par récurrence : couper selon le premier morceau`,
      html: `<p>Pour compter des pavages (ou des chemins, des mots…) de « taille n », on regarde <strong>comment commence</strong> l'objet. Chaque début possible laisse un objet plus petit du même type : on obtient une <strong>relation de récurrence</strong>.</p>
<div class="exemple">t<sub>n</sub> = nombre de pavages du rectangle 2 × n. Le bord gauche est couvert soit par un domino vertical (il reste 2 × (n − 1)), soit par deux dominos horizontaux empilés (il reste 2 × (n − 2)). Donc t<sub>n</sub> = t<sub>n−1</sub> + t<sub>n−2</sub>.</div>
<p>C'est la célèbre <strong>suite de Fibonacci</strong> : 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, … (chaque terme est la somme des deux précédents).</p>
<div class="astuce">Astuce olympique : les deux cas doivent être <strong>disjoints</strong> (aucun pavage compté deux fois) et <strong>exhaustifs</strong> (aucun oublié). Justifie-le toujours en une phrase.</div>`
    },
    correction: `<p>Notons t<sub>n</sub> le nombre de pavages d'un rectangle 2 × n. On a t<sub>1</sub> = 1 (un domino vertical) et t<sub>2</sub> = 2 (deux verticaux ou deux horizontaux).</p>
<p><strong>Récurrence.</strong> Dans un pavage de 2 × n (n ≥ 3), considérons la case en haut à gauche.</p>
<ul><li>Soit elle est couverte par un domino vertical, qui couvre toute la première colonne ; le reste est un pavage de 2 × (n − 1) : t<sub>n−1</sub> possibilités.</li>
<li>Soit elle est couverte par un domino horizontal (cases 1 et 2 de la ligne du haut). Alors la case en bas à gauche ne peut être couverte que par un domino horizontal (cases 1 et 2 de la ligne du bas). Le reste est un pavage de 2 × (n − 2) : t<sub>n−2</sub> possibilités.</li></ul>
<p>Ces deux cas sont disjoints et couvrent toutes les possibilités, donc t<sub>n</sub> = t<sub>n−1</sub> + t<sub>n−2</sub>.</p>
<div class="calc">t<sub>1</sub> = 1, t<sub>2</sub> = 2, t<sub>3</sub> = 3, t<sub>4</sub> = 5, t<sub>5</sub> = 8, t<sub>6</sub> = 13, t<sub>7</sub> = 21, t<sub>8</sub> = 34, t<sub>9</sub> = 55, t<sub>10</sub> = 89.</div>
<p>Réponse : <strong>89</strong>.</p>
<p><em>Pour aller plus loin :</em> combien de façons de monter un escalier de 10 marches en faisant des pas de 1 ou 2 marches ? C'est encore 89, pour la même raison.</p>`
  },
  {
    id: "logique-18",
    theme: "logique",
    niveau: 2,
    type: "demo",
    titre: `Chaque case est la moyenne de ses voisines`,
    enonce: `<p>Dans chaque case d'un échiquier 8 × 8, on écrit un nombre réel. On suppose que le nombre de chaque case est égal à la <strong>moyenne</strong> des nombres écrits dans les cases qui lui sont adjacentes (qui partagent un côté avec elle : 2, 3 ou 4 cases selon la position).</p>
<p>Montrer que tous les nombres écrits sont égaux.</p>`,
    figure: ``,
    pistes: [
      `<p>Il y a un nombre fini de cases : il existe donc un plus grand nombre M écrit sur l'échiquier. Regarde une case où il est écrit.</p>`,
      `<p>Si une moyenne de nombres tous ≤ M vaut M, que peut-on dire de ces nombres ?</p>`,
      `<p>Tous les voisins d'une case contenant M contiennent eux aussi M. Et leurs voisins ?</p>`,
      `<p>En se déplaçant de voisin en voisin, on peut atteindre n'importe quelle case de l'échiquier. Conclus.</p>`
    ],
    lecon: {
      titre: `Le principe de l'extremum`,
      html: `<p>Dans un ensemble <strong>fini</strong> de nombres, il existe toujours un plus grand et un plus petit élément. Regarder l'objet <strong>extrême</strong> (le plus grand, le plus petit, le plus à gauche, le plus long…) donne souvent une information très forte : c'est le <strong>principe de l'extremum</strong>.</p>
<p><strong>Fait utile :</strong> si une moyenne de nombres tous inférieurs ou égaux à M vaut exactement M, alors <strong>tous</strong> ces nombres valent M. (Si l'un était strictement plus petit, la moyenne serait strictement plus petite que M.)</p>
<div class="exemple">Si la moyenne de tes 5 notes vaut 20/20, alors toutes tes notes valent 20.</div>
<p>On combine ensuite avec une propagation : le maximum « contamine » ses voisins, puis leurs voisins, etc.</p>
<div class="astuce">Astuce olympique : l'hypothèse « fini » est essentielle. Sur une grille infinie, il n'y a pas forcément de maximum, et le résultat peut être faux (exemple : écrire le numéro de colonne dans chaque case d'une grille infinie).</div>`
    },
    correction: `<p>L'échiquier contient un nombre fini de cases, donc il existe un plus grand nombre écrit ; notons-le M, et soit c une case où M est écrit.</p>
<p><strong>Étape 1 : les voisins d'une case contenant M contiennent M.</strong> Soient v<sub>1</sub>, …, v<sub>k</sub> les nombres des cases voisines de c. Par hypothèse, <span class="m">M = (v<sub>1</sub> + … + v<sub>k</sub>)/k</span>, et chaque v<sub>i</sub> ≤ M. Si l'un d'eux était strictement inférieur à M, on aurait v<sub>1</sub> + … + v<sub>k</sub> &lt; kM, donc une moyenne strictement inférieure à M : contradiction. Donc v<sub>1</sub> = … = v<sub>k</sub> = M.</p>
<p><strong>Étape 2 : propagation.</strong> On applique l'étape 1 à chaque voisin de c, puis aux voisins de ces voisins, etc. Toute case de l'échiquier peut être atteinte depuis c par une suite de cases voisines (en se déplaçant d'abord horizontalement, puis verticalement). Le long de ce chemin, chaque case contient M.</p>
<p>Donc toutes les cases contiennent M : <strong>tous les nombres sont égaux</strong>.</p>
<p><em>Remarque :</em> on n'a utilisé que l'existence d'un maximum et le fait que l'échiquier est « connexe ». Le même raisonnement marche pour n'importe quelle grille finie.</p>`,
    bareme: [
      `Justifier l'existence d'un maximum M (nombre fini de cases).`,
      `Montrer rigoureusement que les voisins d'une case contenant M contiennent M.`,
      `Propager à tout l'échiquier par des chemins de cases voisines.`,
      `Conclure que tous les nombres sont égaux.`
    ]
  },
  {
    id: "logique-19",
    theme: "logique",
    niveau: 2,
    type: "reponse",
    titre: `Le sac de fausses pièces`,
    enonce: `<p>On a 10 sacs contenant chacun beaucoup de pièces. Dans neuf sacs, toutes les pièces pèsent 10 g ; dans un des sacs, toutes les pièces sont fausses et pèsent 11 g. On dispose d'une balance <strong>à affichage</strong> (qui donne la masse exacte), et on n'a droit qu'à <strong>une seule pesée</strong>.</p>
<p>On numérote les sacs de 1 à 10, on prend 1 pièce du sac 1, 2 pièces du sac 2, …, 10 pièces du sac 10, et on pèse toutes ces pièces ensemble. La balance affiche <strong>553 g</strong>. Quel est le numéro du sac de fausses pièces ?</p>`,
    figure: ``,
    reponse: ["3", "trois"],
    reponseTexte: `Le sac 3`,
    pistes: [
      `<p>Combien de pièces pèse-t-on en tout ?</p>`,
      `<p>On pèse 1 + 2 + … + 10 = 55 pièces. Combien pèseraient-elles si elles étaient toutes vraies ?</p>`,
      `<p>Toutes vraies, elles pèseraient 550 g. Chaque fausse pièce ajoute 1 g. Combien de fausses pièces a-t-on pesées ?</p>`
    ],
    lecon: {
      titre: `Pesées : coder l'information`,
      html: `<p>Avec une balance à affichage, une seule pesée peut donner <strong>beaucoup</strong> d'informations, à condition de construire la pesée pour que chaque possibilité donne un résultat <strong>différent</strong>.</p>
<p>L'idée est de <strong>coder</strong> chaque sac par un nombre différent de pièces : si le sac k est faux, l'excédent de masse est k × 1 g. On lit donc directement le numéro du sac.</p>
<div class="exemple">Avec des fausses pièces pesant 12 g au lieu de 10 g, un excédent de 8 g indiquerait 4 fausses pièces, donc le sac 4.</div>
<div class="astuce">Astuce olympique : dans un problème de pesées, demande-toi toujours « est-ce que deux situations différentes peuvent donner le même résultat ? ». Si non, la stratégie fonctionne.</div>`
    },
    correction: `<p>On pèse 1 + 2 + … + 10 = 55 pièces. Si elles étaient toutes vraies, elles pèseraient 55 × 10 = 550 g.</p>
<p>Si le sac k est celui des fausses pièces, on a pesé k fausses pièces, chacune 1 g trop lourde : la balance affiche 550 + k grammes. Les dix sacs donnent donc dix affichages différents (551, 552, …, 560), et on retrouve k sans ambiguïté.</p>
<p>Ici, 553 − 550 = 3 : <strong>le sac 3</strong> contient les fausses pièces.</p>
<p><em>Pour aller plus loin :</em> et si l'on ignore si les fausses pièces pèsent 11 g ou 9 g ? L'excédent serait +k ou −k : on trouverait encore le sac, et même le type de fausses pièces.</p>`
  },
  {
    id: "logique-20",
    theme: "logique",
    niveau: 2,
    type: "reponse",
    titre: `Diviser pour régner`,
    enonce: `<p>On a un tas de 2027 jetons. À chaque étape, on choisit un tas contenant au moins 2 jetons et on le partage en deux tas non vides, de tailles a et b ; on écrit alors le produit <span class="m">a × b</span> sur une feuille.</p>
<p>On continue jusqu'à ce que tous les tas aient un seul jeton. Quelle est la somme de tous les nombres écrits sur la feuille ?</p>`,
    figure: ``,
    reponse: ["2053351"],
    reponseTexte: `2 053 351`,
    pistes: [
      `<p>Essaie avec un tas de 4 jetons, de plusieurs façons (4 → 2 + 2 puis…, ou 4 → 1 + 3 puis…). Compare les sommes.</p>`,
      `<p>Tu dois trouver 6 à chaque fois. Avec 5 jetons ? Avec 3 ? Quel lien avec le nombre de paires de jetons ?</p>`,
      `<p>Imagine que chaque paire de jetons est reliée par un fil. Quand on partage un tas en a et b jetons, combien de fils coupe-t-on ?</p>`,
      `<p>On coupe exactement a × b fils. À la fin, tous les fils sont coupés. Combien y a-t-il de fils au départ ? (Nombre de paires parmi 2027 jetons.)</p>`
    ],
    lecon: {
      titre: `Invariants cachés : interpréter la quantité`,
      html: `<p>Parfois une somme qui semble dépendre des choix est en fait toujours la même. Pour le prouver, on cherche une <strong>interprétation</strong> de chaque terme.</p>
<p>Ici, <span class="m">a × b</span> est le nombre de <strong>paires</strong> formées d'un jeton du premier tas et d'un jeton du second. En partageant, on « sépare » exactement ces paires. Chaque paire de jetons est séparée une et une seule fois au cours du processus.</p>
<p><strong>Nombre de paires</strong> parmi n objets : <span class="m">n(n − 1)/2</span> (chacun des n objets forme une paire avec n − 1 autres, et chaque paire est comptée deux fois).</p>
<div class="exemple">Autre preuve : la quantité Q = (somme des carrés des tailles des tas) + 2 × (somme écrite) est invariante, car (a + b)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> + 2ab.</div>
<div class="astuce">Astuce olympique : teste de petits cas avec des choix différents. Si le résultat ne change pas, cherche l'invariant qui l'explique.</div>`
    },
    correction: `<p><strong>Interprétation.</strong> Imaginons qu'au départ chaque paire de jetons soit reliée par un fil. Un fil reste intact tant que ses deux jetons sont dans le même tas.</p>
<p>Quand on partage un tas en deux tas de a et b jetons, les fils coupés sont exactement ceux qui relient un jeton du premier tas à un jeton du second : il y en a <span class="m">a × b</span>. Le nombre écrit est donc le nombre de fils coupés à cette étape.</p>
<p>À la fin, tous les tas ont un seul jeton, donc tous les fils sont coupés, et chaque fil a été coupé une seule fois. La somme des nombres écrits est donc le nombre total de fils, c'est-à-dire le nombre de paires de jetons :</p>
<div class="calc">2027 × 2026 / 2 = 2027 × 1013 = 2 053 351.</div>
<p>Réponse : <strong>2 053 351</strong>, quelle que soit la façon de procéder.</p>
<p><em>Vérification sur un petit cas :</em> 4 → (1, 3) écrit 3, puis 3 → (1, 2) écrit 2, puis 2 → (1, 1) écrit 1 : total 6 = 4 × 3/2.</p>`
  },
  {
    id: "logique-21",
    theme: "logique",
    niveau: 2,
    type: "reponse",
    titre: `Les tours de Hanoï`,
    enonce: `<p>On a trois piquets. Sur le premier sont empilés 7 disques de tailles toutes différentes, du plus grand (en bas) au plus petit (en haut). On veut déplacer toute la pile sur le troisième piquet en respectant deux règles :</p>
<ul><li>on ne déplace qu'un disque à la fois (celui du dessus d'une pile) ;</li>
<li>on ne pose jamais un disque sur un disque plus petit.</li></ul>
<p>Quel est le nombre <strong>minimal</strong> de déplacements nécessaires ?</p>`,
    figure: `<svg viewBox="0 0 300 90" width="300" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="2"><line x1="10" y1="80" x2="290" y2="80"/><line x1="55" y1="80" x2="55" y2="15"/><line x1="150" y1="80" x2="150" y2="15"/><line x1="245" y1="80" x2="245" y2="15"/></g><g fill="currentColor" fill-opacity="0.35" stroke="currentColor"><rect x="15" y="71" width="80" height="8"/><rect x="21" y="63" width="68" height="8"/><rect x="27" y="55" width="56" height="8"/><rect x="33" y="47" width="44" height="8"/><rect x="39" y="39" width="32" height="8"/><rect x="44" y="31" width="22" height="8"/><rect x="49" y="23" width="12" height="8"/></g></svg>`,
    reponse: ["127", "cent-vingt-sept"],
    reponseTexte: `127`,
    pistes: [
      `<p>Combien faut-il de déplacements pour 1 disque ? 2 disques ? 3 disques ? (Tu dois trouver 1, 3, 7.)</p>`,
      `<p>Pour déplacer le plus grand disque, où doivent se trouver tous les autres à ce moment-là ?</p>`,
      `<p>Au moment où le grand disque bouge, les 6 autres forment une pile sur le piquet restant. Il faut donc déplacer 6 disques, puis le grand, puis à nouveau 6 disques. Écris une relation entre h<sub>7</sub> et h<sub>6</sub>.</p>`,
      `<p>h<sub>n</sub> = 2h<sub>n−1</sub> + 1 avec h<sub>1</sub> = 1. Calcule, ou remarque que h<sub>n</sub> + 1 double à chaque fois.</p>`
    ],
    lecon: {
      titre: `La récurrence expliquée simplement`,
      html: `<p>Raisonner <strong>par récurrence</strong>, c'est résoudre un problème de taille n en s'appuyant sur le même problème de taille n − 1. On procède en deux temps :</p>
<ul><li><strong>Initialisation :</strong> on règle le plus petit cas (ici 1 disque : 1 déplacement).</li>
<li><strong>Hérédité :</strong> on explique comment passer de n − 1 à n.</li></ul>
<p>C'est comme une rangée de dominos : le premier tombe, et chacun fait tomber le suivant, donc tous tombent.</p>
<div class="exemple">Tours de Hanoï : pour n disques, on déplace les n − 1 petits sur le piquet du milieu (h<sub>n−1</sub> coups), le grand sur le piquet d'arrivée (1 coup), puis les n − 1 petits par-dessus (h<sub>n−1</sub> coups). Donc h<sub>n</sub> = 2h<sub>n−1</sub> + 1, ce qui donne h<sub>n</sub> = 2<sup>n</sup> − 1.</div>
<div class="astuce">Astuce olympique : pour un <strong>minimum</strong>, il faut prouver deux inégalités : « on peut faire en h coups » ET « on ne peut pas faire moins ». L'argument « où sont les autres disques quand le grand bouge ? » donne la minoration.</div>`
    },
    correction: `<p>Notons h<sub>n</sub> le nombre minimal de déplacements pour n disques. On a h<sub>1</sub> = 1.</p>
<p><strong>On ne peut pas faire moins que 2h<sub>n−1</sub> + 1.</strong> Le plus grand disque doit bouger au moins une fois. La première fois qu'il bouge, il quitte le piquet 1 et aucun disque ne doit être au-dessus de lui ni sur le piquet où il va : les n − 1 autres disques sont donc tous empilés sur le troisième piquet. Pour en arriver là, il a fallu au moins h<sub>n−1</sub> déplacements. Ensuite, la dernière fois que le grand disque bouge, il arrive sur le piquet d'arrivée vide et les n − 1 autres sont sur un autre piquet ; il faut encore au moins h<sub>n−1</sub> déplacements pour les ramener dessus. Au total, au moins h<sub>n−1</sub> + 1 + h<sub>n−1</sub>.</p>
<p><strong>On peut le faire en 2h<sub>n−1</sub> + 1</strong> : n − 1 disques vers le piquet du milieu, le grand vers l'arrivée, puis les n − 1 disques vers l'arrivée.</p>
<p>Donc h<sub>n</sub> = 2h<sub>n−1</sub> + 1 :</p>
<div class="calc">h<sub>1</sub> = 1, h<sub>2</sub> = 3, h<sub>3</sub> = 7, h<sub>4</sub> = 15, h<sub>5</sub> = 31, h<sub>6</sub> = 63, h<sub>7</sub> = 127.</div>
<p>Réponse : <strong>127</strong> = 2<sup>7</sup> − 1.</p>
<p><em>Pour aller plus loin :</em> la légende parle de 64 disques : il faudrait 2<sup>64</sup> − 1 déplacements, soit plus de 500 milliards d'années à raison d'un déplacement par seconde !</p>`
  },
  {
    id: "logique-22",
    theme: "logique",
    niveau: 2,
    type: "reponse",
    titre: `Grille croissante`,
    enonce: `<p>On veut placer les nombres 1, 2, 3, …, 9 dans une grille 3 × 3 (chaque nombre une fois) de sorte que les nombres soient <strong>croissants</strong> de gauche à droite dans chaque ligne, et <strong>croissants</strong> de haut en bas dans chaque colonne.</p>
<p>Combien existe-t-il de telles grilles ?</p>`,
    figure: `<svg viewBox="0 0 110 110" width="110" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="1.2"><rect x="5" y="5" width="99" height="99"/><line x1="38" y1="5" x2="38" y2="104"/><line x1="71" y1="5" x2="71" y2="104"/><line x1="5" y1="38" x2="104" y2="38"/><line x1="5" y1="71" x2="104" y2="71"/></g><text x="16" y="27" font-size="14" fill="currentColor">1</text><text x="82" y="93" font-size="14" fill="currentColor">9</text></svg>`,
    reponse: ["42", "quarante-deux"],
    reponseTexte: `42`,
    pistes: [
      `<p>Où sont forcément placés 1 et 9 ?</p>`,
      `<p>1 est en haut à gauche et 9 en bas à droite. Où peut être placé le 5 ? Essaie de voir quelles cases lui sont interdites.</p>`,
      `<p>Autre idée : remplis la grille en plaçant les nombres dans l'ordre 1, 2, 3, … À chaque étape, la partie remplie de chaque ligne est un début de ligne, et chaque ligne est au moins aussi remplie que celle du dessous. Code l'ordre par la suite des numéros de ligne où tu places 1, 2, …, 9.</p>`,
      `<p>Tu obtiens un mot de 9 lettres avec trois « 1 », trois « 2 », trois « 3 », tel qu'à tout moment il y ait au moins autant de 1 que de 2 et au moins autant de 2 que de 3. Compte ces mots de façon organisée, par exemple en comptant de proche en proche le nombre de façons d'atteindre chaque état (a, b, c) = (nombre de 1, de 2, de 3 déjà écrits).</p>`
    ],
    lecon: {
      titre: `Grilles à compléter : placer les nombres dans l'ordre`,
      html: `<p>Pour compter des grilles soumises à des contraintes d'ordre, une idée efficace est de les <strong>construire en plaçant les nombres par ordre croissant</strong>. Le nombre k doit être posé dans une case dont les voisines de gauche et du dessus sont déjà remplies.</p>
<p>La grille est alors codée par la suite des lignes utilisées : c'est un <strong>mot</strong>. Compter les grilles revient à compter les mots valides, ce qu'on fait par un <strong>arbre de choix</strong> ou par une récurrence.</p>
<div class="exemple">Pour une grille 2 × 2 remplie avec 1, 2, 3, 4 : les mots sont 1122 et 1212, donc 2 grilles. Pour 2 × 3 : 5 grilles.</div>
<p>Ces nombres (1, 2, 5, 14, 42…) sont les <strong>nombres de Catalan</strong>, qui apparaissent dans beaucoup de problèmes olympiques.</p>
<div class="astuce">Astuce olympique : face à un comptage qui semble compliqué, cherche un <strong>codage</strong> (une bijection) vers des objets plus simples à compter : mots, chemins, suites.</div>`
    },
    correction: `<p><strong>Codage.</strong> Plaçons les nombres 1, 2, …, 9 dans l'ordre croissant. À chaque instant, les cases remplies forment, dans chaque ligne, un début de ligne ; notons a, b, c les nombres de cases remplies dans les lignes 1, 2, 3. La croissance dans les colonnes impose <span class="m">a ≥ b ≥ c</span> à tout instant (on ne peut pas remplir une case si celle du dessus est vide). Réciproquement, tout remplissage qui respecte cette règle donne une grille valide, car chaque nombre est posé à droite et en dessous de nombres plus petits.</p>
<p><strong>Comptage.</strong> Notons g(a, b, c) le nombre de façons de remplir la forme « a cases en ligne 1, b en ligne 2, c en ligne 3 » avec les nombres 1, 2, …, a + b + c. Le plus grand nombre est forcément à la fin d'une ligne, et en l'enlevant on obtient une forme plus petite, d'où :</p>
<div class="calc">g(a, b, c) = g(a − 1, b, c) + g(a, b − 1, c) + g(a, b, c − 1),</div>
<p>en ne gardant que les formes valides (a ≥ b ≥ c ≥ 0), avec g(0, 0, 0) = 1. On calcule de proche en proche :</p>
<ul><li>c = 0 : g(1,0) = 1, g(1,1) = 1, g(2,0) = 1, g(2,1) = 2, g(2,2) = 2, g(3,0) = 1, g(3,1) = 3, g(3,2) = 5, g(3,3) = 5 ;</li>
<li>c = 1 : g(1,1,1) = 1, g(2,1,1) = 3, g(2,2,1) = 5, g(3,1,1) = 6, g(3,2,1) = 16, g(3,3,1) = 21 ;</li>
<li>c = 2 : g(2,2,2) = g(2,2,1) = 5, g(3,2,2) = g(2,2,2) + g(3,2,1) = 5 + 16 = 21 (la forme (3,1,2) n'est pas valide), puis g(3,3,2) = g(3,2,2) + g(3,3,1) = 21 + 21 = 42 ;</li>
<li>c = 3 : g(3,3,3) = g(3,3,2) = 42 (seule la dernière ligne peut recevoir le 9).</li></ul>
<p>Réponse : <strong>42</strong>.</p>
<p><em>Pour aller plus loin :</em> il existe une formule magique, la « formule des équerres » : pour la grille 3 × 3, on divise 9! par le produit des longueurs d'équerres 5 × 4 × 3 × 4 × 3 × 2 × 3 × 2 × 1 = 8640, et 362 880 / 8640 = 42.</p>`
  },
  {
    id: "logique-23",
    theme: "logique",
    niveau: 2,
    type: "demo",
    titre: `Des T partout ?`,
    enonce: `<p>Un <strong>tétromino en T</strong> est une pièce formée de 4 carrés unités : trois alignés, et un quatrième collé au milieu d'un côté (comme la lettre T).</p>
<p>Peut-on paver exactement un carré 10 × 10 avec 25 tétrominos en T (tournés comme on veut, sans chevauchement ni débordement) ? Justifier.</p>`,
    figure: `<svg viewBox="0 0 100 70" width="100" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="1.2"><rect x="5" y="5" width="30" height="30" fill="currentColor" fill-opacity="0.35"/><rect x="35" y="5" width="30" height="30" fill="none"/><rect x="65" y="5" width="30" height="30" fill="currentColor" fill-opacity="0.35"/><rect x="35" y="35" width="30" height="30" fill="currentColor" fill-opacity="0.35"/></g></svg>`,
    pistes: [
      `<p>Le nombre de cases (100 = 25 × 4) ne suffit pas à conclure. Essaie un coloriage : lequel as-tu déjà utilisé pour les dominos ?</p>`,
      `<p>Colorie le carré 10 × 10 en échiquier. Combien de cases noires et de cases blanches ? Et combien de cases de chaque couleur couvre un T ?</p>`,
      `<p>Un T couvre toujours 3 cases d'une couleur et 1 de l'autre (le centre du T a une couleur, ses trois voisins l'autre). Appelle x le nombre de T qui couvrent 3 cases noires.</p>`,
      `<p>Compte les cases noires couvertes en fonction de x : 3x + (25 − x). Cela doit valoir 50. Que trouves-tu pour x ?</p>`
    ],
    lecon: {
      titre: `Coloriage et comptage : mettre en équation`,
      html: `<p>Rappel : colorier une grille permet de montrer qu'un pavage est impossible. Nouveauté ici : quand chaque pièce ne couvre pas « autant de chaque couleur », on <strong>introduit une inconnue</strong> (le nombre de pièces de chaque sorte) et on écrit une <strong>équation</strong>.</p>
<p>Si l'équation n'a pas de solution entière, le pavage est impossible.</p>
<div class="exemple">Un T couvre 3 noires + 1 blanche, ou 1 noire + 3 blanches. Avec x pièces du premier type et y du second : cases noires = 3x + y, cases blanches = x + 3y.</div>
<div class="astuce">Astuce olympique : souvent la contradiction est une question de <strong>parité</strong> (2x = impair). Pense à regarder la parité du nombre de pièces.</div>`
    },
    correction: `<p><strong>Réponse : non.</strong></p>
<p>Colorions le carré 10 × 10 en échiquier : il y a 50 cases noires et 50 cases blanches.</p>
<p><strong>Un T couvre 3 cases d'une couleur et 1 de l'autre.</strong> En effet, un T est formé d'une case centrale et de trois cases qui lui sont adjacentes. Les cases adjacentes à la case centrale sont toutes de la couleur opposée à elle. Donc un T couvre soit 3 noires et 1 blanche, soit 1 noire et 3 blanches.</p>
<p>Supposons un pavage par 25 T, dont x couvrent 3 noires et 25 − x couvrent 1 noire. Le nombre de cases noires couvertes est :</p>
<div class="calc">3x + (25 − x) = 25 + 2x.</div>
<p>Il doit valoir 50, donc 2x = 25, ce qui est impossible pour un entier x (25 est impair). Le pavage est donc impossible.</p>
<p><em>Pour aller plus loin :</em> le même argument montre qu'un rectangle pavé par des T doit en utiliser un nombre pair. On peut prouver (plus difficile) que l'aire d'un tel rectangle est même un multiple de 8.</p>`,
    bareme: [
      `Colorier en échiquier et compter 50 / 50.`,
      `Justifier qu'un T couvre 3 cases d'une couleur et 1 de l'autre.`,
      `Mettre en équation le nombre de cases noires couvertes.`,
      `Conclure grâce à la parité (2x = 25 impossible).`
    ]
  },
  {
    id: "logique-24",
    theme: "logique",
    niveau: 2,
    type: "reponse",
    titre: `Dix convives méfiants`,
    enonce: `<p>Dix habitants de l'île des chevaliers (qui disent toujours vrai) et des menteurs (qui mentent toujours) sont assis autour d'une table ronde. Chacun déclare :</p>
<p style="text-align:center">« Mes deux voisins sont des menteurs. »</p>
<p>Quel est le <strong>plus petit</strong> nombre possible de chevaliers autour de la table ?</p>`,
    figure: ``,
    reponse: ["4", "quatre"],
    reponseTexte: `4`,
    pistes: [
      `<p>Que peut-on dire des deux voisins d'un chevalier ? Et que signifie « un menteur dit : mes deux voisins sont menteurs » ?</p>`,
      `<p>Un chevalier a deux voisins menteurs. Un menteur a au moins un voisin chevalier (sa phrase est fausse). Peut-il y avoir 3 menteurs consécutifs ?</p>`,
      `<p>Entre deux chevaliers consécutifs (en tournant autour de la table), il y a 1 ou 2 menteurs. Avec k chevaliers, combien de personnes au plus ?</p>`,
      `<p>Avec k chevaliers, il y a au plus k + 2k = 3k personnes. Il faut 3k ≥ 10. Construis ensuite un exemple avec le k trouvé.</p>`
    ],
    lecon: {
      titre: `Encadrer puis construire`,
      html: `<p>Pour trouver un <strong>minimum</strong> (ou un maximum), on doit toujours faire deux choses :</p>
<ul><li><strong>la borne</strong> : prouver qu'on ne peut pas faire mieux (ici : au moins 4 chevaliers) ;</li>
<li><strong>la construction</strong> : exhiber une configuration qui atteint cette valeur.</li></ul>
<p>Une borne sans exemple, ou un exemple sans borne, ne vaut que la moitié des points !</p>
<div class="exemple">Autour d'une table, découper le cercle en « blocs » commençant chacun par un chevalier est une bonne façon de compter : chaque bloc a une taille entre 2 et 3.</div>
<div class="astuce">Astuce olympique : traduis chaque déclaration en une contrainte locale (sur les voisins), puis compte « par blocs ».</div>`
    },
    correction: `<p><strong>Contraintes.</strong> Un chevalier dit vrai : ses deux voisins sont menteurs. En particulier, deux chevaliers ne sont jamais voisins. Un menteur ment : ses deux voisins ne sont pas tous deux menteurs, il a donc au moins un voisin chevalier. Ainsi, il n'y a jamais 3 menteurs consécutifs (celui du milieu n'aurait aucun voisin chevalier). Il y a aussi au moins un chevalier (sinon tous seraient menteurs avec deux voisins menteurs).</p>
<p><strong>Borne.</strong> Découpons le cercle en blocs, chaque bloc commençant par un chevalier et contenant les menteurs qui le suivent jusqu'au chevalier suivant. Chaque bloc contient 1 chevalier suivi de 1 ou 2 menteurs, donc 2 ou 3 personnes. Avec k chevaliers, il y a k blocs et au plus 3k personnes. Il faut 3k ≥ 10, donc k ≥ 4.</p>
<p><strong>Construction avec 4 chevaliers.</strong> Autour de la table : C M M C M M C M C M. Chaque C a deux voisins M ; chaque M a au moins un voisin C (vérification sur les 6 menteurs). La configuration fonctionne.</p>
<p>Le minimum est <strong>4</strong>.</p>
<p><em>Pour aller plus loin :</em> le maximum est 5 (alternance C M C M…), car deux chevaliers ne sont jamais voisins. Il n'y a donc que deux valeurs possibles : 4 et 5.</p>`
  },
  {
    id: "logique-25",
    theme: "logique",
    niveau: 2,
    type: "demo",
    titre: `Le cube équilibré`,
    enonce: `<p>On veut écrire des nombres aux 8 sommets d'un cube (un nombre par sommet, chacun utilisé une fois) de sorte que la somme des quatre nombres de chaque face soit la même pour les 6 faces.</p>
<ol><li>Est-ce possible avec les nombres 1, 2, 3, 4, 5, 6, 7, 8 ?</li>
<li>Est-ce possible avec les nombres 1, 2, 3, 4, 5, 6, 7, 9 ?</li></ol>
<p>Justifier chaque réponse.</p>`,
    figure: `<svg viewBox="0 0 170 160" width="170" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="1.3"><rect x="15" y="50" width="90" height="90"/><rect x="65" y="15" width="90" height="90" stroke-dasharray="4 3"/><line x1="15" y1="50" x2="65" y2="15"/><line x1="105" y1="50" x2="155" y2="15"/><line x1="105" y1="140" x2="155" y2="105"/><line x1="15" y1="140" x2="65" y2="105" stroke-dasharray="4 3"/></g></svg>`,
    pistes: [
      `<p>Chaque sommet appartient à combien de faces ? Additionne les sommes des 6 faces.</p>`,
      `<p>Chaque sommet est sur 3 faces : la somme des 6 sommes de faces vaut 3 × (somme des 8 nombres). Si chaque face vaut S, que vaut S ?</p>`,
      `<p>Avec 1, …, 8 : 6S = 3 × 36, donc S = 18. Cherche une disposition : essaie d'écrire sur la face du bas 4 nombres de somme 18, et au-dessus les 4 autres.</p>`,
      `<p>Avec 1, …, 7, 9 : la somme vaut 37 ; que vaut alors 6S ? Est-ce possible ?</p>`
    ],
    lecon: {
      titre: `« Est-il possible… ? » : exemple ou obstruction`,
      html: `<p>Face à une question « est-il possible de… ? », il y a deux types de réponses :</p>
<ul><li><strong>Oui</strong> : il suffit de donner <strong>un exemple</strong> et de vérifier qu'il marche. Aucune autre justification n'est nécessaire.</li>
<li><strong>Non</strong> : il faut une <strong>preuve d'impossibilité</strong> (un invariant, un argument de parité, un double comptage…). Essayer quelques cas ne suffit jamais !</li></ul>
<p>Le <strong>double comptage</strong> donne souvent une condition nécessaire : on additionne toutes les contraintes et on compte combien de fois chaque objet apparaît.</p>
<div class="exemple">Chaque sommet d'un cube est sur 3 faces : la somme de toutes les sommes de faces vaut 3 × (somme totale). D'où 6S = 3T, soit S = T/2.</div>
<div class="astuce">Astuce olympique : commence par la condition nécessaire. Si elle est impossible, c'est fini ; si elle est possible, elle guide la recherche de l'exemple (ici, on sait qu'il faut S = 18).</div>`
    },
    correction: `<p><strong>Condition nécessaire.</strong> Soit T la somme des 8 nombres et S la somme commune des faces. Chaque sommet appartient à exactement 3 faces, donc en additionnant les sommes des 6 faces, chaque nombre est compté 3 fois :</p>
<div class="calc">6S = 3T, soit S = T/2.</div>
<p><strong>1. Oui.</strong> Ici T = 36, donc S = 18. Voici une disposition : sur la face du bas, en tournant, les sommets A, B, C, D portent 1, 6, 3, 8 ; sur la face du haut, les sommets E, F, G, H situés respectivement au-dessus de A, B, C, D portent 4, 7, 2, 5. Vérification :</p>
<ul><li>bas : 1 + 6 + 3 + 8 = 18 ; haut : 4 + 7 + 2 + 5 = 18 ;</li>
<li>ABFE : 1 + 6 + 7 + 4 = 18 ; BCGF : 6 + 3 + 2 + 7 = 18 ;</li>
<li>CDHG : 3 + 8 + 5 + 2 = 18 ; DAEH : 8 + 1 + 4 + 5 = 18.</li></ul>
<p><strong>2. Non.</strong> Ici T = 1 + 2 + … + 7 + 9 = 37, donc on devrait avoir S = 37/2 = 18,5. Or une somme d'entiers est un entier : c'est impossible.</p>
<p><em>Erreur fréquente :</em> à la question 2, dire « j'ai essayé et je n'ai pas trouvé ». Ce n'est pas une preuve ; seul l'argument de double comptage permet de conclure.</p>`,
    bareme: [
      `Établir par double comptage que 6S = 3T (chaque sommet est sur 3 faces).`,
      `Question 1 : donner une disposition explicite.`,
      `Question 1 : vérifier les 6 faces.`,
      `Question 2 : conclure à l'impossibilité car S = 18,5 n'est pas entier.`
    ]
  },
  {
    id: "logique-26",
    theme: "logique",
    niveau: 2,
    type: "reponse",
    titre: `Diviseurs garantis`,
    enonce: `<p>On choisit des entiers distincts parmi 1, 2, 3, …, 100.</p>
<p>Quel est le plus petit nombre n tel que, parmi <strong>n</strong> entiers choisis de n'importe quelle façon, il y en ait toujours deux dont l'un <strong>divise</strong> l'autre ?</p>`,
    figure: ``,
    reponse: ["51", "cinquante-et-un", "cinquante et un"],
    reponseTexte: `51`,
    pistes: [
      `<p>Peux-tu choisir beaucoup de nombres sans qu'aucun ne divise un autre ? Pense aux « grands » nombres : si a &lt; b et a divise b, alors b ≥ 2a.</p>`,
      `<p>Les 50 nombres 51, 52, …, 100 : aucun ne divise un autre (le double de 51 dépasse 100). Donc n ≥ 51. Il faut montrer que 51 suffit.</p>`,
      `<p>Tout entier s'écrit de façon unique <span class="m">2<sup>k</sup> × m</span> avec m impair (on divise par 2 tant qu'on peut). Combien de valeurs possibles pour m quand le nombre est entre 1 et 100 ?</p>`,
      `<p>m est un impair entre 1 et 99 : 50 valeurs = 50 tiroirs. Deux des 51 nombres ont le même m. Que peut-on dire de deux nombres 2<sup>k</sup>m et 2<sup>j</sup>m ?</p>`
    ],
    lecon: {
      titre: `Tiroirs : la partie impaire`,
      html: `<p>Tout entier n ≥ 1 s'écrit de manière unique <span class="m">n = 2<sup>k</sup> × m</span> avec k ≥ 0 et m impair. On appelle m la <strong>partie impaire</strong> de n.</p>
<div class="exemple">96 = 2<sup>5</sup> × 3, 40 = 2<sup>3</sup> × 5, 7 = 2<sup>0</sup> × 7.</div>
<p>Deux nombres de même partie impaire m, disons 2<sup>j</sup>m et 2<sup>k</sup>m avec j &lt; k, vérifient : le premier divise le second (le quotient est 2<sup>k−j</sup>).</p>
<p>Ranger les nombres selon leur partie impaire fournit donc des <strong>tiroirs</strong> très efficaces pour les questions de divisibilité.</p>
<div class="astuce">Astuce olympique : les tiroirs « chaînes » 1, 2, 4, 8, … / 3, 6, 12, 24, … / 5, 10, 20, … sont des familles où tout nombre divise les suivants. Deux nombres dans une même chaîne : l'un divise l'autre.</div>`
    },
    correction: `<p><strong>50 nombres ne suffisent pas.</strong> Prenons 51, 52, …, 100. Si a &lt; b et a divise b, alors b est un multiple de a supérieur à a, donc b ≥ 2a ≥ 102 &gt; 100 : impossible. Aucun de ces 50 nombres ne divise un autre. Donc n ≥ 51.</p>
<p><strong>51 nombres suffisent.</strong> Écrivons chaque nombre choisi sous la forme 2<sup>k</sup> × m avec m impair. Comme le nombre est entre 1 et 100, m est un impair entre 1 et 99 : il y a 50 valeurs possibles. Avec 51 nombres et 50 parties impaires possibles, deux nombres ont la même partie impaire m (principe des tiroirs) : ce sont 2<sup>j</sup>m et 2<sup>k</sup>m avec j ≠ k, disons j &lt; k. Alors 2<sup>j</sup>m divise 2<sup>k</sup>m.</p>
<p>Réponse : <strong>51</strong>.</p>
<p><em>Pour aller plus loin :</em> plus généralement, parmi n + 1 nombres de {1, …, 2n}, l'un divise toujours un autre.</p>`
  },
  {
    id: "logique-27",
    theme: "logique",
    niveau: 2,
    type: "demo",
    titre: `Deux tas presque égaux`,
    enonce: `<p>Deux tas contiennent respectivement 20 et 21 allumettes. Deux joueurs jouent à tour de rôle. À chaque coup, un joueur choisit <strong>un</strong> des tas et y retire autant d'allumettes qu'il le souhaite (au moins une). Celui qui prend la dernière allumette gagne.</p>
<p>Lequel des deux joueurs a une stratégie gagnante ? Décrire cette stratégie et prouver qu'elle fonctionne.</p>`,
    figure: ``,
    pistes: [
      `<p>Commence par le cas de deux tas égaux, par exemple 2 et 2. Qui gagne ?</p>`,
      `<p>Quand les tas sont égaux, le joueur qui ne doit pas jouer peut « copier » le coup de l'autre dans l'autre tas. Pourquoi est-ce toujours possible ?</p>`,
      `<p>Avec 20 et 21, le premier joueur peut-il rendre les tas égaux ?</p>`,
      `<p>Il retire 1 allumette du tas de 21. Ensuite il copie. Il reste à expliquer pourquoi c'est lui qui prend la dernière allumette.</p>`
    ],
    lecon: {
      titre: `Symétrie dans les jeux de tas`,
      html: `<p>Rappel : dans un jeu, une stratégie de <strong>copie</strong> consiste à rétablir une situation symétrique après chaque coup de l'adversaire.</p>
<p>Pour deux tas, la situation symétrique est « <strong>les deux tas sont égaux</strong> ». Si l'adversaire joue dans un tas, on joue le même coup dans l'autre : les tas redeviennent égaux.</p>
<p>La preuve s'écrit avec un <strong>invariant</strong> : « après chacun de mes coups, les deux tas sont égaux ». On vérifie :</p>
<ul><li>que je peux toujours jouer (l'adversaire ne peut pas vider les deux tas d'un coup) ;</li>
<li>que le jeu se termine (le nombre d'allumettes diminue strictement) ;</li>
<li>que c'est moi qui fais le dernier coup.</li></ul>
<div class="exemple">C'est le cas le plus simple du jeu de <strong>Nim</strong>, que tu étudieras avec plus de tas plus tard.</div>
<div class="astuce">Astuce olympique : ne te contente pas de décrire la stratégie ; prouve qu'elle est toujours applicable et qu'elle mène à la victoire.</div>`
    },
    correction: `<p><strong>Le premier joueur gagne.</strong></p>
<p><strong>Stratégie.</strong> Au premier coup, il retire 1 allumette du tas de 21 : les deux tas contiennent 20 allumettes. Ensuite, chaque fois que l'adversaire retire a allumettes d'un tas, il retire a allumettes de l'autre tas.</p>
<p><strong>Invariant :</strong> après chaque coup du premier joueur, les deux tas ont le même nombre d'allumettes.</p>
<p><strong>La stratégie est toujours applicable.</strong> Supposons les tas égaux, de taille t ≥ 1, et que l'adversaire retire a allumettes (1 ≤ a ≤ t) d'un tas. L'autre tas contient encore t ≥ a allumettes : le premier joueur peut en retirer a, et les tas redeviennent égaux (t − a chacun).</p>
<p><strong>Le premier joueur prend la dernière allumette.</strong> Le nombre total d'allumettes diminue strictement à chaque coup, donc la partie se termine. Après chaque coup du premier joueur, les tas sont égaux ; après un coup de l'adversaire, ils sont différents (il a modifié un seul tas), donc il reste au moins une allumette. Ce n'est donc jamais l'adversaire qui prend la dernière allumette : c'est le premier joueur.</p>
<p><em>Pour aller plus loin :</em> avec deux tas égaux au départ, c'est le <em>second</em> joueur qui gagne en copiant.</p>`,
    bareme: [
      `Identifier le gagnant (premier joueur) et le premier coup (21 → 20).`,
      `Décrire la stratégie de copie.`,
      `Justifier que la copie est toujours possible.`,
      `Justifier que le jeu se termine et que le premier joueur fait le dernier coup.`
    ]
  },
  {
    id: "logique-28",
    theme: "logique",
    niveau: 2,
    type: "reponse",
    titre: `Doubler ou avancer`,
    enonce: `<p>Sur une calculatrice cassée, deux touches seulement fonctionnent : <strong>×2</strong> (multiplier par 2) et <strong>+1</strong> (ajouter 1). L'écran affiche 1.</p>
<p>Quel est le nombre minimal d'appuis nécessaires pour faire afficher <strong>2027</strong> ?</p>`,
    figure: ``,
    reponse: ["18", "dix-huit"],
    reponseTexte: `18`,
    pistes: [
      `<p>Travaille « à l'envers » : partant de 2027, quelle a été la dernière touche utilisée ? (2027 est impair…)</p>`,
      `<p>À l'envers : si le nombre est impair, on enlève 1 ; s'il est pair, on a intérêt à diviser par 2. Applique cela à partir de 2027 et compte les étapes.</p>`,
      `<p>2027 → 2026 → 1013 → 1012 → 506 → 253 → … Continue jusqu'à 1.</p>`,
      `<p>Pour prouver qu'on ne peut pas faire mieux, écris les nombres en base 2 : 2027 = 11111101011<sub>2</sub>. Que fait ×2 sur l'écriture binaire ? Et +1 ?</p>`
    ],
    lecon: {
      titre: `Raisonner à rebours et écriture binaire`,
      html: `<p><strong>Raisonner à rebours</strong> : quand le point d'arrivée est connu, on remonte le temps. C'est souvent plus facile, car les choix se réduisent (un nombre impair ne peut pas venir de ×2).</p>
<p><strong>Écriture binaire</strong> : tout entier s'écrit comme une somme de puissances de 2 distinctes, ce qu'on note avec des chiffres 0 et 1.</p>
<div class="exemple">13 = 8 + 4 + 1 = 1101<sub>2</sub>. Multiplier par 2 ajoute un 0 à droite : 26 = 11010<sub>2</sub>. Ajouter 1 à un nombre pair change le dernier 0 en 1 : 27 = 11011<sub>2</sub>.</div>
<p>Pour construire n à partir de 1 : on lit l'écriture binaire de n après le premier chiffre ; pour chaque chiffre, on fait ×2, puis +1 si ce chiffre vaut 1.</p>
<div class="astuce">Astuce olympique : pour prouver un minimum, trouve une quantité (un « potentiel ») qui augmente d'au plus 1 à chaque étape. Si elle vaut 0 au départ et P à l'arrivée, il faut au moins P étapes.</div>`
    },
    correction: `<p>En binaire, 2027 = 1024 + 512 + 256 + 128 + 64 + 32 + 8 + 2 + 1 = <strong>11111101011</strong><sub>2</sub> : 11 chiffres, dont 9 chiffres 1.</p>
<p><strong>18 appuis suffisent.</strong> On part de 1 = 1<sub>2</sub>, et pour chacun des 10 chiffres suivants on appuie sur ×2 (ce qui ajoute un 0 à droite), puis sur +1 si le chiffre vaut 1. Cela fait 10 appuis sur ×2 et 8 sur +1 (il y a 8 chiffres 1 après le premier), soit 18 appuis. (À rebours : 2027, 2026, 1013, 1012, 506, 253, 252, 126, 63, 62, 31, 30, 15, 14, 7, 6, 3, 2, 1.)</p>
<p><strong>On ne peut pas faire moins.</strong> Pour un entier n, posons φ(n) = (nombre de chiffres binaires de n − 1) + (nombre de chiffres 1 de n − 1). On a φ(1) = 0 et φ(2027) = 10 + 8 = 18. Montrons que chaque appui augmente φ d'au plus 1 :</p>
<ul><li>×2 ajoute un 0 à droite : le nombre de chiffres augmente de 1, le nombre de 1 ne change pas : φ augmente de 1.</li>
<li>+1 : si n se termine par exactement j chiffres 1 (j ≥ 0), ajouter 1 les transforme en 0 et transforme le 0 qui précède en 1 (retenue). Si ce 0 existe, la longueur ne change pas et le nombre de 1 varie de 1 − j ≤ 1. Sinon, n ne s'écrit qu'avec des 1 (n = 11…1, j chiffres, j ≥ 1) et n + 1 = 100…0 : la longueur augmente de 1 et le nombre de 1 passe de j à 1, donc φ varie de 1 + 1 − j ≤ 1.</li></ul>
<p>Il faut donc au moins 18 appuis. Réponse : <strong>18</strong>.</p>`
  },
  {
    id: "logique-29",
    theme: "logique",
    niveau: 3,
    type: "demo",
    titre: `Les caméléons de l'île`,
    enonce: `<p>Sur une île vivent 13 caméléons rouges, 15 verts et 17 bleus. Quand deux caméléons de couleurs <strong>différentes</strong> se rencontrent, ils prennent tous les deux la <strong>troisième</strong> couleur (par exemple, un rouge et un vert deviennent tous deux bleus). Les autres rencontres ne changent rien.</p>
<p>Montrer qu'il est impossible qu'un jour tous les caméléons soient de la même couleur.</p>`,
    figure: ``,
    pistes: [
      `<p>Note (r, v, b) les nombres de caméléons rouges, verts et bleus. Que devient (r, v, b) après la rencontre d'un rouge et d'un vert ?</p>`,
      `<p>(r, v, b) devient (r − 1, v − 1, b + 2). Regarde la différence r − v : comment change-t-elle ? Et v − b ?</p>`,
      `<p>Chaque différence change de 0, de +3 ou de −3. Que dire de son reste dans la division par 3 ?</p>`,
      `<p>Si tous les caméléons étaient de la même couleur, deux des nombres r, v, b vaudraient 0. Quelle différence serait alors divisible par 3 ? Et au départ ?</p>`
    ],
    lecon: {
      titre: `Invariants modulo 3 (et au-delà)`,
      html: `<p>Rappel : un invariant est une quantité qui ne change pas. Quand la parité ne suffit pas, on regarde le <strong>reste dans la division par 3</strong> (ou 4, 5…).</p>
<p>On note <span class="m">a ≡ b (mod 3)</span> lorsque a et b ont le même reste dans la division par 3, c'est-à-dire lorsque a − b est un multiple de 3.</p>
<div class="exemple">17 ≡ 2 (mod 3), −4 ≡ 2 (mod 3) (car −4 = 3 × (−2) + 2), 15 ≡ 0 (mod 3).</div>
<p>Si une quantité change toujours d'un <strong>multiple de 3</strong>, son reste modulo 3 est invariant.</p>
<p>Dans le problème des caméléons, chaque rencontre enlève 1 à deux couleurs et ajoute 2 à la troisième : les <strong>différences</strong> entre deux couleurs changent de 0 ou ±3.</p>
<div class="astuce">Astuce olympique : si une opération ajoute ou retire toujours la même chose « à un multiple près », pense aux congruences modulo ce nombre.</div>`
    },
    correction: `<p>Notons r, v, b les nombres de caméléons rouges, verts et bleus. Au départ (r, v, b) = (13, 15, 17), et r + v + b = 45 reste toujours constant.</p>
<p><strong>Effet d'une rencontre.</strong> Une rencontre rouge-vert transforme (r, v, b) en (r − 1, v − 1, b + 2). Alors :</p>
<ul><li>r − v ne change pas ;</li>
<li>v − b devient (v − 1) − (b + 2) = (v − b) − 3 ;</li>
<li>r − b devient (r − b) − 3.</li></ul>
<p>Les autres rencontres (rouge-bleu, vert-bleu) sont analogues. Ainsi <strong>chaque différence r − v, v − b, r − b change de 0, 3 ou −3</strong> : son reste modulo 3 est invariant.</p>
<p><strong>Au départ</strong> : r − v = −2, v − b = −2, r − b = −4. Aucune de ces différences n'est divisible par 3.</p>
<p><strong>Conclusion.</strong> Si tous les caméléons devenaient de la même couleur, deux des trois nombres r, v, b seraient nuls, et leur différence serait 0, divisible par 3. Or, par invariance, aucune des trois différences n'est jamais divisible par 3. C'est donc impossible.</p>
<p><em>Pour aller plus loin :</em> avec 13 rouges, 16 verts et 16 bleus (r − v = −3), on peut montrer que tous peuvent devenir rouges. L'invariant est alors la seule obstruction.</p>`,
    bareme: [
      `Modéliser par le triplet (r, v, b) et décrire l'effet d'une rencontre.`,
      `Montrer que les différences varient de 0 ou ±3, donc invariance modulo 3.`,
      `Calculer les différences initiales (aucune divisible par 3).`,
      `Montrer que l'état final exigerait une différence nulle et conclure.`
    ]
  },
  {
    id: "logique-30",
    theme: "logique",
    niveau: 3,
    type: "reponse",
    titre: `Le dernier debout`,
    enonce: `<p>100 élèves, numérotés de 1 à 100, sont assis en cercle dans cet ordre. L'élève 1 élimine l'élève 2 (qui quitte le cercle), puis l'élève 3 élimine l'élève 4, et ainsi de suite : à chaque fois, le prochain élève encore présent élimine son voisin suivant encore présent. On continue en tournant autour du cercle (après 99 qui élimine 100, c'est au tour de 1 qui élimine 3, etc.) jusqu'à ce qu'il ne reste qu'un élève.</p>
<p>Quel est le numéro du dernier élève restant ?</p>`,
    figure: ``,
    reponse: ["73", "soixante-treize"],
    reponseTexte: `73`,
    pistes: [
      `<p>Fais le cas n = 2, 3, 4, 5, 6, 7, 8 à la main. Note le survivant J(n). Que remarques-tu pour n = 2, 4, 8 ?</p>`,
      `<p>Il semble que J(n) = 1 quand n est une puissance de 2. Pourquoi ? Après un tour complet, combien d'élèves reste-t-il, et qui a la main ?</p>`,
      `<p>Si n = 2<sup>m</sup>, après un tour, il reste 2<sup>m−1</sup> élèves (les impairs) et c'est de nouveau à 1 de jouer : même situation, en plus petit. Pour n = 100 = 64 + 36, élimine d'abord 36 élèves : combien de personnes restent, et qui a la main ?</p>`,
      `<p>Après avoir éliminé 2, 4, …, 72 (36 élèves), il en reste 64 et c'est à l'élève 73 de jouer. Utilise le cas des puissances de 2.</p>`
    ],
    lecon: {
      titre: `Récurrence : se ramener à un cas déjà connu`,
      html: `<p>Une récurrence n'est pas toujours « de n − 1 à n ». On peut aussi se ramener à un cas <strong>plus petit de moitié</strong>, ou à un cas <strong>particulier</strong> déjà résolu.</p>
<p><strong>Problème de Josèphe</strong> (une personne sur deux est éliminée) :</p>
<ul><li>si n = 2<sup>m</sup>, un tour complet élimine tous les numéros pairs ; il reste 2<sup>m−1</sup> personnes et c'est encore au premier de jouer. Par récurrence, le survivant est toujours le premier : J(2<sup>m</sup>) = 1.</li>
<li>si n = 2<sup>m</sup> + k avec 0 ≤ k &lt; 2<sup>m</sup>, après k éliminations il reste 2<sup>m</sup> personnes et c'est au numéro 2k + 1 de jouer : il sera le survivant. Donc <span class="m">J(n) = 2k + 1</span>.</li></ul>
<div class="exemple">n = 10 = 8 + 2 : J(10) = 5. Vérifie-le à la main !</div>
<div class="astuce">Astuce olympique : quand tu repères un motif sur de petits cas (ici J(n) = 1 aux puissances de 2), cherche la « situation identique en plus petit » qui l'explique.</div>`
    },
    correction: `<p><strong>Cas des puissances de 2.</strong> Si le nombre de personnes est 2<sup>m</sup> et que c'est au premier (dans l'ordre) de jouer, un tour complet élimine les personnes de rang 2, 4, …, 2<sup>m</sup> ; il en reste 2<sup>m−1</sup>, et c'est de nouveau au premier de jouer (le dernier éliminé était le 2<sup>m</sup>-ième). En répétant, il finit par ne rester que le premier. Donc avec une puissance de 2 de personnes, <strong>celui qui a la main survit</strong>.</p>
<p><strong>Cas n = 100.</strong> On écrit 100 = 64 + 36. Les 36 premières éliminations sont celles des élèves 2, 4, 6, …, 72 (éliminés par 1, 3, …, 71). Il reste alors 100 − 36 = 64 = 2<sup>6</sup> élèves, et c'est au tour de l'élève 73. D'après le cas précédent, l'élève 73 est le dernier restant.</p>
<p>Réponse : <strong>73</strong>.</p>
<p><em>Pour aller plus loin :</em> écrite en binaire, la règle est jolie : pour obtenir J(n), on déplace le premier chiffre 1 de n à la fin. 100 = 1100100<sub>2</sub> donne 1001001<sub>2</sub> = 73.</p>`
  },
  {
    id: "logique-31",
    theme: "logique",
    niveau: 3,
    type: "demo",
    titre: `Le parlement des ennemis`,
    enonce: `<p>Dans un parlement, chaque député a <strong>au plus trois ennemis</strong> parmi les autres députés (l'inimitié est réciproque : si A est l'ennemi de B, alors B est l'ennemi de A).</p>
<p>Montrer qu'on peut répartir les députés en deux chambres de sorte que chaque député ait <strong>au plus un</strong> ennemi dans sa propre chambre.</p>`,
    figure: ``,
    pistes: [
      `<p>Commence par une répartition quelconque. Si un député a au moins 2 ennemis dans sa chambre, que se passe-t-il si on le change de chambre ?</p>`,
      `<p>Un tel député a au plus 1 ennemi dans l'autre chambre. En le déplaçant, il passe d'au moins 2 ennemis « à côté de lui » à au plus 1. Mais les autres députés sont-ils gênés ?</p>`,
      `<p>Pour être sûr que le processus s'arrête, compte une quantité globale : E = nombre total de paires d'ennemis qui sont dans la même chambre. Comment varie E quand on déplace ce député ?</p>`,
      `<p>E diminue d'au moins 1 à chaque déplacement, et E est un entier positif ou nul. Le processus ne peut donc pas durer indéfiniment. Que se passe-t-il quand il s'arrête ?</p>`
    ],
    lecon: {
      titre: `Les monovariants : des processus qui s'arrêtent`,
      html: `<p>Un <strong>monovariant</strong> est une quantité qui, au lieu de rester constante, <strong>varie toujours dans le même sens</strong> (par exemple, diminue strictement à chaque étape).</p>
<p><strong>Principe clé :</strong> une suite d'entiers positifs ou nuls qui diminue strictement ne peut pas être infinie. Donc un processus qui fait diminuer strictement une quantité entière positive <strong>s'arrête forcément</strong>.</p>
<p>Méthode typique pour prouver l'existence d'une « bonne » configuration :</p>
<ol><li>partir d'une configuration quelconque ;</li>
<li>tant qu'elle est « mauvaise », la modifier localement ;</li>
<li>trouver un monovariant pour prouver que les modifications s'arrêtent ;</li>
<li>à l'arrêt, la configuration est bonne.</li></ol>
<div class="exemple">Variante : prendre directement la répartition qui <strong>minimise</strong> E (principe de l'extremum) et montrer par l'absurde qu'elle convient.</div>
<div class="astuce">Astuce olympique : le monovariant est souvent une quantité <strong>globale</strong> (somme sur tout le monde), même si l'amélioration est locale.</div>`
    },
    correction: `<p>Répartissons les députés de façon quelconque en deux chambres. Notons E le nombre de paires {A, B} d'ennemis siégeant dans la même chambre. E est un entier positif ou nul.</p>
<p><strong>Étape de correction.</strong> Tant qu'il existe un député D ayant au moins 2 ennemis dans sa chambre, on le fait changer de chambre. Comme D a au plus 3 ennemis au total, il en a au plus 3 − 2 = 1 dans l'autre chambre.</p>
<p><strong>Variation de E.</strong> Seules les paires contenant D sont modifiées. Avant le déplacement, D formait au moins 2 paires d'ennemis dans sa chambre ; après, il en forme au plus 1 (dans sa nouvelle chambre). Les paires ne contenant pas D ne changent pas. Donc E diminue d'au moins 1.</p>
<p><strong>Arrêt.</strong> E est un entier positif ou nul qui diminue strictement à chaque étape : il ne peut y avoir qu'un nombre fini d'étapes (au plus la valeur initiale de E). Le processus s'arrête donc.</p>
<p><strong>Conclusion.</strong> Il s'arrête précisément lorsqu'aucun député n'a au moins 2 ennemis dans sa chambre, c'est-à-dire lorsque chaque député a au plus un ennemi dans sa chambre. Cette répartition convient.</p>
<p><em>Erreur fréquente :</em> dire « on déplace les députés mécontents jusqu'à ce que tout le monde soit content » sans prouver que cela s'arrête. Le déplacement de D peut rendre mécontent un autre député ; c'est pour cela qu'il faut le monovariant E.</p>`,
    bareme: [
      `Partir d'une répartition quelconque et définir l'opération (déplacer un député ayant au moins 2 ennemis dans sa chambre).`,
      `Introduire le monovariant E (paires d'ennemis dans une même chambre).`,
      `Prouver que E diminue strictement (usage de « au plus 3 ennemis »).`,
      `Justifier que le processus s'arrête et que la répartition finale convient.`
    ]
  },
  {
    id: "logique-32",
    theme: "logique",
    niveau: 3,
    type: "reponse",
    titre: `Douze pièces, une intruse`,
    enonce: `<p>On a 12 pièces d'apparence identique. Onze ont la même masse ; la douzième est fausse, mais on ne sait pas si elle est <strong>plus lourde ou plus légère</strong> que les autres. On dispose d'une balance à deux plateaux, sans poids.</p>
<p>Quel est le nombre minimal de pesées permettant, à coup sûr, de trouver la fausse pièce <strong>et</strong> de dire si elle est plus lourde ou plus légère ?</p>`,
    figure: ``,
    reponse: ["3", "trois"],
    reponseTexte: `3`,
    pistes: [
      `<p>Combien y a-t-il de situations possibles au départ (quelle pièce, et lourde ou légère) ? Combien de résultats différents peuvent donner 2 pesées ?</p>`,
      `<p>24 situations, et 2 pesées donnent au plus 9 résultats : 2 pesées ne suffisent pas. Essayons 3 pesées : commence par 4 pièces contre 4.</p>`,
      `<p>Si 1-2-3-4 contre 5-6-7-8 est équilibré, la fausse est parmi 9 à 12, et les pièces 1 à 8 sont vraies (utiles comme références !). Sinon, disons que le côté gauche penche : alors soit l'une de 1-2-3-4 est lourde, soit l'une de 5-6-7-8 est légère. Il reste 8 situations.</p>`,
      `<p>Dans le cas « gauche plus lourd », pèse 1, 2, 5 contre 3, 6, 9 (9 est vraie). Analyse les trois issues : chacune laisse au plus 3 situations, que l'on départage avec une dernière pesée.</p>`
    ],
    lecon: {
      titre: `Pesées : compter les situations, pas les pièces`,
      html: `<p>Rappel : k pesées donnent au plus 3<sup>k</sup> résultats différents. Il faut compter les <strong>situations</strong> à distinguer : ici, une situation = (numéro de la pièce fausse, plus lourde ou plus légère), soit 12 × 2 = 24 situations.</p>
<p>Comme 3<sup>2</sup> = 9 &lt; 24 ≤ 27 = 3<sup>3</sup>, il faut au moins 3 pesées. Mais la borne ne dit pas que 3 suffisent : il faut une stratégie !</p>
<p><strong>Règle de conception</strong> : chaque pesée doit répartir les situations restantes en trois groupes d'au plus 3<sup>(nombre de pesées restantes)</sup> situations chacun.</p>
<div class="exemple">Après une première pesée déséquilibrée (4 contre 4), il reste 8 situations ; la deuxième pesée doit les répartir en groupes d'au plus 3.</div>
<div class="astuce">Astuce olympique : les pièces déjà innocentées sont précieuses : elles servent de « poids de référence » pour équilibrer les plateaux.</div>`
    },
    correction: `<p><strong>2 pesées ne suffisent pas.</strong> Il y a 24 situations possibles (12 pièces, chacune pouvant être lourde ou légère). Deux pesées donnent au plus 3 × 3 = 9 suites de résultats. Comme 24 &gt; 9, deux situations différentes donneraient les mêmes résultats.</p>
<p><strong>3 pesées suffisent.</strong> Numérotons les pièces de 1 à 12.</p>
<p><em>Pesée 1 :</em> 1, 2, 3, 4 contre 5, 6, 7, 8.</p>
<ul><li><strong>Équilibre.</strong> La fausse est parmi 9, 10, 11, 12 ; les pièces 1 à 8 sont vraies. <em>Pesée 2 :</em> 9, 10, 11 contre 1, 2, 3.
<ul><li>Équilibre : la fausse est 12. <em>Pesée 3 :</em> 12 contre 1 indique si elle est lourde ou légère.</li>
<li>Le côté de 9, 10, 11 est plus lourd : la fausse est lourde, parmi 9, 10, 11. <em>Pesée 3 :</em> 9 contre 10 ; la plus lourde est fausse, et en cas d'équilibre, c'est 11. (Cas « plus léger » symétrique.)</li></ul></li>
<li><strong>Le côté gauche est plus lourd</strong> (l'autre cas est symétrique). Situations possibles : 1, 2, 3 ou 4 lourde, ou 5, 6, 7 ou 8 légère ; la pièce 9 est vraie. <em>Pesée 2 :</em> 1, 2, 5 contre 3, 6, 9.
<ul><li>Équilibre : il reste 4 lourde, 7 légère ou 8 légère. <em>Pesée 3 :</em> 7 contre 8 ; la plus légère est fausse (légère) ; en cas d'équilibre, 4 est lourde.</li>
<li>Gauche plus lourd : il reste 1 lourde, 2 lourde ou 6 légère. <em>Pesée 3 :</em> 1 contre 2 ; la plus lourde est fausse ; en cas d'équilibre, 6 est légère.</li>
<li>Gauche plus léger : il reste 3 lourde ou 5 légère. <em>Pesée 3 :</em> 3 contre 9 ; si 3 est plus lourde, c'est elle ; sinon, 5 est légère.</li></ul></li></ul>
<p>Dans tous les cas, on trouve la fausse pièce et son type en 3 pesées. Réponse : <strong>3</strong>.</p>
<p><em>Pour aller plus loin :</em> avec 3 pesées, on ne peut pas traiter 13 pièces dans ces conditions (sans pièce de référence extérieure), bien que 26 ≤ 27. Sauras-tu voir pourquoi la première pesée pose problème ?</p>`
  },
  {
    id: "logique-33",
    theme: "logique",
    niveau: 3,
    type: "demo",
    titre: `Cinquante et un points`,
    enonce: `<p>On place 51 points dans un carré de côté 1 (à l'intérieur ou sur le bord).</p>
<ol><li>Montrer qu'il existe un carré de côté 1/5 contenant au moins 3 de ces points.</li>
<li>En déduire qu'il existe un disque de rayon 1/7 contenant au moins 3 de ces points.</li></ol>`,
    figure: ``,
    pistes: [
      `<p>Découpe le carré de côté 1 en petits carrés de côté 1/5. Combien en obtiens-tu ?</p>`,
      `<p>25 petits carrés (tiroirs) et 51 points (objets). Le principe des tiroirs généralisé garantit combien de points dans un même petit carré ?</p>`,
      `<p>51 &gt; 2 × 25, donc un petit carré contient au moins 3 points. Pour la question 2 : quel est le plus petit disque qui contient un carré de côté 1/5 ?</p>`,
      `<p>Le disque circonscrit au petit carré a pour rayon la moitié de la diagonale : (1/5) × √2 / 2 = √2/10. Compare √2/10 et 1/7 (élève au carré).</p>`
    ],
    lecon: {
      titre: `Tiroirs géométriques`,
      html: `<p>En géométrie, on applique le principe des tiroirs en <strong>découpant une figure en morceaux</strong> : les morceaux sont les tiroirs, les points sont les objets.</p>
<p>Si l'on place plus de k × n points dans une figure découpée en n morceaux, un morceau contient au moins k + 1 points.</p>
<p>Les morceaux doivent <strong>recouvrir</strong> toute la figure. Un point situé sur une frontière commune appartient à plusieurs morceaux : on le range dans l'un d'eux au choix (cela ne gêne pas).</p>
<div class="exemple">5 points dans un carré de côté 2 : en découpant en 4 carrés de côté 1, deux points sont dans un même petit carré, donc à distance au plus √2 (la diagonale).</div>
<div class="astuce">Astuce olympique : pour passer d'un carré à un disque, on utilise le <strong>cercle circonscrit</strong> au carré, de rayon égal à la moitié de la diagonale.</div>`
    },
    correction: `<p><strong>1.</strong> Découpons le carré de côté 1 en une grille de 5 × 5 = 25 petits carrés de côté 1/5 (en traçant les droites parallèles aux côtés aux abscisses et ordonnées 1/5, 2/5, 3/5, 4/5). Ces petits carrés recouvrent le grand carré ; attribuons chacun des 51 points à un petit carré qui le contient (s'il est sur une frontière, on en choisit un).</p>
<p>Si chaque petit carré contenait au plus 2 points, il y aurait au plus 2 × 25 = 50 points. Or il y en a 51. Donc un petit carré, de côté 1/5, contient au moins 3 points.</p>
<p><strong>2.</strong> Soit C ce petit carré, de centre O. Tout point de C est à une distance de O au plus égale à la moitié de la diagonale de C :</p>
<div class="calc">(1/2) × (√2 / 5) = √2 / 10.</div>
<p>Or √2/10 &lt; 1/7, car ces nombres sont positifs et (√2/10)<sup>2</sup> = 2/100 = 1/50 &lt; 1/49 = (1/7)<sup>2</sup>. Donc le disque de centre O et de rayon 1/7 contient C, et donc au moins 3 des points.</p>
<p><em>Pour aller plus loin :</em> pourquoi ne pas découper directement en disques ? Parce que des disques ne peuvent pas recouvrir un carré sans se chevaucher ni en « compter » facilement le nombre. On passe par des carrés, puis on les inclut dans des disques.</p>`,
    bareme: [
      `Découper le carré en 25 carrés de côté 1/5 qui le recouvrent.`,
      `Appliquer le principe des tiroirs généralisé (51 &gt; 2 × 25).`,
      `Calculer le rayon du cercle circonscrit au petit carré (√2/10).`,
      `Comparer rigoureusement √2/10 et 1/7 et conclure.`
    ]
  },
  {
    id: "logique-34",
    theme: "logique",
    niveau: 3,
    type: "reponse",
    titre: `Le jeu de Nim`,
    enonce: `<p>Trois tas contiennent 3, 5 et 7 jetons. Deux joueurs jouent à tour de rôle : à chaque coup, on choisit <strong>un</strong> tas et on y retire autant de jetons qu'on veut (au moins un). Celui qui prend le dernier jeton gagne.</p>
<p>Le premier joueur a une stratégie gagnante. Combien de premiers coups différents lui permettent de conserver une stratégie gagnante ? (Un coup est déterminé par le tas choisi et le nombre de jetons retirés.)</p>`,
    figure: ``,
    reponse: ["3", "trois"],
    reponseTexte: `3`,
    pistes: [
      `<p>Commence par les positions à deux tas : (a, a) est perdante pour celui qui joue (on l'a vu avec la stratégie de copie). Et (1, 2, 3) ?</p>`,
      `<p>Écris les tailles en base 2 : 3 = 011, 5 = 101, 7 = 111. Compte, dans chaque colonne (4, 2, 1), le nombre de chiffres 1.</p>`
      ,
      `<p>Théorème de Nim : une position est perdante (pour le joueur qui doit jouer) exactement lorsque chaque colonne binaire contient un nombre <strong>pair</strong> de chiffres 1. Ici, quelle colonne est impaire ?</p>`,
      `<p>Seule la colonne des unités est impaire (trois chiffres 1). Un bon coup doit rendre toutes les colonnes paires, en ne modifiant qu'un tas, et en le diminuant. Pour chaque tas, y a-t-il une façon de le faire ?</p>`
    ],
    lecon: {
      titre: `Le jeu de Nim et la somme binaire`,
      html: `<p>Au jeu de Nim (plusieurs tas, on retire autant qu'on veut dans un seul tas, celui qui prend le dernier gagne), on écrit les tailles des tas en <strong>base 2</strong> les unes sous les autres.</p>
<p><strong>Théorème.</strong> La position est perdante pour le joueur qui doit jouer si et seulement si <strong>chaque colonne contient un nombre pair de 1</strong>. On dit alors que la « somme de Nim » est nulle.</p>
<ul><li>Depuis une position « toutes colonnes paires », tout coup modifie un seul tas, donc change au moins un chiffre de ce tas : la colonne correspondante devient impaire.</li>
<li>Depuis une position ayant des colonnes impaires, on regarde la colonne impaire la plus à gauche ; on choisit un tas ayant un 1 dans cette colonne, et on inverse dans ce tas les chiffres de toutes les colonnes impaires. Le 1 de gauche devient 0, donc le tas diminue : le coup est légal et rend toutes les colonnes paires.</li></ul>
<div class="exemple">Tas 1, 2, 3 : 01, 10, 11 : colonnes (2 : deux 1) et (1 : deux 1) paires : position perdante.</div>
<div class="astuce">Astuce olympique : ce théorème (Bouton, 1901) est la base de toute la théorie des jeux combinatoires. La stratégie de copie à deux tas en est un cas particulier.</div>`
    },
    correction: `<p>En base 2 :</p>
<div class="calc">3 = 011<br>5 = 101<br>7 = 111</div>
<p>Colonne des 4 : deux chiffres 1 (pair). Colonne des 2 : deux chiffres 1 (pair). Colonne des 1 : trois chiffres 1 (impair).</p>
<p>D'après le théorème de Nim, les bons coups sont exactement ceux qui mènent à une position où toutes les colonnes sont paires (position perdante pour l'adversaire) ; tout autre coup laisse à l'adversaire une position gagnante.</p>
<p>Un coup ne modifie qu'un tas. Pour rendre toutes les colonnes paires, il faut changer, dans ce tas, exactement le chiffre des unités (seule colonne impaire), sans toucher aux autres chiffres. Le nouveau tas est donc imposé : 3 → 2, 5 → 4, 7 → 6 selon le tas choisi. Dans chaque cas le chiffre des unités passe de 1 à 0, donc le tas diminue (de 1) : le coup est légal.</p>
<p>Il y a donc exactement <strong>3</strong> premiers coups gagnants : retirer 1 jeton de n'importe lequel des trois tas.</p>
<p><em>Vérification :</em> (2, 5, 7) : 010, 101, 111, colonnes paires. De même (3, 4, 7) et (3, 5, 6).</p>`
  },
  {
    id: "logique-35",
    theme: "logique",
    niveau: 3,
    type: "demo",
    titre: `Barres de quatre`,
    enonce: `<p>Peut-on paver un carré 10 × 10 avec 25 rectangles 1 × 4 (posés horizontalement ou verticalement, sans chevauchement ni débordement) ? Justifier.</p>`,
    figure: ``,
    pistes: [
      `<p>Le coloriage en échiquier (2 couleurs) ne suffit pas : un rectangle 1 × 4 couvre 2 cases de chaque couleur, et le carré en a 50 de chaque. Il faut un coloriage plus fin, avec 4 couleurs.</p>`,
      `<p>Numérote lignes et colonnes de 1 à 10 et donne à la case (i, j) la couleur « reste de i + j dans la division par 4 ». Combien de cases de chaque couleur couvre un rectangle 1 × 4 ?</p>`,
      `<p>Un rectangle 1 × 4 couvre 4 cases consécutives d'une ligne ou d'une colonne : les valeurs de i + j sont 4 entiers consécutifs, donc une case de chaque couleur. Combien de cases de chaque couleur faudrait-il alors ?</p>`,
      `<p>Il faudrait 25 cases de chaque couleur. Compte les cases de couleur 3 : elles sont sur les diagonales i + j = 3, 7, 11, 15, 19.</p>`
    ],
    lecon: {
      titre: `Coloriages à plusieurs couleurs`,
      html: `<p>Rappel : le coloriage en échiquier est adapté aux dominos. Pour des pièces de longueur k (rectangles 1 × k), on utilise un coloriage à <strong>k couleurs</strong> :</p>
<ul><li>couleur de la case (i, j) = reste de <span class="m">i + j</span> modulo k (coloriage « en diagonales ») ;</li>
<li>ou couleur = reste de i modulo k (coloriage « en bandes »), éventuellement combiné avec j.</li></ul>
<p>Avec le coloriage diagonal, une pièce 1 × k posée dans n'importe quel sens couvre <strong>exactement une case de chaque couleur</strong>, car les valeurs de i + j sont k entiers consécutifs.</p>
<div class="exemple">Un échiquier 8 × 8 privé d'un coin ne peut pas être pavé par 21 triminos droits 1 × 3 : avec 3 couleurs, les 63 cases ne se répartissent pas 21, 21, 21.</div>
<div class="astuce">Astuce olympique : pour compter les cases d'une couleur dans le coloriage diagonal, compte le long des diagonales i + j = constante.</div>`
    },
    correction: `<p><strong>Réponse : non.</strong></p>
<p>Numérotons lignes et colonnes de 1 à 10 et colorions la case (i, j) avec la couleur c = reste de i + j dans la division par 4 (couleurs 0, 1, 2, 3).</p>
<p><strong>Chaque rectangle couvre une case de chaque couleur.</strong> Un rectangle horizontal couvre (i, j), (i, j+1), (i, j+2), (i, j+3) : les sommes i + j, …, i + j + 3 sont quatre entiers consécutifs, qui ont quatre restes différents modulo 4. De même pour un rectangle vertical.</p>
<p>Donc 25 rectangles couvriraient exactement 25 cases de chaque couleur.</p>
<p><strong>Comptons les cases de couleur 3.</strong> Ce sont les cases où i + j vaut 3, 7, 11, 15 ou 19. La diagonale i + j = s contient s − 1 cases si s ≤ 11 et 21 − s cases si s ≥ 11 :</p>
<div class="calc">s = 3 : 2 cases ; s = 7 : 6 ; s = 11 : 10 ; s = 15 : 6 ; s = 19 : 2. Total : 26.</div>
<p>Il y a 26 cases de couleur 3, et non 25 : le pavage est impossible.</p>
<p><em>Pour aller plus loin :</em> un rectangle m × n est pavable par des 1 × 4 si et seulement si 4 divise m ou 4 divise n. La même idée de coloriage permet de le démontrer.</p>`,
    bareme: [
      `Remarquer que le coloriage à 2 couleurs ne suffit pas et introduire le coloriage i + j modulo 4.`,
      `Justifier qu'un rectangle 1 × 4 couvre une case de chaque couleur.`,
      `Compter correctement les cases d'une couleur (26 ≠ 25).`,
      `Conclure à l'impossibilité.`
    ]
  },
  {
    id: "logique-36",
    theme: "logique",
    niveau: 3,
    type: "reponse",
    titre: `Cavaliers pacifiques`,
    enonce: `<p>Aux échecs, un cavalier attaque les cases situées à un « saut en L » de la sienne : deux cases dans une direction puis une case perpendiculairement.</p>
<p>Quel est le nombre <strong>maximal</strong> de cavaliers que l'on peut placer sur un échiquier 8 × 8 de sorte qu'aucun cavalier n'en attaque un autre ?</p>`,
    figure: `<svg viewBox="0 0 170 90" width="170" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="1.2"><rect x="5" y="5" width="160" height="80"/><line x1="45" y1="5" x2="45" y2="85"/><line x1="85" y1="5" x2="85" y2="85"/><line x1="125" y1="5" x2="125" y2="85"/><line x1="5" y1="45" x2="165" y2="45"/></g><g font-size="14" fill="currentColor"><text x="20" y="31">A</text><text x="60" y="31">B</text><text x="100" y="31">C</text><text x="140" y="31">D</text><text x="20" y="71">C</text><text x="60" y="71">D</text><text x="100" y="71">A</text><text x="140" y="71">B</text></g></svg>`,
    reponse: ["32", "trente-deux"],
    reponseTexte: `32`,
    pistes: [
      `<p>Un cavalier change toujours de couleur (sur un échiquier colorié) quand il saute. Que peut-on en déduire pour une construction ?</p>`,
      `<p>Les 32 cavaliers posés sur toutes les cases blanches ne s'attaquent pas. Donc le maximum est au moins 32. Pour la borne, découpe l'échiquier en rectangles 2 × 4.</p>`,
      `<p>Dans un rectangle 2 × 4, regroupe les 8 cases en 4 paires de cases qui s'attaquent mutuellement (voir la figure : les deux cases de même lettre sont à un saut de cavalier). Combien de cavaliers au plus par paire ?</p>`,
      `<p>Au plus 1 cavalier par paire, donc au plus 4 par rectangle 2 × 4. Combien de rectangles 2 × 4 dans l'échiquier ?</p>`
    ],
    lecon: {
      titre: `Maximum : construction + tiroirs par paires`,
      html: `<p>Pour trouver le nombre maximal d'objets « compatibles » (qui ne s'attaquent pas, ne se touchent pas…), on combine :</p>
<ul><li>une <strong>construction</strong> atteignant la valeur ;</li>
<li>une <strong>borne</strong> obtenue en découpant l'espace en « tiroirs » qui ne peuvent chacun contenir qu'un nombre limité d'objets.</li></ul>
<p>Souvent, les tiroirs sont des <strong>paires incompatibles</strong> : deux cases qui s'attaquent ne peuvent pas porter toutes les deux un objet. Si l'on partage les cases en P paires incompatibles, il y a au plus P objets.</p>
<div class="exemple">Rois non attaquants sur un échiquier 8 × 8 : découper en 16 carrés 2 × 2 ; chaque carré contient au plus un roi (deux cases d'un carré 2 × 2 se touchent). Et 16 rois sont possibles. Le maximum est 16.</div>
<div class="astuce">Astuce olympique : la difficulté est de trouver un découpage qui « colle » exactement à la construction. Cherche un petit motif (ici 2 × 4) qui pave l'échiquier.</div>`
    },
    correction: `<p><strong>Construction de 32 cavaliers.</strong> Colorions l'échiquier en noir et blanc. Un saut de cavalier (2 cases dans un sens, 1 dans l'autre) change la somme ligne + colonne de 3 ou de 1, nombre impair : il change donc toujours la couleur de la case. Si l'on place un cavalier sur chacune des 32 cases blanches, aucun n'en attaque un autre (il n'attaque que des cases noires).</p>
<p><strong>Pas plus de 32.</strong> Découpons l'échiquier en 8 rectangles 2 × 4. Dans un rectangle 2 × 4, dont les cases sont (ligne 1 ou 2, colonne 1 à 4), formons 4 paires :</p>
<div class="calc">{(1,1), (2,3)}, {(1,2), (2,4)}, {(1,3), (2,1)}, {(1,4), (2,2)}.</div>
<p>Dans chaque paire, les deux cases diffèrent d'une ligne et de deux colonnes : elles sont à un saut de cavalier l'une de l'autre. On ne peut donc pas mettre deux cavaliers dans une même paire. Chaque rectangle contient donc au plus 4 cavaliers, et l'échiquier au plus 8 × 4 = 32.</p>
<p>Réponse : <strong>32</strong>.</p>
<p><em>Pour aller plus loin :</em> on peut montrer que les seules configurations de 32 cavaliers sont « toutes les cases blanches » et « toutes les cases noires ».</p>`
  },
  {
    id: "logique-37",
    theme: "logique",
    niveau: 3,
    type: "demo",
    titre: `Triminos en L et puissances de 2`,
    enonce: `<p>Un <strong>trimino en L</strong> est formé de trois carrés unités disposés en L (un carré 2 × 2 privé d'une case).</p>
<p>Soit n ≥ 1 un entier. On considère un carré de côté 2<sup>n</sup>, divisé en cases unités, dont on a retiré <strong>une case quelconque</strong>. Montrer que ce qui reste peut toujours être pavé par des triminos en L.</p>`,
    figure: `<svg viewBox="0 0 130 130" width="130" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="0.8"><rect x="5" y="5" width="120" height="120"/><line x1="35" y1="5" x2="35" y2="125"/><line x1="95" y1="5" x2="95" y2="125"/><line x1="5" y1="35" x2="125" y2="35"/><line x1="5" y1="95" x2="125" y2="95"/></g><g stroke="currentColor" stroke-width="2"><line x1="65" y1="5" x2="65" y2="125"/><line x1="5" y1="65" x2="125" y2="65"/></g><rect x="5" y="5" width="30" height="30" fill="currentColor" fill-opacity="0.6"/><path d="M35 65 V35 H65 H95 V65 H65 V95 H35 Z" fill="currentColor" fill-opacity="0.0"/><path d="M65 35 H95 V95 H35 V65 H65 Z" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.5"/></svg>`,
    pistes: [
      `<p>Vérifie le cas n = 1 (carré 2 × 2 privé d'une case). Puis essaie n = 2 (carré 4 × 4) : découpe-le en quatre carrés 2 × 2.</p>`,
      `<p>Pour le 4 × 4, la case retirée est dans un des quatre carrés 2 × 2. Les trois autres carrés 2 × 2 sont complets… Où pourrais-tu placer un trimino pour « enlever une case » à chacun d'eux ?</p>`,
      `<p>Un trimino placé au centre, avec une case dans chacun des trois quarts complets (dans leurs coins qui touchent le centre), transforme le problème en quatre problèmes « carré privé d'une case » plus petits.</p>`,
      `<p>Rédige par récurrence : suppose le résultat vrai pour les carrés de côté 2<sup>n−1</sup> et déduis-le pour 2<sup>n</sup> avec la découpe en quatre.</p>`
    ],
    lecon: {
      titre: `Récurrence : rédiger proprement`,
      html: `<p>Pour démontrer qu'une propriété P(n) est vraie pour tout n ≥ 1 :</p>
<ol><li><strong>Initialisation</strong> : on vérifie P(1).</li>
<li><strong>Hérédité</strong> : on suppose P(n − 1) vraie (hypothèse de récurrence) et on démontre P(n).</li>
<li><strong>Conclusion</strong> : P(n) est vraie pour tout n ≥ 1.</li></ol>
<p>Dans l'hérédité, l'idée est souvent de <strong>découper</strong> l'objet de taille n en objets de taille n − 1 auxquels on applique l'hypothèse.</p>
<div class="exemple">Carré 2<sup>n</sup> × 2<sup>n</sup> = quatre carrés 2<sup>n−1</sup> × 2<sup>n−1</sup>. Il faut que chacun des quatre soit « privé d'une case » pour appliquer l'hypothèse : c'est le rôle du trimino central.</div>
<div class="astuce">Astuce olympique : énonce clairement P(n) au début. Une propriété un peu plus forte (« une case <strong>quelconque</strong> retirée ») rend souvent la récurrence plus facile, car l'hypothèse est plus puissante.</div>`
    },
    correction: `<p>Notons P(n) : « pour toute case retirée, un carré de côté 2<sup>n</sup> privé de cette case peut être pavé par des triminos en L ».</p>
<p><strong>Initialisation (n = 1).</strong> Un carré 2 × 2 privé d'une case est exactement un trimino en L. P(1) est vraie.</p>
<p><strong>Hérédité.</strong> Soit n ≥ 2 ; supposons P(n − 1) vraie. Considérons un carré de côté 2<sup>n</sup> privé d'une case X. Découpons-le, par ses deux médianes, en quatre carrés de côté 2<sup>n−1</sup>. La case X se trouve dans exactement l'un d'eux, disons Q<sub>1</sub>. Les trois autres, Q<sub>2</sub>, Q<sub>3</sub>, Q<sub>4</sub>, sont complets.</p>
<p>Au centre du grand carré se touchent quatre cases, une dans chaque quart. Plaçons un trimino en L sur les trois de ces cases qui appartiennent à Q<sub>2</sub>, Q<sub>3</sub> et Q<sub>4</sub> (ces trois cases forment bien un L, car ce sont trois des quatre cases d'un carré 2 × 2 central).</p>
<p>Il reste alors à paver :</p>
<ul><li>Q<sub>1</sub> privé de X ;</li>
<li>Q<sub>2</sub>, Q<sub>3</sub>, Q<sub>4</sub>, chacun privé de la case couverte par le trimino central.</li></ul>
<p>Ce sont quatre carrés de côté 2<sup>n−1</sup> privés chacun d'une case : par l'hypothèse P(n − 1), chacun peut être pavé par des triminos en L. En réunissant ces pavages et le trimino central, on obtient un pavage du grand carré privé de X. P(n) est vraie.</p>
<p><strong>Conclusion.</strong> Par récurrence, P(n) est vraie pour tout n ≥ 1.</p>
<p><em>Remarque :</em> cela implique au passage que 4<sup>n</sup> − 1 est divisible par 3 (le nombre de cases restantes est un multiple de 3).</p>`,
    bareme: [
      `Énoncer clairement la propriété P(n) et vérifier l'initialisation n = 1.`,
      `Découper le carré en quatre carrés de côté 2<sup>n−1</sup>.`,
      `Placer le trimino central dans les trois quarts ne contenant pas la case retirée.`,
      `Appliquer l'hypothèse de récurrence aux quatre quarts et conclure.`
    ]
  },
  {
    id: "logique-38",
    theme: "logique",
    niveau: 3,
    type: "reponse",
    titre: `Une opération étrange`,
    enonce: `<p>On écrit au tableau les 100 nombres</p>
<div class="calc">1, 1/2, 1/3, 1/4, …, 1/100.</div>
<p>À chaque étape, on choisit deux nombres a et b écrits au tableau, on les efface et on écrit à leur place le nombre <span class="m">a + b + ab</span>. Après 99 étapes, il ne reste qu'un nombre. Lequel ?</p>`,
    figure: ``,
    reponse: ["100", "cent"],
    reponseTexte: `100`,
    pistes: [
      `<p>Essaie avec seulement 1, 1/2 : on obtient 1 + 1/2 + 1/2 = 2. Avec 1, 1/2, 1/3 (dans différents ordres) ?</p>`,
      `<p>Avec 1, 1/2, 1/3, on trouve toujours 3. Le résultat ne semble pas dépendre de l'ordre. Essaie d'ajouter 1 : que vaut a + b + ab + 1 ?</p>`,
      `<p>a + b + ab + 1 = (1 + a)(1 + b). Que se passe-t-il pour le produit de tous les (1 + x), x parcourant les nombres écrits ?</p>`,
      `<p>Ce produit est invariant. Au départ, il vaut (1 + 1)(1 + 1/2)(1 + 1/3)…(1 + 1/100) = (2/1)(3/2)(4/3)…(101/100). Simplifie.</p>`
    ],
    lecon: {
      titre: `Invariants multiplicatifs : factoriser l'opération`,
      html: `<p>Quand une opération sur deux nombres a une forme « bizarre », essaie de la <strong>factoriser</strong> après un petit décalage.</p>
<div class="exemple">a + b + ab + 1 = (1 + a)(1 + b). Donc si l'on pose A = 1 + a et B = 1 + b, l'opération revient à remplacer A et B par leur produit AB.</div>
<p>Si une opération remplace deux nombres par leur produit, le <strong>produit de tous les nombres</strong> est invariant, comme la somme l'est pour une opération « a + b ».</p>
<p>Autres exemples classiques :</p>
<ul><li>remplacer a, b par ab/(a + b) : la somme des inverses 1/a est invariante ;</li>
<li>remplacer a, b par a + b − 1 : la somme des (x − 1) est invariante.</li></ul>
<div class="astuce">Astuce olympique : les produits « télescopiques » (2/1 × 3/2 × 4/3 × … ) se simplifient presque entièrement. Ils apparaissent souvent avec ce genre d'invariant.</div>`
    },
    correction: `<p><strong>Invariant.</strong> Pour tout a, b :</p>
<div class="calc">1 + (a + b + ab) = (1 + a)(1 + b).</div>
<p>Considérons la quantité P = produit des (1 + x) pour tous les nombres x écrits au tableau. Quand on remplace a et b par c = a + b + ab, les facteurs (1 + a)(1 + b) sont remplacés par 1 + c, qui leur est égal : <strong>P est invariant</strong>.</p>
<p><strong>Au départ</strong> :</p>
<div class="calc">P = (1 + 1)(1 + 1/2)(1 + 1/3)…(1 + 1/100) = (2/1) × (3/2) × (4/3) × … × (101/100) = 101</div>
<p>(les numérateurs et dénominateurs se simplifient deux à deux).</p>
<p><strong>À la fin</strong>, il reste un seul nombre N, et P = 1 + N = 101. Donc <strong>N = 100</strong>, quel que soit l'ordre des opérations.</p>
<p><em>Pour aller plus loin :</em> et si l'on remplace a et b par a + b − ab ? (Indication : 1 − (a + b − ab) = (1 − a)(1 − b).)</p>`
  },
  {
    id: "logique-39",
    theme: "logique",
    niveau: 3,
    type: "demo",
    titre: `La tablette empoisonnée`,
    enonce: `<p>Une tablette de chocolat rectangulaire est formée de m × n carrés (m lignes, n colonnes, avec m × n ≥ 2). Le carré en <strong>bas à gauche</strong> est empoisonné. Deux joueurs jouent à tour de rôle : à chaque coup, un joueur choisit un carré restant et le mange, ainsi que tous les carrés restants situés <strong>au-dessus et/ou à droite</strong> de lui (c'est-à-dire dans le quart de plan en haut à droite de ce carré). Celui qui mange le carré empoisonné a perdu.</p>
<p>Montrer que le premier joueur possède une stratégie gagnante (sans chercher à la décrire !).</p>`,
    figure: `<svg viewBox="0 0 170 110" width="170" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="1"><rect x="5" y="5" width="160" height="100"/><line x1="37" y1="5" x2="37" y2="105"/><line x1="69" y1="5" x2="69" y2="105"/><line x1="101" y1="5" x2="101" y2="105"/><line x1="133" y1="5" x2="133" y2="105"/><line x1="5" y1="38" x2="165" y2="38"/><line x1="5" y1="72" x2="165" y2="72"/></g><rect x="5" y="72" width="32" height="33" fill="currentColor" fill-opacity="0.6"/><text x="12" y="94" font-size="14" fill="currentColor" fill-opacity="0">X</text><rect x="133" y="5" width="32" height="33" fill="currentColor" fill-opacity="0.2"/></svg>`,
    pistes: [
      `<p>Le jeu peut-il durer indéfiniment ? Peut-il y avoir match nul ? Qu'en déduit-on sur l'existence d'une stratégie gagnante pour l'un des deux joueurs ?</p>`,
      `<p>Considère le coup du premier joueur qui consiste à manger uniquement le carré en <strong>haut à droite</strong>. Deux cas : ce coup mène à une position perdante pour l'adversaire, ou non.</p>`,
      `<p>Si ce n'est pas le cas, l'adversaire a une « réponse gagnante » : manger un certain carré Y. Que reste-t-il après ce coup Y ? Compare avec ce qui resterait si le premier joueur avait joué Y dès le départ.</p>`,
      `<p>Manger Y enlève aussi le carré en haut à droite (il est au-dessus et à droite de tout carré). Donc la position après « haut-droite puis Y » est la même qu'après « Y » seul. Le premier joueur aurait pu « voler » ce coup.</p>`
    ],
    lecon: {
      titre: `Le vol de stratégie`,
      html: `<p>Dans un jeu <strong>fini</strong> (il s'arrête toujours) et <strong>sans match nul</strong>, un des deux joueurs possède une stratégie gagnante : chaque position est soit gagnante soit perdante pour celui qui doit jouer (on le voit en classant les positions de la fin vers le début).</p>
<p>L'argument du <strong>vol de stratégie</strong> montre que le premier joueur gagne, sans décrire comment :</p>
<ol><li>on suppose que le second joueur a une stratégie gagnante ;</li>
<li>le premier joueur fait un coup « inoffensif » puis se comporte comme s'il était le second joueur, en « volant » sa stratégie ;</li>
<li>on obtient une contradiction.</li></ol>
<p>Formulation équivalente avec les positions : si un coup « passe-partout » mène à une position gagnante pour l'adversaire, la réponse gagnante de l'adversaire aurait pu être jouée directement.</p>
<div class="exemple">Autre exemple célèbre : au jeu de Hex, le premier joueur a une stratégie gagnante (mais on ne la connaît pas pour les grands plateaux).</div>
<div class="astuce">Astuce olympique : l'argument marche quand un « coup supplémentaire » ne peut jamais nuire au joueur qui le fait.</div>`
    },
    correction: `<p><strong>Le jeu est fini et sans nul.</strong> Chaque coup mange au moins un carré, donc la partie dure au plus m × n coups. Elle se termine quand quelqu'un mange le carré empoisonné (s'il ne reste que lui, le joueur qui doit jouer est obligé de le manger) : il y a toujours un perdant. Dans un tel jeu, chaque position est soit <em>perdante</em> pour le joueur qui doit jouer (tous ses coups mènent à des positions gagnantes pour l'adversaire), soit <em>gagnante</em> (il existe un coup menant à une position perdante pour l'adversaire).</p>
<p><strong>Vol de stratégie.</strong> Soit H le carré en haut à droite ; comme m × n ≥ 2, H n'est pas le carré empoisonné. Considérons le coup du premier joueur « manger H seul » (il ne mange que H, car aucun carré n'est au-dessus ou à droite de H).</p>
<ul><li>Si la position obtenue est perdante pour l'adversaire, le premier joueur gagne en jouant H.</li>
<li>Sinon, cette position est gagnante pour l'adversaire : il existe un coup « manger Y » qui mène à une position R perdante pour le premier joueur. Or le carré H est au-dessus et à droite de n'importe quel carré, donc manger Y dans la tablette complète mange aussi H. Ainsi, jouer Y dès le premier coup mène exactement à la même position R. Comme R est perdante pour celui qui doit y jouer, c'est-à-dire l'adversaire, le premier joueur gagne en jouant Y d'emblée.</li></ul>
<p>Dans les deux cas, le premier joueur a un premier coup menant à une position perdante pour l'adversaire : <strong>il possède une stratégie gagnante</strong>.</p>
<p><em>Remarque :</em> l'argument ne dit pas quel est le bon coup ! Pour une tablette carrée n × n, on sait le trouver : manger le carré juste en diagonale du poison (en haut à droite de celui-ci), puis jouer symétriquement.</p>`,
    bareme: [
      `Justifier que le jeu est fini et sans nul, donc que chaque position est gagnante ou perdante.`,
      `Considérer le coup « manger le carré en haut à droite ».`,
      `Traiter le cas où ce coup est gagnant, puis le cas où l'adversaire a une réponse Y.`,
      `Justifier que jouer Y d'emblée mène à la même position (Y mange aussi le carré en haut à droite) et conclure.`
    ]
  },
  {
    id: "logique-40",
    theme: "logique",
    niveau: 3,
    type: "demo",
    titre: `Le roi du tournoi`,
    enonce: `<p>Dans un tournoi, chaque joueur rencontre chaque autre joueur exactement une fois, et il n'y a pas de match nul.</p>
<p>On dit qu'un joueur A est un <strong>roi</strong> si, pour tout autre joueur B, soit A a battu B, soit A a battu un joueur C qui a lui-même battu B.</p>
<p>Montrer que tout tournoi (avec au moins un joueur) possède un roi.</p>`,
    figure: ``,
    pistes: [
      `<p>Teste sur un petit tournoi à 3 joueurs où A bat B, B bat C et C bat A. Qui est roi ? Puis cherche un joueur « extrême ».</p>`,
      `<p>Principe de l'extremum : considère un joueur A ayant le plus grand nombre de victoires. Montre qu'il est roi, par l'absurde.</p>`,
      `<p>Suppose qu'un joueur B ne soit ni battu par A, ni battu par un joueur que A a battu. Qui a gagné entre A et B ? Et entre B et chacun des joueurs battus par A ?</p>`,
      `<p>B a battu A et tous les joueurs battus par A. Compare alors le nombre de victoires de B à celui de A.</p>`
    ],
    lecon: {
      titre: `Rappel : l'extremum, combiné à l'absurde`,
      html: `<p>Rappel : le <strong>principe de l'extremum</strong> consiste à regarder l'objet qui maximise (ou minimise) une quantité bien choisie. On l'a utilisé pour des nombres dans une grille ; il est tout aussi efficace pour des <strong>personnes</strong> dans un tournoi, des points dans le plan, etc.</p>
<p>Nouveauté : on le <strong>combine avec un raisonnement par l'absurde</strong>. On choisit l'objet extrême, on suppose qu'il n'a pas la propriété voulue, et on fabrique un objet « encore plus extrême » : contradiction avec le choix.</p>
<div class="exemple">Dans un groupe fini, prends la personne qui a le plus d'amis. Si elle n'avait pas la propriété, on trouverait quelqu'un avec encore plus d'amis : absurde.</div>
<p>Le choix de la quantité à maximiser est la clé. Ici, le nombre de victoires est naturel.</p>
<div class="astuce">Astuce olympique : dans un problème d'existence (« montrer qu'il existe un… »), pense toujours à « le plus grand », « le plus petit », « le plus long », avant de chercher une construction compliquée.</div>`
    },
    correction: `<p>Le tournoi a un nombre fini de joueurs, donc il existe un joueur A dont le nombre de victoires v(A) est maximal. Montrons que A est un roi.</p>
<p>Notons V l'ensemble des joueurs battus par A ; on a v(A) = nombre d'éléments de V.</p>
<p><strong>Par l'absurde</strong>, supposons qu'il existe un joueur B ≠ A tel que :</p>
<ul><li>A n'a pas battu B ;</li>
<li>aucun joueur de V n'a battu B.</li></ul>
<p>Comme il n'y a pas de match nul :</p>
<ul><li>B a battu A ;</li>
<li>B a battu chaque joueur de V (B n'est pas dans V puisque A n'a pas battu B, donc B a bien rencontré chaque joueur de V).</li></ul>
<p>Ainsi B a battu tous les joueurs de V, ainsi que A, qui n'est pas dans V. Donc</p>
<div class="calc">v(B) ≥ v(A) + 1 &gt; v(A),</div>
<p>ce qui contredit le choix de A comme joueur ayant le plus de victoires.</p>
<p>Donc un tel B n'existe pas : pour tout B ≠ A, soit A a battu B, soit un joueur de V (battu par A) a battu B. <strong>A est un roi.</strong> (Si le tournoi n'a qu'un joueur, il est roi sans condition.)</p>
<p><em>Pour aller plus loin :</em> un tournoi peut avoir plusieurs rois. On peut même montrer qu'un tournoi n'a jamais exactement deux rois !</p>`,
    bareme: [
      `Choisir un joueur A ayant un nombre maximal de victoires (justifier l'existence).`,
      `Supposer par l'absurde qu'un joueur B échappe à A et à ses victimes.`,
      `En déduire que B a battu A et toutes les victimes de A.`,
      `Obtenir v(B) &gt; v(A), contradiction, et conclure.`
    ]
  }
]);
