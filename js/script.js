// Lova Telo — behaviour: mobile nav toggle + scroll-spy on the three app sections.
const translations = {
  mg: {
    nav_bible: "Soratra Masina",
    nav_fanorona: "LakaBe Fanorona",
    nav_calendar: "Alimanaka",
    hero_eyebrow: "Fitehirizana teknolojia malagasy",
    hero_title_accent: "Iray ny fikasana.",
    hero_lead: "Ny Baiboly vakiana isan'andro, ny lalao nampifandraisana taranaka maro, nifandimby — natao ho an'ny fitaovana manaraka ny taona, kanefa mitazona ny votoatiny.",
    hero_scroll: "Hijerena ny telo",
    bible_eyebrow: "01 — Famakiana",
    bible_title: "Soratra Masina",
    bible_desc: "Application famakiana Baiboly, natao mba ho namana isan'andro: mari-pamantarana miloko ny andininy tianao hotsarovana, fanoratana naoty manokana eo am-pamakiana, fikarohana haingana amin'ny andininy rehetra, ary fizarana na fanaovana kopy ny andininy iray na toko iray manontolo amin'ny hiaraha-mamaky.",
    bible_feat_1: "Marika miloko amin'ny andininy",
    bible_feat_2: "Naoty mifandray amin'ny toko sy andininy",
    bible_feat_3: "Fikarohana amin'ny andininy rehetra",
    bible_feat_4: "Kopia sy fizarana toko iray manontolo",
    fanorona_eyebrow: "02 — Filalaovana",
    fanorona_title: "Lakabe Fanorona",
    fanorona_desc: "Ny fanorona dia lalao malaza teto Madagasikara hatramin'ny ela, izay mampiasa saina: ny fisamborana vato ataon'ny mpilalao amin'ny fandalovana na fisintonana no mahatonga ny fifandonana isaky ny fihetsika iray. Ity application ity dia mitondra io lalao io ao anaty fitaovana finday na desktop, ho an'izay te-hifampiseho na hifanandrina amin'ny sakaiza.",
    fanorona_feat_1: "Fanorona amin'ny fomba nentim-paharazana",
    fanorona_feat_2: "Fisamborana amin'ny fandalovana sy fisintonana",
    fanorona_feat_3: "Milalao amin'ny olona iray hafa eo amin'ny finday iray",
    fanorona_feat_4: "Fampahatsiahivana ny fitsipiky ny lalao",
    cal_eyebrow: "03 — Kalendrie ara-pinoana",
    cal_title: "Alimanaka",
    cal_desc: "Ny Alimanaka dia kalendrie litorjika katolika, manaraka ny tsingerin-taona ara-pivavahana (Fiaviana, Karemy, Paka, sns.) sy ny loko litorjika mifanaraka amin'ny vanim-potoana tsirairay. Miaraka amin'izany, misy ny rakitry ny Olomasina — tantaram-piainan'ny Olomasina tsirairay mbamin'ny fetiny — mba hahafahan'ny mpampiasa mahafantatra sy mankalaza ny Olomasina isan'andro.",
    cal_feat_1: "Kalendrie litorjika katolika isan'andro",
    cal_feat_2: "Tsingerin-taona sy loko litorjika",
    cal_feat_3: "Rakitry ny Olomasina — tantara sy fetiny",
    cal_feat_4: "Fikarohana Olomasina manokana",

    // Fizarana HAFA
    other_title: "Hafa",
    other_desc: "Karazana lalao ho an'ny ankizy toy ny Fanorona 5 sy Fanorona 3 ary ny Volana izay natao handalinana ny teny Malagasy. Marihana fa ho an'i Android daholo ireto.",

    // FOOTER
    footer_zip_note: "Ny fichier rehetra halainao ato dia zip avokoa. Ny antony voalohany dia mba ho maivana ny fakana azy ary  mba tsisy sakana eo ampisotonana azy amin'ny mety ahiahy ny system hoe virus.",
    footer_author: "2026 - Mpanoratra RASOLOMANANA Heritiana Noe."
  },
  fr: {
    nav_bible: "Sainte Bible",
    nav_fanorona: "LakaBe Fanorona",
    nav_calendar: "Almanach",
    hero_eyebrow: "Conservatoire de technologies malgaches",
    hero_title_accent: "Une vision unique.",
    hero_lead: "La Bible quotidienne et le jeu traditionnel reliant les générations — conçus pour les appareils modernes tout en préservant leur essence d'origine.",
    hero_scroll: "Découvrir les trois",
    bible_eyebrow: "01 — Lecture",
    bible_title: "Sainte Bible",
    bible_desc: "Une application de lecture biblique conçue pour être votre compagnon quotidien: surlignage couleur des versets clés, prise de notes personnelles, recherche rapide dans tous les textes et partage facile de versets ou de chapitres entiers.",
    bible_feat_1: "Surlignage en couleur des versets",
    bible_feat_2: "Notes liées aux chapitres et versets",
    bible_feat_3: "Recherche rapide dans tous les versets",
    bible_feat_4: "Copie et partage de chapitres entiers",
    fanorona_eyebrow: "02 — Jeu",
    fanorona_title: "Lakabe Fanorona",
    fanorona_desc: "Le Fanorona est un jeu traditionnel malgache de stratégie et de réflexion: la capture de pièces par approche ou retrait rend chaque coup passionnant. Cette application l'apporte sur mobile et ordinateur pour défier vos proches.",
    fanorona_feat_1: "Fanorona traditionnel complet",
    fanorona_feat_2: "Captures par approche et par retrait",
    fanorona_feat_3: "Mode 2 joueurs sur le même appareil",
    fanorona_feat_4: "Règles du jeu incluses",
    cal_eyebrow: "03 — Calendrier spirituel",
    cal_title: "Almanach",
    cal_desc: "Almanach est un calendrier liturgique catholique qui suit les temps forts de l'année (Avent, Carême, Pâques...) et leurs couleurs correspondantes. Il inclut une archive des saints avec leur histoire et date de fête quotidienne.",
    cal_feat_1: "Calendrier liturgique catholique quotidien",
    cal_feat_2: "Temps liturgiques et couleurs associées",
    cal_feat_3: "Registre des Saints — histoire et fêtes",
    cal_feat_4: "Recherche personnalisée de Saints",
    
    // Fizarana HAFA
    other_title: "Autres",
    other_desc: "Jeux pour enfants comme Fanorona 5 et Fanorona 3, ainsi que Volana conçu pour approfondir la langue malgache. Veuillez noter qu'ils sont tous destinés à Android.",

    // FOOTER
    footer_zip_note: "Tous les fichiers téléchargés ici sont au format ZIP. La raison principale est d'alléger le téléchargement et  d'éviter tout blocage lors de l'extraction dû aux fausses alertes de virus du système.",
    footer_author: "2026 - Auteur RASOLOMANANA Heritiana Noe."
  },
  en: {
    nav_bible: "Holy Bible",
    nav_fanorona: "LakaBe Fanorona",
    nav_calendar: "Almanac",
    hero_eyebrow: "Malagasy technology archive",
    hero_title_accent: "One shared vision.",
    hero_lead: "Daily scripture and traditional games connecting generations — crafted for modern devices while keeping their core essence intact.",
    hero_scroll: "Explore all three",
    bible_eyebrow: "01 — Reading",
    bible_title: "Holy Bible",
    bible_desc: "A Bible reading app designed as a daily companion: color-coded verse highlighting, personal note-taking while reading, fast search across all scriptures, and easy copying or sharing of verses and full chapters.",
    bible_feat_1: "Color highlighting for verses",
    bible_feat_2: "Notes linked to chapters and verses",
    bible_feat_3: "Fast search across all scriptures",
    bible_feat_4: "Copy and share full chapters",
    fanorona_eyebrow: "02 — Gaming",
    fanorona_title: "Lakabe Fanorona",
    fanorona_desc: "Fanorona is a historic Malagasy strategy board game: capturing pieces by approach or withdrawal creates tactical tension in every move. This application brings it to mobile and desktop for friendly matches.",
    fanorona_feat_1: "Traditional Fanorona gameplay",
    fanorona_feat_2: "Captures by approach and withdrawal",
    fanorona_feat_3: "Play with a friend on a single device",
    fanorona_feat_4: "In-game rules and reminders",
    cal_eyebrow: "03 — Spiritual Calendar",
    cal_title: "Almanac",
    cal_desc: "Almanac is a Catholic liturgical calendar following the sacred liturgical cycles (Advent, Lent, Easter, etc.) and seasonal colors. It features a rich archive of Saints' lives and feast days to discover every day.",
    cal_feat_1: "Daily Catholic liturgical calendar",
    cal_feat_2: "Liturgical cycles and seasonal colors",
    cal_feat_3: "Saints archive — life story & feast days",
    cal_feat_4: "Search for specific Saints",
    
    // Fizarana HAFA
    other_title: "Others",
    other_desc: "Games for kids such as Fanorona 5 and Fanorona 3, as well as Volana designed to explore the Malagasy language. Please note that these are all for Android.",

    // FOOTER
    footer_zip_note: "All files you download here are in ZIP format. The main reason is to make downloads lighter and  to prevent any blocking during extraction caused by false virus alerts from the system.",
    footer_author: "2026 - Author RASOLOMANANA Heritiana Noe."
  }
};

