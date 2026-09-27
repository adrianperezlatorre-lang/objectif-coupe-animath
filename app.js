/* Objectif Coupe Animath — un problème par jour
   Données : window.PROBLEMES (data/*.js). Progression : localStorage. */
(function () {
  "use strict";

  const START = "2026-09-28";
  const EXAM_DEFAUT = "2027-04-15";
  const KEY = "animath_printemps_v1";

  const THEMES = {
    arith:   { nom: "Arithmétique", ico: "🔢", c: "var(--t-arith)" },
    algebre: { nom: "Algèbre",      ico: "✖️", c: "var(--t-algebre)" },
    geo:     { nom: "Géométrie",    ico: "📐", c: "var(--t-geo)" },
    combi:   { nom: "Dénombrement", ico: "🎲", c: "var(--t-combi)" },
    logique: { nom: "Logique",      ico: "🧩", c: "var(--t-logique)" },
  };
  const ORDRE = ["arith", "algebre", "geo", "combi", "logique"];
  const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  const JOURS = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."];

  /* ---------- Planning : thèmes en alternance, difficulté croissante ---------- */
  const parTheme = {};
  ORDRE.forEach((t) => (parTheme[t] = []));
  (window.PROBLEMES || []).forEach((p) => parTheme[p.theme] && parTheme[p.theme].push(p));
  ORDRE.forEach((t) => parTheme[t].sort((a, b) => a.id.localeCompare(b.id, "fr", { numeric: true })));

  const PLANNING = [];
  const curseurs = Object.fromEntries(ORDRE.map((t) => [t, 0]));
  for (let i = 0; ; i++) {
    const restants = ORDRE.filter((t) => curseurs[t] < parTheme[t].length);
    if (!restants.length) break;
    let t = ORDRE[i % ORDRE.length];
    if (curseurs[t] >= parTheme[t].length) t = restants[i % restants.length];
    PLANNING.push(parTheme[t][curseurs[t]++]);
  }
  const TOTAL = PLANNING.length;

  /* ---------- Dates ---------- */
  const ymd = (d) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const toUTC = (s) => { const [y, m, d] = s.split("-").map(Number); return Date.UTC(y, m - 1, d); };
  const diffJours = (a, b) => Math.round((toUTC(b) - toUTC(a)) / 86400000);
  const dateDuJour = (n) => { const d = new Date(toUTC(START) + n * 86400000); return ymd(new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())); };
  const joliDate = (s) => { const [y, m, d] = s.split("-").map(Number); const dt = new Date(y, m - 1, d); return JOURS[dt.getDay()] + " " + d + " " + MOIS[m - 1]; };
  const aujourdhui = () => ymd(new Date());
  const indexAujourdhui = () => Math.max(0, Math.min(TOTAL - 1, diffJours(START, aujourdhui())));

  /* ---------- État ---------- */
  let E;
  try { E = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { E = {}; }
  E.reglages = Object.assign({ exam: EXAM_DEFAUT, libre: false }, E.reglages || {});
  E.p = E.p || {};
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(E)); } catch (e) {} };
  const etat = (id) => (E.p[id] = E.p[id] || { pistes: 0, essais: 0 });

  // statut : null | "parfait" | "reussi" | "vu"
  function statut(p) {
    const s = E.p[p.id];
    if (!s || !s.fini) return null;
    if (p.type === "demo") {
      const n = (p.bareme || []).length || 1;
      const ok = (s.bareme || []).filter(Boolean).length;
      if (ok === n && s.pistes === 0) return "parfait";
      if (ok * 2 >= n) return "reussi";
      return "vu";
    }
    if (s.juste) return s.pistes === 0 && s.essais <= 1 ? "parfait" : "reussi";
    return "vu";
  }
  function etoiles(p) {
    const st = statut(p), s = E.p[p.id] || {};
    if (st === "parfait") return 3;
    if (st === "reussi") return s.pistes <= 2 ? 2 : 1;
    return 0;
  }
  // On peut avancer : tout problème jusqu'au premier non terminé est ouvert, même au-delà du jour J.
  const premierNonFini = () => { const k = PLANNING.findIndex((p) => !(E.p[p.id] && E.p[p.id].fini)); return k < 0 ? TOTAL - 1 : k; };
  const maxOuvert = () => Math.max(indexAujourdhui(), premierNonFini());
  const accessible = (i) => E.reglages.libre || i <= maxOuvert();
  // Page d'accueil : le problème du jour s'il n'est pas fait, sinon le prochain à faire (rattrapage ou avance).
  function indexAccueil() {
    const iAuj = indexAujourdhui(), p = PLANNING[iAuj];
    if (!(E.p[p.id] && E.p[p.id].fini)) return iAuj;
    const k = PLANNING.findIndex((q) => !(E.p[q.id] && E.p[q.id].fini));
    return k < 0 ? iAuj : k;
  }

  function serie() {
    let i = indexAujourdhui();
    if (!statut(PLANNING[i])) i--;
    let n = 0;
    while (i >= 0 && statut(PLANNING[i])) { n++; i--; }
    return n;
  }

  /* ---------- Utilitaires ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const app = $("#app");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const tc = (t) => `style="--tc:${THEMES[t].c}"`;
  const chipTheme = (t) => `<span class="chip" ${tc(t)}>${THEMES[t].ico} ${THEMES[t].nom}</span>`;
  const starsTxt = (n) => "★".repeat(n) + "☆".repeat(3 - n);

  function norm(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/\s+/g, "").replace(/,/g, ".").replace(/[−–—]/g, "-").replace(/\.$/, "").replace(/^\+/, "");
  }
  function num(s) {
    s = norm(s);
    if (/^-?\d+(\.\d+)?$/.test(s)) return parseFloat(s);
    const m = s.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
    if (m && parseFloat(m[2]) !== 0) return parseFloat(m[1]) / parseFloat(m[2]);
    return null;
  }
  function estJuste(p, rep) {
    const r = norm(rep), rn = num(rep);
    return (p.reponse || []).some((a) => norm(a) === r || (rn !== null && num(a) !== null && Math.abs(num(a) - rn) < 1e-9));
  }

  /* ---------- En-tête ---------- */
  function renderStatsMini() {
    const jExam = diffJours(aujourdhui(), E.reglages.exam);
    const tot = PLANNING.reduce((a, p) => a + etoiles(p), 0);
    $("#statsMini").innerHTML =
      `<span class="pill" title="Jours consécutifs">🔥 ${serie()}</span>` +
      `<span class="pill" title="Étoiles gagnées">⭐ ${tot}</span>` +
      `<span class="pill hide-sm" title="Avant la Coupe">⏳ J−${Math.max(0, jExam)}</span>`;
  }

  /* ---------- Vue : problème du jour ---------- */
  function vueJour(i, accueil) {
    indexAffiche = i; estAccueil = !!accueil;
    i = Math.max(0, Math.min(TOTAL - 1, i));
    if (!TOTAL) { app.innerHTML = `<div class="card">Aucun problème chargé.</div>`; return; }
    const iAuj = indexAujourdhui();
    const avantDebut = diffJours(START, aujourdhui()) < 0;
    if (!accessible(i)) { location.hash = "#jour/" + maxOuvert(); return; }

    const p = PLANNING[i];
    const s = etat(p.id);
    const date = dateDuJour(i);
    const jExam = diffJours(aujourdhui(), E.reglages.exam);
    const totalJ = Math.max(1, diffJours(START, E.reglages.exam));
    const pct = Math.min(100, Math.max(0, (diffJours(START, aujourdhui()) / totalJ) * 100));
    const estAuj = i === iAuj || accueil;
    const faitsAuj = PLANNING.filter((q) => E.p[q.id] && E.p[q.id].le === aujourdhui()).length;
    const titreHero = avantDebut ? "C'est parti demain !" : i === iAuj ? "Le problème du jour" : i > iAuj ? "Tu es en avance ! 🚀" : "Rattrapage";
    const sousHero = avantDebut ? "Premier problème le " + joliDate(START) + " — tu peux déjà y jeter un œil."
      : joliDate(aujourdhui()) + " · problème " + (i + 1) + " sur " + TOTAL + (faitsAuj ? " · " + faitsAuj + " fait" + (faitsAuj > 1 ? "s" : "") + " aujourd'hui" : "");

    const hero = estAuj ? `
      <section class="hero">
        <div>
          <h1>${titreHero}</h1>
          <p>${sousHero}</p>
        </div>
        <div class="countdown"><b>J−${Math.max(0, jExam)}</b><span>avant la Coupe Animath</span></div>
        <div class="bar"><i style="width:${pct}%"></i></div>
      </section>` : "";

    const prev = i > 0 ? `<a class="btn ghost" href="#jour/${i - 1}">← Jour ${i}</a>` : `<span></span>`;
    const next = i < TOTAL - 1 && accessible(i + 1) ? `<a class="btn ghost" href="#jour/${i + 1}">Jour ${i + 2} →</a>` :
      (!estAuj ? `<a class="btn ghost" href="#aujourdhui">Aujourd'hui →</a>` : `<span></span>`);

    const nbP = p.pistes.length;
    const typeLbl = p.type === "demo" ? "✍️ Démonstration" : "🎯 Réponse";

    app.innerHTML = `
      ${hero}
      <div class="nav-days">${prev}${next}</div>
      <article class="card">
        <div class="meta">
          ${chipTheme(p.theme)}
          <span class="chip type">${typeLbl}</span>
          <span class="stars" title="Difficulté">${"◆".repeat(p.niveau)}${"◇".repeat(3 - p.niveau)}</span>
          <span class="day-label">Jour ${i + 1} · ${joliDate(date)}</span>
        </div>
        <h2>${p.titre}</h2>
        <div class="enonce">${p.enonce}</div>
        ${p.figure ? `<div class="figure">${p.figure}</div>` : ""}

        <div class="section-title">Brouillon</div>
        <textarea class="brouillon" id="brouillon" placeholder="Tes idées, essais, calculs… (sauvegardé automatiquement). Pour une démonstration, rédige plutôt sur papier !">${esc(s.brouillon || "")}</textarea>

        <div class="section-title">${p.type === "demo" ? "Ta démonstration" : "Ta réponse"}</div>
        <div id="zoneReponse"></div>

        <div class="section-title">Pistes (${s.pistes}/${nbP})</div>
        <div id="zonePistes"></div>

        <div id="zoneFin"></div>
      </article>`;

    $("#brouillon").addEventListener("input", (e) => { s.brouillon = e.target.value; save(); });
    rendreReponse(p, s);
    rendrePistes(p, s);
    rendreFin(p, s);
  }

  function rendreReponse(p, s) {
    const z = $("#zoneReponse");
    if (p.type === "reponse") {
      if (s.fini) {
        z.innerHTML = s.juste
          ? `<div class="feedback ok">✅ Bonne réponse : <b>${p.reponseTexte}</b>${s.essais > 1 ? ` (en ${s.essais} essais)` : " du premier coup !"}</div>`
          : `<div class="feedback info">La réponse était <b>${p.reponseTexte}</b>. Lis bien la correction, puis retente demain un problème du même thème.</div>`;
        return;
      }
      z.innerHTML = `
        <div class="answer-row">
          <input id="rep" inputmode="text" autocomplete="off" placeholder="Ta réponse (nombre, fraction 3/4…)" />
          <button class="btn" id="verif">Vérifier</button>
        </div>
        <div id="fb">${s.essais ? `<div class="feedback ko">${s.essais} essai${s.essais > 1 ? "s" : ""} pour l'instant — continue !</div>` : ""}</div>
        <div class="btn-row"><button class="btn ghost" id="abandon">Je donne ma langue au chat 🐱</button></div>`;
      const go = () => {
        const v = $("#rep").value.trim();
        if (!v) return;
        s.essais++;
        if (estJuste(p, v)) {
          s.juste = true; s.fini = true; s.le = aujourdhui(); save();
          vueRefresh(); confetti();
        } else {
          save();
          const msg = s.essais === 1 && s.pistes < p.pistes.length
            ? "Ce n'est pas ça… Relis l'énoncé ou débloque une piste ci-dessous."
            : "Toujours pas… Vérifie tes calculs sur un petit cas.";
          $("#fb").innerHTML = `<div class="feedback ko">❌ ${msg} (essai n°${s.essais})</div>`;
          $("#rep").select();
        }
      };
      $("#verif").onclick = go;
      $("#rep").addEventListener("keydown", (e) => e.key === "Enter" && go());
      $("#abandon").onclick = () => {
        if (!confirm("Afficher la réponse, la leçon et la correction ? Essaie d'abord toutes les pistes !")) return;
        s.fini = true; s.juste = false; s.le = aujourdhui(); save(); vueRefresh();
      };
    } else {
      if (s.fini) {
        z.innerHTML = `<div class="feedback info">Auto-évaluation ci-dessous : coche ce que ta rédaction contient vraiment.</div>`;
        return;
      }
      z.innerHTML = `
        <p style="margin-top:0;color:var(--ink-2)">Rédige ta preuve sur une feuille comme le jour de l'épreuve : phrases complètes, chaque étape justifiée. Quand tu as fini (ou si tu bloques après toutes les pistes), compare avec la correction.</p>
        <div class="btn-row">
          <button class="btn" id="fini">J'ai rédigé ma solution ✍️</button>
          <button class="btn ghost" id="abandon">Je bloque, montre-moi 🐱</button>
        </div>`;
      const fin = (abandon) => {
        s.fini = true; s.abandon = !!abandon; s.le = aujourdhui();
        s.bareme = (p.bareme || []).map(() => false); save(); vueRefresh();
      };
      $("#fini").onclick = () => fin(false);
      $("#abandon").onclick = () => { if (confirm("Afficher la correction ? Essaie d'abord toutes les pistes !")) fin(true); };
    }
  }

  function rendrePistes(p, s) {
    const z = $("#zonePistes");
    let h = "";
    for (let k = 0; k < s.pistes && k < p.pistes.length; k++) {
      h += `<div class="piste"><span class="n">${k + 1}</span>${p.pistes[k]}</div>`;
    }
    if (s.pistes < p.pistes.length) {
      const k = s.pistes;
      const txt = k === 0 ? "Bloqué·e ? La première piste lance la réflexion." :
        k === p.pistes.length - 1 ? "Dernière piste : elle te met sur la voie finale." : "Besoin d'un coup de pouce de plus ?";
      h += `<div class="piste-lock"><span>🔒 ${txt}</span><button class="btn soft" id="nextPiste">Voir la piste ${k + 1}/${p.pistes.length}</button></div>`;
    } else if (!s.fini) {
      h += `<p style="color:var(--ink-3);font-size:14px">Toutes les pistes sont ouvertes. Prends le temps de les combiner avant de regarder la correction.</p>`;
    }
    z.innerHTML = h;
    const b = $("#nextPiste");
    if (b) b.onclick = () => {
      s.pistes++; save(); rendrePistes(p, s);
      const pistes = z.querySelectorAll(".piste");
      pistes[pistes.length - 1].scrollIntoView({ behavior: "smooth", block: "center" });
      renderTitresPistes(p, s);
    };
  }
  function renderTitresPistes(p, s) {
    document.querySelectorAll(".section-title").forEach((el) => {
      if (el.textContent.startsWith("Pistes")) el.textContent = `Pistes (${s.pistes}/${p.pistes.length})`;
    });
  }

  function rendreFin(p, s) {
    const z = $("#zoneFin");
    if (!s.fini) { z.innerHTML = ""; return; }
    let bareme = "";
    if (p.type === "demo" && p.bareme && p.bareme.length) {
      bareme = `
        <div class="section-title">Auto-évaluation</div>
        <p style="margin:0;color:var(--ink-2)">Après avoir lu la correction, coche honnêtement les points présents dans <b>ta</b> rédaction :</p>
        <ul class="bareme">${p.bareme.map((b, k) => `<li><label><input type="checkbox" data-k="${k}" ${s.bareme && s.bareme[k] ? "checked" : ""}/> <span>${b}</span></label></li>`).join("")}</ul>`;
    }
    z.innerHTML = `
      <div class="section-title">Leçon</div>
      <div class="panel lecon"><h3>📘 ${p.lecon.titre}</h3>${p.lecon.html}</div>
      <div class="section-title">Correction</div>
      <div class="panel correction"><h3>✔️ Correction</h3>${p.correction}</div>
      ${bareme}
      <div id="bilan"></div>
      <div id="suivant"></div>`;
    z.querySelectorAll(".bareme input").forEach((cb) => cb.addEventListener("change", () => {
      s.bareme[+cb.dataset.k] = cb.checked; save(); rendreBilan(p); renderStatsMini();
    }));
    rendreBilan(p);
    const k = PLANNING.findIndex((q) => !(E.p[q.id] && E.p[q.id].fini));
    if (k >= 0) $("#suivant").innerHTML = `<div class="btn-row" style="justify-content:flex-end;margin-top:14px"><a class="btn" href="#jour/${k}">${k < indexAujourdhui() ? "Rattraper le problème " + (k + 1) : "Encore un ? Problème " + (k + 1)} →</a></div>`;
  }
  function rendreBilan(p) {
    const n = etoiles(p);
    const msgs = ["Pas d'étoile cette fois, mais tu as appris une technique : c'est ça qui compte.", "Une étoile ! Relis la leçon demain matin pour la fixer.", "Deux étoiles, beau travail !", "Trois étoiles, parfait ! 🏆"];
    $("#bilan").innerHTML = `<div class="done-banner"><span class="big">${starsTxt(n)}</span><span>${msgs[n]}</span></div>`;
  }

  function confetti() {
    const box = document.createElement("div");
    box.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:99;overflow:hidden";
    const cols = ["#4b3fd1", "#d9534f", "#1d8a7a", "#d9822b", "#8e44ad", "#f0b457"];
    for (let k = 0; k < 70; k++) {
      const c = document.createElement("i");
      const x = Math.random() * 100, d = 1.2 + Math.random() * 1.4, r = Math.random() * 360;
      c.style.cssText = `position:absolute;left:${x}vw;top:-12px;width:8px;height:12px;background:${cols[k % 6]};transform:rotate(${r}deg);border-radius:2px;transition:transform ${d}s ease-in, top ${d}s ease-in, opacity ${d}s`;
      box.appendChild(c);
      requestAnimationFrame(() => requestAnimationFrame(() => { c.style.top = "105vh"; c.style.transform = `rotate(${r + 540}deg) translateX(${(Math.random() - .5) * 200}px)`; c.style.opacity = ".6"; }));
    }
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 3000);
  }

  /* ---------- Vue : calendrier ---------- */
  function vueCalendrier() {
    const iAuj = indexAujourdhui();
    const mois = {};
    PLANNING.forEach((p, i) => { const d = dateDuJour(i); (mois[d.slice(0, 7)] = mois[d.slice(0, 7)] || []).push(i); });
    let h = `<h2 style="font-family:var(--serif);margin:10px 0 4px">Calendrier de préparation</h2>
      <p style="color:var(--ink-2);margin:0">Du ${joliDate(START)} jusqu'à la Coupe. Clique sur un jour pour rattraper un problème — ou prendre de l'avance : dès que tu termines un problème, le suivant s'ouvre.</p>
      <div class="legend">
        <span><i style="background:var(--ok)"></i>Parfait</span>
        <span><i style="background:color-mix(in srgb,var(--ok) 55%,var(--card))"></i>Réussi</span>
        <span><i style="background:var(--warn-soft);border:1px solid var(--warn)"></i>Correction lue</span>
        <span><i style="background:var(--ko-soft);border:1px solid var(--ko)"></i>À rattraper</span>
      </div>`;
    Object.keys(mois).forEach((k) => {
      const [y, m] = k.split("-").map(Number);
      const premier = new Date(y, m - 1, 1).getDay();
      const nbJ = new Date(y, m, 0).getDate();
      h += `<div class="month"><h3>${MOIS[m - 1]} ${y}</h3><div class="grid7">`;
      ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"].forEach((d) => (h += `<div class="dow">${d}</div>`));
      for (let e = 0; e < (premier + 6) % 7; e++) h += `<div class="day empty"></div>`;
      for (let d = 1; d <= nbJ; d++) {
        const ds = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
        const i = diffJours(START, ds);
        if (i < 0 || i >= TOTAL) { h += `<div class="day off">${d}</div>`; continue; }
        const p = PLANNING[i], st = statut(p);
        let cls = "day";
        if (st) cls += " s-" + st;
        else if (i < iAuj) cls += " s-manque";
        if (i === iAuj) cls += " today";
        if (!accessible(i)) cls += " future";
        const inner = `<span class="dot" ${tc(p.theme)}></span>${d}<small>${st ? starsTxt(etoiles(p)).replace(/☆/g, "") || "·" : THEMES[p.theme].ico}</small>`;
        h += accessible(i) ? `<a class="${cls}" href="#jour/${i}" title="${esc(THEMES[p.theme].nom)}">${inner}</a>` : `<div class="${cls}">${inner}</div>`;
      }
      h += `</div></div>`;
    });
    app.innerHTML = h;
  }

  /* ---------- Vue : leçons ---------- */
  let filtreLecon = "tous";
  function vueCours() {
    const iAuj = indexAujourdhui();
    let h = `<h2 style="font-family:var(--serif);margin:10px 0 4px">Mes leçons</h2>
      <p style="color:var(--ink-2);margin:0 0 12px">Chaque problème terminé débloque sa leçon ici. C'est ta boîte à outils pour le jour J : relis-la régulièrement.</p>
      <div class="filters">${["tous", ...ORDRE].map((t) => `<button data-f="${t}" class="${filtreLecon === t ? "on" : ""}">${t === "tous" ? "Toutes" : THEMES[t].ico + " " + THEMES[t].nom}</button>`).join("")}</div>`;
    let nbOuv = 0, nb = 0;
    PLANNING.forEach((p, i) => {
      if (filtreLecon !== "tous" && p.theme !== filtreLecon) return;
      nb++;
      const ouvert = E.p[p.id] && E.p[p.id].fini;
      if (ouvert) nbOuv++;
      if (!ouvert && i > iAuj && !E.reglages.libre) return;
      h += ouvert
        ? `<details class="lesson"><summary>${chipTheme(p.theme)}<span>${p.lecon.titre}</span><span class="when">jour ${i + 1}</span></summary><div class="body">${p.lecon.html}<p><a href="#jour/${i}">→ Revoir le problème « ${p.titre} »</a></p></div></details>`
        : `<details class="lesson locked"><summary onclick="return false">${chipTheme(p.theme)}<span>🔒 Termine le problème du jour ${i + 1} pour débloquer</span><span class="when">jour ${i + 1}</span></summary></details>`;
    });
    h = h.replace("</p>\n      <div class=\"filters\">", ` <b>${nbOuv}/${nb}</b> débloquées.</p>\n      <div class="filters">`);
    app.innerHTML = h;
    app.querySelectorAll(".filters button").forEach((b) => (b.onclick = () => { filtreLecon = b.dataset.f; vueCours(); }));
  }

  /* ---------- Vue : progrès ---------- */
  function vueProgres() {
    const iAuj = indexAujourdhui();
    const faits = PLANNING.filter((p) => statut(p));
    const parfaits = faits.filter((p) => statut(p) === "parfait").length;
    const reussis = faits.filter((p) => ["parfait", "reussi"].includes(statut(p))).length;
    const pistesTot = faits.reduce((a, p) => a + (E.p[p.id].pistes || 0), 0);
    const aRattraper = PLANNING.slice(0, iAuj).filter((p) => !statut(p)).length;
    const etoilesTot = PLANNING.reduce((a, p) => a + etoiles(p), 0);
    let meilleure = 0, cur = 0;
    PLANNING.forEach((p) => { cur = statut(p) ? cur + 1 : 0; meilleure = Math.max(meilleure, cur); });

    let h = `<h2 style="font-family:var(--serif);margin:10px 0 12px">Ma progression</h2>
      <div class="kpis">
        <div class="kpi"><b>${faits.length}<small style="font-size:16px;color:var(--ink-3)">/${TOTAL}</small></b><span>problèmes travaillés</span></div>
        <div class="kpi"><b>${reussis}</b><span>réussis (dont ${parfaits} parfaits)</span></div>
        <div class="kpi"><b>⭐ ${etoilesTot}</b><span>étoiles sur ${TOTAL * 3}</span></div>
        <div class="kpi"><b>🔥 ${serie()}</b><span>série actuelle (record ${meilleure})</span></div>
        <div class="kpi"><b>${faits.length ? (pistesTot / faits.length).toFixed(1) : "–"}</b><span>pistes par problème</span></div>
        <div class="kpi"><b>${aRattraper}</b><span>jours à rattraper</span></div>
      </div>
      <div class="card"><h3 style="margin-top:0">Par thème</h3>`;
    ORDRE.forEach((t) => {
      const ps = PLANNING.filter((p) => p.theme === t);
      const et = ps.reduce((a, p) => a + etoiles(p), 0);
      const f = ps.filter((p) => statut(p)).length;
      h += `<div class="theme-row" ${tc(t)}><span class="name">${THEMES[t].ico} ${THEMES[t].nom}</span><span class="track"><i style="width:${(et / (ps.length * 3 || 1)) * 100}%"></i></span><span class="val">${f}/${ps.length} · ${et}⭐</span></div>`;
    });
    const faible = ORDRE.map((t) => {
      const ps = PLANNING.filter((p) => p.theme === t && statut(p));
      return { t, moy: ps.length ? ps.reduce((a, p) => a + etoiles(p), 0) / ps.length : null };
    }).filter((x) => x.moy !== null).sort((a, b) => a.moy - b.moy)[0];
    if (faible && faits.length >= 5) h += `<p style="color:var(--ink-2);margin-bottom:0">👉 Thème à consolider : <b>${THEMES[faible.t].nom}</b>. Relis ses leçons dans l'onglet Leçons.</p>`;
    h += `</div><div class="card"><h3 style="margin-top:0">Badges</h3><div class="badges">`;
    const parT = (t) => PLANNING.filter((p) => p.theme === t && ["parfait", "reussi"].includes(statut(p))).length;
    const demos = faits.filter((p) => p.type === "demo" && ["parfait", "reussi"].includes(statut(p))).length;
    const badges = [
      ["🚀", "Premier pas", "1er problème", faits.length >= 1],
      ["🔥", "Une semaine", "série de 7 jours", meilleure >= 7],
      ["🌋", "Un mois", "série de 30 jours", meilleure >= 30],
      ["🎯", "Sniper", "10 réponses parfaites", parfaits >= 10],
      ["✍️", "Plume d'or", "10 démonstrations réussies", demos >= 10],
      ["📚", "Cinquante", "50 problèmes", faits.length >= 50],
      ["💯", "Centurion", "100 problèmes", faits.length >= 100],
      ...ORDRE.map((t) => [THEMES[t].ico, "Expert·e " + THEMES[t].nom.toLowerCase(), "15 réussis en " + THEMES[t].nom.toLowerCase(), parT(t) >= 15]),
      ["🏆", "Prêt·e pour la Coupe", "tous les problèmes", faits.length >= TOTAL],
    ];
    badges.forEach(([ico, n, d, ok]) => (h += `<div class="badge ${ok ? "" : "off"}"><div class="ico">${ico}</div><b>${n}</b><small>${d}</small></div>`));
    h += `</div></div>`;
    app.innerHTML = h;
  }

  /* ---------- Vue : méthode ---------- */
  function vueMethode() {
    app.innerHTML = `<div class="card prose">
      <h2 style="margin-top:0">Comment utiliser cette appli</h2>
      <ol>
        <li><b>Au moins un problème par jour</b>, environ 20 à 40 minutes chacun. Tu en veux plus ? Dès qu'un problème est terminé, le suivant se débloque : tu peux prendre de l'avance. Les thèmes tournent : arithmétique, algèbre, géométrie, dénombrement, logique. La difficulté augmente au fil des mois.</li>
        <li><b>Cherche d'abord seul·e au moins 10 minutes</b> au brouillon : petits cas, dessin, tableau.</li>
        <li><b>Débloque les pistes une par une</b>, et recherche un moment après chacune. Elles sont faites pour te guider pas à pas, pas pour te donner la réponse.</li>
        <li><b>Lis la leçon puis la correction</b>, même quand tu as trouvé : la rédaction modèle t'apprend comment convaincre le jury.</li>
        <li>Un jour raté ? Rattrape-le depuis le <a href="#calendrier">calendrier</a>.</li>
      </ol>

      <h3>Les deux types d'exercices</h3>
      <p><b>🎯 Réponse</b> : seul le résultat compte. Vérifie-le sur un cas particulier, relis la question (on demande le nombre de… ? la somme ? le plus petit ?).</p>
      <p><b>✍️ Démonstration</b> : il faut <i>prouver</i>. Une réponse juste sans justification rapporte très peu. Après la correction, l'appli te propose une <b>auto-évaluation</b> : coche les points clés présents dans ta copie.</p>

      <h3>Bien rédiger une démonstration</h3>
      <ul>
        <li>Annonce ce que tu vas montrer, puis enchaîne des phrases : « Comme…, on a… donc… ».</li>
        <li>Chaque affirmation est justifiée par un théorème, un calcul ou une étape précédente.</li>
        <li>« Trouver tous les… » = deux parties : <b>ces valeurs marchent</b> (vérification) <b>et il n'y en a pas d'autres</b>.</li>
        <li>Un exemple ne prouve pas un « pour tout ». Un seul contre-exemple suffit pour montrer qu'une affirmation est fausse.</li>
        <li>Si tu ne finis pas, rédige proprement ce que tu as trouvé : les résultats partiels rapportent des points.</li>
      </ul>

      <h3>Réflexes olympiques</h3>
      <ul>
        <li><b>Essayer des petits cas</b> et chercher un motif.</li>
        <li><b>Faire une figure juste et grande</b> en géométrie.</li>
        <li><b>Regarder les restes</b> (parité, modulo 3, 9…) en arithmétique.</li>
        <li><b>Chercher ce qui ne change pas</b> (invariant) quand on répète une opération.</li>
        <li><b>Considérer le cas extrême</b> : le plus grand, le plus petit, le premier…</li>
      </ul>

      <h3>Le plan jusqu'en avril</h3>
      <ul>
        <li><b>Automne</b> : les outils de base de chaque thème (niveau ◆).</li>
        <li><b>Hiver</b> : problèmes standards de compétition (niveau ◆◆), rédaction plus exigeante.</li>
        <li><b>Printemps</b> : problèmes difficiles (◆◆◆) au niveau de la fin du sujet. La dernière semaine, relis toutes tes leçons !</li>
      </ul>
    </div>`;
  }

  /* ---------- Vue : réglages ---------- */
  function vueReglages() {
    app.innerHTML = `<div class="card settings">
      <h2 style="margin-top:0;font-family:var(--serif)">Réglages</h2>
      <label for="exam">Date de la Coupe Animath de printemps</label>
      <input type="date" id="exam" value="${E.reglages.exam}" />
      <p style="color:var(--ink-3);font-size:14px">Sert au compte à rebours. Le planning compte ${TOTAL} problèmes du ${joliDate(START)} au ${joliDate(dateDuJour(TOTAL - 1))}.</p>
      <label class="check"><input type="checkbox" id="libre" ${E.reglages.libre ? "checked" : ""}/> Mode libre : débloquer tous les problèmes (pour un parent ou un professeur)</label>
      <div class="btn-row" style="margin-top:22px">
        <button class="btn ghost" id="export">Exporter ma progression</button>
        <button class="btn ghost" id="import">Importer</button>
        <button class="btn ghost" id="reset" style="color:var(--ko)">Tout effacer</button>
      </div>
    </div>`;
    $("#exam").onchange = (e) => { if (e.target.value) { E.reglages.exam = e.target.value; save(); renderStatsMini(); } };
    $("#libre").onchange = (e) => { E.reglages.libre = e.target.checked; save(); };
    $("#export").onclick = () => {
      const blob = new Blob([JSON.stringify(E)], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "progression-animath.json"; a.click();
    };
    $("#import").onclick = () => {
      const inp = document.createElement("input"); inp.type = "file"; inp.accept = "application/json";
      inp.onchange = () => inp.files[0].text().then((t) => { try { E = JSON.parse(t); save(); location.reload(); } catch (e) { alert("Fichier invalide"); } });
      inp.click();
    };
    $("#reset").onclick = () => { if (confirm("Effacer toute la progression ?")) { localStorage.removeItem(KEY); location.reload(); } };
  }

  /* ---------- Routeur ---------- */
  let indexAffiche = null; // re-dessiner le même problème après une action (sans sauter au suivant)
  function vueRefresh() { if (indexAffiche !== null) { renderStatsMini(); vueJour(indexAffiche, estAccueil); } else route(); }
  let estAccueil = false;
  function route() {
    const h = location.hash.replace(/^#/, "") || "aujourdhui";
    const [nom, arg] = h.split("/");
    document.querySelectorAll("#tabs a").forEach((a) => a.classList.toggle("on", a.dataset.tab === (nom === "jour" ? "aujourdhui" : nom)));
    renderStatsMini();
    indexAffiche = null;
    if (nom === "jour") vueJour(parseInt(arg, 10) || 0);
    else if (nom === "calendrier") vueCalendrier();
    else if (nom === "cours") vueCours();
    else if (nom === "progres") vueProgres();
    else if (nom === "methode") vueMethode();
    else if (nom === "reglages") vueReglages();
    else vueJour(indexAccueil(), true);
  }
  window.addEventListener("hashchange", () => { route(); window.scrollTo(0, 0); });
  route();
})();
