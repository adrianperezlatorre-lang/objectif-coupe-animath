window.PROBLEMES = (window.PROBLEMES || []).concat([
  {
    id: "algebre-01",
    theme: "algebre",
    niveau: 1,
    type: "reponse",
    titre: `Les signes qui alternent`,
    enonce: `<p>Calculer la somme</p>
<div class="calc">S = 1 − 2 + 3 − 4 + 5 − 6 + … + 99 − 100.</div>`,
    figure: ``,
    reponse: ["-50", "−50", "moins50"],
    reponseTexte: `−50`,
    pistes: [
      `<p>Piste 1 : calcule d'abord les petites versions : 1 − 2, puis 1 − 2 + 3 − 4, puis 1 − 2 + 3 − 4 + 5 − 6. Vois-tu apparaître une régularité ?</p>`,
      `<p>Piste 2 : regroupe les termes deux par deux : (1 − 2) + (3 − 4) + (5 − 6) + … Que vaut chaque parenthèse ?</p>`,
      `<p>Piste 3 : chaque parenthèse vaut −1. Combien y a-t-il de parenthèses entre 1 et 100 ?</p>`,
      `<p>Piste 4 : il y a 100 termes, donc 50 paires. Il ne reste qu'une multiplication.</p>`
    ],
    lecon: {
      titre: `Regrouper les termes intelligemment`,
      html: `<p>Face à une longue somme, on ne calcule presque jamais terme à terme : on cherche des <strong>paquets</strong> qui ont tous la même valeur (ou une valeur simple).</p>
<p>Méthode :</p>
<ul>
<li>Écrire les premiers termes et repérer un motif qui se répète.</li>
<li>Former des paquets (paires, triplets…) de valeur identique.</li>
<li>Compter soigneusement le nombre de paquets, et vérifier s'il reste un terme isolé.</li>
</ul>
<div class="exemple">Exemple : 10 − 9 + 8 − 7 + 6 − 5 + 4 − 3 + 2 − 1 = (10 − 9) + (8 − 7) + … + (2 − 1) = 5 × 1 = 5.</div>
<div class="astuce">Astuce olympique : teste toujours la formule trouvée sur un petit cas (par exemple jusqu'à 6) avant de l'appliquer au grand cas. On évite ainsi les erreurs de comptage « à un près ».</div>`
    },
    correction: `<p>On regroupe les termes par paires consécutives :</p>
<div class="calc">S = (1 − 2) + (3 − 4) + (5 − 6) + … + (99 − 100).</div>
<p>Chaque paire est de la forme (2k − 1) − 2k = −1. Les entiers de 1 à 100 forment 100 / 2 = 50 paires. Donc</p>
<div class="calc">S = 50 × (−1) = −50.</div>
<p><strong>Pour aller plus loin :</strong> que vaut 1 − 2 + 3 − 4 + … + 99 (on s'arrête à 99) ? On peut écrire 1 + (−2 + 3) + (−4 + 5) + … + (−98 + 99) = 1 + 49 = 50.</p>`
  },
  {
    id: "algebre-02",
    theme: "algebre",
    niveau: 1,
    type: "reponse",
    titre: `Deux carrés voisins`,
    enonce: `<p>Sans calculatrice, calculer</p>
<div class="calc">2026<sup>2</sup> − 2025<sup>2</sup>.</div>`,
    figure: ``,
    reponse: ["4051"],
    reponseTexte: `4051`,
    pistes: [
      `<p>Piste 1 : essaie de petits cas : 3<sup>2</sup> − 2<sup>2</sup>, 4<sup>2</sup> − 3<sup>2</sup>, 5<sup>2</sup> − 4<sup>2</sup>. Que remarques-tu ?</p>`,
      `<p>Piste 2 : connais-tu une identité remarquable qui transforme une différence de deux carrés en produit ?</p>`,
      `<p>Piste 3 : a<sup>2</sup> − b<sup>2</sup> = (a − b)(a + b). Que valent ici a − b et a + b ?</p>`,
      `<p>Piste 4 : a − b = 1 et a + b = 2026 + 2025.</p>`
    ],
    lecon: {
      titre: `La différence de deux carrés`,
      html: `<p>L'identité remarquable la plus utile en compétition est :</p>
<div class="calc">a<sup>2</sup> − b<sup>2</sup> = (a − b)(a + b).</div>
<p>Elle transforme une différence (difficile à exploiter) en un <strong>produit</strong> (facile à calculer, à factoriser, à étudier).</p>
<p>Cas particulier très fréquent : si a et b sont deux entiers consécutifs (a = b + 1), alors a<sup>2</sup> − b<sup>2</sup> = a + b. Par exemple 51<sup>2</sup> − 50<sup>2</sup> = 101.</p>
<div class="exemple">Exemple : 103 × 97 = (100 + 3)(100 − 3) = 100<sup>2</sup> − 3<sup>2</sup> = 10 000 − 9 = 9 991.</div>
<div class="astuce">Astuce olympique : quand tu vois des grands nombres proches (2024, 2025, 2026…), pense immédiatement aux identités remarquables. Les sujets de compétition sont construits pour qu'un calcul « bête » soit interminable, et un calcul astucieux tienne en une ligne.</div>`
    },
    correction: `<p>On utilise a<sup>2</sup> − b<sup>2</sup> = (a − b)(a + b) avec a = 2026 et b = 2025 :</p>
<div class="calc">2026<sup>2</sup> − 2025<sup>2</sup> = (2026 − 2025)(2026 + 2025) = 1 × 4051 = 4051.</div>
<p><strong>Erreur fréquente :</strong> croire que 2026<sup>2</sup> − 2025<sup>2</sup> = (2026 − 2025)<sup>2</sup> = 1. Le carré ne « se distribue » pas sur une différence !</p>`
  },
  {
    id: "algebre-03",
    theme: "algebre",
    niveau: 1,
    type: "demo",
    titre: `Le petit Gauss`,
    enonce: `<p>Soit n un entier naturel non nul. Démontrer que</p>
<div class="calc">1 + 2 + 3 + … + n = n(n + 1) / 2.</div>
<p>En déduire la valeur de 1 + 2 + … + 2026.</p>`,
    figure: ``,
    pistes: [
      `<p>Piste 1 : vérifie la formule pour n = 1, 2, 3, 4. Elle semble vraie, mais une vérification n'est pas une preuve.</p>`,
      `<p>Piste 2 : appelle S la somme. Écris-la une deuxième fois, mais « à l'envers » : S = n + (n − 1) + … + 2 + 1.</p>`,
      `<p>Piste 3 : additionne les deux écritures terme à terme (le premier avec le premier, le deuxième avec le deuxième…). Que vaut chaque somme de deux termes ?</p>`,
      `<p>Piste 4 : chaque colonne vaut n + 1, et il y a n colonnes. Donc 2S = …</p>`
    ],
    lecon: {
      titre: `L'astuce de Gauss : écrire la somme à l'envers`,
      html: `<p>Selon la légende, le jeune Carl Friedrich Gauss a calculé 1 + 2 + … + 100 en quelques secondes en remarquant que 1 + 100 = 2 + 99 = 3 + 98 = … = 101.</p>
<p>La méthode générale : pour une somme S de termes régulièrement espacés (une <strong>suite arithmétique</strong>), on écrit S à l'endroit et à l'envers, puis on additionne :</p>
<div class="calc">2S = (nombre de termes) × (premier + dernier).</div>
<p>D'où la formule à retenir :</p>
<div class="calc">S = (nombre de termes) × (premier + dernier) / 2.</div>
<div class="exemple">Exemple : 5 + 8 + 11 + … + 32 : il y a (32 − 5)/3 + 1 = 10 termes, donc S = 10 × 37 / 2 = 185.</div>
<div class="astuce">Astuce olympique : « premier + dernier » divisé par 2, c'est la <strong>moyenne</strong> des termes. Une somme régulière vaut donc « nombre de termes × terme moyen ».</div>`
    },
    correction: `<p>Notons S = 1 + 2 + … + n. On écrit cette somme de deux façons :</p>
<div class="calc">S = 1 + 2 + 3 + … + (n − 1) + n<br>S = n + (n − 1) + (n − 2) + … + 2 + 1</div>
<p>En additionnant membre à membre, le k-ième terme de la première ligne est k et celui de la deuxième ligne est n + 1 − k ; leur somme vaut toujours n + 1. Il y a n colonnes, donc</p>
<div class="calc">2S = n(n + 1), d'où S = n(n + 1) / 2.</div>
<p>(Le quotient est bien entier car l'un des deux nombres consécutifs n, n + 1 est pair.)</p>
<p>Application : 1 + 2 + … + 2026 = 2026 × 2027 / 2 = 1013 × 2027 = 2 053 351.</p>
<p><strong>Pour aller plus loin :</strong> la même méthode donne 1 + 3 + 5 + … + (2n − 1) = n × (1 + 2n − 1)/2 = n<sup>2</sup>.</p>`,
    bareme: [
      `Introduire la somme S et l'écrire dans l'ordre inverse.`,
      `Justifier que chaque paire (k, n + 1 − k) a pour somme n + 1.`,
      `Compter correctement n paires et obtenir 2S = n(n + 1).`,
      `Conclure la formule et faire l'application numérique 2 053 351.`
    ]
  },
  {
    id: "algebre-04",
    theme: "algebre",
    niveau: 1,
    type: "reponse",
    titre: `Cent nombres impairs`,
    enonce: `<p>Calculer la somme des 100 premiers nombres impairs :</p>
<div class="calc">1 + 3 + 5 + 7 + … + 199.</div>`,
    figure: ``,
    reponse: ["10000", "10 000"],
    reponseTexte: `10 000`,
    pistes: [
      `<p>Piste 1 : calcule 1, 1 + 3, 1 + 3 + 5, 1 + 3 + 5 + 7. Reconnais-tu ces nombres ?</p>`,
      `<p>Piste 2 : ce sont des carrés parfaits ! La somme des k premiers impairs semble valoir k<sup>2</sup>.</p>`,
      `<p>Piste 3 : pour le justifier, utilise l'astuce de Gauss : premier terme 1, dernier terme 199, combien de termes ?</p>`,
      `<p>Piste 4 : il y a 100 termes et 1 + 199 = 200. Somme = 100 × 200 / 2.</p>`
    ],
    lecon: {
      titre: `Somme des impairs et carrés`,
      html: `<p>Un résultat magnifique à connaître :</p>
<div class="calc">1 + 3 + 5 + … + (2n − 1) = n<sup>2</sup>.</div>
<p><strong>Preuve par le dessin :</strong> un carré de côté n se construit en ajoutant des « équerres » : 1 carreau, puis 3 carreaux autour, puis 5, puis 7… Passer du carré k × k au carré (k+1) × (k+1) demande exactement (k + 1)<sup>2</sup> − k<sup>2</sup> = 2k + 1 carreaux.</p>
<p><strong>Preuve par le calcul :</strong> avec Gauss, n termes, premier 1, dernier 2n − 1, donc la somme vaut n × 2n / 2 = n<sup>2</sup>.</p>
<div class="exemple">Exemple : 1 + 3 + 5 + … + 19 : 10 impairs, donc 100.</div>
<div class="astuce">Astuce olympique : pour compter les termes d'une suite de pas r allant de a à b, utilise (b − a)/r + 1. Ici (199 − 1)/2 + 1 = 100. Le « + 1 » est l'oubli le plus fréquent !</div>`
    },
    correction: `<p>Les nombres 1, 3, 5, …, 199 sont régulièrement espacés de 2. Leur nombre est (199 − 1)/2 + 1 = 100.</p>
<p>Par la méthode de Gauss (somme = nombre de termes × (premier + dernier) / 2) :</p>
<div class="calc">1 + 3 + … + 199 = 100 × (1 + 199) / 2 = 100 × 100 = 10 000.</div>
<p>On retrouve bien la formule 1 + 3 + … + (2n − 1) = n<sup>2</sup> avec n = 100.</p>
<p><strong>Erreur fréquente :</strong> compter 199/2 ≈ 99 termes ou oublier le « + 1 ».</p>`
  },
  {
    id: "algebre-05",
    theme: "algebre",
    niveau: 1,
    type: "reponse",
    titre: `Le père et le fils`,
    enonce: `<p>Aujourd'hui, un père a trois fois l'âge de son fils. Dans 12 ans, il n'aura plus que le double de l'âge de son fils.</p>
<p>Quel est l'âge du père aujourd'hui ?</p>`,
    figure: ``,
    reponse: ["36", "36ans"],
    reponseTexte: `36 ans`,
    pistes: [
      `<p>Piste 1 : choisis une inconnue. Appelle x l'âge du fils aujourd'hui. Quel est l'âge du père aujourd'hui ?</p>`,
      `<p>Piste 2 : dans 12 ans, quels seront les âges du fils et du père, en fonction de x ?</p>`,
      `<p>Piste 3 : traduis la phrase « le père aura le double de l'âge du fils » par une équation.</p>`,
      `<p>Piste 4 : l'équation est 3x + 12 = 2(x + 12). Résous-la, puis n'oublie pas qu'on demande l'âge du <em>père</em>.</p>`
    ],
    lecon: {
      titre: `Mettre un problème en équation`,
      html: `<p>La mise en équation suit toujours les mêmes étapes :</p>
<ol>
<li><strong>Choisir l'inconnue</strong> (souvent la plus petite quantité, pour éviter les fractions) et l'écrire clairement : « Soit x l'âge du fils aujourd'hui ».</li>
<li><strong>Exprimer</strong> toutes les autres quantités en fonction de x.</li>
<li><strong>Traduire</strong> chaque phrase de l'énoncé en égalité.</li>
<li><strong>Résoudre</strong>, puis <strong>vérifier</strong> la réponse dans l'énoncé.</li>
<li><strong>Répondre à la question posée</strong> (qui n'est pas toujours x !).</li>
</ol>
<div class="astuce">Astuce olympique : dans les problèmes d'âges, la <strong>différence d'âge est constante</strong>. Ici, la différence est 2x aujourd'hui ; dans 12 ans, le père a le double du fils, donc la différence vaut aussi l'âge du fils à ce moment-là : x + 12 = 2x.</div>`
    },
    correction: `<p>Soit x l'âge du fils aujourd'hui ; le père a alors 3x ans.</p>
<p>Dans 12 ans, le fils aura x + 12 ans et le père 3x + 12 ans. L'énoncé donne :</p>
<div class="calc">3x + 12 = 2(x + 12) ⟺ 3x + 12 = 2x + 24 ⟺ x = 12.</div>
<p>Le fils a 12 ans et le père <strong>36 ans</strong>.</p>
<p>Vérification : dans 12 ans, 24 et 48 ans, et 48 = 2 × 24. ✔</p>
<p><strong>Erreur fréquente :</strong> répondre 12, l'âge du fils, alors qu'on demande celui du père.</p>`
  },
  {
    id: "algebre-06",
    theme: "algebre",
    niveau: 1,
    type: "reponse",
    titre: `Soldes trompeuses`,
    enonce: `<p>Un magasin augmente le prix d'un vélo de 20 %, puis, quelques semaines plus tard, baisse le nouveau prix de 20 %.</p>
<p>Le prix final représente quel pourcentage du prix de départ ? (Donner le nombre, sans le signe %.)</p>`,
    figure: ``,
    reponse: ["96", "96%"],
    reponseTexte: `96 %`,
    pistes: [
      `<p>Piste 1 : essaie avec un prix de départ simple, par exemple 100 €. Combien coûte le vélo après la hausse ?</p>`,
      `<p>Piste 2 : la baisse de 20 % s'applique à quel prix : 100 € ou le nouveau prix ?</p>`,
      `<p>Piste 3 : augmenter de 20 %, c'est multiplier par 1,2. Baisser de 20 %, c'est multiplier par …</p>`,
      `<p>Piste 4 : calcule 1,2 × 0,8.</p>`
    ],
    lecon: {
      titre: `Pourcentages et coefficients multiplicateurs`,
      html: `<p>Les pourcentages successifs <strong>ne s'additionnent pas</strong> : ils se <strong>multiplient</strong>.</p>
<ul>
<li>Augmenter de t % revient à multiplier par (1 + t/100).</li>
<li>Diminuer de t % revient à multiplier par (1 − t/100).</li>
</ul>
<p>Deux évolutions successives correspondent au produit des coefficients.</p>
<div class="exemple">Exemple : +10 % puis +10 % donne 1,1 × 1,1 = 1,21, soit +21 % (et non +20 %).</div>
<p>Pour une hausse de t % suivie d'une baisse de t % : (1 + t/100)(1 − t/100) = 1 − (t/100)<sup>2</sup> &lt; 1. On perd toujours !</p>
<div class="astuce">Astuce olympique : on reconnaît l'identité (1 + a)(1 − a) = 1 − a<sup>2</sup>. Les pourcentages « pièges » cachent souvent une identité remarquable.</div>`
    },
    correction: `<p>Augmenter de 20 %, c'est multiplier par 1,2 ; diminuer de 20 %, c'est multiplier par 0,8. Le prix final vaut donc</p>
<div class="calc">P × 1,2 × 0,8 = 0,96 × P.</div>
<p>Le prix final représente <strong>96 %</strong> du prix de départ : le vélo a finalement baissé de 4 %.</p>
<p>Avec 100 € : 100 → 120 → 120 − 24 = 96 €.</p>
<p><strong>Erreur fréquente :</strong> penser que +20 % et −20 % « s'annulent ». La baisse porte sur un prix plus grand, elle est donc plus importante en euros que la hausse.</p>`
  },
  {
    id: "algebre-07",
    theme: "algebre",
    niveau: 1,
    type: "demo",
    titre: `Toujours positif`,
    enonce: `<p>Démontrer que, pour tout nombre réel x,</p>
<div class="calc">x<sup>2</sup> − 6x + 10 &gt; 0.</div>`,
    figure: ``,
    pistes: [
      `<p>Piste 1 : teste quelques valeurs de x (0, 1, 3, 5…). Pour quelle valeur l'expression semble-t-elle la plus petite ?</p>`,
      `<p>Piste 2 : rappelle-toi l'identité (x − a)<sup>2</sup> = x<sup>2</sup> − 2ax + a<sup>2</sup>. Quel a faut-il choisir pour retrouver le début x<sup>2</sup> − 6x ?</p>`,
      `<p>Piste 3 : avec a = 3, (x − 3)<sup>2</sup> = x<sup>2</sup> − 6x + 9. Écris x<sup>2</sup> − 6x + 10 à l'aide de (x − 3)<sup>2</sup>.</p>`,
      `<p>Piste 4 : x<sup>2</sup> − 6x + 10 = (x − 3)<sup>2</sup> + 1. Que sais-tu du signe d'un carré ?</p>`
    ],
    lecon: {
      titre: `Un carré est toujours positif (et la forme canonique)`,
      html: `<p>L'outil le plus simple et le plus puissant des inégalités :</p>
<div class="calc">pour tout réel y, y<sup>2</sup> ≥ 0, avec égalité seulement si y = 0.</div>
<p>Pour étudier une expression x<sup>2</sup> + bx + c, on la <strong>complète en carré</strong> (forme canonique) : on cherche un carré (x + b/2)<sup>2</sup> qui contient le début x<sup>2</sup> + bx, et on corrige avec une constante.</p>
<div class="exemple">Exemple : x<sup>2</sup> + 4x + 7 = (x + 2)<sup>2</sup> − 4 + 7 = (x + 2)<sup>2</sup> + 3 ≥ 3. La plus petite valeur est 3, atteinte pour x = −2.</div>
<div class="astuce">Astuce olympique : « compléter le carré » permet à la fois de <strong>prouver une inégalité</strong> et de <strong>trouver un minimum</strong>. Pense-y dès que tu vois un x<sup>2</sup>.</div>`
    },
    correction: `<p>Pour tout réel x, on a (x − 3)<sup>2</sup> = x<sup>2</sup> − 6x + 9, donc</p>
<div class="calc">x<sup>2</sup> − 6x + 10 = (x − 3)<sup>2</sup> + 1.</div>
<p>Un carré est toujours positif ou nul : (x − 3)<sup>2</sup> ≥ 0. Par conséquent</p>
<div class="calc">x<sup>2</sup> − 6x + 10 = (x − 3)<sup>2</sup> + 1 ≥ 1 &gt; 0.</div>
<p>L'inégalité est démontrée pour tout réel x.</p>
<p><strong>Pour aller plus loin :</strong> on a même montré que la plus petite valeur de l'expression est 1, atteinte pour x = 3.</p>
<p><strong>Erreur fréquente :</strong> tester quelques valeurs et conclure « c'est toujours positif ». Des exemples ne prouvent jamais un « pour tout ».</p>`,
    bareme: [
      `Écrire la forme canonique x<sup>2</sup> − 6x + 10 = (x − 3)<sup>2</sup> + 1 (avec vérification du développement).`,
      `Invoquer explicitement qu'un carré est positif ou nul.`,
      `Conclure que l'expression est ≥ 1 donc strictement positive, pour tout réel x.`
    ]
  },
  {
    id: "algebre-08",
    theme: "algebre",
    niveau: 1,
    type: "reponse",
    titre: `La somme qui s'effondre`,
    enonce: `<p>Calculer</p>
<div class="calc">1/(1×2) + 1/(2×3) + 1/(3×4) + … + 1/(99×100).</div>
<p>Donner le résultat sous forme de fraction irréductible.</p>`,
    figure: ``,
    reponse: ["99/100", "0.99"],
    reponseTexte: `99/100`,
    pistes: [
      `<p>Piste 1 : calcule les sommes partielles : 1/2, puis 1/2 + 1/6, puis 1/2 + 1/6 + 1/12. Quel motif vois-tu ?</p>`,
      `<p>Piste 2 : calcule 1/1 − 1/2, puis 1/2 − 1/3, puis 1/3 − 1/4. Compare avec les termes de la somme.</p>`,
      `<p>Piste 3 : on a 1/(n(n + 1)) = 1/n − 1/(n + 1). Réécris la somme avec cette égalité.</p>`,
      `<p>Piste 4 : presque tout se simplifie ! Il ne reste que le tout premier et le tout dernier morceau.</p>`
    ],
    lecon: {
      titre: `Les sommes télescopiques`,
      html: `<p>Une somme est <strong>télescopique</strong> quand chaque terme s'écrit comme une différence a<sub>k</sub> − a<sub>k+1</sub>. Alors tout se simplifie en cascade :</p>
<div class="calc">(a<sub>1</sub> − a<sub>2</sub>) + (a<sub>2</sub> − a<sub>3</sub>) + … + (a<sub>n</sub> − a<sub>n+1</sub>) = a<sub>1</sub> − a<sub>n+1</sub>.</div>
<p>L'exemple fondamental :</p>
<div class="calc">1/(n(n + 1)) = 1/n − 1/(n + 1).</div>
<p>(Vérification : 1/n − 1/(n + 1) = (n + 1 − n)/(n(n + 1)) = 1/(n(n + 1)).)</p>
<div class="exemple">Exemple : 1/2 + 1/6 + 1/12 + 1/20 = (1 − 1/2) + (1/2 − 1/3) + (1/3 − 1/4) + (1/4 − 1/5) = 1 − 1/5 = 4/5.</div>
<div class="astuce">Astuce olympique : dès qu'un dénominateur est un produit de deux facteurs dont la différence est constante, essaie de « casser » la fraction en différence de deux fractions plus simples.</div>`
    },
    correction: `<p>Pour tout entier n ≥ 1, 1/n − 1/(n + 1) = 1/(n(n + 1)). Donc</p>
<div class="calc">S = (1 − 1/2) + (1/2 − 1/3) + (1/3 − 1/4) + … + (1/99 − 1/100).</div>
<p>Chaque −1/k est compensé par le +1/k du terme suivant. Il reste</p>
<div class="calc">S = 1 − 1/100 = 99/100.</div>
<p><strong>Pour aller plus loin :</strong> plus généralement, 1/(1×2) + … + 1/(n(n + 1)) = n/(n + 1), qui est toujours strictement inférieur à 1.</p>`
  },
  {
    id: "algebre-09",
    theme: "algebre",
    niveau: 1,
    type: "reponse",
    titre: `Quatre fois la même puissance`,
    enonce: `<p>Trouver l'entier n tel que</p>
<div class="calc">4<sup>5</sup> + 4<sup>5</sup> + 4<sup>5</sup> + 4<sup>5</sup> = 2<sup>n</sup>.</div>`,
    figure: ``,
    reponse: ["12", "n=12"],
    reponseTexte: `n = 12`,
    pistes: [
      `<p>Piste 1 : une somme de quatre termes identiques, c'est une multiplication. Par quoi ?</p>`,
      `<p>Piste 2 : 4 × 4<sup>5</sup> s'écrit comme une seule puissance de 4. Laquelle ?</p>`,
      `<p>Piste 3 : 4 = 2<sup>2</sup>. Comment écrire 4<sup>6</sup> comme une puissance de 2 ?</p>`,
      `<p>Piste 4 : (2<sup>2</sup>)<sup>6</sup> = 2<sup>2×6</sup>.</p>`
    ],
    lecon: {
      titre: `Les règles de calcul sur les puissances`,
      html: `<p>Pour a non nul et m, n entiers :</p>
<ul>
<li>a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></li>
<li>(a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup></li>
<li>a<sup>m</sup> / a<sup>n</sup> = a<sup>m−n</sup></li>
<li>(ab)<sup>n</sup> = a<sup>n</sup> b<sup>n</sup></li>
</ul>
<p>Attention : il n'existe <strong>aucune</strong> règle simple pour a<sup>m</sup> + a<sup>n</sup>. Pour une somme, on factorise : a<sup>m</sup> + a<sup>m</sup> = 2 × a<sup>m</sup>.</p>
<div class="exemple">Exemple : 2<sup>10</sup> + 2<sup>10</sup> = 2 × 2<sup>10</sup> = 2<sup>11</sup>, et 3<sup>7</sup> + 3<sup>7</sup> + 3<sup>7</sup> = 3<sup>8</sup>.</div>
<div class="astuce">Astuce olympique : pour comparer ou identifier des puissances, ramène tout à la <strong>même base</strong> (souvent 2 ou 3) : 4 = 2<sup>2</sup>, 8 = 2<sup>3</sup>, 9 = 3<sup>2</sup>, 27 = 3<sup>3</sup>…</div>`
    },
    correction: `<p>La somme contient quatre termes égaux :</p>
<div class="calc">4<sup>5</sup> + 4<sup>5</sup> + 4<sup>5</sup> + 4<sup>5</sup> = 4 × 4<sup>5</sup> = 4<sup>6</sup> = (2<sup>2</sup>)<sup>6</sup> = 2<sup>12</sup>.</div>
<p>Donc <strong>n = 12</strong>.</p>
<p><strong>Erreur fréquente :</strong> écrire 4<sup>5</sup> + 4<sup>5</sup> + 4<sup>5</sup> + 4<sup>5</sup> = 4<sup>20</sup> (on a multiplié les exposants au lieu de factoriser) ou 16<sup>5</sup>.</p>`
  },
  {
    id: "algebre-10",
    theme: "algebre",
    niveau: 1,
    type: "demo",
    titre: `Produit de deux voisins de n`,
    enonce: `<p>Démontrer que, pour tout nombre réel n,</p>
<div class="calc">(n − 1)(n + 1) + 1 = n<sup>2</sup>.</div>
<p>En déduire, sans poser la multiplication, la valeur de 2025 × 2027 + 1, puis celle de 1999 × 2001.</p>`,
    figure: ``,
    pistes: [
      `<p>Piste 1 : vérifie l'égalité pour n = 3 : 2 × 4 + 1 = ? et 3<sup>2</sup> = ?</p>`,
      `<p>Piste 2 : développe (n − 1)(n + 1). Quelle identité remarquable reconnais-tu ?</p>`,
      `<p>Piste 3 : (n − 1)(n + 1) = n<sup>2</sup> − 1. Il ne reste qu'à ajouter 1.</p>`,
      `<p>Piste 4 : pour 2025 × 2027, quel nombre n est « au milieu » ? Pour 1999 × 2001 ?</p>`
    ],
    lecon: {
      titre: `Démontrer une identité`,
      html: `<p>Démontrer une identité A = B « pour tout n », c'est prouver que les deux membres sont égaux quelle que soit la valeur de n. Trois stratégies :</p>
<ul>
<li>Partir de A et le transformer (développer, factoriser) jusqu'à obtenir B.</li>
<li>Partir de B et arriver à A.</li>
<li>Calculer A − B et montrer que c'est 0.</li>
</ul>
<p>On n'écrit <strong>jamais</strong> « A = B donc … donc 0 = 0 » en partant de ce qu'on veut démontrer : ce serait supposer le résultat.</p>
<div class="exemple">Exemple : (a + b)<sup>2</sup> − (a − b)<sup>2</sup> = (a<sup>2</sup> + 2ab + b<sup>2</sup>) − (a<sup>2</sup> − 2ab + b<sup>2</sup>) = 4ab.</div>
<div class="astuce">Astuce olympique : une identité littérale est une « machine à calculer » : une fois prouvée, on l'applique à des nombres énormes. Pour un produit de deux nombres symétriques autour d'un nombre rond, pense à (m − k)(m + k) = m<sup>2</sup> − k<sup>2</sup>.</div>`
    },
    correction: `<p><strong>Identité.</strong> Soit n un réel. Par l'identité remarquable (a − b)(a + b) = a<sup>2</sup> − b<sup>2</sup> :</p>
<div class="calc">(n − 1)(n + 1) + 1 = (n<sup>2</sup> − 1) + 1 = n<sup>2</sup>.</div>
<p><strong>Applications.</strong></p>
<p>Avec n = 2026 : 2025 × 2027 + 1 = 2026<sup>2</sup> = 4 104 676.</p>
<p>Avec n = 2000 : 1999 × 2001 = 2000<sup>2</sup> − 1 = 4 000 000 − 1 = 3 999 999.</p>
<p><strong>Pour aller plus loin :</strong> plus généralement (n − k)(n + k) = n<sup>2</sup> − k<sup>2</sup>, donc 1997 × 2003 = 4 000 000 − 9 = 3 999 991.</p>`,
    bareme: [
      `Développer correctement (n − 1)(n + 1) = n<sup>2</sup> − 1 (identité remarquable citée).`,
      `Conclure l'identité pour tout réel n, sans partir du résultat.`,
      `Appliquer avec n = 2026 pour obtenir 2026<sup>2</sup> = 4 104 676.`,
      `Appliquer avec n = 2000 pour obtenir 3 999 999.`
    ]
  },
  {
    id: "algebre-11",
    theme: "algebre",
    niveau: 1,
    type: "reponse",
    titre: `L'aller et le retour`,
    enonce: `<p>Léa fait le trajet Zaragoza → Huesca en voiture à la vitesse moyenne de 60 km/h, puis revient par la même route à la vitesse moyenne de 40 km/h.</p>
<p>Quelle est sa vitesse moyenne (en km/h) sur l'ensemble de l'aller-retour ?</p>`,
    figure: ``,
    reponse: ["48", "48km/h"],
    reponseTexte: `48 km/h`,
    pistes: [
      `<p>Piste 1 : la réponse n'est pas 50 ! La vitesse moyenne, c'est la distance totale divisée par le temps total.</p>`,
      `<p>Piste 2 : la distance n'est pas donnée. Choisis-en une pratique, par exemple 120 km (divisible par 60 et par 40).</p>`,
      `<p>Piste 3 : avec 120 km, combien de temps dure l'aller ? Et le retour ?</p>`,
      `<p>Piste 4 : l'aller dure 2 h, le retour 3 h, pour 240 km au total.</p>`
    ],
    lecon: {
      titre: `Vitesse moyenne : la moyenne harmonique`,
      html: `<p>La vitesse moyenne se calcule toujours par :</p>
<div class="calc">v<sub>moy</sub> = distance totale / durée totale.</div>
<p>Si on parcourt deux fois la même distance d à des vitesses a et b, la durée totale est d/a + d/b, donc</p>
<div class="calc">v<sub>moy</sub> = 2d / (d/a + d/b) = 2ab / (a + b).</div>
<p>Cette quantité s'appelle la <strong>moyenne harmonique</strong> de a et b. Elle est toujours inférieure ou égale à la moyenne arithmétique (a + b)/2 : on passe plus de temps à la vitesse lente, qui « pèse » donc davantage.</p>
<div class="exemple">Exemple : aller à 30 km/h, retour à 90 km/h : 2 × 30 × 90 / 120 = 45 km/h (et non 60).</div>
<div class="astuce">Astuce olympique : quand une donnée manque (ici la distance), c'est souvent qu'elle n'influence pas le résultat. Choisis une valeur commode pour calculer, puis vérifie avec une lettre.</div>`
    },
    correction: `<p>Notons d la distance Zaragoza–Huesca (en km). L'aller dure d/60 heures et le retour d/40 heures. La durée totale est</p>
<div class="calc">d/60 + d/40 = 2d/120 + 3d/120 = 5d/120 = d/24.</div>
<p>La distance totale est 2d, donc la vitesse moyenne vaut</p>
<div class="calc">2d ÷ (d/24) = 48 km/h.</div>
<p>(Le résultat ne dépend pas de d.)</p>
<p><strong>Erreur fréquente :</strong> faire la moyenne (60 + 40)/2 = 50. Cela n'est correct que si l'on roule le même <em>temps</em> à chaque vitesse, pas la même <em>distance</em>.</p>`
  },
  {
    id: "algebre-12",
    theme: "algebre",
    niveau: 1,
    type: "reponse",
    titre: `Un calcul monstrueux ?`,
    enonce: `<p>Calculer, sans calculatrice :</p>
<div class="calc">123 456 789<sup>2</sup> − 123 456 788 × 123 456 790.</div>`,
    figure: ``,
    reponse: ["1", "un"],
    reponseTexte: `1`,
    pistes: [
      `<p>Piste 1 : les trois nombres sont très proches. Donne un nom au nombre du milieu : n = 123 456 789.</p>`,
      `<p>Piste 2 : écris 123 456 788 et 123 456 790 en fonction de n.</p>`,
      `<p>Piste 3 : l'expression devient n<sup>2</sup> − (n − 1)(n + 1). Développe le produit.</p>`,
      `<p>Piste 4 : (n − 1)(n + 1) = n<sup>2</sup> − 1.</p>`
    ],
    lecon: {
      titre: `Remplacer un grand nombre par une lettre`,
      html: `<p>Quand un calcul fait intervenir plusieurs grands nombres voisins, on <strong>pose une lettre</strong> pour le nombre central. Le calcul numérique devient un calcul littéral, souvent très simple.</p>
<div class="exemple">Exemple : 999 × 1001 − 998 × 1002. Avec n = 1000 : (n − 1)(n + 1) − (n − 2)(n + 2) = (n<sup>2</sup> − 1) − (n<sup>2</sup> − 4) = 3.</div>
<p>Cette technique a un double intérêt :</p>
<ul>
<li>elle évite les erreurs de calcul sur de grands nombres ;</li>
<li>elle montre que le résultat ne dépend pas du nombre choisi : on a en fait démontré une <strong>identité</strong>.</li>
</ul>
<div class="astuce">Astuce olympique : choisis la lettre pour le nombre « au centre », de façon que les autres s'écrivent n − 1, n + 1, n − 2… Les symétries font alors apparaître des identités remarquables.</div>`
    },
    correction: `<p>Posons n = 123 456 789. Alors 123 456 788 = n − 1 et 123 456 790 = n + 1, et l'expression vaut</p>
<div class="calc">n<sup>2</sup> − (n − 1)(n + 1) = n<sup>2</sup> − (n<sup>2</sup> − 1) = 1.</div>
<p>Le résultat est <strong>1</strong>.</p>
<p><strong>Pour aller plus loin :</strong> que vaut n<sup>2</sup> − (n − 3)(n + 3) ? (Réponse : 9, quel que soit n.)</p>`
  },
  {
    id: "algebre-13",
    theme: "algebre",
    niveau: 2,
    type: "reponse",
    titre: `La suite qui tourne en rond`,
    enonce: `<p>On définit une suite de nombres par u<sub>1</sub> = 2 et, pour tout n ≥ 1,</p>
<div class="calc">u<sub>n+1</sub> = 1 / (1 − u<sub>n</sub>).</div>
<p>Que vaut u<sub>2027</sub> ?</p>`,
    figure: ``,
    reponse: ["-1", "−1"],
    reponseTexte: `−1`,
    pistes: [
      `<p>Piste 1 : calcule u<sub>2</sub>, u<sub>3</sub>, u<sub>4</sub> à la main.</p>`,
      `<p>Piste 2 : tu dois trouver u<sub>2</sub> = −1, u<sub>3</sub> = 1/2, u<sub>4</sub> = 2. Que remarques-tu sur u<sub>4</sub> ?</p>`,
      `<p>Piste 3 : puisque u<sub>4</sub> = u<sub>1</sub>, la suite se répète avec une période 3. Donc u<sub>n</sub> ne dépend que du reste de n dans la division par 3.</p>`,
      `<p>Piste 4 : quel est le reste de 2027 dans la division par 3 ? À quel terme parmi u<sub>1</sub>, u<sub>2</sub>, u<sub>3</sub> correspond-il ?</p>`
    ],
    lecon: {
      titre: `Suites récurrentes et périodicité`,
      html: `<p>Une suite <strong>définie par récurrence</strong> donne le premier terme et une règle pour passer d'un terme au suivant. Pour trouver un terme lointain (u<sub>2027</sub>…), on calcule les premiers termes en cherchant un motif.</p>
<p>Si l'on trouve un indice p tel que u<sub>p+1</sub> = u<sub>1</sub>, alors, comme chaque terme ne dépend que du précédent, toute la suite se répète : u<sub>n+p</sub> = u<sub>n</sub> pour tout n. On dit que la suite est <strong>périodique de période p</strong>.</p>
<p>Alors u<sub>n</sub> ne dépend que du reste de n dans la division par p.</p>
<div class="exemple">Exemple : u<sub>1</sub> = 3, u<sub>n+1</sub> = 1/u<sub>n</sub> donne 3, 1/3, 3, 1/3… (période 2). Donc u<sub>100</sub> = 1/3.</div>
<div class="astuce">Astuce olympique : dans les sujets de compétition, un indice comme 2026 ou 2027 est un signal : la suite est presque toujours périodique ou télescopique. Calcule 5 ou 6 termes avant de chercher une formule compliquée.</div>`
    },
    correction: `<p>Calculons les premiers termes :</p>
<div class="calc">u<sub>2</sub> = 1/(1 − 2) = −1 ; u<sub>3</sub> = 1/(1 − (−1)) = 1/2 ; u<sub>4</sub> = 1/(1 − 1/2) = 2.</div>
<p>On retrouve u<sub>4</sub> = u<sub>1</sub>. Chaque terme étant entièrement déterminé par le précédent, la suite se répète : 2, −1, 1/2, 2, −1, 1/2, … Elle est périodique de période 3.</p>
<p>Les termes d'indice n tels que n = 3k + 2 valent u<sub>2</sub> = −1. Or 2027 = 3 × 675 + 2. Donc</p>
<div class="calc">u<sub>2027</sub> = u<sub>2</sub> = −1.</div>
<p><strong>Erreur fréquente :</strong> se tromper de décalage. Vérifie sur un petit indice : u<sub>5</sub> (5 = 3 × 1 + 2) doit valoir −1, ce qui est bien le cas.</p>`
  },
  {
    id: "algebre-14",
    theme: "algebre",
    niveau: 2,
    type: "demo",
    titre: `Quatre consécutifs et un carré`,
    enonce: `<p>Démontrer que le produit de quatre entiers consécutifs, augmenté de 1, est toujours un carré parfait.</p>
<p>Autrement dit, pour tout entier n : n(n + 1)(n + 2)(n + 3) + 1 est le carré d'un entier.</p>`,
    figure: ``,
    pistes: [
      `<p>Piste 1 : essaie : 1×2×3×4 + 1 = 25, 2×3×4×5 + 1 = 121, 3×4×5×6 + 1 = 361. De quels nombres sont-ce les carrés ?</p>`,
      `<p>Piste 2 : 25 = 5<sup>2</sup>, 121 = 11<sup>2</sup>, 361 = 19<sup>2</sup>. Essaie d'exprimer 5, 11, 19 en fonction de n = 1, 2, 3.</p>`,
      `<p>Piste 3 : au lieu de tout développer, regroupe les facteurs astucieusement : n(n + 3) et (n + 1)(n + 2). Que remarques-tu en les développant ?</p>`,
      `<p>Piste 4 : n(n + 3) = n<sup>2</sup> + 3n et (n + 1)(n + 2) = n<sup>2</sup> + 3n + 2. Pose m = n<sup>2</sup> + 3n : le produit vaut m(m + 2), donc le tout vaut m<sup>2</sup> + 2m + 1 = …</p>`
    ],
    lecon: {
      titre: `Regrouper les facteurs et changer de variable`,
      html: `<p>Pour développer un produit de plusieurs facteurs, l'ordre dans lequel on les regroupe peut tout changer. On cherche des paires qui donnent des expressions <strong>ressemblantes</strong>.</p>
<p>Pour n(n + 1)(n + 2)(n + 3), on associe les extrêmes et les moyens : les sommes n + (n + 3) et (n + 1) + (n + 2) sont égales, donc les deux produits commencent tous deux par n<sup>2</sup> + 3n.</p>
<p>On pose alors une <strong>nouvelle variable</strong> m = n<sup>2</sup> + 3n : l'expression de degré 4 devient une simple expression de degré 2 en m.</p>
<div class="exemple">Exemple : (x − 1)(x + 1)(x + 3)(x + 5) : on associe (x − 1)(x + 5) = x<sup>2</sup> + 4x − 5 et (x + 1)(x + 3) = x<sup>2</sup> + 4x + 3, puis m = x<sup>2</sup> + 4x.</div>
<div class="astuce">Astuce olympique : pour <em>deviner</em> la bonne forme, calcule quelques cas numériques et cherche une formule pour la racine (ici 5, 11, 19, 29… = n<sup>2</sup> + 3n + 1). Ensuite, la preuve consiste à vérifier cette formule.</div>`
    },
    correction: `<p>Soit n un entier. On regroupe les facteurs ainsi :</p>
<div class="calc">n(n + 3) = n<sup>2</sup> + 3n  et  (n + 1)(n + 2) = n<sup>2</sup> + 3n + 2.</div>
<p>Posons m = n<sup>2</sup> + 3n. Alors</p>
<div class="calc">n(n + 1)(n + 2)(n + 3) + 1 = m(m + 2) + 1 = m<sup>2</sup> + 2m + 1 = (m + 1)<sup>2</sup>.</div>
<p>Ainsi n(n + 1)(n + 2)(n + 3) + 1 = (n<sup>2</sup> + 3n + 1)<sup>2</sup>. Comme n<sup>2</sup> + 3n + 1 est un entier, le nombre considéré est bien un carré parfait.</p>
<p>Vérification : pour n = 1, n<sup>2</sup> + 3n + 1 = 5 et 1×2×3×4 + 1 = 25 = 5<sup>2</sup>. ✔</p>
<p><strong>Pour aller plus loin :</strong> en déduire sans calculatrice que √(2023×2024×2025×2026 + 1) = 2023<sup>2</sup> + 3×2023 + 1 = 4 098 599.</p>`,
    bareme: [
      `Regrouper les facteurs (n et n + 3 ; n + 1 et n + 2) ou développer correctement.`,
      `Obtenir que le produit vaut m(m + 2) avec m = n<sup>2</sup> + 3n.`,
      `Reconnaître l'identité m<sup>2</sup> + 2m + 1 = (m + 1)<sup>2</sup>.`,
      `Conclure : n<sup>2</sup> + 3n + 1 est entier, donc le nombre est un carré parfait.`
    ]
  },
  {
    id: "algebre-15",
    theme: "algebre",
    niveau: 2,
    type: "reponse",
    titre: `Diluer l'eau de mer`,
    enonce: `<p>On dispose de 20 litres d'eau salée contenant 15 % de sel (en masse, on assimile 1 L à 1 kg).</p>
<p>Combien de litres d'eau pure faut-il ajouter pour que la concentration en sel tombe à 12 % ?</p>`,
    figure: ``,
    reponse: ["5", "5l", "5litres"],
    reponseTexte: `5 litres`,
    pistes: [
      `<p>Piste 1 : quand on ajoute de l'eau pure, qu'est-ce qui ne change pas ?</p>`,
      `<p>Piste 2 : la quantité de sel reste la même. Combien y a-t-il de kg de sel au départ ?</p>`,
      `<p>Piste 3 : il y a 3 kg de sel. Si on ajoute x litres d'eau, quelle est la nouvelle masse totale ?</p>`,
      `<p>Piste 4 : il faut que 3 représente 12 % de (20 + x). Écris l'équation 3 = 0,12 × (20 + x).</p>`
    ],
    lecon: {
      titre: `Problèmes de mélanges : chercher ce qui se conserve`,
      html: `<p>Dans un problème de mélange (eau salée, alliages, jus…), la clé est d'identifier la quantité <strong>qui se conserve</strong> : la quantité de sel quand on ajoute de l'eau, la quantité d'eau quand on la fait s'évaporer…</p>
<p>Méthode :</p>
<ol>
<li>Calculer la quantité conservée : concentration × masse totale.</li>
<li>Écrire la nouvelle masse totale en fonction de l'inconnue.</li>
<li>Écrire : quantité conservée = nouvelle concentration × nouvelle masse totale.</li>
</ol>
<div class="exemple">Exemple (célèbre piège) : 100 kg de pastèques contiennent 99 % d'eau. Après séchage, elles contiennent 98 % d'eau. Elles pèsent alors… 50 kg ! La matière sèche (1 kg) passe de 1 % à 2 % du total.</div>
<div class="astuce">Astuce olympique : raisonne sur la partie qui ne bouge pas. C'est souvent elle qui donne l'équation la plus simple, voire aucun calcul.</div>`
    },
    correction: `<p>La masse de sel au départ est 15 % de 20 kg, soit 0,15 × 20 = 3 kg. Ajouter de l'eau pure ne change pas cette masse.</p>
<p>Si l'on ajoute x litres d'eau, la masse totale devient 20 + x, et l'on veut que le sel en représente 12 % :</p>
<div class="calc">0,12 × (20 + x) = 3 ⟺ 20 + x = 25 ⟺ x = 5.</div>
<p>Il faut ajouter <strong>5 litres</strong> d'eau pure.</p>
<p>Vérification : 3 kg de sel dans 25 kg, c'est 3/25 = 12 %. ✔</p>
<p><strong>Erreur fréquente :</strong> penser qu'il suffit de « baisser de 3 points » proportionnellement, ou calculer 12 % de 20 au lieu de 12 % de la nouvelle masse.</p>`
  },
  {
    id: "algebre-16",
    theme: "algebre",
    niveau: 2,
    type: "demo",
    titre: `Trois carrés contre trois produits`,
    enonce: `<p>1) Démontrer que, pour tous réels a et b, a<sup>2</sup> + b<sup>2</sup> ≥ 2ab.</p>
<p>2) En déduire que, pour tous réels a, b, c :</p>
<div class="calc">a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> ≥ ab + bc + ca.</div>
<p>3) Dans quels cas a-t-on égalité ?</p>`,
    figure: ``,
    pistes: [
      `<p>Piste 1 : pour la question 1, fais tout passer du même côté : a<sup>2</sup> + b<sup>2</sup> − 2ab. Reconnais-tu une identité remarquable ?</p>`,
      `<p>Piste 2 : a<sup>2</sup> − 2ab + b<sup>2</sup> = (a − b)<sup>2</sup> ≥ 0. Pour la question 2, écris la question 1 pour les trois couples (a, b), (b, c), (c, a).</p>`,
      `<p>Piste 3 : additionne les trois inégalités obtenues. Que vaut le membre de gauche ? Et celui de droite ?</p>`,
      `<p>Piste 4 : tu obtiens 2(a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>) ≥ 2(ab + bc + ca). Pour l'égalité, il faut que les trois carrés (a − b)<sup>2</sup>, (b − c)<sup>2</sup>, (c − a)<sup>2</sup> soient nuls.</p>`
    ],
    lecon: {
      titre: `L'inégalité (a − b)² ≥ 0 et comment l'additionner`,
      html: `<p>De (a − b)<sup>2</sup> ≥ 0 on tire immédiatement</p>
<div class="calc">a<sup>2</sup> + b<sup>2</sup> ≥ 2ab, avec égalité si et seulement si a = b.</div>
<p>C'est la brique de base de très nombreuses inégalités olympiques. On l'utilise souvent en l'appliquant à plusieurs couples, puis en <strong>additionnant</strong> les inégalités obtenues (on a le droit d'additionner des inégalités de même sens).</p>
<p>Pour étudier le cas d'égalité : une somme de termes positifs est nulle si et seulement si <strong>chacun</strong> des termes est nul.</p>
<div class="exemple">Exemple : pour tous réels x, y : x<sup>2</sup> + 4y<sup>2</sup> ≥ 4xy, car c'est a<sup>2</sup> + b<sup>2</sup> ≥ 2ab avec a = x et b = 2y.</div>
<div class="astuce">Astuce olympique : on peut aussi écrire directement 2(a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> − ab − bc − ca) = (a − b)<sup>2</sup> + (b − c)<sup>2</sup> + (c − a)<sup>2</sup>. Cette identité, à connaître, réapparaît très souvent.</div>`
    },
    correction: `<p><strong>1)</strong> Pour tous réels a, b : a<sup>2</sup> + b<sup>2</sup> − 2ab = (a − b)<sup>2</sup> ≥ 0, car un carré est positif ou nul. Donc a<sup>2</sup> + b<sup>2</sup> ≥ 2ab, avec égalité si et seulement si a = b.</p>
<p><strong>2)</strong> On applique la question 1 aux couples (a, b), (b, c) et (c, a) :</p>
<div class="calc">a<sup>2</sup> + b<sup>2</sup> ≥ 2ab, b<sup>2</sup> + c<sup>2</sup> ≥ 2bc, c<sup>2</sup> + a<sup>2</sup> ≥ 2ca.</div>
<p>En additionnant ces trois inégalités de même sens :</p>
<div class="calc">2a<sup>2</sup> + 2b<sup>2</sup> + 2c<sup>2</sup> ≥ 2ab + 2bc + 2ca,</div>
<p>puis en divisant par 2 (positif) : a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> ≥ ab + bc + ca.</p>
<p><strong>3)</strong> On a précisément 2(a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> − ab − bc − ca) = (a − b)<sup>2</sup> + (b − c)<sup>2</sup> + (c − a)<sup>2</sup>. Cette somme de carrés est nulle si et seulement si chaque carré est nul, c'est-à-dire a = b = c. L'égalité a lieu exactement lorsque a = b = c.</p>
<p><strong>Erreur fréquente :</strong> oublier de justifier que (a − b)<sup>2</sup> ≥ 0 « car c'est un carré » : c'est précisément l'argument clé.</p>`,
    bareme: [
      `Montrer a<sup>2</sup> + b<sup>2</sup> − 2ab = (a − b)<sup>2</sup> ≥ 0.`,
      `Appliquer l'inégalité aux trois couples (a, b), (b, c), (c, a).`,
      `Additionner et diviser par 2 pour conclure.`,
      `Justifier que l'égalité a lieu si et seulement si a = b = c.`
    ]
  },
  {
    id: "algebre-17",
    theme: "algebre",
    niveau: 2,
    type: "reponse",
    titre: `Somme et produit connus`,
    enonce: `<p>Deux nombres réels x et y vérifient</p>
<div class="calc">x + y = 7  et  xy = 5.</div>
<p>Calculer x<sup>2</sup> + y<sup>2</sup>.</p>`,
    figure: ``,
    reponse: ["39"],
    reponseTexte: `39`,
    pistes: [
      `<p>Piste 1 : faut-il vraiment trouver x et y ? (Ils ne sont pas entiers…)</p>`,
      `<p>Piste 2 : quelle identité remarquable fait intervenir x + y, xy et x<sup>2</sup> + y<sup>2</sup> ?</p>`,
      `<p>Piste 3 : (x + y)<sup>2</sup> = x<sup>2</sup> + 2xy + y<sup>2</sup>. Remplace ce que tu connais.</p>`,
      `<p>Piste 4 : 49 = x<sup>2</sup> + y<sup>2</sup> + 10.</p>`
    ],
    lecon: {
      titre: `Somme et produit : les expressions symétriques`,
      html: `<p>Une expression en x et y est <strong>symétrique</strong> si elle ne change pas quand on échange x et y (x<sup>2</sup> + y<sup>2</sup>, x<sup>3</sup> + y<sup>3</sup>, 1/x + 1/y…). Toute expression symétrique s'écrit à l'aide de la somme s = x + y et du produit p = xy.</p>
<p>Formules à connaître :</p>
<ul>
<li>x<sup>2</sup> + y<sup>2</sup> = s<sup>2</sup> − 2p</li>
<li>(x − y)<sup>2</sup> = s<sup>2</sup> − 4p</li>
<li>1/x + 1/y = s/p</li>
<li>x<sup>3</sup> + y<sup>3</sup> = s<sup>3</sup> − 3ps</li>
</ul>
<div class="exemple">Exemple : si x + y = 5 et xy = 3, alors x<sup>3</sup> + y<sup>3</sup> = 125 − 45 = 80.</div>
<div class="astuce">Astuce olympique : ne te précipite pas pour calculer x et y (ils peuvent être affreux, avec des racines carrées). Passe par s et p : c'est plus rapide et sans erreur.</div>`
    },
    correction: `<p>On utilise (x + y)<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup> + 2xy :</p>
<div class="calc">x<sup>2</sup> + y<sup>2</sup> = (x + y)<sup>2</sup> − 2xy = 7<sup>2</sup> − 2 × 5 = 49 − 10 = 39.</div>
<p>Remarque : de tels réels existent bien (ce sont (7 ± √29)/2), mais on n'a pas eu besoin de les calculer.</p>
<p><strong>Pour aller plus loin :</strong> calcule de même x<sup>3</sup> + y<sup>3</sup> = (x + y)<sup>3</sup> − 3xy(x + y) = 343 − 105 = 238.</p>`
  },
  {
    id: "algebre-18",
    theme: "algebre",
    niveau: 2,
    type: "demo",
    titre: `Le meilleur enclos`,
    enonce: `<p>Un fermier dispose de 20 mètres de clôture pour fabriquer un enclos rectangulaire.</p>
<p>Démontrer que l'aire de l'enclos est au plus 25 m<sup>2</sup>, et que cette aire maximale n'est atteinte que pour un enclos carré.</p>`,
    figure: `<svg viewBox="0 0 240 130" width="240" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="20" width="160" height="80" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><text x="110" y="120" font-size="14" fill="currentColor" text-anchor="middle">a</text><text x="200" y="65" font-size="14" fill="currentColor">b</text><text x="110" y="65" font-size="14" fill="currentColor" text-anchor="middle">2a + 2b = 20</text></svg>`,
    pistes: [
      `<p>Piste 1 : appelle a et b les dimensions. Que vaut a + b ? Que vaut l'aire ?</p>`,
      `<p>Piste 2 : a + b = 10. Essaie quelques rectangles : 1 × 9, 2 × 8, 4 × 6, 5 × 5. Lequel a la plus grande aire ?</p>`,
      `<p>Piste 3 : pose a = 5 + t et b = 5 − t (c'est possible car a + b = 10). Que vaut alors ab ?</p>`,
      `<p>Piste 4 : ab = 25 − t<sup>2</sup>. Or t<sup>2</sup> ≥ 0…</p>`
    ],
    lecon: {
      titre: `Optimiser avec un carré : somme fixée, produit maximal`,
      html: `<p>Si deux nombres ont une <strong>somme fixée</strong> S, leur produit est maximal quand ils sont <strong>égaux</strong>. Preuve : on écrit les nombres S/2 + t et S/2 − t (t mesure « l'écart au milieu ») :</p>
<div class="calc">(S/2 + t)(S/2 − t) = S<sup>2</sup>/4 − t<sup>2</sup> ≤ S<sup>2</sup>/4.</div>
<p>L'égalité a lieu si et seulement si t = 0.</p>
<p>Autre écriture équivalente : 4ab ≤ (a + b)<sup>2</sup>, car (a + b)<sup>2</sup> − 4ab = (a − b)<sup>2</sup> ≥ 0.</p>
<div class="exemple">Exemple : parmi les rectangles de périmètre 36, le plus grand est le carré 9 × 9, d'aire 81.</div>
<div class="astuce">Astuce olympique : dans un problème d'optimisation, il faut prouver <strong>deux choses</strong> : (1) la quantité ne dépasse jamais la valeur annoncée ; (2) cette valeur est effectivement atteinte (donner un exemple). Oublier le (2) coûte des points !</div>`
    },
    correction: `<p>Soient a et b les dimensions (en mètres) du rectangle, a &gt; 0 et b &gt; 0. Le périmètre vaut 2a + 2b = 20, donc a + b = 10. L'aire est A = ab.</p>
<p>On a (a + b)<sup>2</sup> − 4ab = a<sup>2</sup> + 2ab + b<sup>2</sup> − 4ab = (a − b)<sup>2</sup> ≥ 0, donc</p>
<div class="calc">4ab ≤ (a + b)<sup>2</sup> = 100, d'où A = ab ≤ 25.</div>
<p><strong>Cas d'égalité.</strong> A = 25 équivaut à (a − b)<sup>2</sup> = 0, soit a = b ; avec a + b = 10 on obtient a = b = 5 : le carré de côté 5 m a bien une aire de 25 m<sup>2</sup>, et c'est le seul rectangle qui l'atteint.</p>
<p>Conclusion : l'aire est au plus 25 m<sup>2</sup>, valeur atteinte uniquement pour le carré de 5 m de côté.</p>
<p><strong>Pour aller plus loin :</strong> et si le fermier utilise un mur comme quatrième côté (clôture sur trois côtés seulement) ? L'aire maximale devient 50 m<sup>2</sup>, pour un rectangle 5 × 10.</p>`,
    bareme: [
      `Traduire les données : a + b = 10 et aire = ab.`,
      `Prouver ab ≤ 25 à l'aide d'un carré positif ((a − b)<sup>2</sup> ≥ 0 ou écart au milieu).`,
      `Montrer que la valeur 25 est atteinte (carré 5 × 5).`,
      `Montrer que c'est le seul cas d'égalité (a = b).`
    ]
  },
  {
    id: "algebre-19",
    theme: "algebre",
    niveau: 2,
    type: "reponse",
    titre: `Une racine qui tombe juste`,
    enonce: `<p>Calculer, sans calculatrice :</p>
<div class="calc">√(1 + 2024 × 2026).</div>`,
    figure: ``,
    reponse: ["2025"],
    reponseTexte: `2025`,
    pistes: [
      `<p>Piste 1 : quel nombre est exactement au milieu de 2024 et 2026 ?</p>`,
      `<p>Piste 2 : écris 2024 = n − 1 et 2026 = n + 1 avec n = 2025.</p>`,
      `<p>Piste 3 : que vaut (n − 1)(n + 1) + 1 ?</p>`,
      `<p>Piste 4 : c'est n<sup>2</sup>, et √(n<sup>2</sup>) = n car n est positif.</p>`
    ],
    lecon: {
      titre: `Racines carrées : faire apparaître un carré parfait`,
      html: `<p>Pour simplifier √A, on cherche à écrire A comme un <strong>carré</strong> : si A = B<sup>2</sup> avec B ≥ 0, alors √A = B.</p>
<p>Attention au signe : pour tout réel x, √(x<sup>2</sup>) = |x| (la valeur absolue), pas forcément x. Par exemple √((−3)<sup>2</sup>) = √9 = 3.</p>
<p>Les identités remarquables sont l'outil principal pour « voir » un carré caché :</p>
<ul>
<li>(n − 1)(n + 1) + 1 = n<sup>2</sup></li>
<li>n<sup>2</sup> + 2n + 1 = (n + 1)<sup>2</sup></li>
<li>n(n + 1)(n + 2)(n + 3) + 1 = (n<sup>2</sup> + 3n + 1)<sup>2</sup></li>
</ul>
<div class="exemple">Exemple : √(3 + 2√2) = √((1 + √2)<sup>2</sup>) = 1 + √2, car (1 + √2)<sup>2</sup> = 1 + 2√2 + 2.</div>
<div class="astuce">Astuce olympique : les racines carrées dans les sujets « tombent juste » presque toujours. Si ton calcul donne une racine affreuse, cherche le carré caché.</div>`
    },
    correction: `<p>Posons n = 2025. Alors 2024 = n − 1 et 2026 = n + 1, donc</p>
<div class="calc">1 + 2024 × 2026 = 1 + (n − 1)(n + 1) = 1 + n<sup>2</sup> − 1 = n<sup>2</sup>.</div>
<p>Comme n = 2025 est positif, √(n<sup>2</sup>) = n. Ainsi</p>
<div class="calc">√(1 + 2024 × 2026) = 2025.</div>
<p><strong>Pour aller plus loin :</strong> 2025 = 45<sup>2</sup>. Donc √√(1 + 2024 × 2026) = 45 : l'année 2025 était un carré parfait !</p>`
  },
  {
    id: "algebre-20",
    theme: "algebre",
    niveau: 2,
    type: "demo",
    titre: `Une seule équation, deux inconnues`,
    enonce: `<p>Trouver tous les couples de nombres réels (x, y) tels que</p>
<div class="calc">x<sup>2</sup> + y<sup>2</sup> − 2x + 4y + 5 = 0.</div>`,
    figure: ``,
    pistes: [
      `<p>Piste 1 : on a une seule équation pour deux inconnues. Il doit y avoir une raison spéciale pour que les solutions soient peu nombreuses…</p>`,
      `<p>Piste 2 : regroupe les termes en x d'un côté, en y de l'autre : (x<sup>2</sup> − 2x) + (y<sup>2</sup> + 4y) + 5.</p>`,
      `<p>Piste 3 : complète chaque groupe en carré : x<sup>2</sup> − 2x = (x − 1)<sup>2</sup> − 1 et y<sup>2</sup> + 4y = (y + 2)<sup>2</sup> − 4.</p>`,
      `<p>Piste 4 : l'équation devient (x − 1)<sup>2</sup> + (y + 2)<sup>2</sup> = 0. Quand une somme de deux carrés est-elle nulle ?</p>`
    ],
    lecon: {
      titre: `Une somme de carrés nulle`,
      html: `<p>Principe fondamental :</p>
<div class="calc">A<sup>2</sup> + B<sup>2</sup> = 0 ⟺ A = 0 et B = 0 (pour A, B réels).</div>
<p>En effet, si l'un des carrés était strictement positif, la somme le serait aussi (l'autre carré étant ≥ 0).</p>
<p>Ce principe permet de résoudre des équations qui ont « trop d'inconnues » : une seule équation peut suffire à déterminer plusieurs nombres, à condition de l'écrire comme une somme de carrés.</p>
<div class="exemple">Exemple : a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> = ab + bc + ca impose a = b = c, car 2(a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> − ab − bc − ca) = (a − b)<sup>2</sup> + (b − c)<sup>2</sup> + (c − a)<sup>2</sup>.</div>
<div class="astuce">Astuce olympique : quand une équation en plusieurs variables a des coefficients bizarrement « justes » (ici le 5 = 1 + 4), c'est le signe d'une somme de carrés cachée.</div>`
    },
    correction: `<p>Pour tous réels x, y on a x<sup>2</sup> − 2x = (x − 1)<sup>2</sup> − 1 et y<sup>2</sup> + 4y = (y + 2)<sup>2</sup> − 4. L'équation s'écrit donc</p>
<div class="calc">(x − 1)<sup>2</sup> − 1 + (y + 2)<sup>2</sup> − 4 + 5 = 0 ⟺ (x − 1)<sup>2</sup> + (y + 2)<sup>2</sup> = 0.</div>
<p>Les deux carrés sont positifs ou nuls ; leur somme est nulle si et seulement si les deux sont nuls : x − 1 = 0 et y + 2 = 0.</p>
<p>Réciproquement, (x, y) = (1, −2) convient : 1 + 4 − 2 − 8 + 5 = 0. ✔</p>
<p>L'unique solution est <strong>(x, y) = (1, −2)</strong>.</p>
<p><strong>Pour aller plus loin :</strong> si l'on remplace 5 par 4, l'équation devient (x − 1)<sup>2</sup> + (y + 2)<sup>2</sup> = 1 : une infinité de solutions (un cercle). Et avec 6, aucune solution.</p>`,
    bareme: [
      `Compléter les carrés en x et en y correctement.`,
      `Obtenir l'équation équivalente (x − 1)<sup>2</sup> + (y + 2)<sup>2</sup> = 0.`,
      `Justifier qu'une somme de carrés nulle impose que chaque carré est nul.`,
      `Conclure que (1, −2) est l'unique solution (avec vérification ou équivalences).`
    ]
  },
  {
    id: "algebre-21",
    theme: "algebre",
    niveau: 2,
    type: "reponse",
    titre: `Des impairs au dénominateur`,
    enonce: `<p>Calculer</p>
<div class="calc">1/(1×3) + 1/(3×5) + 1/(5×7) + … + 1/(99×101).</div>
<p>Donner le résultat sous forme de fraction irréductible.</p>`,
    figure: ``,
    reponse: ["50/101"],
    reponseTexte: `50/101`,
    pistes: [
      `<p>Piste 1 : Rappelle-toi l'astuce de 1/(n(n + 1)) = 1/n − 1/(n + 1). Ici, les deux facteurs diffèrent de 2 et non de 1.</p>`,
      `<p>Piste 2 : calcule 1/1 − 1/3, puis 1/3 − 1/5. Compare avec 1/(1×3) et 1/(3×5).</p>`,
      `<p>Piste 3 : on trouve 1/k − 1/(k + 2) = 2/(k(k + 2)). Donc 1/(k(k + 2)) = (1/2) × (1/k − 1/(k + 2)).</p>`,
      `<p>Piste 4 : la somme vaut (1/2) × (1 − 1/101) après télescopage.</p>`
    ],
    lecon: {
      titre: `Rappel : télescopage avec un écart quelconque`,
      html: `<p>On a vu que 1/(n(n + 1)) = 1/n − 1/(n + 1). Que faire si les deux facteurs diffèrent de d ?</p>
<div class="calc">1/n − 1/(n + d) = d / (n(n + d)), donc 1/(n(n + d)) = (1/d) × (1/n − 1/(n + d)).</div>
<p>Il faut donc penser à <strong>diviser par l'écart d</strong>.</p>
<p>Attention aussi au télescopage : avec un écart d, le terme −1/(n + d) se simplifie avec le terme +1/(n + d) d'un terme <em>suivant</em> de la somme, à condition que les dénominateurs « s'enchaînent » (ici 1, 3, 5, 7…).</p>
<div class="exemple">Exemple : 1/(2×5) + 1/(5×8) + 1/(8×11) = (1/3)(1/2 − 1/11) = (1/3) × 9/22 = 3/22.</div>
<div class="astuce">Astuce olympique : vérifie toujours ta décomposition sur un terme numérique (par exemple 1/(1×3) = 1/3 et (1/2)(1 − 1/3) = 1/3 ✔) avant de lancer le télescopage.</div>`
    },
    correction: `<p>Pour tout entier k ≥ 1, 1/k − 1/(k + 2) = 2/(k(k + 2)), donc 1/(k(k + 2)) = (1/2)(1/k − 1/(k + 2)). Ainsi</p>
<div class="calc">S = (1/2) × [(1 − 1/3) + (1/3 − 1/5) + (1/5 − 1/7) + … + (1/99 − 1/101)].</div>
<p>Les termes intermédiaires se simplifient deux à deux ; il reste</p>
<div class="calc">S = (1/2) × (1 − 1/101) = (1/2) × 100/101 = 50/101.</div>
<p><strong>Erreur fréquente :</strong> oublier le facteur 1/2 et répondre 100/101.</p>`
  },
  {
    id: "algebre-22",
    theme: "algebre",
    niveau: 2,
    type: "reponse",
    titre: `Filles, garçons et moyenne`,
    enonce: `<p>Dans une classe, la moyenne des filles au dernier contrôle est 14 et celle des garçons est 11. La moyenne de toute la classe est 12,2.</p>
<p>Quel pourcentage de la classe les filles représentent-elles ? (Donner le nombre, sans le signe %.)</p>`,
    figure: ``,
    reponse: ["40", "40%"],
    reponseTexte: `40 %`,
    pistes: [
      `<p>Piste 1 : la moyenne de la classe n'est pas (14 + 11)/2 = 12,5. Qu'est-ce que cela indique sur le nombre de filles par rapport aux garçons ?</p>`,
      `<p>Piste 2 : appelle f le nombre de filles et g le nombre de garçons. Quelle est la somme des notes de toute la classe ?</p>`,
      `<p>Piste 3 : la somme vaut 14f + 11g, et elle vaut aussi 12,2 × (f + g). Écris l'égalité.</p>`,
      `<p>Piste 4 : on obtient 1,8f = 1,2g, donc f/g = 2/3. Quelle fraction de la classe représentent les filles ?</p>`
    ],
    lecon: {
      titre: `Moyenne pondérée`,
      html: `<p>La moyenne d'un groupe réunissant deux sous-groupes n'est pas la moyenne des deux moyennes : chaque moyenne compte autant de fois qu'il y a de personnes. C'est une <strong>moyenne pondérée</strong> :</p>
<div class="calc">M = (n<sub>1</sub> m<sub>1</sub> + n<sub>2</sub> m<sub>2</sub>) / (n<sub>1</sub> + n<sub>2</sub>).</div>
<p>Propriété clé : M est toujours comprise entre m<sub>1</sub> et m<sub>2</sub>, et plus proche de celle du groupe le plus nombreux. Plus précisément, les écarts sont en proportion inverse des effectifs :</p>
<div class="calc">n<sub>1</sub> × (m<sub>1</sub> − M) = n<sub>2</sub> × (M − m<sub>2</sub>).</div>
<div class="exemple">Exemple : 10 élèves à 15 et 30 élèves à 11 : M = (150 + 330)/40 = 12. Les écarts 3 et 1 sont bien dans le rapport inverse de 10 et 30.</div>
<div class="astuce">Astuce olympique : c'est le principe de la balance (ou du levier) : les « poids » (effectifs) multipliés par les « distances » à la moyenne s'équilibrent. Très pratique pour les problèmes de mélanges aussi !</div>`
    },
    correction: `<p>Soit f le nombre de filles et g le nombre de garçons. La somme des notes de la classe vaut 14f + 11g, et aussi 12,2(f + g). Donc</p>
<div class="calc">14f + 11g = 12,2f + 12,2g ⟺ 1,8f = 1,2g ⟺ 3f = 2g.</div>
<p>Ainsi g = 3f/2, et la proportion de filles est</p>
<div class="calc">f / (f + g) = f / (f + 3f/2) = 1 / (5/2) = 2/5 = 40 %.</div>
<p>Les filles représentent <strong>40 %</strong> de la classe. (Par exemple 10 filles et 15 garçons : (140 + 165)/25 = 12,2 ✔.)</p>
<p><strong>Méthode de la balance :</strong> les écarts à la moyenne sont 14 − 12,2 = 1,8 pour les filles et 12,2 − 11 = 1,2 pour les garçons ; les effectifs sont dans le rapport inverse, 1,2 : 1,8 = 2 : 3.</p>`
  },
  {
    id: "algebre-23",
    theme: "algebre",
    niveau: 2,
    type: "demo",
    titre: `Comparer sans calculatrice`,
    enonce: `<p>Sans utiliser de valeur approchée, démontrer que</p>
<div class="calc">√2 + √3 &lt; √10.</div>`,
    figure: ``,
    pistes: [
      `<p>Piste 1 : les racines carrées sont difficiles à comparer directement. Comment « se débarrasser » d'une racine carrée ?</p>`,
      `<p>Piste 2 : les deux membres sont positifs. Pour des nombres positifs a et b, a &lt; b équivaut à a<sup>2</sup> &lt; b<sup>2</sup>.</p>`,
      `<p>Piste 3 : calcule (√2 + √3)<sup>2</sup> avec l'identité (a + b)<sup>2</sup>.</p>`,
      `<p>Piste 4 : on obtient 5 + 2√6. Il faut donc comparer 2√6 et 5 : élève encore au carré !</p>`
    ],
    lecon: {
      titre: `Comparer des racines : élever au carré (avec précaution)`,
      html: `<p>Pour deux nombres <strong>positifs</strong> a et b :</p>
<div class="calc">a &lt; b ⟺ a<sup>2</sup> &lt; b<sup>2</sup>.</div>
<p>Cette équivalence est <strong>fausse</strong> si les nombres peuvent être négatifs : −3 &lt; 2 mais 9 &gt; 4. Il faut donc toujours justifier la positivité avant d'élever au carré.</p>
<p>Pour comparer des sommes de racines, on élève au carré (parfois plusieurs fois), en isolant à chaque étape la racine restante.</p>
<div class="exemple">Exemple : comparer √5 + √7 et 2√6. Les carrés valent 12 + 2√35 et 24. On compare 2√35 et 12, soit √35 et 6, soit 35 et 36 : donc √5 + √7 &lt; 2√6.</div>
<div class="astuce">Astuce olympique : rédige la preuve comme une chaîne d'<strong>équivalences</strong> (⟺) en partant de l'inégalité à prouver et en arrivant à une inégalité évidente (24 &lt; 25), en justifiant chaque équivalence (positivité !). Ou bien, plus sûr, pars de l'inégalité évidente et remonte.</div>`
    },
    correction: `<p>Les nombres √2 + √3 et √10 sont positifs ; ils sont donc rangés dans le même ordre que leurs carrés :</p>
<div class="calc">√2 + √3 &lt; √10 ⟺ (√2 + √3)<sup>2</sup> &lt; 10 ⟺ 2 + 2√6 + 3 &lt; 10 ⟺ 2√6 &lt; 5.</div>
<p>À nouveau, 2√6 et 5 sont positifs, donc</p>
<div class="calc">2√6 &lt; 5 ⟺ (2√6)<sup>2</sup> &lt; 25 ⟺ 24 &lt; 25,</div>
<p>ce qui est vrai. Par équivalences successives, √2 + √3 &lt; √10.</p>
<p><strong>Erreur fréquente :</strong> écrire √2 + √3 = √5. La racine d'une somme n'est pas la somme des racines ! D'ailleurs √2 + √3 ≈ 3,146 alors que √5 ≈ 2,236.</p>
<p><strong>Pour aller plus loin :</strong> la comparaison est serrée : √2 + √3 ≈ 3,146 et √10 ≈ 3,162.</p>`,
    bareme: [
      `Justifier la positivité des deux membres pour pouvoir élever au carré.`,
      `Calculer correctement (√2 + √3)<sup>2</sup> = 5 + 2√6.`,
      `Se ramener à 2√6 &lt; 5 puis à 24 &lt; 25 (nouvelle justification de positivité).`,
      `Rédiger la conclusion par équivalences (ou en remontant les implications).`
    ]
  },
  {
    id: "algebre-24",
    theme: "algebre",
    niveau: 2,
    type: "reponse",
    titre: `Un exposant mystère`,
    enonce: `<p>Le nombre réel a vérifie 2<sup>a</sup> = 3.</p>
<p>Calculer 8<sup>a</sup> + 4<sup>a+1</sup>.</p>`,
    figure: ``,
    reponse: ["63"],
    reponseTexte: `63`,
    pistes: [
      `<p>Piste 1 : pas besoin de connaître a ! Essaie d'écrire 8<sup>a</sup> à l'aide de 2<sup>a</sup>.</p>`,
      `<p>Piste 2 : 8 = 2<sup>3</sup>, donc 8<sup>a</sup> = (2<sup>3</sup>)<sup>a</sup> = (2<sup>a</sup>)<sup>3</sup>.</p>`,
      `<p>Piste 3 : de même, 4<sup>a+1</sup> = 4 × 4<sup>a</sup> et 4<sup>a</sup> = (2<sup>a</sup>)<sup>2</sup>.</p>`,
      `<p>Piste 4 : 8<sup>a</sup> = 27 et 4<sup>a+1</sup> = 4 × 9.</p>`
    ],
    lecon: {
      titre: `Puissances : exprimer tout avec la même brique`,
      html: `<p>Les règles (x<sup>m</sup>)<sup>n</sup> = x<sup>mn</sup> et x<sup>m+n</sup> = x<sup>m</sup> × x<sup>n</sup> restent vraies pour des exposants non entiers (on les admet au collège). Elles permettent de tout exprimer à l'aide d'une seule « brique » connue.</p>
<p>Si l'on connaît t = 2<sup>a</sup>, alors :</p>
<ul>
<li>4<sup>a</sup> = (2<sup>2</sup>)<sup>a</sup> = (2<sup>a</sup>)<sup>2</sup> = t<sup>2</sup> ;</li>
<li>8<sup>a</sup> = t<sup>3</sup> ;</li>
<li>2<sup>a+3</sup> = 8t ;</li>
<li>2<sup>−a</sup> = 1/t.</li>
</ul>
<div class="exemple">Exemple : si 3<sup>x</sup> = 5, alors 9<sup>x</sup> = 25 et 3<sup>x+2</sup> = 45.</div>
<div class="astuce">Astuce olympique : on n'a pas besoin de « trouver a » (ce serait un logarithme, hors programme). On remplace simplement l'expression connue par une nouvelle lettre t.</div>`
    },
    correction: `<p>On écrit tout en fonction de 2<sup>a</sup> = 3 :</p>
<div class="calc">8<sup>a</sup> = (2<sup>3</sup>)<sup>a</sup> = (2<sup>a</sup>)<sup>3</sup> = 3<sup>3</sup> = 27,</div>
<div class="calc">4<sup>a+1</sup> = 4 × 4<sup>a</sup> = 4 × (2<sup>a</sup>)<sup>2</sup> = 4 × 9 = 36.</div>
<p>Donc 8<sup>a</sup> + 4<sup>a+1</sup> = 27 + 36 = <strong>63</strong>.</p>
<p><strong>Erreur fréquente :</strong> écrire 4<sup>a+1</sup> = 4<sup>a</sup> + 4, ou 4<sup>a+1</sup> = 4<sup>a</sup> + 4<sup>1</sup>. L'exposant « + 1 » correspond à une <em>multiplication</em> par 4.</p>`
  },
  {
    id: "algebre-25",
    theme: "algebre",
    niveau: 2,
    type: "demo",
    titre: `Un nombre et son inverse`,
    enonce: `<p>Démontrer que, pour tout réel x &gt; 0,</p>
<div class="calc">x + 1/x ≥ 2,</div>
<p>et déterminer tous les x &gt; 0 pour lesquels il y a égalité.</p>`,
    figure: ``,
    pistes: [
      `<p>Piste 1 : teste x = 1, x = 2, x = 1/2, x = 10. L'inégalité semble vraie ; quand est-on le plus proche de 2 ?</p>`,
      `<p>Piste 2 : fais tout passer à gauche : x + 1/x − 2. Mets au même dénominateur.</p>`,
      `<p>Piste 3 : x + 1/x − 2 = (x<sup>2</sup> − 2x + 1)/x. Reconnais-tu le numérateur ?</p>`,
      `<p>Piste 4 : le numérateur est (x − 1)<sup>2</sup> ≥ 0 et le dénominateur x est strictement positif.</p>`
    ],
    lecon: {
      titre: `Moyenne arithmétique ≥ moyenne géométrique`,
      html: `<p>Pour deux réels positifs a et b :</p>
<div class="calc">(a + b)/2 ≥ √(ab), avec égalité si et seulement si a = b.</div>
<p>C'est l'<strong>inégalité arithmético-géométrique</strong> (IAG) à deux variables. Preuve : a + b − 2√(ab) = (√a − √b)<sup>2</sup> ≥ 0.</p>
<p>Forme très utile : si le <strong>produit</strong> ab est fixé, la <strong>somme</strong> a + b est au moins 2√(ab). (À comparer avec le problème de l'enclos : somme fixée ⇒ produit maximal.)</p>
<div class="exemple">Exemple : pour x &gt; 0, x + 9/x ≥ 2√9 = 6, avec égalité pour x = 3.</div>
<div class="astuce">Astuce olympique : quand une expression contient à la fois x et 1/x (ou x et k/x), leur produit est constant : pense immédiatement à l'IAG ou, ce qui revient au même, à faire apparaître un carré.</div>`
    },
    correction: `<p>Soit x &gt; 0. On calcule la différence :</p>
<div class="calc">x + 1/x − 2 = (x<sup>2</sup> + 1 − 2x)/x = (x − 1)<sup>2</sup>/x.</div>
<p>Le numérateur (x − 1)<sup>2</sup> est un carré, donc positif ou nul ; le dénominateur x est strictement positif. Le quotient est donc positif ou nul :</p>
<div class="calc">x + 1/x − 2 ≥ 0, c'est-à-dire x + 1/x ≥ 2.</div>
<p><strong>Cas d'égalité.</strong> x + 1/x = 2 ⟺ (x − 1)<sup>2</sup> = 0 ⟺ x = 1. L'égalité a lieu uniquement pour x = 1.</p>
<p><strong>Erreur fréquente :</strong> oublier l'hypothèse x &gt; 0. Pour x = −1, x + 1/x = −2 &lt; 2 : l'inégalité est fausse pour les négatifs, et c'est précisément le signe du dénominateur qui intervient.</p>`,
    bareme: [
      `Étudier le signe de x + 1/x − 2 et le mettre au même dénominateur.`,
      `Reconnaître (x − 1)<sup>2</sup> au numérateur.`,
      `Utiliser explicitement x &gt; 0 pour le signe du quotient.`,
      `Établir que l'égalité a lieu si et seulement si x = 1.`
    ]
  },
  {
    id: "algebre-26",
    theme: "algebre",
    niveau: 2,
    type: "reponse",
    titre: `Le train sur le pont`,
    enonce: `<p>Un train de 200 mètres de long, roulant à vitesse constante, met 10 secondes pour passer entièrement devant un poteau, et 30 secondes pour traverser entièrement un pont (de l'instant où l'avant du train entre sur le pont jusqu'à l'instant où l'arrière en sort).</p>
<p>Quelle est la longueur du pont, en mètres ?</p>`,
    figure: `<svg viewBox="0 0 300 90" width="300" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="60" x2="290" y2="60" stroke="currentColor" stroke-width="1"/><rect x="90" y="55" width="120" height="10" fill="none" stroke="currentColor" stroke-width="2"/><text x="150" y="85" font-size="14" fill="currentColor" text-anchor="middle">pont (L m)</text><rect x="20" y="35" width="60" height="18" fill="none" stroke="currentColor" stroke-width="2"/><text x="50" y="28" font-size="14" fill="currentColor" text-anchor="middle">200 m</text><line x1="84" y1="44" x2="100" y2="44" stroke="currentColor" stroke-width="1.5"/><polyline points="95,40 100,44 95,48" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>`,
    reponse: ["400", "400m"],
    reponseTexte: `400 m`,
    pistes: [
      `<p>Piste 1 : pendant les 10 secondes devant le poteau, de quelle distance l'avant du train a-t-il avancé ?</p>`,
      `<p>Piste 2 : l'avant du train avance de 200 m (toute sa longueur) en 10 s. Quelle est donc la vitesse du train ?</p>`,
      `<p>Piste 3 : pour traverser entièrement le pont, de combien l'avant du train doit-il avancer ? (Attention : pas seulement la longueur du pont !)</p>`,
      `<p>Piste 4 : l'avant parcourt L + 200 mètres en 30 s, à 20 m/s.</p>`
    ],
    lecon: {
      titre: `Problèmes de vitesses : suivre un point précis`,
      html: `<p>La relation de base : <strong>distance = vitesse × durée</strong>. La difficulté des problèmes de trains, de convois ou de tapis roulants est de savoir <em>quelle</em> distance compter.</p>
<p>Méthode : choisir un <strong>point précis</strong> (l'avant du train, par exemple) et suivre sa distance parcourue entre le début et la fin de l'événement.</p>
<ul>
<li>Passer devant un poteau : l'avant avance de la longueur du train.</li>
<li>Traverser un pont : l'avant avance de la longueur du pont + la longueur du train.</li>
<li>Croiser un autre train : on raisonne avec la <strong>vitesse relative</strong> (somme des vitesses si l'on se croise, différence si l'on se double).</li>
</ul>
<div class="exemple">Exemple : deux trains de 100 m chacun, à 20 m/s et 30 m/s, se croisent. Il faut que les avants se séparent de 200 m à la vitesse relative 50 m/s : 4 secondes.</div>
<div class="astuce">Astuce olympique : fais un petit schéma « début » et « fin » de l'événement et repère la position du point suivi : la distance parcourue saute aux yeux.</div>`
    },
    correction: `<p>Devant le poteau, l'avant du train avance de 200 m (sa longueur) en 10 s : la vitesse est 200/10 = 20 m/s.</p>
<p>Pour traverser entièrement un pont de longueur L, l'avant du train part de l'entrée du pont et doit aller jusqu'à ce que l'arrière sorte, soit une distance L + 200. En 30 s à 20 m/s, il parcourt 600 m. Donc</p>
<div class="calc">L + 200 = 600 ⟺ L = 400.</div>
<p>Le pont mesure <strong>400 m</strong>.</p>
<p><strong>Erreur fréquente :</strong> répondre 600 m en oubliant que le train doit aussi « sortir » entièrement du pont.</p>`
  },
  {
    id: "algebre-27",
    theme: "algebre",
    niveau: 2,
    type: "demo",
    titre: `Les inverses des carrés`,
    enonce: `<p>1) Démontrer que, pour tout entier k ≥ 2 : 1/k<sup>2</sup> &lt; 1/(k − 1) − 1/k.</p>
<p>2) En déduire que, pour tout entier n ≥ 2 :</p>
<div class="calc">1/2<sup>2</sup> + 1/3<sup>2</sup> + 1/4<sup>2</sup> + … + 1/n<sup>2</sup> &lt; 1.</div>`,
    figure: ``,
    pistes: [
      `<p>Piste 1 : mets 1/(k − 1) − 1/k au même dénominateur. Que trouves-tu ?</p>`,
      `<p>Piste 2 : 1/(k − 1) − 1/k = 1/((k − 1)k). Compare les dénominateurs k<sup>2</sup> et (k − 1)k.</p>`,
      `<p>Piste 3 : (k − 1)k &lt; k<sup>2</sup>, et une fraction de numérateur 1 est plus grande quand son dénominateur (positif) est plus petit.</p>`,
      `<p>Piste 4 : pour la question 2, écris l'inégalité de la question 1 pour k = 2, 3, …, n et additionne : une somme télescopique apparaît.</p>`
    ],
    lecon: {
      titre: `Majorer pour télescoper`,
      html: `<p>Certaines sommes (comme 1/2<sup>2</sup> + 1/3<sup>2</sup> + …) ne se calculent pas exactement de façon simple. On peut cependant les <strong>majorer</strong> : on remplace chaque terme par un terme plus grand qui, lui, se télescope.</p>
<p>Le couple à retenir :</p>
<div class="calc">1/k<sup>2</sup> &lt; 1/((k − 1)k) = 1/(k − 1) − 1/k  (k ≥ 2).</div>
<p>En additionnant, on obtient une majoration par une somme télescopique, qui se calcule.</p>
<div class="exemple">Exemple : de même 1/k<sup>2</sup> &gt; 1/(k(k + 1)) = 1/k − 1/(k + 1), ce qui donne une <em>minoration</em> : 1/2<sup>2</sup> + … + 1/n<sup>2</sup> &gt; 1/2 − 1/(n + 1).</div>
<div class="astuce">Astuce olympique : quand tu dois montrer qu'une somme reste « plus petite que » un nombre, cherche à comparer chaque terme avec un terme télescopique. C'est une idée qui revient sans cesse en olympiades.</div>`
    },
    correction: `<p><strong>1)</strong> Soit k ≥ 2. On a 1/(k − 1) − 1/k = (k − (k − 1))/((k − 1)k) = 1/((k − 1)k).</p>
<p>Or 0 &lt; (k − 1)k = k<sup>2</sup> − k &lt; k<sup>2</sup>. Les dénominateurs étant positifs, la fraction de plus petit dénominateur est la plus grande :</p>
<div class="calc">1/k<sup>2</sup> &lt; 1/((k − 1)k) = 1/(k − 1) − 1/k.</div>
<p><strong>2)</strong> Soit n ≥ 2. On écrit l'inégalité pour k = 2, 3, …, n et on additionne :</p>
<div class="calc">1/2<sup>2</sup> + 1/3<sup>2</sup> + … + 1/n<sup>2</sup> &lt; (1 − 1/2) + (1/2 − 1/3) + … + (1/(n − 1) − 1/n) = 1 − 1/n.</div>
<p>Comme 1 − 1/n &lt; 1, on conclut 1/2<sup>2</sup> + … + 1/n<sup>2</sup> &lt; 1.</p>
<p><strong>Pour aller plus loin :</strong> on a donc 1 + 1/2<sup>2</sup> + 1/3<sup>2</sup> + … &lt; 2 quel que soit le nombre de termes. Le mathématicien Euler a démontré en 1735 que cette somme « infinie » vaut exactement π<sup>2</sup>/6 ≈ 1,645.</p>`,
    bareme: [
      `Calculer 1/(k − 1) − 1/k = 1/((k − 1)k).`,
      `Comparer correctement 1/k<sup>2</sup> et 1/((k − 1)k) (dénominateurs positifs).`,
      `Additionner les inégalités de k = 2 à n et reconnaître le télescopage.`,
      `Conclure avec 1 − 1/n &lt; 1.`
    ]
  },
  {
    id: "algebre-28",
    theme: "algebre",
    niveau: 2,
    type: "reponse",
    titre: `Quand la fraction est entière`,
    enonce: `<p>Pour combien d'entiers relatifs n (n ≠ 2) le nombre</p>
<div class="calc">(n + 7) / (n − 2)</div>
<p>est-il un entier ?</p>`,
    figure: ``,
    reponse: ["6", "six"],
    reponseTexte: `6`,
    pistes: [
      `<p>Piste 1 : le numérateur et le dénominateur varient tous les deux avec n : c'est gênant. Peux-tu écrire n + 7 à l'aide de n − 2 ?</p>`,
      `<p>Piste 2 : n + 7 = (n − 2) + 9. Que vaut alors la fraction ?</p>`,
      `<p>Piste 3 : (n + 7)/(n − 2) = 1 + 9/(n − 2). Quand 9/(n − 2) est-il entier ?</p>`,
      `<p>Piste 4 : il faut que n − 2 soit un diviseur de 9, positif ou négatif ! Liste-les.</p>`
    ],
    lecon: {
      titre: `Isoler la partie entière d'une fraction`,
      html: `<p>Pour savoir quand une fraction (an + b)/(n + c) est entière, on fait disparaître n du numérateur en écrivant le numérateur comme « multiple du dénominateur + reste » :</p>
<div class="calc">(n + 7)/(n − 2) = ((n − 2) + 9)/(n − 2) = 1 + 9/(n − 2).</div>
<p>Il suffit alors que le dénominateur divise un nombre <strong>fixe</strong> (ici 9), ce qui ne laisse qu'un nombre fini de possibilités.</p>
<p>N'oublie pas les <strong>diviseurs négatifs</strong> quand n est un entier relatif : les diviseurs de 9 sont −9, −3, −1, 1, 3, 9.</p>
<div class="exemple">Exemple : (2n + 5)/(n + 1) = 2 + 3/(n + 1) est entier ssi n + 1 ∈ {−3, −1, 1, 3}, soit n ∈ {−4, −2, 0, 2}.</div>
<div class="astuce">Astuce olympique : cette technique marche aussi avec des carrés : (n<sup>2</sup> + 1)/(n + 1) = n − 1 + 2/(n + 1). Pense à « faire la division » comme avec des nombres.</div>`
    },
    correction: `<p>Pour n ≠ 2, on écrit n + 7 = (n − 2) + 9, donc</p>
<div class="calc">(n + 7)/(n − 2) = 1 + 9/(n − 2).</div>
<p>Ce nombre est entier si et seulement si 9/(n − 2) est entier, c'est-à-dire si n − 2 est un diviseur (positif ou négatif) de 9 :</p>
<div class="calc">n − 2 ∈ {−9, −3, −1, 1, 3, 9} ⟺ n ∈ {−7, −1, 1, 3, 5, 11}.</div>
<p>Il y a donc <strong>6</strong> entiers n qui conviennent. (Par exemple n = −7 donne 0/(−9) = 0, qui est bien entier.)</p>
<p><strong>Erreur fréquente :</strong> ne compter que les diviseurs positifs et répondre 3.</p>`
  },
  {
    id: "algebre-29",
    theme: "algebre",
    niveau: 3,
    type: "reponse",
    titre: `La fonction et son miroir`,
    enonce: `<p>Une fonction f, définie pour tout réel x non nul, vérifie pour tout x ≠ 0 :</p>
<div class="calc">f(x) + 2 f(1/x) = 3x.</div>
<p>Calculer f(2).</p>`,
    figure: ``,
    reponse: ["-1", "−1"],
    reponseTexte: `−1`,
    pistes: [
      `<p>Piste 1 : remplace x par 2 dans la relation. Quelles inconnues apparaissent ?</p>`,
      `<p>Piste 2 : tu obtiens f(2) + 2 f(1/2) = 6 : une équation, deux inconnues. Quelle autre valeur de x faut-il essayer ?</p>`,
      `<p>Piste 3 : avec x = 1/2 : f(1/2) + 2 f(2) = 3/2. Tu as maintenant un système de deux équations.</p>`,
      `<p>Piste 4 : pose a = f(2) et b = f(1/2) : a + 2b = 6 et 2a + b = 3/2. Élimine b.</p>`
    ],
    lecon: {
      titre: `Équations fonctionnelles : bien choisir les valeurs`,
      html: `<p>Une <strong>équation fonctionnelle</strong> est une relation que doit vérifier une fonction pour toutes les valeurs de la variable. On l'exploite en <strong>remplaçant x par des valeurs bien choisies</strong>.</p>
<p>Quand la relation relie f(x) et f(1/x) (ou f(x) et f(−x), f(x) et f(1 − x)…), l'astuce est d'appliquer la relation aussi en l'« image miroir » : remplacer x par 1/x. On obtient deux équations reliant les deux mêmes inconnues, donc un <strong>système</strong> que l'on résout.</p>
<div class="exemple">Exemple : si f(x) + f(−x) = x<sup>2</sup> et f(x) − f(−x) = 2x pour tout x, en additionnant on trouve 2f(x) = x<sup>2</sup> + 2x.</div>
<div class="astuce">Astuce olympique : on peut même trouver f(x) pour tout x : avec les deux équations f(x) + 2f(1/x) = 3x et f(1/x) + 2f(x) = 3/x, on obtient f(x) = 2/x − x. Il faut ensuite <strong>vérifier</strong> que cette fonction convient.</div>`
    },
    correction: `<p>Notons a = f(2) et b = f(1/2).</p>
<p>Avec x = 2 : a + 2b = 6. Avec x = 1/2 : b + 2a = 3/2.</p>
<p>En multipliant la deuxième équation par 2 : 4a + 2b = 3. On soustrait la première : 3a = 3 − 6 = −3, donc a = −1.</p>
<p>Ainsi <strong>f(2) = −1</strong> (et b = 7/2).</p>
<p>Vérification : −1 + 2 × 7/2 = 6 ✔ et 7/2 + 2 × (−1) = 3/2 ✔.</p>
<p><strong>Pour aller plus loin :</strong> la fonction f(x) = 2/x − x vérifie bien la relation : 2/x − x + 2(2x − 1/x) = 3x. Et on retrouve f(2) = 1 − 2 = −1.</p>`
  },
  {
    id: "algebre-30",
    theme: "algebre",
    niveau: 3,
    type: "demo",
    titre: `Racine et solutions parasites`,
    enonce: `<p>Trouver tous les nombres réels x tels que</p>
<div class="calc">√(x + 3) = x + 1.</div>`,
    figure: ``,
    pistes: [
      `<p>Piste 1 : pour quelles valeurs de x le membre de gauche a-t-il un sens ? Quel est le signe d'une racine carrée ?</p>`,
      `<p>Piste 2 : √(x + 3) ≥ 0, donc une solution doit vérifier x + 1 ≥ 0. Garde cette condition en tête.</p>`,
      `<p>Piste 3 : élève au carré : x + 3 = (x + 1)<sup>2</sup>. Développe et factorise.</p>`,
      `<p>Piste 4 : tu obtiens x<sup>2</sup> + x − 2 = (x − 1)(x + 2) = 0. Les deux candidats vérifient-ils vraiment l'équation de départ ?</p>`
    ],
    lecon: {
      titre: `Élever au carré : implication, pas équivalence`,
      html: `<p>Si A = B, alors A<sup>2</sup> = B<sup>2</sup>. Mais la réciproque est fausse : A<sup>2</sup> = B<sup>2</sup> signifie A = B <strong>ou</strong> A = −B.</p>
<p>Conséquence : quand on élève une équation au carré, on peut <strong>ajouter</strong> des solutions qui ne conviennent pas (des « solutions parasites »). Deux façons de rédiger correctement :</p>
<ul>
<li><strong>Analyse–synthèse</strong> : si x est solution, alors x ∈ {candidats} (analyse) ; puis on teste chaque candidat dans l'équation de départ (synthèse).</li>
<li><strong>Équivalence</strong> : √A = B ⟺ (A = B<sup>2</sup> et B ≥ 0).</li>
</ul>
<div class="exemple">Exemple : √x = −2 n'a aucune solution, alors que x = 4 vérifie x = (−2)<sup>2</sup>.</div>
<div class="astuce">Astuce olympique : dans une question « trouver tous les x », le jury attend les deux sens : montrer que toute solution est dans ta liste, <em>et</em> que chaque élément de ta liste est bien solution. Oublier la vérification est l'erreur la plus pénalisée.</div>`
    },
    correction: `<p><strong>Analyse.</strong> Soit x une solution. Alors x + 3 ≥ 0 (pour que la racine existe) et x + 1 = √(x + 3) ≥ 0. En élevant au carré :</p>
<div class="calc">x + 3 = (x + 1)<sup>2</sup> = x<sup>2</sup> + 2x + 1 ⟺ x<sup>2</sup> + x − 2 = 0 ⟺ (x − 1)(x + 2) = 0.</div>
<p>Donc x = 1 ou x = −2. Mais x + 1 ≥ 0 exclut x = −2. Il reste x = 1.</p>
<p><strong>Synthèse.</strong> Pour x = 1 : √(1 + 3) = 2 = 1 + 1. ✔</p>
<p>(Pour x = −2 : √1 = 1 alors que x + 1 = −1 : c'est une solution parasite, solution de √(x + 3) = −(x + 1).)</p>
<p>L'unique solution est <strong>x = 1</strong>.</p>`,
    bareme: [
      `Noter la condition x + 1 ≥ 0 (ou vérifier les candidats à la fin).`,
      `Élever au carré et obtenir x<sup>2</sup> + x − 2 = 0.`,
      `Factoriser ou résoudre : candidats 1 et −2.`,
      `Éliminer −2 et vérifier que 1 est solution ; conclure.`
    ]
  },
  {
    id: "algebre-31",
    theme: "algebre",
    niveau: 3,
    type: "reponse",
    titre: `Racines en cascade`,
    enonce: `<p>Calculer</p>
<div class="calc">1/(√1 + √2) + 1/(√2 + √3) + 1/(√3 + √4) + … + 1/(√99 + √100).</div>`,
    figure: ``,
    reponse: ["9", "neuf"],
    reponseTexte: `9`,
    pistes: [
      `<p>Piste 1 : commence par simplifier un seul terme, par exemple 1/(√1 + √2). Comment faire disparaître une racine d'un dénominateur ?</p>`,
      `<p>Piste 2 : multiplie le numérateur et le dénominateur par √2 − √1 (l'« expression conjuguée »). Que devient le dénominateur ?</p>`,
      `<p>Piste 3 : (√(k+1) + √k)(√(k+1) − √k) = (k + 1) − k = 1. Donc 1/(√k + √(k+1)) = √(k+1) − √k.</p>`,
      `<p>Piste 4 : la somme devient télescopique : il reste √100 − √1.</p>`
    ],
    lecon: {
      titre: `L'expression conjuguée`,
      html: `<p>Pour supprimer des racines carrées au dénominateur, on multiplie en haut et en bas par l'<strong>expression conjuguée</strong> : le conjugué de √a + √b est √a − √b. Grâce à l'identité (u + v)(u − v) = u<sup>2</sup> − v<sup>2</sup> :</p>
<div class="calc">(√a + √b)(√a − √b) = a − b.</div>
<p>Donc 1/(√a + √b) = (√a − √b)/(a − b).</p>
<p>Lorsque a − b = 1, c'est spectaculaire : 1/(√(k + 1) + √k) = √(k + 1) − √k, et une somme de tels termes se <strong>télescope</strong>.</p>
<div class="exemple">Exemple : 1/(√5 − √3) = (√5 + √3)/(5 − 3) = (√5 + √3)/2.</div>
<div class="astuce">Astuce olympique : l'expression conjuguée sert aussi à comparer : √(k + 1) − √k = 1/(√(k + 1) + √k) montre que l'écart entre deux racines consécutives diminue quand k augmente.</div>`
    },
    correction: `<p>Pour tout entier k ≥ 1, en multipliant par l'expression conjuguée :</p>
<div class="calc">1/(√k + √(k + 1)) = (√(k + 1) − √k) / ((√(k + 1) + √k)(√(k + 1) − √k)) = (√(k + 1) − √k)/((k + 1) − k) = √(k + 1) − √k.</div>
<p>La somme vaut donc</p>
<div class="calc">(√2 − √1) + (√3 − √2) + … + (√100 − √99) = √100 − √1 = 10 − 1 = 9.</div>
<p>Le résultat est <strong>9</strong>.</p>
<p><strong>Pour aller plus loin :</strong> jusqu'à quel terme faut-il aller pour que la somme dépasse 2026 ? Il faut √(n + 1) − 1 &gt; 2026, soit n + 1 &gt; 2027<sup>2</sup>.</p>`
  },
  {
    id: "algebre-32",
    theme: "algebre",
    niveau: 3,
    type: "demo",
    titre: `Somme fois somme des inverses`,
    enonce: `<p>1) Démontrer que pour tous réels a, b strictement positifs :</p>
<div class="calc">(a + b)(1/a + 1/b) ≥ 4.</div>
<p>2) Démontrer que pour tous réels a, b, c strictement positifs :</p>
<div class="calc">(a + b + c)(1/a + 1/b + 1/c) ≥ 9.</div>
<p>Préciser les cas d'égalité.</p>`,
    figure: ``,
    pistes: [
      `<p>Piste 1 : développe (a + b)(1/a + 1/b). Quels termes apparaissent ?</p>`,
      `<p>Piste 2 : tu obtiens 2 + a/b + b/a. As-tu déjà vu une inégalité sur « un nombre plus son inverse » ?</p>`,
      `<p>Piste 3 : avec x = a/b &gt; 0, on a x + 1/x ≥ 2. Pour la question 2, développe aussi : combien de termes obtiens-tu ?</p>`,
      `<p>Piste 4 : (a + b + c)(1/a + 1/b + 1/c) = 3 + (a/b + b/a) + (b/c + c/b) + (c/a + a/c). Minore chaque parenthèse par 2.</p>`
    ],
    lecon: {
      titre: `Rappel : x + 1/x ≥ 2, et comment le réutiliser`,
      html: `<p>On a démontré que pour x &gt; 0, x + 1/x ≥ 2, avec égalité si et seulement si x = 1. Ce résultat devient un <strong>outil</strong> : dès qu'une expression contient des paires « nombre / inverse » comme a/b et b/a, on peut minorer chaque paire par 2.</p>
<p>Stratégie générale pour une inégalité avec plusieurs variables :</p>
<ol>
<li>Développer pour voir apparaître des blocs simples.</li>
<li>Regrouper les termes par paires symétriques.</li>
<li>Appliquer à chaque paire une inégalité connue, puis additionner.</li>
<li>Étudier le cas d'égalité : il faut l'égalité dans <strong>chaque</strong> inégalité utilisée.</li>
</ol>
<div class="exemple">Exemple : pour a, b &gt; 0, a<sup>2</sup>/b<sup>2</sup> + b<sup>2</sup>/a<sup>2</sup> ≥ 2 (avec x = a<sup>2</sup>/b<sup>2</sup>).</div>
<div class="astuce">Astuce olympique : ce résultat s'interprète avec les moyennes : la moyenne arithmétique de a, b, c est toujours au moins égale à leur moyenne harmonique 3/(1/a + 1/b + 1/c).</div>`
    },
    correction: `<p><strong>Lemme.</strong> Pour x &gt; 0, x + 1/x − 2 = (x − 1)<sup>2</sup>/x ≥ 0, donc x + 1/x ≥ 2, avec égalité ssi x = 1.</p>
<p><strong>1)</strong> Pour a, b &gt; 0 :</p>
<div class="calc">(a + b)(1/a + 1/b) = 1 + a/b + b/a + 1 = 2 + (a/b + b/a).</div>
<p>Avec x = a/b &gt; 0, le lemme donne a/b + b/a ≥ 2, donc (a + b)(1/a + 1/b) ≥ 4. Égalité ssi a/b = 1, soit a = b.</p>
<p><strong>2)</strong> Pour a, b, c &gt; 0, en développant (9 termes) :</p>
<div class="calc">(a + b + c)(1/a + 1/b + 1/c) = 3 + (a/b + b/a) + (b/c + c/b) + (c/a + a/c).</div>
<p>Chacune des trois parenthèses est ≥ 2 par le lemme, donc l'expression est ≥ 3 + 2 + 2 + 2 = 9.</p>
<p>Égalité ssi les trois inégalités sont des égalités : a = b, b = c et c = a, c'est-à-dire a = b = c.</p>
<p><strong>Pour aller plus loin :</strong> avec n nombres positifs, (a<sub>1</sub> + … + a<sub>n</sub>)(1/a<sub>1</sub> + … + 1/a<sub>n</sub>) ≥ n<sup>2</sup>, par le même argument (n termes égaux à 1, et n(n − 1)/2 paires ≥ 2).</p>`,
    bareme: [
      `Établir (ou citer avec preuve) x + 1/x ≥ 2 pour x &gt; 0.`,
      `Développer correctement les deux produits.`,
      `Regrouper en paires a/b + b/a et appliquer l'inégalité à chaque paire.`,
      `Conclure ≥ 4 et ≥ 9.`,
      `Traiter les cas d'égalité (a = b ; a = b = c).`
    ]
  },
  {
    id: "algebre-33",
    theme: "algebre",
    niveau: 3,
    type: "reponse",
    titre: `Une suite qui s'annule par paquets`,
    enonce: `<p>On définit une suite par a<sub>1</sub> = 1, a<sub>2</sub> = 3 et, pour tout n ≥ 2,</p>
<div class="calc">a<sub>n+1</sub> = a<sub>n</sub> − a<sub>n−1</sub>.</div>
<p>Calculer la somme des 2026 premiers termes : a<sub>1</sub> + a<sub>2</sub> + … + a<sub>2026</sub>.</p>`,
    figure: ``,
    reponse: ["5", "cinq"],
    reponseTexte: `5`,
    pistes: [
      `<p>Piste 1 : calcule les 8 premiers termes de la suite.</p>`,
      `<p>Piste 2 : tu dois trouver 1, 3, 2, −1, −3, −2, 1, 3… Quelle est la période ?</p>`,
      `<p>Piste 3 : la suite est périodique de période 6. Que vaut la somme de 6 termes consécutifs ?</p>`,
      `<p>Piste 4 : chaque bloc de 6 termes a une somme nulle. 2026 = 6 × 337 + 4 : il ne reste que les 4 derniers termes, qui sont égaux aux 4 premiers.</p>`
    ],
    lecon: {
      titre: `Rappel : périodicité, et comment la prouver`,
      html: `<p>Calculer des termes permet de <em>deviner</em> une période ; pour une rédaction complète, on la <strong>prouve</strong> à partir de la relation de récurrence.</p>
<p>Ici, pour la relation a<sub>n+1</sub> = a<sub>n</sub> − a<sub>n−1</sub> :</p>
<div class="calc">a<sub>n+2</sub> = a<sub>n+1</sub> − a<sub>n</sub> = (a<sub>n</sub> − a<sub>n−1</sub>) − a<sub>n</sub> = −a<sub>n−1</sub>.</div>
<p>Donc chaque terme est l'opposé de celui situé 3 rangs avant, et en appliquant deux fois : a<sub>n+6</sub> = a<sub>n</sub>. La période 6 vaut <strong>quels que soient</strong> les deux premiers termes !</p>
<p>Conséquence pour les sommes : la somme de 6 termes consécutifs est nulle (les termes s'annulent par paires a<sub>k</sub> et a<sub>k+3</sub> = −a<sub>k</sub>).</p>
<div class="exemple">Exemple : avec a<sub>1</sub> = 5 et a<sub>2</sub> = 2 : 5, 2, −3, −5, −2, 3, 5, 2… (somme d'une période : 0).</div>
<div class="astuce">Astuce olympique : pour une somme de N termes d'une suite périodique de période p, écris N = pq + r : la somme vaut q × (somme d'une période) + (somme des r premiers termes).</div>`
    },
    correction: `<p>Premiers termes : a<sub>1</sub> = 1, a<sub>2</sub> = 3, a<sub>3</sub> = 2, a<sub>4</sub> = −1, a<sub>5</sub> = −3, a<sub>6</sub> = −2, a<sub>7</sub> = 1, a<sub>8</sub> = 3.</p>
<p>Pour tout n ≥ 2 : a<sub>n+2</sub> = a<sub>n+1</sub> − a<sub>n</sub> = (a<sub>n</sub> − a<sub>n−1</sub>) − a<sub>n</sub> = −a<sub>n−1</sub>. Autrement dit a<sub>k+3</sub> = −a<sub>k</sub> pour tout k ≥ 1, donc a<sub>k+6</sub> = a<sub>k</sub> : la suite est périodique de période 6, et la somme de 6 termes consécutifs est nulle (a<sub>k</sub> + a<sub>k+3</sub> = 0).</p>
<p>Comme 2026 = 6 × 337 + 4, les 6 × 337 = 2022 premiers termes ont une somme nulle, et les termes a<sub>2023</sub>, …, a<sub>2026</sub> sont égaux à a<sub>1</sub>, …, a<sub>4</sub>. Donc</p>
<div class="calc">a<sub>1</sub> + … + a<sub>2026</sub> = 1 + 3 + 2 + (−1) = 5.</div>
<p><strong>Erreur fréquente :</strong> se tromper sur le reste de la division de 2026 par 6 (6 × 337 = 2022, reste 4).</p>`
  },
  {
    id: "algebre-34",
    theme: "algebre",
    niveau: 3,
    type: "demo",
    titre: `Trois nombres trop contraints`,
    enonce: `<p>Trouver tous les triplets de nombres réels (x, y, z) tels que</p>
<div class="calc">x + y + z = 3  et  x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 3.</div>`,
    figure: ``,
    pistes: [
      `<p>Piste 1 : trouve une solution évidente. Y en a-t-il d'autres ? Deux équations pour trois inconnues, c'est suspect…</p>`,
      `<p>Piste 2 : la solution évidente est x = y = z = 1. Essaie de mesurer l'écart à cette solution : calcule (x − 1)<sup>2</sup> + (y − 1)<sup>2</sup> + (z − 1)<sup>2</sup>.</p>`,
      `<p>Piste 3 : développe : (x − 1)<sup>2</sup> + (y − 1)<sup>2</sup> + (z − 1)<sup>2</sup> = (x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup>) − 2(x + y + z) + 3.</p>`,
      `<p>Piste 4 : avec les hypothèses, cette somme vaut 3 − 6 + 3 = 0. Une somme de carrés nulle…</p>`
    ],
    lecon: {
      titre: `Rappel : somme de carrés nulle, en mesurant l'écart`,
      html: `<p>On sait qu'une somme de carrés de réels est nulle si et seulement si chaque carré est nul. La difficulté est de <strong>trouver les bons carrés</strong>.</p>
<p>Une méthode efficace : deviner la solution (souvent tous les nombres égaux), puis considérer la somme des carrés des <strong>écarts</strong> à cette solution, et la calculer grâce aux hypothèses.</p>
<div class="exemple">Exemple : si a + b = 2 et a<sup>2</sup> + b<sup>2</sup> = 2, alors (a − 1)<sup>2</sup> + (b − 1)<sup>2</sup> = 2 − 4 + 2 = 0, donc a = b = 1.</div>
<p>Variante avec l'inégalité : on a toujours 3(x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup>) ≥ (x + y + z)<sup>2</sup> (car la différence vaut (x − y)<sup>2</sup> + (y − z)<sup>2</sup> + (z − x)<sup>2</sup>). Ici on a l'égalité 9 = 9, donc x = y = z.</p>
<div class="astuce">Astuce olympique : quand un système a « trop peu d'équations », c'est presque toujours qu'une inégalité est en fait une égalité. Cherche l'inégalité cachée et son cas d'égalité.</div>`
    },
    correction: `<p><strong>Analyse.</strong> Soit (x, y, z) une solution. On calcule</p>
<div class="calc">(x − 1)<sup>2</sup> + (y − 1)<sup>2</sup> + (z − 1)<sup>2</sup> = (x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup>) − 2(x + y + z) + 3 = 3 − 2 × 3 + 3 = 0.</div>
<p>Une somme de trois carrés de réels est nulle si et seulement si chacun est nul : x − 1 = y − 1 = z − 1 = 0, donc x = y = z = 1.</p>
<p><strong>Synthèse.</strong> Le triplet (1, 1, 1) vérifie bien 1 + 1 + 1 = 3 et 1 + 1 + 1 = 3.</p>
<p>L'unique solution est <strong>(x, y, z) = (1, 1, 1)</strong>.</p>
<p><strong>Pour aller plus loin :</strong> si l'on remplace le second 3 par 5, il y a une infinité de solutions (par exemple (0, 1, 2) ou (2, 1, 0)). Et avec 2 à la place de 3 dans la deuxième équation ? Aucune solution, car on aurait (x − 1)<sup>2</sup> + (y − 1)<sup>2</sup> + (z − 1)<sup>2</sup> = −1.</p>`,
    bareme: [
      `Introduire la somme (x − 1)<sup>2</sup> + (y − 1)<sup>2</sup> + (z − 1)<sup>2</sup> (ou l'inégalité 3Σx<sup>2</sup> ≥ (Σx)<sup>2</sup>).`,
      `La calculer à l'aide des hypothèses et trouver 0.`,
      `En déduire x = y = z = 1 (somme de carrés nulle).`,
      `Vérifier que (1, 1, 1) est solution et conclure à l'unicité.`
    ]
  },
  {
    id: "algebre-35",
    theme: "algebre",
    niveau: 3,
    type: "reponse",
    titre: `Ajouter 2025 pour faire un carré`,
    enonce: `<p>Combien existe-t-il d'entiers n ≥ 1 tels que n<sup>2</sup> + 2025 soit un carré parfait ?</p>`,
    figure: ``,
    reponse: ["7", "sept"],
    reponseTexte: `7`,
    pistes: [
      `<p>Piste 1 : écris n<sup>2</sup> + 2025 = m<sup>2</sup> avec m entier positif. Que peux-tu dire de m<sup>2</sup> − n<sup>2</sup> ?</p>`,
      `<p>Piste 2 : m<sup>2</sup> − n<sup>2</sup> = 2025, donc (m − n)(m + n) = 2025. Pose d = m − n et e = m + n.</p>`,
      `<p>Piste 3 : d et e sont deux entiers positifs de produit 2025 avec d &lt; e (car n ≥ 1). Réciproquement, un tel couple donne-t-il toujours une solution entière ? (Pense à la parité.)</p>`,
      `<p>Piste 4 : 2025 = 3<sup>4</sup> × 5<sup>2</sup> a 15 diviseurs, tous impairs. Combien de couples (d, e) avec d &lt; e et de = 2025 ?</p>`
    ],
    lecon: {
      titre: `Équations en entiers : factoriser par a² − b²`,
      html: `<p>Pour résoudre en entiers une équation du type m<sup>2</sup> − n<sup>2</sup> = N, on factorise :</p>
<div class="calc">(m − n)(m + n) = N.</div>
<p>On est ramené à décomposer N en produit de deux facteurs d × e. Ensuite m = (d + e)/2 et n = (e − d)/2 : il faut que d et e aient <strong>la même parité</strong>.</p>
<p>Pour compter les diviseurs : si N = p<sup>a</sup> × q<sup>b</sup> (p, q premiers), N a (a + 1)(b + 1) diviseurs.</p>
<div class="exemple">Exemple : n<sup>2</sup> + 15 = m<sup>2</sup> : (m − n)(m + n) = 15 = 1 × 15 = 3 × 5, d'où (m, n) = (8, 7) ou (4, 1).</div>
<div class="astuce">Astuce olympique : si N ≡ 2 (mod 4), il n'y a <strong>aucune</strong> solution : d et e doivent avoir la même parité, et alors de est soit impair, soit multiple de 4. Par exemple, n<sup>2</sup> + 2026 n'est jamais un carré !</div>`
    },
    correction: `<p>Supposons n<sup>2</sup> + 2025 = m<sup>2</sup> avec m entier, m ≥ 0. Alors m &gt; n ≥ 1 et</p>
<div class="calc">(m − n)(m + n) = 2025.</div>
<p>Posons d = m − n et e = m + n : ce sont des entiers positifs, de produit 2025, avec d &lt; e (car n ≥ 1).</p>
<p>Réciproquement, pour tout couple (d, e) d'entiers positifs avec de = 2025 et d &lt; e, les nombres d et e sont impairs (2025 est impair), donc m = (d + e)/2 et n = (e − d)/2 sont des entiers, avec n ≥ 1, et n<sup>2</sup> + 2025 = m<sup>2</sup>. Deux couples différents donnent deux n différents (car d = √(n<sup>2</sup> + 2025) − n détermine le couple).</p>
<p>Comme 2025 = 3<sup>4</sup> × 5<sup>2</sup>, il possède (4 + 1)(2 + 1) = 15 diviseurs. 2025 = 45<sup>2</sup> ; le couple (45, 45) est exclu (d = e), et les 14 autres diviseurs se répartissent en 7 couples avec d &lt; e :</p>
<div class="calc">d ∈ {1, 3, 5, 9, 15, 25, 27} donnent n ∈ {1012, 336, 200, 108, 60, 28, 24}.</div>
<p>Il y a donc <strong>7</strong> entiers n.</p>
<p>Vérification : 24<sup>2</sup> + 2025 = 576 + 2025 = 2601 = 51<sup>2</sup>. ✔</p>`
  },
  {
    id: "algebre-36",
    theme: "algebre",
    niveau: 3,
    type: "demo",
    titre: `Trois cubes de somme nulle`,
    enonce: `<p>1) Soient a, b, c trois réels tels que a + b + c = 0. Démontrer que</p>
<div class="calc">a<sup>3</sup> + b<sup>3</sup> + c<sup>3</sup> = 3abc.</div>
<p>2) En déduire, sans calculer les cubes, la valeur de 13<sup>3</sup> − 5<sup>3</sup> − 8<sup>3</sup>.</p>`,
    figure: ``,
    pistes: [
      `<p>Piste 1 : teste l'identité avec a = 1, b = 2, c = −3.</p>`,
      `<p>Piste 2 : on peut éliminer une variable : c = −(a + b). Remplace c par cette expression.</p>`,
      `<p>Piste 3 : c<sup>3</sup> = −(a + b)<sup>3</sup> = −(a<sup>3</sup> + 3a<sup>2</sup>b + 3ab<sup>2</sup> + b<sup>3</sup>). Que vaut a<sup>3</sup> + b<sup>3</sup> + c<sup>3</sup> ?</p>`,
      `<p>Piste 4 : tu obtiens −3ab(a + b). Or a + b = −c. Pour la question 2, quels a, b, c choisir ?</p>`
    ],
    lecon: {
      titre: `Identités conditionnelles : éliminer une variable`,
      html: `<p>Une identité <strong>conditionnelle</strong> n'est vraie que sous une hypothèse (ici a + b + c = 0). Pour la démontrer, la méthode la plus sûre consiste à <strong>utiliser l'hypothèse pour éliminer une variable</strong>, puis à calculer.</p>
<p>Il faut connaître le développement du cube :</p>
<div class="calc">(a + b)<sup>3</sup> = a<sup>3</sup> + 3a<sup>2</sup>b + 3ab<sup>2</sup> + b<sup>3</sup> = a<sup>3</sup> + b<sup>3</sup> + 3ab(a + b).</div>
<p>Pour aller plus loin, il existe une identité générale (vraie pour tous a, b, c) :</p>
<div class="calc">a<sup>3</sup> + b<sup>3</sup> + c<sup>3</sup> − 3abc = (a + b + c)(a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> − ab − bc − ca).</div>
<div class="exemple">Exemple : (x − y)<sup>3</sup> + (y − z)<sup>3</sup> + (z − x)<sup>3</sup> = 3(x − y)(y − z)(z − x), car les trois nombres ont une somme nulle.</div>
<div class="astuce">Astuce olympique : face à un calcul numérique avec des cubes, cherche trois nombres de somme nulle ! Par exemple 13 + (−5) + (−8) = 0.</div>`
    },
    correction: `<p><strong>1)</strong> Soient a, b, c réels avec a + b + c = 0. Alors c = −(a + b), et</p>
<div class="calc">c<sup>3</sup> = −(a + b)<sup>3</sup> = −a<sup>3</sup> − 3a<sup>2</sup>b − 3ab<sup>2</sup> − b<sup>3</sup>.</div>
<p>Donc</p>
<div class="calc">a<sup>3</sup> + b<sup>3</sup> + c<sup>3</sup> = −3a<sup>2</sup>b − 3ab<sup>2</sup> = −3ab(a + b) = −3ab × (−c) = 3abc.</div>
<p><strong>2)</strong> Les nombres a = 13, b = −5, c = −8 ont une somme nulle. D'après 1) :</p>
<div class="calc">13<sup>3</sup> − 5<sup>3</sup> − 8<sup>3</sup> = 13<sup>3</sup> + (−5)<sup>3</sup> + (−8)<sup>3</sup> = 3 × 13 × (−5) × (−8) = 1560.</div>
<p>(Vérification : 2197 − 125 − 512 = 1560 ✔.)</p>
<p><strong>Pour aller plus loin :</strong> la réciproque est fausse : a = b = c = 1 vérifie a<sup>3</sup> + b<sup>3</sup> + c<sup>3</sup> = 3abc sans que a + b + c soit nul. L'identité générale de la leçon montre que la réciproque n'échoue que lorsque a = b = c.</p>`,
    bareme: [
      `Utiliser l'hypothèse pour exprimer c = −(a + b).`,
      `Développer correctement (a + b)<sup>3</sup>.`,
      `Factoriser −3ab(a + b) et remplacer a + b par −c pour conclure.`,
      `Appliquer à (13, −5, −8) et obtenir 1560.`
    ]
  },
  {
    id: "algebre-37",
    theme: "algebre",
    niveau: 3,
    type: "reponse",
    titre: `Le point le plus proche`,
    enonce: `<p>Les réels x et y vérifient x + 2y = 10.</p>
<p>Quelle est la plus petite valeur possible de x<sup>2</sup> + y<sup>2</sup> ?</p>`,
    figure: ``,
    reponse: ["20", "vingt"],
    reponseTexte: `20`,
    pistes: [
      `<p>Piste 1 : essaie quelques couples : (10, 0), (0, 5), (2, 4), (4, 3). Lequel donne la plus petite valeur ?</p>`,
      `<p>Piste 2 : il n'y a en fait qu'une seule vraie variable. Exprime x en fonction de y.</p>`,
      `<p>Piste 3 : x = 10 − 2y, donc x<sup>2</sup> + y<sup>2</sup> = (10 − 2y)<sup>2</sup> + y<sup>2</sup> = 5y<sup>2</sup> − 40y + 100.</p>`,
      `<p>Piste 4 : complète le carré : 5y<sup>2</sup> − 40y + 100 = 5(y − 4)<sup>2</sup> + …</p>`
    ],
    lecon: {
      titre: `Optimiser sous contrainte : substituer puis compléter le carré`,
      html: `<p>Pour trouver le minimum d'une expression de deux variables liées par une relation (une <strong>contrainte</strong>), on :</p>
<ol>
<li>utilise la contrainte pour exprimer une variable en fonction de l'autre ;</li>
<li>obtient une expression d'une seule variable, du type ay<sup>2</sup> + by + c ;</li>
<li>complète le carré : a(y − y<sub>0</sub>)<sup>2</sup> + m, dont le minimum (si a &gt; 0) est m, atteint en y = y<sub>0</sub>.</li>
</ol>
<div class="exemple">Exemple : si x + y = 6, alors x<sup>2</sup> + y<sup>2</sup> = x<sup>2</sup> + (6 − x)<sup>2</sup> = 2x<sup>2</sup> − 12x + 36 = 2(x − 3)<sup>2</sup> + 18 ≥ 18.</div>
<p><strong>Interprétation géométrique :</strong> x<sup>2</sup> + y<sup>2</sup> est le carré de la distance de l'origine O au point (x, y). On cherche donc le point de la droite x + 2y = 10 le plus proche de O : c'est le pied de la perpendiculaire.</p>
<div class="astuce">Astuce olympique : pour factoriser un coefficient, écris 5y<sup>2</sup> − 40y = 5(y<sup>2</sup> − 8y) = 5((y − 4)<sup>2</sup> − 16). Et n'oublie pas de donner le couple (x, y) qui réalise le minimum.</div>`
    },
    correction: `<p>De x + 2y = 10 on tire x = 10 − 2y. Alors</p>
<div class="calc">x<sup>2</sup> + y<sup>2</sup> = (10 − 2y)<sup>2</sup> + y<sup>2</sup> = 100 − 40y + 5y<sup>2</sup> = 5(y<sup>2</sup> − 8y) + 100 = 5(y − 4)<sup>2</sup> − 80 + 100 = 5(y − 4)<sup>2</sup> + 20.</div>
<p>Comme (y − 4)<sup>2</sup> ≥ 0, on a x<sup>2</sup> + y<sup>2</sup> ≥ 20 pour tout couple vérifiant la contrainte, avec égalité pour y = 4 et x = 10 − 8 = 2.</p>
<p>Le minimum est <strong>20</strong>, atteint en (x, y) = (2, 4). (Vérification : 2 + 8 = 10 et 4 + 16 = 20 ✔.)</p>
<p><strong>Pour aller plus loin :</strong> la distance de O à la droite est donc √20 = 2√5, et le point (2, 4) est bien sur la perpendiculaire à la droite passant par O (direction (1, 2)).</p>`
  },
  {
    id: "algebre-38",
    theme: "algebre",
    niveau: 3,
    type: "demo",
    titre: `Une inégalité à deux variables`,
    enonce: `<p>Démontrer que, pour tous réels x et y,</p>
<div class="calc">x<sup>2</sup> + y<sup>2</sup> + 1 ≥ xy + x + y,</div>
<p>et déterminer tous les cas d'égalité.</p>`,
    figure: ``,
    pistes: [
      `<p>Piste 1 : cela ressemble à a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> ≥ ab + bc + ca. Quel choix de a, b, c donne exactement l'inégalité demandée ?</p>`,
      `<p>Piste 2 : avec a = x, b = y, c = 1 : a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup> + 1 et ab + bc + ca = xy + y + x.</p>`,
      `<p>Piste 3 : pour une preuve autonome, multiplie la différence par 2 et essaie de l'écrire comme une somme de trois carrés.</p>`,
      `<p>Piste 4 : 2(x<sup>2</sup> + y<sup>2</sup> + 1 − xy − x − y) = (x − y)<sup>2</sup> + (x − 1)<sup>2</sup> + (y − 1)<sup>2</sup>. Vérifie en développant.</p>`
    ],
    lecon: {
      titre: `Rappel : écrire une différence comme somme de carrés`,
      html: `<p>La méthode reine pour prouver une inégalité polynomiale P ≥ Q : montrer que P − Q (éventuellement multiplié par une constante positive) est une <strong>somme de carrés</strong>.</p>
<p>Identité clé, déjà rencontrée :</p>
<div class="calc">2(a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> − ab − bc − ca) = (a − b)<sup>2</sup> + (b − c)<sup>2</sup> + (c − a)<sup>2</sup>.</div>
<p>Le point nouveau : on peut <strong>spécialiser</strong> une variable en un nombre (ici c = 1) pour obtenir de nouvelles inégalités « déguisées ».</p>
<div class="exemple">Exemple : avec c = 2 : x<sup>2</sup> + y<sup>2</sup> + 4 ≥ xy + 2x + 2y pour tous réels x, y.</div>
<div class="astuce">Astuce olympique : pour deviner les carrés, cherche d'abord le cas d'égalité (ici x = y = 1, en testant). Les carrés à utiliser s'annulent en ce point : (x − y), (x − 1), (y − 1).</div>`
    },
    correction: `<p>Pour tous réels x, y, on développe :</p>
<div class="calc">(x − y)<sup>2</sup> + (x − 1)<sup>2</sup> + (y − 1)<sup>2</sup> = x<sup>2</sup> − 2xy + y<sup>2</sup> + x<sup>2</sup> − 2x + 1 + y<sup>2</sup> − 2y + 1 = 2x<sup>2</sup> + 2y<sup>2</sup> + 2 − 2xy − 2x − 2y.</div>
<p>Donc</p>
<div class="calc">x<sup>2</sup> + y<sup>2</sup> + 1 − (xy + x + y) = ½ [(x − y)<sup>2</sup> + (x − 1)<sup>2</sup> + (y − 1)<sup>2</sup>] ≥ 0,</div>
<p>car une somme de carrés est positive ou nule. D'où x<sup>2</sup> + y<sup>2</sup> + 1 ≥ xy + x + y.</p>
<p><strong>Cas d'égalité.</strong> Il y a égalité si et seulement si les trois carrés sont nuls : x = y, x = 1 et y = 1, soit <strong>x = y = 1</strong>. (Vérification : 1 + 1 + 1 = 3 = 1 + 1 + 1 ✔.)</p>
<p><strong>Erreur fréquente :</strong> oublier le facteur ½ ou mal développer (x − y)<sup>2</sup>. Vérifie toujours ton identité en l'appliquant à un couple numérique, par exemple (x, y) = (2, 0) : 5 − 2 = 3 et ½(4 + 1 + 1) = 3 ✔.</p>`,
    bareme: [
      `Proposer une décomposition de la différence en somme de carrés (ou se ramener à a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> ≥ ab + bc + ca avec c = 1, en le justifiant).`,
      `Vérifier le développement de façon lisible.`,
      `Conclure grâce à la positivité des carrés.`,
      `Déterminer l'unique cas d'égalité x = y = 1.`
    ]
  },
  {
    id: "algebre-39",
    theme: "algebre",
    niveau: 3,
    type: "reponse",
    titre: `Un produit télescopique`,
    enonce: `<p>Calculer le produit</p>
<div class="calc">P = (1 − 1/2<sup>2</sup>)(1 − 1/3<sup>2</sup>)(1 − 1/4<sup>2</sup>) × … × (1 − 1/2026<sup>2</sup>).</div>
<p>Donner le résultat sous forme de fraction irréductible.</p>`,
    figure: ``,
    reponse: ["2027/4052"],
    reponseTexte: `2027/4052`,
    pistes: [
      `<p>Piste 1 : calcule les produits partiels : (1 − 1/4), puis (1 − 1/4)(1 − 1/9), puis avec (1 − 1/16). Vois-tu une formule ?</p>`,
      `<p>Piste 2 : 1 − 1/k<sup>2</sup> est une différence de deux carrés ! Factorise-la.</p>`,
      `<p>Piste 3 : 1 − 1/k<sup>2</sup> = (1 − 1/k)(1 + 1/k) = ((k − 1)/k) × ((k + 1)/k).</p>`,
      `<p>Piste 4 : sépare le produit en deux : Π(k − 1)/k et Π(k + 1)/k, pour k de 2 à 2026. Chacun se simplifie en cascade.</p>`
    ],
    lecon: {
      titre: `Produits télescopiques`,
      html: `<p>Le télescopage existe aussi pour les <strong>produits</strong> : si chaque facteur s'écrit b<sub>k+1</sub>/b<sub>k</sub>, alors</p>
<div class="calc">(b<sub>2</sub>/b<sub>1</sub>) × (b<sub>3</sub>/b<sub>2</sub>) × … × (b<sub>n+1</sub>/b<sub>n</sub>) = b<sub>n+1</sub>/b<sub>1</sub>.</div>
<p>Exemples fondamentaux :</p>
<ul>
<li>(1/2) × (2/3) × (3/4) × … × ((n − 1)/n) = 1/n ;</li>
<li>(3/2) × (4/3) × … × ((n + 1)/n) = (n + 1)/2.</li>
</ul>
<p>Pour y arriver, on <strong>factorise</strong> chaque facteur (souvent avec a<sup>2</sup> − b<sup>2</sup>), puis on regroupe les morceaux de même type.</p>
<div class="exemple">Exemple : (1 − 1/2<sup>2</sup>)(1 − 1/3<sup>2</sup>)(1 − 1/4<sup>2</sup>) = (3/4)(8/9)(15/16) = 5/8, et la formule (n + 1)/(2n) avec n = 4 donne 5/8 ✔.</div>
<div class="astuce">Astuce olympique : écris les premiers et derniers facteurs en entier, sous forme de fractions, et barre ce qui se simplifie. Le schéma de simplification devient évident.</div>`
    },
    correction: `<p>Pour tout k ≥ 2 :</p>
<div class="calc">1 − 1/k<sup>2</sup> = (1 − 1/k)(1 + 1/k) = ((k − 1)/k) × ((k + 1)/k).</div>
<p>Donc P = A × B avec</p>
<div class="calc">A = (1/2)(2/3)(3/4) … (2025/2026) = 1/2026,<br>B = (3/2)(4/3)(5/4) … (2027/2026) = 2027/2.</div>
<p>(Dans A, chaque numérateur se simplifie avec le dénominateur précédent ; de même dans B.) Ainsi</p>
<div class="calc">P = (1/2026) × (2027/2) = 2027/4052.</div>
<p>La fraction est irréductible car 2027 est premier et ne divise pas 4052 = 2 × 2026.</p>
<p><strong>Pour aller plus loin :</strong> en général, (1 − 1/2<sup>2</sup>) … (1 − 1/n<sup>2</sup>) = (n + 1)/(2n), qui se rapproche de 1/2 quand n devient grand.</p>`
  },
  {
    id: "algebre-40",
    theme: "algebre",
    niveau: 3,
    type: "demo",
    titre: `Produit égal à une somme`,
    enonce: `<p>Trouver tous les couples d'entiers relatifs (x, y) tels que</p>
<div class="calc">xy = 2x + 3y.</div>`,
    figure: ``,
    pistes: [
      `<p>Piste 1 : trouve quelques solutions à la main (par exemple avec x = 0, ou y = 5). Y en a-t-il une infinité ?</p>`,
      `<p>Piste 2 : fais tout passer à gauche : xy − 2x − 3y = 0. Essaie de factoriser comme un produit (x − ?)(y − ?).</p>`,
      `<p>Piste 3 : développe (x − 3)(y − 2). Compare avec xy − 2x − 3y.</p>`,
      `<p>Piste 4 : (x − 3)(y − 2) = xy − 2x − 3y + 6, donc l'équation équivaut à (x − 3)(y − 2) = 6. Il reste à lister toutes les façons d'écrire 6 comme produit de deux entiers relatifs.</p>`
    ],
    lecon: {
      titre: `La factorisation « à la Simon » : xy + ax + by`,
      html: `<p>Une équation en entiers de la forme xy + ax + by = c se résout en <strong>complétant le produit</strong> :</p>
<div class="calc">xy + ax + by + ab = (x + b)(y + a).</div>
<p>On ajoute donc ab des deux côtés : (x + b)(y + a) = c + ab. Le membre de droite est un entier <strong>fixe</strong>, qui n'a qu'un nombre fini de diviseurs : on liste les cas.</p>
<p>Méthode :</p>
<ol>
<li>Factoriser pour obtenir (x + b)(y + a) = N.</li>
<li>Lister <strong>tous</strong> les diviseurs d de N, positifs <strong>et négatifs</strong>.</li>
<li>Pour chacun : x + b = d et y + a = N/d.</li>
<li>Vérifier et présenter les solutions.</li>
</ol>
<div class="exemple">Exemple : xy = x + y ⟺ (x − 1)(y − 1) = 1, donc x − 1 = y − 1 = ±1 : les solutions sont (2, 2) et (0, 0).</div>
<div class="astuce">Astuce olympique : cette technique (souvent appelée « factorisation de Simon ») est un grand classique de fin de sujet. Le réflexe : dès qu'une équation en entiers mélange un produit xy et des termes en x et y, cherche à la mettre sous la forme (x + b)(y + a) = N.</div>`
    },
    correction: `<p>Pour tous entiers x, y :</p>
<div class="calc">xy = 2x + 3y ⟺ xy − 2x − 3y + 6 = 6 ⟺ (x − 3)(y − 2) = 6.</div>
<p>(On vérifie : (x − 3)(y − 2) = xy − 2x − 3y + 6.)</p>
<p>Ainsi x − 3 et y − 2 sont deux entiers de produit 6. Donc x − 3 = d est un diviseur de 6 et y − 2 = 6/d, avec</p>
<div class="calc">d ∈ {−6, −3, −2, −1, 1, 2, 3, 6}.</div>
<p>On obtient le tableau (x = 3 + d, y = 2 + 6/d) :</p>
<div class="calc">d = 1 : (4, 8) ; d = 2 : (5, 5) ; d = 3 : (6, 4) ; d = 6 : (9, 3) ;<br>d = −1 : (2, −4) ; d = −2 : (1, −1) ; d = −3 : (0, 0) ; d = −6 : (−3, 1).</div>
<p>Réciproquement, chacun de ces couples vérifie (x − 3)(y − 2) = 6, donc l'équation de départ (par équivalence). Par exemple (4, 8) : 32 = 8 + 24 ✔ ; (−3, 1) : −3 = −6 + 3 ✔.</p>
<p>Il y a exactement <strong>8 solutions</strong> : (4, 8), (5, 5), (6, 4), (9, 3), (2, −4), (1, −1), (0, 0), (−3, 1).</p>
<p><strong>Erreur fréquente :</strong> oublier les diviseurs négatifs et ne trouver que 4 solutions.</p>`,
    bareme: [
      `Transformer l'équation en (x − 3)(y − 2) = 6 (avec vérification du développement).`,
      `Justifier que x − 3 est un diviseur de 6 et lister les 8 diviseurs relatifs.`,
      `Calculer les 8 couples correspondants sans erreur.`,
      `Justifier la réciproque (équivalences ou vérification) et conclure.`
    ]
  }
]);