function changeLanguage(lang) {
  // Ampidirina ao amin'ny HTML attribute 'lang'
  document.documentElement.lang = lang;

  // Ovaina ny teksta rehetra manana data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.innerText = translations[lang][key];
    }
  });

  // Hamafisina ny boto mavitrika (active class)
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

(function () {
  "use strict";

  var toggle = document.getElementById("navToggle");
  var links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Highlight the current section's nav link as the user scrolls.
  var sections = document.querySelectorAll(".app[id]");
  var navLinks = document.querySelectorAll(".nav__links a");

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var map = {};
    navLinks.forEach(function (a) {
      map[a.getAttribute("href").replace("#", "")] = a;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (a) { a.style.color = ""; });
            var link = map[entry.target.id];
            if (link) link.style.color = "var(--tany)";
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach(function (s) { observer.observe(s); });
  }

  // Small confirmation nudge when a download link is used, in case the
  // .apk isn't in place yet (helps the owner notice a broken link fast).
  document.querySelectorAll(".dl").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var path = link.getAttribute("href");
      fetch(path, { method: "HEAD" })
        .then(function (res) {
          if (!res.ok) {
            e.preventDefault();
            console.warn("Tsy hita ny rakitra:", path, "— apetraho ao amin'ny lay downloads/ ilay .apk.");
          }
        })
        .catch(function () {
          /* Fetch may fail on file:// preview; let the normal download
             attempt proceed rather than blocking the user. */
        });
    });
  });
})();
