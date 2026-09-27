window.PROBLEMES = (window.PROBLEMES || []).concat([
  {
    id: "geo-01",
    theme: "geo",
    niveau: 1,
    type: "reponse",
    titre: `Le sommet gourmand`,
    enonce: `<p>Le triangle ABC est isocèle en A. L'angle au sommet <span class="m">BAC</span> mesure <b>4 fois</b> l'angle <span class="m">ABC</span>.</p>
<p>Combien mesure l'angle <span class="m">BAC</span>, en degrés ?</p>`,
    figure: `<svg viewBox="0 0 300 151" width="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle isocèle ABC" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="150,41.9 35.5,108 264.5,108"/><line x1="95.2" y1="79.3" x2="90.2" y2="70.6" stroke-width="1.2"/><line x1="209.8" y1="70.6" x2="204.8" y2="79.3" stroke-width="1.2"/><path d="M58 95 A26 26 0 0 1 61.5 108" stroke-width="1.2"/><path d="M238.5 108 A26 26 0 0 1 242 95" stroke-width="1.2"/><path d="M165.6 50.9 A18 18 0 0 1 134.4 50.9" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="150" y="73.9" text-anchor="middle" dy="0.35em" font-size="12">x ?</text><text x="150" y="28.9" text-anchor="middle" dy="0.35em">A</text><text x="23.2" y="112.4" text-anchor="middle" dy="0.35em">B</text><text x="276.8" y="112.4" text-anchor="middle" dy="0.35em">C</text></g></svg>`,
    reponse: ["120", "120°"],
    reponseTexte: `120°`,
    pistes: [
      `<p>Dans un triangle isocèle en A, que peut-on dire des angles en B et en C ?</p>`,
      `<p>Appelle x la mesure de l'angle en B. Exprime les trois angles du triangle en fonction de x.</p>`,
      `<p>La somme des angles d'un triangle vaut 180°. Écris l'équation : x + x + 4x = 180.</p>`,
      `<p>On trouve x = 30°. Attention : la question porte sur l'angle au sommet, pas sur l'angle à la base !</p>`
    ],
    lecon: {
      titre: `Somme des angles et triangle isocèle`,
      html: `<p>Deux outils de base de toute « chasse aux angles » :</p>
<ul><li><b>La somme des angles d'un triangle vaut 180°.</b></li>
<li><b>Un triangle isocèle a ses deux angles à la base égaux</b> (et réciproquement : deux angles égaux ⇒ triangle isocèle).</li></ul>
<p>Méthode : on nomme <b>une seule inconnue</b> (souvent x), on exprime tous les angles avec elle, puis on écrit que la somme vaut 180°.</p>
<div class="exemple">Triangle isocèle dont l'angle au sommet vaut 40° : les angles à la base valent (180 − 40) ÷ 2 = 70°.</div>
<div class="astuce">Astuce olympique : dès qu'une figure contient des longueurs égales, repère les triangles isocèles et code leurs angles égaux sur ta figure. La moitié du travail est alors faite.</div>`
    },
    correction: `<p>Notons x la mesure de l'angle <span class="m">ABC</span>. Comme ABC est isocèle en A, l'angle <span class="m">ACB</span> vaut aussi x, et l'angle au sommet vaut 4x.</p>
<div class="calc">x + x + 4x = 180, donc 6x = 180 et x = 30°.</div>
<p>L'angle <span class="m">BAC</span> vaut donc 4 × 30 = <b>120°</b>.</p>
<p><b>Vérification :</b> 30 + 30 + 120 = 180. ✓</p>
<p><b>Erreur fréquente :</b> répondre 30°, qui est l'angle à la base. Relis toujours la question avant d'écrire ta réponse !</p>`
  },
  {
    id: "geo-02",
    theme: "geo",
    niveau: 1,
    type: "reponse",
    titre: `Le zigzag entre deux parallèles`,
    enonce: `<p>Les droites d et d′ sont parallèles. Le point A est sur d, le point B est sur d′ et le point P est entre les deux droites (voir la figure).</p>
<p>La demi-droite [AP) fait un angle de 35° avec d, et la demi-droite [BP) fait un angle de 50° avec d′, comme indiqué.</p>
<p>Combien mesure l'angle <span class="m">APB</span>, en degrés ?</p>`,
    figure: `<svg viewBox="0 0 300 199" width="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deux droites parallèles et une ligne brisée" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><line x1="24" y1="36.6" x2="276" y2="36.6"/><line x1="24" y1="162.6" x2="276" y2="162.6"/><line x1="91.5" y1="36.6" x2="181.5" y2="99.6"/><line x1="181.5" y1="99.6" x2="128.6" y2="162.6"/><path d="M121.5 36.6 A30 30 0 0 1 116.1 53.8" stroke-width="1.2"/><path d="M142.8 145.7 A22 22 0 0 1 150.6 162.6" stroke-width="1.2"/><path d="M171.2 111.9 A16 16 0 0 1 168.4 90.4" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="135.4" y="50.4" text-anchor="middle" dy="0.35em" font-size="12">35°</text><text x="163.1" y="146.5" text-anchor="middle" dy="0.35em" font-size="12">50°</text><text x="151.8" y="103.5" text-anchor="middle" dy="0.35em" font-size="12">?</text><text x="87.1" y="24.4" text-anchor="middle" dy="0.35em">A</text><text x="124.2" y="174.8" text-anchor="middle" dy="0.35em">B</text><text x="194.5" y="99.6" text-anchor="middle" dy="0.35em">P</text><text x="35" y="27.2" text-anchor="middle" dy="0.35em">d</text><text x="35" y="153.2" text-anchor="middle" dy="0.35em">d′</text></g></svg>`,
    reponse: ["85", "85°"],
    reponseTexte: `85°`,
    pistes: [
      `<p>Les angles alternes-internes n'apparaissent pas encore : il manque une droite. Laquelle pourrait-on ajouter ?</p>`,
      `<p>Trace par P la droite parallèle à d (et donc aussi à d′).</p>`,
      `<p>Cette nouvelle droite coupe l'angle <span class="m">APB</span> en deux morceaux. Chaque morceau est alterne-interne avec un angle connu.</p>`,
      `<p>Le morceau du haut vaut 35°, celui du bas vaut 50°. Il reste à additionner.</p>`
    ],
    lecon: {
      titre: `Angles et droites parallèles`,
      html: `<p>Quand une droite (une « sécante ») coupe deux droites <b>parallèles</b> :</p>
<ul><li>les angles <b>alternes-internes</b> sont égaux (ils forment un « Z ») ;</li>
<li>les angles <b>correspondants</b> sont égaux (ils forment un « F ») ;</li></ul>
<p>Et réciproquement : si deux angles alternes-internes sont égaux, les droites sont parallèles.</p>
<div class="exemple">Dans un « Z », l'angle en haut et l'angle en bas sont égaux.</div>
<div class="astuce">Astuce olympique : <b>construire une parallèle</b> est l'un des tracés auxiliaires les plus utiles. Dès qu'un angle se trouve « entre » deux parallèles, trace par son sommet une troisième parallèle : l'angle se découpe en deux angles alternes-internes.</div>`
    },
    correction: `<p>Traçons par P la droite Δ parallèle à d ; elle est aussi parallèle à d′. Elle partage l'angle <span class="m">APB</span> en deux angles.</p>
<ul><li>Les droites d et Δ sont parallèles, coupées par la sécante (AP) : l'angle entre [PA) et Δ est alterne-interne avec l'angle de 35°, il vaut donc 35°.</li>
<li>De même, avec d′ ∥ Δ et la sécante (BP), l'angle entre [PB) et Δ vaut 50°.</li></ul>
<div class="calc">APB = 35° + 50° = 85°</div>
<p><b>Pour aller plus loin :</b> ce résultat est général. Pour une ligne brisée qui zigzague entre deux parallèles, la somme des angles « ouverts vers la gauche » est égale à la somme des angles « ouverts vers la droite ».</p>`
  },
  {
    id: "geo-03",
    theme: "geo",
    niveau: 1,
    type: "demo",
    titre: `Le théorème de l'angle extérieur`,
    enonce: `<p>Soit ABC un triangle. On prolonge le côté [BC] au-delà de C jusqu'à un point D.</p>
<p>Démontrer que l'angle extérieur <span class="m">ACD</span> est égal à la somme des angles <span class="m">BAC</span> et <span class="m">ABC</span>.</p>`,
    figure: `<svg viewBox="0 0 300 182" width="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Angle extérieur d'un triangle" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="87.8,37.4 34.1,145 185.3,145"/><line x1="185.3" y1="145" x2="269.3" y2="145"/><path d="M101.3 52.3 A20 20 0 0 1 78.9 55.3" stroke-width="1.2"/><path d="M43.9 125.3 A22 22 0 0 1 56.1 145" stroke-width="1.2"/><path d="M171.8 130.1 A20 20 0 0 1 205.3 145" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="92.5" y="71.1" text-anchor="middle" dy="0.35em" font-size="12">a</text><text x="64.7" y="126" text-anchor="middle" dy="0.35em" font-size="12">b</text><text x="199.1" y="113.9" text-anchor="middle" dy="0.35em" font-size="12">e</text><text x="87.8" y="24.4" text-anchor="middle" dy="0.35em">A</text><text x="22.8" y="151.5" text-anchor="middle" dy="0.35em">B</text><text x="185.3" y="158" text-anchor="middle" dy="0.35em">C</text><text x="269.3" y="158" text-anchor="middle" dy="0.35em">D</text></g></svg>`,
    pistes: [
      `<p>Que vaut la somme des angles <span class="m">ACB</span> et <span class="m">ACD</span> ? Regarde les points B, C, D.</p>`,
      `<p>B, C, D sont alignés : les angles <span class="m">ACB</span> et <span class="m">ACD</span> sont supplémentaires (leur somme vaut 180°).</p>`,
      `<p>Écris aussi la somme des angles du triangle ABC. Tu obtiens deux expressions de 180°.</p>`,
      `<p>Compare : a + b + ACB = 180° et ACD + ACB = 180°. Que peux-tu en déduire ?</p>`
    ],
    lecon: {
      titre: `Rédiger une démonstration de géométrie`,
      html: `<p>Une démonstration est une suite d'étapes, chacune justifiée par une <b>propriété du cours</b> ou par une <b>hypothèse</b> de l'énoncé.</p>
<ul><li>On commence par nommer les objets (« notons a l'angle… »).</li>
<li>Chaque phrase a la forme : <i>« Comme [fait connu], d'après [propriété], on a [conclusion]. »</i></li>
<li>On termine en écrivant clairement ce qu'il fallait démontrer.</li></ul>
<p>Deux faits très utiles : la somme des angles d'un triangle vaut 180°, et deux angles qui forment un angle plat (points alignés) sont <b>supplémentaires</b>.</p>
<div class="astuce">Astuce olympique : le théorème de l'angle extérieur (angle extérieur = somme des deux angles intérieurs « éloignés ») fait gagner énormément de temps dans les chasses aux angles. Une fois démontré ici, tu pourras l'utiliser directement.</div>`
    },
    correction: `<p>Notons a = <span class="m">BAC</span>, b = <span class="m">ABC</span> et c = <span class="m">ACB</span>.</p>
<p><b>1.</b> Dans le triangle ABC, la somme des angles vaut 180° : <span class="m">a + b + c = 180°</span>.</p>
<p><b>2.</b> Les points B, C, D sont alignés dans cet ordre, donc les angles <span class="m">ACB</span> et <span class="m">ACD</span> forment un angle plat : <span class="m">c + ACD = 180°</span>.</p>
<p><b>3.</b> En comparant les deux égalités : <span class="m">a + b + c = c + ACD</span>, d'où, en retirant c des deux côtés :</p>
<div class="calc">ACD = a + b = BAC + ABC.</div>
<p>C'est ce qu'il fallait démontrer.</p>
<p><b>Conséquence :</b> un angle extérieur est toujours strictement plus grand que chacun des deux angles intérieurs qui ne lui sont pas adjacents.</p>`,
    bareme: [
      `Nommer les angles et écrire la somme des angles du triangle`,
      `Justifier que ACB et ACD sont supplémentaires (B, C, D alignés)`,
      `Combiner les deux égalités pour conclure`,
      `Conclusion clairement énoncée`
    ]
  },
  {
    id: "geo-04",
    theme: "geo",
    niveau: 1,
    type: "reponse",
    titre: `Combien de côtés ?`,
    enonce: `<p>Chaque angle intérieur d'un polygone régulier mesure 156°.</p>
<p>Combien ce polygone a-t-il de côtés ?</p>`,
    figure: `<svg viewBox="0 0 220 220" width="220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Polygone régulier et angle extérieur" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="110,34.8 79.4,41.3 54.1,59.6 38.4,86.7 35.2,117.9 44.8,147.6 65.8,170.9 94.4,183.6 125.6,183.6 154.2,170.9 175.2,147.6 184.8,117.9 181.6,86.7 165.9,59.6 140.6,41.3"/><line x1="79.4" y1="41.3" x2="42.7" y2="49.1" stroke-dasharray="5 4"/><path d="M66.4 50.7 A16 16 0 0 1 63.7 44.6" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="53.8" y="52.6" text-anchor="middle" dy="0.35em" font-size="12">e</text></g></svg>`,
    reponse: ["15", "quinze"],
    reponseTexte: `15 côtés`,
    pistes: [
      `<p>Plutôt que les angles intérieurs, regarde les angles <b>extérieurs</b> (entre un côté prolongé et le côté suivant). Combien mesure un angle extérieur ici ?</p>`,
      `<p>Un angle intérieur et l'angle extérieur au même sommet sont supplémentaires : l'angle extérieur vaut 180 − 156 = 24°.</p>`,
      `<p>Imagine que tu marches le long du polygone : à chaque sommet tu tournes de l'angle extérieur. Quand tu reviens au départ, de combien as-tu tourné en tout ?</p>`,
      `<p>La somme des angles extérieurs d'un polygone convexe vaut 360°. Il reste à diviser.</p>`
    ],
    lecon: {
      titre: `Angles intérieurs et extérieurs d'un polygone`,
      html: `<p>Pour un polygone convexe à n côtés :</p>
<ul><li><b>Somme des angles extérieurs = 360°</b>, quel que soit n (en faisant le tour, on fait exactement un tour complet).</li>
<li><b>Somme des angles intérieurs = (n − 2) × 180°</b> (on découpe en n − 2 triangles depuis un sommet).</li></ul>
<p>Pour un polygone <b>régulier</b>, tous les angles sont égaux :</p>
<div class="calc">angle extérieur = 360° ÷ n &nbsp;&nbsp; angle intérieur = 180° − 360° ÷ n</div>
<div class="exemple">Hexagone régulier : extérieur 360 ÷ 6 = 60°, intérieur 120°. Octogone : 45° et 135°.</div>
<div class="astuce">Astuce olympique : pour les polygones réguliers, raisonne presque toujours avec l'angle extérieur, les calculs sont bien plus simples.</div>`
    },
    correction: `<p>En chaque sommet, l'angle intérieur et l'angle extérieur sont supplémentaires, donc chaque angle extérieur mesure 180° − 156° = 24°.</p>
<p>La somme des angles extérieurs d'un polygone convexe vaut 360° (un tour complet). Avec n côtés, tous égaux :</p>
<div class="calc">n × 24 = 360, donc n = 15.</div>
<p>Le polygone a <b>15 côtés</b>.</p>
<p><b>Vérification avec l'autre formule :</b> (15 − 2) × 180 = 2340 et 2340 ÷ 15 = 156. ✓</p>
<p><b>Pour aller plus loin :</b> un angle intérieur de 100° est-il possible pour un polygone régulier ? (Il faudrait 360 ÷ 80 = 4,5 côtés : impossible !)</p>`
  },
  {
    id: "geo-05",
    theme: "geo",
    niveau: 1,
    type: "reponse",
    titre: `Le triangle qui ne bouge pas`,
    enonce: `<p>ABCD est un rectangle avec AB = 10 cm et BC = 6 cm. Le point M est placé <b>n'importe où</b> sur le côté [CD].</p>
<p>Quelle est l'aire du triangle ABM, en cm² ?</p>`,
    figure: `<svg viewBox="0 0 300 229" width="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rectangle ABCD et triangle ABM" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="31.1,185.7 268.9,185.7 268.9,43 31.1,43"/><polygon points="31.1,185.7 268.9,185.7 109.6,43" fill="currentColor" fill-opacity="0.15"/></g><g fill="currentColor" stroke="none"><text x="21.9" y="194.9" text-anchor="middle" dy="0.35em">A</text><text x="278.1" y="194.9" text-anchor="middle" dy="0.35em">B</text><text x="278.1" y="33.8" text-anchor="middle" dy="0.35em">C</text><text x="21.9" y="33.8" text-anchor="middle" dy="0.35em">D</text><text x="109.6" y="30" text-anchor="middle" dy="0.35em">M</text><text x="150" y="197.5" text-anchor="middle" dy="0.35em" font-size="12">10 cm</text><text x="281.9" y="114.3" text-anchor="middle" dy="0.35em" font-size="12">6</text></g></svg>`,
    reponse: ["30", "30cm²", "30cm2"],
    reponseTexte: `30 cm²`,
    pistes: [
      `<p>Essaie avec une position particulière de M, par exemple M = D. Que devient le triangle ABM ?</p>`,
      `<p>Aire d'un triangle = base × hauteur ÷ 2. Prends [AB] comme base.</p>`,
      `<p>Quelle est la distance entre le point M et la droite (AB), quelle que soit la position de M sur [CD] ?</p>`,
      `<p>La hauteur vaut toujours 6 cm : l'aire vaut 10 × 6 ÷ 2.</p>`
    ],
    lecon: {
      titre: `Aire d'un triangle : bien choisir sa base`,
      html: `<p><span class="m">Aire d'un triangle = base × hauteur ÷ 2</span>, et on peut choisir <b>n'importe quel côté</b> comme base, avec la hauteur correspondante.</p>
<p>Conséquence clé : si un sommet se déplace sur une droite <b>parallèle</b> à la base, la hauteur ne change pas, donc <b>l'aire ne change pas</b>.</p>
<div class="exemple">Tous les triangles de base [AB] dont le troisième sommet est sur une parallèle à (AB) située à 4 cm ont la même aire : AB × 4 ÷ 2.</div>
<div class="astuce">Astuce olympique : quand un énoncé dit « un point quelconque » et demande un nombre, la réponse ne dépend pas de la position du point. Place-le à l'endroit le plus pratique pour deviner la réponse… puis démontre-la dans le cas général.</div>`
    },
    correction: `<p>Prenons [AB] comme base du triangle ABM : AB = 10 cm.</p>
<p>La hauteur correspondante est la distance de M à la droite (AB). Comme ABCD est un rectangle, la droite (CD) est parallèle à (AB) et à distance BC = 6 cm. Tout point M de [CD] est donc à 6 cm de (AB).</p>
<div class="calc">Aire(ABM) = 10 × 6 ÷ 2 = 30 cm²</div>
<p>L'aire vaut <b>30 cm²</b>, c'est-à-dire exactement la moitié de l'aire du rectangle, quelle que soit la position de M.</p>
<p><b>Pour aller plus loin :</b> la partie non coloriée (deux triangles AMD et BMC) a donc aussi pour aire 30 cm². Sais-tu le vérifier directement ?</p>`
  },
  {
    id: "geo-06",
    theme: "geo",
    niveau: 1,
    type: "demo",
    titre: `La médiane coupe en deux`,
    enonce: `<p>Soit ABC un triangle et M le milieu du côté [BC].</p>
<p>Démontrer que les triangles ABM et ACM ont la même aire.</p>`,
    figure: `<svg viewBox="0 0 300 213" width="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC, médiane AM et hauteur AH" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="62.8,40.2 36.9,169.4 263.1,169.4"/><line x1="62.8" y1="40.2" x2="150" y2="169.4"/><line x1="62.8" y1="40.2" x2="62.8" y2="169.4" stroke-dasharray="5 4"/><polyline points="62.8,160.4 71.8,160.4 71.8,169.4" stroke-width="1.2"/><line x1="93.5" y1="164.4" x2="93.5" y2="174.4" stroke-width="1.2"/><line x1="206.5" y1="164.4" x2="206.5" y2="174.4" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="62.8" y="27.2" text-anchor="middle" dy="0.35em">A</text><text x="27.7" y="178.6" text-anchor="middle" dy="0.35em">B</text><text x="272.3" y="178.6" text-anchor="middle" dy="0.35em">C</text><text x="150" y="182.4" text-anchor="middle" dy="0.35em">M</text><text x="62.8" y="182.4" text-anchor="middle" dy="0.35em">H</text></g></svg>`,
    pistes: [
      `<p>Pour chacun des deux triangles, quel côté est-il naturel de choisir comme base ?</p>`,
      `<p>Prends [BM] comme base de ABM et [MC] comme base de ACM. Que sais-tu de ces deux longueurs ?</p>`,
      `<p>Trace la hauteur [AH] issue de A, perpendiculaire à (BC). Est-ce la hauteur des deux triangles ?</p>`,
      `<p>Oui : B, M, C sont sur la même droite, donc les deux triangles ont la même hauteur AH. Il reste à écrire les deux aires.</p>`
    ],
    lecon: {
      titre: `Triangles de même hauteur`,
      html: `<p>Si deux triangles ont un sommet commun A et leurs bases sur une même droite, ils ont <b>la même hauteur</b> (la distance de A à cette droite). Alors :</p>
<div class="calc">le rapport de leurs aires = le rapport de leurs bases.</div>
<div class="exemple">Si D est sur [BC] avec BD = 2 × DC, alors aire(ABD) = 2 × aire(ADC).</div>
<p>Cas particulier : une <b>médiane</b> partage un triangle en deux triangles de même aire.</p>
<div class="astuce">Astuce olympique : ce principe « même hauteur ⇒ aires proportionnelles aux bases » est l'arme n°1 des problèmes de rapports d'aires. On l'utilise souvent plusieurs fois de suite dans le même problème.</div>`
    },
    correction: `<p>Soit H le pied de la hauteur issue de A dans le triangle ABC : (AH) ⟂ (BC).</p>
<p>Les points B, M, C sont alignés sur (BC). Donc [AH] est à la fois la hauteur du triangle ABM relative à la base [BM] et la hauteur du triangle ACM relative à la base [MC].</p>
<div class="calc">Aire(ABM) = BM × AH ÷ 2 &nbsp;&nbsp;et&nbsp;&nbsp; Aire(ACM) = MC × AH ÷ 2</div>
<p>Or M est le milieu de [BC], donc BM = MC. Les deux aires sont donc égales. <b>CQFD.</b></p>
<p><b>Erreur fréquente :</b> oublier de justifier que la hauteur est <i>la même</i> pour les deux triangles : c'est le point clé de la preuve.</p>`,
    bareme: [
      `Introduire la hauteur issue de A`,
      `Justifier que c'est la hauteur commune des deux triangles (B, M, C alignés)`,
      `Écrire les deux aires et utiliser BM = MC`,
      `Conclure`
    ]
  },
  {
    id: "geo-07",
    theme: "geo",
    niveau: 1,
    type: "reponse",
    titre: `La diagonale révélatrice`,
    enonce: `<p>Un rectangle ABCD a un côté BC = 7 cm et une diagonale AC = 25 cm.</p>
<p>Quelle est son aire, en cm² ?</p>`,
    figure: `<svg viewBox="0 0 300 153" width="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rectangle et sa diagonale" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="33.5,104.8 261.7,104.8 261.7,38.3 33.5,38.3"/><line x1="33.5" y1="104.8" x2="261.7" y2="38.3"/></g><g fill="currentColor" stroke="none"><text x="24.3" y="114" text-anchor="middle" dy="0.35em">A</text><text x="270.9" y="114" text-anchor="middle" dy="0.35em">B</text><text x="270.9" y="29.1" text-anchor="middle" dy="0.35em">C</text><text x="24.3" y="29.1" text-anchor="middle" dy="0.35em">D</text><text x="271.2" y="71.5" text-anchor="middle" dy="0.35em" font-size="12">7</text><text x="138.1" y="55.4" text-anchor="middle" dy="0.35em" font-size="12">25</text><text x="147.6" y="118.1" text-anchor="middle" dy="0.35em" font-size="12">?</text></g></svg>`,
    reponse: ["168", "168cm²", "168cm2"],
    reponseTexte: `168 cm²`,
    pistes: [
      `<p>Pour l'aire, il te manque la longueur AB. Quel triangle rectangle contient à la fois AB, BC et AC ?</p>`,
      `<p>Le triangle ABC est rectangle en B. Écris le théorème de Pythagore.</p>`,
      `<p>AB² = 25² − 7² = 625 − 49. Calcule, puis prends la racine carrée.</p>`,
      `<p>AB = 24 cm. L'aire vaut AB × BC.</p>`
    ],
    lecon: {
      titre: `Le théorème de Pythagore`,
      html: `<p>Dans un triangle <b>rectangle</b>, le carré de l'hypoténuse (le côté opposé à l'angle droit, le plus long) est égal à la somme des carrés des deux autres côtés :</p>
<div class="calc">ABC rectangle en B ⇒ AC² = AB² + BC²</div>
<p>Il sert à calculer une longueur quand on connaît les deux autres.</p>
<div class="exemple">Triplets à connaître par cœur : (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25), (20, 21, 29)… et leurs multiples, comme (6, 8, 10).</div>
<div class="astuce">Astuce olympique : dans les compétitions, les longueurs sont souvent choisies pour « tomber juste ». Si tu reconnais un triplet pythagoricien, tu gagnes du temps et tu évites les erreurs de calcul.</div>`
    },
    correction: `<p>Dans le rectangle ABCD, l'angle en B est droit, donc le triangle ABC est rectangle en B. D'après le théorème de Pythagore :</p>
<div class="calc">AB² = AC² − BC² = 625 − 49 = 576, donc AB = 24 cm.</div>
<p>L'aire du rectangle vaut AB × BC = 24 × 7 = <b>168 cm²</b>.</p>
<p><b>Remarque :</b> (7, 24, 25) est un triplet pythagoricien : 49 + 576 = 625.</p>`
  },
  {
    id: "geo-08",
    theme: "geo",
    niveau: 1,
    type: "reponse",
    titre: `Des carrés partout`,
    enonce: `<p>On dessine une grille de 4 × 4 petits carrés (voir la figure).</p>
<p>Combien de carrés, de toutes tailles, peut-on voir sur cette grille ? (Un carré est formé de lignes de la grille ; par exemple, le carré colorié de taille 2 × 2 compte.)</p>`,
    figure: `<svg viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grille 4 par 4" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><line x1="24" y1="176" x2="24" y2="24"/><line x1="24" y1="176" x2="176" y2="176"/><line x1="62" y1="176" x2="62" y2="24"/><line x1="24" y1="138" x2="176" y2="138"/><line x1="100" y1="176" x2="100" y2="24"/><line x1="24" y1="100" x2="176" y2="100"/><line x1="138" y1="176" x2="138" y2="24"/><line x1="24" y1="62" x2="176" y2="62"/><line x1="176" y1="176" x2="176" y2="24"/><line x1="24" y1="24" x2="176" y2="24"/><polygon points="62,138 138,138 138,62 62,62" fill="currentColor" fill-opacity="0.15"/></g><g fill="currentColor" stroke="none"></g></svg>`,
    reponse: ["30", "trente"],
    reponseTexte: `30 carrés`,
    pistes: [
      `<p>Compte séparément les carrés de chaque taille : 1 × 1, 2 × 2, 3 × 3, 4 × 4.</p>`,
      `<p>Il y a 16 carrés 1 × 1 et un seul carré 4 × 4. Combien de carrés 3 × 3 ?</p>`,
      `<p>Repère un carré 2 × 2 par son coin en haut à gauche : combien de positions possibles horizontalement ? verticalement ?</p>`,
      `<p>Il y a 3 × 3 = 9 carrés 2 × 2 et 2 × 2 = 4 carrés 3 × 3. Additionne tout.</p>`
    ],
    lecon: {
      titre: `Compter des figures dans une grille`,
      html: `<p>Pour compter des carrés (ou rectangles) dans une grille, on <b>classe par taille</b>, puis on repère chaque figure par <b>un seul point</b> (par exemple son coin en bas à gauche).</p>
<p>Dans une grille n × n, un carré k × k peut avoir son coin en (n − k + 1) positions horizontales et (n − k + 1) positions verticales, soit <b>(n − k + 1)²</b> carrés.</p>
<div class="calc">Total = n² + (n − 1)² + … + 2² + 1²</div>
<div class="exemple">Grille 3 × 3 : 9 + 4 + 1 = 14 carrés.</div>
<div class="astuce">Astuce olympique : « repérer un objet par un point caractéristique » transforme un comptage visuel (où l'on oublie toujours quelque chose) en un calcul sûr.</div>`
    },
    correction: `<p>Classons les carrés selon leur taille et repérons chacun par son coin en bas à gauche.</p>
<ul><li>1 × 1 : 4 × 4 = 16 carrés ;</li>
<li>2 × 2 : le coin peut prendre 3 positions horizontales et 3 verticales : 9 carrés ;</li>
<li>3 × 3 : 2 × 2 = 4 carrés ;</li>
<li>4 × 4 : 1 carré.</li></ul>
<div class="calc">16 + 9 + 4 + 1 = 30</div>
<p>On voit <b>30 carrés</b>.</p>
<p><b>Pour aller plus loin :</b> et si l'on compte aussi les carrés « penchés » dont les sommets sont des nœuds de la grille ? Rendez-vous plus loin dans la banque…</p>`
  },
  {
    id: "geo-09",
    theme: "geo",
    niveau: 1,
    type: "reponse",
    titre: `Le cube repeint`,
    enonce: `<p>On peint en rouge toutes les faces extérieures d'un grand cube, puis on le découpe en 3 × 3 × 3 = 27 petits cubes identiques.</p>
<p>Combien de petits cubes ont <b>exactement deux</b> faces peintes ?</p>`,
    figure: `<svg viewBox="0 0 220 205" width="220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cube 3 par 3 par 3" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><line x1="30.8" y1="173.9" x2="30.8" y2="71.7"/><line x1="30.8" y1="173.9" x2="133" y2="173.9"/><line x1="30.8" y1="71.7" x2="87" y2="30.8"/><line x1="133" y1="173.9" x2="189.2" y2="133"/><line x1="30.8" y1="71.7" x2="133" y2="71.7"/><line x1="133" y1="173.9" x2="133" y2="71.7"/><line x1="64.9" y1="173.9" x2="64.9" y2="71.7"/><line x1="30.8" y1="139.8" x2="133" y2="139.8"/><line x1="64.9" y1="71.7" x2="121.1" y2="30.8"/><line x1="133" y1="139.8" x2="189.2" y2="98.9"/><line x1="49.5" y1="58.1" x2="151.7" y2="58.1"/><line x1="151.7" y1="160.2" x2="151.7" y2="58.1"/><line x1="98.9" y1="173.9" x2="98.9" y2="71.7"/><line x1="30.8" y1="105.7" x2="133" y2="105.7"/><line x1="98.9" y1="71.7" x2="155.1" y2="30.8"/><line x1="133" y1="105.7" x2="189.2" y2="64.9"/><line x1="68.3" y1="44.4" x2="170.5" y2="44.4"/><line x1="170.5" y1="146.6" x2="170.5" y2="44.4"/><line x1="133" y1="173.9" x2="133" y2="71.7"/><line x1="30.8" y1="71.7" x2="133" y2="71.7"/><line x1="133" y1="71.7" x2="189.2" y2="30.8"/><line x1="133" y1="71.7" x2="189.2" y2="30.8"/><line x1="87" y1="30.8" x2="189.2" y2="30.8"/><line x1="189.2" y1="133" x2="189.2" y2="30.8"/></g><g fill="currentColor" stroke="none"></g></svg>`,
    reponse: ["12", "douze"],
    reponseTexte: `12`,
    pistes: [
      `<p>Où se trouvent les petits cubes qui ont 3 faces peintes ? Et ceux qui en ont 2 ?</p>`,
      `<p>Les cubes des coins ont 3 faces peintes. Les cubes à 2 faces peintes sont sur les <b>arêtes</b> du grand cube, mais pas aux coins.</p>`,
      `<p>Combien le grand cube a-t-il d'arêtes ? Sur chaque arête, combien de petits cubes ne sont pas des coins ?</p>`,
      `<p>12 arêtes, et sur chacune, 3 − 2 = 1 petit cube au milieu.</p>`
    ],
    lecon: {
      titre: `Sommets, arêtes, faces du cube`,
      html: `<p>Un cube a <b>8 sommets</b>, <b>12 arêtes</b> et <b>6 faces</b>.</p>
<p>Quand on découpe un cube peint en n × n × n petits cubes (n ≥ 2) :</p>
<ul><li>3 faces peintes : les 8 coins ;</li>
<li>2 faces peintes : sur les arêtes, hors coins : 12 × (n − 2) ;</li>
<li>1 face peinte : au centre des faces : 6 × (n − 2)² ;</li>
<li>0 face peinte : le « cœur » : (n − 2)³.</li></ul>
<div class="exemple">Pour n = 3 : 8 + 12 + 6 + 1 = 27. ✓</div>
<div class="astuce">Astuce olympique : vérifie toujours qu'un classement est complet en additionnant les cas : le total doit redonner n³.</div>`
    },
    correction: `<p>Un petit cube a deux faces peintes exactement lorsqu'il touche deux faces du grand cube mais pas trois : il est donc sur une arête du grand cube, sans être un coin.</p>
<p>Le cube a 12 arêtes ; chacune contient 3 petits cubes, dont 2 sont des coins. Il reste 1 petit cube par arête.</p>
<div class="calc">12 × 1 = 12</div>
<p>Il y a <b>12</b> petits cubes avec exactement deux faces peintes.</p>
<p><b>Vérification :</b> 8 (coins, 3 faces) + 12 (2 faces) + 6 (centres des faces, 1 face) + 1 (centre, 0 face) = 27. ✓</p>`
  },
  {
    id: "geo-10",
    theme: "geo",
    niveau: 1,
    type: "demo",
    titre: `Médiane et hauteur d'un triangle isocèle`,
    enonce: `<p>Soit ABC un triangle isocèle en A et M le milieu de [BC].</p>
<p>Démontrer que la droite (AM) est perpendiculaire à (BC).</p>`,
    figure: `<svg viewBox="0 0 260 213" width="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle isocèle ABC et médiane AM" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="130,39.6 36.5,170.5 223.5,170.5"/><line x1="130" y1="39.6" x2="130" y2="170.5"/><line x1="88.5" y1="106.3" x2="80.3" y2="100.5" stroke-width="1.2"/><line x1="86.1" y1="109.6" x2="78" y2="103.8" stroke-width="1.2"/><line x1="179.7" y1="100.5" x2="171.5" y2="106.3" stroke-width="1.2"/><line x1="182" y1="103.8" x2="173.9" y2="109.6" stroke-width="1.2"/><line x1="83.2" y1="165.5" x2="83.2" y2="175.5" stroke-width="1.2"/><line x1="176.8" y1="165.5" x2="176.8" y2="175.5" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="130" y="26.6" text-anchor="middle" dy="0.35em">A</text><text x="27.3" y="179.7" text-anchor="middle" dy="0.35em">B</text><text x="232.7" y="179.7" text-anchor="middle" dy="0.35em">C</text><text x="130" y="183.5" text-anchor="middle" dy="0.35em">M</text></g></svg>`,
    pistes: [
      `<p>Connais-tu une droite perpendiculaire à [BC] qui passe par son milieu ? Comment s'appelle-t-elle ?</p>`,
      `<p>C'est la médiatrice de [BC]. Rappelle la propriété caractéristique des points de la médiatrice.</p>`,
      `<p>Un point est sur la médiatrice de [BC] si et seulement s'il est à égale distance de B et de C. Le point A vérifie-t-il cela ? Et le point M ?</p>`,
      `<p>A et M sont deux points distincts de la médiatrice : la droite (AM) est donc cette médiatrice.</p>`
    ],
    lecon: {
      titre: `La médiatrice : un outil de démonstration`,
      html: `<p>La <b>médiatrice</b> d'un segment [BC] est la droite perpendiculaire à [BC] passant par son milieu. Propriété caractéristique :</p>
<div class="calc">P est sur la médiatrice de [BC] ⇔ PB = PC</div>
<p>Pour montrer qu'une droite (PQ) est la médiatrice de [BC], il suffit donc de montrer que <b>deux points distincts</b> P et Q sont chacun à égale distance de B et de C (deux points déterminent une droite).</p>
<div class="exemple">Dans un losange ABCD, A et C sont à égale distance de B et D, donc (AC) est la médiatrice de [BD] : les diagonales d'un losange sont perpendiculaires.</div>
<div class="astuce">Astuce olympique : pour prouver une perpendicularité, pense à la médiatrice ; c'est souvent plus rapide qu'un calcul d'angles.</div>`
    },
    correction: `<p><b>1.</b> Le triangle ABC est isocèle en A, donc AB = AC : le point A est à égale distance de B et de C. Il appartient donc à la médiatrice de [BC].</p>
<p><b>2.</b> M est le milieu de [BC], donc MB = MC : M appartient aussi à la médiatrice de [BC].</p>
<p><b>3.</b> A et M sont distincts (A n'est pas sur (BC) puisque ABC est un vrai triangle). La médiatrice de [BC] est une droite qui passe par A et par M : c'est donc la droite (AM).</p>
<p><b>4.</b> Par définition, la médiatrice de [BC] est perpendiculaire à (BC). Donc <b>(AM) ⟂ (BC)</b>. CQFD.</p>
<p><b>Pour aller plus loin :</b> on montre de même que (AM) est aussi la bissectrice de l'angle <span class="m">BAC</span> : dans un triangle isocèle, médiane, hauteur, médiatrice et bissectrice issues du sommet principal sont confondues.</p>`,
    bareme: [
      `Utiliser AB = AC pour placer A sur la médiatrice de [BC]`,
      `Placer M sur la médiatrice`,
      `Justifier que la médiatrice est la droite (AM) (deux points distincts)`,
      `Conclure à la perpendicularité`
    ]
  },
  {
    id: "geo-11",
    theme: "geo",
    niveau: 1,
    type: "reponse",
    titre: `L'escalier`,
    enonce: `<p>Le polygone colorié ci-contre a tous ses côtés horizontaux ou verticaux. Sa base mesure 8 cm et son côté gauche mesure 5 cm. Les longueurs des marches ne sont pas données.</p>
<p>Quel est le périmètre de ce polygone, en cm ?</p>`,
    figure: `<svg viewBox="0 0 300 215" width="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Polygone en escalier" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="48.7,169.2 267.8,169.2 267.8,136.3 226.7,136.3 226.7,103.4 180.1,103.4 180.1,73.3 130.8,73.3 130.8,32.2 48.7,32.2" fill="currentColor" fill-opacity="0.15"/></g><g fill="currentColor" stroke="none"><text x="158.2" y="181.5" text-anchor="middle" dy="0.35em" font-size="12">8 cm</text><text x="33.6" y="100.7" text-anchor="middle" dy="0.35em" font-size="12">5 cm</text></g></svg>`,
    reponse: ["26", "26cm"],
    reponseTexte: `26 cm`,
    pistes: [
      `<p>On ne connaît pas les marches une par une… Peut-on quand même connaître leur longueur <b>totale</b> ?</p>`,
      `<p>Additionne toutes les longueurs <b>horizontales</b> des marches (le haut de chaque marche). À quoi est égale cette somme ?</p>`,
      `<p>Imagine qu'on fait « glisser » chaque segment horizontal des marches vers le haut, et chaque segment vertical vers la droite. Quelle figure obtient-on ?</p>`,
      `<p>Les marches horizontales totalisent 8 cm et les marches verticales 5 cm : le périmètre est celui du rectangle 8 × 5.</p>`
    ],
    lecon: {
      titre: `Périmètres : faire glisser les segments`,
      html: `<p>Pour calculer un périmètre sans connaître toutes les longueurs, on peut <b>déplacer des segments par translation</b> : la longueur ne change pas.</p>
<p>Pour un polygone « en escalier » (côtés horizontaux et verticaux, qui ne fait que monter en allant vers la gauche), les segments horizontaux du haut totalisent la largeur, et les segments verticaux de droite totalisent la hauteur. Son périmètre est celui du rectangle qui l'entoure :</p>
<div class="calc">P = 2 × (largeur + hauteur)</div>
<div class="exemple">Un escalier de 10 marches dans un rectangle 12 × 7 a pour périmètre 2 × 19 = 38, quelle que soit la taille des marches.</div>
<div class="astuce">Astuce olympique : attention, ce n'est plus vrai si le polygone a une « encoche » qui redescend (un creux) : il faut alors ajouter deux fois la profondeur du creux.</div>`
    },
    correction: `<p>Parcourons le contour. Les côtés horizontaux sont : la base (8 cm) et le dessus des marches. Ces derniers, mis bout à bout, couvrent exactement la largeur totale : leur somme vaut 8 cm.</p>
<p>De même, les côtés verticaux sont : le côté gauche (5 cm) et les contremarches, dont la somme vaut la hauteur totale, 5 cm.</p>
<div class="calc">Périmètre = 8 + 8 + 5 + 5 = 26 cm</div>
<p>Le périmètre vaut <b>26 cm</b>, comme celui du rectangle 8 × 5 qui entoure l'escalier.</p>
<p><b>Erreur fréquente :</b> croire que l'aire et le périmètre varient ensemble. Ici l'aire est plus petite que celle du rectangle, mais le périmètre est le même !</p>`
  },
  {
    id: "geo-12",
    theme: "geo",
    niveau: 1,
    type: "reponse",
    titre: `Un triangle bien caché`,
    enonce: `<p>Un triangle a des côtés de longueurs 20 cm, 21 cm et 29 cm.</p>
<p>Quelle est son aire, en cm² ?</p>`,
    figure: ``,
    reponse: ["210", "210cm²", "210cm2"],
    reponseTexte: `210 cm²`,
    pistes: [
      `<p>Pour calculer l'aire d'un triangle, il faut une hauteur. Ce triangle aurait-il une forme particulière ?</p>`,
      `<p>Calcule 20², 21² et 29². Remarques-tu une relation ?</p>`,
      `<p>400 + 441 = 841 = 29². Quel théorème permet d'en déduire quelque chose sur le triangle ?</p>`,
      `<p>D'après la réciproque de Pythagore, le triangle est rectangle ; les côtés de l'angle droit mesurent 20 et 21 cm.</p>`
    ],
    lecon: {
      titre: `La réciproque du théorème de Pythagore`,
      html: `<p>Dans un triangle ABC dont [BC] est le plus grand côté :</p>
<ul><li>si <b>BC² = AB² + AC²</b>, alors le triangle est <b>rectangle en A</b> (réciproque de Pythagore) ;</li>
<li>si BC² ≠ AB² + AC², le triangle n'est <b>pas</b> rectangle (contraposée).</li></ul>
<p>On compare toujours le carré du <b>plus grand côté</b> à la somme des carrés des deux autres.</p>
<div class="exemple">Côtés 9, 12, 15 : 81 + 144 = 225 = 15², donc triangle rectangle. Côtés 5, 6, 8 : 25 + 36 = 61 ≠ 64, pas rectangle.</div>
<div class="astuce">Astuce olympique : dans un triangle rectangle, l'aire se calcule directement avec les deux côtés de l'angle droit : Aire = (côté 1 × côté 2) ÷ 2. Pour un triangle quelconque, il faudrait chercher une hauteur, c'est beaucoup plus long.</div>`
    },
    correction: `<p>Le plus grand côté mesure 29 cm. Comparons :</p>
<div class="calc">29² = 841 &nbsp;&nbsp;et&nbsp;&nbsp; 20² + 21² = 400 + 441 = 841</div>
<p>Ces deux nombres sont égaux, donc d'après la réciproque du théorème de Pythagore, le triangle est rectangle ; l'angle droit est opposé au côté de 29 cm.</p>
<p>Les côtés de 20 cm et 21 cm sont donc perpendiculaires : l'un est la hauteur relative à l'autre.</p>
<div class="calc">Aire = 20 × 21 ÷ 2 = 210 cm²</div>
<p>L'aire vaut <b>210 cm²</b>.</p>`
  },
  {
    id: "geo-13",
    theme: "geo",
    niveau: 2,
    type: "demo",
    titre: `Le point voyageur du parallélogramme`,
    enonce: `<p>Soit ABCD un parallélogramme et M un point quelconque à l'intérieur.</p>
<p>Démontrer que la somme des aires des triangles MAB et MCD est égale à la moitié de l'aire du parallélogramme.</p>`,
    figure: `<svg viewBox="0 0 300 197" width="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallélogramme ABCD et point M" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="35.5,155.7 207.3,155.7 167.2,112.8" fill="currentColor" fill-opacity="0.15"/><polygon points="264.5,41.2 92.7,41.2 167.2,112.8" fill="currentColor" fill-opacity="0.15"/><polygon points="35.5,155.7 207.3,155.7 264.5,41.2 92.7,41.2"/><line x1="167.2" y1="155.7" x2="167.2" y2="41.2" stroke-dasharray="5 4"/><polyline points="167.2,146.7 176.2,146.7 176.2,155.7" stroke-width="1.2"/><polyline points="167.2,50.2 176.2,50.2 176.2,41.2" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="26.3" y="164.9" text-anchor="middle" dy="0.35em">A</text><text x="216.5" y="164.9" text-anchor="middle" dy="0.35em">B</text><text x="273.7" y="32" text-anchor="middle" dy="0.35em">C</text><text x="83.5" y="32" text-anchor="middle" dy="0.35em">D</text><text x="180.2" y="112.8" text-anchor="middle" dy="0.35em">M</text><text x="162.7" y="167.9" text-anchor="middle" dy="0.35em">H</text><text x="162.7" y="29" text-anchor="middle" dy="0.35em">K</text></g></svg>`,
    pistes: [
      `<p>Que se passe-t-il si M est le centre du parallélogramme ? Et si M est sur le côté [AB] ?</p>`,
      `<p>Prends [AB] comme base de MAB et [CD] comme base de MCD. Que sais-tu de AB et CD ?</p>`,
      `<p>Trace la perpendiculaire à (AB) passant par M ; elle coupe (AB) en H et (CD) en K (pourquoi est-elle aussi perpendiculaire à (CD) ?). Que vaut MH + MK ?</p>`,
      `<p>MH + MK = HK, qui est la hauteur h du parallélogramme. Écris la somme des deux aires en factorisant par AB.</p>`
    ],
    lecon: {
      titre: `Aire d'un parallélogramme et sommes de hauteurs`,
      html: `<p><span class="m">Aire d'un parallélogramme = base × hauteur</span>, où la hauteur est la distance entre les deux côtés parallèles choisis.</p>
<p>Si un point M est entre deux droites parallèles distantes de h, et si H et K sont les pieds des perpendiculaires issues de M sur ces droites, alors H, M, K sont alignés et :</p>
<div class="calc">MH + MK = h</div>
<p>(Une perpendiculaire à l'une de deux droites parallèles est perpendiculaire à l'autre.)</p>
<div class="astuce">Astuce olympique : quand une quantité semble ne pas dépendre de la position d'un point, cherche une <b>somme de distances</b> qui reste constante. C'est un schéma extrêmement fréquent.</div>`
    },
    correction: `<p>Notons h la distance entre les droites parallèles (AB) et (CD) : l'aire du parallélogramme vaut AB × h.</p>
<p>Traçons par M la perpendiculaire à (AB) ; elle coupe (AB) en H. Comme (CD) ∥ (AB), cette droite est aussi perpendiculaire à (CD) ; elle la coupe en K. Puisque M est à l'intérieur du parallélogramme, M est entre H et K, donc :</p>
<div class="calc">MH + MK = HK = h</div>
<p>MH est la hauteur du triangle MAB relative à [AB] et MK est la hauteur du triangle MCD relative à [CD]. De plus, CD = AB (côtés opposés d'un parallélogramme). Donc :</p>
<div class="calc">Aire(MAB) + Aire(MCD) = AB × MH ÷ 2 + AB × MK ÷ 2 = AB × (MH + MK) ÷ 2 = AB × h ÷ 2</div>
<p>C'est bien la moitié de l'aire du parallélogramme. CQFD.</p>
<p><b>Conséquence :</b> Aire(MBC) + Aire(MDA) vaut aussi la moitié de l'aire de ABCD.</p>`,
    bareme: [
      `Tracer la perpendiculaire commune à (AB) et (CD) passant par M`,
      `Justifier MH + MK = h (M entre H et K)`,
      `Utiliser AB = CD et factoriser`,
      `Conclure avec l'aire AB × h du parallélogramme`
    ]
  },
  {
    id: "geo-14",
    theme: "geo",
    niveau: 2,
    type: "reponse",
    titre: `La cascade d'isocèles`,
    enonce: `<p>Le triangle ABC est isocèle en A. Le point D est sur le côté [AC] et vérifie</p>
<div class="calc">AD = BD = BC.</div>
<p>Combien mesure l'angle <span class="m">BAC</span>, en degrés ?</p>`,
    figure: `<svg viewBox="0 0 220 298" width="220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC et point D sur [AC]" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="110,42.1 42.1,251.1 177.9,251.1"/><line x1="42.1" y1="251.1" x2="152" y2="171.2"/><line x1="135.1" y1="103.2" x2="125.6" y2="106.3" stroke-width="1.2"/><line x1="136.4" y1="107" x2="126.8" y2="110.1" stroke-width="1.2"/><line x1="92.5" y1="208.3" x2="98.4" y2="216.4" stroke-width="1.2"/><line x1="95.7" y1="205.9" x2="101.6" y2="214" stroke-width="1.2"/><line x1="108" y1="246.1" x2="108" y2="256.1" stroke-width="1.2"/><line x1="112" y1="246.1" x2="112" y2="256.1" stroke-width="1.2"/><path d="M116.8 63 A22 22 0 0 1 103.2 63" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="110" y="78.1" text-anchor="middle" dy="0.35em" font-size="12">?</text><text x="110" y="29.1" text-anchor="middle" dy="0.35em">A</text><text x="32.9" y="260.3" text-anchor="middle" dy="0.35em">B</text><text x="187.1" y="260.3" text-anchor="middle" dy="0.35em">C</text><text x="164.8" y="169" text-anchor="middle" dy="0.35em">D</text></g></svg>`,
    reponse: ["36", "36°"],
    reponseTexte: `36°`,
    pistes: [
      `<p>Repère tous les triangles isocèles de la figure. Il y en a trois !</p>`,
      `<p>Appelle x l'angle <span class="m">BAC</span>. Dans le triangle ABD isocèle en D, combien vaut l'angle <span class="m">ABD</span> ?</p>`,
      `<p>L'angle <span class="m">BDC</span> est un angle extérieur du triangle ABD : il vaut x + x = 2x. Le triangle BDC est isocèle en B : que vaut alors l'angle <span class="m">BCD</span> ?</p>`,
      `<p>L'angle en C vaut 2x. Or dans ABC isocèle en A, l'angle en C vaut aussi (180 − x) ÷ 2. Résous l'équation.</p>`
    ],
    lecon: {
      titre: `Chasse aux angles en cascade`,
      html: `<p>Dans une figure avec plusieurs triangles isocèles « enchaînés », on progresse de proche en proche :</p>
<ol><li>on appelle x un angle bien choisi (souvent le plus petit) ;</li>
<li>on exprime <b>tous</b> les angles en fonction de x, avec les isocèles et l'angle extérieur ;</li>
<li>on obtient deux expressions du même angle : c'est l'équation.</li></ol>
<div class="exemple">Rappel : un angle extérieur d'un triangle est égal à la somme des deux angles intérieurs non adjacents (geo-03).</div>
<div class="astuce">Astuce olympique : le triangle isocèle d'angles 36°, 72°, 72° (le « triangle d'or ») apparaît très souvent, notamment dans le pentagone régulier. Le rapport AC ÷ BC y vaut le nombre d'or (1 + √5) ÷ 2 ≈ 1,618.</div>`
    },
    correction: `<p>Notons x = <span class="m">BAC</span>.</p>
<p><b>Triangle ABD</b> : AD = BD, il est isocèle en D, donc <span class="m">ABD</span> = <span class="m">BAD</span> = x.</p>
<p><b>Angle extérieur</b> : A, D, C sont alignés, donc <span class="m">BDC</span> est un angle extérieur du triangle ABD : <span class="m">BDC</span> = x + x = 2x.</p>
<p><b>Triangle BDC</b> : BD = BC, il est isocèle en B, donc <span class="m">BCD</span> = <span class="m">BDC</span> = 2x.</p>
<p><b>Triangle ABC</b> : isocèle en A, donc <span class="m">ABC</span> = <span class="m">ACB</span> = 2x. La somme des angles donne :</p>
<div class="calc">x + 2x + 2x = 180, donc 5x = 180 et x = 36°.</div>
<p>L'angle <span class="m">BAC</span> mesure <b>36°</b>.</p>
<p><b>Vérification :</b> ABC a pour angles 36°, 72°, 72° ; ABD a pour angles 36°, 36°, 108° ; BDC a pour angles 72°, 72°, 36°. ✓</p>`
  },
  {
    id: "geo-15",
    theme: "geo",
    niveau: 2,
    type: "reponse",
    titre: `Parallèle au troisième côté`,
    enonce: `<p>Dans le triangle ABC, le point D est sur [AB] et le point E est sur [AC], avec (DE) parallèle à (BC).</p>
<p>On sait que AD = 4 cm, DB = 6 cm et DE = 5 cm. Combien mesure BC, en cm ?</p>`,
    figure: `<svg viewBox="0 0 280 218" width="280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC avec (DE) parallèle à (BC)" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="103.2,35.3 46.6,176.8 244.7,176.8"/><line x1="80.6" y1="91.9" x2="159.8" y2="91.9"/></g><g fill="currentColor" stroke="none"><text x="103.2" y="22.3" text-anchor="middle" dy="0.35em">A</text><text x="37.4" y="186" text-anchor="middle" dy="0.35em">B</text><text x="253.9" y="186" text-anchor="middle" dy="0.35em">C</text><text x="67.6" y="91.9" text-anchor="middle" dy="0.35em">D</text><text x="172.6" y="89.6" text-anchor="middle" dy="0.35em">E</text><text x="80.6" y="63.6" text-anchor="middle" dy="0.35em" font-size="12">4</text><text x="50.9" y="134.3" text-anchor="middle" dy="0.35em" font-size="12">6</text><text x="120.2" y="83.4" text-anchor="middle" dy="0.35em" font-size="12">5</text><text x="145.7" y="188.1" text-anchor="middle" dy="0.35em" font-size="12">?</text></g></svg>`,
    reponse: ["12.5", "25/2", "12.5cm"],
    reponseTexte: `12,5 cm`,
    pistes: [
      `<p>Quel théorème s'applique quand une droite parallèle à un côté coupe les deux autres côtés d'un triangle ?</p>`,
      `<p>Le théorème de Thalès donne AD/AB = AE/AC = DE/BC. Attention : que vaut AB ?</p>`,
      `<p>AB = AD + DB = 10 cm. Le rapport d'agrandissement du petit triangle ADE au grand triangle ABC est donc 10/4.</p>`,
      `<p>BC = DE × 10 ÷ 4.</p>`
    ],
    lecon: {
      titre: `Le théorème de Thalès et les triangles semblables`,
      html: `<p>Si D est sur (AB), E sur (AC) et <b>(DE) ∥ (BC)</b>, alors :</p>
<div class="calc">AD/AB = AE/AC = DE/BC</div>
<p>Autrement dit, le triangle ADE est une <b>réduction</b> du triangle ABC : toutes les longueurs sont multipliées par le même coefficient k = AD/AB. (On dit que les triangles sont <b>semblables</b>.)</p>
<div class="exemple">Les aires, elles, sont multipliées par k² : si k = 1/2, l'aire est divisée par 4.</div>
<div class="astuce">Astuce olympique : erreur classique n°1 : écrire AD/DB = DE/BC. Le rapport doit toujours comparer un segment du <b>petit</b> triangle au segment <b>correspondant</b> du grand triangle, les deux partant du sommet commun A.</div>`
    },
    correction: `<p>Les points A, D, B sont alignés, ainsi que A, E, C, et (DE) ∥ (BC). D'après le théorème de Thalès :</p>
<div class="calc">AD/AB = DE/BC</div>
<p>Or AB = AD + DB = 4 + 6 = 10 cm. Donc 4/10 = 5/BC, d'où :</p>
<div class="calc">BC = 5 × 10 ÷ 4 = 12,5 cm</div>
<p>BC mesure <b>12,5 cm</b>.</p>
<p><b>Erreur fréquente :</b> utiliser AD/DB = 4/6 comme rapport, ce qui donnerait 7,5 cm. Le petit triangle est ADE, le grand est ABC.</p>`
  },
  {
    id: "geo-16",
    theme: "geo",
    niveau: 2,
    type: "reponse",
    titre: `Quatre points sur un cercle`,
    enonce: `<p>Les points A, B, C, D sont sur un même cercle, dans cet ordre. On sait que</p>
<div class="calc"><span class="m">BAC</span> = 32° &nbsp;et&nbsp; <span class="m">CAD</span> = 41°.</div>
<p>Combien mesure l'angle <span class="m">BCD</span>, en degrés ?</p>`,
    figure: `<svg viewBox="0 0 240 240" width="240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quadrilatère ABCD inscrit dans un cercle" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><circle cx="120" cy="120" r="76.8"/><polygon points="106.7,44.4 47.8,146.3 112,196.4 194.5,138.6"/><line x1="106.7" y1="44.4" x2="112" y2="196.4"/><path d="M107.7 74.3 A30 30 0 0 1 91.7 70.3" stroke-width="1.2"/><path d="M127.1 66.3 A30 30 0 0 1 107.7 74.3" stroke-width="1.2"/><path d="M99.4 186.5 A16 16 0 0 1 125.1 187.2" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="95.5" y="89" text-anchor="middle" dy="0.35em" font-size="12">32°</text><text x="124.3" y="86.9" text-anchor="middle" dy="0.35em" font-size="12">41°</text><text x="94.7" y="167.6" text-anchor="middle" dy="0.35em" font-size="12">?</text><text x="104.4" y="31.6" text-anchor="middle" dy="0.35em">A</text><text x="35.6" y="150.7" text-anchor="middle" dy="0.35em">B</text><text x="110.6" y="209.3" text-anchor="middle" dy="0.35em">C</text><text x="207.1" y="141.7" text-anchor="middle" dy="0.35em">D</text></g></svg>`,
    reponse: ["107", "107°"],
    reponseTexte: `107°`,
    pistes: [
      `<p>Combien mesure l'angle <span class="m">BAD</span> ?</p>`,
      `<p>Lis la leçon sur l'angle inscrit : les angles <span class="m">BAD</span> et <span class="m">BCD</span> interceptent-ils le même arc ?</p>`,
      `<p>Non : ils interceptent les deux arcs complémentaires BD. Les angles au centre correspondants font un tour complet, 360°.</p>`,
      `<p>Dans un quadrilatère inscrit, les angles opposés sont supplémentaires : <span class="m">BCD</span> = 180° − 73°.</p>`
    ],
    lecon: {
      titre: `L'angle inscrit`,
      html: `<p>Soit un cercle de centre O et deux points B, D du cercle. Un angle <span class="m">BAD</span> dont le sommet A est sur le cercle est un <b>angle inscrit</b> ; il « intercepte » l'arc BD qui ne contient pas A.</p>
<div class="calc">Théorème : angle inscrit = moitié de l'angle au centre qui intercepte le même arc.</div>
<p><i>Idée de preuve</i> (cas où O est à l'intérieur de l'angle) : on trace le diamètre [AA′]. Les triangles OAB et OAD sont isocèles (OA = OB = OD), et l'angle extérieur <span class="m">BOA′</span> vaut 2 × <span class="m">OAB</span>. Même chose de l'autre côté, puis on additionne.</p>
<p><b>Deux conséquences :</b></p>
<ul><li>deux angles inscrits qui interceptent le même arc sont <b>égaux</b> ;</li>
<li>dans un quadrilatère inscrit dans un cercle, les angles <b>opposés</b> sont <b>supplémentaires</b> (somme 180°), car les deux arcs font ensemble 360° et 360 ÷ 2 = 180.</li></ul>
<div class="astuce">Astuce olympique : dès que 4 points sont sur un cercle, cherche des angles inscrits égaux : c'est l'outil le plus puissant de la chasse aux angles.</div>`
    },
    correction: `<p>Le point C est à l'intérieur de l'angle <span class="m">BAD</span> (les points sont dans l'ordre A, B, C, D sur le cercle), donc :</p>
<div class="calc"><span class="m">BAD</span> = 32° + 41° = 73°</div>
<p>Le quadrilatère ABCD est inscrit dans un cercle. Les angles inscrits <span class="m">BAD</span> et <span class="m">BCD</span> interceptent les deux arcs BD complémentaires ; les angles au centre associés ont pour somme 360°, donc les angles inscrits ont pour somme 180° :</p>
<div class="calc"><span class="m">BCD</span> = 180° − 73° = 107°</div>
<p>L'angle <span class="m">BCD</span> mesure <b>107°</b>.</p>
<p><b>Pour aller plus loin :</b> on a aussi <span class="m">BDC</span> = <span class="m">BAC</span> = 32° (même arc BC) et <span class="m">CBD</span> = <span class="m">CAD</span> = 41° (même arc CD). Vérifie : 32 + 41 + 107 = 180 dans le triangle BCD !</p>`
  },
  {
    id: "geo-17",
    theme: "geo",
    niveau: 2,
    type: "demo",
    titre: `L'angle droit du demi-cercle`,
    enonce: `<p>Soit [AB] un diamètre d'un cercle de centre O, et C un point du cercle distinct de A et de B.</p>
<p>Démontrer que le triangle ABC est rectangle en C.</p>`,
    figure: `<svg viewBox="0 0 280 184" width="280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC inscrit dans un demi-cercle" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M40.6 140 A99.4 99.4 0 0 1 239.4 140"/><polygon points="40.6,140 239.4,140 192.7,55.7"/><line x1="140" y1="140" x2="192.7" y2="55.7" stroke-dasharray="5 4"/><path d="M199.5 67.9 A14 14 0 0 1 180.4 62.5" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><circle cx="140" cy="140" r="2.5" fill="currentColor"/><text x="28.4" y="144.4" text-anchor="middle" dy="0.35em">A</text><text x="251.6" y="144.4" text-anchor="middle" dy="0.35em">B</text><text x="199.2" y="44.4" text-anchor="middle" dy="0.35em">C</text><text x="140" y="153" text-anchor="middle" dy="0.35em">O</text></g></svg>`,
    pistes: [
      `<p>Trace le segment [OC]. Que peux-tu dire des longueurs OA, OB et OC ?</p>`,
      `<p>Les triangles OAC et OBC sont isocèles en O. Nomme a = <span class="m">OAC</span> et b = <span class="m">OBC</span>. Quels autres angles valent a et b ?</p>`,
      `<p><span class="m">OCA</span> = a et <span class="m">OCB</span> = b. Exprime l'angle <span class="m">ACB</span> en fonction de a et b.</p>`,
      `<p>La somme des angles du triangle ABC donne a + b + (a + b) = 180°. Conclus.</p>`
    ],
    lecon: {
      titre: `Cercle et triangle rectangle`,
      html: `<p><b>Théorème :</b> si C est sur le cercle de diamètre [AB] (C ≠ A, B), alors le triangle ABC est rectangle en C.</p>
<p><b>Réciproque :</b> si ABC est rectangle en C, alors C est sur le cercle de diamètre [AB]. Autrement dit, le milieu de l'hypoténuse est à égale distance des trois sommets : <span class="m">OA = OB = OC</span>.</p>
<p><i>Preuve de la réciproque :</i> on complète ABC en un rectangle ACBD ; ses diagonales [AB] et [CD] ont même milieu O et même longueur, donc OC = OA = OB.</p>
<div class="exemple">Dans un triangle rectangle d'hypoténuse 10 cm, la médiane issue de l'angle droit mesure 5 cm.</div>
<div class="astuce">Astuce olympique : un angle droit dans une figure ⇒ pense au cercle de diamètre l'hypoténuse. Deux angles droits qui « regardent » le même segment [BC] ⇒ les quatre points sont sur un même cercle !</div>`
    },
    correction: `<p>Les points A, B, C sont sur le cercle de centre O, donc <span class="m">OA = OB = OC</span> (rayons).</p>
<p><b>1.</b> Le triangle OAC est isocèle en O, donc <span class="m">OCA</span> = <span class="m">OAC</span> ; notons a cet angle.</p>
<p><b>2.</b> Le triangle OBC est isocèle en O, donc <span class="m">OCB</span> = <span class="m">OBC</span> ; notons b cet angle.</p>
<p><b>3.</b> O est sur [AB], donc la demi-droite [CO) est à l'intérieur de l'angle <span class="m">ACB</span> et <span class="m">ACB</span> = a + b.</p>
<p><b>4.</b> Dans le triangle ABC, les angles en A et B sont <span class="m">CAB</span> = a et <span class="m">CBA</span> = b (car O est sur [AB]). La somme des angles donne :</p>
<div class="calc">a + b + (a + b) = 180°, donc a + b = 90°.</div>
<p>Ainsi <span class="m">ACB</span> = 90° : le triangle ABC est rectangle en C. CQFD.</p>
<p><b>Pour aller plus loin :</b> c'est un cas particulier de l'angle inscrit : l'angle au centre <span class="m">AOB</span> est plat (180°), donc l'angle inscrit vaut 90°.</p>`,
    bareme: [
      `Tracer [OC] et justifier OA = OB = OC`,
      `Identifier les deux triangles isocèles et leurs angles égaux`,
      `Écrire ACB = a + b`,
      `Utiliser la somme des angles de ABC pour conclure à 90°`
    ]
  },
  {
    id: "geo-18",
    theme: "geo",
    niveau: 2,
    type: "reponse",
    titre: `Le cerf-volant des tangentes`,
    enonce: `<p>Un cercle a pour centre O et pour rayon 5 cm. Un point P est situé à 13 cm de O. Les deux tangentes au cercle issues de P touchent le cercle en A et en B.</p>
<p>Quelle est l'aire du quadrilatère OAPB, en cm² ?</p>`,
    figure: `<svg viewBox="0 0 300 193" width="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deux tangentes issues de P" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><circle cx="96.7" cy="96.7" r="64.9"/><polygon points="96.7,96.7 121.7,36.8 265.6,96.7 121.7,156.7" fill="currentColor" fill-opacity="0.15"/><line x1="96.7" y1="96.7" x2="265.6" y2="96.7" stroke-dasharray="5 4"/><polyline points="118.3,45.1 126.6,48.6 130,40.3" stroke-width="1.2"/><polyline points="118.3,148.4 126.6,144.9 130,153.2" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><circle cx="96.7" cy="96.7" r="2.5" fill="currentColor"/><text x="83.7" y="96.7" text-anchor="middle" dy="0.35em">O</text><text x="278.6" y="96.7" text-anchor="middle" dy="0.35em">P</text><text x="119.5" y="24" text-anchor="middle" dy="0.35em">A</text><text x="119.5" y="169.5" text-anchor="middle" dy="0.35em">B</text></g></svg>`,
    reponse: ["60", "60cm²", "60cm2"],
    reponseTexte: `60 cm²`,
    pistes: [
      `<p>Que sais-tu de l'angle entre une tangente et le rayon au point de contact ?</p>`,
      `<p>La tangente (PA) est perpendiculaire au rayon [OA] : le triangle OAP est rectangle en A. Calcule PA.</p>`,
      `<p>PA² = 13² − 5² = 144. Le quadrilatère OAPB est formé de deux triangles rectangles. Sont-ils identiques ?</p>`,
      `<p>OAP et OBP ont les mêmes côtés (OA = OB = 5, PA = PB = 12, OP commun). Chacun a pour aire 5 × 12 ÷ 2.</p>`
    ],
    lecon: {
      titre: `Tangente à un cercle`,
      html: `<p>Une <b>tangente</b> à un cercle en un point A est la droite qui touche le cercle uniquement en A. Propriété fondamentale :</p>
<div class="calc">la tangente en A est perpendiculaire au rayon [OA].</div>
<p><b>Conséquence :</b> depuis un point P extérieur, on peut tracer deux tangentes, qui touchent le cercle en A et B. Les triangles OAP et OBP sont rectangles, ont la même hypoténuse [OP] et OA = OB, donc par Pythagore :</p>
<div class="calc">PA = PB (les deux « segments tangents » sont égaux)</div>
<div class="exemple">Si OP = 10 et r = 6, alors PA = PB = √(100 − 36) = 8.</div>
<div class="astuce">Astuce olympique : dès qu'un problème contient une tangente, trace le rayon au point de contact : il apporte un angle droit, donc Pythagore.</div>`
    },
    correction: `<p>La tangente en A est perpendiculaire au rayon [OA], donc le triangle OAP est rectangle en A. D'après Pythagore :</p>
<div class="calc">PA² = OP² − OA² = 169 − 25 = 144, donc PA = 12 cm.</div>
<p>De même, OBP est rectangle en B et PB = 12 cm. Le quadrilatère OAPB est la réunion des triangles OAP et OBP (collés le long de [OP]), qui ont chacun pour aire :</p>
<div class="calc">OA × PA ÷ 2 = 5 × 12 ÷ 2 = 30 cm²</div>
<p>L'aire de OAPB vaut donc 2 × 30 = <b>60 cm²</b>.</p>
<p><b>Pour aller plus loin :</b> OAPB est un « cerf-volant » (deux paires de côtés consécutifs égaux) ; ses diagonales [OP] et [AB] sont perpendiculaires. Avec aire = OP × AB ÷ 2, on trouve AB = 120 ÷ 13 cm.</p>`
  },
  {
    id: "geo-19",
    theme: "geo",
    niveau: 2,
    type: "reponse",
    titre: `Rapports d'aires en chaîne`,
    enonce: `<p>Le triangle ABC a une aire de 72 cm². Le point D est sur [BC] avec BD = 2 × DC, et E est le milieu de [AD].</p>
<p>Quelle est l'aire du triangle EBC, en cm² ?</p>`,
    figure: `<svg viewBox="0 0 260 235" width="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC, point D sur [BC], E milieu de [AD]" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="123.8,114.4 36.5,192.4 223.5,192.4" fill="currentColor" fill-opacity="0.15"/><polygon points="86.4,36.5 36.5,192.4 223.5,192.4"/><line x1="86.4" y1="36.5" x2="161.2" y2="192.4"/><line x1="109.6" y1="73.3" x2="100.6" y2="77.6" stroke-width="1.2"/><line x1="147" y1="151.2" x2="138" y2="155.5" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="86.4" y="23.5" text-anchor="middle" dy="0.35em">A</text><text x="27.3" y="201.5" text-anchor="middle" dy="0.35em">B</text><text x="232.7" y="201.5" text-anchor="middle" dy="0.35em">C</text><text x="161.2" y="205.4" text-anchor="middle" dy="0.35em">D</text><text x="136" y="110" text-anchor="middle" dy="0.35em">E</text></g></svg>`,
    reponse: ["36", "36cm²", "36cm2"],
    reponseTexte: `36 cm²`,
    pistes: [
      `<p>Commence par les aires de ABD et de ADC : ces deux triangles ont la même hauteur issue de A.</p>`,
      `<p>Aire(ABD) = 48 et Aire(ADC) = 24. Maintenant, compare Aire(EBD) et Aire(ABD) : quelle base commune, quelles hauteurs ?</p>`,
      `<p>E est le milieu de [AD] : sa distance à la droite (BC) est la moitié de celle de A. Qu'en déduis-tu pour les aires ?</p>`,
      `<p>Tu peux même aller plus vite : les triangles EBC et ABC ont la même base [BC]. Compare leurs hauteurs.</p>`
    ],
    lecon: {
      titre: `Rapports d'aires : bases et hauteurs`,
      html: `<p>Rappel : si deux triangles ont la <b>même hauteur</b>, le rapport de leurs aires est celui de leurs bases (geo-06). Symétriquement :</p>
<div class="calc">deux triangles de <b>même base</b> ont des aires proportionnelles à leurs <b>hauteurs</b>.</div>
<p>Et la hauteur d'un point M situé sur [AD], avec D sur la base, est proportionnelle à DM : si DM = t × DA, la distance de M à la base est t fois celle de A (c'est Thalès avec les deux hauteurs parallèles).</p>
<div class="exemple">Si M est au tiers de [DA] en partant de D, l'aire de MBC est le tiers de celle de ABC.</div>
<div class="astuce">Astuce olympique : dans les problèmes de rapports d'aires, pars de l'aire totale et découpe pas à pas, en notant chaque aire sur la figure. Choisis à chaque étape la base commune la plus pratique.</div>`
    },
    correction: `<p>Les triangles EBC et ABC ont la même base [BC]. Comparons leurs hauteurs.</p>
<p>Soient H et K les projetés orthogonaux de A et de E sur (BC). Les droites (AH) et (EK) sont parallèles (toutes deux perpendiculaires à (BC)). Dans le triangle DAH, E est le milieu de [DA] et (EK) ∥ (AH) ; d'après Thalès, <span class="m">EK = AH ÷ 2</span>.</p>
<div class="calc">Aire(EBC) = BC × EK ÷ 2 = (1/2) × BC × AH ÷ 2 = (1/2) × 72 = 36 cm²</div>
<p>L'aire du triangle EBC vaut <b>36 cm²</b>.</p>
<p><b>Remarque :</b> l'information BD = 2 × DC ne sert pas ici ! Elle servirait pour d'autres aires : Aire(ABD) = 48, Aire(EBD) = 24, Aire(ABE) = 24, Aire(EDC) = 12, Aire(AEC) = 12.</p>
<p><b>Erreur fréquente :</b> vouloir utiliser toutes les données. Dans un problème de compétition, certaines informations peuvent servir de fausse piste.</p>`
  },
  {
    id: "geo-20",
    theme: "geo",
    niveau: 2,
    type: "demo",
    titre: `Le parallélogramme caché (Varignon)`,
    enonce: `<p>Soit ABCD un quadrilatère convexe quelconque. On note I, J, K, L les milieux respectifs des côtés [AB], [BC], [CD] et [DA].</p>
<p>Démontrer que IJKL est un parallélogramme.</p>`,
    figure: `<svg viewBox="0 0 270 228" width="270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quadrilatère ABCD et milieux de ses côtés" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="37.9,176.6 204.4,190.5 232.1,65.6 79.5,37.9"/><polygon points="121.1,183.6 218.2,128.1 155.8,51.8 58.7,107.2" fill="currentColor" fill-opacity="0.15"/><line x1="37.9" y1="176.6" x2="232.1" y2="65.6" stroke-dasharray="5 4"/><line x1="79.9" y1="175.1" x2="79.1" y2="185.1" stroke-width="1.2"/><line x1="163.2" y1="182" x2="162.3" y2="192" stroke-width="1.2"/><line x1="206" y1="160.1" x2="215.8" y2="162.3" stroke-width="1.2"/><line x1="206.9" y1="156.2" x2="216.6" y2="158.4" stroke-width="1.2"/><line x1="219.9" y1="97.7" x2="229.6" y2="99.9" stroke-width="1.2"/><line x1="220.7" y1="93.8" x2="230.5" y2="96" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="28.7" y="185.8" text-anchor="middle" dy="0.35em">A</text><text x="213.6" y="199.7" text-anchor="middle" dy="0.35em">B</text><text x="243.4" y="59.1" text-anchor="middle" dy="0.35em">C</text><text x="73" y="26.6" text-anchor="middle" dy="0.35em">D</text><text x="121.1" y="196.6" text-anchor="middle" dy="0.35em">I</text><text x="231.2" y="128.1" text-anchor="middle" dy="0.35em">J</text><text x="158.1" y="38.9" text-anchor="middle" dy="0.35em">K</text><text x="45.7" y="107.2" text-anchor="middle" dy="0.35em">L</text></g></svg>`,
    pistes: [
      `<p>Trace la diagonale [AC]. Dans quels triangles apparaissent les segments [IJ] et [LK] ?</p>`,
      `<p>Dans le triangle ABC, I et J sont les milieux de deux côtés. Que dit le théorème de la droite des milieux ?</p>`,
      `<p>(IJ) ∥ (AC) et IJ = AC ÷ 2. Fais la même chose dans le triangle ACD pour [LK].</p>`,
      `<p>Un quadrilatère qui a deux côtés opposés parallèles et de même longueur est un parallélogramme.</p>`
    ],
    lecon: {
      titre: `Le théorème de la droite des milieux`,
      html: `<p>Dans un triangle ABC, si I est le milieu de [AB] et J le milieu de [BC], alors :</p>
<div class="calc">(IJ) ∥ (AC) &nbsp;et&nbsp; IJ = AC ÷ 2</div>
<p>C'est un cas particulier du théorème de Thalès (rapport 1/2). <b>Réciproque utile :</b> la droite passant par le milieu d'un côté et parallèle à un deuxième côté coupe le troisième côté en son milieu.</p>
<p>Pour prouver qu'un quadrilatère non croisé est un <b>parallélogramme</b>, il suffit de montrer l'une des propriétés :</p>
<ul><li>côtés opposés parallèles deux à deux ;</li><li>deux côtés opposés parallèles <b>et</b> de même longueur ;</li><li>diagonales qui se coupent en leur milieu.</li></ul>
<div class="astuce">Astuce olympique : dès qu'une figure contient plusieurs milieux, cherche le triangle dans lequel deux d'entre eux sont milieux de côtés, en traçant une diagonale ou un segment auxiliaire.</div>`
    },
    correction: `<p><b>1. Dans le triangle ABC</b> : I est le milieu de [AB] et J celui de [BC]. D'après le théorème de la droite des milieux, <span class="m">(IJ) ∥ (AC)</span> et <span class="m">IJ = AC ÷ 2</span>.</p>
<p><b>2. Dans le triangle ACD</b> : L est le milieu de [AD] et K celui de [CD]. De même, <span class="m">(LK) ∥ (AC)</span> et <span class="m">LK = AC ÷ 2</span>.</p>
<p><b>3.</b> Par conséquent (IJ) ∥ (LK) (deux droites parallèles à une même troisième) et IJ = LK.</p>
<p><b>4.</b> Le quadrilatère IJKL (non croisé, car ABCD est convexe) a deux côtés opposés [IJ] et [LK] parallèles et de même longueur : c'est un <b>parallélogramme</b>. CQFD.</p>
<p><b>Pour aller plus loin :</b> en utilisant l'autre diagonale [BD], on voit que IJKL est un losange si AC = BD, et un rectangle si (AC) ⟂ (BD). On peut aussi montrer que son aire est la moitié de celle de ABCD.</p>`,
    bareme: [
      `Tracer la diagonale [AC] et appliquer la droite des milieux dans ABC`,
      `Appliquer la droite des milieux dans ACD`,
      `En déduire IJ = LK et (IJ) ∥ (LK)`,
      `Conclure avec une caractérisation correcte du parallélogramme`
    ]
  },
  {
    id: "geo-21",
    theme: "geo",
    niveau: 2,
    type: "reponse",
    titre: `Le détour par la rivière`,
    enonce: `<p>Une maison A est à 3 km d'une rivière rectiligne, et une ferme B, du même côté, est à 5 km de la rivière. Les projetés de A et de B sur la rivière sont distants de 6 km.</p>
<p>Un berger part de A, va remplir son seau à la rivière en un point M, puis se rend à B. Quelle est, en km, la longueur minimale de son trajet AM + MB ?</p>`,
    figure: `<svg viewBox="0 0 260 298" width="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rivière, points A et B, symétrique A′" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><line x1="24" y1="176.2" x2="236" y2="176.2" stroke-width="2.5"/><line x1="45.7" y1="94.7" x2="106.9" y2="176.2"/><line x1="106.9" y1="176.2" x2="208.8" y2="40.3"/><line x1="45.7" y1="257.7" x2="106.9" y2="176.2" stroke-dasharray="5 4"/><line x1="45.7" y1="94.7" x2="45.7" y2="257.7" stroke-dasharray="5 4"/><polyline points="45.7,168.2 53.7,168.2 53.7,176.2" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><circle cx="45.7" cy="94.7" r="2.5" fill="currentColor"/><circle cx="208.8" cy="40.3" r="2.5" fill="currentColor"/><circle cx="45.7" cy="257.7" r="2.5" fill="currentColor"/><text x="32.7" y="94.7" text-anchor="middle" dy="0.35em">A</text><text x="221.8" y="40.3" text-anchor="middle" dy="0.35em">B</text><text x="32.7" y="257.7" text-anchor="middle" dy="0.35em">A′</text><text x="113.4" y="187.5" text-anchor="middle" dy="0.35em">M</text><text x="203.4" y="187.1" text-anchor="middle" dy="0.35em" font-size="12" font-style="italic">rivière</text></g></svg>`,
    reponse: ["10", "10km"],
    reponseTexte: `10 km`,
    pistes: [
      `<p>Si A et B étaient de part et d'autre de la rivière, où placerais-tu M ?</p>`,
      `<p>Construis A′, le symétrique de A par rapport à la rivière. Compare AM et A′M pour un point M de la rivière.</p>`,
      `<p>AM + MB = A′M + MB. Quand cette somme est-elle la plus petite possible ?</p>`,
      `<p>Le minimum est atteint quand A′, M, B sont alignés ; il vaut A′B. Utilise Pythagore avec un écart horizontal de 6 et un écart vertical de 3 + 5.</p>`
    ],
    lecon: {
      titre: `Symétrie et plus court chemin`,
      html: `<p>Le chemin le plus court entre deux points est le segment : pour tous points A, M, B, on a <span class="m">AM + MB ≥ AB</span> (inégalité triangulaire), avec égalité si et seulement si M est sur [AB].</p>
<p><b>Principe de la symétrie (problème de Héron)</b> : pour minimiser AM + MB avec M sur une droite d, A et B du même côté, on remplace A par son symétrique A′ par rapport à d. Comme d est la médiatrice de [AA′], <span class="m">AM = A′M</span>, donc :</p>
<div class="calc">AM + MB = A′M + MB ≥ A′B</div>
<p>Le minimum A′B est atteint pour M = intersection de [A′B] et de d.</p>
<div class="astuce">Astuce olympique : au point optimal, les angles que font [MA] et [MB] avec la droite sont égaux : c'est la loi de la réflexion de la lumière ! La lumière suit toujours le chemin le plus court.</div>`
    },
    correction: `<p>Soit A′ le symétrique de A par rapport à la rivière. Pour tout point M de la rivière, la rivière est la médiatrice de [AA′], donc AM = A′M et :</p>
<div class="calc">AM + MB = A′M + MB ≥ A′B</div>
<p>avec égalité quand M est le point d'intersection de [A′B] avec la rivière (A′ et B sont de part et d'autre de la rivière, donc ce point existe).</p>
<p>Calculons A′B dans un repère : la rivière est l'axe horizontal, A = (0 ; 3), donc A′ = (0 ; −3), et B = (6 ; 5). Les écarts sont 6 km horizontalement et 5 − (−3) = 8 km verticalement. Par Pythagore :</p>
<div class="calc">A′B = √(6² + 8²) = √100 = 10 km</div>
<p>Le trajet minimal mesure <b>10 km</b>.</p>
<p><b>Pour aller plus loin :</b> par Thalès, le point M optimal est à 6 × 3/8 = 2,25 km du projeté de A.</p>`
  },
  {
    id: "geo-22",
    theme: "geo",
    niveau: 2,
    type: "reponse",
    titre: `Le triangle dans le carré`,
    enonce: `<p>ABCD est un carré. On construit à l'intérieur du carré le triangle équilatéral ABE.</p>
<p>Combien mesure l'angle <span class="m">DEC</span>, en degrés ?</p>`,
    figure: `<svg viewBox="0 0 220 227" width="220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carré ABCD et triangle équilatéral ABE" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="38.3,185.2 181.7,185.2 181.7,41.9 38.3,41.9"/><polygon points="38.3,185.2 181.7,185.2 110,61.1" fill="currentColor" fill-opacity="0.15"/><line x1="38.3" y1="41.9" x2="110" y2="61.1"/><line x1="181.7" y1="41.9" x2="110" y2="61.1"/><path d="M96.5 57.5 A14 14 0 0 1 123.5 57.5" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="110" y="35.1" text-anchor="middle" dy="0.35em" font-size="12">?</text><text x="29.1" y="194.4" text-anchor="middle" dy="0.35em">A</text><text x="190.9" y="194.4" text-anchor="middle" dy="0.35em">B</text><text x="190.9" y="32.7" text-anchor="middle" dy="0.35em">C</text><text x="29.1" y="32.7" text-anchor="middle" dy="0.35em">D</text><text x="110" y="77.1" text-anchor="middle" dy="0.35em">E</text></g></svg>`,
    reponse: ["150", "150°"],
    reponseTexte: `150°`,
    pistes: [
      `<p>Cherche des longueurs égales : compare AD, AB et AE.</p>`,
      `<p>AE = AB = AD : le triangle ADE est isocèle en A. Combien vaut l'angle <span class="m">DAE</span> ?</p>`,
      `<p><span class="m">DAE</span> = 90° − 60° = 30°. Calcule alors les angles à la base <span class="m">ADE</span> et <span class="m">AED</span>.</p>`,
      `<p>Ils valent 75°. Par symétrie, <span class="m">BEC</span> = 75° aussi. Autour du point E, les angles font 360°.</p>`
    ],
    lecon: {
      titre: `Carrés et triangles équilatéraux`,
      html: `<p>Quand un carré et un triangle équilatéral partagent un côté, <b>toutes les longueurs</b> AB, BC, CD, DA, AE, BE sont égales. Cela crée plein de triangles isocèles !</p>
<p>Angles utiles : 90° (carré), 60° (équilatéral), donc 30° et 150° par différence ou somme. Un triangle isocèle d'angle au sommet 30° a des angles à la base de 75°, et un isocèle d'angle au sommet 150° a des angles à la base de 15°.</p>
<div class="exemple">Angles autour d'un point : leur somme vaut 360°. C'est une façon rapide de trouver le dernier angle.</div>
<div class="astuce">Astuce olympique : pour ce genre de figure, trace-la <b>proprement</b> au compas : on « voit » les triangles isocèles, et le rapporteur permet de vérifier la réponse.</div>`
    },
    correction: `<p>ABE est équilatéral, donc AE = AB = BE et ses angles valent 60°. ABCD est un carré, donc AD = AB = BC et ses angles sont droits.</p>
<p><b>Triangle ADE</b> : AD = AE, il est isocèle en A, et <span class="m">DAE</span> = 90° − 60° = 30°. Ses angles à la base valent (180° − 30°) ÷ 2 = 75°. Donc <span class="m">AED</span> = 75°.</p>
<p><b>Triangle BCE</b> : de même, BC = BE, <span class="m">CBE</span> = 30° et <span class="m">BEC</span> = 75°.</p>
<p><b>Autour de E</b> : les angles <span class="m">AEB</span>, <span class="m">BEC</span>, <span class="m">CED</span>, <span class="m">DEA</span> font un tour complet :</p>
<div class="calc">DEC = 360° − 60° − 75° − 75° = 150°</div>
<p>L'angle <span class="m">DEC</span> mesure <b>150°</b>.</p>
<p><b>Autre méthode :</b> dans le triangle DEC, isocèle en E par symétrie, <span class="m">EDC</span> = 90° − 75° = 15°, donc <span class="m">DEC</span> = 180° − 2 × 15° = 150°.</p>`
  },
  {
    id: "geo-23",
    theme: "geo",
    niveau: 2,
    type: "demo",
    titre: `Les pointes de l'étoile`,
    enonce: `<p>On trace une étoile à cinq branches (pas forcément régulière) en reliant cinq points A, B, C, D, E par les segments [AC], [CE], [EB], [BD] et [DA], comme sur la figure.</p>
<p>Démontrer que la somme des cinq angles aux pointes de l'étoile vaut 180°.</p>`,
    figure: `<svg viewBox="0 0 250 242" width="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Étoile à cinq branches ACEBD" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="116.9,37 187.2,203.4 35.6,105.2 204.1,100.4 70.6,198.8"/><path d="M125.5 57.2 A22 22 0 0 1 110.9 58.1" stroke-width="1.2"/><path d="M186.4 113.5 A22 22 0 0 1 182.1 101.1" stroke-width="1.2"/><path d="M168.7 191.4 A22 22 0 0 1 178.7 183.1" stroke-width="1.2"/><path d="M76.6 177.7 A22 22 0 0 1 88.3 185.8" stroke-width="1.2"/><path d="M57.6 104.6 A22 22 0 0 1 54 117.2" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="115.8" y="24" text-anchor="middle" dy="0.35em">A</text><text x="216.3" y="96" text-anchor="middle" dy="0.35em">B</text><text x="195.6" y="213.3" text-anchor="middle" dy="0.35em">C</text><text x="62.6" y="209.1" text-anchor="middle" dy="0.35em">D</text><text x="23" y="101.9" text-anchor="middle" dy="0.35em">E</text><text x="150.5" y="91.7" text-anchor="middle" dy="0.35em">X</text><text x="91.9" y="93.1" text-anchor="middle" dy="0.35em">Y</text></g></svg>`,
    pistes: [
      `<p>Vérifie d'abord sur une étoile régulière : chaque pointe mesure 36°. Combien font 5 × 36 ?</p>`,
      `<p>Isole un triangle qui contient la pointe A : le segment [EB] coupe [AC] en X et [AD] en Y. Considère le triangle AXY.</p>`,
      `<p>L'angle <span class="m">AXY</span> est un angle extérieur du triangle XCE. À quelles pointes est-il égal ?</p>`,
      `<p><span class="m">AXY</span> = pointe C + pointe E, et de même <span class="m">AYX</span> = pointe B + pointe D (triangle YBD). Écris la somme des angles du triangle AXY.</p>`
    ],
    lecon: {
      titre: `Rappel : l'angle extérieur, en action`,
      html: `<p>Rappel (geo-03) : dans un triangle, un <b>angle extérieur</b> est égal à la somme des deux angles intérieurs non adjacents.</p>
<p>Cet outil permet de « transporter » deux angles éloignés en un seul endroit de la figure. La stratégie pour une somme d'angles dispersés :</p>
<ol><li>choisir un triangle qui contient déjà un des angles ;</li>
<li>exprimer ses deux autres angles comme angles extérieurs de triangles voisins ;</li>
<li>conclure avec la somme des angles de ce triangle (180°).</li></ol>
<div class="exemple">Dans l'étoile régulière, chaque pointe vaut 36° (car l'angle d'un pentagone régulier vaut 108° et les petits triangles des branches sont isocèles de base angles 72°).</div>
<div class="astuce">Astuce olympique : quand l'énoncé dit « pas forcément régulière », vérifie ton résultat sur le cas régulier, puis cherche une preuve qui n'utilise <b>aucune</b> mesure particulière.</div>`
    },
    correction: `<p>Notons a, b, c, d, e les angles aux pointes A, B, C, D, E : a = <span class="m">CAD</span>, b = <span class="m">EBD</span>, c = <span class="m">ACE</span>, d = <span class="m">ADB</span>, e = <span class="m">CEB</span>.</p>
<p>Le segment [EB] coupe [AC] en X et [AD] en Y ; sur [EB], les points sont dans l'ordre E, Y, X, B.</p>
<p><b>1. Triangle XCE.</b> Les points A, X, C sont alignés avec X entre A et C, donc <span class="m">AXE</span> est un angle extérieur du triangle XCE :</p>
<div class="calc">AXE = XCE + XEC = c + e</div>
<p>Comme Y est sur [XE], <span class="m">AXY</span> = <span class="m">AXE</span> = c + e.</p>
<p><b>2. Triangle YDB.</b> De même, A, Y, D sont alignés avec Y entre A et D, donc <span class="m">AYB</span> est un angle extérieur du triangle YDB : <span class="m">AYB</span> = d + b. Comme X est sur [YB], <span class="m">AYX</span> = b + d.</p>
<p><b>3. Triangle AXY.</b> La somme de ses angles vaut 180° :</p>
<div class="calc">a + (c + e) + (b + d) = 180°</div>
<p>La somme des angles aux cinq pointes vaut bien 180°. CQFD.</p>`,
    bareme: [
      `Introduire les points d'intersection X et Y et le triangle AXY`,
      `Exprimer AXY comme angle extérieur du triangle XCE`,
      `Exprimer AYX comme angle extérieur du triangle YDB`,
      `Conclure par la somme des angles de AXY`
    ]
  },
  {
    id: "geo-24",
    theme: "geo",
    niveau: 2,
    type: "reponse",
    titre: `La fourmi sur la boîte`,
    enonce: `<p>Une boîte fermée a la forme d'un pavé droit de dimensions 12 cm × 3 cm × 2 cm. Une fourmi part du sommet A et veut atteindre le sommet opposé G en <b>marchant sur la surface</b> de la boîte.</p>
<p>Quelle est la longueur, en cm, du plus court chemin possible ?</p>`,
    figure: `<svg viewBox="0 0 300 121" width="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pavé droit 12 × 3 × 2" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="34.3,86.6 240,86.6 240,52.3 34.3,52.3"/><polygon points="34.3,52.3 240,52.3 265.7,34.3 60,34.3"/><polygon points="240,86.6 265.7,68.6 265.7,34.3 240,52.3"/><line x1="34.3" y1="86.6" x2="60" y2="68.6" stroke-dasharray="5 4"/><line x1="60" y1="68.6" x2="265.7" y2="68.6" stroke-dasharray="5 4"/><line x1="60" y1="68.6" x2="60" y2="34.3" stroke-dasharray="5 4"/></g><g fill="currentColor" stroke="none"><circle cx="34.3" cy="86.6" r="2.5" fill="currentColor"/><circle cx="265.7" cy="34.3" r="2.5" fill="currentColor"/><text x="25.1" y="95.8" text-anchor="middle" dy="0.35em">A</text><text x="274.9" y="25.1" text-anchor="middle" dy="0.35em">G</text><text x="137.1" y="94.3" text-anchor="middle" dy="0.35em" font-size="12">12</text><text x="27.4" y="69.4" text-anchor="middle" dy="0.35em" font-size="12">2</text><text x="258.9" y="79.7" text-anchor="middle" dy="0.35em" font-size="12">3</text></g></svg>`,
    reponse: ["13", "13cm"],
    reponseTexte: `13 cm`,
    pistes: [
      `<p>Sur une surface plane, le plus court chemin est un segment. Comment rendre la surface de la boîte plane ?</p>`,
      `<p>Déplie deux faces voisines (un <b>patron</b> partiel) : la fourmi traverse d'abord une face, puis une face adjacente. Sur le patron, son chemin optimal est un segment.</p>`,
      `<p>Selon l'arête traversée, on obtient un rectangle déplié de dimensions (3 + 2) × 12, ou (12 + 2) × 3, ou (12 + 3) × 2. Calcule la diagonale dans chaque cas.</p>`,
      `<p>Les diagonales valent √(5² + 12²), √(14² + 3²) et √(15² + 2²). Laquelle est la plus petite ?</p>`
    ],
    lecon: {
      titre: `Patrons et chemins sur une surface`,
      html: `<p>Pour trouver le plus court chemin <b>sur la surface</b> d'un solide, on <b>déplie</b> le solide : sur le patron (à plat), le chemin le plus court est un segment, qu'on calcule avec Pythagore.</p>
<p>Attention : il y a souvent <b>plusieurs façons de déplier</b> ! Il faut les comparer toutes et garder la plus courte.</p>
<p>Pour un pavé a × b × c, d'un sommet au sommet opposé, les trois candidats sont :</p>
<div class="calc">√((a + b)² + c²), &nbsp;√((a + c)² + b²), &nbsp;√((b + c)² + a²)</div>
<p>Le plus court est celui où l'on « additionne les deux plus petites dimensions ».</p>
<div class="exemple">Cube d'arête 1 : chemin minimal √(2² + 1²) = √5 ≈ 2,24, plus long que la diagonale intérieure √3 ≈ 1,73 (mais la fourmi ne peut pas traverser le cube !).</div>
<div class="astuce">Astuce olympique : dessine toujours le patron, place A et G dessus, puis trace le segment. Vérifie que le segment reste bien dans le patron.</div>`
    },
    correction: `<p>Tout chemin de A à G sur la surface doit traverser au moins deux faces. Le chemin le plus court traverse exactement deux faces adjacentes en franchissant une de leurs arêtes communes ; en dépliant ces deux faces à plat, on obtient un rectangle dont A et G sont deux sommets opposés, et le chemin optimal est la diagonale de ce rectangle.</p>
<p>Trois dépliages sont possibles :</p>
<ul><li>rectangle (3 + 2) × 12 : diagonale √(25 + 144) = √169 = 13 ;</li>
<li>rectangle (12 + 2) × 3 : diagonale √(196 + 9) = √205 ≈ 14,3 ;</li>
<li>rectangle (12 + 3) × 2 : diagonale √(225 + 4) = √229 ≈ 15,1.</li></ul>
<p>Le plus court chemin mesure <b>13 cm</b>.</p>
<p><b>Remarque :</b> la diagonale intérieure du pavé mesure √(144 + 9 + 4) = √157 ≈ 12,5 cm : c'est moins que 13, ce qui est logique, mais la fourmi ne peut pas la suivre.</p>`
  },
  {
    id: "geo-25",
    theme: "geo",
    niveau: 2,
    type: "reponse",
    titre: `Le carré dans le coin`,
    enonce: `<p>Le triangle ABC est rectangle en C, avec CA = 10 cm et CB = 15 cm. Un carré est placé dans le coin C : deux de ses côtés sont sur [CA] et [CB], et son quatrième sommet M est sur l'hypoténuse [AB].</p>
<p>Quelle est la longueur du côté du carré, en cm ?</p>`,
    figure: `<svg viewBox="0 0 280 211" width="280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carré inscrit dans un triangle rectangle" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="38.1,173 122.4,173 122.4,88.7 38.1,88.7" fill="currentColor" fill-opacity="0.15"/><polygon points="38.1,173 249,173 38.1,32.4"/><polyline points="38.1,165 46.1,165 46.1,173" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="28.9" y="182.2" text-anchor="middle" dy="0.35em">C</text><text x="38.1" y="19.4" text-anchor="middle" dy="0.35em">A</text><text x="262" y="173" text-anchor="middle" dy="0.35em">B</text><text x="131.6" y="79.5" text-anchor="middle" dy="0.35em">M</text><text x="29.6" y="102.7" text-anchor="middle" dy="0.35em" font-size="12">10</text><text x="143.5" y="181.5" text-anchor="middle" dy="0.35em" font-size="12">15</text></g></svg>`,
    reponse: ["6", "6cm"],
    reponseTexte: `6 cm`,
    pistes: [
      `<p>Appelle x le côté du carré. Repère un petit triangle en haut de la figure : est-il semblable au grand ?</p>`,
      `<p>Le petit triangle au-dessus du carré a un côté vertical de longueur 10 − x et un côté horizontal de longueur x. Son côté horizontal est parallèle à (CB).</p>`,
      `<p>D'après Thalès dans le triangle ACB : (10 − x)/10 = x/15.</p>`,
      `<p>Produit en croix : 15(10 − x) = 10x. Résous.</p>`
    ],
    lecon: {
      titre: `Thalès pour trouver une inconnue`,
      html: `<p>Quand une figure contient une <b>parallèle à un côté</b> d'un triangle, on a deux triangles semblables et on peut écrire une égalité de rapports. Si une longueur inconnue x apparaît dans les deux rapports, on obtient une <b>équation</b>.</p>
<div class="exemple">Ici, le côté supérieur du carré est parallèle à (CB) : le petit triangle au-dessus est une réduction du grand triangle ACB.</div>
<p>Méthode : (1) nommer l'inconnue ; (2) repérer les deux triangles semblables et les côtés <b>correspondants</b> ; (3) écrire l'égalité des rapports ; (4) faire un produit en croix.</p>
<div class="astuce">Astuce olympique : formule générale pour un triangle rectangle de côtés a et b : le carré dans le coin a pour côté ab/(a + b). Avec a = 10, b = 15 : 150/25 = 6. Une autre preuve : l'aire du triangle = aire de deux triangles de hauteur x : ab/2 = (a + b)x/2.</div>`
    },
    correction: `<p>Notons x le côté du carré, et P le sommet du carré situé sur [CA] : CP = x, donc PA = 10 − x. Le côté [PM] du carré est parallèle à (CB) (tous deux perpendiculaires à (CA)).</p>
<p>Dans le triangle ACB, avec P sur [AC], M sur [AB] et (PM) ∥ (CB), le théorème de Thalès donne :</p>
<div class="calc">AP/AC = PM/CB, soit (10 − x)/10 = x/15</div>
<p>D'où 15(10 − x) = 10x, puis 150 = 25x et x = 6.</p>
<p>Le côté du carré mesure <b>6 cm</b>.</p>
<p><b>Vérification par les aires :</b> l'aire de ACB (75 cm²) est la somme des aires des triangles ACM et BCM, de hauteurs x : 10x/2 + 15x/2 = 12,5x = 75, donc x = 6. ✓</p>`
  },
  {
    id: "geo-26",
    theme: "geo",
    niveau: 2,
    type: "demo",
    titre: `Trois points alignés`,
    enonce: `<p>ABCD est un carré. On construit le triangle équilatéral ABE à l'intérieur du carré et le triangle équilatéral BCF à l'extérieur du carré.</p>
<p>Démontrer que les points D, E et F sont alignés.</p>`,
    figure: `<svg viewBox="0 0 290 193" width="290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carré ABCD, triangles équilatéraux ABE et BCF" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="35.6,154.2 151.3,154.2 151.3,38.5 35.6,38.5"/><polygon points="35.6,154.2 151.3,154.2 93.4,54"/><polygon points="151.3,154.2 251.5,96.3 151.3,38.5"/><line x1="35.6" y1="38.5" x2="251.5" y2="96.3" stroke-dasharray="5 4"/></g><g fill="currentColor" stroke="none"><text x="26.4" y="163.4" text-anchor="middle" dy="0.35em">A</text><text x="151.3" y="167.2" text-anchor="middle" dy="0.35em">B</text><text x="151.3" y="25.5" text-anchor="middle" dy="0.35em">C</text><text x="26.4" y="29.3" text-anchor="middle" dy="0.35em">D</text><text x="93.4" y="70" text-anchor="middle" dy="0.35em">E</text><text x="264.5" y="96.3" text-anchor="middle" dy="0.35em">F</text></g></svg>`,
    pistes: [
      `<p>Pour montrer que D, E, F sont alignés, on peut montrer que l'angle <span class="m">DEF</span> est plat, c'est-à-dire que <span class="m">DEA</span> + <span class="m">AEB</span> + <span class="m">BEF</span> = 180°.</p>`,
      `<p>Tu connais déjà <span class="m">AEB</span> = 60°. Pour <span class="m">DEA</span>, regarde le triangle ADE (voir aussi geo-22).</p>`,
      `<p>Pour <span class="m">BEF</span>, cherche un triangle isocèle contenant E et F. Compare BE et BF.</p>`,
      `<p>BE = BA = BC = BF, et <span class="m">EBF</span> = 30° + 60° = 90°. Le triangle BEF est isocèle rectangle.</p>`
    ],
    lecon: {
      titre: `Démontrer un alignement`,
      html: `<p>Trois méthodes classiques pour montrer que D, E, F sont alignés :</p>
<ul><li><b>Angle plat</b> : montrer qu'en E (point du milieu), la somme des angles entre [ED) et [EF) vaut 180°, en décomposant par des demi-droites intermédiaires ;</li>
<li><b>Parallèles</b> : montrer que (DE) et (DF) sont parallèles à une même droite (elles ont un point commun, donc sont confondues) ;</li>
<li><b>Coordonnées</b> : dans un repère, vérifier que les « pentes » de (DE) et (DF) sont égales.</li></ul>
<div class="exemple">Attention au piège : une figure peut « avoir l'air » alignée à 1° près. Seule une démonstration compte.</div>
<div class="astuce">Astuce olympique : pour la méthode de l'angle plat, il faut que les angles additionnés soient « côte à côte » autour de E, sans chevauchement. Précise l'ordre des demi-droites (ici [ED), [EA), [EB), [EF)).</div>`
    },
    correction: `<p>Les triangles ABE et BCF sont équilatéraux et ABCD est un carré, donc :</p>
<div class="calc">AD = AB = AE = BE = BC = BF</div>
<p><b>1. Angle DEA.</b> Le triangle ADE est isocèle en A avec <span class="m">DAE</span> = 90° − 60° = 30° (E est à l'intérieur du carré). Donc <span class="m">DEA</span> = (180° − 30°) ÷ 2 = 75°.</p>
<p><b>2. Angle AEB</b> = 60° (triangle équilatéral).</p>
<p><b>3. Angle BEF.</b> On a <span class="m">EBC</span> = 90° − 60° = 30° et <span class="m">CBF</span> = 60° ; comme E est à l'intérieur du carré et F à l'extérieur, de part et d'autre de (BC), <span class="m">EBF</span> = 30° + 60° = 90°. Le triangle BEF est isocèle en B (BE = BF) et rectangle en B, donc <span class="m">BEF</span> = 45°.</p>
<p><b>4.</b> Autour de E, les demi-droites [ED), [EA), [EB), [EF) se suivent dans cet ordre, donc :</p>
<div class="calc">DEF = 75° + 60° + 45° = 180°</div>
<p>L'angle <span class="m">DEF</span> est plat : <b>D, E, F sont alignés</b>. CQFD.</p>`,
    bareme: [
      `Repérer toutes les longueurs égales (AD = AE = BE = BF)`,
      `Calculer DEA = 75° (triangle isocèle ADE)`,
      `Calculer BEF = 45° (triangle BEF isocèle rectangle)`,
      `Conclure à un angle plat, en justifiant l'ordre des demi-droites`
    ]
  },
  {
    id: "geo-27",
    theme: "geo",
    niveau: 2,
    type: "reponse",
    titre: `Le carré penché`,
    enonce: `<p>Dans un carré de côté 7 cm, on place sur chaque côté un point situé à 3 cm d'un sommet, en tournant toujours dans le même sens (voir figure). Ces quatre points forment un carré incliné (colorié).</p>
<p>Quelle est l'aire du carré colorié, en cm² ?</p>`,
    figure: `<svg viewBox="0 0 230 230" width="230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carré incliné dans un carré" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="40.9,189.1 189.1,189.1 189.1,40.9 40.9,40.9"/><polygon points="104.4,189.1 189.1,125.6 125.6,40.9 40.9,104.4" fill="currentColor" fill-opacity="0.15"/></g><g fill="currentColor" stroke="none"><text x="72.7" y="198.6" text-anchor="middle" dy="0.35em" font-size="12">3</text><text x="146.7" y="198.6" text-anchor="middle" dy="0.35em" font-size="12">4</text><text x="198.6" y="157.3" text-anchor="middle" dy="0.35em" font-size="12">3</text><text x="198.6" y="83.3" text-anchor="middle" dy="0.35em" font-size="12">4</text></g></svg>`,
    reponse: ["25", "25cm²", "25cm2"],
    reponseTexte: `25 cm²`,
    pistes: [
      `<p>Plutôt que calculer l'aire du carré colorié directement, que reste-t-il quand on l'enlève du grand carré ?</p>`,
      `<p>Il reste 4 triangles rectangles aux coins. Quelles sont leurs dimensions ?</p>`,
      `<p>Chaque triangle a des côtés de l'angle droit de 3 cm et 4 cm, donc une aire de 6 cm².</p>`,
      `<p>Aire colorée = 49 − 4 × 6. (Tu peux vérifier avec Pythagore : le côté du carré penché vaut 5.)</p>`
    ],
    lecon: {
      titre: `L'aire complémentaire`,
      html: `<p>Quand une aire est difficile à calculer directement, on calcule l'aire d'une grande figure simple qui la contient, puis on <b>retire</b> les morceaux en trop :</p>
<div class="calc">aire cherchée = aire totale − aires des morceaux</div>
<div class="exemple">Aire d'un triangle dont les sommets sont sur une grille : on l'entoure d'un rectangle et on retire les triangles rectangles des coins.</div>
<p>Cette figure est célèbre : elle donne une <b>preuve du théorème de Pythagore</b> ! Avec un grand carré de côté a + b et des triangles de côtés a et b et d'hypoténuse c :</p>
<div class="calc">c² = (a + b)² − 4 × ab/2 = a² + 2ab + b² − 2ab = a² + b²</div>
<div class="astuce">Astuce olympique : pense à l'aire complémentaire dès qu'une figure est « penchée » par rapport à une grille ou à un carré.</div>`
    },
    correction: `<p>Le carré colorié découpe le grand carré en lui-même et quatre triangles rectangles aux coins. Chaque triangle a pour côtés de l'angle droit 3 cm et 7 − 3 = 4 cm, donc une aire de 3 × 4 ÷ 2 = 6 cm².</p>
<div class="calc">Aire colorée = 7² − 4 × 6 = 49 − 24 = 25 cm²</div>
<p>L'aire du carré colorié vaut <b>25 cm²</b>.</p>
<p><b>Vérification :</b> son côté est l'hypoténuse d'un triangle 3-4, soit √(9 + 16) = 5 cm, et 5² = 25. ✓</p>
<p><b>Pour aller plus loin :</b> les quatre triangles sont superposables (mêmes côtés de l'angle droit), ce qui prouve que le quadrilatère colorié a quatre côtés égaux ; ses angles sont droits car les deux angles aigus d'un triangle rectangle ont pour somme 90°.</p>`
  },
  {
    id: "geo-28",
    theme: "geo",
    niveau: 2,
    type: "demo",
    titre: `Le triangle dans l'hexagone`,
    enonce: `<p>ABCDEF est un hexagone régulier.</p>
<p>Démontrer que l'aire du triangle ACE est égale à la moitié de l'aire de l'hexagone.</p>`,
    figure: `<svg viewBox="0 0 220 220" width="220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hexagone régulier et triangle ACE" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="110,38.3 47.9,145.8 172.1,145.8" fill="currentColor" fill-opacity="0.15"/><polygon points="110,38.3 47.9,74.2 47.9,145.8 110,181.7 172.1,145.8 172.1,74.2"/><line x1="110" y1="110" x2="110" y2="38.3" stroke-dasharray="5 4"/><line x1="110" y1="110" x2="47.9" y2="145.8" stroke-dasharray="5 4"/><line x1="110" y1="110" x2="172.1" y2="145.8" stroke-dasharray="5 4"/></g><g fill="currentColor" stroke="none"><circle cx="110" cy="110" r="2.5" fill="currentColor"/><text x="110" y="25.3" text-anchor="middle" dy="0.35em">A</text><text x="36.7" y="67.7" text-anchor="middle" dy="0.35em">B</text><text x="36.7" y="152.3" text-anchor="middle" dy="0.35em">C</text><text x="110" y="194.7" text-anchor="middle" dy="0.35em">D</text><text x="183.3" y="152.3" text-anchor="middle" dy="0.35em">E</text><text x="183.3" y="67.7" text-anchor="middle" dy="0.35em">F</text><text x="120.4" y="104" text-anchor="middle" dy="0.35em">O</text></g></svg>`,
    pistes: [
      `<p>L'hexagone est découpé par le triangle ACE en quatre morceaux : ACE et trois petits triangles ABC, CDE, EFA. Que peut-on dire de ces trois petits triangles ?</p>`,
      `<p>Il suffit de montrer que Aire(ACE) = Aire(ABC) + Aire(CDE) + Aire(EFA). Trace le centre O et les segments [OA], [OC], [OE].</p>`,
      `<p>Un hexagone régulier se découpe en 6 triangles équilatéraux de sommet O. Quelle est la nature du quadrilatère OABC ?</p>`,
      `<p>OABC est un losange (4 côtés égaux) ; sa diagonale [AC] le coupe en deux triangles de même aire : Aire(ABC) = Aire(OAC).</p>`
    ],
    lecon: {
      titre: `Découper pour comparer des aires`,
      html: `<p>Pour comparer deux aires sans rien calculer, on peut <b>découper</b> les figures en morceaux deux à deux superposables (ou de même aire).</p>
<p>Outils fréquents :</p>
<ul><li>un <b>hexagone régulier</b> de centre O se découpe en <b>6 triangles équilatéraux</b> (OA = AB = … car l'angle au centre vaut 60° et le triangle est isocèle) ;</li>
<li>une <b>diagonale d'un parallélogramme</b> (ou d'un losange) le partage en deux triangles superposables, donc de même aire.</li></ul>
<div class="exemple">Dans un parallélogramme ABCD, Aire(ABC) = Aire(ACD) = moitié de l'aire totale.</div>
<div class="astuce">Astuce olympique : une preuve par découpage est souvent plus élégante (et plus sûre) qu'un calcul avec des racines carrées. Les correcteurs l'apprécient.</div>`
    },
    correction: `<p>Soit O le centre de l'hexagone régulier, et c la longueur de ses côtés.</p>
<p><b>1.</b> Les six sommets sont sur un cercle de centre O et les angles au centre <span class="m">AOB</span>, <span class="m">BOC</span>, … valent 360° ÷ 6 = 60°. Le triangle OAB est isocèle en O avec un angle de 60°, donc équilatéral : OA = OB = AB = c. Ainsi OA = OB = OC = OD = OE = OF = c.</p>
<p><b>2.</b> Le quadrilatère OABC a quatre côtés égaux à c : c'est un losange, donc un parallélogramme. Sa diagonale [AC] le partage en deux triangles superposables : <span class="m">Aire(ABC) = Aire(OAC)</span>.</p>
<p>De même, avec les losanges OCDE et OEFA : <span class="m">Aire(CDE) = Aire(OCE)</span> et <span class="m">Aire(EFA) = Aire(OEA)</span>.</p>
<p><b>3.</b> O est à l'intérieur du triangle ACE, donc Aire(ACE) = Aire(OAC) + Aire(OCE) + Aire(OEA) = Aire(ABC) + Aire(CDE) + Aire(EFA).</p>
<p><b>4.</b> L'hexagone est la réunion de ACE et des trois triangles ABC, CDE, EFA. Son aire vaut donc 2 × Aire(ACE). CQFD.</p>`,
    bareme: [
      `Justifier que OA = AB = … (triangles équilatéraux)`,
      `Montrer que OABC est un losange et en déduire Aire(ABC) = Aire(OAC)`,
      `Généraliser aux trois petits triangles`,
      `Recomposer l'hexagone et conclure`
    ]
  },
  {
    id: "geo-29",
    theme: "geo",
    niveau: 3,
    type: "reponse",
    titre: `Le cercle inscrit du 13-14-15`,
    enonce: `<p>Le triangle ABC a pour côtés AB = 13, BC = 14 et CA = 15.</p>
<p>Quel est le rayon de son cercle inscrit (le cercle tangent intérieurement aux trois côtés) ?</p>`,
    figure: `<svg viewBox="0 0 280 250" width="280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle 13-14-15 et son cercle inscrit" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="110.1,32.9 35.9,211.1 243.8,211.1"/><circle cx="125" cy="151.7" r="59.4"/><line x1="110.1" y1="32.9" x2="110.1" y2="211.1" stroke-dasharray="5 4"/><polyline points="110.1,202.1 119.1,202.1 119.1,211.1" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><circle cx="125" cy="151.7" r="2.5" fill="currentColor"/><text x="110.1" y="19.9" text-anchor="middle" dy="0.35em">A</text><text x="26.7" y="220.3" text-anchor="middle" dy="0.35em">B</text><text x="253" y="220.3" text-anchor="middle" dy="0.35em">C</text><text x="134.5" y="146.2" text-anchor="middle" dy="0.35em">I</text><text x="110.1" y="224.1" text-anchor="middle" dy="0.35em">H</text><text x="55.2" y="114.6" text-anchor="middle" dy="0.35em" font-size="12">13</text><text x="188.9" y="113.1" text-anchor="middle" dy="0.35em" font-size="12">15</text><text x="184.4" y="221.5" text-anchor="middle" dy="0.35em" font-size="12">14</text></g></svg>`,
    reponse: ["4", "quatre"],
    reponseTexte: `4`,
    pistes: [
      `<p>Commence par calculer l'aire du triangle. Il faut la hauteur AH issue de A. Pose BH = x : alors HC = 14 − x.</p>`,
      `<p>Pythagore dans ABH et ACH : AH² = 13² − x² = 15² − (14 − x)². Résous pour trouver x, puis AH.</p>`,
      `<p>On trouve x = 5 et AH = 12, donc l'aire vaut 84. Maintenant, découpe le triangle en trois triangles de sommet I, le centre du cercle inscrit. Quelle est leur hauteur ?</p>`,
      `<p>Les trois triangles IAB, IBC, ICA ont pour hauteur le rayon r (tangente ⟂ rayon). Donc 84 = r × (13 + 14 + 15) ÷ 2.</p>`
    ],
    lecon: {
      titre: `Aire et rayon du cercle inscrit`,
      html: `<p>Le <b>cercle inscrit</b> d'un triangle est tangent aux trois côtés ; son centre I est à la distance r de chaque côté (le rayon au point de contact est perpendiculaire au côté).</p>
<p>En découpant le triangle en trois triangles IAB, IBC, ICA, chacun de hauteur r :</p>
<div class="calc">Aire = r × (AB + BC + CA) ÷ 2 = r × p, &nbsp; où p est le demi-périmètre.</div>
<p>Pour trouver une <b>hauteur</b> quand on connaît les trois côtés : on pose une inconnue x pour le pied de la hauteur, et on écrit Pythagore deux fois. Les x² se simplifient !</p>
<div class="exemple">Triangle 5-12-13 (rectangle) : aire 30, p = 15, donc r = 2.</div>
<div class="astuce">Astuce olympique : le triangle 13-14-15 est un grand classique : il se décompose en deux triangles rectangles 5-12-13 et 9-12-15 collés le long de la hauteur 12.</div>`
    },
    correction: `<p><b>Hauteur.</b> Soit H le pied de la hauteur issue de A, et x = BH, de sorte que HC = 14 − x (on vérifie à la fin que H est bien sur [BC]). Pythagore dans ABH et ACH :</p>
<div class="calc">AH² = 169 − x² = 225 − (14 − x)² = 225 − 196 + 28x − x²</div>
<p>Donc 169 = 29 + 28x, x = 5, et AH² = 169 − 25 = 144, AH = 12. (H est bien entre B et C car 0 < 5 < 14.)</p>
<p><b>Aire.</b> Aire(ABC) = 14 × 12 ÷ 2 = 84.</p>
<p><b>Rayon.</b> Soit I le centre du cercle inscrit et r son rayon. La distance de I à chaque côté vaut r, donc :</p>
<div class="calc">84 = Aire(IAB) + Aire(IBC) + Aire(ICA) = r × (13 + 14 + 15) ÷ 2 = 21r</div>
<p>D'où r = 84 ÷ 21 = <b>4</b>.</p>
<p><b>Pour aller plus loin :</b> la formule de Héron donne directement l'aire : √(21 × 8 × 7 × 6) = √7056 = 84.</p>`
  },
  {
    id: "geo-30",
    theme: "geo",
    niveau: 3,
    type: "demo",
    titre: `La médiane est plus courte`,
    enonce: `<p>Soit ABC un triangle et M le milieu de [BC].</p>
<p>Démontrer que</p>
<div class="calc">AM &lt; (AB + AC) ÷ 2.</div>`,
    figure: `<svg viewBox="0 0 230 279" width="230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC, milieu M et symétrique A′" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="75.3,36.8 36.8,139.4 190.6,139.4"/><line x1="75.3" y1="36.8" x2="113.7" y2="139.4"/><line x1="113.7" y1="139.4" x2="152.2" y2="241.9" stroke-dasharray="5 4"/><line x1="36.8" y1="139.4" x2="152.2" y2="241.9" stroke-dasharray="5 4"/><line x1="190.6" y1="139.4" x2="152.2" y2="241.9" stroke-dasharray="5 4"/><line x1="99.2" y1="86.3" x2="89.8" y2="89.8" stroke-width="1.2"/><line x1="137.6" y1="188.9" x2="128.3" y2="192.4" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><circle cx="113.7" cy="139.4" r="2.5" fill="currentColor"/><text x="75.3" y="23.8" text-anchor="middle" dy="0.35em">A</text><text x="23.8" y="139.4" text-anchor="middle" dy="0.35em">B</text><text x="203.6" y="139.4" text-anchor="middle" dy="0.35em">C</text><text x="122.1" y="129.4" text-anchor="middle" dy="0.35em">M</text><text x="152.2" y="254.9" text-anchor="middle" dy="0.35em">A′</text></g></svg>`,
    pistes: [
      `<p>Un doublement apparaît : 2 × AM &lt; AB + AC. Peux-tu construire un segment de longueur 2 × AM ?</p>`,
      `<p>Construis A′, le symétrique de A par rapport à M. Que vaut AA′ ? Quelle est la nature du quadrilatère ABA′C ?</p>`,
      `<p>Les diagonales [AA′] et [BC] de ABA′C ont le même milieu M : c'est un parallélogramme. Donc BA′ = AC.</p>`,
      `<p>Applique l'inégalité triangulaire dans le triangle ABA′.</p>`
    ],
    lecon: {
      titre: `Inégalité triangulaire et symétrie centrale`,
      html: `<p><b>Inégalité triangulaire</b> : pour trois points quelconques X, Y, Z, <span class="m">XZ ≤ XY + YZ</span>, avec égalité si et seulement si Y est sur le segment [XZ]. Si X, Y, Z forment un vrai triangle, l'inégalité est <b>stricte</b>.</p>
<p><b>Doubler une médiane</b> : si M est le milieu de [BC] et A′ le symétrique de A par rapport à M, alors ABA′C est un parallélogramme (ses diagonales se coupent en leur milieu). On a donc AA′ = 2AM, BA′ = AC et CA′ = AB.</p>
<div class="exemple">Ce même prolongement sert à calculer la longueur d'une médiane, ou à montrer que deux angles sont égaux (angles alternes-internes dans le parallélogramme).</div>
<div class="astuce">Astuce olympique : pour une inégalité géométrique, cherche à rassembler les longueurs à comparer dans <b>un même triangle</b>, en déplaçant des segments par symétrie ou translation.</div>`
    },
    correction: `<p>Soit A′ le symétrique de A par rapport à M. Alors M est le milieu de [AA′] et AA′ = 2 AM.</p>
<p><b>1.</b> Le quadrilatère ABA′C a des diagonales [AA′] et [BC] qui se coupent en leur milieu commun M : c'est un parallélogramme. Ses côtés opposés sont égaux, donc <span class="m">BA′ = AC</span>.</p>
<p><b>2.</b> Les points A, B, A′ ne sont pas alignés : sinon la droite (AA′), qui passe par M, serait la droite (AB), et M serait sur (AB) ; comme M est aussi sur (BC) et M ≠ B, on aurait (BC) = (AB), ce qui est impossible puisque ABC est un vrai triangle.</p>
<p><b>3.</b> Dans le triangle non aplati ABA′, l'inégalité triangulaire est stricte :</p>
<div class="calc">AA′ &lt; AB + BA′, &nbsp;soit&nbsp; 2 AM &lt; AB + AC.</div>
<p>En divisant par 2 : <b>AM &lt; (AB + AC) ÷ 2</b>. CQFD.</p>
<p><b>Pour aller plus loin :</b> en additionnant les inégalités pour les trois médianes, on montre que la somme des médianes est inférieure au périmètre du triangle.</p>`,
    bareme: [
      `Construire le symétrique A′ de A par rapport à M`,
      `Justifier que ABA′C est un parallélogramme et BA′ = AC`,
      `Appliquer l'inégalité triangulaire dans ABA′ (stricte car non aplati)`,
      `Conclure en divisant par 2`
    ]
  },
  {
    id: "geo-31",
    theme: "geo",
    niveau: 3,
    type: "reponse",
    titre: `Le cercle coincé dans le carré`,
    enonce: `<p>ABCD est un carré de côté 8 cm. Un cercle passe par les sommets A et B et il est tangent au côté [CD].</p>
<p>Quel est le rayon de ce cercle, en cm ?</p>`,
    figure: `<svg viewBox="0 0 240 245" width="240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cercle passant par A et B, tangent au côté [CD]" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="47.5,179.8 192.5,179.8 192.5,34.9 47.5,34.9"/><circle cx="120" cy="125.4" r="90.6"/><line x1="120" y1="125.4" x2="47.5" y2="179.8" stroke-dasharray="5 4"/><line x1="120" y1="125.4" x2="120" y2="34.9" stroke-dasharray="5 4"/></g><g fill="currentColor" stroke="none"><circle cx="120" cy="125.4" r="2.5" fill="currentColor"/><circle cx="120" cy="34.9" r="2.5" fill="currentColor"/><text x="38.4" y="189" text-anchor="middle" dy="0.35em">A</text><text x="201.6" y="189" text-anchor="middle" dy="0.35em">B</text><text x="201.6" y="25.7" text-anchor="middle" dy="0.35em">C</text><text x="38.4" y="25.7" text-anchor="middle" dy="0.35em">D</text><text x="132" y="125.4" text-anchor="middle" dy="0.35em">O</text><text x="120" y="21.9" text-anchor="middle" dy="0.35em">T</text></g></svg>`,
    reponse: ["5", "5cm", "cinq"],
    reponseTexte: `5 cm`,
    pistes: [
      `<p>Où se trouve le centre O du cercle ? Il est à égale distance de A et de B…</p>`,
      `<p>O est sur la médiatrice de [AB], qui est aussi la médiatrice de [CD]. Le cercle touche [CD] en un point T : où est T ?</p>`,
      `<p>Le rayon [OT] est perpendiculaire à la tangente (CD), donc T est le milieu de [CD]. Appelle r le rayon : à quelle distance O est-il de (AB) ?</p>`,
      `<p>O est à 8 − r de (AB). Pythagore dans le triangle formé par O, A et le milieu de [AB] : r² = 4² + (8 − r)².</p>`
    ],
    lecon: {
      titre: `Cercles : centre, médiatrice et tangente`,
      html: `<p>Pour trouver un cercle défini par des conditions, on cherche son <b>centre</b> :</p>
<ul><li>si le cercle passe par A et B, le centre est sur la <b>médiatrice</b> de [AB] ;</li>
<li>si le cercle est tangent à une droite en T, le centre est sur la <b>perpendiculaire</b> à cette droite en T, à distance r.</li></ul>
<p>On nomme ensuite le rayon r, on exprime les distances en fonction de r, et on écrit <b>Pythagore</b> : l'équation obtenue est souvent du premier degré car les r² se simplifient.</p>
<div class="exemple">(r − a)² = r² − 2ar + a² : quand on écrit r² = b² + (r − a)², les r² disparaissent et il reste 2ar = a² + b².</div>
<div class="astuce">Astuce olympique : fais la figure à l'échelle pour vérifier : ici le centre doit être <b>dans</b> le carré, plus proche de [AB] que de [CD]… ou l'inverse ? La figure tranche.</div>`
    },
    correction: `<p>Soit O le centre et r le rayon. Le cercle passe par A et B, donc OA = OB : O est sur la médiatrice de [AB]. Dans le carré, cette médiatrice est aussi celle de [CD] ; elle coupe [AB] en son milieu I et [CD] en son milieu J.</p>
<p>Le cercle est tangent à (CD) en un point T, et (OT) ⟂ (CD). La perpendiculaire à (CD) passant par O est la droite (IJ), donc T = J et OJ = r. Comme O est à l'intérieur du carré (le cercle passe par A et B et touche [CD], qui est au-dessus), OI = 8 − r.</p>
<p>Le triangle OIA est rectangle en I, avec IA = 4 :</p>
<div class="calc">r² = 4² + (8 − r)² = 16 + 64 − 16r + r²</div>
<p>donc 16r = 80 et r = <b>5 cm</b>.</p>
<p><b>Vérification :</b> O est à 3 cm de (AB) et OA = √(16 + 9) = 5. ✓</p>
<p><b>Pour aller plus loin :</b> quel est le rayon du cercle tangent aux côtés [AD], [BC] et passant par… à toi d'inventer une variante !</p>`
  },
  {
    id: "geo-32",
    theme: "geo",
    niveau: 3,
    type: "demo",
    titre: `Perpendiculaires dans le carré`,
    enonce: `<p>ABCD est un carré. On note E le milieu de [BC] et F le milieu de [CD].</p>
<p>Démontrer que les droites (AE) et (BF) sont perpendiculaires.</p>`,
    figure: `<svg viewBox="0 0 220 227" width="220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carré ABCD, milieux E et F" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="38.3,185.2 181.7,185.2 181.7,41.9 38.3,41.9"/><line x1="38.3" y1="185.2" x2="181.7" y2="113.6"/><line x1="181.7" y1="185.2" x2="110" y2="41.9"/><polyline points="160.2,124.3 156.6,117.2 149.4,120.8" stroke-width="1.2"/><line x1="176.7" y1="149.4" x2="186.7" y2="149.4" stroke-width="1.2"/><line x1="176.7" y1="77.7" x2="186.7" y2="77.7" stroke-width="1.2"/><line x1="145.8" y1="46.9" x2="145.8" y2="36.9" stroke-width="1.2"/><line x1="74.2" y1="46.9" x2="74.2" y2="36.9" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="29.1" y="194.4" text-anchor="middle" dy="0.35em">A</text><text x="190.9" y="194.4" text-anchor="middle" dy="0.35em">B</text><text x="190.9" y="32.7" text-anchor="middle" dy="0.35em">C</text><text x="29.1" y="32.7" text-anchor="middle" dy="0.35em">D</text><text x="194.7" y="113.6" text-anchor="middle" dy="0.35em">E</text><text x="110" y="28.9" text-anchor="middle" dy="0.35em">F</text><text x="147.9" y="142" text-anchor="middle" dy="0.35em">P</text></g></svg>`,
    pistes: [
      `<p>Compare les triangles ABE et BCF : que peux-tu dire de leurs côtés et de leurs angles droits ?</p>`,
      `<p>AB = BC, BE = CF et les angles en B et en C sont droits : les deux triangles sont superposables. Quels angles sont égaux ?</p>`,
      `<p><span class="m">BAE</span> = <span class="m">CBF</span>. Soit P le point d'intersection de (AE) et (BF). Regarde les angles du triangle ABP.</p>`,
      `<p>Dans le triangle ABP : <span class="m">PAB</span> + <span class="m">ABP</span> = <span class="m">CBF</span> + (90° − <span class="m">CBF</span>) = 90°. Que vaut l'angle en P ?</p>`
    ],
    lecon: {
      titre: `Triangles superposables (cas d'égalité)`,
      html: `<p>Deux triangles sont <b>superposables</b> (ou « isométriques ») s'ils ont les mêmes côtés et les mêmes angles. Pour le prouver, il suffit d'un des trois <b>cas d'égalité</b> :</p>
<ul><li><b>CCC</b> : trois côtés égaux deux à deux ;</li>
<li><b>CAC</b> : deux côtés égaux et l'angle compris entre eux égal ;</li>
<li><b>ACA</b> : un côté égal et les deux angles adjacents égaux.</li></ul>
<p>Une fois deux triangles reconnus superposables, on récupère gratuitement l'égalité de <b>tous</b> les autres éléments correspondants (angles, côtés).</p>
<div class="exemple">Dans un carré, les triangles rectangles « tournés d'un quart de tour » sont souvent superposables : c'est l'effet de la rotation de 90° autour du centre du carré.</div>
<div class="astuce">Astuce olympique : pour prouver une perpendicularité avec des angles, montre que dans un triangle, deux angles ont pour somme 90° : le troisième est alors droit.</div>`
    },
    correction: `<p>Notons c le côté du carré.</p>
<p><b>1. Triangles ABE et BCF.</b> On a AB = BC = c, BE = c/2 = CF (milieux), et <span class="m">ABE</span> = <span class="m">BCF</span> = 90°. D'après le cas d'égalité CAC, les triangles ABE et BCF sont superposables, avec A ↔ B, B ↔ C, E ↔ F. En particulier :</p>
<div class="calc"><span class="m">BAE</span> = <span class="m">CBF</span></div>
<p><b>2.</b> Soit P le point d'intersection de (AE) et (BF) (il existe et il est dans le carré, car les segments [AE] et [BF] se croisent). Comme F est dans l'angle droit <span class="m">ABC</span>, <span class="m">ABP</span> = <span class="m">ABF</span> = 90° − <span class="m">CBF</span>.</p>
<p><b>3.</b> Dans le triangle ABP :</p>
<div class="calc">APB = 180° − PAB − ABP = 180° − CBF − (90° − CBF) = 90°</div>
<p>Donc <b>(AE) ⟂ (BF)</b>. CQFD.</p>
<p><b>Autre méthode :</b> avec des coordonnées A(0 ; 0), B(2 ; 0), E(2 ; 1), F(1 ; 2) : le vecteur AE (2 ; 1) et le vecteur BF (−1 ; 2) vérifient 2 × (−1) + 1 × 2 = 0.</p>`,
    bareme: [
      `Montrer que ABE et BCF sont superposables (cas CAC précisé)`,
      `En déduire BAE = CBF`,
      `Exprimer ABP = 90° − CBF`,
      `Conclure avec la somme des angles du triangle ABP`
    ]
  },
  {
    id: "geo-33",
    theme: "geo",
    niveau: 3,
    type: "demo",
    titre: `Diagonales perpendiculaires`,
    enonce: `<p>ABCD est un quadrilatère convexe dont les diagonales [AC] et [BD] sont perpendiculaires.</p>
<p>1. Démontrer que <span class="m">AB² + CD² = BC² + DA²</span>.</p>
<p>2. Application : dans un tel quadrilatère, AB = 7, BC = 9 et CD = 6. Calculer DA.</p>`,
    figure: `<svg viewBox="0 0 250 217" width="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quadrilatère ABCD à diagonales perpendiculaires" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="36.6,114.9 112.4,178 213.4,114.9 112.4,39.2"/><line x1="36.6" y1="114.9" x2="213.4" y2="114.9" stroke-dasharray="5 4"/><line x1="112.4" y1="178" x2="112.4" y2="39.2" stroke-dasharray="5 4"/><polyline points="120.4,114.9 120.4,106.9 112.4,106.9" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="23.6" y="114.9" text-anchor="middle" dy="0.35em">A</text><text x="112.4" y="191" text-anchor="middle" dy="0.35em">B</text><text x="226.4" y="114.9" text-anchor="middle" dy="0.35em">C</text><text x="112.4" y="26.2" text-anchor="middle" dy="0.35em">D</text><text x="103.2" y="124.1" text-anchor="middle" dy="0.35em">O</text></g></svg>`,
    pistes: [
      `<p>Nomme O le point d'intersection des diagonales. Combien de triangles rectangles vois-tu ?</p>`,
      `<p>Il y en a quatre : OAB, OBC, OCD, ODA, tous rectangles en O. Écris Pythagore dans chacun.</p>`,
      `<p>AB² = OA² + OB², CD² = OC² + OD². Que vaut AB² + CD² ? Et BC² + DA² ?</p>`,
      `<p>Les deux sommes valent OA² + OB² + OC² + OD². Pour l'application : DA² = 49 + 36 − 81.</p>`
    ],
    lecon: {
      titre: `Pythagore plusieurs fois : sommes de carrés`,
      html: `<p>Quand une figure contient un point O avec plusieurs angles droits, on écrit Pythagore dans <b>chaque</b> triangle rectangle et on <b>additionne</b> ou <b>soustrait</b> les égalités : les longueurs inconnues (OA, OB…) disparaissent souvent.</p>
<div class="exemple">Si O est un point intérieur à un rectangle ABCD, alors OA² + OC² = OB² + OD² (projette O sur les côtés !). C'est le « théorème du drapeau britannique ».</div>
<p>Cette technique transforme un problème de <b>longueurs</b> en un problème de <b>carrés de longueurs</b>, beaucoup plus facile à manipuler.</p>
<div class="astuce">Astuce olympique : la réciproque est vraie aussi (si AB² + CD² = BC² + DA², les diagonales sont perpendiculaires), mais sa preuve est plus délicate. Retiens au moins le sens direct, il sert très souvent.</div>`
    },
    correction: `<p><b>1.</b> Soit O le point d'intersection des diagonales ; comme ABCD est convexe, O est sur les segments [AC] et [BD]. Les diagonales étant perpendiculaires, les triangles OAB, OBC, OCD et ODA sont rectangles en O. D'après Pythagore :</p>
<div class="calc">AB² = OA² + OB² &nbsp; BC² = OB² + OC² &nbsp; CD² = OC² + OD² &nbsp; DA² = OD² + OA²</div>
<p>En additionnant :</p>
<div class="calc">AB² + CD² = OA² + OB² + OC² + OD² = BC² + DA²</div>
<p>CQFD.</p>
<p><b>2.</b> On a 49 + 36 = 81 + DA², donc DA² = 4 et <b>DA = 2</b>.</p>
<p><b>Remarque :</b> le résultat n'utilise pas la convexité de manière essentielle : il suffit que les droites (AC) et (BD) soient perpendiculaires.</p>`,
    bareme: [
      `Introduire O et justifier les quatre triangles rectangles`,
      `Écrire correctement Pythagore dans les quatre triangles`,
      `Additionner pour obtenir l'égalité`,
      `Application numérique : DA = 2`
    ]
  },
  {
    id: "geo-34",
    theme: "geo",
    niveau: 3,
    type: "demo",
    titre: `Le cercle des pieds des hauteurs`,
    enonce: `<p>Soit ABC un triangle dont tous les angles sont aigus. On note E le pied de la hauteur issue de B (sur [AC]) et F le pied de la hauteur issue de C (sur [AB]).</p>
<p>1. Démontrer que les points B, C, E, F sont sur un même cercle.</p>
<p>2. En déduire que <span class="m">AEF</span> = <span class="m">ABC</span>.</p>`,
    figure: `<svg viewBox="0 0 260 310" width="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC, hauteurs BE et CF, cercle de diamètre [BC]" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><circle cx="130" cy="179.9" r="93.5" stroke-dasharray="5 4"/><polygon points="86.4,36.5 36.5,179.9 223.5,179.9"/><line x1="36.5" y1="179.9" x2="134.2" y2="86.4"/><line x1="223.5" y1="179.9" x2="56.7" y2="121.8"/><line x1="134.2" y1="86.4" x2="56.7" y2="121.8"/><polyline points="128.4,92 133.9,97.8 139.7,92.2" stroke-width="1.2"/><polyline points="64.2,124.5 61.6,132 54,129.4" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><circle cx="130" cy="179.9" r="2.5" fill="currentColor"/><text x="86.4" y="23.5" text-anchor="middle" dy="0.35em">A</text><text x="24.3" y="184.3" text-anchor="middle" dy="0.35em">B</text><text x="235.7" y="184.3" text-anchor="middle" dy="0.35em">C</text><text x="145.4" y="79.9" text-anchor="middle" dy="0.35em">E</text><text x="44.4" y="117.4" text-anchor="middle" dy="0.35em">F</text><text x="130" y="192.9" text-anchor="middle" dy="0.35em">M</text></g></svg>`,
    pistes: [
      `<p>Les triangles BEC et BFC ont un point commun : lequel ? Regarde leurs angles en E et en F.</p>`,
      `<p>Ils sont rectangles en E et en F, avec la même hypoténuse [BC]. Rappel (geo-17) : où se trouve le sommet de l'angle droit d'un triangle rectangle ?</p>`,
      `<p>E et F sont sur le cercle de diamètre [BC]. Pour la question 2, le quadrilatère BCEF est inscrit : que sais-tu de ses angles opposés <span class="m">FBC</span> et <span class="m">CEF</span> ?</p>`,
      `<p><span class="m">FBC</span> + <span class="m">CEF</span> = 180°, et aussi <span class="m">AEF</span> + <span class="m">FEC</span> = 180° car A, E, C sont alignés.</p>`
    ],
    lecon: {
      titre: `Points cocycliques`,
      html: `<p>Des points sont <b>cocycliques</b> s'ils sont sur un même cercle. Deux façons fréquentes de le prouver :</p>
<ul><li><b>Deux angles droits</b> : si <span class="m">BEC</span> = <span class="m">BFC</span> = 90°, alors E et F sont sur le cercle de diamètre [BC] (réciproque du théorème du demi-cercle, voir geo-17 : le milieu de l'hypoténuse est à égale distance des trois sommets).</li>
<li><b>Angles opposés supplémentaires</b> : un quadrilatère convexe dont deux angles opposés ont pour somme 180° est inscriptible (réciproque de geo-16).</li></ul>
<p>Une fois les points cocycliques, on peut utiliser tous les outils de l'angle inscrit (geo-16) : angles inscrits égaux, angles opposés supplémentaires.</p>
<div class="astuce">Astuce olympique : dans un triangle, les hauteurs créent énormément de cercles cachés (ici BCEF, mais aussi AFHE avec H l'orthocentre, sur le cercle de diamètre [AH]). Repérer ces cercles est la clé de nombreux problèmes.</div>`
    },
    correction: `<p><b>1.</b> Soit M le milieu de [BC]. Le triangle BEC est rectangle en E, donc son hypoténuse [BC] est un diamètre de son cercle circonscrit : ME = MB = MC = BC/2 (le milieu de l'hypoténuse est équidistant des trois sommets). De même, BFC est rectangle en F, donc MF = BC/2.</p>
<p>Ainsi B, C, E, F sont tous à la distance BC/2 de M : ils sont sur le <b>cercle de diamètre [BC]</b>.</p>
<p><b>2.</b> Le triangle étant acutangle, E est sur le segment [AC] et F sur le segment [AB], strictement entre les sommets ; E et F sont du même côté de (BC) que A, et le quadrilatère BCEF (dans cet ordre) est convexe et inscrit dans le cercle. Ses angles opposés en B et en E sont supplémentaires :</p>
<div class="calc"><span class="m">FBC</span> + <span class="m">CEF</span> = 180°</div>
<p>Par ailleurs, A, E, C sont alignés avec E entre A et C, donc <span class="m">AEF</span> + <span class="m">FEC</span> = 180°.</p>
<p>On en déduit <span class="m">AEF</span> = <span class="m">FBC</span>. Enfin, F est sur [BA], donc <span class="m">FBC</span> = <span class="m">ABC</span>. Conclusion : <b><span class="m">AEF</span> = <span class="m">ABC</span></b>. CQFD.</p>
<p><b>Pour aller plus loin :</b> de même <span class="m">AFE</span> = <span class="m">ACB</span>, donc les triangles AEF et ABC sont semblables : la droite (EF) est « antiparallèle » à (BC).</p>`,
    bareme: [
      `Justifier que E et F sont sur le cercle de diamètre [BC] (angles droits)`,
      `Justifier l'ordre des points et utiliser les angles opposés supplémentaires du quadrilatère inscrit`,
      `Utiliser l'alignement de A, E, C`,
      `Conclure AEF = ABC`
    ]
  },
  {
    id: "geo-35",
    theme: "geo",
    niveau: 3,
    type: "reponse",
    titre: `Le cube aux coins rabotés`,
    enonce: `<p>On dispose d'un cube en bois d'arête 6 cm. À chacun de ses 8 sommets, on coupe un coin par le plan qui passe par les milieux des trois arêtes issues de ce sommet.</p>
<p>Quel est le volume, en cm³, du solide restant ?</p>`,
    figure: `<svg viewBox="0 0 240 221" width="240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cube dont on coupe les coins" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><line x1="29.6" y1="191.4" x2="98.8" y2="141.2" stroke-dasharray="5 4"/><line x1="29.6" y1="191.4" x2="29.6" y2="79.8"/><line x1="29.6" y1="191.4" x2="141.2" y2="191.4"/><line x1="98.8" y1="141.2" x2="98.8" y2="29.6" stroke-dasharray="5 4"/><line x1="98.8" y1="141.2" x2="210.4" y2="141.2" stroke-dasharray="5 4"/><line x1="29.6" y1="79.8" x2="98.8" y2="29.6"/><line x1="29.6" y1="79.8" x2="141.2" y2="79.8"/><line x1="98.8" y1="29.6" x2="210.4" y2="29.6"/><line x1="141.2" y1="191.4" x2="210.4" y2="141.2"/><line x1="141.2" y1="191.4" x2="141.2" y2="79.8"/><line x1="210.4" y1="141.2" x2="210.4" y2="29.6"/><line x1="141.2" y1="79.8" x2="210.4" y2="29.6"/><line x1="85.4" y1="191.4" x2="29.6" y2="135.6"/><line x1="85.4" y1="79.8" x2="29.6" y2="135.6"/><line x1="85.4" y1="79.8" x2="64.2" y2="54.7"/><line x1="154.6" y1="29.6" x2="64.2" y2="54.7"/><line x1="85.4" y1="191.4" x2="141.2" y2="135.6"/><line x1="141.2" y1="135.6" x2="175.8" y2="166.3"/><line x1="210.4" y1="85.4" x2="175.8" y2="166.3"/><line x1="85.4" y1="79.8" x2="141.2" y2="135.6"/><line x1="85.4" y1="79.8" x2="175.8" y2="54.7"/><line x1="141.2" y1="135.6" x2="175.8" y2="54.7"/><line x1="154.6" y1="29.6" x2="175.8" y2="54.7"/><line x1="210.4" y1="85.4" x2="175.8" y2="54.7"/></g><g fill="currentColor" stroke="none"></g></svg>`,
    reponse: ["180", "180cm³", "180cm3"],
    reponseTexte: `180 cm³`,
    pistes: [
      `<p>Quelle est la forme de chaque morceau retiré ? Décris ses sommets.</p>`,
      `<p>Chaque coin retiré est une pyramide dont le sommet est un sommet du cube et dont les trois arêtes issues de ce sommet sont perpendiculaires deux à deux et mesurent 3 cm.</p>`,
      `<p>Volume d'une pyramide = aire de la base × hauteur ÷ 3. Prends comme base le triangle rectangle de côtés 3 et 3 (sur une face du cube). Quelle est la hauteur ?</p>`,
      `<p>Chaque coin a un volume de (3 × 3 ÷ 2) × 3 ÷ 3 = 4,5 cm³. Les 8 coins se chevauchent-ils ?</p>`
    ],
    lecon: {
      titre: `Volumes : pyramides et solides tronqués`,
      html: `<p><b>Volume d'une pyramide</b> (ou d'un cône) :</p>
<div class="calc">V = (aire de la base × hauteur) ÷ 3</div>
<p>Un coin de cube découpé par un plan est un <b>tétraèdre « trirectangle »</b> : ses trois arêtes issues du sommet, de longueurs a, b, c, sont perpendiculaires deux à deux. En prenant pour base le triangle rectangle de côtés a et b, la hauteur est c :</p>
<div class="calc">V = (a × b ÷ 2) × c ÷ 3 = abc ÷ 6</div>
<div class="exemple">Le coin d'un cube d'arête 6 coupé par les trois sommets voisins (a = b = c = 6) a un volume de 36 cm³, soit 1/6 du cube.</div>
<div class="astuce">Astuce olympique : pour un solide « raboté », calcule le volume du solide simple de départ et <b>retire</b> les morceaux (volume complémentaire). Vérifie toujours que les morceaux retirés ne se chevauchent pas.</div>`
    },
    correction: `<p>Le cube a un volume de 6³ = 216 cm³.</p>
<p>Chaque coin retiré est un tétraèdre dont le sommet est un sommet du cube, et dont les trois arêtes issues de ce sommet mesurent 3 cm (moitiés d'arêtes) et sont perpendiculaires deux à deux. Son volume est :</p>
<div class="calc">V = (3 × 3 ÷ 2) × 3 ÷ 3 = 4,5 cm³</div>
<p>Deux coins voisins ne font que se toucher au milieu d'une arête commune : ils ne se chevauchent pas. Le volume retiré est donc 8 × 4,5 = 36 cm³.</p>
<div class="calc">216 − 36 = 180 cm³</div>
<p>Le solide restant a un volume de <b>180 cm³</b>.</p>
<p><b>Pour aller plus loin :</b> ce solide s'appelle un <b>cuboctaèdre</b> : il a 8 faces triangulaires (les coupes) et 6 faces carrées (ce qui reste des faces du cube). Combien a-t-il de sommets ? (Réponse : 12, les milieux des arêtes du cube.)</p>`
  },
  {
    id: "geo-36",
    theme: "geo",
    niveau: 3,
    type: "demo",
    titre: `Le point intérieur`,
    enonce: `<p>Soit ABC un triangle et M un point situé à l'intérieur du triangle.</p>
<p>Démontrer que</p>
<div class="calc">MB + MC &lt; AB + AC.</div>`,
    figure: `<svg viewBox="0 0 260 208" width="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC et point intérieur M" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="89.2,34.9 34.9,170.8 225.1,170.8"/><line x1="34.9" y1="170.8" x2="121.8" y2="121.8"/><line x1="121.8" y1="121.8" x2="225.1" y2="170.8"/><line x1="121.8" y1="121.8" x2="156.6" y2="102.3" stroke-dasharray="5 4"/></g><g fill="currentColor" stroke="none"><circle cx="121.8" cy="121.8" r="2.5" fill="currentColor"/><circle cx="156.6" cy="102.3" r="2.5" fill="currentColor"/><text x="89.2" y="21.9" text-anchor="middle" dy="0.35em">A</text><text x="25.7" y="180" text-anchor="middle" dy="0.35em">B</text><text x="234.3" y="180" text-anchor="middle" dy="0.35em">C</text><text x="121.8" y="134.8" text-anchor="middle" dy="0.35em">M</text><text x="167.9" y="95.8" text-anchor="middle" dy="0.35em">N</text></g></svg>`,
    pistes: [
      `<p>Que se passe-t-il quand M se rapproche de A ? Et de la droite (BC) ? L'inégalité semble-t-elle raisonnable ?</p>`,
      `<p>Prolonge [BM] au-delà de M : la demi-droite coupe le côté [AC] en un point N.</p>`,
      `<p>Applique l'inégalité triangulaire dans le triangle MNC pour majorer MC, puis dans le triangle ABN pour majorer BN.</p>`,
      `<p>MB + MC &lt; MB + MN + NC = BN + NC &lt; BA + AN + NC. Il reste à reconnaître AN + NC.</p>`
    ],
    lecon: {
      titre: `Chaîner des inégalités triangulaires`,
      html: `<p>Rappel : dans un vrai triangle XYZ, <span class="m">XZ &lt; XY + YZ</span> (inégalité triangulaire stricte).</p>
<p>Pour comparer deux « chemins » qui vont d'un point à un autre, on peut <b>prolonger</b> un segment pour créer un point intermédiaire, puis appliquer l'inégalité triangulaire <b>plusieurs fois de suite</b> :</p>
<div class="calc">chemin court &lt; chemin intermédiaire &lt; chemin long</div>
<div class="exemple">Image concrète : un chemin « convexe » qui en entoure un autre est toujours plus long. Ici le chemin B → A → C entoure le chemin B → M → C.</div>
<div class="astuce">Astuce olympique : pense aussi aux cas d'égalité : ils disent quand les points doivent être alignés. Ici, M à l'intérieur strict garantit que tous les triangles utilisés sont non aplatis.</div>`
    },
    correction: `<p>M est à l'intérieur du triangle, donc la demi-droite [BM) ressort du triangle en coupant le côté [AC] en un point N, avec M strictement entre B et N, et N strictement entre A et C (sinon M serait sur un côté).</p>
<p><b>1. Triangle MNC</b> (non aplati, car M n'est pas sur (AC)) :</p>
<div class="calc">MC &lt; MN + NC</div>
<p>donc MB + MC &lt; MB + MN + NC = BN + NC (car M est sur [BN]).</p>
<p><b>2. Triangle ABN</b> (non aplati, car N ≠ A et N n'est pas sur (AB)) :</p>
<div class="calc">BN &lt; BA + AN</div>
<p>donc BN + NC &lt; AB + AN + NC = AB + AC (car N est sur [AC]).</p>
<p><b>3.</b> En enchaînant : <b>MB + MC &lt; AB + AC</b>. CQFD.</p>
<p><b>Pour aller plus loin :</b> en additionnant les trois inégalités analogues, on obtient MA + MB + MC &lt; AB + BC + CA : la somme des distances d'un point intérieur aux sommets est inférieure au périmètre.</p>`,
    bareme: [
      `Prolonger [BM] jusqu'au point N de [AC]`,
      `Inégalité triangulaire dans MNC et utilisation de BN = BM + MN`,
      `Inégalité triangulaire dans ABN et utilisation de AN + NC = AC`,
      `Enchaîner les inégalités (strictes) pour conclure`
    ]
  },
  {
    id: "geo-37",
    theme: "geo",
    niveau: 3,
    type: "reponse",
    titre: `Le pli de la feuille`,
    enonce: `<p>Une feuille rectangulaire ABCD mesure AB = 8 cm et BC = 6 cm. On la plie de façon que le sommet A vienne exactement sur le sommet C opposé.</p>
<p>Quelle est la longueur du pli [EF] (le segment de la ligne de pliage situé dans la feuille), en cm ?</p>`,
    figure: `<svg viewBox="0 0 260 220" width="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rectangle ABCD et pli EF" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="35.8,177.1 224.2,177.1 224.2,35.8 35.8,35.8"/><line x1="35.8" y1="177.1" x2="224.2" y2="35.8" stroke-dasharray="5 4"/><line x1="183" y1="177.1" x2="77" y2="35.8" stroke-width="2.6"/><polyline points="136.4,101.6 131.6,95.2 125.2,100" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><text x="26.6" y="186.3" text-anchor="middle" dy="0.35em">A</text><text x="233.4" y="186.3" text-anchor="middle" dy="0.35em">B</text><text x="233.4" y="26.6" text-anchor="middle" dy="0.35em">C</text><text x="26.6" y="26.6" text-anchor="middle" dy="0.35em">D</text><text x="183" y="190.1" text-anchor="middle" dy="0.35em">E</text><text x="77" y="22.8" text-anchor="middle" dy="0.35em">F</text><text x="111.2" y="187.7" text-anchor="middle" dy="0.35em" font-size="12">8</text><text x="233.6" y="106.4" text-anchor="middle" dy="0.35em" font-size="12">6</text></g></svg>`,
    reponse: ["7.5", "15/2", "7.5cm"],
    reponseTexte: `7,5 cm`,
    pistes: [
      `<p>Quand on plie pour amener A sur C, la ligne de pli est l'axe d'une symétrie qui envoie A sur C. Quelle droite est-ce ?</p>`,
      `<p>C'est la médiatrice de [AC] : elle passe par le centre O du rectangle et elle est perpendiculaire à (AC). Combien mesure AC ?</p>`,
      `<p>AC = 10 et O est le milieu. Le triangle AOE (avec E sur [AB]) est rectangle en O ; compare-le au triangle ABC.</p>`,
      `<p>Les triangles AOE et ABC sont semblables (angle en A commun, angle droit) : OE/BC = AO/AB, donc OE = 6 × 5 ÷ 8. Par symétrie de centre O, EF = 2 × OE.</p>`
    ],
    lecon: {
      titre: `Pliages et triangles semblables`,
      html: `<p>Plier une feuille pour amener un point A sur un point C revient à faire une <b>symétrie axiale</b> : la ligne de pli est la <b>médiatrice de [AC]</b>. Tout point du pli est à égale distance de A et de C.</p>
<p>Pour calculer des longueurs, on cherche des <b>triangles semblables</b> : deux triangles qui ont deux angles égaux (par exemple un angle commun et un angle droit) ont leurs côtés proportionnels.</p>
<div class="exemple">Méthode alternative : E est sur le pli, donc EA = EC. Avec x = AE : EB = 8 − x, et Pythagore dans EBC donne x² = (8 − x)² + 36, d'où x = 25/4.</div>
<div class="astuce">Astuce olympique : deux méthodes (triangles semblables et Pythagore) donnent un bon moyen de <b>vérifier</b> sa réponse. En compétition, si le temps le permet, vérifie toujours par une seconde voie.</div>`
    },
    correction: `<p>Le pliage qui envoie A sur C est la symétrie par rapport à la médiatrice de [AC] : le pli [EF] est porté par cette médiatrice, qui passe par le milieu O de [AC] (le centre du rectangle).</p>
<p>Par Pythagore, AC = √(8² + 6²) = 10, donc AO = 5. Soit E le point du pli sur [AB]. Les triangles AOE (rectangle en O) et ABC (rectangle en B) ont l'angle <span class="m">BAC</span> en commun : ils sont semblables, avec O ↔ B et E ↔ C. Donc :</p>
<div class="calc">OE/BC = AO/AB, soit OE = 6 × 5 ÷ 8 = 15/4</div>
<p>(On vérifie que E est bien sur [AB] : AE = AC × AO ÷ AB = 10 × 5 ÷ 8 = 25/4 &lt; 8.)</p>
<p>Le rectangle est symétrique par rapport à son centre O, et cette symétrie conserve la médiatrice de [AC] : elle échange E et F. Donc O est le milieu de [EF] et :</p>
<div class="calc">EF = 2 × 15/4 = 15/2 = 7,5 cm</div>
<p>Le pli mesure <b>7,5 cm</b>.</p>
<p><b>Vérification :</b> avec AE = 25/4, Pythagore dans AOE donne OE² = (25/4)² − 25 = 625/16 − 400/16 = 225/16, OE = 15/4. ✓</p>`
  },
  {
    id: "geo-38",
    theme: "geo",
    niveau: 3,
    type: "demo",
    titre: `Le lemme du trident`,
    enonce: `<p>Soit ABC un triangle et Γ son cercle circonscrit. La bissectrice de l'angle <span class="m">BAC</span> recoupe le cercle Γ en un point D (situé sur l'arc BC qui ne contient pas A).</p>
<p>1. Démontrer que DB = DC.</p>
<p>2. Soit I le point d'intersection des bissectrices issues de A et de B. Démontrer que DI = DB.</p>`,
    figure: `<svg viewBox="0 0 250 250" width="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC, bissectrice issue de A et point D sur le cercle" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><circle cx="125" cy="125" r="83.6"/><polygon points="89.7,49.2 49.2,160.3 200.8,160.3"/><line x1="89.7" y1="49.2" x2="125" y2="208.6"/><line x1="49.2" y1="160.3" x2="125" y2="208.6"/><line x1="200.8" y1="160.3" x2="125" y2="208.6"/><line x1="49.2" y1="160.3" x2="105.6" y2="120.9" stroke-dasharray="5 4"/><path d="M95.3 74.6 A26 26 0 0 1 80.8 73.7" stroke-width="1.2"/><path d="M110.9 70.5 A30 30 0 0 1 96.2 78.5" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><circle cx="105.6" cy="120.9" r="2.5" fill="currentColor"/><text x="84.2" y="37.5" text-anchor="middle" dy="0.35em">A</text><text x="37.5" y="165.8" text-anchor="middle" dy="0.35em">B</text><text x="212.5" y="165.8" text-anchor="middle" dy="0.35em">C</text><text x="125" y="221.6" text-anchor="middle" dy="0.35em">D</text><text x="117.6" y="120.9" text-anchor="middle" dy="0.35em">I</text></g></svg>`,
    pistes: [
      `<p>Question 1 : note <span class="m">BAD</span> = <span class="m">DAC</span> = α. Quel angle inscrit intercepte le même arc que <span class="m">DAC</span> ?</p>`,
      `<p><span class="m">DBC</span> = <span class="m">DAC</span> (arc DC) et <span class="m">DCB</span> = <span class="m">DAB</span> (arc DB). Que peut-on en conclure pour le triangle DBC ?</p>`,
      `<p>Question 2 : note <span class="m">ABI</span> = <span class="m">IBC</span> = β. Calcule <span class="m">DBI</span> en fonction de α et β.</p>`,
      `<p><span class="m">DBI</span> = α + β. Et <span class="m">DIB</span> est un angle extérieur du triangle ABI : il vaut aussi α + β. Conclus.</p>`
    ],
    lecon: {
      titre: `Angles inscrits et bissectrices`,
      html: `<p>Rappel (geo-16) : deux angles inscrits qui interceptent le même arc sont égaux. Réciproquement, <b>des angles inscrits égaux interceptent des cordes égales</b>.</p>
<p>Donc, si [AD] est la bissectrice de <span class="m">BAC</span>, les arcs BD et DC sont égaux : <b>D est le milieu de l'arc BC</b>, et DB = DC.</p>
<p><b>Le centre du cercle inscrit</b> I est le point de concours des trois bissectrices du triangle (il est à égale distance des trois côtés).</p>
<div class="exemple">Le « lemme du trident » (ou lemme du pôle Sud) dit que D est à égale distance de B, C et I : le cercle de centre D passant par B passe aussi par C et par I.</div>
<div class="astuce">Astuce olympique : ce lemme est l'un des plus utilisés en géométrie olympique. Dès qu'une bissectrice et un cercle circonscrit apparaissent ensemble, pense au milieu de l'arc !</div>`
    },
    correction: `<p>Notons α = <span class="m">BAD</span> = <span class="m">DAC</span> (bissectrice) et β = <span class="m">ABI</span> = <span class="m">IBC</span>.</p>
<p><b>1.</b> Les angles inscrits <span class="m">DBC</span> et <span class="m">DAC</span> interceptent le même arc DC (A et B sont du même côté de (DC)), donc <span class="m">DBC</span> = α. De même, <span class="m">DCB</span> = <span class="m">DAB</span> = α (arc DB). Le triangle DBC a deux angles égaux : il est isocèle en D, et <b>DB = DC</b>.</p>
<p><b>2.</b> D est sur l'arc BC ne contenant pas A, donc D et I sont de part et d'autre de (BC) ; la demi-droite [BC) est entre [BD) et [BI). Ainsi :</p>
<div class="calc"><span class="m">DBI</span> = <span class="m">DBC</span> + <span class="m">CBI</span> = α + β</div>
<p>Par ailleurs, I est sur le segment [AD] (I est intérieur au triangle, D est de l'autre côté de (BC)). Donc <span class="m">DIB</span> est un angle extérieur du triangle ABI :</p>
<div class="calc"><span class="m">DIB</span> = <span class="m">IAB</span> + <span class="m">IBA</span> = α + β</div>
<p>Le triangle DBI a deux angles égaux, <span class="m">DBI</span> = <span class="m">DIB</span> : il est isocèle en D, et <b>DI = DB</b>. CQFD.</p>
<p><b>Conclusion :</b> DB = DC = DI.</p>`,
    bareme: [
      `Utiliser les angles inscrits pour obtenir DBC = DCB = α`,
      `Conclure DB = DC (triangle isocèle)`,
      `Calculer DBI = α + β en justifiant la position des points`,
      `Calculer DIB = α + β par l'angle extérieur du triangle ABI`,
      `Conclure DI = DB`
    ]
  },
  {
    id: "geo-39",
    theme: "geo",
    niveau: 3,
    type: "reponse",
    titre: `Les carrés du réseau`,
    enonce: `<p>On considère un réseau de 5 × 5 = 25 points régulièrement espacés (comme sur la figure).</p>
<p>Combien de carrés ont leurs quatre sommets parmi ces 25 points ? On compte aussi les carrés « penchés », comme le carré colorié.</p>`,
    figure: `<svg viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Réseau de 5 × 5 points et un carré penché" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="67,166.1 166.1,133 133,33.9 33.9,67" fill="currentColor" fill-opacity="0.15"/><polygon points="33.9,166.1 67,166.1 67,133 33.9,133"/></g><g fill="currentColor" stroke="none"><circle cx="33.9" cy="166.1" r="2.5" fill="currentColor"/><circle cx="33.9" cy="133" r="2.5" fill="currentColor"/><circle cx="33.9" cy="100" r="2.5" fill="currentColor"/><circle cx="33.9" cy="67" r="2.5" fill="currentColor"/><circle cx="33.9" cy="33.9" r="2.5" fill="currentColor"/><circle cx="67" cy="166.1" r="2.5" fill="currentColor"/><circle cx="67" cy="133" r="2.5" fill="currentColor"/><circle cx="67" cy="100" r="2.5" fill="currentColor"/><circle cx="67" cy="67" r="2.5" fill="currentColor"/><circle cx="67" cy="33.9" r="2.5" fill="currentColor"/><circle cx="100" cy="166.1" r="2.5" fill="currentColor"/><circle cx="100" cy="133" r="2.5" fill="currentColor"/><circle cx="100" cy="100" r="2.5" fill="currentColor"/><circle cx="100" cy="67" r="2.5" fill="currentColor"/><circle cx="100" cy="33.9" r="2.5" fill="currentColor"/><circle cx="133" cy="166.1" r="2.5" fill="currentColor"/><circle cx="133" cy="133" r="2.5" fill="currentColor"/><circle cx="133" cy="100" r="2.5" fill="currentColor"/><circle cx="133" cy="67" r="2.5" fill="currentColor"/><circle cx="133" cy="33.9" r="2.5" fill="currentColor"/><circle cx="166.1" cy="166.1" r="2.5" fill="currentColor"/><circle cx="166.1" cy="133" r="2.5" fill="currentColor"/><circle cx="166.1" cy="100" r="2.5" fill="currentColor"/><circle cx="166.1" cy="67" r="2.5" fill="currentColor"/><circle cx="166.1" cy="33.9" r="2.5" fill="currentColor"/></g></svg>`,
    reponse: ["50", "cinquante"],
    reponseTexte: `50 carrés`,
    pistes: [
      `<p>Commence par les carrés « droits » (côtés horizontaux et verticaux) : combien y en a-t-il de chaque taille ?</p>`,
      `<p>Il y a 16 + 9 + 4 + 1 = 30 carrés droits (voir geo-08). Maintenant, tout carré penché est inscrit dans un carré droit qui l'entoure. Dans un carré droit de côté k, combien de carrés penchés sont inscrits ?</p>`,
      `<p>Dans un carré droit de côté k, on peut inscrire un carré dont les sommets sont à distance 1, 2, …, k − 1 des coins : cela fait k − 1 carrés penchés, plus le carré droit lui-même, soit k carrés.</p>`,
      `<p>Chaque carré droit de côté k « porte » donc k carrés. Total : 16 × 1 + 9 × 2 + 4 × 3 + 1 × 4.</p>`
    ],
    lecon: {
      titre: `Compter avec une bijection`,
      html: `<p>Pour compter des objets compliqués, on les <b>associe</b> à des objets plus simples que l'on sait compter.</p>
<p>Ici, tout carré à sommets sur le réseau (droit ou penché) est inscrit dans un unique <b>carré droit enveloppant</b> (le plus petit carré à côtés horizontaux et verticaux qui le contient). Ses sommets sont sur les côtés du carré enveloppant, à la même distance j des coins en tournant (voir geo-27).</p>
<p>Un carré droit de côté k contient donc exactement k carrés « inscrits » (j = 0, 1, …, k − 1 ; j = 0 correspond au carré droit lui-même).</p>
<div class="calc">Total = somme sur k de (nombre de carrés droits de côté k) × k</div>
<div class="exemple">Réseau 3 × 3 points : 4 × 1 + 1 × 2 = 6 carrés (4 petits, 1 grand, 1 penché).</div>
<div class="astuce">Astuce olympique : quand on associe des objets, vérifie que chaque objet est compté <b>une et une seule fois</b>. Ici, un carré penché a un seul carré enveloppant, donc pas de double comptage.</div>`
    },
    correction: `<p><b>Carrés enveloppants.</b> Pour un carré ayant ses sommets sur le réseau, considérons le plus petit carré à côtés horizontaux et verticaux qui le contient. Ses sommets sont sur le réseau, et chaque sommet du carré de départ se trouve sur un côté différent de ce carré enveloppant. Si le carré enveloppant a pour côté k, les sommets du carré inscrit sont à une même distance j ∈ {0, 1, …, k − 1} des coins (en tournant dans le même sens), car les quatre triangles des coins sont superposables.</p>
<p>Chaque carré droit de côté k porte donc exactement k carrés, et chaque carré est compté une seule fois (son carré enveloppant est unique).</p>
<p><b>Nombre de carrés droits</b> de côté k dans le réseau 5 × 5 : (5 − k)².</p>
<div class="calc">16 × 1 + 9 × 2 + 4 × 3 + 1 × 4 = 16 + 18 + 12 + 4 = 50</div>
<p>Il y a <b>50 carrés</b>.</p>
<p><b>Erreur fréquente :</b> oublier des carrés penchés « très inclinés » ou compter deux fois un même carré penché (par exemple en le repérant par deux sommets différents).</p>`
  },
  {
    id: "geo-40",
    theme: "geo",
    niveau: 3,
    type: "demo",
    titre: `Un point, trois distances, un angle`,
    enonce: `<p>ABCD est un carré et P est un point à l'intérieur du carré tel que</p>
<div class="calc">PA = 1, &nbsp;PB = 2, &nbsp;PC = 3.</div>
<p>Démontrer que l'angle <span class="m">APB</span> mesure 135°.</p>`,
    figure: `<svg viewBox="0 0 260 239" width="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carré ABCD, point P et point auxiliaire P′" font-size="14"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><polygon points="42.3,191.3 188.6,191.3 188.6,44.9 42.3,44.9"/><line x1="87.4" y1="164.8" x2="42.3" y2="191.3"/><line x1="87.4" y1="164.8" x2="188.6" y2="191.3"/><line x1="87.4" y1="164.8" x2="188.6" y2="44.9"/><line x1="188.6" y1="191.3" x2="215.1" y2="90" stroke-dasharray="5 4"/><line x1="87.4" y1="164.8" x2="215.1" y2="90" stroke-dasharray="5 4"/><line x1="188.6" y1="44.9" x2="215.1" y2="90" stroke-dasharray="5 4"/><polyline points="180.9,189.2 182.9,181.5 190.7,183.5" stroke-width="1.2"/></g><g fill="currentColor" stroke="none"><circle cx="87.4" cy="164.8" r="2.5" fill="currentColor"/><circle cx="215.1" cy="90" r="2.5" fill="currentColor"/><text x="33.1" y="200.5" text-anchor="middle" dy="0.35em">A</text><text x="197.8" y="200.5" text-anchor="middle" dy="0.35em">B</text><text x="197.8" y="35.7" text-anchor="middle" dy="0.35em">C</text><text x="33.1" y="35.7" text-anchor="middle" dy="0.35em">D</text><text x="80.9" y="153.6" text-anchor="middle" dy="0.35em">P</text><text x="228.1" y="90" text-anchor="middle" dy="0.35em">P′</text></g></svg>`,
    pistes: [
      `<p>Les trois longueurs sont dispersées. L'idée est de « tourner » le triangle ABP d'un quart de tour autour de B, pour amener A sur C.</p>`,
      `<p>Construis le point P′ tel que le triangle PBP′ soit rectangle isocèle en B, avec P′ de l'autre côté de (BC) par rapport à A. Montre que les triangles ABP et CBP′ sont superposables.</p>`,
      `<p>On obtient CP′ = AP = 1 et <span class="m">BP′C</span> = <span class="m">BPA</span>. Calcule PP′ puis compare PP′² + P′C² et PC².</p>`,
      `<p>PP′² = 8 et 8 + 1 = 9 = PC² : le triangle PP′C est rectangle en P′. Et l'angle <span class="m">BP′P</span> vaut 45°.</p>`
    ],
    lecon: {
      titre: `Faire tourner une figure (rotation d'un quart de tour)`,
      html: `<p>Dans un carré ABCD de centre O, le <b>quart de tour</b> autour de B qui envoie A sur C « transporte » tout triangle ABP en un triangle CBP′ superposable. Sans parler de rotation, on peut le construire à la main :</p>
<ul><li>P′ tel que BP′ = BP et <span class="m">PBP′</span> = 90° ;</li>
<li>alors <span class="m">ABP</span> = 90° − <span class="m">PBC</span> = <span class="m">CBP′</span>, et avec BA = BC, BP = BP′, le cas d'égalité CAC donne ABP ≅ CBP′.</li></ul>
<p>Le triangle PBP′ est <b>rectangle isocèle</b> : PP′ = PB × √2 et ses angles aigus valent 45°.</p>
<div class="exemple">Ce procédé rassemble trois longueurs PA, PB, PC dispersées en un seul triangle PP′C, dont on connaît les trois côtés.</div>
<div class="astuce">Astuce olympique : dans un carré (quart de tour) ou un triangle équilatéral (rotation de 60°), faire tourner une partie de la figure est une technique redoutable pour les problèmes « un point intérieur avec trois distances ».</div>`
    },
    correction: `<p><b>1. Construction.</b> Soit P′ le point tel que BP′ = BP = 2, <span class="m">PBP′</span> = 90°, avec P′ du côté de (BC) opposé à A. Comme P est dans le carré, la demi-droite [BC) est entre [BP) et [BP′), donc <span class="m">CBP′</span> = 90° − <span class="m">PBC</span>.</p>
<p><b>2. Triangles superposables.</b> On a aussi <span class="m">ABP</span> = 90° − <span class="m">PBC</span>. Donc <span class="m">ABP</span> = <span class="m">CBP′</span>, avec BA = BC et BP = BP′. Par le cas CAC, les triangles ABP et CBP′ sont superposables (A ↔ C, P ↔ P′). D'où :</p>
<div class="calc">CP′ = AP = 1 &nbsp;et&nbsp; <span class="m">BP′C</span> = <span class="m">BPA</span></div>
<p><b>3. Triangle PBP′.</b> Il est rectangle isocèle en B, donc PP′² = 2² + 2² = 8 et <span class="m">BP′P</span> = 45°.</p>
<p><b>4. Triangle PP′C.</b> PP′² + P′C² = 8 + 1 = 9 = 3² = PC². D'après la réciproque de Pythagore, il est rectangle en P′ : <span class="m">PP′C</span> = 90°.</p>
<p><b>5.</b> Le point P est à l'intérieur du triangle BP′C (on le constate sur la figure), donc la demi-droite [P′P) est entre [P′B) et [P′C) et :</p>
<div class="calc"><span class="m">BP′C</span> = <span class="m">BP′P</span> + <span class="m">PP′C</span> = 45° + 90° = 135°</div>
<p>Et finalement <b><span class="m">APB</span> = <span class="m">BP′C</span> = 135°</b>. CQFD.</p>
<p><b>Pour aller plus loin :</b> avec Al-Kashi (formule hors programme), on trouve ensuite que le côté du carré vaut √(5 + 2√2).</p>`,
    bareme: [
      `Construire P′ (quart de tour autour de B) et justifier ABP ≅ CBP′ (CAC)`,
      `En déduire CP′ = 1 et BP′C = APB`,
      `Triangle PBP′ rectangle isocèle : PP′² = 8 et angle de 45°`,
      `Réciproque de Pythagore dans PP′C : angle droit en P′`,
      `Additionner 45° + 90° pour conclure à 135°`
    ]
  }
]);
