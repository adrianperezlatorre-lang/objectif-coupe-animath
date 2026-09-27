window.PROBLEMES = (window.PROBLEMES || []).concat([
  {
    id: "arith-01",
    theme: "arith",
    niveau: 1,
    type: "reponse",
    titre: `Multiples choisis`,
    enonce: `<p>Combien y a-t-il d'entiers compris entre 1 et 100 (inclus) qui sont divisibles par 3 mais <strong>pas</strong> par 5 ?</p>`,
    figure: ``,
    reponse: ["27", "vingt-sept"],
    reponseTexte: `27`,
    pistes: [
      `<p>Combien y a-t-il de multiples de 3 entre 1 et 100 ? Le plus grand est 99 = 3 × 33.</p>`,
      `<p>Parmi ces multiples de 3, il faut retirer ceux qui sont aussi multiples de 5. Un nombre multiple de 3 et de 5, c'est un multiple de quel nombre ?</p>`,
      `<p>Les multiples de 15 entre 1 et 100 sont 15, 30, 45, 60, 75, 90. Combien y en a-t-il ?</p>`,
      `<p>Il reste à faire la soustraction : (nombre de multiples de 3) − (nombre de multiples de 15).</p>`
    ],
    lecon: {
      titre: `Compter les multiples d'un nombre`,
      html: `<p>Entre 1 et N, le nombre de multiples de k est le <strong>quotient entier</strong> de N par k, c'est-à-dire la partie entière de N ÷ k.</p>
<div class="exemple">Entre 1 et 100 : multiples de 7 → 100 ÷ 7 = 14,28… donc 14 multiples (le dernier est 98 = 7 × 14).</div>
<p>Pour compter les nombres qui sont multiples de a <em>et</em> de b, on compte les multiples du <strong>PPCM</strong> de a et b. Quand a et b n'ont pas de diviseur commun (comme 3 et 5), le PPCM est simplement a × b.</p>
<p>Pour « multiple de a mais pas de b », on part des multiples de a et on enlève ceux qui sont aussi multiples de b.</p>
<div class="astuce">Astuce olympique : pour « multiple de a <em>ou</em> de b », on additionne puis on retire ce qu'on a compté deux fois : |A ou B| = |A| + |B| − |A et B|. C'est le <strong>principe d'inclusion-exclusion</strong>.</div>`
    },
    correction: `<p>Les multiples de 3 entre 1 et 100 sont 3, 6, …, 99 = 3 × 33 : il y en a <strong>33</strong>.</p>
<p>Un nombre divisible à la fois par 3 et par 5 est divisible par 15 (car 3 et 5 sont premiers entre eux). Les multiples de 15 entre 1 et 100 sont 15, 30, 45, 60, 75, 90 : il y en a <strong>6</strong> (100 ÷ 15 ≈ 6,67).</p>
<div class="calc">33 − 6 = 27</div>
<p>Il y a donc <strong>27</strong> entiers qui conviennent.</p>
<p><em>Erreur fréquente :</em> retirer les 20 multiples de 5 au lieu des 6 multiples de 15. On ne retire que ceux qui avaient été comptés, c'est-à-dire les multiples de 3 qui sont aussi multiples de 5.</p>`
  },
  {
    id: "arith-02",
    theme: "arith",
    niveau: 1,
    type: "demo",
    titre: `Cinq impairs pour faire 100 ?`,
    enonce: `<p>Léa affirme qu'elle a trouvé cinq nombres entiers <strong>impairs</strong> dont la somme vaut 100.</p>
<p>Démontrer que Léa se trompe forcément.</p>`,
    figure: ``,
    pistes: [
      `<p>Essaie quelques exemples : 1 + 3 + 5 + 7 + 9, puis 11 + 13 + 15 + 17 + 19… Que remarques-tu sur la parité du résultat ?</p>`,
      `<p>Que vaut la somme de deux nombres impairs : paire ou impaire ? Et la somme de trois impairs ?</p>`,
      `<p>Écris chaque nombre impair sous la forme 2k + 1 (avec k entier). Que devient la somme des cinq nombres ?</p>`,
      `<p>La somme s'écrit 2 × (quelque chose) + 5. Il reste à montrer qu'un tel nombre est impair, donc différent de 100.</p>`
    ],
    lecon: {
      titre: `La parité : pair ou impair ?`,
      html: `<p>Un entier est <strong>pair</strong> s'il s'écrit 2k, <strong>impair</strong> s'il s'écrit 2k + 1 (k entier).</p>
<p>Les règles de calcul :</p>
<ul><li>pair + pair = pair, impair + impair = pair, pair + impair = impair ;</li>
<li>pair × n'importe quoi = pair, impair × impair = impair.</li></ul>
<p>Conséquence importante : une somme de plusieurs nombres est impaire si et seulement si elle contient un <strong>nombre impair de termes impairs</strong>.</p>
<div class="exemple">7 + 9 + 11 contient 3 termes impairs : la somme (27) est impaire.</div>
<div class="astuce">Astuce olympique : pour montrer qu'une chose est <em>impossible</em>, la parité est souvent le premier outil à essayer. On calcule la parité des deux côtés d'une égalité : si elles diffèrent, l'égalité est impossible.</div>`
    },
    correction: `<p>Supposons que les cinq nombres impairs soient 2a + 1, 2b + 1, 2c + 1, 2d + 1, 2e + 1 avec a, b, c, d, e entiers.</p>
<p>Leur somme vaut :</p>
<div class="calc">(2a + 1) + (2b + 1) + (2c + 1) + (2d + 1) + (2e + 1) = 2(a + b + c + d + e) + 5 = 2(a + b + c + d + e + 2) + 1</div>
<p>Elle s'écrit sous la forme 2K + 1 avec K = a + b + c + d + e + 2 entier : elle est donc <strong>impaire</strong>.</p>
<p>Or 100 est pair. Une somme de cinq nombres impairs ne peut donc jamais valoir 100 : Léa se trompe.</p>
<p><em>Pour aller plus loin :</em> avec six nombres impairs, c'est possible (par exemple 1 + 1 + 1 + 1 + 1 + 95). Un nombre <strong>pair</strong> de termes impairs donne une somme paire.</p>`,
    bareme: [
      `Écrire correctement un nombre impair sous la forme 2k + 1.`,
      `Calculer la somme et la mettre sous la forme 2K + 1.`,
      `En déduire que la somme est impaire.`,
      `Conclure que la somme ne peut pas être égale à 100, qui est pair.`
    ]
  },
  {
    id: "arith-03",
    theme: "arith",
    niveau: 1,
    type: "reponse",
    titre: `Le chiffre caché`,
    enonce: `<p>Dans le nombre à quatre chiffres <span class="m">47□2</span>, le chiffre des dizaines a été effacé. On sait que ce nombre est divisible par 36.</p>
<p>Quel est le chiffre effacé ?</p>`,
    figure: ``,
    reponse: ["5", "cinq"],
    reponseTexte: `5`,
    pistes: [
      `<p>36 = 4 × 9, et 4 et 9 n'ont pas de diviseur commun autre que 1. Être divisible par 36 revient donc à être divisible par 4 <em>et</em> par 9.</p>`,
      `<p>Critère de divisibilité par 9 : la somme des chiffres doit être divisible par 9. Que vaut 4 + 7 + □ + 2 ?</p>`,
      `<p>4 + 7 + 2 = 13. Quel chiffre ajouter à 13 pour obtenir un multiple de 9 ?</p>`,
      `<p>Il reste à vérifier la divisibilité par 4 : un nombre est divisible par 4 si le nombre formé par ses deux derniers chiffres l'est.</p>`
    ],
    lecon: {
      titre: `Les critères de divisibilité`,
      html: `<p>Pour savoir si un nombre est divisible par…</p>
<ul><li><strong>2</strong> : son chiffre des unités est pair ;</li>
<li><strong>5</strong> : il se termine par 0 ou 5 ;</li>
<li><strong>4</strong> : le nombre formé par ses <em>deux</em> derniers chiffres est divisible par 4 ;</li>
<li><strong>8</strong> : le nombre formé par ses <em>trois</em> derniers chiffres est divisible par 8 ;</li>
<li><strong>3</strong> (resp. <strong>9</strong>) : la somme de ses chiffres est divisible par 3 (resp. 9) ;</li>
<li><strong>11</strong> : la somme alternée des chiffres (unités − dizaines + centaines − …) est divisible par 11.</li></ul>
<p>Pour un diviseur composé, on le découpe en facteurs <strong>premiers entre eux</strong> : divisible par 36 ⇔ divisible par 4 et par 9 ; divisible par 6 ⇔ divisible par 2 et par 3.</p>
<div class="astuce">Attention : 36 = 3 × 12 ne marche pas ! 3 et 12 ont le facteur commun 3 : le nombre 12 est divisible par 3 et par 12 sans être divisible par 36.</div>`
    },
    correction: `<p>Notons a le chiffre effacé. Comme 36 = 4 × 9 avec 4 et 9 premiers entre eux, le nombre est divisible par 36 si et seulement s'il est divisible par 4 et par 9.</p>
<p><strong>Divisibilité par 9.</strong> La somme des chiffres 4 + 7 + a + 2 = 13 + a doit être un multiple de 9. Comme 0 ≤ a ≤ 9, on a 13 ≤ 13 + a ≤ 22, et le seul multiple de 9 dans cet intervalle est 18. Donc a = 5.</p>
<p><strong>Divisibilité par 4.</strong> Les deux derniers chiffres forment 52 = 4 × 13 : c'est bien divisible par 4.</p>
<p>Le chiffre effacé est <strong>5</strong>, et on vérifie : 4752 = 36 × 132.</p>
<p><em>Remarque :</em> ici la condition « par 9 » suffisait à trouver a ; mais il fallait vérifier la condition « par 4 », sinon il n'y aurait eu aucune solution !</p>`
  },
  {
    id: "arith-04",
    theme: "arith",
    niveau: 1,
    type: "reponse",
    titre: `Les diviseurs de 360`,
    enonce: `<p>Combien le nombre 360 possède-t-il de diviseurs positifs (en comptant 1 et 360) ?</p>`,
    figure: ``,
    reponse: ["24", "vingt-quatre"],
    reponseTexte: `24`,
    pistes: [
      `<p>Commence par décomposer 360 en produit de facteurs premiers.</p>`,
      `<p>360 = 2<sup>3</sup> × 3<sup>2</sup> × 5. Un diviseur de 360 s'écrit 2<sup>a</sup> × 3<sup>b</sup> × 5<sup>c</sup>. Quelles valeurs peuvent prendre a, b et c ?</p>`,
      `<p>a peut valoir 0, 1, 2 ou 3 (4 choix). Combien de choix pour b ? pour c ?</p>`,
      `<p>Chaque choix de (a, b, c) donne un diviseur différent : il reste à multiplier les nombres de choix.</p>`
    ],
    lecon: {
      titre: `Compter les diviseurs grâce à la décomposition`,
      html: `<p>Tout entier n ≥ 2 s'écrit de façon unique comme produit de nombres premiers :</p>
<div class="calc">n = p<sub>1</sub><sup>a<sub>1</sub></sup> × p<sub>2</sub><sup>a<sub>2</sub></sup> × … × p<sub>k</sub><sup>a<sub>k</sub></sup></div>
<p>Les diviseurs de n sont exactement les nombres p<sub>1</sub><sup>b<sub>1</sub></sup> × … × p<sub>k</sub><sup>b<sub>k</sub></sup> avec 0 ≤ b<sub>i</sub> ≤ a<sub>i</sub>. Il y a (a<sub>i</sub> + 1) choix pour chaque exposant, d'où :</p>
<div class="calc">nombre de diviseurs = (a<sub>1</sub> + 1)(a<sub>2</sub> + 1)…(a<sub>k</sub> + 1)</div>
<div class="exemple">72 = 2<sup>3</sup> × 3<sup>2</sup> a (3 + 1)(2 + 1) = 12 diviseurs : 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72.</div>
<div class="astuce">Astuce olympique : ne pas oublier l'exposant 0 ! C'est lui qui donne le « + 1 » dans la formule.</div>`
    },
    correction: `<p>On décompose : 360 = 36 × 10 = 2<sup>2</sup> × 3<sup>2</sup> × 2 × 5 = 2<sup>3</sup> × 3<sup>2</sup> × 5<sup>1</sup>.</p>
<p>Un diviseur de 360 s'écrit 2<sup>a</sup> × 3<sup>b</sup> × 5<sup>c</sup> avec a ∈ {0, 1, 2, 3} (4 choix), b ∈ {0, 1, 2} (3 choix), c ∈ {0, 1} (2 choix). Par unicité de la décomposition, des choix différents donnent des diviseurs différents.</p>
<div class="calc">4 × 3 × 2 = 24</div>
<p>360 possède <strong>24</strong> diviseurs.</p>
<p><em>Pour aller plus loin :</em> c'est pour cela que les Babyloniens aimaient 360 (degrés) et 60 (minutes) : ce sont des nombres qui se partagent de très nombreuses façons.</p>`
  },
  {
    id: "arith-05",
    theme: "arith",
    niveau: 1,
    type: "demo",
    titre: `Pourquoi le critère de 3 marche`,
    enonce: `<p>On considère un nombre à trois chiffres, noté <span class="m">abc</span> (a est le chiffre des centaines, b celui des dizaines, c celui des unités).</p>
<p>Démontrer que ce nombre est divisible par 3 si et seulement si la somme <span class="m">a + b + c</span> est divisible par 3.</p>`,
    figure: ``,
    pistes: [
      `<p>Que vaut vraiment le nombre abc en fonction de a, b et c ? Par exemple, 472 = 4 × 100 + 7 × 10 + 2.</p>`,
      `<p>Écris 100 = 99 + 1 et 10 = 9 + 1. Que devient 100a + 10b + c ?</p>`,
      `<p>Tu dois obtenir abc = 99a + 9b + (a + b + c). Que peux-tu dire de 99a + 9b ?</p>`,
      `<p>abc et a + b + c diffèrent d'un multiple de 3. Il reste à montrer les deux sens : si l'un est multiple de 3, l'autre aussi.</p>`
    ],
    lecon: {
      titre: `L'écriture décimale d'un nombre`,
      html: `<p>Un nombre écrit avec les chiffres a, b, c (dans cet ordre) vaut :</p>
<div class="calc">abc = 100a + 10b + c</div>
<p>On note souvent ce nombre avec une barre au-dessus pour ne pas le confondre avec le produit a × b × c.</p>
<p>Cette écriture transforme un problème « de chiffres » en un problème d'algèbre. On peut alors factoriser, comparer, etc.</p>
<div class="exemple">Le nombre ab plus le nombre ba : (10a + b) + (10b + a) = 11(a + b), toujours multiple de 11.</div>
<p>Propriété utile : si deux nombres diffèrent d'un multiple de d, alors l'un est divisible par d si et seulement si l'autre l'est.</p>
<div class="astuce">Astuce olympique : 10, 100, 1000… valent tous « 1 de plus qu'un multiple de 9 ». C'est la clé des critères de 3 et de 9. De même, 10 = 11 − 1 et 100 = 99 + 1 expliquent le critère de 11.</div>`
    },
    correction: `<p>Le nombre abc vaut :</p>
<div class="calc">abc = 100a + 10b + c = (99a + 9b) + (a + b + c) = 3(33a + 3b) + (a + b + c)</div>
<p>Notons M = 3(33a + 3b), qui est un multiple de 3. On a donc <span class="m">abc = M + (a + b + c)</span>.</p>
<p><strong>Sens direct.</strong> Si abc est divisible par 3, alors a + b + c = abc − M est une différence de deux multiples de 3 : c'est un multiple de 3.</p>
<p><strong>Réciproque.</strong> Si a + b + c est divisible par 3, alors abc = M + (a + b + c) est une somme de deux multiples de 3 : c'est un multiple de 3.</p>
<p>On a bien l'équivalence demandée.</p>
<p><em>Pour aller plus loin :</em> la même preuve montre le critère de divisibilité par 9 (car 99a + 9b = 9(11a + b)), et marche pour un nombre d'un nombre quelconque de chiffres.</p>`,
    bareme: [
      `Écrire abc = 100a + 10b + c.`,
      `Faire apparaître abc = 99a + 9b + (a + b + c) et justifier que 99a + 9b est multiple de 3.`,
      `Démontrer le sens direct.`,
      `Démontrer la réciproque.`
    ]
  },
  {
    id: "arith-06",
    theme: "arith",
    niveau: 1,
    type: "reponse",
    titre: `Le dernier chiffre de 7 puissance 2026`,
    enonce: `<p>Quel est le chiffre des unités du nombre <span class="m">7<sup>2026</sup></span> ?</p>`,
    figure: ``,
    reponse: ["9", "neuf"],
    reponseTexte: `9`,
    pistes: [
      `<p>Calcule les premières puissances de 7 : 7, 49, 343, 2401… Regarde seulement le chiffre des unités.</p>`,
      `<p>Le chiffre des unités d'un produit ne dépend que des chiffres des unités des facteurs. Tu peux donc ne garder que le dernier chiffre à chaque étape.</p>`,
      `<p>Les derniers chiffres sont 7, 9, 3, 1, puis 7, 9, 3, 1… Le motif se répète tous les combien ?</p>`,
      `<p>Il reste à trouver la position de 2026 dans ce cycle de longueur 4 : quel est le reste de 2026 dans la division par 4 ?</p>`
    ],
    lecon: {
      titre: `Les cycles de derniers chiffres`,
      html: `<p>Le chiffre des unités d'un produit ne dépend que des chiffres des unités des facteurs : 37 × 58 se termine comme 7 × 8 = 56, donc par 6.</p>
<p>Pour les puissances successives d'un nombre, les derniers chiffres finissent toujours par <strong>se répéter</strong> (il n'y a que 10 chiffres possibles).</p>
<ul><li>2 : 2, 4, 8, 6, 2, 4, 8, 6… (cycle de longueur 4)</li>
<li>3 : 3, 9, 7, 1… (longueur 4)</li>
<li>4 : 4, 6… (longueur 2) ; 9 : 9, 1… (longueur 2)</li>
<li>5 et 6 : toujours 5 ou toujours 6.</li></ul>
<p>Pour trouver le chiffre des unités de a<sup>n</sup>, on repère le cycle puis on calcule le <strong>reste</strong> de n dans la division par la longueur du cycle.</p>
<div class="astuce">Astuce olympique : attention au reste 0 ! Si n est un multiple de 4, on tombe sur le <em>dernier</em> élément du cycle (ex. 7<sup>4</sup> se termine par 1), pas sur le premier.</div>`
    },
    correction: `<p>Regardons le chiffre des unités des puissances de 7 :</p>
<div class="calc">7<sup>1</sup> → 7, 7<sup>2</sup> = 49 → 9, 7<sup>3</sup> = 343 → 3, 7<sup>4</sup> = 2401 → 1</div>
<p>Comme 7<sup>4</sup> se termine par 1, multiplier par 7<sup>4</sup> ne change pas le chiffre des unités : le cycle 7, 9, 3, 1 se répète avec une période 4.</p>
<p>Or 2026 = 4 × 506 + 2. Donc 7<sup>2026</sup> = (7<sup>4</sup>)<sup>506</sup> × 7<sup>2</sup>. Le premier facteur se termine par 1, le second par 9.</p>
<p>Le chiffre des unités de 7<sup>2026</sup> est <strong>9</strong>.</p>
<p><em>Erreur fréquente :</em> se tromper de rang dans le cycle. Un bon réflexe : vérifier sur un petit exposant ayant le même reste, par exemple 7<sup>2</sup> = 49.</p>`
  },
  {
    id: "arith-07",
    theme: "arith",
    niveau: 1,
    type: "reponse",
    titre: `Deux bus au terminus`,
    enonce: `<p>Au terminus, un bus de la ligne A part toutes les 12 minutes et un bus de la ligne B toutes les 18 minutes. À 8 h 00 précises, un bus de chaque ligne part en même temps.</p>
<p>Entre 8 h 00 et 20 h 00 (ces deux horaires inclus), combien de fois un bus A et un bus B partent-ils en même temps ?</p>`,
    figure: ``,
    reponse: ["21", "vingt-et-un", "vingtetun", "vingt-etun"],
    reponseTexte: `21`,
    pistes: [
      `<p>Liste les départs de la ligne A (0, 12, 24, 36… minutes après 8 h) et de la ligne B (0, 18, 36…). Quand se retrouvent-ils pour la première fois après 8 h ?</p>`,
      `<p>Les départs simultanés ont lieu aux multiples communs de 12 et de 18. Quel est le plus petit multiple commun non nul ?</p>`,
      `<p>Le PPCM de 12 et 18 est 36 : les bus se retrouvent toutes les 36 minutes. Combien de minutes y a-t-il entre 8 h et 20 h ?</p>`,
      `<p>720 ÷ 36 = 20 intervalles. Attention : combien de départs cela fait-il, en comptant celui de 8 h ?</p>`
    ],
    lecon: {
      titre: `Le PPCM et les phénomènes périodiques`,
      html: `<p>Le <strong>PPCM</strong> (plus petit commun multiple) de deux entiers a et b est le plus petit entier strictement positif divisible à la fois par a et par b. Les multiples communs de a et b sont exactement les multiples du PPCM.</p>
<p>Méthode avec les décompositions : on prend chaque facteur premier avec son <strong>plus grand</strong> exposant.</p>
<div class="exemple">12 = 2<sup>2</sup> × 3 et 18 = 2 × 3<sup>2</sup>, donc PPCM(12, 18) = 2<sup>2</sup> × 3<sup>2</sup> = 36.</div>
<p>(Pour le PGCD, on prend au contraire le <strong>plus petit</strong> exposant : PGCD(12, 18) = 2 × 3 = 6.)</p>
<p>Deux événements qui se répètent toutes les a et toutes les b minutes, et qui coïncident une fois, coïncident ensuite exactement toutes les PPCM(a, b) minutes.</p>
<div class="astuce">Astuce olympique : attention aux « piquets et intervalles » ! Sur une durée de 20 intervalles, il y a 21 instants si on compte les deux extrémités.</div>`
    },
    correction: `<p>Mesurons le temps en minutes après 8 h 00. Les bus A partent aux multiples de 12, les bus B aux multiples de 18. Ils partent ensemble aux instants qui sont à la fois multiples de 12 et de 18, c'est-à-dire aux multiples de PPCM(12, 18).</p>
<p>Avec 12 = 2<sup>2</sup> × 3 et 18 = 2 × 3<sup>2</sup> : PPCM(12, 18) = 2<sup>2</sup> × 3<sup>2</sup> = 36.</p>
<p>Entre 8 h et 20 h, il s'écoule 12 × 60 = 720 minutes. Les départs simultanés ont lieu aux instants 0, 36, 72, …, 720 = 36 × 20, soit 36k pour k = 0, 1, …, 20.</p>
<p>Cela fait <strong>21</strong> départs simultanés.</p>
<p><em>Erreur fréquente :</em> répondre 20 en oubliant le départ de 8 h 00, ou multiplier 12 × 18 = 216 au lieu de prendre le PPCM.</p>`
  },
  {
    id: "arith-08",
    theme: "arith",
    niveau: 1,
    type: "demo",
    titre: `Trois consécutifs`,
    enonce: `<p>Démontrer que le produit de trois entiers consécutifs est toujours divisible par 6.</p>
<p>(Par exemple, 4 × 5 × 6 = 120 = 6 × 20.)</p>`,
    figure: ``,
    pistes: [
      `<p>6 = 2 × 3. Il suffit de montrer que le produit est divisible par 2 et par 3. Pourquoi cela suffit-il ?</p>`,
      `<p>Parmi deux entiers consécutifs, y a-t-il toujours un nombre pair ?</p>`,
      `<p>Parmi trois entiers consécutifs n, n + 1, n + 2, y a-t-il toujours un multiple de 3 ? Distingue les cas selon le reste de n dans la division par 3.</p>`,
      `<p>Si n = 3k, c'est n ; si n = 3k + 1, c'est… ; si n = 3k + 2, c'est… Il reste à conclure avec le fait que 2 et 3 sont premiers entre eux.</p>`
    ],
    lecon: {
      titre: `Raisonner par disjonction de cas sur les restes`,
      html: `<p>Tout entier n s'écrit, selon son reste dans la division par 3, sous l'une des formes <strong>3k, 3k + 1 ou 3k + 2</strong>. Plus généralement, dans la division par d, il y a d formes possibles.</p>
<p>On peut alors traiter chaque cas séparément : c'est une <strong>disjonction de cas</strong>, un raisonnement parfaitement rigoureux tant que l'on n'oublie aucun cas.</p>
<p>Fait à retenir : parmi d entiers consécutifs, il y a toujours <strong>exactement un</strong> multiple de d.</p>
<div class="exemple">Parmi 17, 18, 19, 20 (4 consécutifs), un seul est multiple de 4 : 20.</div>
<p>Et pour combiner : si un nombre est divisible par a et par b, avec a et b <strong>premiers entre eux</strong>, alors il est divisible par a × b.</p>
<div class="astuce">Astuce olympique : le produit de k entiers consécutifs est toujours divisible par k! = 1 × 2 × … × k. Par exemple, 4 consécutifs donnent un multiple de 24.</div>`
    },
    correction: `<p>Soit n un entier et P = n(n + 1)(n + 2).</p>
<p><strong>Divisibilité par 2.</strong> Parmi n et n + 1, l'un est pair (s'ils étaient tous deux impairs, leur différence 1 serait paire). Donc P est pair.</p>
<p><strong>Divisibilité par 3.</strong> On distingue selon le reste de n dans la division par 3 :</p>
<ul><li>si n = 3k, alors n est multiple de 3 ;</li>
<li>si n = 3k + 1, alors n + 2 = 3k + 3 = 3(k + 1) est multiple de 3 ;</li>
<li>si n = 3k + 2, alors n + 1 = 3k + 3 = 3(k + 1) est multiple de 3.</li></ul>
<p>Dans tous les cas, l'un des trois facteurs est multiple de 3, donc P est divisible par 3.</p>
<p><strong>Conclusion.</strong> P est divisible par 2 et par 3, qui sont premiers entre eux, donc P est divisible par 2 × 3 = 6.</p>
<p><em>Pour aller plus loin :</em> on en déduit que n<sup>3</sup> − n = (n − 1)n(n + 1) est toujours divisible par 6.</p>`,
    bareme: [
      `Se ramener à la divisibilité par 2 et par 3 (en mentionnant que 2 et 3 sont premiers entre eux).`,
      `Justifier la présence d'un facteur pair.`,
      `Traiter les trois cas de reste modulo 3 sans en oublier.`,
      `Conclure proprement.`
    ]
  },
  {
    id: "arith-09",
    theme: "arith",
    niveau: 1,
    type: "reponse",
    titre: `Palindromes et 9`,
    enonce: `<p>Un nombre est un <strong>palindrome</strong> s'il se lit de la même façon de gauche à droite et de droite à gauche, comme 2552 ou 7117.</p>
<p>Combien y a-t-il de palindromes à quatre chiffres qui sont divisibles par 9 ?</p>`,
    figure: ``,
    reponse: ["10", "dix"],
    reponseTexte: `10`,
    pistes: [
      `<p>Un palindrome à quatre chiffres s'écrit abba. Quelles valeurs peuvent prendre a et b ?</p>`,
      `<p>Que vaut la somme des chiffres de abba en fonction de a et b ?</p>`,
      `<p>La somme vaut 2(a + b). Pour qu'elle soit divisible par 9, que faut-il sur a + b ? (Utilise que 2 et 9 n'ont pas de facteur commun.)</p>`,
      `<p>a + b doit être un multiple de 9, et 1 ≤ a + b ≤ 18. Il reste à compter les cas a + b = 9 et a + b = 18.</p>`
    ],
    lecon: {
      titre: `Les nombres palindromes`,
      html: `<p>Un palindrome à 4 chiffres s'écrit <span class="m">abba</span> avec a ∈ {1, …, 9} (pas de 0 au début) et b ∈ {0, …, 9} : il y en a 9 × 10 = 90.</p>
<p>Son écriture décimale est :</p>
<div class="calc">abba = 1000a + 100b + 10b + a = 1001a + 110b = 11(91a + 10b)</div>
<p>Conséquence remarquable : <strong>tout palindrome à 4 chiffres est divisible par 11</strong> !</p>
<p>Pour un palindrome à 3 chiffres aba, il y a aussi 9 × 10 = 90 possibilités, et aba = 101a + 10b.</p>
<p>Lemme utile (lemme de Gauss) : si d divise k × m et si d n'a aucun facteur commun avec k, alors d divise m. Par exemple, si 9 divise 2x, alors 9 divise x.</p>
<div class="astuce">Astuce olympique : pour compter des nombres avec contrainte sur leurs chiffres, on écrit les chiffres comme des inconnues, on traduit la contrainte, puis on compte les solutions en respectant les bornes 0 ≤ chiffre ≤ 9.</div>`
    },
    correction: `<p>Un palindrome à quatre chiffres s'écrit abba avec 1 ≤ a ≤ 9 et 0 ≤ b ≤ 9. Il est divisible par 9 si et seulement si la somme de ses chiffres, a + b + b + a = 2(a + b), est divisible par 9.</p>
<p>Comme 2 et 9 sont premiers entre eux, cela équivaut à : 9 divise a + b. Or 1 ≤ a + b ≤ 18, donc a + b = 9 ou a + b = 18.</p>
<ul><li>a + b = 9 : a peut valoir 1, 2, …, 9 et alors b = 9 − a est bien un chiffre : <strong>9</strong> palindromes (1881, 2772, 3663, 4554, 5445, 6336, 7227, 8118, 9009).</li>
<li>a + b = 18 : forcément a = b = 9 : <strong>1</strong> palindrome (9999).</li></ul>
<p>Il y a donc <strong>10</strong> palindromes à quatre chiffres divisibles par 9.</p>
<p><em>Pour aller plus loin :</em> comme tout palindrome à 4 chiffres est aussi divisible par 11, ces 10 nombres sont tous divisibles par 99.</p>`
  },
  {
    id: "arith-10",
    theme: "arith",
    niveau: 1,
    type: "reponse",
    titre: `Trois premiers espacés de 10`,
    enonce: `<p>On cherche les nombres premiers p tels que <span class="m">p + 10</span> et <span class="m">p + 20</span> soient aussi des nombres premiers.</p>
<p>Quelle est la somme de tous ces nombres premiers p ?</p>`,
    figure: ``,
    reponse: ["3", "trois"],
    reponseTexte: `3 (seul p = 3 convient)`,
    pistes: [
      `<p>Teste p = 2, 3, 5, 7, 11, 13. Lesquels marchent ?</p>`,
      `<p>Seul p = 3 semble marcher (3, 13, 23). Regarde les restes de p, p + 10 et p + 20 dans la division par 3.</p>`,
      `<p>10 = 9 + 1 et 20 = 18 + 2. Si p a pour reste r dans la division par 3, quels sont les restes de p + 10 et p + 20 ?</p>`,
      `<p>Les trois nombres ont pour restes r, r + 1, r + 2 (modulo 3) : l'un d'eux est multiple de 3. Un multiple de 3 premier vaut forcément 3. Il reste à voir lequel des trois peut valoir 3.</p>`
    ],
    lecon: {
      titre: `Les nombres premiers et les restes`,
      html: `<p>Un nombre <strong>premier</strong> est un entier ≥ 2 qui n'a que deux diviseurs : 1 et lui-même. Les premiers : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29…</p>
<p>Un fait tout bête mais très puissant : <strong>le seul nombre premier multiple de 3 est 3 lui-même</strong> (de même, le seul premier pair est 2).</p>
<p>Donc, si on montre qu'un nombre premier q est divisible par 3, on sait que q = 3.</p>
<p>Méthode : quand on cherche des premiers qui vérifient plusieurs conditions, on regarde les restes dans la division par un petit nombre (2, 3, 5…) pour montrer qu'un des nombres est forcément divisible par ce petit nombre.</p>
<div class="exemple">p, p + 2, p + 4 tous premiers ? L'un des trois est multiple de 3, donc égal à 3 : seul p = 3 marche (3, 5, 7).</div>
<div class="astuce">Astuce olympique : si les décalages (ici 0, 10, 20) ont tous des restes différents modulo 3, l'un des nombres est multiple de 3. Essaie toujours 2, puis 3, puis 5.</div>`
    },
    correction: `<p>Remarquons que 10 = 3 × 3 + 1 et 20 = 3 × 6 + 2.</p>
<p>Soit p un nombre premier. On regarde le reste de p dans la division par 3 :</p>
<ul><li>si p = 3k, alors p est un premier multiple de 3, donc p = 3 ;</li>
<li>si p = 3k + 1, alors p + 20 = 3k + 21 = 3(k + 7) est multiple de 3 et supérieur à 3 : il n'est pas premier ;</li>
<li>si p = 3k + 2, alors p + 10 = 3k + 12 = 3(k + 4) est multiple de 3 et supérieur à 3 : il n'est pas premier.</li></ul>
<p>Le seul candidat est donc p = 3, et il convient : 3, 13 et 23 sont bien premiers.</p>
<p>La somme demandée vaut <strong>3</strong>.</p>
<p><em>Pour aller plus loin :</em> même méthode pour p, p + 4, p + 8 (réponse : seulement 3, 7, 11). Mais pour p, p + 6, p + 12, les restes modulo 3 sont tous égaux et la méthode échoue : d'ailleurs 5, 11, 17 et 7, 13, 19 conviennent !</p>`
  },
  {
    id: "arith-11",
    theme: "arith",
    niveau: 1,
    type: "demo",
    titre: `Les carrés ont leurs habitudes`,
    enonce: `<p>Démontrer que le carré d'un entier ne se termine jamais par le chiffre 2, 3, 7 ou 8.</p>
<p>En déduire que 2027 n'est pas un carré parfait, ni 123 458.</p>`,
    figure: ``,
    pistes: [
      `<p>Le chiffre des unités de n<sup>2</sup> ne dépend que du chiffre des unités de n. Pourquoi ?</p>`,
      `<p>Écris n = 10q + u où u est le chiffre des unités de n. Développe n<sup>2</sup>.</p>`,
      `<p>n<sup>2</sup> = 100q<sup>2</sup> + 20qu + u<sup>2</sup> : le chiffre des unités de n<sup>2</sup> est celui de u<sup>2</sup>. Il n'y a plus que 10 cas à examiner : u = 0, 1, …, 9.</p>`,
      `<p>Fais le tableau des derniers chiffres de 0<sup>2</sup>, 1<sup>2</sup>, …, 9<sup>2</sup> et regarde quels chiffres n'apparaissent jamais.</p>`
    ],
    lecon: {
      titre: `Le dernier chiffre d'un carré`,
      html: `<p>Si n = 10q + u (u = chiffre des unités), alors n<sup>2</sup> = 10(10q<sup>2</sup> + 2qu) + u<sup>2</sup>. Le chiffre des unités de n<sup>2</sup> est donc celui de u<sup>2</sup>.</p>
<p>Tableau des derniers chiffres :</p>
<div class="calc">u : 0 1 2 3 4 5 6 7 8 9<br>u<sup>2</sup> finit par : 0 1 4 9 6 5 6 9 4 1</div>
<p>Un carré se termine donc toujours par <strong>0, 1, 4, 5, 6 ou 9</strong>.</p>
<p>C'est un <strong>test d'élimination</strong> : un nombre qui finit par 2, 3, 7 ou 8 n'est pas un carré. Attention, la réciproque est fausse : 14 finit par 4 mais n'est pas un carré.</p>
<div class="astuce">Astuce olympique : on peut raffiner avec les deux derniers chiffres. Par exemple, un carré qui finit par 5 finit en fait toujours par 25 ; et un carré ne finit jamais par 11, 33, 55, 77 ou 99.</div>`
    },
    correction: `<p>Soit n un entier (on peut le supposer positif, car (−n)<sup>2</sup> = n<sup>2</sup>). Écrivons n = 10q + u, où u ∈ {0, 1, …, 9} est son chiffre des unités.</p>
<div class="calc">n<sup>2</sup> = 100q<sup>2</sup> + 20qu + u<sup>2</sup> = 10(10q<sup>2</sup> + 2qu) + u<sup>2</sup></div>
<p>Donc n<sup>2</sup> et u<sup>2</sup> ont le même chiffre des unités. On examine les 10 cas :</p>
<div class="calc">0<sup>2</sup> = 0, 1<sup>2</sup> = 1, 2<sup>2</sup> = 4, 3<sup>2</sup> = 9, 4<sup>2</sup> = 16, 5<sup>2</sup> = 25, 6<sup>2</sup> = 36, 7<sup>2</sup> = 49, 8<sup>2</sup> = 64, 9<sup>2</sup> = 81</div>
<p>Les chiffres des unités obtenus sont 0, 1, 4, 9, 6, 5, 6, 9, 4, 1 : jamais 2, 3, 7 ni 8. Un carré ne se termine donc jamais par l'un de ces chiffres.</p>
<p><strong>Application.</strong> 2027 se termine par 7 et 123 458 par 8 : ce ne sont pas des carrés parfaits.</p>
<p><em>Erreur fréquente :</em> vérifier seulement quelques exemples de carrés (« 4, 9, 16, 25… ne finissent pas par 2 »). Des exemples ne prouvent rien ; c'est la réduction à 10 cas qui rend la preuve complète.</p>`,
    bareme: [
      `Justifier que le chiffre des unités de n² ne dépend que de celui de n (écriture n = 10q + u).`,
      `Examiner les 10 cas possibles.`,
      `Conclure que 2, 3, 7, 8 n'apparaissent pas.`,
      `Appliquer correctement à 2027 et 123 458.`
    ]
  },
  {
    id: "arith-12",
    theme: "arith",
    niveau: 1,
    type: "reponse",
    titre: `Les zéros de 30 !`,
    enonce: `<p>On note <span class="m">30!</span> (« factorielle 30 ») le produit 1 × 2 × 3 × … × 29 × 30.</p>
<p>Par combien de zéros l'écriture décimale de 30! se termine-t-elle ?</p>`,
    figure: ``,
    reponse: ["7", "sept"],
    reponseTexte: `7`,
    pistes: [
      `<p>Un zéro final correspond à un facteur 10 = 2 × 5. Dans 30!, qu'y a-t-il de plus : de facteurs 2 ou de facteurs 5 ?</p>`,
      `<p>Il y a beaucoup plus de facteurs 2 que de facteurs 5. Le nombre de zéros est donc égal au nombre de facteurs 5 dans 30!.</p>`,
      `<p>Combien de nombres entre 1 et 30 sont multiples de 5 ? Chacun apporte au moins un facteur 5.</p>`,
      `<p>Attention : 25 = 5 × 5 apporte <em>deux</em> facteurs 5. Il reste à ajouter ce facteur supplémentaire.</p>`
    ],
    lecon: {
      titre: `Les zéros à la fin d'une factorielle`,
      html: `<p>n! = 1 × 2 × … × n. Le nombre de zéros à la fin d'un entier est le nombre de fois où l'on peut le diviser par 10 = 2 × 5.</p>
<p>Dans n!, les facteurs 2 sont bien plus nombreux que les facteurs 5 (un nombre sur deux est pair). Le nombre de zéros finaux de n! est donc le <strong>nombre de facteurs 5</strong> dans n!.</p>
<p>Pour les compter (<strong>formule de Legendre</strong>) :</p>
<div class="calc">(multiples de 5) + (multiples de 25) + (multiples de 125) + …</div>
<p>Chaque multiple de 5 apporte un facteur 5 ; chaque multiple de 25 en apporte un de plus ; chaque multiple de 125 encore un de plus, etc.</p>
<div class="exemple">100! : 20 multiples de 5, 4 multiples de 25, aucun de 125 : 20 + 4 = 24 zéros.</div>
<div class="astuce">Astuce olympique : on peut enchaîner les divisions entières : 100 ÷ 5 = 20, puis 20 ÷ 5 = 4, puis 4 ÷ 5 = 0. On additionne : 24.</div>`
    },
    correction: `<p>Le nombre de zéros finaux de 30! est le nombre de facteurs 10 = 2 × 5 dans sa décomposition. Les facteurs 2 sont plus nombreux que les facteurs 5 (il y a 15 nombres pairs contre 6 multiples de 5), donc ce sont les facteurs 5 qui limitent.</p>
<p>Comptons les facteurs 5 dans 1 × 2 × … × 30 :</p>
<ul><li>les multiples de 5 : 5, 10, 15, 20, 25, 30 → 6 facteurs ;</li>
<li>25 = 5<sup>2</sup> apporte un facteur 5 supplémentaire → 1 facteur.</li></ul>
<div class="calc">6 + 1 = 7</div>
<p>30! se termine par <strong>7</strong> zéros. (En effet, 30! = 265 252 859 812 191 058 636 308 480 000 000.)</p>
<p><em>Erreur fréquente :</em> oublier le deuxième 5 de 25 et répondre 6.</p>`
  },
  {
    id: "arith-13",
    theme: "arith",
    niveau: 2,
    type: "reponse",
    titre: `PGCD 12, PPCM 360`,
    enonce: `<p>Combien existe-t-il de couples (a, b) d'entiers positifs avec <span class="m">a &lt; b</span>, tels que le PGCD de a et b soit 12 et leur PPCM soit 360 ?</p>`,
    figure: ``,
    reponse: ["4", "quatre"],
    reponseTexte: `4`,
    pistes: [
      `<p>Comme 12 divise a et b, écris a = 12x et b = 12y. Que peut-on dire du PGCD de x et y ?</p>`,
      `<p>PGCD(x, y) = 1 (sinon le PGCD de a et b serait plus grand que 12). Quelle relation relie PGCD, PPCM et produit ?</p>`,
      `<p>PGCD(a, b) × PPCM(a, b) = a × b. Donc 12 × 360 = 144xy, d'où xy = 30.</p>`,
      `<p>Il reste à trouver les couples (x, y) avec x &lt; y, xy = 30 et x, y premiers entre eux. Écris 30 = 2 × 3 × 5 et répartis les facteurs premiers.</p>`
    ],
    lecon: {
      titre: `PGCD × PPCM = produit`,
      html: `<p>Pour deux entiers positifs a et b :</p>
<div class="calc">PGCD(a, b) × PPCM(a, b) = a × b</div>
<p>Pourquoi ? Pour chaque nombre premier, le PGCD prend le plus petit des deux exposants, le PPCM le plus grand, et min + max = somme des deux exposants.</p>
<p>Technique standard : si d = PGCD(a, b), on écrit <strong>a = dx et b = dy avec x et y premiers entre eux</strong>. Alors PPCM(a, b) = dxy.</p>
<div class="exemple">a = 18, b = 24 : d = 6, x = 3, y = 4, et PPCM = 6 × 3 × 4 = 72.</div>
<p>Pour que x et y soient premiers entre eux avec xy = N, chaque facteur premier de N (avec toute sa puissance) doit aller entièrement dans x ou entièrement dans y.</p>
<div class="astuce">Astuce olympique : si N a k facteurs premiers distincts, il y a 2<sup>k</sup> couples ordonnés (x, y) premiers entre eux avec xy = N, donc 2<sup>k−1</sup> avec x &lt; y (quand N &gt; 1).</div>`
    },
    correction: `<p>Comme 12 = PGCD(a, b), on écrit a = 12x et b = 12y avec x, y entiers positifs premiers entre eux (si x et y avaient un diviseur commun d &gt; 1, alors 12d diviserait a et b).</p>
<p>Alors PPCM(a, b) = 12xy, donc 12xy = 360 et <span class="m">xy = 30</span>.</p>
<p>Comme 30 = 2 × 3 × 5 et que x, y sont premiers entre eux, chacun des facteurs 2, 3, 5 va entièrement dans x ou dans y. Avec x &lt; y :</p>
<div class="calc">(x, y) = (1, 30), (2, 15), (3, 10), (5, 6)</div>
<p>(Les couples (x, y) = (6, 5), etc., ont x &gt; y ; et 30 n'a pas d'autre factorisation en deux facteurs premiers entre eux.)</p>
<p>Cela donne (a, b) = (12, 360), (24, 180), (36, 120), (60, 72). On vérifie par exemple PGCD(60, 72) = 12 et PPCM(60, 72) = 360.</p>
<p>Il y a <strong>4</strong> couples.</p>
<p><em>Erreur fréquente :</em> garder aussi xy = 30 avec x = 1… mais oublier la condition « premiers entre eux » quand N a un facteur carré. Ici, avec N = 30 sans carré, toutes les factorisations conviennent ; ce ne serait pas le cas avec N = 12 (le couple (2, 6) ne marche pas).</p>`
  },
  {
    id: "arith-14",
    theme: "arith",
    niveau: 2,
    type: "demo",
    titre: `Une infinité de nombres premiers`,
    enonce: `<p>Démontrer qu'il existe une infinité de nombres premiers.</p>
<p><em>Indication :</em> on pourra raisonner par l'absurde, en supposant qu'il n'existe qu'un nombre fini de nombres premiers p<sub>1</sub>, p<sub>2</sub>, …, p<sub>k</sub>, et considérer le nombre <span class="m">N = p<sub>1</sub> × p<sub>2</sub> × … × p<sub>k</sub> + 1</span>.</p>`,
    figure: ``,
    pistes: [
      `<p>Essaie avec la liste 2, 3, 5 : N = 2 × 3 × 5 + 1 = 31. Est-il divisible par 2 ? par 3 ? par 5 ?</p>`,
      `<p>Tout entier N ≥ 2 possède au moins un diviseur premier. Pourquoi ? (Pense au plus petit diviseur de N supérieur ou égal à 2.)</p>`,
      `<p>Si p<sub>i</sub> divisait N, il diviserait aussi N − p<sub>1</sub>p<sub>2</sub>…p<sub>k</sub>. Que vaut cette différence ?</p>`,
      `<p>Aucun des p<sub>i</sub> ne divise N, et pourtant N a un diviseur premier. Il reste à expliquer pourquoi c'est une contradiction.</p>`
    ],
    lecon: {
      titre: `Le raisonnement par l'absurde`,
      html: `<p>Pour démontrer une affirmation A par l'absurde :</p>
<ol><li>on <strong>suppose le contraire</strong> de A ;</li>
<li>on en tire des conséquences logiques ;</li>
<li>on aboutit à une <strong>contradiction</strong> (quelque chose de faux, comme « 1 est divisible par 3 ») ;</li>
<li>on conclut que la supposition était fausse, donc que A est vraie.</li></ol>
<p>C'est la méthode reine pour démontrer qu'un objet est <em>infini</em> ou qu'une chose est <em>impossible</em>.</p>
<p>Outils souvent utilisés avec elle :</p>
<ul><li>tout entier n ≥ 2 a un diviseur premier (son plus petit diviseur ≥ 2 est forcément premier) ;</li>
<li>si d divise a et d divise b, alors d divise a − b.</li></ul>
<div class="astuce">Astuce olympique : rédigez clairement « Supposons par l'absurde que… » au début et « C'est absurde, donc… » à la fin. Le jury veut voir la structure du raisonnement.</div>`
    },
    correction: `<p><strong>Supposons par l'absurde</strong> qu'il n'existe qu'un nombre fini de nombres premiers, que l'on note p<sub>1</sub>, p<sub>2</sub>, …, p<sub>k</sub> (c'est la liste de <em>tous</em> les nombres premiers).</p>
<p>Posons <span class="m">N = p<sub>1</sub> × p<sub>2</sub> × … × p<sub>k</sub> + 1</span>. On a N ≥ 2 + 1 = 3.</p>
<p><strong>N a un diviseur premier.</strong> Soit q le plus petit diviseur de N supérieur ou égal à 2. Si q n'était pas premier, il aurait un diviseur d avec 1 &lt; d &lt; q, qui diviserait aussi N : cela contredirait la minimalité de q. Donc q est premier.</p>
<p><strong>Aucun p<sub>i</sub> ne divise N.</strong> Si un p<sub>i</sub> divisait N, comme il divise aussi le produit P = p<sub>1</sub>…p<sub>k</sub>, il diviserait la différence N − P = 1. C'est impossible, car p<sub>i</sub> ≥ 2.</p>
<p><strong>Contradiction.</strong> q est premier, donc q fait partie de la liste p<sub>1</sub>, …, p<sub>k</sub> ; mais on vient de voir qu'aucun élément de la liste ne divise N. C'est absurde.</p>
<p>Donc il existe une infinité de nombres premiers. ∎</p>
<p><em>Erreur fréquente :</em> affirmer que N est premier. C'est faux en général : 2 × 3 × 5 × 7 × 11 × 13 + 1 = 30 031 = 59 × 509. On sait seulement que ses diviseurs premiers sont hors de la liste.</p>`,
    bareme: [
      `Poser clairement l'hypothèse par l'absurde (liste finie de TOUS les premiers).`,
      `Introduire N = p₁…pₖ + 1 et justifier qu'il a un diviseur premier.`,
      `Montrer qu'aucun pᵢ ne divise N (argument de la différence égale à 1).`,
      `Formuler la contradiction et conclure.`
    ]
  },
  {
    id: "arith-15",
    theme: "arith",
    niveau: 2,
    type: "reponse",
    titre: `Le reste de 2 puissance 100`,
    enonce: `<p>Quel est le reste de la division euclidienne de <span class="m">2<sup>100</sup></span> par 7 ?</p>`,
    figure: ``,
    reponse: ["2", "deux"],
    reponseTexte: `2`,
    pistes: [
      `<p>Calcule les restes de 2, 4, 8, 16, 32, 64 dans la division par 7. Que remarques-tu ?</p>`,
      `<p>2<sup>3</sup> = 8 = 7 + 1 : 8 a pour reste 1 dans la division par 7. Que se passe-t-il quand on multiplie par 8 ?</p>`,
      `<p>Écris 100 = 3 × 33 + 1. Alors 2<sup>100</sup> = (2<sup>3</sup>)<sup>33</sup> × 2.</p>`,
      `<p>(2<sup>3</sup>)<sup>33</sup> a pour reste 1<sup>33</sup> = 1 modulo 7. Il reste à multiplier par 2.</p>`
    ],
    lecon: {
      titre: `Les congruences : calculer avec les restes`,
      html: `<p>On écrit <span class="m">a ≡ b (mod n)</span> (« a est congru à b modulo n ») quand a et b ont le même reste dans la division par n, c'est-à-dire quand n divise a − b.</p>
<div class="exemple">17 ≡ 3 (mod 7) car 17 − 3 = 14 ; 8 ≡ 1 (mod 7).</div>
<p>La règle d'or : <strong>on peut remplacer un nombre par son reste</strong> dans les additions et les multiplications, donc aussi dans les puissances.</p>
<ul><li>si a ≡ b et c ≡ d (mod n), alors a + c ≡ b + d et a × c ≡ b × d (mod n) ;</li>
<li>si a ≡ b (mod n), alors a<sup>k</sup> ≡ b<sup>k</sup> (mod n).</li></ul>
<p>Méthode pour a<sup>N</sup> modulo n : chercher une petite puissance a<sup>m</sup> ≡ 1 (mod n), puis écrire N = mq + r :</p>
<div class="calc">a<sup>N</sup> = (a<sup>m</sup>)<sup>q</sup> × a<sup>r</sup> ≡ 1<sup>q</sup> × a<sup>r</sup> = a<sup>r</sup> (mod n)</div>
<div class="astuce">Astuce olympique : trouver une puissance ≡ −1 est aussi très utile, car (−1)<sup>q</sup> vaut 1 ou −1 selon la parité de q.</div>`
    },
    correction: `<p>On a 2<sup>3</sup> = 8 = 7 + 1, donc <span class="m">2<sup>3</sup> ≡ 1 (mod 7)</span>.</p>
<p>Comme 100 = 3 × 33 + 1 :</p>
<div class="calc">2<sup>100</sup> = (2<sup>3</sup>)<sup>33</sup> × 2 ≡ 1<sup>33</sup> × 2 = 2 (mod 7)</div>
<p>Le reste de la division de 2<sup>100</sup> par 7 est <strong>2</strong>.</p>
<p><em>Vérification sur de petits cas :</em> 2<sup>1</sup> = 2, 2<sup>4</sup> = 16 = 14 + 2, 2<sup>7</sup> = 128 = 126 + 2 : tous les exposants de la forme 3k + 1 donnent bien le reste 2.</p>
<p><em>Pour aller plus loin :</em> le petit théorème de Fermat dit que si p est premier et ne divise pas a, alors a<sup>p−1</sup> ≡ 1 (mod p). Ici il donne 2<sup>6</sup> ≡ 1 (mod 7), mais 2<sup>3</sup> suffisait déjà.</p>`
  },
  {
    id: "arith-16",
    theme: "arith",
    niveau: 2,
    type: "reponse",
    titre: `Onze fois la somme de ses chiffres`,
    enonce: `<p>Trouver le nombre à trois chiffres qui est égal à 11 fois la somme de ses chiffres.</p>`,
    figure: ``,
    reponse: ["198"],
    reponseTexte: `198`,
    pistes: [
      `<p>Écris le nombre sous la forme abc = 100a + 10b + c, avec a ≠ 0.</p>`,
      `<p>Traduis la condition : 100a + 10b + c = 11(a + b + c). Simplifie.</p>`,
      `<p>Tu dois obtenir 89a = b + 10c. Quelle est la plus grande valeur possible de b + 10c ?</p>`,
      `<p>b + 10c ≤ 9 + 90 = 99, donc a = 1 et b + 10c = 89. Il reste à trouver les chiffres b et c.</p>`
    ],
    lecon: {
      titre: `Chiffres inconnus : encadrer pour conclure`,
      html: `<p>Quand un problème porte sur les chiffres d'un nombre, on pose les chiffres comme inconnues et on utilise l'écriture décimale (abc = 100a + 10b + c).</p>
<p>On obtient une équation, mais avec une information précieuse : chaque chiffre est un entier entre 0 et 9 (et le premier n'est pas 0).</p>
<p>Ces <strong>bornes</strong> permettent de réduire drastiquement les possibilités :</p>
<div class="exemple">Si 7a = b + c avec des chiffres, alors 7a ≤ 18 donc a ∈ {1, 2}.</div>
<p>Méthode :</p>
<ol><li>traduire l'énoncé en équation ;</li>
<li>regrouper chaque chiffre d'un côté ;</li>
<li>encadrer grâce à 0 ≤ chiffre ≤ 9 ;</li>
<li>examiner les cas restants.</li></ol>
<div class="astuce">Astuce olympique : b + 10c est exactement le nombre « cb » à deux chiffres ; l'équation b + 10c = 89 se lit donc directement : c = 8 et b = 9.</div>`
    },
    correction: `<p>Notons le nombre abc = 100a + 10b + c avec a ∈ {1, …, 9} et b, c ∈ {0, …, 9}. La condition s'écrit :</p>
<div class="calc">100a + 10b + c = 11a + 11b + 11c ⇔ 89a = b + 10c</div>
<p>Or b + 10c ≤ 9 + 90 = 99 &lt; 178 = 89 × 2, donc a = 1 et <span class="m">b + 10c = 89</span>.</p>
<p>Comme 0 ≤ b ≤ 9, le nombre b + 10c est le nombre à deux chiffres « cb ». On lit c = 8 et b = 9 (on peut aussi dire : 10c = 89 − b est entre 80 et 89, donc c = 8, puis b = 9).</p>
<p>Le nombre est <strong>198</strong>. Vérification : 1 + 9 + 8 = 18 et 11 × 18 = 198. ✓</p>
<p><em>Pour aller plus loin :</em> quels nombres à deux chiffres sont égaux à 7 fois la somme de leurs chiffres ? (Réponse : 21, 42, 63, 84.)</p>`
  },
  {
    id: "arith-17",
    theme: "arith",
    niveau: 2,
    type: "demo",
    titre: `Racine de 2 n'est pas une fraction`,
    enonce: `<p>Démontrer qu'il n'existe pas d'entiers positifs p et q tels que <span class="m">(p/q)<sup>2</sup> = 2</span>. Autrement dit, √2 est irrationnel.</p>`,
    figure: ``,
    pistes: [
      `<p>Raisonne par l'absurde : suppose √2 = p/q. Peut-on supposer la fraction irréductible ?</p>`,
      `<p>Oui : on simplifie la fraction au maximum, donc p et q ne sont pas tous les deux pairs. Élève au carré : que devient l'égalité ?</p>`,
      `<p>On obtient p<sup>2</sup> = 2q<sup>2</sup>, donc p<sup>2</sup> est pair. Si p était impair, que serait p<sup>2</sup> ?</p>`,
      `<p>p est pair : écris p = 2k et remplace. Il reste à montrer que q est pair aussi, ce qui contredit l'irréductibilité.</p>`
    ],
    lecon: {
      titre: `Irrationalité et parité`,
      html: `<p>Un nombre est <strong>rationnel</strong> s'il s'écrit p/q avec p, q entiers (q ≠ 0). Sinon il est <strong>irrationnel</strong>.</p>
<p>Toute fraction peut être rendue <strong>irréductible</strong> : on divise p et q par leur PGCD. En particulier, p et q ne sont alors pas tous les deux pairs.</p>
<p>Lemme de parité : <strong>si p<sup>2</sup> est pair, alors p est pair</strong>. En effet, si p était impair, p = 2k + 1, alors p<sup>2</sup> = 4k<sup>2</sup> + 4k + 1 serait impair.</p>
<p>Schéma de preuve (par l'absurde) :</p>
<ol><li>supposer √2 = p/q irréductible ;</li>
<li>en déduire que p est pair, puis que q est pair ;</li>
<li>contradiction avec l'irréductibilité.</li></ol>
<div class="astuce">Astuce olympique : la même idée prouve que √3 est irrationnel (en remplaçant « pair » par « multiple de 3 » : si 3 divise p<sup>2</sup>, alors 3 divise p car 3 est premier).</div>`
    },
    correction: `<p><strong>Supposons par l'absurde</strong> qu'il existe des entiers positifs p et q tels que (p/q)<sup>2</sup> = 2. Quitte à simplifier la fraction, on peut supposer p/q <strong>irréductible</strong> : p et q n'ont pas de diviseur commun autre que 1 ; en particulier ils ne sont pas tous les deux pairs.</p>
<p>L'égalité devient <span class="m">p<sup>2</sup> = 2q<sup>2</sup></span>. Donc p<sup>2</sup> est pair.</p>
<p><strong>p est pair.</strong> Sinon, p = 2k + 1 et p<sup>2</sup> = 2(2k<sup>2</sup> + 2k) + 1 serait impair. Écrivons donc p = 2k.</p>
<p><strong>q est pair.</strong> En remplaçant : 4k<sup>2</sup> = 2q<sup>2</sup>, donc q<sup>2</sup> = 2k<sup>2</sup> est pair, et par le même argument q est pair.</p>
<p><strong>Contradiction.</strong> p et q sont tous deux pairs, alors que la fraction p/q était irréductible. C'est absurde.</p>
<p>Il n'existe donc pas de fraction dont le carré vaut 2 : √2 est irrationnel. ∎</p>
<p><em>Erreur fréquente :</em> écrire « p<sup>2</sup> pair donc p pair » sans justification. C'est vrai, mais c'est justement le cœur de la preuve : il faut l'expliquer.</p>`,
    bareme: [
      `Poser l'hypothèse par l'absurde avec une fraction irréductible.`,
      `Obtenir p² = 2q².`,
      `Justifier que p² pair implique p pair.`,
      `En déduire que q est pair et conclure par la contradiction.`
    ]
  },
  {
    id: "arith-18",
    theme: "arith",
    niveau: 2,
    type: "reponse",
    titre: `Quand n² + 1 est multiple de 5`,
    enonce: `<p>Pour combien d'entiers n compris entre 1 et 100 (inclus) le nombre <span class="m">n<sup>2</sup> + 1</span> est-il divisible par 5 ?</p>`,
    figure: ``,
    reponse: ["40", "quarante"],
    reponseTexte: `40`,
    pistes: [
      `<p>Teste n = 1, 2, 3, 4, 5, 6, 7 : pour lesquels n<sup>2</sup> + 1 est-il multiple de 5 ?</p>`,
      `<p>Le reste de n<sup>2</sup> + 1 modulo 5 ne dépend que du reste de n modulo 5. Fais un tableau pour n ≡ 0, 1, 2, 3, 4 (mod 5).</p>`,
      `<p>Tu dois trouver que ça marche exactement quand n ≡ 2 ou n ≡ 3 (mod 5). Combien de nombres entre 1 et 100 ont le reste 2 ? le reste 3 ?</p>`,
      `<p>De 1 à 100, il y a 20 paquets complets de 5 nombres consécutifs. Chaque paquet contient combien de bons n ?</p>`
    ],
    lecon: {
      titre: `Tableau des restes des carrés`,
      html: `<p>Le reste de n<sup>2</sup> dans la division par m ne dépend que du reste de n dans la division par m (règle des congruences : si n ≡ r, alors n<sup>2</sup> ≡ r<sup>2</sup>).</p>
<p>On dresse donc un <strong>tableau des carrés modulo m</strong> en ne testant que r = 0, 1, …, m − 1.</p>
<div class="calc">modulo 3 : 0, 1, 1 → un carré est ≡ 0 ou 1<br>modulo 4 : 0, 1, 0, 1 → un carré est ≡ 0 ou 1<br>modulo 5 : 0, 1, 4, 4, 1 → un carré est ≡ 0, 1 ou 4<br>modulo 8 : 0, 1, 4, 1, 0, 1, 4, 1 → ≡ 0, 1 ou 4</div>
<p>Ces tableaux servent à trouver <em>quand</em> une expression est divisible par m, ou à prouver qu'une équation est <em>impossible</em>.</p>
<div class="astuce">Astuce olympique : modulo m, on peut utiliser des restes négatifs pour aller plus vite : 4 ≡ −1 et 3 ≡ −2 (mod 5), donc les carrés de ±1 et ±2 suffisent.</div>`
    },
    correction: `<p>Le reste de n<sup>2</sup> + 1 modulo 5 ne dépend que du reste r de n modulo 5 :</p>
<div class="calc">r = 0 : 0 + 1 = 1 ; r = 1 : 1 + 1 = 2 ; r = 2 : 4 + 1 = 5 ≡ 0 ; r = 3 : 9 + 1 = 10 ≡ 0 ; r = 4 : 16 + 1 = 17 ≡ 2</div>
<p>Donc 5 divise n<sup>2</sup> + 1 si et seulement si n ≡ 2 ou n ≡ 3 (mod 5).</p>
<p>Entre 1 et 100, les nombres de reste 2 sont 2, 7, 12, …, 97 : il y en a 20. Ceux de reste 3 sont 3, 8, …, 98 : il y en a 20 aussi.</p>
<p>Au total : <strong>40</strong> entiers.</p>
<p><em>Pour aller plus loin :</em> n<sup>2</sup> + 1 n'est jamais divisible par 3 (les carrés sont ≡ 0 ou 1 mod 3, donc n<sup>2</sup> + 1 ≡ 1 ou 2), ni par 4, ni par 7. Vérifie-le avec un tableau !</p>`
  },
  {
    id: "arith-19",
    theme: "arith",
    niveau: 2,
    type: "demo",
    titre: `2027 n'est pas une somme de deux carrés`,
    enonce: `<ol><li>Démontrer que le carré de tout entier a pour reste 0 ou 1 dans la division par 4.</li>
<li>En déduire qu'il n'existe pas d'entiers a et b tels que <span class="m">a<sup>2</sup> + b<sup>2</sup> = 2027</span>.</li></ol>`,
    figure: ``,
    pistes: [
      `<p>Question 1 : distingue deux cas, n pair (n = 2k) et n impair (n = 2k + 1). Calcule n<sup>2</sup> dans chaque cas.</p>`,
      `<p>(2k)<sup>2</sup> = 4k<sup>2</sup> et (2k + 1)<sup>2</sup> = 4k<sup>2</sup> + 4k + 1 = 4(k<sup>2</sup> + k) + 1. Quels sont les restes ?</p>`,
      `<p>Question 2 : quels restes peut avoir a<sup>2</sup> + b<sup>2</sup> dans la division par 4 ? Fais la liste des sommes possibles de 0 ou 1 avec 0 ou 1.</p>`,
      `<p>a<sup>2</sup> + b<sup>2</sup> a pour reste 0, 1 ou 2 modulo 4. Il reste à calculer le reste de 2027 dans la division par 4.</p>`
    ],
    lecon: {
      titre: `Prouver l'impossibilité avec un modulo`,
      html: `<p>Pour montrer qu'une équation en entiers <strong>n'a pas de solution</strong>, une méthode très efficace consiste à regarder les deux membres <strong>modulo un nombre bien choisi</strong>.</p>
<p>Si, pour toutes les valeurs possibles des inconnues, le membre de gauche n'a jamais le même reste que celui de droite, l'équation est impossible.</p>
<p>Les modulos les plus utiles pour des carrés : <strong>3, 4, 8</strong> (peu de restes possibles pour les carrés), et 9, 7 pour les cubes.</p>
<div class="calc">carrés modulo 4 : 0 ou 1 ; donc a<sup>2</sup> + b<sup>2</sup> modulo 4 : 0, 1 ou 2, jamais 3</div>
<div class="exemple">x<sup>2</sup> − 3y<sup>2</sup> = 2 : modulo 3, cela donne x<sup>2</sup> ≡ 2, impossible.</div>
<div class="astuce">Astuce olympique : le « bon » modulo est souvent suggéré par l'énoncé (coefficients, nombres de la forme 4k + 3, etc.). En cas de doute, essayez 3, 4, 8, 9 dans cet ordre.</div>`
    },
    correction: `<p><strong>1.</strong> Soit n un entier.</p>
<ul><li>Si n est pair, n = 2k et n<sup>2</sup> = 4k<sup>2</sup> : le reste est 0.</li>
<li>Si n est impair, n = 2k + 1 et n<sup>2</sup> = 4k<sup>2</sup> + 4k + 1 = 4(k<sup>2</sup> + k) + 1 : le reste est 1.</li></ul>
<p>Donc un carré a toujours pour reste 0 ou 1 modulo 4.</p>
<p><strong>2.</strong> Soient a et b des entiers. D'après la question 1, a<sup>2</sup> et b<sup>2</sup> ont chacun pour reste 0 ou 1 modulo 4, donc a<sup>2</sup> + b<sup>2</sup> est congru à 0 + 0 = 0, 0 + 1 = 1 ou 1 + 1 = 2 modulo 4. Jamais à 3.</p>
<p>Or 2027 = 4 × 506 + 3, donc 2027 ≡ 3 (mod 4).</p>
<p>Par conséquent, a<sup>2</sup> + b<sup>2</sup> ne peut pas valoir 2027 : l'équation n'a pas de solution entière. ∎</p>
<p><em>Pour aller plus loin :</em> aucun nombre de la forme 4k + 3 n'est somme de deux carrés. Fermat a découvert que les nombres premiers de la forme 4k + 1 (comme 5 = 1 + 4, 13 = 4 + 9) le sont tous !</p>`,
    bareme: [
      `Traiter les cas n pair et n impair pour obtenir les restes 0 et 1.`,
      `Lister les restes possibles de a² + b² modulo 4 (0, 1, 2).`,
      `Calculer 2027 ≡ 3 (mod 4).`,
      `Conclure à l'impossibilité.`
    ]
  },
  {
    id: "arith-20",
    theme: "arith",
    niveau: 2,
    type: "reponse",
    titre: `Timbres de 3 et de 5`,
    enonce: `<p>Un collectionneur dispose d'autant de timbres à 3 € et de timbres à 5 € qu'il le souhaite. Il veut affranchir un colis pour exactement 100 €.</p>
<p>De combien de façons peut-il le faire ? (Deux façons sont différentes si le nombre de timbres à 3 € est différent.)</p>`,
    figure: ``,
    reponse: ["7", "sept"],
    reponseTexte: `7`,
    pistes: [
      `<p>Il faut compter les couples d'entiers x, y ≥ 0 tels que 3x + 5y = 100. Quelles valeurs peut prendre y ?</p>`,
      `<p>y est entre 0 et 20. Pour chaque y, il faut que 100 − 5y soit divisible par 3. Essaie y = 0, 1, 2, 3…</p>`,
      `<p>y = 2 marche (100 − 10 = 90 = 3 × 30). Si on augmente y de 3, comment évolue x ?</p>`,
      `<p>Les solutions s'obtiennent de proche en proche : y augmente de 3, x diminue de 5. Il reste à compter les y valables entre 0 et 20.</p>`
    ],
    lecon: {
      titre: `Équations du type ax + by = c`,
      html: `<p>On cherche les entiers x, y (souvent ≥ 0) tels que <span class="m">ax + by = c</span>.</p>
<p>Méthode :</p>
<ol><li>trouver <strong>une solution particulière</strong> (x<sub>0</sub>, y<sub>0</sub>) en tâtonnant ;</li>
<li>les autres solutions s'obtiennent en ajoutant b à x et en retirant a à y (ou l'inverse) : si 3x + 5y = 100, alors 3(x − 5) + 5(y + 3) = 100 aussi ;</li>
<li>avec des conditions de signe, on compte les solutions entre les bornes.</li></ol>
<p>Quand a et b sont premiers entre eux, toutes les solutions entières sont de la forme <span class="m">x = x<sub>0</sub> − bk, y = y<sub>0</sub> + ak</span> (k entier).</p>
<div class="exemple">2x + 7y = 30 : y doit être pair ; y = 0 (x = 15), y = 2 (x = 8), y = 4 (x = 1) → 3 solutions positives ou nulles.</div>
<div class="astuce">Astuce olympique : passer modulo le coefficient de x. Ici, modulo 3 : 5y ≡ 100 donne 2y ≡ 1, donc y ≡ 2 (mod 3).</div>`
    },
    correction: `<p>On cherche le nombre de couples (x, y) d'entiers positifs ou nuls tels que 3x + 5y = 100.</p>
<p>Comme 5y ≤ 100, on a 0 ≤ y ≤ 20. Il faut que 100 − 5y soit multiple de 3. Modulo 3 : 100 ≡ 1 et 5 ≡ 2, donc on veut 2y ≡ 1 (mod 3), soit y ≡ 2 (mod 3) (car 2 × 2 = 4 ≡ 1).</p>
<p>Les valeurs possibles sont y = 2, 5, 8, 11, 14, 17, 20, ce qui donne :</p>
<div class="calc">(x, y) = (30, 2), (25, 5), (20, 8), (15, 11), (10, 14), (5, 17), (0, 20)</div>
<p>Il y a <strong>7</strong> façons.</p>
<p><em>Pour aller plus loin :</em> avec des timbres de 3 € et 5 €, on peut payer tout montant entier à partir de 8 €, mais pas 7 €. Le plus grand montant impossible avec des timbres a et b premiers entre eux est ab − a − b (théorème de Sylvester).</p>`
  },
  {
    id: "arith-21",
    theme: "arith",
    niveau: 2,
    type: "reponse",
    titre: `Douze diviseurs, le plus petit possible`,
    enonce: `<p>Quel est le plus petit entier positif qui possède exactement 12 diviseurs positifs ?</p>`,
    figure: ``,
    reponse: ["60", "soixante"],
    reponseTexte: `60`,
    pistes: [
      `<p>Rappel : si n = p<sub>1</sub><sup>a<sub>1</sub></sup> × … × p<sub>k</sub><sup>a<sub>k</sub></sup>, le nombre de diviseurs est (a<sub>1</sub> + 1)…(a<sub>k</sub> + 1).</p>`,
      `<p>De combien de façons peut-on écrire 12 comme produit de facteurs ≥ 2 ? (12, 6 × 2, 4 × 3, 3 × 2 × 2.)</p>`,
      `<p>Chaque écriture donne une forme d'exposants. Par exemple 4 × 3 correspond à p<sup>3</sup> × q<sup>2</sup>. Pour que le nombre soit petit, quels premiers choisir, et dans quel ordre mettre les exposants ?</p>`,
      `<p>Il faut donner les plus grands exposants aux plus petits premiers. Il reste à comparer 2<sup>11</sup>, 2<sup>5</sup> × 3, 2<sup>3</sup> × 3<sup>2</sup> et 2<sup>2</sup> × 3 × 5.</p>`
    ],
    lecon: {
      titre: `Construire un nombre ayant un nombre donné de diviseurs`,
      html: `<p>On inverse la formule du nombre de diviseurs : pour avoir d diviseurs, on écrit d comme produit (a<sub>1</sub> + 1)(a<sub>2</sub> + 1)… et on en déduit les exposants possibles.</p>
<div class="exemple">6 diviseurs : 6 = 6 ou 6 = 3 × 2, donc n = p<sup>5</sup> ou n = p<sup>2</sup>q. Le plus petit : min(2<sup>5</sup>, 2<sup>2</sup> × 3) = 12.</div>
<p>Pour minimiser n à forme d'exposants fixée :</p>
<ul><li>utiliser les plus petits premiers : 2, 3, 5, 7… ;</li>
<li>donner le plus grand exposant à 2, le suivant à 3, etc.</li></ul>
<p>Fait remarquable : <strong>un nombre a un nombre impair de diviseurs si et seulement si c'est un carré parfait</strong> (tous les a<sub>i</sub> + 1 sont impairs, donc tous les a<sub>i</sub> pairs).</p>
<div class="astuce">Astuce olympique : les diviseurs vont par paires (d, n/d). Seul un carré a un diviseur « seul » (√n). C'est une autre preuve du fait précédent.</div>`
    },
    correction: `<p>Si n = p<sub>1</sub><sup>a<sub>1</sub></sup>…p<sub>k</sub><sup>a<sub>k</sub></sup>, on veut (a<sub>1</sub> + 1)…(a<sub>k</sub> + 1) = 12. Les factorisations de 12 en facteurs ≥ 2 sont :</p>
<div class="calc">12 ; 6 × 2 ; 4 × 3 ; 3 × 2 × 2</div>
<p>Pour chaque forme, le plus petit n s'obtient en prenant les plus petits premiers, le plus grand exposant allant à 2 :</p>
<ul><li>p<sup>11</sup> : 2<sup>11</sup> = 2048 ;</li>
<li>p<sup>5</sup>q : 2<sup>5</sup> × 3 = 96 ;</li>
<li>p<sup>3</sup>q<sup>2</sup> : 2<sup>3</sup> × 3<sup>2</sup> = 72 ;</li>
<li>p<sup>2</sup>qr : 2<sup>2</sup> × 3 × 5 = 60.</li></ul>
<p>Le minimum est <strong>60</strong>. Ses 12 diviseurs : 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60.</p>
<p><em>Erreur fréquente :</em> ne tester qu'une seule forme d'exposants. Il faut toutes les passer en revue.</p>`
  },
  {
    id: "arith-22",
    theme: "arith",
    niveau: 2,
    type: "demo",
    titre: `Quand n + 1 divise n² + 1`,
    enonce: `<p>Trouver tous les entiers n ≥ 0 tels que <span class="m">n + 1</span> divise <span class="m">n<sup>2</sup> + 1</span>.</p>`,
    figure: ``,
    pistes: [
      `<p>Teste n = 0, 1, 2, 3, 4, 5. Pour lesquels ça marche ?</p>`,
      `<p>n + 1 divise évidemment (n + 1)(n − 1) = n<sup>2</sup> − 1. Que dire alors de la différence (n<sup>2</sup> + 1) − (n<sup>2</sup> − 1) ?</p>`,
      `<p>Si n + 1 divise n<sup>2</sup> + 1 et n<sup>2</sup> − 1, alors n + 1 divise leur différence, qui vaut 2. Quels sont les diviseurs de 2 ?</p>`,
      `<p>n + 1 ∈ {1, 2}. Il reste à vérifier que les valeurs de n obtenues conviennent vraiment (la réciproque).</p>`
    ],
    lecon: {
      titre: `Faire disparaître n : la division « par un polynôme »`,
      html: `<p>Pour savoir quand a divise une expression E(n) où a dépend lui-même de n (comme n + 1), on retire à E(n) un multiple évident de a pour <strong>se débarrasser de n</strong>.</p>
<p>Outil de base : si d divise A et d divise B, alors d divise A − B et plus généralement uA + vB pour tous entiers u, v.</p>
<div class="exemple">n + 2 divise n<sup>2</sup> + 7 ? On a n<sup>2</sup> + 7 = (n + 2)(n − 2) + 11, donc n + 2 doit diviser 11 : n + 2 ∈ {1, 11}, soit n = 9 (pour n ≥ 0).</div>
<p>Autre façon de voir : modulo n + 1, on a n ≡ −1, donc n<sup>2</sup> + 1 ≡ (−1)<sup>2</sup> + 1 = 2.</p>
<p>On obtient une <strong>condition nécessaire</strong> (le diviseur divise une constante) qui ne laisse qu'un nombre fini de cas ; on termine en vérifiant chaque cas.</p>
<div class="astuce">Astuce olympique : dans un « trouver tous les n », il faut toujours deux parties : 1) si n convient alors n est dans la liste ; 2) chaque élément de la liste convient.</div>`
    },
    correction: `<p><strong>Analyse.</strong> Soit n ≥ 0 tel que n + 1 divise n<sup>2</sup> + 1. Comme n<sup>2</sup> − 1 = (n − 1)(n + 1), l'entier n + 1 divise aussi n<sup>2</sup> − 1. Il divise donc la différence :</p>
<div class="calc">(n<sup>2</sup> + 1) − (n<sup>2</sup> − 1) = 2</div>
<p>Comme n + 1 ≥ 1, on a n + 1 ∈ {1, 2}, soit n ∈ {0, 1}.</p>
<p><strong>Synthèse.</strong></p>
<ul><li>n = 0 : n + 1 = 1 divise n<sup>2</sup> + 1 = 1. ✓</li>
<li>n = 1 : n + 1 = 2 divise n<sup>2</sup> + 1 = 2. ✓</li></ul>
<p><strong>Conclusion :</strong> les entiers cherchés sont exactement <strong>n = 0 et n = 1</strong>.</p>
<p><em>Erreur fréquente :</em> diviser « comme des fractions » et écrire (n<sup>2</sup> + 1)/(n + 1) = n + 1/(n + 1)… C'est faux ! La bonne identité est n<sup>2</sup> + 1 = (n + 1)(n − 1) + 2.</p>`,
    bareme: [
      `Remarquer que n + 1 divise n² − 1 (ou utiliser n ≡ −1 mod n + 1).`,
      `En déduire que n + 1 divise 2.`,
      `Obtenir les candidats n = 0 et n = 1.`,
      `Vérifier que ces candidats conviennent et conclure.`
    ]
  },
  {
    id: "arith-23",
    theme: "arith",
    niveau: 2,
    type: "reponse",
    titre: `Une avalanche de 9`,
    enonce: `<p>Quelle est la somme des chiffres du nombre <span class="m">10<sup>25</sup> − 25</span> ?</p>`,
    figure: ``,
    reponse: ["219"],
    reponseTexte: `219`,
    pistes: [
      `<p>Commence petit : que valent 10<sup>3</sup> − 25, 10<sup>4</sup> − 25, 10<sup>5</sup> − 25 ?</p>`,
      `<p>975, 9975, 99975… Combien de 9 y a-t-il avant « 75 » quand on part de 10<sup>k</sup> ?</p>`,
      `<p>10<sup>k</sup> − 25 s'écrit avec (k − 2) chiffres 9 suivis de 75 : le nombre a k chiffres en tout. Pour k = 25, combien de 9 ?</p>`,
      `<p>Il y a 23 chiffres 9, puis 7 et 5. Il reste à additionner.</p>`
    ],
    lecon: {
      titre: `Chercher un motif sur de petits cas`,
      html: `<p>Face à un nombre gigantesque, on ne calcule pas : on regarde ce qui se passe pour de <strong>petites valeurs</strong>, on devine le motif, puis on le justifie.</p>
<p>Les nombres de la forme 10<sup>k</sup> sont un 1 suivi de k zéros, et 10<sup>k</sup> − 1 est formé de <strong>k chiffres 9</strong>.</p>
<div class="exemple">10<sup>k</sup> − 25 = (10<sup>k</sup> − 100) + 75 = 99…900 + 75 = 99…975, avec k − 2 chiffres 9.</div>
<p>Justifier le motif : 10<sup>k</sup> − 100 = 100 × (10<sup>k−2</sup> − 1), c'est-à-dire (k − 2) chiffres 9 suivis de 00 ; on ajoute 75 sans retenue.</p>
<div class="astuce">Astuce olympique : on peut contrôler la réponse modulo 9 ! La somme des chiffres d'un nombre a le même reste modulo 9 que le nombre. Ici 10<sup>25</sup> − 25 ≡ 1 − 25 = −24 ≡ 3 (mod 9), et 219 ≡ 2 + 1 + 9 = 12 ≡ 3. ✓</div>`
    },
    correction: `<p>Écrivons 10<sup>25</sup> − 25 = (10<sup>25</sup> − 100) + 75.</p>
<p>Or 10<sup>25</sup> − 100 = 100 × (10<sup>23</sup> − 1), et 10<sup>23</sup> − 1 s'écrit avec 23 chiffres 9. Donc 10<sup>25</sup> − 100 s'écrit « 23 chiffres 9 suivis de 00 », et en ajoutant 75 (sans retenue) :</p>
<div class="calc">10<sup>25</sup> − 25 = 99…9975 (23 chiffres 9, puis 7, puis 5)</div>
<p>La somme des chiffres vaut 23 × 9 + 7 + 5 = 207 + 12 = <strong>219</strong>.</p>
<p><em>Vérification modulo 9 :</em> 10 ≡ 1 donc 10<sup>25</sup> − 25 ≡ 1 − 25 = −24 ≡ 3 (mod 9), et 219 = 9 × 24 + 3. ✓</p>
<p><em>Erreur fréquente :</em> compter 24 ou 25 chiffres 9. Le nombre a 25 chiffres en tout, dont les deux derniers sont 7 et 5.</p>`
  },
  {
    id: "arith-24",
    theme: "arith",
    niveau: 2,
    type: "reponse",
    titre: `Somme des chiffres égale à 10`,
    enonce: `<p>Combien y a-t-il d'entiers compris entre 1 et 1000 dont la somme des chiffres vaut exactement 10 ?</p>`,
    figure: ``,
    reponse: ["63", "soixante-trois"],
    reponseTexte: `63`,
    pistes: [
      `<p>1000 ne convient pas. On peut écrire tout nombre de 1 à 999 avec exactement trois chiffres, en ajoutant des zéros devant : 7 → 007, 64 → 064. Que devient le problème ?</p>`,
      `<p>Il faut compter les triplets (a, b, c) de chiffres avec a + b + c = 10. Commence par fixer a = 0 : combien de couples (b, c) avec b + c = 10 et b, c ≤ 9 ?</p>`,
      `<p>Pour a fixé, b + c = 10 − a. Combien de couples (b, c) de chiffres pour chaque valeur de a de 0 à 9 ?</p>`,
      `<p>Pour a = 0 : 9 couples (de (1, 9) à (9, 1)). Pour a ≥ 1 : b + c = 10 − a ≤ 9 donne 11 − a couples. Il reste à additionner.</p>`
    ],
    lecon: {
      titre: `Compter des nombres selon la somme de leurs chiffres`,
      html: `<p>Pour compter les nombres de 0 à 999 dont la somme des chiffres vaut s, on les écrit tous avec <strong>trois chiffres</strong> (zéros devant autorisés). On compte alors les triplets (a, b, c) avec a + b + c = s et 0 ≤ a, b, c ≤ 9.</p>
<p>Nombre de couples (b, c) de chiffres avec b + c = t :</p>
<ul><li>t + 1 couples si 0 ≤ t ≤ 9 ;</li>
<li>19 − t couples si 10 ≤ t ≤ 18.</li></ul>
<p>On fixe le premier chiffre et on additionne sur tous les cas.</p>
<div class="exemple">Somme 3 : a = 0 → 4, a = 1 → 3, a = 2 → 2, a = 3 → 1 : total 10.</div>
<div class="astuce">Astuce olympique : sans la contrainte « ≤ 9 », le nombre de triplets d'entiers ≥ 0 de somme s est (s + 1)(s + 2)/2 (méthode des « étoiles et barres »). Pour s = 10 : 66, dont on retire les 3 triplets où un chiffre vaut 10 : 63.</div>`
    },
    correction: `<p>1000 a une somme de chiffres égale à 1 : il ne convient pas. On écrit les entiers de 1 à 999 avec trois chiffres abc (zéros devant autorisés) ; 000 ne gêne pas car sa somme vaut 0. On compte les triplets de chiffres avec a + b + c = 10.</p>
<p>Pour a fixé, il faut b + c = 10 − a avec 0 ≤ b, c ≤ 9 :</p>
<ul><li>a = 0 : b + c = 10, couples (1, 9), …, (9, 1) : 9 couples ;</li>
<li>a = k avec 1 ≤ k ≤ 9 : b + c = 10 − k ≤ 9, il y a 11 − k couples : 10, 9, 8, …, 2.</li></ul>
<div class="calc">9 + (10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2) = 9 + 54 = 63</div>
<p>Il y a <strong>63</strong> entiers.</p>
<p><em>Pour aller plus loin :</em> par symétrie (remplacer chaque chiffre x par 9 − x), il y a autant de nombres de 0 à 999 de somme 10 que de somme 27 − 10 = 17.</p>`
  },
  {
    id: "arith-25",
    theme: "arith",
    niveau: 2,
    type: "demo",
    titre: `Le mystère de 1001`,
    enonce: `<ol><li>Démontrer que tout nombre à six chiffres de la forme <span class="m">abcabc</span> (par exemple 317 317) est divisible par 7, par 11 et par 13.</li>
<li>Démontrer qu'un nombre à quatre chiffres <span class="m">abcd</span> est divisible par 11 si et seulement si <span class="m">d − c + b − a</span> est divisible par 11.</li></ol>`,
    figure: ``,
    pistes: [
      `<p>Question 1 : écris abcabc en fonction du nombre à trois chiffres abc. Par quoi faut-il multiplier 317 pour obtenir 317 317 ?</p>`,
      `<p>abcabc = 1000 × abc + abc = 1001 × abc. Décompose 1001 en facteurs premiers.</p>`,
      `<p>Question 2 : écris abcd = 1000a + 100b + 10c + d. Compare 1000 et 1001, 100 et 99, 10 et 11.</p>`,
      `<p>1000a + 100b + 10c + d = 1001a + 99b + 11c + (d − c + b − a). Les trois premiers termes sont multiples de 11. Il reste à conclure dans les deux sens.</p>`
    ],
    lecon: {
      titre: `Le critère de divisibilité par 11`,
      html: `<p>Les puissances de 10 sont alternativement « un de plus » et « un de moins » qu'un multiple de 11 :</p>
<div class="calc">1 ; 10 = 11 − 1 ; 100 = 99 + 1 ; 1000 = 1001 − 1 ; 10 000 = 9999 + 1…</div>
<p>(En langage des congruences : 10 ≡ −1 (mod 11), donc 10<sup>k</sup> ≡ (−1)<sup>k</sup>.)</p>
<p>Conséquence : un nombre a le même reste modulo 11 que la <strong>somme alternée</strong> de ses chiffres, en partant des unités : unités − dizaines + centaines − milliers + …</p>
<div class="exemple">918 082 : 2 − 8 + 0 − 8 + 1 − 9 = −22, multiple de 11, donc 918 082 est divisible par 11 (= 11 × 83 462).</div>
<p>Le nombre magique <strong>1001 = 7 × 11 × 13</strong> explique aussi le « tour » abcabc.</p>
<div class="astuce">Astuce olympique : tout palindrome ayant un nombre pair de chiffres est divisible par 11 (sa somme alternée vaut 0).</div>`
    },
    correction: `<p><strong>1.</strong> Notons N = abc le nombre à trois chiffres (100a + 10b + c). Alors :</p>
<div class="calc">abcabc = 1000 × N + N = 1001 × N = 7 × 11 × 13 × N</div>
<p>Donc abcabc est divisible par 7, par 11 et par 13.</p>
<p><strong>2.</strong> On écrit :</p>
<div class="calc">abcd = 1000a + 100b + 10c + d = 1001a + 99b + 11c + (d − c + b − a)</div>
<p>(En effet 1001a − a = 1000a, 99b + b = 100b, 11c − c = 10c.) Posons M = 1001a + 99b + 11c = 11(91a + 9b + c), multiple de 11. Alors abcd = M + (d − c + b − a).</p>
<ul><li>Si 11 divise abcd, alors 11 divise abcd − M = d − c + b − a.</li>
<li>Si 11 divise d − c + b − a, alors 11 divise M + (d − c + b − a) = abcd.</li></ul>
<p>D'où l'équivalence. ∎</p>
<p><em>Pour aller plus loin :</em> 7 × 11 × 13 = 1001 donne aussi un critère de divisibilité par 7 : on découpe le nombre en tranches de 3 chiffres depuis la droite et on fait la somme alternée des tranches.</p>`,
    bareme: [
      `Écrire abcabc = 1001 × abc.`,
      `Décomposer 1001 = 7 × 11 × 13 et conclure la question 1.`,
      `Réécrire abcd = 1001a + 99b + 11c + (d − c + b − a).`,
      `Démontrer les deux sens de l'équivalence.`
    ]
  },
  {
    id: "arith-26",
    theme: "arith",
    niveau: 2,
    type: "reponse",
    titre: `Une somme de puissances folles`,
    enonce: `<p>Quel est le chiffre des unités de la somme</p>
<div class="calc">1<sup>1</sup> + 2<sup>2</sup> + 3<sup>3</sup> + 4<sup>4</sup> + 5<sup>5</sup> + 6<sup>6</sup> + 7<sup>7</sup> + 8<sup>8</sup> + 9<sup>9</sup> + 10<sup>10</sup> ?</div>`,
    figure: ``,
    reponse: ["7", "sept"],
    reponseTexte: `7`,
    pistes: [
      `<p>Le chiffre des unités d'une somme ne dépend que des chiffres des unités des termes. Trouve-les un par un.</p>`,
      `<p>Certains sont immédiats : 1<sup>1</sup> → 1, 2<sup>2</sup> → 4, 3<sup>3</sup> = 27 → 7, 5<sup>5</sup> → 5, 6<sup>6</sup> → 6, 10<sup>10</sup> → 0. Et 4<sup>4</sup> = 256 ?</p>`,
      `<p>Pour 7<sup>7</sup>, 8<sup>8</sup>, 9<sup>9</sup>, utilise les cycles : 7 → (7, 9, 3, 1), 8 → (8, 4, 2, 6), 9 → (9, 1).</p>`,
      `<p>7<sup>7</sup> : 7 = 4 + 3, donc comme 7<sup>3</sup>. 8<sup>8</sup> : 8 est multiple de 4, donc comme 8<sup>4</sup>. 9<sup>9</sup> : exposant impair. Il reste à additionner les dix chiffres.</p>`
    ],
    lecon: {
      titre: `Rappel : cycles des derniers chiffres (tableau complet)`,
      html: `<p>Rappel : le chiffre des unités de a<sup>n</sup> ne dépend que du chiffre des unités de a et de la position de n dans un cycle.</p>
<div class="calc">0 : 0 &nbsp;|&nbsp; 1 : 1 &nbsp;|&nbsp; 5 : 5 &nbsp;|&nbsp; 6 : 6<br>4 : 4, 6 &nbsp;|&nbsp; 9 : 9, 1<br>2 : 2, 4, 8, 6 &nbsp;|&nbsp; 3 : 3, 9, 7, 1<br>7 : 7, 9, 3, 1 &nbsp;|&nbsp; 8 : 8, 4, 2, 6</div>
<p>Nouveauté : <strong>tous</strong> les cycles ont une longueur qui divise 4. Donc, pour n ≥ 1, a<sup>n</sup> et a<sup>n+4</sup> ont toujours le même chiffre des unités, quel que soit a.</p>
<div class="exemple">Chiffre des unités de 13<sup>13</sup> : 13 = 4 × 3 + 1, donc comme 3<sup>1</sup> : 3.</div>
<div class="astuce">Astuce olympique : pour une somme, on travaille modulo 10 terme par terme et on ne garde que les chiffres des unités à chaque étape.</div>`
    },
    correction: `<p>On calcule le chiffre des unités de chaque terme :</p>
<ul><li>1<sup>1</sup> = 1 → 1 ; 2<sup>2</sup> = 4 → 4 ; 3<sup>3</sup> = 27 → 7 ; 4<sup>4</sup> = 256 → 6 ;</li>
<li>5<sup>5</sup> → 5 (toute puissance de 5 finit par 5) ; 6<sup>6</sup> → 6 ;</li>
<li>7<sup>7</sup> : cycle 7, 9, 3, 1 et 7 = 4 + 3, donc 3 (en effet 7<sup>7</sup> = 823 543) ;</li>
<li>8<sup>8</sup> : cycle 8, 4, 2, 6 et 8 est multiple de 4, donc 6 (8<sup>8</sup> = 16 777 216) ;</li>
<li>9<sup>9</sup> : cycle 9, 1 et 9 est impair, donc 9 ;</li>
<li>10<sup>10</sup> → 0.</li></ul>
<div class="calc">1 + 4 + 7 + 6 + 5 + 6 + 3 + 6 + 9 + 0 = 47</div>
<p>Le chiffre des unités de la somme est <strong>7</strong>.</p>
<p><em>Erreur fréquente :</em> pour 8<sup>8</sup>, prendre le « 8<sup>e</sup> élément » du cycle en se trompant de rang. Quand l'exposant est multiple de 4, on prend le 4<sup>e</sup> élément du cycle.</p>`
  },
  {
    id: "arith-27",
    theme: "arith",
    niveau: 2,
    type: "reponse",
    titre: `Les deux derniers chiffres`,
    enonce: `<p>Quels sont les deux derniers chiffres (chiffre des dizaines et chiffre des unités) de <span class="m">7<sup>2026</sup></span> ?</p>
<p>Donner la réponse sous la forme d'un nombre à deux chiffres.</p>`,
    figure: ``,
    reponse: ["49"],
    reponseTexte: `49`,
    pistes: [
      `<p>Les deux derniers chiffres d'un nombre, c'est son reste dans la division par 100. Calcule 7<sup>2</sup>, 7<sup>3</sup>, 7<sup>4</sup>.</p>`,
      `<p>7<sup>4</sup> = 2401. Que remarques-tu sur ses deux derniers chiffres ?</p>`,
      `<p>7<sup>4</sup> ≡ 1 (mod 100). Écris 2026 = 4 × 506 + 2.</p>`,
      `<p>7<sup>2026</sup> = (7<sup>4</sup>)<sup>506</sup> × 7<sup>2</sup> ≡ 1 × 49 (mod 100). Il ne reste qu'à conclure.</p>`
    ],
    lecon: {
      titre: `Travailler modulo 100`,
      html: `<p>Les <strong>deux derniers chiffres</strong> d'un entier positif N forment le reste de N dans la division par 100 ; les trois derniers, le reste modulo 1000.</p>
<p>Les règles des congruences s'appliquent : on peut ne garder que les deux derniers chiffres à chaque multiplication.</p>
<div class="exemple">3<sup>5</sup> = 243 ≡ 43 ; 3<sup>10</sup> ≡ 43<sup>2</sup> = 1849 ≡ 49 ; 3<sup>20</sup> ≡ 49<sup>2</sup> = 2401 ≡ 1 (mod 100).</div>
<p>Méthode : chercher une puissance qui vaut 1 modulo 100 (ou 01 à la fin), puis réduire l'exposant, comme pour un seul chiffre.</p>
<p>Si aucune petite puissance ne donne 1, on peut aussi utiliser le <strong>binôme</strong> : par exemple (10k + 1)<sup>n</sup> ≡ 10kn + 1 (mod 100), car les autres termes contiennent 100.</p>
<div class="astuce">Astuce olympique : 7<sup>4</sup> = 2401 est un « nombre magique » à retenir : il finit par 01, donc toute puissance 7<sup>4k</sup> finit par 01.</div>`
    },
    correction: `<p>Les deux derniers chiffres de 7<sup>2026</sup> sont donnés par son reste modulo 100.</p>
<p>On a 7<sup>2</sup> = 49 et 7<sup>4</sup> = 49<sup>2</sup> = 2401, donc <span class="m">7<sup>4</sup> ≡ 1 (mod 100)</span>.</p>
<p>Comme 2026 = 4 × 506 + 2 :</p>
<div class="calc">7<sup>2026</sup> = (7<sup>4</sup>)<sup>506</sup> × 7<sup>2</sup> ≡ 1<sup>506</sup> × 49 = 49 (mod 100)</div>
<p>Les deux derniers chiffres de 7<sup>2026</sup> sont <strong>49</strong>.</p>
<p><em>Cohérence :</em> on retrouve bien le chiffre des unités 9 trouvé dans le problème « Le dernier chiffre de 7 puissance 2026 ».</p>`
  },
  {
    id: "arith-28",
    theme: "arith",
    niveau: 2,
    type: "demo",
    titre: `p² − 1 et le nombre 24`,
    enonce: `<p>Démontrer que si p est un nombre premier supérieur ou égal à 5, alors <span class="m">p<sup>2</sup> − 1</span> est divisible par 24.</p>
<p>(Exemples : 5<sup>2</sup> − 1 = 24, 7<sup>2</sup> − 1 = 48, 11<sup>2</sup> − 1 = 120.)</p>`,
    figure: ``,
    pistes: [
      `<p>Factorise : p<sup>2</sup> − 1 = (p − 1)(p + 1). Et 24 = 8 × 3 avec 8 et 3 premiers entre eux.</p>`,
      `<p>Divisibilité par 3 : regarde les trois entiers consécutifs p − 1, p, p + 1. L'un est multiple de 3. Peut-il s'agir de p ?</p>`,
      `<p>Divisibilité par 8 : p est impair, donc p − 1 et p + 1 sont deux nombres pairs consécutifs. Que peut-on dire de l'un des deux ?</p>`,
      `<p>Parmi deux nombres pairs consécutifs, l'un est multiple de 4. Le produit contient donc un facteur 2 et un facteur 4 : il reste à conclure.</p>`
    ],
    lecon: {
      titre: `Découper le diviseur et exploiter les consécutifs`,
      html: `<p>Pour montrer qu'une expression est divisible par un nombre composé, on le <strong>découpe en puissances de premiers</strong> distinctes (premières entre elles) et on traite chaque morceau séparément : 24 = 8 × 3, 60 = 4 × 3 × 5, etc.</p>
<p>Outils classiques :</p>
<ul><li>factoriser : a<sup>2</sup> − b<sup>2</sup> = (a − b)(a + b) ;</li>
<li>parmi k entiers consécutifs, l'un est multiple de k ;</li>
<li>parmi deux nombres pairs consécutifs (2m et 2m + 2), l'un est multiple de 4 : leur produit est donc multiple de 8.</li></ul>
<div class="exemple">Le produit de deux pairs consécutifs 6 × 8 = 48 et 10 × 12 = 120 sont bien multiples de 8.</div>
<p>Un nombre premier p ≥ 5 n'est divisible ni par 2 ni par 3 : c'est ce qui force p − 1 et p + 1 à « porter » les facteurs 2 et 3.</p>
<div class="astuce">Astuce olympique : on peut aussi dire qu'un premier p ≥ 5 s'écrit 6k + 1 ou 6k − 1 ; mais attention, la réciproque est fausse (25 = 6 × 4 + 1 n'est pas premier).</div>`
    },
    correction: `<p>Soit p premier, p ≥ 5. On écrit <span class="m">p<sup>2</sup> − 1 = (p − 1)(p + 1)</span>. Comme 24 = 8 × 3 avec 8 et 3 premiers entre eux, il suffit de montrer que ce produit est divisible par 8 et par 3.</p>
<p><strong>Divisibilité par 3.</strong> Parmi les trois entiers consécutifs p − 1, p, p + 1, l'un est multiple de 3. Ce n'est pas p, car p est premier et p ≠ 3. Donc p − 1 ou p + 1 est multiple de 3, et 3 divise (p − 1)(p + 1).</p>
<p><strong>Divisibilité par 8.</strong> p est premier et p ≠ 2, donc p est impair ; ainsi p − 1 et p + 1 sont pairs. Ce sont deux nombres pairs consécutifs : écrivons p − 1 = 2m, p + 1 = 2m + 2 = 2(m + 1). Alors (p − 1)(p + 1) = 4m(m + 1), et m(m + 1) est pair (produit de deux entiers consécutifs). Donc 8 divise (p − 1)(p + 1).</p>
<p><strong>Conclusion.</strong> p<sup>2</sup> − 1 est divisible par 3 et par 8, premiers entre eux, donc par 24. ∎</p>
<p><em>Pour aller plus loin :</em> le résultat est vrai pour tout entier n premier avec 6 (n = 25 : 624 = 24 × 26), car la preuve n'utilise que « p impair et non multiple de 3 ».</p>`,
    bareme: [
      `Factoriser p² − 1 = (p − 1)(p + 1) et se ramener à 3 et 8.`,
      `Justifier la divisibilité par 3 (trois consécutifs, p ≠ 3).`,
      `Justifier la divisibilité par 8 (deux pairs consécutifs dont un multiple de 4).`,
      `Conclure en utilisant que 3 et 8 sont premiers entre eux.`
    ]
  },
  {
    id: "arith-29",
    theme: "arith",
    niveau: 3,
    type: "reponse",
    titre: `Les nombres de zéros impossibles`,
    enonce: `<p>Pour chaque entier n ≥ 1, on note Z(n) le nombre de zéros à la fin de l'écriture décimale de n! (par exemple Z(10) = 2 car 10! = 3 628 800).</p>
<p>Parmi les entiers k de 1 à 100, combien ne sont égaux à Z(n) pour <strong>aucun</strong> entier n ?</p>`,
    figure: ``,
    reponse: ["19", "dix-neuf"],
    reponseTexte: `19`,
    pistes: [
      `<p>Calcule Z(n) pour n = 1 à 30. Comment évolue Z quand n augmente de 1 ? Quand Z(n) change-t-il ?</p>`,
      `<p>Z ne change que lorsque n passe par un multiple de 5. En passant de 24! à 25!, de combien Z augmente-t-il ? Quelle valeur est « sautée » ?</p>`,
      `<p>En arrivant à n = 5m, Z augmente du nombre de facteurs 5 de 5m. Si ce nombre vaut 2, une valeur est sautée ; s'il vaut 3, deux valeurs sont sautées…</p>`,
      `<p>Z(400) = 99 et Z(405) = 100. Il reste à compter, pour les multiples de 5 jusqu'à 405, le nombre total de valeurs sautées : chaque multiple de 25 en saute au moins une, chaque multiple de 125 une de plus.</p>`
    ],
    lecon: {
      titre: `Rappel : formule de Legendre, et les sauts`,
      html: `<p>Rappel : Z(n) = (nombre de multiples de 5 jusqu'à n) + (multiples de 25) + (multiples de 125) + …</p>
<p>Nouveauté : étudier <strong>comment Z(n) varie</strong>. Quand on passe de (n − 1)! à n!, on multiplie par n, et Z augmente du nombre de facteurs 5 dans n :</p>
<ul><li>n non multiple de 5 : Z ne bouge pas ;</li>
<li>n multiple de 5 mais pas de 25 : Z augmente de 1 ;</li>
<li>n multiple de 25 mais pas de 125 : Z augmente de 2 (une valeur sautée) ;</li>
<li>n multiple de 125 mais pas de 625 : Z augmente de 3 (deux valeurs sautées).</li></ul>
<div class="exemple">Z(24) = 4, Z(25) = 6 : la valeur 5 n'est jamais atteinte. Aucune factorielle ne finit par exactement 5 zéros !</div>
<div class="astuce">Astuce olympique : pour inverser la fonction Z (trouver n avec Z(n) = k), on commence par n ≈ 4k, car Z(n) ≈ n/5 + n/25 + … ≈ n/4.</div>`
    },
    correction: `<p>Z ne change que lorsque n est multiple de 5, et en passant de (n − 1)! à n!, Z augmente exactement du nombre de facteurs 5 de n.</p>
<p>Écrivons n = 5m. Le nombre de facteurs 5 de 5m est 1 + (nombre de facteurs 5 de m). Le saut de Z en n = 5m « oublie » donc exactement autant de valeurs que m a de facteurs 5.</p>
<p>Calculons : Z(400) = 80 + 16 + 3 = 99 et Z(405) = 81 + 16 + 3 = 100. Toutes les valeurs de 1 à 100 atteintes le sont donc pour n ≤ 405, c'est-à-dire en des sauts n = 5m avec 1 ≤ m ≤ 81, et toute valeur sautée pendant ces sauts est ≤ 100.</p>
<p>Le nombre de valeurs sautées vaut donc la somme, pour m de 1 à 81, du nombre de facteurs 5 de m :</p>
<div class="calc">(multiples de 5 jusqu'à 81) + (multiples de 25 jusqu'à 81) = 16 + 3 = 19</div>
<p>(Remarquons que c'est simplement Z(81), le nombre de facteurs 5 de 81!.)</p>
<p>La réponse est <strong>19</strong>. Par exemple, les valeurs 5, 11, 17, 23, 29 sont les premières jamais atteintes (sauts en n = 25, 50, 75, 100, 125, ce dernier en sautant deux : 29 et 30).</p>
<p><em>Erreur fréquente :</em> compter seulement les multiples de 25 (16 sauts) et oublier que 125, 250 et 375 font sauter deux valeurs chacun.</p>`
  },
  {
    id: "arith-30",
    theme: "arith",
    niveau: 3,
    type: "demo",
    titre: `Quand p² + 2 est premier`,
    enonce: `<p>Trouver tous les nombres premiers p tels que <span class="m">p<sup>2</sup> + 2</span> soit aussi un nombre premier.</p>`,
    figure: ``,
    pistes: [
      `<p>Teste p = 2, 3, 5, 7, 11. Pour lesquels p<sup>2</sup> + 2 est-il premier ?</p>`,
      `<p>p = 3 donne 11, premier. Pour p = 5, 7, 11, calcule p<sup>2</sup> + 2 et cherche un diviseur commun à tous ces résultats.</p>`,
      `<p>27, 51, 123… sont tous multiples de 3. Rappel : un carré a pour reste 0 ou 1 modulo 3. Que vaut p<sup>2</sup> si p n'est pas multiple de 3 ?</p>`,
      `<p>Si p ≠ 3, alors p<sup>2</sup> ≡ 1 (mod 3) et p<sup>2</sup> + 2 ≡ 0 (mod 3). Il reste à vérifier que p<sup>2</sup> + 2 &gt; 3 et à traiter p = 3.</p>`
    ],
    lecon: {
      titre: `« Trouver tous les premiers » : l'analyse modulo un petit nombre`,
      html: `<p>Dans un problème « trouver tous les nombres premiers p tels que… », la réponse est souvent une seule petite valeur. La démarche type :</p>
<ol><li><strong>Tester</strong> les petites valeurs et deviner la réponse ;</li>
<li>chercher un <strong>petit diviseur commun</strong> (2, 3, 5…) à toutes les « mauvaises » valeurs ;</li>
<li>prouver que ce diviseur divise toujours l'expression, sauf pour la bonne valeur, à l'aide des restes ;</li>
<li>vérifier que l'expression est <strong>strictement plus grande</strong> que ce diviseur (sinon elle pourrait lui être égale et être premier !).</li></ol>
<p>Rappel des carrés modulo 3 : 0<sup>2</sup> ≡ 0, 1<sup>2</sup> ≡ 1, 2<sup>2</sup> = 4 ≡ 1. Donc si 3 ne divise pas p, <strong>p<sup>2</sup> ≡ 1 (mod 3)</strong>.</p>
<div class="exemple">p et 8p<sup>2</sup> + 1 tous deux premiers ? Si p ≠ 3, 8p<sup>2</sup> + 1 ≡ 8 + 1 = 9 ≡ 0 (mod 3) : seul p = 3 (qui donne 73) convient.</div>
<div class="astuce">Astuce olympique : n'oubliez pas p = 2 ! Il se comporte souvent à part car c'est le seul premier pair.</div>`
    },
    correction: `<p><strong>Cas p = 3.</strong> p<sup>2</sup> + 2 = 11 est premier : p = 3 convient.</p>
<p><strong>Cas p ≠ 3.</strong> Alors p n'est pas divisible par 3 (p est premier), donc p ≡ 1 ou p ≡ 2 (mod 3). Dans les deux cas p<sup>2</sup> ≡ 1 (mod 3) (car 1<sup>2</sup> = 1 et 2<sup>2</sup> = 4 ≡ 1). Ainsi :</p>
<div class="calc">p<sup>2</sup> + 2 ≡ 1 + 2 = 3 ≡ 0 (mod 3)</div>
<p>p<sup>2</sup> + 2 est donc un multiple de 3. De plus p ≥ 2 donne p<sup>2</sup> + 2 ≥ 6 &gt; 3. Un multiple de 3 strictement supérieur à 3 n'est pas premier.</p>
<p>(Ceci couvre aussi p = 2 : 2<sup>2</sup> + 2 = 6 = 2 × 3.)</p>
<p><strong>Conclusion :</strong> le seul nombre premier qui convient est <strong>p = 3</strong>.</p>
<p><em>Erreur fréquente :</em> conclure « p<sup>2</sup> + 2 est multiple de 3, donc pas premier » sans vérifier qu'il est différent de 3. Ici c'est immédiat, mais dans d'autres problèmes, c'est exactement là que se cache la solution.</p>`,
    bareme: [
      `Vérifier que p = 3 convient.`,
      `Pour p ≠ 3, montrer que p² ≡ 1 (mod 3).`,
      `En déduire que 3 divise p² + 2 et que p² + 2 > 3, donc qu'il n'est pas premier.`,
      `Conclure que p = 3 est l'unique solution.`
    ]
  },
  {
    id: "arith-31",
    theme: "arith",
    niveau: 3,
    type: "reponse",
    titre: `Fractions égyptiennes`,
    enonce: `<p>Combien existe-t-il de couples (x, y) d'entiers strictement positifs tels que</p>
<div class="calc">1/x + 1/y = 1/12 ?</div>
<p>(Les couples (x, y) et (y, x) sont comptés séparément lorsque x ≠ y.)</p>`,
    figure: ``,
    pistes: [
      `<p>Trouve quelques solutions à la main : par exemple x = y = 24, ou x = 13. Que peut-on dire de x et y par rapport à 12 ?</p>`,
      `<p>Chasse les dénominateurs : multiplie par 12xy. Tu obtiens 12y + 12x = xy.</p>`,
      `<p>Réécris xy − 12x − 12y = 0 et ajoute 144 des deux côtés. Peux-tu factoriser le membre de gauche ?</p>`,
      `<p>(x − 12)(y − 12) = 144, avec x − 12 &gt; 0 et y − 12 &gt; 0. Il reste à compter les diviseurs positifs de 144.</p>`
    ],
    lecon: {
      titre: `La factorisation « à la Simon » : xy + ax + by`,
      html: `<p>Une équation du type <span class="m">xy − ax − by = c</span> se factorise en ajoutant ab des deux côtés :</p>
<div class="calc">xy − ax − by + ab = (x − b)(y − a), donc (x − b)(y − a) = c + ab</div>
<p>On transforme ainsi une équation en « <strong>produit = constante</strong> », et les solutions entières correspondent aux façons d'écrire la constante comme produit de deux entiers : on se ramène à <strong>compter des diviseurs</strong>.</p>
<div class="exemple">xy = x + y : (x − 1)(y − 1) = 1, donc x = y = 2 (en entiers positifs).</div>
<p>Attention aux <strong>signes</strong> : les facteurs peuvent être négatifs. Il faut une inégalité pour les exclure (ici 1/x &lt; 1/12 donne x &gt; 12).</p>
<div class="astuce">Astuce olympique : pour 1/x + 1/y = 1/n, on obtient (x − n)(y − n) = n<sup>2</sup> : le nombre de solutions ordonnées est le nombre de diviseurs de n<sup>2</sup>.</div>`
    },
    reponse: ["15", "quinze"],
    reponseTexte: `15`,
    correction: `<p>Comme 1/x &lt; 1/x + 1/y = 1/12, on a x &gt; 12 ; de même y &gt; 12.</p>
<p>En multipliant par 12xy : 12y + 12x = xy, soit xy − 12x − 12y = 0. En ajoutant 144 :</p>
<div class="calc">xy − 12x − 12y + 144 = 144 ⇔ (x − 12)(y − 12) = 144</div>
<p>Posons a = x − 12 et b = y − 12, entiers strictement positifs avec ab = 144. Réciproquement, tout tel couple (a, b) donne une solution (x, y) = (a + 12, b + 12). Le nombre de solutions est donc le nombre de diviseurs positifs de 144 (a choisi, b = 144/a est imposé).</p>
<p>144 = 2<sup>4</sup> × 3<sup>2</sup> a (4 + 1)(2 + 1) = 15 diviseurs.</p>
<p>Il y a <strong>15</strong> couples, par exemple (13, 156), (24, 24), (156, 13), (20, 30), (30, 20)…</p>
<p><em>Erreur fréquente :</em> répondre 8 en ne comptant que les couples avec x ≤ y, alors que l'énoncé compte (x, y) et (y, x) séparément.</p>`
  },
  {
    id: "arith-32",
    theme: "arith",
    niveau: 3,
    type: "demo",
    titre: `n⁴ + 4 est-il premier ?`,
    enonce: `<p>Trouver tous les entiers n ≥ 1 tels que <span class="m">n<sup>4</sup> + 4</span> soit un nombre premier.</p>`,
    figure: ``,
    pistes: [
      `<p>Calcule n<sup>4</sup> + 4 pour n = 1, 2, 3, 4 et décompose les résultats : 5, 20, 85, 260…</p>`,
      `<p>Un nombre qui n'est jamais premier se factorise souvent. Essaie de faire apparaître une différence de deux carrés : ajoute et retire 4n<sup>2</sup>.</p>`,
      `<p>n<sup>4</sup> + 4 = (n<sup>4</sup> + 4n<sup>2</sup> + 4) − 4n<sup>2</sup> = (n<sup>2</sup> + 2)<sup>2</sup> − (2n)<sup>2</sup>. Factorise avec a<sup>2</sup> − b<sup>2</sup>.</p>`,
      `<p>n<sup>4</sup> + 4 = (n<sup>2</sup> − 2n + 2)(n<sup>2</sup> + 2n + 2). Pour que ce soit premier, un des facteurs doit valoir 1. Écris n<sup>2</sup> − 2n + 2 = (n − 1)<sup>2</sup> + 1.</p>`
    ],
    lecon: {
      titre: `Factoriser pour prouver qu'un nombre n'est pas premier`,
      html: `<p>Pour montrer qu'une expression N(n) n'est (presque) jamais première, on cherche une <strong>factorisation</strong> N = A × B, puis on montre que A &gt; 1 et B &gt; 1 (sauf cas particuliers).</p>
<p>Un nombre premier N = A × B (avec A, B entiers positifs) impose A = 1 ou B = 1.</p>
<p>Identités à connaître :</p>
<ul><li>a<sup>2</sup> − b<sup>2</sup> = (a − b)(a + b) ;</li>
<li>a<sup>3</sup> − b<sup>3</sup> = (a − b)(a<sup>2</sup> + ab + b<sup>2</sup>) et a<sup>3</sup> + b<sup>3</sup> = (a + b)(a<sup>2</sup> − ab + b<sup>2</sup>) ;</li>
<li><strong>identité de Sophie Germain</strong> : a<sup>4</sup> + 4b<sup>4</sup> = (a<sup>2</sup> + 2b<sup>2</sup> − 2ab)(a<sup>2</sup> + 2b<sup>2</sup> + 2ab).</li></ul>
<p>Technique pour l'obtenir : <strong>compléter le carré</strong> puis reconnaître a<sup>2</sup> − b<sup>2</sup>.</p>
<div class="exemple">n<sup>3</sup> − 1 = (n − 1)(n<sup>2</sup> + n + 1) est premier seulement si n − 1 = 1, soit n = 2 (qui donne 7).</div>
<div class="astuce">Astuce olympique : Sophie Germain (1776-1831) a appris les mathématiques seule, en correspondant avec Gauss sous un nom d'homme. Son identité est un grand classique des olympiades !</div>`
    },
    correction: `<p><strong>Factorisation.</strong> On complète le carré :</p>
<div class="calc">n<sup>4</sup> + 4 = n<sup>4</sup> + 4n<sup>2</sup> + 4 − 4n<sup>2</sup> = (n<sup>2</sup> + 2)<sup>2</sup> − (2n)<sup>2</sup> = (n<sup>2</sup> − 2n + 2)(n<sup>2</sup> + 2n + 2)</div>
<p>Posons A = n<sup>2</sup> − 2n + 2 = (n − 1)<sup>2</sup> + 1 et B = n<sup>2</sup> + 2n + 2. Pour n ≥ 1, on a A ≥ 1 et B ≥ 5 &gt; 1.</p>
<p><strong>Analyse.</strong> Si n<sup>4</sup> + 4 = A × B est premier, alors l'un des facteurs vaut 1. Comme B &gt; 1, il faut A = 1, soit (n − 1)<sup>2</sup> = 0, donc n = 1.</p>
<p><strong>Synthèse.</strong> Pour n = 1 : 1 + 4 = 5 est premier. ✓</p>
<p><strong>Conclusion :</strong> l'unique solution est <strong>n = 1</strong>.</p>
<p><em>Pour aller plus loin :</em> même idée pour montrer que 4<sup>n</sup> + n<sup>4</sup> n'est jamais premier pour n &gt; 1 (pour n impair, écrire 4<sup>n</sup> = 4 × (2<sup>(n−1)/2</sup>)<sup>4</sup>).</p>`,
    bareme: [
      `Obtenir la factorisation n⁴ + 4 = (n² − 2n + 2)(n² + 2n + 2).`,
      `Justifier que le grand facteur est strictement supérieur à 1.`,
      `En déduire que le petit facteur doit valoir 1, donc n = 1.`,
      `Vérifier que n = 1 donne bien un nombre premier (5).`
    ]
  },
  {
    id: "arith-33",
    theme: "arith",
    niveau: 3,
    type: "reponse",
    titre: `Somme de factorielles modulo 7`,
    enonce: `<p>Quel est le reste de la division euclidienne de</p>
<div class="calc">1! + 2! + 3! + … + 2026! + 2027!</div>
<p>par 7 ?</p>`,
    figure: ``,
    reponse: ["5", "cinq"],
    reponseTexte: `5`,
    pistes: [
      `<p>À partir de quel rang k les factorielles k! sont-elles toutes divisibles par 7 ?</p>`,
      `<p>Pour k ≥ 7, k! = 1 × 2 × … × 7 × … × k contient le facteur 7. Ces termes ne changent pas le reste.</p>`,
      `<p>Il reste à calculer 1! + 2! + 3! + 4! + 5! + 6! = 1 + 2 + 6 + 24 + 120 + 720.</p>`,
      `<p>Tu peux réduire chaque terme modulo 7 au fur et à mesure : 24 ≡ 3, 120 ≡ 1, 720 ≡ 6. Il ne reste qu'à additionner.</p>`
    ],
    lecon: {
      titre: `Les factorielles deviennent vite divisibles`,
      html: `<p>Pour tout k ≥ m, le nombre k! = 1 × 2 × … × k contient le facteur m, donc <strong>m divise k!</strong>.</p>
<p>Conséquence : dans une somme de factorielles étudiée modulo m, seuls les termes 1!, 2!, …, (m − 1)! comptent (et parfois moins : 4! = 24 est déjà divisible par 8 et 12).</p>
<div class="exemple">1! + 2! + … + 100! modulo 10 : dès 5!, tout est multiple de 10. 1 + 2 + 6 + 24 = 33, donc la somme se termine par 3.</div>
<p>Autre application classique : 1! + 2! + … + n! n'est un carré que pour n = 1 et n = 3. En effet, pour n ≥ 4, la somme se termine par 3, et un carré ne finit jamais par 3.</p>
<div class="astuce">Astuce olympique : modulo un premier p, on a (p − 1)! ≡ −1 (théorème de Wilson). Ici 6! = 720 = 7 × 103 − 1 ≡ −1 (mod 7).</div>`
    },
    correction: `<p>Pour k ≥ 7, le produit k! = 1 × 2 × … × k contient le facteur 7, donc k! ≡ 0 (mod 7). Il suffit de calculer :</p>
<div class="calc">1! + 2! + 3! + 4! + 5! + 6! = 1 + 2 + 6 + 24 + 120 + 720 = 873</div>
<p>Or 873 = 7 × 124 + 5. (Ou terme à terme : 1 + 2 + 6 + 3 + 1 + 6 = 19 ≡ 5 (mod 7).)</p>
<p>Le reste est <strong>5</strong>.</p>
<p><em>Pour aller plus loin :</em> la même somme modulo 12 vaut 9 (car 4! = 24 et toutes les suivantes sont multiples de 12, et 1 + 2 + 6 = 9).</p>`
  },
  {
    id: "arith-34",
    theme: "arith",
    niveau: 3,
    type: "demo",
    titre: `La descente infinie`,
    enonce: `<p>Démontrer que la seule solution en entiers de l'équation</p>
<div class="calc">x<sup>2</sup> + y<sup>2</sup> = 3z<sup>2</sup></div>
<p>est x = y = z = 0.</p>`,
    figure: ``,
    pistes: [
      `<p>Regarde l'équation modulo 3. Quels sont les restes possibles d'un carré modulo 3 ?</p>`,
      `<p>Les carrés valent 0 ou 1 modulo 3. Pour que x<sup>2</sup> + y<sup>2</sup> ≡ 0 (mod 3), que faut-il pour x et y ?</p>`,
      `<p>x et y sont multiples de 3 : x = 3x', y = 3y'. Remplace dans l'équation et simplifie : que peux-tu dire de z ?</p>`,
      `<p>On obtient 3(x'<sup>2</sup> + y'<sup>2</sup>) = z<sup>2</sup>, donc z = 3z', et (x', y', z') est une nouvelle solution, trois fois plus petite. Il reste à expliquer pourquoi c'est impossible si la solution n'est pas nulle (considère une solution non nulle avec |x| + |y| + |z| minimal).</p>`
    ],
    lecon: {
      titre: `La descente infinie de Fermat`,
      html: `<p>Principe : <strong>il n'existe pas de suite infinie strictement décroissante d'entiers positifs</strong>. (On finirait par passer sous 0.)</p>
<p>Méthode de la descente infinie pour montrer qu'une équation n'a que la solution nulle :</p>
<ol><li>supposer par l'absurde qu'il existe une solution non nulle, et en choisir une <strong>minimale</strong> (par exemple avec |x| + |y| + |z| le plus petit possible) ;</li>
<li>montrer, souvent avec un argument de divisibilité, qu'on peut en fabriquer une <strong>plus petite</strong>, encore non nulle ;</li>
<li>contradiction avec la minimalité.</li></ol>
<p>Ingrédient typique : un modulo qui force toutes les inconnues à être divisibles par un même nombre (ici 3), ce qui permet de tout diviser.</p>
<div class="exemple">x<sup>2</sup> = 2y<sup>2</sup> : x est pair, x = 2x', puis 2x'<sup>2</sup> = y<sup>2</sup>, y pair… On retrouve l'irrationalité de √2 !</div>
<div class="astuce">Astuce olympique : rédiger avec une solution minimale est plus propre que « on recommence indéfiniment », et c'est ce que le jury attend.</div>`
    },
    correction: `<p><strong>Étape 1 : les carrés modulo 3.</strong> Si n ≡ 0, n<sup>2</sup> ≡ 0 ; si n ≡ ±1, n<sup>2</sup> ≡ 1 (mod 3). Donc un carré vaut 0 ou 1 modulo 3, et il vaut 0 si et seulement si n est multiple de 3.</p>
<p><strong>Étape 2 : une solution se divise par 3.</strong> Soit (x, y, z) une solution. Alors x<sup>2</sup> + y<sup>2</sup> = 3z<sup>2</sup> ≡ 0 (mod 3). Or x<sup>2</sup> + y<sup>2</sup> modulo 3 vaut 0 + 0, 0 + 1, 1 + 0 ou 1 + 1 = 2 : seul le cas 0 + 0 donne 0. Donc 3 divise x et y : x = 3x', y = 3y'. En remplaçant : 9(x'<sup>2</sup> + y'<sup>2</sup>) = 3z<sup>2</sup>, soit z<sup>2</sup> = 3(x'<sup>2</sup> + y'<sup>2</sup>). Donc 3 divise z<sup>2</sup>, puis 3 divise z (étape 1) : z = 3z'. Et en divisant par 9 : x'<sup>2</sup> + y'<sup>2</sup> = 3z'<sup>2</sup>.</p>
<p>Ainsi, <strong>si (x, y, z) est solution, alors (x/3, y/3, z/3) est une solution en entiers</strong>.</p>
<p><strong>Étape 3 : descente.</strong> Supposons par l'absurde qu'il existe une solution non nulle. Parmi toutes les solutions non nulles, choisissons-en une avec S = |x| + |y| + |z| minimal (S est un entier ≥ 1). D'après l'étape 2, (x/3, y/3, z/3) est aussi une solution non nulle, avec une somme S/3 &lt; S. Cela contredit la minimalité.</p>
<p><strong>Conclusion :</strong> la seule solution est x = y = z = 0. ∎</p>
<p><em>Conséquence :</em> il n'existe pas de fractions a et b telles que a<sup>2</sup> + b<sup>2</sup> = 3 (sinon, en multipliant par le carré d'un dénominateur commun, on obtiendrait une solution non nulle).</p>`,
    bareme: [
      `Établir les restes des carrés modulo 3 (et que n² ≡ 0 ⇔ 3 | n).`,
      `En déduire que x et y sont multiples de 3.`,
      `En déduire que z est multiple de 3 et que (x/3, y/3, z/3) est solution.`,
      `Conclure proprement par descente infinie (solution minimale ou suite strictement décroissante).`
    ]
  },
  {
    id: "arith-35",
    theme: "arith",
    niveau: 3,
    type: "reponse",
    titre: `Le trésor des pirates`,
    enonce: `<p>Des pirates se partagent un sac de pièces d'or. S'ils font des tas de 2, de 3, de 4, de 5 ou de 6 pièces, il reste à chaque fois exactement une pièce. Mais s'ils font des tas de 7 pièces, il ne reste rien.</p>
<p>Quel est le plus petit nombre de pièces possible dans le sac ?</p>`,
    figure: ``,
    reponse: ["301", "trois-cent-un", "troiscentun", "trois cent un"],
    reponseTexte: `301`,
    pistes: [
      `<p>Si N laisse le reste 1 dans la division par 2, 3, 4, 5 et 6, que peut-on dire de N − 1 ?</p>`,
      `<p>N − 1 est divisible par 2, 3, 4, 5 et 6, donc par leur PPCM. Combien vaut-il ?</p>`,
      `<p>PPCM(2, 3, 4, 5, 6) = 60. Donc N = 60k + 1. Il faut maintenant que 7 divise 60k + 1.</p>`,
      `<p>60 = 56 + 4 ≡ 4 (mod 7). Cherche le plus petit k ≥ 1 avec 4k + 1 ≡ 0 (mod 7) : teste k = 1, 2, 3, 4, 5…</p>`
    ],
    lecon: {
      titre: `Systèmes de restes (lemme chinois)`,
      html: `<p>On cherche un entier N qui a des restes imposés dans plusieurs divisions.</p>
<p><strong>Même reste partout :</strong> si N ≡ r modulo a, b, c…, alors N − r est un multiple commun, donc N ≡ r modulo le PPCM.</p>
<div class="exemple">N ≡ 2 (mod 4) et N ≡ 2 (mod 6) ⇔ N ≡ 2 (mod 12).</div>
<p><strong>Restes différents :</strong> on écrit les solutions de la première condition (N = 60k + 1), on les réduit modulo le second diviseur, et on cherche k. Quand les diviseurs sont premiers entre eux, il y a toujours une solution, unique modulo leur produit : c'est le <strong>théorème des restes chinois</strong> (connu en Chine au 3<sup>e</sup> siècle).</p>
<p>Pour résoudre 4k + 1 ≡ 0 (mod 7), on teste k = 0, 1, …, 6 : une seule valeur marche.</p>
<div class="astuce">Astuce olympique : « reste r − 1 » peut s'écrire « reste −1 ». Par exemple, N ≡ 1 (mod 2), 2 (mod 3), 3 (mod 4) ⇔ N ≡ −1 modulo 2, 3, 4 ⇔ N + 1 multiple de 12.</div>`
    },
    correction: `<p>Soit N le nombre de pièces. N − 1 est divisible par 2, 3, 4, 5 et 6, donc par leur PPCM :</p>
<div class="calc">PPCM(2, 3, 4, 5, 6) = 2<sup>2</sup> × 3 × 5 = 60</div>
<p>Donc N = 60k + 1 avec k entier ≥ 0 (et réciproquement ces nombres laissent bien le reste 1).</p>
<p>Il faut de plus 7 | 60k + 1. Comme 60 = 7 × 8 + 4, on a 60k + 1 ≡ 4k + 1 (mod 7). On teste :</p>
<div class="calc">k = 0 : 1 ; k = 1 : 5 ; k = 2 : 9 ≡ 2 ; k = 3 : 13 ≡ 6 ; k = 4 : 17 ≡ 3 ; k = 5 : 21 ≡ 0 ✓</div>
<p>Le plus petit k est 5, d'où N = 60 × 5 + 1 = <strong>301</strong>. Vérification : 301 = 7 × 43, et 300 est divisible par 2, 3, 4, 5, 6. ✓</p>
<p><em>Pour aller plus loin :</em> les solutions suivantes sont 301 + 420, 301 + 840… (420 = PPCM(60, 7)).</p>`
  },
  {
    id: "arith-36",
    theme: "arith",
    niveau: 3,
    type: "demo",
    titre: `Des 1 qui ne font jamais un carré`,
    enonce: `<p>On appelle <strong>répunit</strong> un nombre qui ne s'écrit qu'avec des chiffres 1 : 11, 111, 1111, 11111, etc.</p>
<p>Démontrer qu'aucun répunit ayant au moins deux chiffres n'est un carré parfait.</p>`,
    figure: ``,
    pistes: [
      `<p>Le test du dernier chiffre ne suffit pas : un carré peut finir par 1 (81, 121…). Regarde plutôt les <strong>deux</strong> derniers chiffres.</p>`,
      `<p>Tout répunit à au moins deux chiffres se termine par 11. Quel est son reste dans la division par 4 ? (Pense au critère de divisibilité par 4.)</p>`,
      `<p>Un répunit R s'écrit 100 × q + 11. Or 100 est multiple de 4 et 11 = 8 + 3. Donc R ≡ 3 (mod 4).</p>`,
      `<p>Rappel : un carré est toujours ≡ 0 ou 1 (mod 4). Il reste à conclure.</p>`
    ],
    lecon: {
      titre: `Rappel : carrés modulo 4, un test d'élimination redoutable`,
      html: `<p>Rappel : un carré est toujours congru à <strong>0 ou 1 modulo 4</strong> (pair au carré : multiple de 4 ; impair au carré : 4k(k + 1) + 1).</p>
<p>Nouveauté : ce test se combine avec le critère de divisibilité par 4. Le reste d'un nombre modulo 4 ne dépend que de ses <strong>deux derniers chiffres</strong> (car 100 est multiple de 4).</p>
<p>Donc un nombre qui se termine par 11, 15, 19, 23, 27, 31, …, 99 (reste 3 modulo 4), ou par 02, 06, 10, 14, … (reste 2), n'est jamais un carré.</p>
<div class="exemple">Un carré ne se termine jamais par 11, 22, 33, 55, 66, 77, 88 ou 99 : seulement 00 et 44 parmi les « doubles » (144 = 12<sup>2</sup>).</div>
<p>On peut raffiner : modulo 8, un carré impair vaut toujours 1 (car k(k + 1) est pair).</p>
<div class="astuce">Astuce olympique : face à « montrer que … n'est jamais un carré », testez successivement modulo 3, 4, 8, 9, 10 ; un de ces modulos suffit très souvent.</div>`
    },
    correction: `<p>Soit R un répunit ayant n ≥ 2 chiffres. Ses deux derniers chiffres sont 1 et 1, donc on peut écrire <span class="m">R = 100q + 11</span> avec q entier (q = 0 si R = 11, sinon q est le répunit à n − 2 chiffres).</p>
<p>Comme 100 = 4 × 25 et 11 = 4 × 2 + 3 :</p>
<div class="calc">R = 4(25q + 2) + 3, donc R ≡ 3 (mod 4)</div>
<p>Or le carré d'un entier m vaut 0 ou 1 modulo 4 :</p>
<ul><li>si m = 2k, m<sup>2</sup> = 4k<sup>2</sup> ≡ 0 ;</li>
<li>si m = 2k + 1, m<sup>2</sup> = 4(k<sup>2</sup> + k) + 1 ≡ 1.</li></ul>
<p>Un carré ne peut donc pas être congru à 3 modulo 4 : R n'est pas un carré parfait. ∎</p>
<p><em>Erreur fréquente :</em> s'arrêter au dernier chiffre (1), qui est compatible avec un carré. Il faut aller chercher un modulo plus fin.</p>
<p><em>Pour aller plus loin :</em> le répunit à 1 chiffre, 1 = 1<sup>2</sup>, est bien un carré : c'est pour cela que l'énoncé impose au moins deux chiffres.</p>`,
    bareme: [
      `Écrire le répunit sous la forme 100q + 11 (ou utiliser les deux derniers chiffres).`,
      `En déduire que le répunit est congru à 3 modulo 4.`,
      `Démontrer que tout carré est congru à 0 ou 1 modulo 4.`,
      `Conclure.`
    ]
  },
  {
    id: "arith-37",
    theme: "arith",
    niveau: 3,
    type: "reponse",
    titre: `Le plus grand diviseur possible`,
    enonce: `<p>Quel est le plus grand entier positif n tel que <span class="m">n + 7</span> divise <span class="m">n<sup>2</sup> + 2026</span> ?</p>`,
    figure: ``,
    reponse: ["2068"],
    reponseTexte: `2068`,
    pistes: [
      `<p>Comme dans « Quand n + 1 divise n<sup>2</sup> + 1 », essaie de faire disparaître n<sup>2</sup> en retirant un multiple évident de n + 7.</p>`,
      `<p>n + 7 divise (n + 7)(n − 7) = n<sup>2</sup> − 49. Que dire de la différence (n<sup>2</sup> + 2026) − (n<sup>2</sup> − 49) ?</p>`,
      `<p>n + 7 doit diviser 2075. Pour que n soit le plus grand possible, quel diviseur de 2075 choisir ?</p>`,
      `<p>Le plus grand diviseur de 2075 est 2075 lui-même. Il reste à calculer n et à vérifier que ça marche.</p>`
    ],
    lecon: {
      titre: `Rappel : le reste constant, version « maximum »`,
      html: `<p>Rappel : si a divise E(n) et a divise un multiple évident M(n), alors a divise E(n) − M(n). En choisissant bien M, on obtient une <strong>constante</strong>.</p>
<p>Plus rapide avec les congruences : modulo n + 7, on a <strong>n ≡ −7</strong>, donc n<sup>2</sup> + 2026 ≡ 49 + 2026 = 2075.</p>
<p>Conclusion générale : <span class="m">n + a divise P(n) ⇔ n + a divise P(−a)</span> pour tout polynôme P à coefficients entiers.</p>
<div class="exemple">n − 3 divise n<sup>3</sup> + 5 ⇔ n − 3 divise 3<sup>3</sup> + 5 = 32.</div>
<p>Nouveauté : quand on cherche le <strong>plus grand</strong> n, on prend le plus grand diviseur, c'est-à-dire la constante elle-même ; pour tous les n, on liste tous les diviseurs.</p>
<div class="astuce">Astuce olympique : ce type de problème apparaît souvent avec l'année du concours (2026, 2027…). Décomposer l'année en facteurs premiers fait partie des réflexes à avoir le jour J.</div>`
    },
    correction: `<p>Modulo n + 7, on a n ≡ −7, donc n<sup>2</sup> + 2026 ≡ 49 + 2026 = 2075. Autrement dit :</p>
<div class="calc">n<sup>2</sup> + 2026 = (n + 7)(n − 7) + 2075</div>
<p>Donc n + 7 divise n<sup>2</sup> + 2026 si et seulement si n + 7 divise 2075.</p>
<p>Le plus grand diviseur de 2075 est 2075 lui-même (2075 = 5<sup>2</sup> × 83). On prend n + 7 = 2075, soit n = 2068.</p>
<p>Vérification : n<sup>2</sup> + 2026 = (n + 7)(n − 7) + 2075 = 2075 × 2061 + 2075 = 2075 × 2062, bien divisible par 2075. ✓</p>
<p>La réponse est <strong>2068</strong>.</p>
<p><em>Erreur fréquente :</em> oublier le signe et écrire n ≡ 7, ce qui donnerait 2075 aussi ici par chance (car 7<sup>2</sup> = (−7)<sup>2</sup>), mais pas avec un terme en n<sup>3</sup> ou en n !</p>`
  },
  {
    id: "arith-38",
    theme: "arith",
    niveau: 3,
    type: "demo",
    titre: `Différences de carrés : 2026 et 2027`,
    enonce: `<ol><li>Démontrer qu'il n'existe pas d'entiers x et y tels que <span class="m">x<sup>2</sup> − y<sup>2</sup> = 2026</span>.</li>
<li>Trouver tous les couples (x, y) d'entiers positifs ou nuls tels que <span class="m">x<sup>2</sup> − y<sup>2</sup> = 2027</span>. On admettra que 2027 est un nombre premier.</li></ol>`,
    figure: ``,
    pistes: [
      `<p>Factorise : x<sup>2</sup> − y<sup>2</sup> = (x − y)(x + y). Que remarques-tu sur la parité de x − y et x + y ? (Calcule leur somme.)</p>`,
      `<p>(x − y) + (x + y) = 2x est pair, donc x − y et x + y ont la même parité. Si les deux sont pairs, leur produit est multiple de… ? Si les deux sont impairs, leur produit est… ?</p>`,
      `<p>Question 1 : 2026 = 2 × 1013 est pair mais pas multiple de 4. Conclus.</p>`,
      `<p>Question 2 : avec x, y ≥ 0, on a 0 ≤ x − y ≤ x + y (et x − y &gt; 0). Comme 2027 est premier, les seules possibilités sont x − y = 1 et x + y = 2027. Il reste à résoudre et vérifier.</p>`
    ],
    lecon: {
      titre: `Les nombres qui sont différences de deux carrés`,
      html: `<p>La factorisation <span class="m">x<sup>2</sup> − y<sup>2</sup> = (x − y)(x + y)</span> transforme l'équation x<sup>2</sup> − y<sup>2</sup> = N en « produit = N ».</p>
<p>Les deux facteurs u = x − y et v = x + y ont toujours <strong>la même parité</strong> (leur somme 2x est paire). Réciproquement, si u et v ont même parité, on retrouve x = (u + v)/2 et y = (v − u)/2 entiers.</p>
<p>Conséquence : N est une différence de deux carrés si et seulement si N est impair ou multiple de 4. Les nombres ≡ 2 (mod 4) ne le sont <strong>jamais</strong>.</p>
<div class="exemple">15 = 1 × 15 = 3 × 5 donne 15 = 8<sup>2</sup> − 7<sup>2</sup> = 4<sup>2</sup> − 1<sup>2</sup>. Et 6 = 1 × 6 = 2 × 3 : parités différentes à chaque fois, donc impossible.</div>
<p>On retrouve aussi : tout impair 2k + 1 = (k + 1)<sup>2</sup> − k<sup>2</sup>.</p>
<div class="astuce">Astuce olympique : pour les solutions positives, on range u ≤ v : chaque diviseur u ≤ √N avec u et N/u de même parité donne une solution.</div>`
    },
    correction: `<p>Pour tous entiers x, y : x<sup>2</sup> − y<sup>2</sup> = (x − y)(x + y), et (x − y) + (x + y) = 2x est pair, donc x − y et x + y ont <strong>la même parité</strong>.</p>
<ul><li>S'ils sont tous deux impairs, leur produit est impair.</li>
<li>S'ils sont tous deux pairs, leur produit est multiple de 2 × 2 = 4.</li></ul>
<p><strong>1.</strong> 2026 = 2 × 1013 est pair, mais pas multiple de 4 (2026 = 4 × 506 + 2). Il n'est ni impair ni multiple de 4 : il ne peut pas s'écrire (x − y)(x + y). L'équation x<sup>2</sup> − y<sup>2</sup> = 2026 n'a donc pas de solution entière.</p>
<p><strong>2.</strong> Soient x, y ≥ 0 avec (x − y)(x + y) = 2027. Comme x + y ≥ 0 et que le produit est positif, x + y &gt; 0 et x − y &gt; 0 ; de plus x − y ≤ x + y. Les deux facteurs sont des diviseurs positifs de 2027, qui est premier : ses seuls diviseurs sont 1 et 2027. Donc :</p>
<div class="calc">x − y = 1 et x + y = 2027 ⇒ x = 1014, y = 1013</div>
<p>Vérification : 1014<sup>2</sup> − 1013<sup>2</sup> = (1014 − 1013)(1014 + 1013) = 1 × 2027 = 2027. ✓</p>
<p><strong>Conclusion :</strong> l'unique couple est <strong>(x, y) = (1014, 1013)</strong>.</p>
<p><em>Pour aller plus loin :</em> 2028 = 4 × 507 est une différence de deux carrés de plusieurs façons (par exemple 508<sup>2</sup> − 506<sup>2</sup>). Combien ?</p>`,
    bareme: [
      `Factoriser x² − y² = (x − y)(x + y).`,
      `Démontrer que x − y et x + y ont la même parité et en déduire que le produit est impair ou multiple de 4.`,
      `Conclure pour 2026 (≡ 2 mod 4).`,
      `Pour 2027, utiliser la primalité pour obtenir x − y = 1, x + y = 2027.`,
      `Résoudre, vérifier et conclure à l'unique couple (1014, 1013).`
    ]
  },
  {
    id: "arith-39",
    theme: "arith",
    niveau: 3,
    type: "reponse",
    titre: `Un trinôme qui devient carré`,
    enonce: `<p>Déterminer la somme de tous les entiers strictement positifs n tels que</p>
<div class="calc">n<sup>2</sup> + 10n + 120</div>
<p>soit un carré parfait.</p>`,
    figure: ``,
    reponse: ["44", "quarante-quatre"],
    reponseTexte: `44 (n = 2 et n = 42)`,
    pistes: [
      `<p>Fais apparaître un carré dans l'expression : n<sup>2</sup> + 10n = (n + 5)<sup>2</sup> − 25.</p>`,
      `<p>n<sup>2</sup> + 10n + 120 = (n + 5)<sup>2</sup> + 95. On cherche m entier positif avec m<sup>2</sup> = (n + 5)<sup>2</sup> + 95.</p>`,
      `<p>Donc m<sup>2</sup> − (n + 5)<sup>2</sup> = 95 : c'est une différence de deux carrés. Factorise et utilise les diviseurs de 95 = 5 × 19.</p>`,
      `<p>(m − n − 5)(m + n + 5) = 95 avec 0 &lt; m − n − 5 &lt; m + n + 5. Il reste à examiner les cas 1 × 95 et 5 × 19.</p>`
    ],
    lecon: {
      titre: `Encadrer entre deux carrés ou factoriser`,
      html: `<p>Pour trouver quand une expression du second degré n<sup>2</sup> + bn + c est un carré, on <strong>complète le carré</strong> : n<sup>2</sup> + bn = (n + b/2)<sup>2</sup> − b<sup>2</sup>/4 (b pair).</p>
<p>Deux méthodes ensuite :</p>
<ul><li><strong>Différence de carrés :</strong> m<sup>2</sup> − (n + k)<sup>2</sup> = constante, puis on énumère les factorisations de la constante (les facteurs doivent avoir la même parité).</li>
<li><strong>Encadrement :</strong> pour n grand, (n + k)<sup>2</sup> &lt; expression &lt; (n + k + 1)<sup>2</sup>, et il n'y a aucun carré strictement entre deux carrés consécutifs. Il ne reste que des petits n à tester.</li></ul>
<div class="exemple">n<sup>2</sup> + n + 1 est un carré ? Pour n ≥ 1 : n<sup>2</sup> &lt; n<sup>2</sup> + n + 1 &lt; (n + 1)<sup>2</sup>. Jamais !</div>
<div class="astuce">Astuce olympique : dans « somme de tous les n », on doit être sûr d'avoir TOUS les n : la factorisation garantit l'exhaustivité, alors que tester des valeurs ne le fait pas.</div>`
    },
    correction: `<p>On complète le carré : n<sup>2</sup> + 10n + 120 = (n + 5)<sup>2</sup> + 95.</p>
<p>Supposons que ce soit le carré d'un entier m ≥ 0. Alors m<sup>2</sup> − (n + 5)<sup>2</sup> = 95, soit :</p>
<div class="calc">(m − n − 5)(m + n + 5) = 95</div>
<p>Comme n ≥ 1, m + n + 5 &gt; 0, donc m − n − 5 &gt; 0 aussi, et m − n − 5 &lt; m + n + 5. Les diviseurs de 95 = 5 × 19 sont 1, 5, 19, 95, d'où deux cas :</p>
<ul><li>m − n − 5 = 1 et m + n + 5 = 95 : en soustrayant, 2(n + 5) = 94, n + 5 = 47, <strong>n = 42</strong> (m = 48) ;</li>
<li>m − n − 5 = 5 et m + n + 5 = 19 : 2(n + 5) = 14, n + 5 = 7, <strong>n = 2</strong> (m = 12).</li></ul>
<p>Vérification : 4 + 20 + 120 = 144 = 12<sup>2</sup> et 1764 + 420 + 120 = 2304 = 48<sup>2</sup>. ✓</p>
<p>La somme demandée est 2 + 42 = <strong>44</strong>.</p>
<p><em>Erreur fréquente :</em> trouver n = 2 en testant les petites valeurs et s'arrêter là. La solution n = 42 est trop grande pour être trouvée « au hasard ».</p>`
  },
  {
    id: "arith-40",
    theme: "arith",
    niveau: 3,
    type: "demo",
    titre: `Trois premiers et leur somme`,
    enonce: `<p>Trouver tous les triplets (p, q, r) de nombres premiers tels que</p>
<div class="calc">p × q × r = 5(p + q + r).</div>`,
    figure: ``,
    pistes: [
      `<p>Le membre de droite est un multiple de 5. Que peut-on en déduire sur l'un des nombres premiers p, q, r ?</p>`,
      `<p>Si un nombre premier divise un produit de nombres premiers, il est égal à l'un d'eux. Donc l'un des trois vaut 5. Par symétrie, suppose r = 5 et simplifie l'équation.</p>`,
      `<p>Avec r = 5 : 5pq = 5(p + q + 5), donc pq = p + q + 5. Fais tout passer à gauche et ajoute 1 pour factoriser.</p>`,
      `<p>pq − p − q + 1 = 6, soit (p − 1)(q − 1) = 6. Il reste à lister les façons d'écrire 6 comme produit de deux entiers positifs et à vérifier la primalité.</p>`
    ],
    lecon: {
      titre: `Les nombres premiers dans un produit`,
      html: `<p>Propriété fondamentale (lemme d'Euclide) : <strong>si un nombre premier p divise un produit a × b, alors p divise a ou p divise b</strong>.</p>
<p>Cas particulier très utile : si un premier p divise un produit de nombres premiers q<sub>1</sub>q<sub>2</sub>…q<sub>k</sub>, alors p est <strong>égal</strong> à l'un des q<sub>i</sub> (un premier ne divise un autre premier que s'il lui est égal).</p>
<p>Stratégie pour les équations « en nombres premiers » :</p>
<ol><li>repérer un nombre premier « imposé » par l'équation (ici 5) ;</li>
<li>utiliser la symétrie pour fixer lequel des inconnues il est ;</li>
<li>se ramener à une équation plus simple, souvent factorisable (xy − x − y + 1 = (x − 1)(y − 1)) ;</li>
<li>énumérer les cas finis, puis vérifier.</li></ol>
<div class="exemple">pq = p + q : (p − 1)(q − 1) = 1, donc p = q = 2.</div>
<div class="astuce">Astuce olympique : quand l'énoncé est symétrique, on peut dire « quitte à permuter, supposons r = 5 », puis à la fin donner les solutions à l'ordre près (ou toutes les permutations).</div>`
    },
    correction: `<p><strong>Un des nombres vaut 5.</strong> Le membre de droite est divisible par 5, donc 5 divise pqr. Comme 5 est premier, il divise l'un des facteurs p, q ou r ; ceux-ci étant premiers, l'un d'eux est égal à 5. L'équation étant symétrique, supposons r = 5 (quitte à permuter).</p>
<p><strong>Simplification.</strong> L'équation devient 5pq = 5(p + q + 5), soit pq = p + q + 5, puis :</p>
<div class="calc">pq − p − q + 1 = 6 ⇔ (p − 1)(q − 1) = 6</div>
<p><strong>Énumération.</strong> Comme p, q ≥ 2, les facteurs p − 1 et q − 1 sont des entiers ≥ 1 dont le produit vaut 6 :</p>
<ul><li>(p − 1, q − 1) = (1, 6) : p = 2, q = 7, tous deux premiers ✓ ;</li>
<li>(6, 1) : p = 7, q = 2 ✓ ;</li>
<li>(2, 3) : p = 3, q = 4, mais 4 n'est pas premier ✗ ;</li>
<li>(3, 2) : p = 4 ✗.</li></ul>
<p><strong>Vérification.</strong> Pour {2, 5, 7} : 2 × 5 × 7 = 70 et 5 × (2 + 5 + 7) = 5 × 14 = 70. ✓</p>
<p><strong>Conclusion :</strong> les solutions sont les triplets formés des nombres <strong>2, 5 et 7</strong> dans n'importe quel ordre, soit les 6 triplets (2, 5, 7), (2, 7, 5), (5, 2, 7), (5, 7, 2), (7, 2, 5), (7, 5, 2).</p>
<p><em>Pour aller plus loin :</em> essaie pqr = 7(p + q + r). (On trouve (p − 1)(q − 1) = 8, et seul {3, 5, 7} convient.)</p>`,
    bareme: [
      `Justifier que l'un des trois nombres premiers vaut 5 (lemme d'Euclide).`,
      `Se ramener, par symétrie, à pq = p + q + 5.`,
      `Factoriser en (p − 1)(q − 1) = 6.`,
      `Énumérer tous les cas et éliminer ceux qui ne donnent pas des premiers.`,
      `Vérifier et donner toutes les solutions (à l'ordre près).`
    ]
  }
]);
