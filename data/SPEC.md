# Format des fichiers de problèmes — « Objectif Coupe Animath de printemps »

Public : un·e élève de **3e** (collège français, établissement AEFE) qui prépare la
**Coupe Animath de printemps** (avril 2027). Un problème par jour du 28 sept. 2026 à mi-avril 2027.
L'épreuve mélange deux types d'exercices :
- **Partie « réponse »** : on ne donne qu'un résultat (entier, fraction, nombre simple).
- **Partie « démonstration »** : il faut rédiger une preuve complète.

Tout le contenu est **en français**, ton bienveillant et motivant, niveau collège (on peut
introduire des outils olympiques : congruences simples, principe des tiroirs, invariants,
récurrence informelle, inégalité x² ≥ 0, etc., à condition de les EXPLIQUER dans la leçon).
Problèmes **originaux** « dans l'esprit » Animath/olympiades (ne pas recopier d'annales mot à mot).

## Structure d'un fichier `data/<theme>.js`

```js
window.PROBLEMES = (window.PROBLEMES || []).concat([
  {
    id: "arith-01",            // <theme>-NN, NN = 01..40, dans l'ordre de difficulté croissante
    theme: "arith",            // arith | algebre | geo | combi | logique
    niveau: 1,                 // 1 = échauffement, 2 = standard, 3 = difficile
    type: "reponse",           // "reponse" ou "demo"
    titre: `Titre court et accrocheur`,
    enonce: `<p>Énoncé en HTML…</p>`,
    figure: ``,                // optionnel : un <svg> inline (viewBox, width ≤ 320) ou chaîne vide
    reponse: ["12", "douze"],  // SEULEMENT si type "reponse" : formes acceptées (sera comparé après
                               // suppression des espaces, virgule→point, minuscules). Mettre "3/4" ET "0.75" si utile.
    reponseTexte: `12`,        // SEULEMENT si type "reponse" : réponse affichée
    pistes: [                  // 3 à 5 pistes PROGRESSIVES (de la plus légère à presque la solution)
      `<p>Piste 1 : une question pour démarrer (ex. « Que se passe-t-il pour de petites valeurs ? »)</p>`,
      `<p>Piste 2 : une information / un outil utile…</p>`,
      `<p>Piste 3 : étape intermédiaire concrète, éventuellement sous forme de question guidée…</p>`,
      `<p>Piste 4 : presque la fin (« Il reste à vérifier que… »)</p>`
    ],
    lecon: {                   // la notion / technique à retenir, réutilisable
      titre: `Le principe des tiroirs`,
      html: `<p>Explication claire, 8-20 lignes, avec un mini-exemple et une « Astuce olympique ».</p>`
    },
    correction: `<p>Correction COMPLÈTE et rigoureuse, rédigée comme le jury l'attend…</p>`,
    bareme: [                  // SEULEMENT si type "demo" : 3 à 5 points clés qu'une bonne rédaction doit contenir
      `Justifier que…`, `Conclure…`
    ]
  },
  …
]);
```

## Règles d'écriture

- Utiliser des **template literals** (backticks) pour toutes les chaînes. Ne jamais écrire `${` ni de backtick dans le texte.
- Notation mathématique en HTML simple (pas de LaTeX) : `x<sup>2</sup>`, `a<sub>n</sub>`, `×`, `÷`, `−` (signe moins), `√`, `≤`, `≥`, `≠`, `π`, `°`, `≡`, `∈`, fractions `3/4` ou `<span class="frac"><span>3</span><span>4</span></span>`.
  Mettre les formules importantes dans `<span class="m">…</span>`, un calcul centré dans `<div class="calc">…</div>`.
- Encadrés possibles dans les leçons : `<div class="astuce">…</div>` (astuce olympique), `<div class="exemple">…</div>`.
- Les **pistes** sont essentielles : mélanger des questions guidées (« Combien vaut… ? », « Essaie avec n = 1, 2, 3 ») et des informations utiles. Elles ne doivent jamais être vagues (« réfléchis bien » est interdit). La dernière piste doit débloquer quelqu'un de coincé sans donner toute la rédaction.
- La **correction** doit être juste, complète, rédigée étape par étape ; pour les « démo », montrer une rédaction modèle ; pour les « réponse », justifier le résultat (même si l'épreuve ne le demande pas). Terminer si possible par une remarque « Pour aller plus loin » ou « Erreur fréquente ».
- Répartition : environ **60 % « reponse » et 40 % « demo »**, en alternant. Difficulté croissante : ~12 de niveau 1, ~16 de niveau 2, ~12 de niveau 3. Les derniers problèmes doivent atteindre le niveau réel d'une Coupe Animath (fin de sujet).
- Varier les leçons : chaque leçon doit porter sur une technique précise ; on peut revenir sur une technique déjà vue (« Rappel : … ») mais en apportant quelque chose de neuf.
- **VÉRIFIER CHAQUE RÉPONSE** : pour tout problème calculatoire, contrôler le résultat par un petit script Python (force brute) avant de l'écrire. Une réponse fausse est la pire erreur possible.
- Les figures SVG (surtout en géométrie) : simples, traits `stroke="currentColor"`, texte `fill="currentColor"`, `font-size="14"`, fond transparent, pour s'adapter au thème clair/sombre.
- Après écriture, vérifier que le fichier se charge : `node -e "global.window={};require('./data/<theme>.js');console.log(window.PROBLEMES.length)"` doit afficher 40, et vérifier que chaque objet a les champs requis.
